"use client";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function CourseProgramAccordion({ program }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!program || !Array.isArray(program)) {
    return <div className="text-red-400">Program maʼlumot topilmadi</div>;
  }

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-6 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.6)]">
        Kurs dasturi
      </h2>

      <div className="space-y-4">
        {program.map((item, index) => {
          const isObject = typeof item === "object" && item !== null;
          const title = isObject ? item.title : item;
          const details = isObject ? item.details : null;

          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
                border rounded-xl 
                bg-[#222528b5]
                border-[#30353c]
                shadow-[0_0_10px_rgba(30,58,95,0.5)]
                overflow-hidden
              "
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="
                  w-full flex items-center justify-between 
                  px-6 py-4 text-left
                "
              >
                <div className="flex items-center gap-4">
                  {/* Raqam */}
                  <span
                    className={`
                      text-[48px] font-bold transition-all
                      ${isOpen ? "text-yellow-400" : "text-blue-400"}
                    `}
                  >
                    {index + 1}
                  </span>

                  {/* Title */}
                  <span
                    className={`
                      text-[24px] font-medium transition-all
                      ${isOpen ? "text-yellow-300" : "text-gray-200"}
                    `}
                  >
                    {title}
                  </span>
                </div>

                {/* Arrow */}
                {details && (
                  <span
                    className={`
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    <div
                      className={`
                        w-[60px] h-[60px] rounded-full 
                        bg-gradient-to-br from-[#0c0f14] to-[#0b1320]
                        flex items-center justify-center
                        border transition-all

                        ${
                          isOpen
                            ? "border-yellow-500 shadow-[0_0_18px_rgba(250,204,21,0.8)]"
                            : "border-blue-900 shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                        }
                      `}
                    >
                      <ChevronUp
                        size={26}
                        className={`
                          transition-all
                          ${isOpen ? "text-yellow-400" : "text-blue-300"}
                        `}
                      />
                    </div>
                  </span>
                )}
              </button>

              {/* BODY - Animated */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                {details && (
                  <div
                    className="
                      px-10 py-4 
                      bg-[#242528] 
                      border-t border-[#1e3a5f]
                      text-[22px]
                      text-gray-300
                      leading-relaxed
                    "
                  >
                    <ul className="list-disc pl-5 space-y-2">
                      {details.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
