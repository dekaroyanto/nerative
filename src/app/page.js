// app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
