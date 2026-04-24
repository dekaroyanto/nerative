// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Debug: Cek apakah environment variables tersedia (hanya di development)
if (typeof window !== "undefined") {
  console.log("Checking Supabase env vars:", {
    hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    urlPrefix: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30),
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validation dengan pesan error yang jelas
if (!supabaseUrl) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL is required. Please check your .env.local file",
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_ANON_KEY is required. Please check your .env.local file",
  );
}

// Create supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Optional: Test connection
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("count", { count: "exact", head: true });
    if (error) throw error;
    return { success: true, message: "Connected to Supabase successfully!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
