// components/Hero.jsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="layanan" className="pt-25 pb-20 px-6 max-w-7xl mx-auto">
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Tingkatkan{" "}
            <span className="bg-linear-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Bisnis Anda
            </span>{" "}
            Secara Digital
          </h1>
          <p className="text-gray-500 text-lg mt-6 leading-relaxed">
            Nerative hadir sebagai partner yang bisa diandalkan untuk bantu
            bisnis Anda tumbuh secara digital.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-blue-400 to-teal-400 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-md"
            >
              Mulai Sekarang <ArrowRight size={18} />
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 mt-8"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-linear-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-md text-sm">
                😊
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md text-sm">
                🚀
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-linear-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-md text-sm">
                💡
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-md text-sm">
                ⭐
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                +
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm font-semibold text-gray-700 ml-1">
                  4.9
                </span>
              </div>
              <p className="text-xs text-gray-500">Penilaian Klien</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <Image
            src="/images/banner/model.png"
            alt="Team working on digital solutions"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
