// app/blog/[slug]/page.jsx
"use client";

import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogDetailPage({ params }) {
  // ✅ Unwrap params dengan React.use()
  const { slug } = use(params);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  async function fetchPost() {
    setLoading(true);

    // Fetch current post
    const { data: postData, error: postError } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (postError) {
      console.error("Error fetching post:", postError);
      setLoading(false);
      return;
    }

    setPost(postData);

    // Fetch related posts (same author or recent)
    if (postData) {
      const { data: relatedData } = await supabase
        .from("posts")
        .select("*")
        .eq("is_published", true)
        .neq("id", postData.id)
        .order("published_at", { ascending: false })
        .limit(3);

      setRelatedPosts(relatedData || []);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Artikel Tidak Ditemukan
          </h1>
          <p className="text-gray-500 mb-6">
            Maaf, artikel yang Anda cari tidak tersedia.
          </p>
          <Link href="/blog">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full">
              Kembali ke Blog
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={
              post.featured_image ||
              "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop"
            }
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 text-sm mb-4"
              >
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {new Date(post.published_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {post.title}
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <Link href="/blog">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition">
                  <ArrowLeft size={20} />
                  Kembali ke Blog
                </button>
              </Link>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    navigator.share?.({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  }}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Markdown Content */}
            <div className="prose prose-lg prose-blue max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-3xl font-bold mt-8 mb-4 text-gray-800"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-2xl font-semibold mt-6 mb-3 text-gray-800"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-xl font-semibold mt-5 mb-2 text-gray-800"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="text-gray-700 leading-relaxed mb-4"
                      {...props}
                    />
                  ),
                  img: ({ node, ...props }) => (
                    <img
                      className="rounded-xl w-full my-6 shadow-md"
                      {...props}
                      alt={props.alt || "Blog image"}
                    />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc pl-6 mb-4 text-gray-700"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal pl-6 mb-4 text-gray-700"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="mb-1" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-blue-400 pl-4 italic text-gray-600 my-4"
                      {...props}
                    />
                  ),
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline ? (
                      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code
                        className="bg-gray-100 text-rose-600 px-1 py-0.5 rounded text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200 mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Artikel Terkait
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={
                          related.featured_image ||
                          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=200&fit=crop"
                        }
                        alt={related.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar size={12} />
                        {new Date(related.published_at).toLocaleDateString(
                          "id-ID",
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2">
                        {related.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2">
                        {related.excerpt ||
                          related.content?.substring(0, 80) + "..."}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
