"use client";

import Image from "next/image";
import { Instagram, Send } from "lucide-react";
import { useEffect, useRef } from "react";

export default function IqtidorLink() {
  const images = [
    "https://iqtidor.uicgroup.tech/media/insta/2024/08/17/postMafia.webp",
    "https://iqtidor.uicgroup.tech/media/insta/2024/07/20/SMMM.webp",
    "https://iqtidor.uicgroup.tech/media/insta/2024/07/20/Iqtidor.webp",
    "https://iqtidor.uicgroup.tech/media/insta/2024/07/20/logo.webp",
    "https://iqtidor.uicgroup.tech/media/insta/2024/07/20/SMMM.webp",
  ];

  const scrollerRef1 = useRef(null);
  const isHovering1 = useRef(false);

  // Auto scroll setup
  const setupAutoScroll = (containerRef, hoverRef) => {
    let scrollAmount = 0;

    const step = () => {
      const container = containerRef.current;
      if (!container) return;

      if (!hoverRef.current) {
        scrollAmount += 1;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      }

      requestAnimationFrame(step);
    };

    step();
  };

  useEffect(() => {
    setupAutoScroll(scrollerRef1, isHovering1);
  }, []);

  // Render reusable row
  const renderRow = (ref, hoverRef) => (
    <div
      ref={ref}
      className="flex gap-4 overflow-hidden whitespace-nowrap"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {[...images, ...images].map((img, index) => (
        <div
          key={index}
          className="
            flex-shrink-0 
            rounded-xl 
            overflow-hidden
            shadow-md dark:shadow-none 
            border border-gray-200 dark:border-gray-700

            min-w-[140px] h-[140px]
            sm:min-w-[180px] sm:h-[180px]
            md:min-w-[200px] md:h-[200px]
            lg:min-w-[240px] lg:h-[240px]

            bg-white dark:bg-gray-800
          "
        >
          <Image
            src={img}
            alt="post"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-14 px-4">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* INSTAGRAM */}
          <div className="flex items-center gap-4">
            <Instagram className="w-14 h-14 text-pink-600 dark:text-pink-400" />
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                Instagram sahifamizga obuna boling
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                @iqtidorakademiyasi
              </p>
            </div>
          </div>

          {/* TELEGRAM */}
          <div className="flex items-center gap-4">
            <Send className="w-14 h-14 text-sky-600 dark:text-sky-400" />
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                Telegram sahifamizga obuna boling
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                @iqtidorakademiyasi
              </p>
            </div>
          </div>
        </div>

        {/* Instagram scroll row */}
        {renderRow(scrollerRef1, isHovering1)}
      </div>
    </div>
  );
}
