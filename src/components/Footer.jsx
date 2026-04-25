// components/Footer.jsx
"use client";
import { motion } from "framer-motion";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isBlogPage =
    pathname?.startsWith("/blog") || pathname?.startsWith("/admin");

  // Fungsi untuk navigasi ke homepage dan scroll ke section tertentu
  const navigateToSection = (sectionId) => {
    // Jika sedang di halaman blog, pindah ke homepage dulu
    if (isBlogPage) {
      router.push(`/#${sectionId}`);
    } else {
      // Jika sudah di homepage, langsung scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Fungsi untuk handle link WhatsApp
  const handleWhatsApp = () => {
    const phoneNumber = "62882006487100";
    const message =
      "Halo Nerative, saya ingin berkonsultasi mengenai layanan digital";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  // Fungsi untuk handle link Instagram
  const handleInstagram = () => {
    window.open("https://instagram.com/nerative", "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => {
                if (isBlogPage) {
                  router.push("/");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-left cursor-pointer"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Nerative
              </h3>
            </button>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Solusi digital terpercaya untuk pertumbuhan bisnis Anda.
            </p>
          </motion.div>

          {/* Layanan Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-3 text-lg">Layanan</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => navigateToSection("layanan")}
                  className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  Pembuatan Website
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("layanan")}
                  className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  Admin Marketplace
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("layanan")}
                  className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  Digital Advertising
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Quick Link Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-3 text-lg">Quick Link</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => navigateToSection("beranda")}
                  className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("layanan")}
                  className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("keunggulan")}
                  className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  Keunggulan
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("portfolio")}
                  className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("kontak")}
                  className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  Kontak
                </button>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-400 transition-colors duration-200 inline-block"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Kontak Kami Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-3 text-lg">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-green-400 transition-all duration-200 cursor-pointer"
                >
                  <BsWhatsapp size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInstagram}
                  className="text-gray-400 hover:text-pink-400 transition-all duration-200 cursor-pointer"
                >
                  <BsInstagram size={24} />
                </motion.button>
              </div>
              <div className="text-gray-400 text-sm space-y-2">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer w-full"
                >
                  <span>📞</span>
                  <span>0882-0064-87100</span>
                </button>
                <a
                  href="mailto:nerative.contact@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <span>✉️</span>
                  <span>nerative.contact@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
        >
          <p>© 2026 Nerative. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
