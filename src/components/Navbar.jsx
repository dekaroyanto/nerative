// components/Navbar.jsx
"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if current page is blog or admin
  const isBlogPage =
    pathname?.startsWith("/blog") || pathname?.startsWith("/admin");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll (fix mobile issue + delay)
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      // Tutup menu dulu
      setIsMobileMenuOpen(false);

      // Delay biar DOM update dulu (hindari bug mobile)
      setTimeout(() => {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 200);
    }
  };

  const navLinks = [
    { name: "Beranda", id: "beranda", isScroll: true },
    { name: "Layanan", id: "layanan", isScroll: true },
    { name: "Keunggulan", id: "keunggulan", isScroll: true },
    { name: "Portfolio", id: "portfolio", isScroll: true },
    { name: "Kontak", id: "kontak", isScroll: true },
    { name: "Blog", id: "blog", isScroll: false, href: "/blog" },
  ];

  // Handler untuk navigasi (antara scroll atau link)
  const handleNavigation = (link) => {
    if (link.isScroll && !isBlogPage) {
      // Jika di homepage, lakukan smooth scroll
      smoothScrollTo(link.id);
    } else if (link.isScroll && isBlogPage) {
      // Jika di blog page dan ingin ke homepage, redirect dulu
      window.location.href = `/#${link.id}`;
    } else if (link.href) {
      // Navigasi ke halaman lain
      window.location.href = link.href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
          onClick={() => {
            if (isBlogPage) {
              window.location.href = "/";
            } else {
              smoothScrollTo("beranda");
            }
          }}
        >
          Nerative
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link)}
              className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (isBlogPage) {
                window.location.href = "/#kontak";
              } else {
                smoothScrollTo("kontak");
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            Konsultasi Gratis
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-600 z-50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t shadow-lg"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    handleNavigation(link);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-600 hover:text-blue-500 transition-colors py-3 text-lg border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => {
                  if (isBlogPage) {
                    window.location.href = "/#kontak";
                  } else {
                    smoothScrollTo("kontak");
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-3 rounded-full font-medium w-full mt-2 shadow-md"
              >
                Konsultasi Gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
