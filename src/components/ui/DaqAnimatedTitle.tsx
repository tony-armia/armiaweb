"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DaqAnimatedTitleProps {
  isLight?: boolean;
}

const WORDS = [
  { text: "AI & SOFTWARE.", isAccent: true }, // Orange
  { text: "INTELLIGENCE.", isAccent: false },
  { text: "APPLIED AI.", isAccent: true },
  { text: "AUTONOMOUS.", isAccent: false },
  { text: "ENGINEERING.", isAccent: true },
];

export function DaqAnimatedTitle({ isLight = false }: DaqAnimatedTitleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500); // 2.5 seconds per word
    return () => clearInterval(timer);
  }, []);

  const currentWord = WORDS[index];

  return (
    <h1
      className={`font-sans text-[clamp(2.25rem,6.4vw,6.25rem)] leading-[0.95] tracking-[-0.02em] uppercase mb-4 sm:mb-6 transition-colors duration-700 ease-in-out ${
        isLight ? "text-neutral-900" : "text-white"
      }`}
    >
      <span
        className={`font-extralight block transition-colors duration-700 ease-in-out ${
          isLight ? "text-neutral-900/90" : "text-white/90"
        }`}
      >
        ENTERPRISE
      </span>
      <span className="font-bold relative block h-[1.05em] w-full">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute left-0 top-0 whitespace-nowrap transition-colors duration-700 ease-in-out ${
              isLight ? "drop-shadow-none" : "drop-shadow-xl"
            } ${
              currentWord.isAccent
                ? "text-[#FF5A00]"
                : isLight
                ? "text-neutral-950"
                : "text-white"
            }`}
          >
            {currentWord.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
