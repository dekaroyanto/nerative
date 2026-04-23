// components/Services.jsx
"use client";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  Megaphone,
  TrendingUp,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Pembuatan Website",
    description:
      "Website modern, responsif, dan SEO-friendly untuk brand Anda. Dibangun dengan teknologi terkini.",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: ShoppingBag,
    title: "Admin Marketplace",
    description:
      "Kelola toko Shopee, TikTok, dan Lazada Anda secara profesional. Produktivitas meningkat drastis.",
    color: "from-indigo-500 to-purple-400",
    bgColor: "bg-indigo-50",
    features: ["Multi-Platform", "Inventory Management", "Analytics"],
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description:
      "Strategi iklan yang tepat sasaran untuk meningkatkan konversi dan ROI bisnis Anda.",
    color: "from-orange-500 to-red-400",
    bgColor: "bg-orange-50",
    features: ["Targeted Ads", "ROI Focused", "Performance Tracking"],
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
          >
            ✨ What We Offer
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Layanan Unggulan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Kami menyediakan solusi lengkap untuk kebutuhan digital bisnis Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl" />

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Icon with pulse animation */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 ${service.bgColor} rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="text-white" size={30} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <motion.div
                      key={fIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + fIdx * 0.05 }}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-blue-500 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-100 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
