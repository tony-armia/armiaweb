"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, BarChart2 } from "lucide-react";
import { HeroGlobeVisual } from "@/components/effects/HeroGlobeVisual";
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
      {/* ── Background Earth Globe Visual (Cinematic Night Orbit with Warm Atmospheric Sunrise) ── */}
      <HeroGlobeVisual />


      {/* ── Main Hero Content Area ── */}
      <div className="relative z-10 pointer-events-none h-full w-full">
        {/* Centered Giant Display Typography & Minimal Value Elements */}
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 sm:px-10 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isAppReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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

              {/* Minimal Frosted Metadata Pills with Hairline Dividers */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-5">
                <div className="h-[30px] sm:h-[32px] px-3.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center gap-2 text-white/80 transition-all duration-300 hover:border-brand-accent/40 hover:bg-white/[0.07]">
                  <Clock className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="font-mono text-[10.5px] sm:text-[11.5px] font-medium tracking-wide">
                    Since 2003
                  </span>
                </div>

                <span className="hidden sm:inline-block w-px h-3.5 bg-white/15" />

                <div className="h-[30px] sm:h-[32px] px-3.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center gap-2 text-white/80 transition-all duration-300 hover:border-brand-accent/40 hover:bg-white/[0.07]">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="font-mono text-[10.5px] sm:text-[11.5px] font-medium tracking-wide">
                    India &amp; USA
                  </span>
                </div>

                <span className="hidden sm:inline-block w-px h-3.5 bg-white/15" />

                <div className="h-[30px] sm:h-[32px] px-3.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center gap-2 text-white/80 transition-all duration-300 hover:border-brand-accent/40 hover:bg-white/[0.07]">
                  <BarChart2 className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="font-mono text-[10.5px] sm:text-[11.5px] font-medium tracking-wide">
                    Build &bull; Scale &bull; Support
                  </span>
                </div>
              </div>

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
        <div className="absolute right-6 sm:right-10 md:right-14 xl:right-24 top-1/2 -translate-y-1/2 hidden md:block z-20">
          <HeroStatsTimeline />
        </div>

        {/* ── Bottom-Left Context Statement (Elysium format on wide screens) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-12 sm:bottom-14 left-8 sm:left-14 text-xs sm:text-sm leading-relaxed text-white/70 pointer-events-auto tracking-wide hidden xl:block"
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
