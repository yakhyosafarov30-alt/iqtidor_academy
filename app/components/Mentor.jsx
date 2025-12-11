"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const mentors = [
  {
    id: 1,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/javoxir.webp",
    name: "Javohir Yusupov",
    role: "Frontend dasturchi",
  },
  {
    id: 2,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/abdufattox.webp",
    name: "Jurayev Abdufattox",
    role: "SMM",
  },
  {
    id: 3,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/17/inomjon1.webp",
    name: "Inomjon Ashurov",
    role: "IT Foundation",
  },
  {
    id: 4,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/27/sardor-aka.webp",
    name: "Sardorbek Rahmonov",
    role: "3Ds Max",
  },
  {
    id: 5,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/06/05/robototexnika.webp",
    name: "Abdiyeva Hilola",
    role: "Robototexnika",
  },
  {
    id: 6,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/10/24/backend_imgs.webp",
    name: "Bekmuhammad Mamadiyev",
    role: "Backend",
  },
  {
    id: 7,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/07/31/bahromsss.webp",
    name: "Bahrom Ne'matov",
    role: "Mobile dasturlash",
  },
  {
    id: 8,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/27/faxriddinAka.webp",
    name: "Faxriddin Primov",
    role: "Kompyuter Savodxonlik",
  },
  {
    id: 9,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/04/27/gayrat-aka.webp",
    name: "G'ayrat Parmonov",
    role: "IT uchun ingliz tili",
  },
  {
    id: 10,
    img: "https://iqtidor.uicgroup.tech/media/mentor/2024/08/01/Asliddin.webp",
    name: "Asliddin Usmonov",
    role: "SMM yordamchi",
  },
];

export default function Mentor3DParallax() {
  const cardRefs = useRef({});

  const handleMouseMove = (e, card) => {
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    card.style.transform = `
      perspective(600px)
      rotateY(${x / 30}deg)
      rotateX(${-y / 30}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = (card) => {
    if (!card) return;
    card.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
    card.style.transition = "transform 0.3s ease";
    setTimeout(() => (card.style.transition = ""), 300);
  };

  return (
    <div className="w-full bg-[#0a0f1a] py-16 px-4 md:px-6">
      <h1 className="text-white text-4xl font-bold mb-10 text-center">
        Mentorlarimiz
      </h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={600}
        loop={true}
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-10 w-full"
      >
        {mentors.map((m) => (
          <SwiperSlide key={m.id}>
            <div
              ref={(el) => (cardRefs.current[m.id] = el)}
              className="bg-[#111827] rounded-xl p-3 cursor-pointer shadow-lg transition-all"
              onMouseMove={(e) => handleMouseMove(e, cardRefs.current[m.id])}
              onMouseLeave={() => handleMouseLeave(cardRefs.current[m.id])}
              style={{
                transformStyle: "preserve-3d",
                transition: "transform .2s ease",
              }}
            >
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
