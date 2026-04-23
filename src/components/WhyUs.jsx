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
  Star,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Cepat & Tepat Waktu",
    desc: "Pengerjaan sesuai deadline yang disepakati",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    desc: "Layanan bantuan yang responsif dan ramah",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Rocket,
    title: "Inovatif",
    desc: "Mengikuti tren terbaru",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
  },
];

const WhyUs = () => {
  return (
    <section id="keunggulan" className="relative py-24 px-6 overflow-hidden">
      {/* Background dengan efek modern */}
      <div className="absolute inset-0 -z-20">
        {/* Gradient utama */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/50" />

        {/* Animated blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Dot pattern - Perbaikan tanda petik */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.3) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold mb-4 shadow-lg"
          >
            <Star size={16} />
            Why Choose Us
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Mengapa Harus Nerative?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto mt-6 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Kami berkomitmen memberikan yang terbaik untuk kesuksesan bisnis
            Anda
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl`}
              />

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon Container */}
                <div className={`relative mb-5`}>
                  <div
                    className={`absolute inset-0 ${feature.bgColor} rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div
                    className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="text-white" size={28} />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>

                {/* Decorative Line */}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-300 rounded-b-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner dengan desain lebih menarik */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-20 overflow-hidden rounded-3xl"
        >
          {/* Background Gradient dengan efek */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500" />

          {/* Grid pattern - Perbaikan tanda petik */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Animated particles */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000" />

          <div className="relative p-10 md:p-12 text-center text-white">
            {/* Icon dekoratif */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Rocket size={32} className="text-white" />
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-bold mb-4">
              Bergabunglah dengan Kami
            </p>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Dapatkan konsultasi gratis dan penawaran menarik untuk bisnis Anda
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Konsultasi Sekarang
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
