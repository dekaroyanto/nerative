// components/Footer.jsx
"use client";
import { motion } from "framer-motion";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = () => {
  // Fungsi untuk smooth scroll ke section
  const smoothScrollTo = (elementId, e) => {
    if (e) e.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 80; // Tinggi navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Nerative
            </h3>
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
                <a
                  href="#layanan"
                  onClick={(e) => smoothScrollTo("layanan", e)}
                  className="hover:text-blue-400 transition-colors duration-200 inline-block"
                >
                  Pembuatan Website
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  onClick={(e) => smoothScrollTo("layanan", e)}
                  className="hover:text-blue-400 transition-colors duration-200 inline-block"
                >
                  Admin Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  onClick={(e) => smoothScrollTo("layanan", e)}
                  className="hover:text-blue-400 transition-colors duration-200 inline-block"
                >
                  Digital Advertising
                </a>
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
                <a
                  href="#beranda"
                  onClick={(e) => smoothScrollTo("beranda", e)}
                  className="hover:text-blue-400 transition-colors duration-200 inline-block"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  onClick={(e) => smoothScrollTo("layanan", e)}
                  className="hover:text-blue-400 transition-colors duration-200 inline-block"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#keunggulan"
                  onClick={(e) => smoothScrollTo("keunggulan", e)}
                  className="hover:text-blue-400 transition-colors duration-200 inline-block"
                >
                  Keunggulan
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  onClick={(e) => smoothScrollTo("portofolio", e)}
                  className="hover:text-blue-400 transition-colors duration-200 inline-block"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  onClick={(e) => smoothScrollTo("kontak", e)}
                  className="hover:text-blue-400 transition-colors duration-200 inline-block"
                >
                  Kontak
                </a>
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
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-green-400 transition-all duration-200 cursor-pointer inline-block"
                >
                  <BsWhatsapp size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInstagram}
                  className="text-gray-400 hover:text-pink-400 transition-all duration-200 cursor-pointer inline-block"
                >
                  <BsInstagram size={24} />
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm">
                <span className="block">📞 0882-0064-87100</span>
                <span className="block mt-1">
                  ✉️ nerative.contact@gmail.com
                </span>
              </p>
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
          <p>© 2025 Nerative. All rights reserved.</p>
          <p className="text-xs mt-1 text-gray-600">
            Dibangun dengan ❤️ untuk mendukung pertumbuhan bisnis digital Anda
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
