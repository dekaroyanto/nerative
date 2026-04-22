// components/Hero.jsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="layanan" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4"
          >
            Solusi Digital Terpercaya
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Tingkatkan{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Bisnis Anda
            </span>{" "}
            Secara Digital
          </h1>
          <p className="text-gray-500 text-lg mt-6 leading-relaxed">
            Nerative hadir sebagai partner terpercaya untuk mengembangkan bisnis
            Anda secara digital. Dari pembuatan website hingga pengelolaan
            marketplace, kami siap membantu.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-md"
            >
              Mulai Sekarang <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-200 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              Lihat Portofolio
            </motion.button>
          </div>
          <div className="flex gap-6 mt-10">
            {[
              "Website Profesional",
              "Manajemen Marketplace",
              "Iklan Efektif",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle size={16} className="text-blue-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=500&fit=crop"
              alt="Team working on digital solutions"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-400/10" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">+50</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Klien Puas</p>
              <p className="font-semibold text-gray-700">Proyek Selesai</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
