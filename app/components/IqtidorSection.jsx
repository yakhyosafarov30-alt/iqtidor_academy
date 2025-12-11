"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function IqtidorSection() {
  const directions = {
    left: { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } },
    top: { hidden: { opacity: 0, y: -50 }, show: { opacity: 1, y: 0 } },
    bottom: { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } },
  };

  const order = ["left", "right", "top", "bottom"];

  const trans = { duration: 0.7, ease: "easeOut" };

  return (
    <div className="w-full bg-[#0B0E13] py-10">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Team Photo */}
        <motion.div
          variants={directions[order[0]]}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          }}
          transition={trans}
          className="bg-[#12161D] rounded-2xl overflow-hidden border border-[#1F242C] col-span-1 sm:col-span-2 relative"
        >
          <div className="relative h-[260px]">
            <Image
              src="https://iqtidor.uicgroup.tech/media/insta/2024/08/17/postMafia.webp"
              alt="UIC Academy Team Photo"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute top-5 left-5">
              <p className="text-gray-300 text-lg">Bizning jamoa</p>
              <h2 className="text-5xl font-bold text-white">
                <CountUp end={150} duration={2} />+
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          variants={directions[order[1]]}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          }}
          transition={trans}
          className="bg-[#12161D] rounded-2xl border border-[#1F242C] col-span-1 sm:col-span-2 lg:col-span-2 h-[260px] flex justify-center items-center"
        >
          <div className="text-center">
            <Image
              src="https://iqtidor.uicgroup.tech/media/insta/2024/07/20/logo.webp"
              width={180}
              height={180}
              alt="UIC Group Logo"
              loading="lazy"
            />
            <h2 className="text-white text-2xl mt-3">IQTIDOR Academy</h2>
          </div>
        </motion.div>

        {/* Yil Brendi */}
        <motion.div
          variants={directions[order[2]]}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          }}
          transition={trans}
          className="bg-[#12161D] p-5 rounded-2xl border border-[#1F242C] flex items-center justify-between"
        >
          <div>
            <p className="text-gray-200 font-medium">Yil Brendi</p>
            <p className="text-gray-500 text-sm">Mukofot sovrindori</p>
          </div>
          <Image
            src="/award.png"
            width={65}
            height={120}
            alt="award"
            loading="lazy"
          />
        </motion.div>

        {/* Speed TOP */}
        <motion.div
          variants={directions[order[3]]}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          }}
          transition={trans}
          className="bg-[#12161D] p-5 rounded-2xl border border-[#1F242C] flex flex-col justify-center"
        >
          <p className="text-blue-400 font-bold text-lg">Speed TOP</p>
          <h2 className="text-white text-2xl">TOP 100</h2>
        </motion.div>

        {/* Office Photo */}
        <motion.div
          variants={directions[order[0]]}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          }}
          transition={trans}
          className="bg-[#12161D] rounded-2xl overflow-hidden border border-[#1F242C] col-span-1 sm:col-span-2 relative"
        >
          <div className="relative h-[240px]">
            <Image
              src="https://iqtidor.uicgroup.tech/media/insta/2024/07/20/Iqtidor.webp"
              alt="UIC Office"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Kiberxavfsizlik */}
        <motion.div
          variants={directions[order[1]]}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          }}
          transition={trans}
          className="bg-[#12161D] p-5 rounded-2xl border border-[#1F242C] text-center flex flex-col justify-center h-[150px]"
        >
          <h2 className="text-white text-lg">Kiberxavfsizlik</h2>
          <p className="text-gray-400 mt-2">Kompaniyada alohida jamoa bor</p>
        </motion.div>

        {/* Innovatsiya */}
        <motion.div
          variants={directions[order[2]]}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          }}
          transition={trans}
          className="bg-[#12161D] p-5 rounded-2xl border border-[#1F242C] text-center flex flex-col justify-center h-[150px]"
        >
          <h2 className="text-white text-lg">
            Biznes va innovatsion loyihalar
          </h2>
          <p className="text-gray-400 mt-2">G‘oyalarni taqdim etishdi</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
