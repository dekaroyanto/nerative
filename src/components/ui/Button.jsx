"use client";

import { motion } from "framer-motion";

export const Button = ({
  children,
  variant = "primary",
  icon: Icon,
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-pastel-purple to-pastel-indigo text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-pastel-purple shadow-md hover:shadow-lg border-2 border-pastel-purple",
    outline:
      "bg-transparent border-2 border-pastel-purple text-pastel-purple hover:bg-pastel-purple hover:text-white",
    colorful:
      "bg-gradient-to-r from-pastel-pink to-pastel-orange text-white shadow-lg hover:shadow-xl",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 justify-center ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </motion.button>
  );
};
