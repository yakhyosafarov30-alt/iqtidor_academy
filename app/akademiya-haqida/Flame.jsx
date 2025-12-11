"use client";

import { motion } from "framer-motion";

export default function Flame() {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 top-full"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.8, 1, 0.6],
        y: [0, 10, 0],
      }}
      transition={{
        duration: 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Outer Glow */}
      <div className="w-10 h-10 bg-orange-400 blur-2xl opacity-40 rounded-full absolute -top-2" />

      {/* Main Flame */}
      <div className="w-6 h-12 bg-gradient-to-b from-yellow-300 to-orange-600 rounded-full blur-sm" />

      {/* Inner Flame */}
      <div className="w-3 h-8 bg-gradient-to-b from-white to-yellow-400 rounded-full blur-[1px] absolute left-1/2 -translate-x-1/2 top-1" />
    </motion.div>
  );
}
