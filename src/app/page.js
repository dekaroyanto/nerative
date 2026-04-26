// app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Solusi Digital untuk Bisnis Modern",
  description:
    "Nerative - Partner terpercaya untuk pembuatan website profesional, pengelolaan marketplace Shopee/TikTok/Lazada, dan strategi digital advertising yang efektif.",
  openGraph: {
    title: "Nerative - Solusi Digital untuk Bisnis Modern",
    description:
      "Tingkatkan bisnis Anda dengan layanan digital terbaik dari Nerative.",
  },
};

export default function Home() {
  return (
    <main
      className="bg-linear
    -to-b from-white via-blue-50/30 to-white"
    >
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
