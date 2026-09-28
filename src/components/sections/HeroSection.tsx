"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { HeroGlobeVisual } from "@/components/effects/HeroGlobeVisual";
import { DaqBackgroundVisual } from "@/components/effects/DaqBackgroundVisual";
import { HeroStatsTimeline } from "@/components/ui/HeroStatsTimeline";
import { HeroRotatingStatement } from "@/components/ui/HeroRotatingStatement";
import { DaqAnimatedTitle } from "@/components/ui/DaqAnimatedTitle";
import { useAppReady } from "@/hooks/useAppReady";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const [activeHero, setActiveHero] = useState<"hero1" | "hero2">("hero1");
  const containerRef = useRef<HTMLDivElement>(null);
  const isAppReady = useAppReady();
  const [isThemeLight, setIsThemeLight] = useState(false);

  // Dynamically listen to global site theme changes
  useEffect(() => {
    const check = () =>
      setIsThemeLight(document.documentElement.classList.contains("light"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const isLight = isThemeLight;

  // Direct window scroll tracking — zero getBoundingClientRect calls or layout reflow
  const { scrollY } = useScroll();

  // Pure hardware-accelerated GPU transforms (translateY & opacity only)
  const yParallaxGlobe = useTransform(scrollY, [0, 800], [0, 140]);
  const opacityParallaxGlobe = useTransform(scrollY, [0, 650], [1, 0.35]);

  const yParallaxText = useTransform(scrollY, [0, 600], [0, -100]);
  const opacityParallaxText = useTransform(scrollY, [0, 420], [1, 0]);

  const yParallaxBottom = useTransform(scrollY, [0, 300], [0, 40]);
  const opacityParallaxBottom = useTransform(scrollY, [0, 200], [1, 0]);
  const opacityParallaxWatermark = useTransform(scrollY, [0, 200], [0.08, 0]);

  const handleScrollDown = () => {
    if (typeof window !== "undefined") {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const headlineWords = ["Your", "Complete", "Technology", "Partner"];

  return (
    <section
      ref={containerRef}
      id="home"
      data-theme={isLight ? "hero-light" : "hero"}
      className="relative min-h-[100svh] h-[100dvh] w-full overflow-hidden select-none snap-section"
      aria-label="Hero"
    >
      {/* ── Dual Base Background Layers (Cross-Dissolve without muddied intermediate colors) ── */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[#090909] pointer-events-none z-0 transition-opacity duration-700 ease-in-out ${
          isLight ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[#fbfbfb] pointer-events-none z-0 transition-opacity duration-700 ease-in-out ${
          isLight ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Hero Version Switcher Dropdown (Center Top) */}
      <div className="fixed top-[28px] left-1/2 -translate-x-1/2 z-[100] pointer-events-auto">
        <select
          value={activeHero}
          onChange={(e) => setActiveHero(e.target.value as "hero1" | "hero2")}
          className={`backdrop-blur-md border text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-sm outline-none focus:border-brand-accent transition-all duration-700 ease-in-out cursor-pointer shadow-xl ${
            isLight
              ? "bg-white/80 border-black/15 text-black/80 hover:text-black shadow-black/5"
              : "bg-black/30 border-white/10 text-white/70 hover:text-white shadow-black/40"
          }`}
        >
          <option value="hero1">Hero 1</option>
          <option value="hero2">Hero 2</option>
        </select>
      </div>

      {activeHero === "hero1" ? (
        <>
          {/* ── Background Earth Globe Visual (Cinematic Orbit with Warm Atmospheric Sunrise) ── */}
          <motion.div className="absolute inset-0 z-0 will-change-transform" style={{ y: yParallaxGlobe, opacity: opacityParallaxGlobe }}>
            <HeroGlobeVisual isLight={isLight} />
          </motion.div>

          {/* ── Main Hero Content Area ── */}
          <div className="relative z-10 pointer-events-none h-full w-full">
            {/* Centered Giant Display Typography & Complete Partner Value Elements */}
            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 sm:px-10 pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isAppReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: yParallaxText, opacity: opacityParallaxText }}
                className="relative mx-auto flex flex-col items-center max-w-4xl will-change-transform"
              >
                {/* ── Strong Company-Level Headline ── */}
                <div className="relative flex flex-col items-center max-w-3xl">
                  <h1 className="text-center font-sans font-bold leading-[1.08] tracking-tight text-[clamp(2.35rem,5.2vw,4.75rem)] cursor-default select-none">
                    <div className="overflow-hidden flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
                      {headlineWords.map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: 35 }}
                          animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.18 + index * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          whileHover={{
                            y: -6,
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 450, damping: 14 },
                          }}
                          className="relative inline-block cursor-pointer will-change-transform select-none"
                        >
                          {/* Dark Theme Gradient Text Layer */}
                          <span
                            className={`inline-block text-transparent bg-clip-text elysium-animated-gradient transition-opacity duration-700 ease-in-out ${
                              isLight ? "opacity-0" : "opacity-100"
                            }`}
                            style={{
                              WebkitTextStroke: "1px rgba(255, 255, 255, 0.10)",
                            }}
                          >
                            {word}
                          </span>

                          {/* Light Theme Gradient Text Layer */}
                          <span
                            aria-hidden="true"
                            className={`absolute inset-0 text-transparent bg-clip-text elysium-animated-gradient-light transition-opacity duration-700 ease-in-out ${
                              isLight ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            {word}
                          </span>
                        </motion.span>
                      ))}
                    </div>
                  </h1>
                </div>

                {/* ── Concise Supporting Copy, Primary & Secondary CTAs & Frosted Credibility Pills ── */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.9, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 sm:mt-5 flex flex-col items-center text-center max-w-2xl mx-auto"
                >
                  {/* Concise Supporting Copy */}
                  <p
                    className={`font-sans text-[12px] sm:text-[13px] md:text-[13.5px] font-normal leading-relaxed tracking-normal max-w-xl mx-auto transition-colors duration-700 ease-in-out ${
                      isLight ? "text-black" : "text-white/70"
                    }`}
                  >
                    Engineering scalable software, cloud architectures, and AI solutions. We build, scale, and support mission-critical digital products.
                  </p>

                  {/* ── Call To Action Buttons ── */}
                  <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                    {/* Primary Button */}
                    <a
                      href="#contact"
                      className={`group relative inline-flex items-center gap-3.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-700 ease-in-out shadow-lg hover:scale-[1.03] active:scale-[0.98] ${
                        isLight
                          ? "bg-[#111827] text-white hover:bg-black shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_28px_rgba(255,90,0,0.25)]"
                          : "bg-white text-black hover:bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_0_28px_rgba(255,90,0,0.35)]"
                      }`}
                    >
                      <span>Start a Conversation</span>
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-accent text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </a>

                    {/* Secondary Button */}
                    <a
                      href="#services"
                      className={`group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] font-medium backdrop-blur-md transition-all duration-700 ease-in-out hover:scale-[1.03] active:scale-[0.98] ${
                        isLight
                          ? "border border-black/15 bg-black/[0.03] hover:bg-black/[0.08] hover:border-black/30 text-black/85 hover:text-black shadow-sm"
                          : "border border-white/20 bg-white/[0.04] hover:bg-white/[0.10] hover:border-white/40 text-white/85 hover:text-white shadow-black/20"
                      }`}
                    >
                      <span>Explore Services</span>
                      <span className="text-brand-accent font-sans transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  </div>


                </motion.div>
              </motion.div>
            </div>

            {/* ── Right-Side Connected Stats Timeline (Matching User Reference) ── */}
            <motion.div
              style={{ y: yParallaxBottom, opacity: opacityParallaxBottom }}
              className="absolute right-6 sm:right-10 md:right-[10.8%] top-[30%] -translate-y-1/2 hidden md:block z-20"
            >
              <HeroStatsTimeline isLight={isLight} />
            </motion.div>

            {/* ── Bottom-Left Automatically Rotating Context Statement ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: yParallaxBottom, opacity: opacityParallaxBottom }}
              className="absolute bottom-10 sm:bottom-12 md:bottom-14 left-6 sm:left-10 md:left-[10.8%] hidden lg:block z-20"
            >
              <HeroRotatingStatement isLight={isLight} />
            </motion.div>

            {/* ── Bottom-Right Minimal Down Arrow (Elysium scroll indicator) ── */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: yParallaxBottom, opacity: opacityParallaxBottom }}
              onClick={handleScrollDown}
              className={`group absolute bottom-10 sm:bottom-12 md:bottom-14 right-6 sm:right-10 md:right-[10.8%] flex items-center justify-center p-2 text-xl transition-all duration-700 ease-in-out pointer-events-auto ${
                isLight ? "text-black/40 hover:text-black" : "text-white/50 hover:text-white"
              }`}
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
          <motion.div className="absolute inset-0 z-0 will-change-transform" style={{ y: yParallaxGlobe, opacity: opacityParallaxGlobe }}>
            <DaqBackgroundVisual />
          </motion.div>

          <div className="relative z-10 w-full max-w-[1920px] mx-auto pointer-events-auto h-full pt-32 sm:pt-40">
            <div className="w-full px-6 md:px-0 md:w-[78%] md:ml-[10.8%] flex flex-col items-start justify-start text-left h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isAppReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: yParallaxText, opacity: opacityParallaxText }}
                className="max-w-4xl will-change-transform"
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
          <motion.div
            style={{ y: yParallaxBottom, opacity: opacityParallaxWatermark }}
            className="absolute bottom-8 right-6 md:right-[10.8%] flex flex-col items-end pointer-events-none select-none z-10 mix-blend-screen will-change-transform"
          >
            <span className="font-sans font-black text-[140px] sm:text-[220px] leading-[0.75] tracking-tighter text-white/80 z-20">
              23
            </span>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.5em] text-white/50 uppercase mr-1 mt-1">
              Years
            </span>
          </motion.div>
        </div>
      )}
    </section>
  );
}
