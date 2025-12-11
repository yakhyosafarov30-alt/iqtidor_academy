"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative text-white py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #030712 0%, #041729 40%, #0A2F4D 100%)",
      }}
    >
      {/* Glow Background Elements */}
      {/* <div className="absolute -left-40 top-10 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute left-32 bottom-0 w-[450px] h-[450px] bg-blue-700/15 blur-[100px] rounded-full"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* Logo & Rights */}
        <div>
          <Image
            src="https://iqtidoracademy.uz/images/footer-logo.svg"
            alt="Iqtidor Logo"
            width={160}
            height={70}
            className="mb-6 drop-shadow-[0_0_12px_rgba(59,175,255,0.6)]"
          />

          <p className="text-gray-300 leading-relaxed text-[15px]">
            Iqtidor IT Academy © “IQ NTM” 2025
            <br />
            Barcha huquqlar himoyalangan.
          </p>
        </div>

        {/* Akademiya haqida */}
        <div>
          <h3 className="font-semibold text-xl mb-5 text-[#007bff]">
            Akademiya haqida
          </h3>
          <p className="text-gray-300 leading-relaxed text-[15px]">
            Iqtidor IT Academy — professional darajadagi IT bilimlar markazi.
            Keling va kelajagingizni biz bilan birga quring!
          </p>
        </div>

        {/* Kurslarimiz */}
        <div>
          <h3 className="font-semibold text-xl mb-5 text-[#007bff]">
            Kurslarimiz
          </h3>
          <ul className="space-y-2 text-gray-300 text-[15px]">
            <li className="hover:text-white transition">Frontend</li>
            <li className="hover:text-white transition">Backend</li>
            <li className="hover:text-white transition">3D Modelling</li>
            <li className="hover:text-white transition">SMM</li>
            <li className="hover:text-white transition">Grafik dizayn</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="text-[#007bff] w-6 h-6" />
            <p className="text-gray-300 text-[15px]">
              Kitob, Qashqadaryo, Uzbekistan
            </p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <Mail className="text-[#007bff] w-6 h-6" />
            <p className="text-gray-300 text-[15px]">info@iqeducation.uz</p>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <Phone className="text-[#007bff] w-6 h-6" />
            <p className="text-gray-300 text-[15px]">+998 90 788 48 80</p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-gray-300 text-[15px]">Sayt ishlab chiquvchi:</p>
            <Image
              src="https://iqtidoracademy.uz/images/footer-logo.svg"
              alt="Developer"
              width={80}
              height={80}
              className="opacity-80 hover:opacity-100 transition drop-shadow-[0_0_12px_rgba(59,175,255,0.6)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom soft divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white/10"></div>
    </footer>
  );
};

export default Footer;
