// app/admin/blog/page.jsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setPosts(data);
    setLoading(false);
  }

  async function deletePost(id) {
    if (confirm("Yakin ingin menghapus artikel ini?")) {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (!error) {
        fetchPosts();
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manajemen Blog</h1>
          <Link href="/admin/blog/new">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Plus size={20} />
              Artikel Baru
            </button>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4">Judul</th>
                  <th className="text-left p-4">Slug</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Tanggal</th>
                  <th className="text-left p-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{post.title}</td>
                    <td className="p-4 text-gray-500 text-sm">{post.slug}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          post.is_published
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {post.is_published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500 text-sm">
                      {new Date(post.created_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="p-4 flex gap-3">
                      <Link href={`/admin/blog/edit/${post.id}`}>
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                      </Link>
                      <Link href={`/blog/${post.slug}`} target="_blank">
                        <button
                          className="text-green-500 hover:text-green-700"
                          title="Lihat"
                        >
                          <Eye size={18} />
                        </button>
                      </Link>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="text-red-500 hover:text-red-700"
                        title="Hapus"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
