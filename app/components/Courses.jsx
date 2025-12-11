"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { courses } from "../../public/data/courses";

export default function Courses() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".courses__heading", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-[#0f1115] px-4 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="relative text-center text-4xl font-extrabold text-white mb-14 courses__heading">
          <span className="relative z-10">Kurslarimiz bilan tanishing</span>

          <span className="absolute inset-0 mx-auto w-[60%] h-full bg-blue-500 blur-2xl opacity-30 rounded-full"></span>
          <span className="absolute inset-0 mx-auto w-[40%] h-full bg-blue-400 blur-xl opacity-20 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <article
                ref={(el) => (cardsRef.current[i] = el)}
                className="
                  group cursor-pointer rounded-2xl p-8 border transition-all duration-300
                  bg-[#1b1d22] border-[#2c2e34]
                  hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,122,255,0.15)]
                  hover:-translate-y-2 hover:scale-[1.03]
                "
              >
                <div
                  className="
                    w-24 h-24 mx-auto mb-5 rounded-full flex items-center justify-center
                    bg-[#111317] border border-[#2c2e34]
                    group-hover:border-blue-500 transition-all
                  "
                >
                  <Image
                    src={course.image?.trim()}
                    alt={course.title}
                    width={50}
                    height={50}
                    className="
                      grayscale opacity-70
                      group-hover:grayscale-0 group-hover:opacity-100
                      transition-all duration-300
                    "
                  />
                </div>

                <h3
                  className="
                    text-center font-semibold text-lg
                    text-gray-300 group-hover:text-white
                    transition-colors duration-300
                  "
                >
                  {course.title}
                </h3>

                {/* SHINE + GRADIENT LINE (no neon) */}
                <div className="mt-6 flex justify-center relative overflow-hidden">
                  <span
                    className="
                      h-1 rounded-full
                      bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400
                      w-12 group-hover:w-32
                      transition-all duration-500 ease-out
                    "
                  ></span>

                  {/* Shine effect */}
                  <span
                    className="
                      absolute left-0 top-0 h-1 w-10
                      
                      opacity-0 group-hover:opacity-80
                      blur-sm
                      rounded-full
                      animate-shine
                    "
                  ></span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Shine animation */}
      <style>{`
        @keyframes shine {
          0%   { transform: translateX(-40px); opacity: 0; }
          40%  { opacity: 0.8; }
          100% { transform: translateX(140px); opacity: 0; }
        }
        .animate-shine {
          animation: shine 0.9s ease-in-out forwards;
        }
        .group:hover .animate-shine {
          animation: shine 0.9s ease-in-out;
        }
      `}</style>
    </section>
  );
}
