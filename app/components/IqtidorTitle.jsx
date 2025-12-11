"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IqtidorTitle() {
  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10 py-10 px-4 md:px-10 bg-gray-900 text-white">
      {/* Chap tomon */}
      <motion.div
        className="space-y-6 flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Title 1 */}
        <h1 className="typing text-3xl md:text-4xl font-bold leading-snug">
          Bugungi <span className="text-blue-400">kun o‘rganuvchilari</span>
        </h1>

        {/* Title 2 */}
        <h1 className="typing delay1 text-3xl md:text-4xl font-bold leading-snug">
          Ertangi <span className="text-blue-400">kun egalari</span>
        </h1>

        {/* Title 3 */}
        <h1 className="typing delay2 text-3xl md:text-4xl font-bold leading-snug">
          Iqtidor{" "}
          <span className="text-blue-400">bilan kelajakka qadam bosing</span>
        </h1>
      </motion.div>

      {/* O‘ng tomon */}
      <motion.div
        className="max-w-xl text-base md:text-lg text-gray-300 leading-7 md:leading-8 flex-1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.6 }}
      >
        <p>
          Ertangi kun egalari bo‘lish uchun bugundan o‘rganish darkor! Biz bilan
          kelajak kasblarini o‘rganing! IT sohalari bir-biriga juda hamohang
          bo‘lib siz bir sohani o‘zlashtirish jarayonini bir nechta boshqa
          yo‘nalishlar bo‘yicha kerakli bilimlarni o‘zlashtirib borasiz.
        </p>
      </motion.div>

      {/* Typing animation CSS */}
      <style jsx>{`
        .typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #60a5fa;
          width: 0;
          animation: typing 1.6s steps(40, end) forwards,
            cursorBlink 0.7s infinite;
        }
        .delay1 {
          animation-delay: 1.2s, 1.2s;
        }
        .delay2 {
          animation-delay: 2.4s, 2.4s;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes cursorBlink {
          0%,
          100% {
            border-color: transparent;
          }
          50% {
            border-color: #60a5fa;
          }
        }
      `}</style>
    </div>
  );
}
