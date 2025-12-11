"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { gsap } from "gsap";

const mentors = [
  {
    id: 1,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/abdufattox.webp",
    name: "Abdufattox",
    role: "Frontend Mentor",
  },
  {
    id: 2,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/abdufattox.webp",
    name: "Abdufattox",
    role: "Frontend Mentor",
  },
  {
    id: 3,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/abdufattox.webp",
    name: "Abdufattox",
    role: "Frontend Mentor",
  },
  {
    id: 4,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/abdufattox.webp",
    name: "Abdufattox",
    role: "Frontend Mentor",
  },
  {
    id: 5,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/abdufattox.webp",
    name: "Abdufattox",
    role: "Frontend Mentor",
  },
  {
    id: 6,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/abdufattox.webp",
    name: "Abdufattox",
    role: "Frontend Mentor",
  },
  {
    id: 7,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/abdufattox.webp",
    name: "Abdufattox",
    role: "Frontend Mentor",
  },
  {
    id: 8,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/abdufattox.webp",
    name: "Abdufattox",
    role: "Frontend Mentor",
  },
];

export default function Mentor3DParallax() {
  const slidesRef = useRef([]);

  // GSAP ENTRY 3D ROTATION
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      gsap.from(slide, {
        opacity: 0,
        rotateY: -80,
        scale: 0.7,
        y: 40,
        duration: 1.1,
        ease: "power4.out",
        delay: index * 0.15,
      });
    });
  }, []);

  // 3D PARALLAX EFFECT
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: x / 20,
      rotateX: -y / 20,
      scale: 1.05,
      boxShadow: "0 25px 45px rgba(0, 255, 255, 0.25)",
      duration: 0.3,
    });
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      boxShadow: "none",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <div className="w-full bg-[#0a0f1a] py-16 px-6">
      <h1 className="text-white text-4xl font-bold mb-10 text-center">
        Mentorlarimiz
      </h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {mentors.map((m, index) => (
          <SwiperSlide key={m.id} ref={(el) => (slidesRef.current[index] = el)}>
            <div
              className="
                bg-gradient-to-br 
                from-cyan-500/30 
                to-blue-500/20 
                p-[2px] rounded-xl cursor-pointer
              "
              onMouseMove={(e) => handleMouseMove(e, slidesRef.current[index])}
              onMouseLeave={() => handleMouseLeave(slidesRef.current[index])}
            >
              <div className="bg-[#111827] rounded-xl p-3 shadow-xl shadow-cyan-500/5">
                <Image
                  src={m.img}
                  alt="mentor"
                  width={500}
                  height={600}
                  className="rounded-lg w-full h-[280px] object-cover"
                />
                <p className="text-center text-white text-lg font-semibold mt-3">
                  {m.name}
                </p>
                <p className="text-center text-cyan-400 text-sm">{m.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


