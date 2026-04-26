import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Nerative - Solusi Digital untuk Bisnis Modern",
    template: "%s | Nerative",
  },
  description:
    "Nerative menyediakan jasa pembuatan website profesional, admin marketplace Shopee/TikTok/Lazada, dan digital advertising untuk mengembangkan bisnis Anda.",
  keywords: [
    "jasa pembuatan website",
    "admin marketplace",
    "digital advertising",
    "Shopee seller",
    "TikTok shop",
    "Lazada seller",
    "jasa iklan online",
    "bisnis digital",
    "UMKM digital",
  ],
  authors: [{ name: "Nerative Team" }],
  creator: "Nerative",
  publisher: "Nerative",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nerative - Solusi Digital untuk Bisnis Modern",
    description:
      "Jasa pembuatan website, admin marketplace, dan digital advertising terpercaya untuk bisnis Anda.",
    url: "https://nerative-official.vercel.app/",
    siteName: "Nerative",
    // images: [
    //   {
    //     url: "https://nerative-official.vercel.app/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Nerative - Solusi Digital",
    //   },
    // ],
    locale: "id_ID",
    type: "website",
  },

  alternates: {
    canonical: "https://nerative-official.vercel.app/",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
