// app/admin/blog/new/page.jsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featured_image: "",
    author_name: "Admin",
    author_bio:
      "Content writer dan digital marketing enthusiast yang berbagi tips seputar bisnis digital.",
    is_published: true,
  });

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

    if (!slug) {
      setError("Slug tidak boleh kosong");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, slug }),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/admin/blog");
      } else {
        setError(result.error || "Gagal menyimpan artikel");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Terjadi kesalahan saat menyimpan artikel");
    } finally {
      setLoading(false);
    }
  };

  const authorInitials = getInitials(formData.author_name);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/admin/blog">
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition">
              <ArrowLeft size={20} />
              Kembali
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">
            Buat Artikel Baru
          </h1>
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
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/400x300?text=Invalid+Image+URL";
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Konten (Markdown) <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="15"
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
              />
              Publikasikan sekarang
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50"
            >
              {loading ? "Menyimpan..." : "Simpan Artikel"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
