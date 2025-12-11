"use client";
import React from "react";
import { useParams } from "next/navigation";
import courses from "../../public/data/courses";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  const { id } = useParams();
  const course = courses.find((item) => String(item.id) === String(id));

  if (!course) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl font-bold">
        Kurs topilmadi 😔
      </div>
    );
  }

  return (
    <div className="px-6 py-10 ">
      {/* Title */}
      {/* <h1 className="text-3xl font-bold mb-6 text-white">
        Kurs ID: <span className="text-blue-500">{id}</span>
      </h1> */}

      <h2 className="text-2xl font-semibold mb-6 text-blue-500">
        Nimalar sizni kutmoqda?
      </h2>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {course.whatYouWillLearn?.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: isEven ? -80 : 80, // chapdan yoki o‘ngdan chiqadi
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(59,130,246,0.55)",
                borderColor: "#3B82F6",
              }}
              className="
                flex items-center gap-4 p-4 
                rounded-xl 
                bg-[#50515746] 
                border border-blue-900 
                shadow-[0_0_15px_rgba(59,130,246,0.15)]
                transition-all duration-300 cursor-pointer
              "
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5 }}
                className="w-12 h-12 relative"
              >
                <Image
                  src={item.icon.trimStart() ?? ""}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                />
              </motion.div>

              {/* Text */}
              <span className="text-lg font-medium text-white">
                {item.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
