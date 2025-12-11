"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [courses, setCourses] = useState([]);

  // JSON yuklash
  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // Animatsiya
  useEffect(() => {
    if (!courses.length) return;
    const ctx = gsap.context(() => {
      gsap.from(".courses__heading", {
        y: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.6)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [courses]);

  return (
    <section className="w-full min-h-screen bg-gray-50 p-8" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="courses__heading text-3xl md:text-4xl font-extrabold text-slate-800">
            Bizning Kurslar
          </h2>
        </div>

        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {courses.map((course, i) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <article
                ref={(el) => (cardsRef.current[i] = el)}
                className="group cursor-pointer bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 mb-4">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-200 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={50}
                        height={50}
                        className="object-contain opacity-90"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-slate-700 font-semibold text-sm md:text-base leading-snug mb-3">
                  {course.title}
                </h3>

                <div className="mt-auto w-full flex items-center justify-center">
                  <span className="block h-1 w-10 bg-yellow-300 rounded-md transform transition-all duration-300 group-hover:w-20" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <p className="text-xs text-slate-400 mt-6">
          Maʼlumotlar JSON orqali yuklandi.
        </p>
      </div>

      <style jsx>{`
        article {
          min-height: 200px;
        }
      `}</style>
    </section>
  );
}
