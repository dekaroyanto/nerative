// components/WhyUs.jsx
"use client";
import { motion } from "framer-motion";
import {
  Clock,
  Award,
  Users,
  BarChart3,
  Headphones,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Cepat & Tepat Waktu",
    desc: "Pengerjaan sesuai deadline yang disepakati",
  },
  {
    icon: Award,
    title: "Berpengalaman",
    desc: "Tim ahli dengan portofolio terpercaya",
  },
  {
    icon: Users,
    title: "Pendampingan Personal",
    desc: "Konsultasi 1-on-1 dengan dedicated team",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    desc: "Setiap keputusan berdasarkan analisis data",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    desc: "Layanan bantuan yang responsif dan ramah",
  },
  { icon: Rocket, title: "Inovatif", desc: "Mengikuti tren teknologi terbaru" },
];

const WhyUs = () => {
  return (
    <section className="py-20 px-6 bg-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Mengapa Harus Nerative?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-blue-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl p-8 text-center text-white"
        >
          <p className="text-xl font-medium">
            Bergabunglah dengan 50+ bisnis yang sudah berkembang bersama kami
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold"
          >
            Konsultasi Sekarang
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
