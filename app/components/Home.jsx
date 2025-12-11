"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Hero() {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const formTextRef = useRef(null);
  const buttonsRef = useRef(null);

useEffect(() => {
  let ctx = gsap.context(() => {
    gsap.from(leftTextRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(rightTextRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(formTextRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      delay: 0.4,
    });

    gsap.fromTo(
      buttonsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.6,
      }
    );
  });

  return () => ctx.revert(); // ❗ cleanup — anim duplikatsiya qilmaydi
}, []);


  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/uicgroup1.jpg"
        alt="UIC Academy"
        fill
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span ref={leftTextRef} className="inline-block">
              Bu <span className="text-[#007bff]">mo‘jiza</span> emas,
            </span>
            <br />
            <span
              ref={rightTextRef}
              className="text-[#007bff] inline-block mt-5"
            >
              bu{" "}
              <span className="bg-[#007bff] px-8 py-3 rounded-xl text-white inline-block">
                IQTIDOR
              </span>
            </span>
          </h1>
        </div>

        {/* Sub text */}
        <div
          ref={formTextRef}
          className="mt-8 text-base sm:text-lg md:text-xl font-semibold"
        >
          <p>
            Kurslarimizga yozilish uchun, o‘zingiz{" "}
            <span className="text-white font-bold">haqingizda</span> ma’lumotni
            kiritib ariza qoldiring.
          </p>
        </div>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="mt-8 flex flex-wrap gap-4 items-center justify-center"
        >
          <button className="px-8 py-3 text-white font-semibold text-lg rounded-xl bg-[#0d2d4d] hover:bg-[#12395f] shadow-lg transition-all duration-300">
            Ariza qoldirish
          </button>

          <button className="px-8 py-3 text-white font-semibold text-lg rounded-xl bg-[#007bff] hover:bg-[#3196d8] shadow-lg transition-all duration-300">
            Sertifikat holatini tekshirish
          </button>
        </div>
      </div>
      {/* yozuv yurishi */}
      {/* yozuv yurishi */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-3 bg-[#001e3c]/60 backdrop-blur-md z-30">
        <div className="flex marquee-track whitespace-nowrap text-3xl font-extrabold text-white/20 tracking-wider">
          <span className="mx-8 flex items-center justify-center gap-4">
            IQTIDOR IT ACADEMY <span className="text-blue-500  text-4xl">•</span>
          </span>

          <span className="mx-8 flex items-center gap-4">
            IQTIDOR IT ACADEMY <span className="text-blue-500 text-4xl">•</span>
          </span>

          <span className="mx-8 flex items-center gap-4">
            IQTIDOR IT ACADEMY <span className="text-blue-500 text-4xl">•</span>
          </span>

          <span className="mx-8 flex items-center gap-4">
            IQTIDOR IT ACADEMY <span className="text-blue-500 text-4xl">•</span>
          </span>

          <span className="mx-8 flex items-center gap-4">
            IQTIDOR IT ACADEMY <span className="text-blue-500 text-4xl">•</span>
          </span>
        </div>
      </div>
    </section>
  );
}
