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
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Pembuatan Website",
    description:
      "Website modern, responsif, dan SEO-friendly untuk brand Anda. Dibangun dengan teknologi terkini.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: ShoppingBag,
    title: "Admin Marketplace",
    description:
      "Kelola toko Shopee, TikTok, dan Lazada Anda secara profesional. Produktivitas meningkat drastis.",
    image:
      "https://images.unsplash.com/photo-1603186943329-1a0e2c147b5c?w=400&h=300&fit=crop",
    color: "from-blue-500 to-indigo-400",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description:
      "Strategi iklan yang tepat sasaran untuk meningkatkan konversi dan ROI bisnis Anda.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
    color: "from-cyan-400 to-blue-500",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Layanan Unggulan
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
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
            whileHover={{ y: -10 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}
              />
            </div>
            <div className="p-6">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
              >
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-4 text-blue-500 font-medium flex items-center gap-1"
              >
                Pelajari <span>→</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
