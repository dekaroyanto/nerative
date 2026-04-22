// components/CTA.jsx
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section id="kontak" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Siap Membawa Bisnis Anda ke Level Berikutnya?
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Jangan ragu untuk menghubungi tim kami. Kami akan dengan senang hati
            membantu Anda menemukan solusi digital terbaik.
          </p>
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail size={18} className="text-blue-500" />
              </div>
              <span className="text-gray-600">hello@nerative.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone size={18} className="text-blue-500" />
              </div>
              <span className="text-gray-600">+62 812 3456 7890</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin size={18} className="text-blue-500" />
              </div>
              <span className="text-gray-600">Jakarta, Indonesia</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Kirim Pesan</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Pesan"
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-xl font-medium"
            >
              Kirim Pesan
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
