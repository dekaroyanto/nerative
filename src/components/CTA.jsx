// components/CTA.jsx
"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";
import { useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format pesan untuk WhatsApp
    const phoneNumber = "62882006487100"; // Nomor WhatsApp (tanpa 0, pakai kode negara 62)
    const message = `Halo Nerative! Saya ingin berkonsultasi.%0A%0A*Nama:* ${formData.name}%0A*Email:* ${formData.email}%0A*Pesan:* ${formData.message}`;

    // Buat URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, "_blank");

    // Tampilkan notifikasi terkirim
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="kontak" className="relative py-24 px-6 overflow-hidden">
      {/* Background dengan efek modern */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50/30 to-cyan-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-linear(circle, rgba(59,130,246,0.2) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold mb-4 shadow-lg"
          >
            <Send size={16} />
            Hubungi Kami
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Siap Membawa Bisnis Anda
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mt-2">
            ke Level Berikutnya?
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Section - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            {/* Testimonial/Stats */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed text-lg">
                Jangan ragu untuk menghubungi tim kami. Kami akan dengan senang
                hati membantu Anda menemukan solusi digital terbaik untuk bisnis
                Anda.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full" />
                Informasi Kontak
              </h3>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <span className="text-gray-700 font-medium">
                    nerative.contact@gmail.com
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://wa.me/62882006487100?text=Halo%20Nerative%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20digital",
                    "_blank",
                  );
                }}
              >
                <div className="w-12 h-12 bg-linear-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Telepon / WhatsApp
                  </p>
                  <span className="text-gray-700 font-medium">
                    0882006487100
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Alamat
                  </p>
                  <span className="text-gray-700 font-medium">
                    Kota Cirebon, Indonesia
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Working Hours */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Clock size={16} className="text-blue-500" />
                <span>Senin - Minggu: 09:00 - 18:00 WIB</span>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Form Header */}
            <div className="bg-linear-to-r from-blue-500 to-cyan-500 px-8 py-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Kirim Pesan
              </h3>
              <p className="text-blue-100">Kami akan merespon dalam 1x24 jam</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none transition-all peer"
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all peer-focus:text-xs peer-focus:-translate-y-5 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-5">
                  Nama Lengkap
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none transition-all peer"
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all peer-focus:text-xs peer-focus:-translate-y-5 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-5">
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder=" "
                  className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none transition-all peer resize-none"
                />
                <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:text-xs peer-focus:-top-2 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2">
                  Pesan
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={18} />
                      Terkirim!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Kirim Pesan via WhatsApp
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-green-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
