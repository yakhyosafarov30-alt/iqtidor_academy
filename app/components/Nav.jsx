"use client";

import Image from "next/image";
import { Phone, Grid2x2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          backdrop-blur-xl border-b border-white/10
          ${
            scrolled
              ? "bg-[#001e3c]/90 shadow-[0_5px_25px_rgba(0,0,0,0.5)]"
              : "bg-[#001e3c]/40 shadow-none"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-white">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* HAMBURGER — xl dan kichik ekranlarda chiqadi */}
            <button
              className="xl:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              onClick={() => setOpenMenu(true)}
            >
              <Menu size={24} />
            </button>

            {/* LEFT MENU — faqat xl+ ekranlarda ko‘rinadi */}
            <div className="hidden xl:flex items-center gap-3 text-lg font-medium">
              <Link href="/Courses" className="flex items-center gap-3">
                <Grid2x2 size={24} />
                <span>Kurslarimiz</span>
              </Link>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500">
            <Link href="/">
              <Image
                src="/assets/iqtidor_logo1.jpg"
                alt="logo"
                width={scrolled ? 55 : 75}
                height={scrolled ? 55 : 75}
                className="rounded-full shadow-lg transition-all duration-500"
              />
            </Link>
          </div>

          {/* RIGHT — faqat xl ekranlarda ko‘rinadi */}
          <div className="hidden xl:flex items-center gap-5">
            <Link
              href="/akademiya-haqida"
              className="px-4 py-2 rounded-lg text-white/90 font-medium hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Akademiya haqida
            </Link>

            <a
              href="tel:+998907884880"
              className="flex items-center gap-2 px-5 py-2 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/10 transition"
            >
              <Phone size={18} className="text-blue-400" />
              <span className="font-semibold">+998 90 788 4880</span>
            </a>

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-semibold shadow-lg transition">
              Ariza qoldirish
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-[#001a33] text-white z-[999]
          transform transition-transform duration-500
          ${openMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-end p-5">
          <button
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
            onClick={() => setOpenMenu(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 mt-4 flex flex-col gap-6 text-lg font-medium">
          <Link
            href="/Courses"
            className="flex items-center gap-3 hover:text-blue-400 transition"
            onClick={() => setOpenMenu(false)}
          >
            <Grid2x2 size={22} /> Kurslarimiz
          </Link>

          <Link
            href="/akademiya-haqida"
            className="hover:text-blue-400 transition"
            onClick={() => setOpenMenu(false)}
          >
            Akademiya haqida
          </Link>

          <a
            href="tel:+998907884880"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <Phone size={20} /> +998 90 788 4880
          </a>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-semibold shadow-lg transition w-full">
            Ariza qoldirish
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
          onClick={() => setOpenMenu(false)}
        />
      )}
    </>
  );
}
