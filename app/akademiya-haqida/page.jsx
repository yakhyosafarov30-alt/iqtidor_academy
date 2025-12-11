"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Flame from "./Flame"; // 🔥 olov import qilinadi

export default function Page() {
 const leftRocket = {
   animate: {
     y: [0, -25, 0],
     transition: {
       duration: 1.8,
       repeat: Infinity,
       ease: "easeInOut",
     },
   },
 };

 const rightRocket = {
   animate: {
     y: [0, 25, 0],

     transition: {
       duration: 1.8,
       repeat: Infinity,
       ease: "easeInOut",
     },
   },
 };

  return (
    <section
      className="
        relative w-full 
        bg-white dark:bg-[#0d0f1a] 
        pt-40 pb-40 px-6 md:px-20
        transition-colors duration-300 
        flex flex-col items-center text-center
        overflow-hidden
      "
    >
      {/* Background Large Text */}
      <h1
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          text-[130px] md:text-[220px] font-extrabold
          text-[#0F3354]/10 dark:text-white/5
          select-none pointer-events-none
          tracking-wider blur-sm
        "
      >
        IQTIDOR
      </h1>

      {/* MAIN TEXT */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F3354] dark:text-white z-10">
        Akademiya
      </h1>
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFC400] mt-2 z-10">
        Haqida
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-lg md:text-[25px] leading-8 mt-6 max-w-3xl z-10">
        Iqtidor education o‘quv markazi tashkil topishiga eng asosiy sabab bu
        O‘zbekiston davlatida IT sohasiga bo‘lgan talab kuchayib borayotgani
        hamda bu sanoat tarmog‘idagi mutaxassislar yetishmovchiligi asosiy sabab
        bo‘lgan.
      </p>

      {/* Center Circles */}
      <div className="relative flex justify-center items-center mt-16 mb-10 z-10">
        <div className="absolute w-[420px] h-[420px] rounded-full border border-gray-300/40 dark:border-blue-600/80 animate-pulse" />
        <div className="absolute w-[330px] h-[330px] rounded-full border border-gray-300/30 dark:border-blue-600/75" />
        <div className="absolute w-[240px] h-[240px] rounded-full border border-gray-300/20 dark:border-blue-600/70" />
        <div className="absolute w-[150px] h-[150px] rounded-full border border-gray-300/10 dark:border-blue-600/65" />

        <h2 className="text-6xl font-extrabold text-blue-400 drop-shadow-lg">
          IQTIDOR
        </h2>
      </div>

      {/* LEFT-TOP ROCKET */}

      {/* LEFT ROCKET */}
      <motion.div
        variants={leftRocket}
        animate="animate"
        className="absolute left-10 top-24 opacity-90"
      >
        <div className="relative rotate-45">
          <Image
            src="/assets/iqtidor_rocket.png"
            alt="rocket"
            width={200}
            height={200}
          />
          <Flame /> {/* 🔥 RAKETA OLOVI */}
        </div>
      </motion.div>

      {/* RIGHT ROCKET */}
      <motion.div
        variants={rightRocket}
        animate="animate"
        className="absolute right-10 bottom-10 opacity-90"
      >
        <div className="relative rotate-45">
          <Image
            src="/assets/iqtidor_rocket.png"
            alt="rocket"
            width={230}
            height={230}
          />
          <Flame /> {/* 🔥 RAKETA OLOVI */}
        </div>
      </motion.div>
    </section>
  );
}
