// app/admin/blog/edit/[id]/page.jsx
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function EditBlogPage({ params }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featured_image: "",
    author_name: "Admin",
    author_bio: "",
    is_published: true,
  });

  useEffect(() => {
    fetchArticle();
  }, []);

  async function fetchArticle() {
    const { id } = await params;

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching article:", error);
      setError("Artikel tidak ditemukan");
    } else if (data) {
      setFormData({
        title: data.title || "",
        slug: data.slug || "",
        content: data.content || "",
        excerpt: data.excerpt || "",
        featured_image: data.featured_image || "",
        author_name: data.author_name || "Admin",
        author_bio: data.author_bio || "",
        is_published: data.is_published || false,
      });
    }
    setFetching(false);
  }

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const getInitials = (name) => {
    if (!name) return "AD";
    const names = name.split(" ");
    if (names.length === 1) return names[0].substring(0, 2).toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const slug = formData.slug || generateSlug(formData.title);
    const { id } = await params;

    try {
      const response = await fetch("/api/admin/blog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, ...formData, slug }),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/admin/blog");
      } else {
        setError(result.error || "Gagal menyimpan artikel");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat menyimpan artikel");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (
      !confirm(
        "Yakin ingin menghapus artikel ini? Tindakan ini tidak dapat dibatalkan!",
      )
    ) {
      return;
    }

    setLoading(true);
    const { id } = await params;

    const { error: deleteError } = await supabase
      .from("posts")
      .delete()
      .eq("id", id);

    if (deleteError) {
      setError(deleteError.message);
      setLoading(false);
    } else {
      router.push("/admin/blog");
    }
  };

  const authorInitials = getInitials(formData.author_name);

  if (fetching) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Link href="/admin/blog">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition">
                <ArrowLeft size={20} />
                Kembali
              </button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Edit Artikel</h1>
          </div>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            <Trash2 size={18} />
            Hapus
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              Judul Artikel <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:border-blue-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Slug (URL)</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              placeholder="Kosongkan untuk generate otomatis"
              className="w-full px-4 py-2 border rounded-lg focus:border-blue-300 focus:outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">
              Contoh: cara-memulai-bisnis-online
            </p>
          </div>

          {/* Author Section */}
          <div className="border-t pt-4 mt-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Informasi Penulis
            </h3>

            <div>
              <label className="block text-sm font-medium mb-1">
                Nama Penulis <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.author_name}
                onChange={(e) =>
                  setFormData({ ...formData, author_name: e.target.value })
                }
                placeholder="Contoh: Deka Royanto"
                className="w-full px-4 py-2 border rounded-lg focus:border-blue-300 focus:outline-none"
              />
              <p className="text-xs text-gray-400 mt-1">
                Avatar akan menggunakan inisial:{" "}
                <span className="font-mono bg-gray-100 px-1 rounded">
                  {authorInitials}
                </span>
              </p>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Bio Penulis
              </label>
              <textarea
                rows="3"
                value={formData.author_bio}
                onChange={(e) =>
                  setFormData({ ...formData, author_bio: e.target.value })
                }
                placeholder="Tuliskan biodata singkat penulis..."
                className="w-full px-4 py-2 border rounded-lg focus:border-blue-300 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Excerpt (Ringkasan)
            </label>
            <textarea
              rows="3"
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:border-blue-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Featured Image URL
            </label>
            <input
              type="url"
              value={formData.featured_image}
              onChange={(e) =>
                setFormData({ ...formData, featured_image: e.target.value })
              }
              placeholder="https://images.unsplash.com/..."
              className="w-full px-4 py-2 border rounded-lg focus:border-blue-300 focus:outline-none"
            />
            {formData.featured_image && (
              <div className="mt-2">
                <img
                  src={formData.featured_image}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Konten (Markdown) <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="20"
              required
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:border-blue-300 focus:outline-none font-mono text-sm"
              placeholder="Tulis konten dengan format Markdown..."
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.is_published}
                onChange={(e) =>
                  setFormData({ ...formData, is_published: e.target.checked })
                }
                className="w-4 h-4"
              />
              <span className="text-sm">Publikasikan artikel</span>
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50"
            >
              {loading ? "Menyimpan..." : "Simpan Perubahan"}
            </button>
            <Link href="/admin/blog">
              <button
                type="button"
                className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                Batal
              </button>
            </Link>
          </div>
        </form>

        {/* Preview Section */}
        <div className="mt-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Preview Artikel
          </h2>
          <div className="border-t pt-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold">
                {authorInitials}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {formData.author_name}
                </p>
                <p className="text-xs text-gray-500">Penulis</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {formData.title || "Judul Artikel"}
            </h3>
            <div className="prose prose-sm max-w-none">
              {formData.excerpt && (
                <p className="text-gray-600 italic">{formData.excerpt}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
