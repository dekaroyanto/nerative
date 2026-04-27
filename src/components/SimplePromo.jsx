// components/SimplePromo.jsx (Versi Reset Otomatis 7 Hari - Launching 27 April 2026)
"use client";
import { motion } from "framer-motion";
import { Gift, ArrowRight, Sparkles, Clock, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const SimplePromo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fungsi untuk mendapatkan target date berikutnya (setiap 7 hari)
    const getNextTargetDate = () => {
      const now = new Date();
      // Tanggal launching promo: 27 April 2026
      const startDate = new Date("2026-04-27T00:00:00");
      const cycleDays = 7;

      // Hitung sudah berapa hari dari startDate
      const diffDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
      const cyclesPassed = Math.floor(diffDays / cycleDays);

      // Target date = startDate + (cyclesPassed + 1) * cycleDays
      const nextTarget = new Date(startDate);
      nextTarget.setDate(startDate.getDate() + (cyclesPassed + 1) * cycleDays);
      nextTarget.setHours(23, 59, 59, 999);

      return nextTarget;
    };

    const updateTimer = () => {
      const now = new Date();
      let targetDate = getNextTargetDate();
      let difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  const handleWhatsApp = () => {
    const phoneNumber = "6285156930246";
    const message =
      "Halo Sogi, saya tertarik dengan promo launching mulai Rp 300rb.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <Sparkles size={18} className="text-cyan-300" />
            <span className="font-semibold">GRAND LAUNCHING PROMO</span>
            <Zap size={18} className="text-cyan-300" />
          </div>

          {/* Countdown Timer */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-3">
              <Clock size={18} className="text-cyan-300" />
              <span className="text-white text-sm font-medium">
                Promo Berakhir Dalam
              </span>
            </div>
            <div className="flex justify-center gap-3 md:gap-4">
              <div className="text-center">
                <div className="bg-white rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[70px] shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-blue-600">
                    {formatNumber(timeLeft.days)}
                  </span>
                </div>
                <p className="text-white text-xs mt-1">Hari</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[70px] shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-blue-600">
                    {formatNumber(timeLeft.hours)}
                  </span>
                </div>
                <p className="text-white text-xs mt-1">Jam</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[70px] shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-blue-600">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                </div>
                <p className="text-white text-xs mt-1">Menit</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[70px] shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-blue-600">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                </div>
                <p className="text-white text-xs mt-1">Detik</p>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Mulai dari
          </h2>

          {/* Price */}
          <div className="text-5xl md:text-7xl font-bold text-cyan-300 mb-4">
            Rp 300rb
          </div>

          {/* Description */}
          <p className="text-blue-100 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Dapatkan harga spesial untuk semua layanan digital kami!
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-base md:text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all mx-auto"
          >
            Konsultasi Gratis
            <ArrowRight size={18} />
          </motion.button>

          {/* Footer Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-white/60 text-xs md:text-sm">
            <Gift size={14} />
            <span>*Syarat & ketentuan berlaku</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimplePromo;
