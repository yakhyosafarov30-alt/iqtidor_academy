"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Grid, X, Menu } from "lucide-react";
import { gsap } from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuItemsRef.current, {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuItemsRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.2,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <nav className="w-full bg-white shadow-sm py-3 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/logo.png" alt="logo" className="h-10" />
            <div className="leading-5">
              <p className="text-xl font-bold">IQTIDOR</p>
              <p className="text-sm text-gray-600">Academy</p>
            </div>
          </div>

          {/* Kurslarimiz button (hidden on mobile) */}
          <button className="hidden md:flex items-center gap-2 bg-white shadow px-4 py-2 rounded-xl hover:bg-gray-50 transition">
            <Grid size={20} className="text-gray-500" />
            <span className="text-[17px] text-[#003366] font-medium">
              Kurslarimiz
            </span>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-[17px] text-[#003366] font-medium hover:text-blue-700"
          >
            Akademiya haqida
          </a>

          <div className="flex items-center gap-2">
            <Phone size={20} className="text-blue-600" />
            <span className="text-[17px] font-medium text-[#003366]">
              +998 90 788 48 80
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-xl cursor-pointer">
            <img
              src="https://flagcdn.com/w20/uz.png"
              alt="uz"
              className="h-4"
            />
            <span className="text-[17px] text-[#003366] font-medium">
              O‘zbekcha
            </span>
          </div>

          <button className="bg-[#194068] text-white text-[17px] font-medium px-6 py-3 rounded-xl hover:bg-[#15365a] transition">
            Ariza qoldirish
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (GSAP slide + fade-in) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col p-6 gap-6`}
      >
        {[
          { type: "link", text: "Akademiya haqida", href: "#" },
          { type: "phone", text: "+998 90 788 48 80" },
          { type: "lang", text: "O‘zbekcha" },
          { type: "button", text: "Ariza qoldirish" },
          { type: "kurs", text: "Kurslarimiz" },
        ].map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (menuItemsRef.current[idx] = el)}
            className="opacity-0 transform -translate-x-12"
          >
            {item.type === "link" && (
              <a
                href={item.href}
                className="text-[17px] text-[#003366] font-medium hover:text-blue-700"
              >
                {item.text}
              </a>
            )}
            {item.type === "phone" && (
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-blue-600" />
                <span className="text-[17px] font-medium text-[#003366]">
                  {item.text}
                </span>
              </div>
            )}
            {item.type === "lang" && (
              <div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-xl cursor-pointer">
                <img
                  src="https://flagcdn.com/w20/uz.png"
                  alt="uz"
                  className="h-4"
                />
                <span className="text-[17px] text-[#003366] font-medium">
                  {item.text}
                </span>
              </div>
            )}
            {item.type === "button" && (
              <button className="bg-[#194068] text-white text-[17px] font-medium px-6 py-3 rounded-xl hover:bg-[#15365a] transition">
                {item.text}
              </button>
            )}
            {item.type === "kurs" && (
              <button className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-xl hover:bg-gray-50 transition">
                <Grid size={20} className="text-gray-500" />
                <span className="text-[17px] text-[#003366] font-medium">
                  {item.text}
                </span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0  bg-opacity-30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
