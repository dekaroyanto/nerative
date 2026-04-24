// app/api/admin/blog/route.js
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Buat supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// GET: Ambil semua artikel
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Buat artikel baru
export async function POST(request) {
  try {
    const body = await request.json();

    // Validasi
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Judul dan konten wajib diisi" },
        { status: 400 },
      );
    }

    // Siapkan data
    const postData = {
      title: body.title,
      slug: body.slug || generateSlug(body.title),
      content: body.content,
      excerpt: body.excerpt || body.content.substring(0, 160),
      featured_image: body.featured_image || null,
      is_published: body.is_published || false,
      published_at: body.is_published ? new Date().toISOString() : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("posts")
      .insert([postData])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data: data[0] }, { status: 201 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Helper function generate slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "");
}
