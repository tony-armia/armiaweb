"use client";

import React, { useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { HeroGlobeVisual } from "@/components/effects/HeroGlobeVisual";
import { DaqBackgroundVisual } from "@/components/effects/DaqBackgroundVisual";
import { HeroStatsTimeline } from "@/components/ui/HeroStatsTimeline";
import { HeroRotatingStatement } from "@/components/ui/HeroRotatingStatement";
import { HeroStudioCapsule } from "@/components/ui/HeroStudioCapsule";
import { DaqAnimatedTitle } from "@/components/ui/DaqAnimatedTitle";
import { useAppReady } from "@/hooks/useAppReady";
import { useGlobalScroll } from "@/components/parallax/ScrollProgressProvider";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const [activeHero, setActiveHero] = useState<"hero1" | "hero2">("hero1");
  const containerRef = useRef<HTMLDivElement>(null);
  const isAppReady = useAppReady();
  const { globalProgress } = useGlobalScroll();
  // We use useTransform directly here to ensure it starts at 0 offset at the top of the page
  const yParallaxText = useTransform(globalProgress, [0, 1], [0, 300]);
  const yParallaxGlobe = useTransform(globalProgress, [0, 1], [0, -200]);

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
      {/* Hero Version Switcher Dropdown (Center Top) */}
      <div className="fixed top-[28px] left-1/2 -translate-x-1/2 z-[100] pointer-events-auto">
        <select
          value={activeHero}
          onChange={(e) => setActiveHero(e.target.value as "hero1" | "hero2")}
          className="bg-black/30 backdrop-blur-md border border-white/10 text-white/70 hover:text-white text-[9px] uppercase tracking-widest px-2 py-1 rounded-sm outline-none focus:border-brand-accent transition-all cursor-pointer shadow-xl"
        >
          <option value="hero1">Hero 1</option>
          <option value="hero2">Hero 2</option>
        </select>
      </div>

      {activeHero === "hero1" ? (
        <>
          {/* ── Background Earth Globe Visual (Cinematic Night Orbit with Warm Atmospheric Sunrise) ── */}
          <motion.div className="absolute inset-0 z-0" style={{ y: yParallaxGlobe, scale: 1.05 }}>
            <HeroGlobeVisual />
          </motion.div>


          {/* ── Main Hero Content Area ── */}
          <div className="relative z-10 pointer-events-none h-full w-full">
        {/* Centered Giant Display Typography & Minimal Value Elements */}
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 sm:px-10 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isAppReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yParallaxText }}
            className="relative mx-auto flex flex-col items-center max-w-4xl"
          >
            {/* Center Wordmark Container */}
            <div className="relative flex flex-col items-center md:w-fit">
              {/* Center Giant Word: "armia" */}
              <h1 className="text-center font-sans font-normal leading-none tracking-tight text-[clamp(4.8rem,14.5vw,14rem)] cursor-default select-none">
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
              <span className="mt-2 text-[16px] sm:text-[18px] lowercase tracking-[0.35em] text-white/60 font-light md:absolute md:-bottom-6 md:right-0 md:text-[26px] lg:text-[28px] transition-colors duration-300 hover:text-white">
                systems
              </span>
            </div>

            {/* ── Minimal Value Proposition & Frosted Credibility Pills (Inspired by Reference) ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center text-center max-w-xl mx-auto"
            >
              {/* Supporting Value Proposition */}
              <p className="font-sans text-xs sm:text-[13.5px] md:text-[14.5px] text-white/70 font-normal leading-relaxed tracking-normal max-w-lg">
                Trusted technology partner for scalable software, digital products,
                <br className="hidden sm:inline" /> and long-term engineering support.
              </p>

              {/* ── Creative Minimal Studio Telemetry Capsule (Replacing Generic Badges) ── */}
              <HeroStudioCapsule />

              {/* Minimal Trust Indicator Line */}
              <div className="flex items-center justify-center gap-3 mt-4 sm:mt-5">
                <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#FF5A00]/50" />
                <span className="font-mono text-[9px] sm:text-[9.5px] tracking-[0.24em] text-white/40 uppercase font-medium">
                  TRUSTED BY PRODUCT TEAMS WORLDWIDE
                </span>
                <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#FF5A00]/50" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Right-Side Connected Stats Timeline (Matching User Reference) ── */}
        <div className="absolute right-6 sm:right-10 md:right-[10.8%] top-1/2 -translate-y-1/2 hidden md:block z-20">
          <HeroStatsTimeline />
        </div>

        {/* ── Bottom-Left Automatically Rotating Context Statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-10 sm:bottom-12 md:bottom-14 left-6 sm:left-10 md:left-[10.8%] hidden lg:block z-20"
        >
          <HeroRotatingStatement />
        </motion.div>

        {/* ── Bottom-Right Minimal Down Arrow (Elysium scroll indicator) ── */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleScrollDown}
          className="group absolute bottom-10 sm:bottom-12 md:bottom-14 right-6 sm:right-10 md:right-[10.8%] flex items-center justify-center p-2 text-xl text-white/50 hover:text-white transition-all duration-300 pointer-events-auto"
          aria-label="Scroll to next section"
        >
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-1.5">
            ↓
          </span>
        </motion.button>
      </div>
      </>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {/* DAQ-inspired dark animated SVG background */}
          <motion.div className="absolute inset-0 z-0" style={{ y: yParallaxGlobe, scale: 1.05 }}>
            <DaqBackgroundVisual />
          </motion.div>

          <div className="relative z-10 w-full max-w-[1920px] mx-auto pointer-events-auto h-full pt-32 sm:pt-40">
            <div className="w-full px-6 md:px-0 md:w-[78%] md:ml-[10.8%] flex flex-col items-start justify-start text-left h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: yParallaxText }}
              className="max-w-4xl"
            >
              {/* Minimal Trust Separator instead of pills */}
              <div className="mb-6 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/50 flex flex-wrap justify-start items-center gap-x-4 gap-y-2">
                <span>Est. 2003</span>
                <span className="text-white/20">/</span>
                <span>India &amp; USA</span>
                <span className="text-white/20">/</span>
                <span>Build • Scale • Support</span>
              </div>

              {/* Trustworthy Minimal Header with Light/Bold split and rotating words */}
              <DaqAnimatedTitle />
              
              {/* Supporting Minimal Description (Monospace, highly tracked) */}
              <p className="font-mono text-[10px] sm:text-[11px] text-white/50 leading-[2] tracking-[0.25em] uppercase max-w-2xl mb-12">
                Delivering excellence since 2003 across India and the USA.<br className="hidden sm:block" /> We design, build and run governed data platforms and robust cloud infrastructures.
              </p>
              
              {/* Minimal Transparent DAQ-style Button */}
              <div className="flex items-center justify-start">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-6 border border-white/20 hover:border-white/50 bg-transparent px-8 py-4 rounded-full transition-all duration-300"
                >
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                    START PROJECT
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
            </div>
          </div>

          {/* Huge Faint Watermark (Bottom Right) */}
          <div className="absolute bottom-8 right-6 md:right-[10.8%] flex flex-col items-end opacity-10 pointer-events-none select-none z-10 mix-blend-screen">
            <span className="font-sans font-black text-[140px] sm:text-[220px] leading-[0.75] tracking-tighter text-white z-20">
              23
            </span>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.5em] text-white uppercase mr-1 mt-1">
              Years
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
