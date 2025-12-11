"use client";

import React from "react";
import { useParams } from "next/navigation";
import courses from "../../../public/data/courses";
import Image from "next/image";
import Course_card from "../../Courses_card/page";
import CourseProgramAccordion from "../../CourseProgramAccordion/page";
import { motion } from "framer-motion";
import CourseDefault from "../../components/CourseDefault"

const Course = () => {
  const { id } = useParams();

  const course = courses.find((item) => String(item.id) === String(id));

  if (!course) {
    return (
      <div className="text-center mt-32 text-2xl font-bold text-red-500">
        Kurs topilmadi 😔
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-28 pt-[120px] md:pt-[150px] pb-20 bg-[#0f1115] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* === Rasm chapdan chiqadi === */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src={course.image2}
            width={450}
            height={450}
            alt={course.title}
            className="rounded-2xl "
          />
        </motion.div>

        {/* === Matn o‘ngdan chiqadi === */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-blue-400 drop-shadow-[0_0_10px_rgba(0,122,255,0.5)]">
            {course.title}
          </h1>

          <p className="text-lg text-gray-300 mt-6 leading-relaxed">
            {course.description}
          </p>

          {/* Neon Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="
              mt-8 px-10 py-4 text-lg font-semibold rounded-xl
              bg-gradient-to-r from-blue-700 to-blue-500
              shadow-[0_0_15px_rgba(0,122,255,0.4)]
              hover:shadow-[0_0_25px_rgba(0,122,255,0.6)]
              transition-all duration-300 relative overflow-hidden
            "
          >
            <span className="relative z-10">Kursga yozilish</span>

            <span
              className="
                absolute inset-0 w-full h-full 
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                translate-x-[-150%] 
                group-hover:translate-x-[150%]
                transition-transform duration-700 ease-out
              "
            ></span>
          </motion.button>
        </motion.div>
      </div>

      {/* === Course Cards — SCROLL animatsiya bilan === */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-24"
      >
        <Course_card />
      </motion.div>

      {/* === Accordioni === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Kurs dasturi</h2>

        <div className="bg-[#16181d] border border-blue-900/40 rounded-xl p-5 shadow-xl shadow-blue-900/10">
          <CourseProgramAccordion program={course.program} />
        </div>
      </motion.div>

      
      <CourseDefault className="mt-10" />
    </div>
  );
};

export default Course;
