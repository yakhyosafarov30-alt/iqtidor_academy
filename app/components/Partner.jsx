"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Partner() {
  const partners = [
    "https://iqtidor.uicgroup.tech/media/company/2024/04/17/yoshlarIshlar.png",
    "https://iqtidor.uicgroup.tech/media/company/2024/04/17/AKT.png",
    "https://iqtidor.uicgroup.tech/media/company/2024/04/17/qashVilHokim.png",
    "https://iqtidor.uicgroup.tech/media/company/2024/04/19/UIC_Group-01_1.png",
  ];

  return (
    <div className="w-full py-16 bg-[#0c0f1a]">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-center mb-14 text-white">
        Bizning hamkorlar
      </h2>

      {/* DESKTOP — Static row */}
      <div className="hidden lg:flex relative items-center justify-center gap-12 px-10">
        {/* Left Button */}
        <button
          className="border border-gray-400 text-gray-300 p-3 rounded-full 
        hover:bg-gray-300 hover:text-[#0c0f1a] transition duration-300"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Logos */}
        <div className="flex items-center gap-20">
          {partners.map((img, i) => (
            <div
              key={i}
              className="animate-[glow_2.5s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <Image
                src={img}
                width={170}
                height={90}
                alt="logo"
                className="object-contain brightness-75 hover:brightness-125 hover:scale-110 transition"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          className="border border-gray-400 text-gray-300 p-3 rounded-full 
        hover:bg-gray-300 hover:text-[#0c0f1a] transition duration-300"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* MOBILE/TABLET — SLIDER */}
      <div className="lg:hidden px-6">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1500 }}
          modules={[Autoplay]}
        >
          {partners.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full flex justify-center animate-[glow_3s_ease-in-out_infinite]"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <Image
                  src={img}
                  width={150}
                  height={70}
                  alt="logo"
                  className="object-contain brightness-75 hover:brightness-125 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Glow Animation */}
      <style>
        {`
          @keyframes glow {
            0% { filter: drop-shadow(0 0 0px rgba(0, 162, 255, 0)); transform: scale(1); }
            50% { filter: drop-shadow(0 0 12px rgba(0, 162, 255, .7)); transform: scale(1.08); }
            100% { filter: drop-shadow(0 0 0px rgba(0, 162, 255, 0)); transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}
