// components/Portfolio.jsx
"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { AiOutlineGithub } from "react-icons/ai";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    category: "Website Development",
    description:
      "Platform e-commerce modern untuk brand fashion dengan fitur payment gateway, wishlist, dan sistem review produk.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Midtrans"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Marketplace Management Dashboard",
    category: "Admin Marketplace",
    description:
      "Dashboard komprehensif untuk mengelola penjualan di Shopee, Tokopedia, dan TikTok Shop dalam satu platform.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "Express.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Digital Ads Campaign",
    category: "Digital Advertising",
    description:
      "Strategi iklan Google & Meta yang berhasil meningkatkan konversi sebesar 200% untuk brand lokal.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Corporate Company Profile",
    category: "Website Development",
    description:
      "Website company profile modern dengan animasi halus dan optimasi SEO untuk perusahaan manufaktur.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    tags: ["WordPress", "Elementor", "SEO"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Social Media Management",
    category: "Digital Advertising",
    description:
      "Manajemen media sosial yang meningkatkan engagement 150% dalam 3 bulan untuk brand kecantikan.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    tags: ["Content Strategy", "Social Media", "Analytics"],
    link: "#",
    github: "#",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
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
    setDragStart(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    const endX = e.clientX || e.changedTouches[0].clientX;
    setDragEnd(endX);

    const dragDistance = dragEnd - dragStart;

    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        // Swipe kanan -> prev slide
        prevSlide();
      } else {
        // Swipe kiri -> next slide
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
      className="py-20 px-6 bg-linear-to-b from-gray-50 to-white"
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
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Beberapa proyek yang telah kami selesaikan untuk klien kami
          </p>
        </motion.div>

        {/* Carousel with Drag */}
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden md:flex w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0 z-10"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          {/* Main Card - Bisa di-drag */}
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
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, { offset }) => {
                  if (offset.x > 50) {
                    prevSlide();
                  } else if (offset.x < -50) {
                    nextSlide();
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden">
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    <span className="text-sm text-blue-500 font-semibold uppercase tracking-wide">
                      {currentItem.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-2 mb-4">
                      {currentItem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentItem.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={currentItem.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
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

        {/* Mobile Arrows */}
        {/* <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div> */}

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {portfolioItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-linear-to-r from-blue-500 to-cyan-400"
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
