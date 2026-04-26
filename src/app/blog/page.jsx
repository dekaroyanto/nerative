// app/blog/page.jsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getInitials } from "@/utils/getInitials";

// export const metadata = {
//   title: "Blog Digital Marketing & Website Development",
//   description:
//     "Baca artikel terbaru tentang digital marketing, tips mengelola marketplace, pengembangan website, dan strategi bisnis online dari para ahli Sogi.",
//   openGraph: {
//     title: "Blog Sogi | Tips Digital Marketing & Website",
//     description:
//       "Artikel-artikel bermanfaat untuk mengembangkan bisnis digital Anda.",
//     url: "https://sogi.vercel.app/blog",
//   },
// };

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data);
    }
    setLoading(false);
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Blog{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Sogi
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Artikel terbaru seputar digital marketing, pengembangan website, dan
            tips sukses berbisnis online
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-md mx-auto mb-12"
        >
          <input
            type="text"
            placeholder="Cari artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors shadow-sm"
          />
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              Belum ada artikel yang ditemukan
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        post.featured_image ||
                        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop"
                      }
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                        {getInitials(post.author_name)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {post.author_name || "Admin"}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar size={12} />
                          {new Date(post.published_at).toLocaleDateString(
                            "id-ID",
                          )}
                        </div>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                      {post.excerpt || post.content?.substring(0, 120) + "..."}
                    </p>
                    <div className="text-blue-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Baca Selengkapnya <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
