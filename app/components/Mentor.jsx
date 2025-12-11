"use client";

import React from "react";
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
            <div className="bg-[#111827] rounded-xl p-3 shadow-lg transition-all">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

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
