// components/Portfolio.jsx
"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Barbershop Booking Website",
    category: "Website Development",
    description:
      "Situs web ini menyajikan layanan potong rambut pria, tukang cukur yang tersedia, dan detail harga. Pelanggan dapat memilih tukang cukur pilihan mereka dan dengan mudah memesan janji temu untuk pengalaman yang lancar dan personal.",
    image: "/portfolio/barber.png",
    link: "https://fadebarbershop.vercel.app/",
    github: "#",
  },
  {
    id: 2,
    title: "Nail Art Service Website",
    category: "Website Development",
    description:
      "Situs web ini menampilkan layanan nail art, koleksi desain, dan detail harga. Pelanggan dapat menjelajahi berbagai gaya dan dengan mudah memesan janji temu melalui WhatsApp untuk pengalaman yang cepat dan nyaman.",
    image: "/portfolio/nailart.png",
    link: "https://nailart-roy.vercel.app/",
    github: "#",
  },
  {
    id: 3,
    title: "Kost Website",
    category: "Website Development",
    description:
      "Situs web ini memberikan gambaran umum tentang kost, termasuk pratinjau kamar, fasilitas yang tersedia, dan harga yang transparan. Pengguna dapat dengan mudah menjelajahi detail dan memesan kamar langsung melalui WhatsApp untuk proses reservasi yang cepat dan sederhana.",
    image: "/portfolio/deriskost.png",
    link: "https://deriskost.vercel.app/",
    github: "#",
  },
  {
    id: 4,
    title: "Corporate Company Profile",
    category: "Website Development",
    description:
      "Situs web ini adalah platform resmi perusahaan yang menampilkan promosi produk, diskon eksklusif, penawaran paket, dan manfaat bagi pelanggan. Pengunjung dapat menjelajahi penawaran terbaru, mempelajari tentang program loyalitas, dan mengakses opsi pembelian yang mudah dengan dukungan konsultasi langsung.",
    image: "/portfolio/cbs.png",
    link: "https://columbus-majalengka.vercel.app/",
    github: "#",
  },
  {
    id: 5,
    title: "Business Consultant Wuling",
    category: "Website Development",
    description:
      "Website ini adalah platform resmi Wuling Bali Business Consultant, yang menyediakan informasi penjualan mobil, penawaran terbaru, simulator kredit, dan konsultasi WhatsApp.",
    image: "/portfolio/wuling.png",
    link: "https://ydewmobilbarubali.my.id/",
    github: "#",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dragStartX = useRef(0);
  const dragEndX = useRef(0);
  const cardRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length,
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleDragStart = (e) => {
    dragStartX.current = e.clientX || e.touches[0].clientX;
  };

  const handleDragEnd = (e) => {
    dragEndX.current = e.clientX || e.changedTouches[0].clientX;
    const dragDistance = dragEndX.current - dragStartX.current;

    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  };

  const currentItem = portfolioItems[currentIndex];

  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Portfolio Terbaru
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Beberapa proyek yang telah kami selesaikan untuk klien kami
          </p>
        </motion.div>

        {/* Carousel dengan drag langsung pindah */}
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden md:flex w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0 z-10"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          {/* Main Card - Bisa di-drag langsung pindah */}
          <div
            ref={cardRef}
            className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image - Full width dengan aspect ratio yang tepat */}
                  <div className="relative w-full md:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="relative w-full pt-[75%] md:pt-[100%]">
                      <Image
                        src={currentItem.image}
                        alt={currentItem.title}
                        fill
                        className="object-cover pointer-events-none"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-sm text-blue-500 font-semibold uppercase tracking-wide">
                      {currentItem.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-2 mb-4">
                      {currentItem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                      {currentItem.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={currentItem.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <ExternalLink size={20} />
                        Lihat Proyek
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden md:flex w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0 z-10"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {portfolioItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-400"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
