// app/og-image/route.jsx
import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get("title") || "Sogi - Solusi Digital untuk Bisnis Modern";
  const description =
    searchParams.get("description") ||
    "Jasa pembuatan website, admin marketplace Shopee/TikTok/Lazada, dan digital advertising";
  const useHeroImage = searchParams.get("useHero") !== "false";

  // Baca gambar hero dari public folder
  let heroImageBuffer = null;
  if (useHeroImage) {
    try {
      const imagePath = path.join(
        process.cwd(),
        "public/images/banner/modelamel.png",
      );
      heroImageBuffer = fs.readFileSync(imagePath);
    } catch (error) {
      console.error("Error loading hero image:", error);
    }
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#1e3a8a",
      }}
    >
      {/* Background Image (Hero) */}
      {heroImageBuffer ? (
        <img
          src={`data:image/png;base64,${heroImageBuffer.toString("base64")}`}
          alt="Hero Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        // Fallback gradient jika gambar tidak ditemukan
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
          }}
        />
      )}

      {/* Overlay gelap agar teks terbaca */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: 48,
            fontWeight: "bold",
            color: "white",
            marginBottom: 30,
            display: "flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "10px 20px",
            borderRadius: 60,
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Sogi</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: 20,
            maxWidth: "85%",
            lineHeight: 1.2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {title.length > 70 ? title.substring(0, 70) + "..." : title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.95)",
            textAlign: "center",
            maxWidth: "75%",
            lineHeight: 1.3,
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          {description.length > 120
            ? description.substring(0, 120) + "..."
            : description}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "rgba(255,255,255,0.9)",
            display: "flex",
            gap: 40,
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: "8px 24px",
            borderRadius: 40,
          }}
        >
          <span>💻 Pembuatan Website</span>
          <span>🛒 Admin Marketplace</span>
          <span>📢 Digital Advertising</span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
