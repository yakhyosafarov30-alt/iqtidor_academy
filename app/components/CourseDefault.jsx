"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CourseDefault() {
  const courseList = [
    {
      name: "Kompyuter Savodxonligi",
      icon: "https://iqtidor.uicgroup.tech/media/courses/icons/2024/04/17/AdvencedFrontend.svg",
    },
    {
      name: "3D Modelling",
      icon: "https://iqtidor.uicgroup.tech/media/courses//icons/2024/04/17/AdvencedFrontend.svg",
    },
    {
      name: "Grafik Dizayn",
      icon: "https://iqtidor.uicgroup.tech/media/courses//icons/2024/04/17/AdvencedFrontend.svg",
    },
    {
      name: "IT uchun ingliz tili",
      icon: "https://iqtidor.uicgroup.tech/media/courses//icons/2024/04/17/AdvencedFrontend.svg",
    },
    {
      name: "Frontend",
      icon: "https://iqtidor.uicgroup.tech/media/courses//icons/2024/04/17/AdvencedFrontend.svg",
    },
    {
      name: "SMM kursi",
      icon: "https://iqtidor.uicgroup.tech/media/courses//icons/2024/04/17/AdvencedFrontend.svg",
    },
    {
      name: "Robototexnika",
      icon: "https://iqtidor.uicgroup.tech/media/courses//icons/2024/04/17/AdvencedFrontend.svg",
    },
    {
      name: "Mobile Developer",
      icon: "https://iqtidor.uicgroup.tech/media/courses//icons/2024/04/17/AdvencedFrontend.svg",
    },
    {
      name: "Foundation (Python)",
      icon: "https://iqtidor.uicgroup.tech/media/courses//icons/2024/04/17/AdvencedFrontend.svg",
    },
    {
      name: "Backend",
      icon: "https://iqtidor.uicgroup.tech/media/courses//icons/2024/04/17/AdvencedFrontend.svg",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full bg-[#16181d] py-10 px-4">
      <div
        className="max-w-6xl mx-auto rounded-2xl p-10 flex flex-col lg:flex-row gap-10 
        bg-[#0e1117]
        shadow-xl shadow-black/30
        border border-[#1f2533]
        transition-all duration-500"
      >
        {/* LEFT IMAGE */}
        {/* LEFT IMAGE + TITLE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col items-start lg:items-start"
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            Kurslarimizga <br /> yoziling!
          </h1>

          <div className="w-full flex justify-center">
            <Image
              src="https://iqtidoracademy.uz/images/course_photo.svg"
              width={450}
              height={450}
              alt="course register"
              className="object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          {/* COURSES */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {courseList.map((course, i) => {
              const isActive = selected === course.name;

              return (
                <motion.label
                  key={i}
                  onClick={() => setSelected(course.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className={`
    border rounded-xl p-4 cursor-pointer flex flex-col items-center gap-3
    bg-[#0c0f15] 
    border-[#262c3b] 
    transition-all duration-300

    ${
      isActive
        ? "border-yellow-500 bg-yellow-500/10 shadow-[0_0_20px_rgba(255,200,0,0.4)]"
        : "hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(255,200,0,0.25)]"
    }
  `}
                >
                  <div className="flex items-center gap-8">
                    {/* ICON */}
                    <Image
                      src={course.icon}
                      alt={course.name}
                      width={36}
                      height={36}
                      className={`${isActive ? "opacity-100" : "opacity-60"}`}
                    />

                    {/* RADIO */}
                    <input
                      type="radio"
                      name="selectedCourse"
                      checked={isActive}
                      onChange={() => setSelected(course.name)}
                      className="w-4 h-4 accent-yellow-500"
                    />
                  </div>

                  {/* TITLE */}
                  <span
                    className={`text-sm text-center ${
                      isActive ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    {course.name}
                  </span>
                </motion.label>
              );
            })}
          </div>

          {/* INPUTS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-4 mb-6"
          >
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold text-gray-300">
                Ism va Familyangiz
              </label>
              <input
                type="text"
                placeholder="Ism va Familyangizni kiriting"
                className="border rounded-xl px-4 py-3 mt-1 outline-none bg-[#0c0f15]
                  border-[#262c3b] text-gray-200
                  focus:border-yellow-400
                  focus:shadow-[0_0_10px_rgba(255,200,0,0.4)]
                  transition-all duration-300"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold text-gray-300">
                Telefon raqamingiz
              </label>
              <input
                type="text"
                placeholder="+998 90 123 45 67"
                className="border rounded-xl px-4 py-3 mt-1 outline-none bg-[#0c0f15]
                  border-[#262c3b] text-gray-200
                  focus:border-yellow-400
                  focus:shadow-[0_0_10px_rgba(255,200,0,0.4)]
                  transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* AGREEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3 mb-6"
          >
            <input type="checkbox" className="w-4 h-4 accent-yellow-500" />
            <span className="text-gray-300 text-sm">
              Ariza qoldirishda oferta shartlariga rozilik bildiraman
            </span>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 18px rgba(255,200,0,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl
              hover:bg-yellow-400 transition-all duration-300"
          >
            Yuborish
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
