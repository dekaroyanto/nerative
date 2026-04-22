"use client";

import { motion } from "framer-motion";

export const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
