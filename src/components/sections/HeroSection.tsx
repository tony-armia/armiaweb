"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { HeroWaveCanvas } from "@/components/effects/HeroWaveCanvas";
import { HeroStatsTimeline } from "@/components/ui/HeroStatsTimeline";
import { useAppReady } from "@/hooks/useAppReady";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAppReady = useAppReady();

  const handleScrollDown = () => {
    if (typeof window !== "undefined") {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const letters = ["a", "r", "m", "i", "a"];

  return (
    <section
      ref={containerRef}
      id="home"
      data-theme="hero"
      className="relative min-h-[100svh] h-[100dvh] w-full overflow-hidden bg-[#090909] text-white select-none snap-section"
      aria-label="Hero"
    >
      {/* ── Background Wave Canvas & Ambient Glow (Elysium 3D Wave Simulation) ── */}
      <HeroWaveCanvas />

      {/* ── Main Hero Content Area ── */}
      <div className="relative z-10 pointer-events-none h-full w-full">
        {/* Centered Giant Display Typography */}
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 sm:px-10 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isAppReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex flex-col items-center md:w-fit"
          >
            {/* Center Giant Word: "armia" */}
            <h1 className="text-center font-sans font-semibold leading-none tracking-tight text-[18vw] cursor-default select-none">
              <div className="overflow-hidden flex items-center justify-center">
                {letters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      y: -16,
                      scale: 1.04,
                      transition: { type: "spring", stiffness: 450, damping: 14 },
                    }}
                    className="relative inline-block text-transparent bg-clip-text elysium-animated-gradient cursor-pointer will-change-transform"
                  >
                    {char}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20 bg-clip-text pointer-events-none"
                    />
                  </motion.span>
                ))}
              </div>
            </h1>

            {/* Bottom Suffix: "systems" */}
            <span className="mt-2 text-[18px] lowercase tracking-[0.35em] text-white/60 font-light md:absolute md:-bottom-7 md:right-0 md:text-[30px] transition-colors duration-300 hover:text-white">
              systems
            </span>
          </motion.div>
        </div>

        {/* ── Right-Side Connected Stats Timeline (Matching User Reference) ── */}
        <div className="absolute right-6 sm:right-10 md:right-14 xl:right-24 top-1/2 -translate-y-1/2 hidden md:block z-20">
          <HeroStatsTimeline />
        </div>

        {/* ── Bottom-Left Context Statement (Elysium format) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-12 sm:bottom-14 left-8 sm:left-14 text-xs sm:text-sm md:text-[15px] leading-relaxed text-white/70 pointer-events-auto tracking-wide"
        >
          <div className="overflow-hidden">
            <p className="leading-snug">
              Designing &amp; engineering
              <br />
              digital experiences
              <br />
              from India &amp; USA.
            </p>
          </div>
          <div className="h-3" />
          <div className="overflow-hidden">
            <p className="leading-snug text-white/50">
              Crafted for enterprises
              <br />
              that scale globally.
            </p>
          </div>
        </motion.div>

        {/* ── Bottom-Right Minimal Down Arrow (Elysium scroll indicator) ── */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleScrollDown}
          className="group absolute bottom-12 sm:bottom-14 right-8 sm:right-14 flex items-center justify-center p-2 text-xl text-white/50 hover:text-white transition-all duration-300 pointer-events-auto"
          aria-label="Scroll to next section"
        >
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-1.5">
            ↓
          </span>
        </motion.button>
      </div>
    </section>
  );
}
