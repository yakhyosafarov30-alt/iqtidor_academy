"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const name = "mehmon";

  const leftTextRef = useRef(null); // “Bu mo‘jiza emas,”
  const rightTextRef = useRef(null); // “bu IQTIDOR”
  const subtitleRef = useRef(null);
  const buttonsRef = useRef([]);
  const rocketRef = useRef(null);
  const linesRef = useRef([]);

  const handleApply = () => {
    alert(`Salom, ${name}! Arizangiz qabul qilindi.`);
  };

  const handleCheckCertificate = () => {
    alert("Sertifikat holatini tekshirish funksiyasi ishlamoqda!");
  };

  useEffect(() => {
    // Chap matn chapga siljish
    gsap.fromTo(
      leftTextRef.current,
      { x: 0 },
      {
        x: -210, // chapga siljishi
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftTextRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // O‘ng matn o‘ngga siljish
    gsap.fromTo(
      rightTextRef.current,
      { x: 0 },
      {
        x: 127, // o‘ngga siljishi
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightTextRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Subtitle va buttons scroll animatsiyasi
    const elems = [subtitleRef.current, ...buttonsRef.current];
    gsap.fromTo(
      elems,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: elems[0],
          start: "top 80%",
          once: true,
        },
      }
    );

    // Rocket fade in va bounce
    gsap.fromTo(
      rocketRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rocketRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // RAKETA FLYING + ROTATION ANIMATSIYA
    // RAKETA KIRIB-CHIQQAN ANIMATSIYA (3D PUSH EFFECT)
    const rocketFly = gsap.to(rocketRef.current, {
      x: 0,
      y: 0,
      scale: 1.08, // KATTA-KICHIK BO‘LISH
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      rotation: 3, // YENGIL BURILISH
      transformOrigin: "center center",
      onUpdate: () => {
        const rocketScale = rocketRef.current._gsap.scale;

        // Yon chiziqlar raketa kattalashishi bilan moslashadi
        linesRef.current.forEach((line, idx) => {
          if (!line) return;
          gsap.set(line, {
            scaleY: rocketScale * 1.3,
            opacity: 0.7 + rocketScale * 0.3,
          });
        });
      },
    });

    const rocketEl = rocketRef.current;
    const hoverAnim = gsap.to(rocketEl, {
      y: -20,
      duration: 0.5,
      paused: true,
      ease: "power1.out",
    });
    rocketEl.addEventListener("mouseenter", () => hoverAnim.play());
    rocketEl.addEventListener("mouseleave", () => hoverAnim.reverse());

    // Initial lines animation
    linesRef.current.forEach((line, idx) => {
      gsap.fromTo(
        line,
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          transformOrigin: "bottom",
          duration: 0.5,
          delay: idx * 0.1,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <section className="w-full bg-[#f4f8fc] relative overflow-hidden py-32 flex flex-col items-center">
      {/* Title & Buttons */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#0f253e] leading-tight relative">
          <span ref={leftTextRef} className="inline-block">
            Bu <span className="text-[#3a9dfb]">mo‘jiza</span> emas,
          </span>
          <br />
          <span
            ref={rightTextRef}
            className=" text-[#3a9dfb]  inline-block mt-3"
          >
            bu{" "}
            <span className="bg-[#3a9dfb] px-8 py-3 rounded-xl text-white">
              IQTIDOR
            </span>
          </span>
        </h1>
      </div>

      {/* grid */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left side: Subtitle + Buttons */}
        <div className="flex flex-col items-center md:items-start">
          <p
            ref={subtitleRef}
            className="mt-8 text-gray-700 text-xl leading-relaxed text-center md:text-left max-w-md"
          >
            Kurslarimizga yozilish uchun, o‘zingiz haqingizda ma’lumotni
            kiriting va ariza qoldiring.
          </p>

          <div className="mt-8 flex gap-6 justify-center md:justify-start">
            <button
              ref={(el) => (buttonsRef.current[0] = el)}
              onClick={handleApply}
              className="bg-[#0f253e] text-white px-8 py-4 rounded-xl text-lg shadow hover:bg-[#15365a] transition"
            >
              Ariza qoldirish
            </button>

            <button
              ref={(el) => (buttonsRef.current[1] = el)}
              onClick={handleCheckCertificate}
              className="bg-[#3a9dfb] text-white px-8 py-4 rounded-xl text-lg shadow hover:bg-[#2d82d1] transition"
            >
              Sertifikat holatini tekshirish
            </button>
          </div>
        </div>

        {/* Right side: Rocket + Side Lines */}
        <div className="relative flex justify-center md:justify-end mt-12 md:mt-0">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex flex-col justify-center items-start z-0">
            {[...Array(5)].map((_, idx) => (
              <div
                key={idx}
                ref={(el) => (linesRef.current[idx] = el)}
                className="w-[3px] h-[20px] bg-[#3a9dfb] mb-2 origin-bottom"
              />
            ))}
          </div>

          <div
            ref={rocketRef}
            className="relative z-10 cursor-pointer rotate-50"
          >
            <Image
              src="/assets/iqtidor_rocket.png"
              alt="rocket"
              width={470}
              height={470}
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Rocket below */}
    </section>
  );
}
