"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  { text: "ENGINEERING.", color: "text-[#FF5A00]" }, // Orange
  { text: "INTELLIGENCE.", color: "text-white" },
  { text: "INNOVATION.", color: "text-[#FF5A00]" },
  { text: "SOFTWARE.", color: "text-white" },
  { text: "EXCELLENCE.", color: "text-[#FF5A00]" },
];

export function DaqAnimatedTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500); // 2.5 seconds per word
    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="font-sans text-[clamp(2.5rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.02em] uppercase text-white mb-4 sm:mb-6">
      <span className="font-extralight text-white/90 block">ENTERPRISE</span>
      <span className="font-bold relative block h-[1em] w-full">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute left-0 top-0 whitespace-nowrap drop-shadow-xl ${WORDS[index].color}`}
          >
            {WORDS[index].text}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
