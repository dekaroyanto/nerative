// components/Footer.jsx
"use client";
import { motion } from "framer-motion";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Nerative
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Solusi digital terpercaya untuk pertumbuhan bisnis Anda.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Layanan</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Pembuatan Website
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Admin Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Digital Advertising
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Ikuti Kami</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                {/* <Facebook size={20} /> */}
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                {/* <Twitter size={20} /> */}
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                {/* <Instagram size={20} /> */}
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                {/* <Linkedin size={20} /> */}
              </motion.a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 Nerative. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
