"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, VIEWPORT_ONCE, EASE_CUSTOM } from "@/lib/motion";

interface AwardItem {
  id: string;
  name: string;
  category: string;
  image: string;
  scale?: number;
}

const AWARDS_5X2: AwardItem[] = [
  {
    id: "clutch",
    name: "Clutch Global",
    category: "INDUSTRY RECOGNITION",
    image: "/images/awards/logo.png",
    scale: 1.25,
  },
  {
    id: "goodfirms",
    name: "GoodFirms Leader",
    category: "GLOBAL CERTIFICATION",
    image: "/images/awards/logo-2.png",
    scale: 1.2,
  },
  {
    id: "designrush",
    name: "DesignRush Elite",
    category: "EXCELLENCE IN DESIGN",
    image: "/images/awards/logo-5.png",
    scale: 1.5,
  },
  {
    id: "manifest",
    name: "The Manifest",
    category: "TOP RATED BY ANALYSTS",
    image: "/images/awards/logo-4.png",
    scale: 1.5,
  },
  {
    id: "topdevs",
    name: "Top Developers",
    category: "COMMUNITY CHOICE",
    image: "/images/awards/logo-1.png",
    scale: 1.15,
  },
  {
    id: "techbehemoths",
    name: "TechBehemoths",
    category: "MARKET LEADERSHIP",
    image: "/images/awards/logo-3.png",
    scale: 1.15,
  },
  {
    id: "upcity",
    name: "UpCity Excellence",
    category: "TRUSTED PARTNER",
    image: "/images/awards/logo-6.png",
    scale: 1.3,
  },
  {
    id: "topapp",
    name: "Top App Firms",
    category: "MOBILE & CLOUD PODS",
    image: "/images/awards/logo-7.png",
    scale: 1.3,
  },
  {
    id: "softwareworld",
    name: "Software World",
    category: "PRODUCT INNOVATION",
    image: "/images/awards/logo-8.png",
    scale: 1.25,
  },
  {
    id: "selectedfirm",
    name: "Selected Firm",
    category: "TRUST & COMPLIANCE",
    image: "/images/awards/logo-9.png",
    scale: 1.15,
  },
];

export function AwardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yHalo = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotateHalo = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const yJourney = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      ref={sectionRef}
      id="awards"
      data-theme="section"
      className="relative z-20 w-full py-14 sm:py-16 md:py-20 select-none snap-section flex flex-col justify-center overflow-hidden min-h-[100svh] transition-colors duration-400"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)", borderTop: "1px solid var(--border)" }}
      aria-label="Awards and Industry Recognition"
    >
      {/* ── Background Subtle Planetary Orbital Halo (Top Right matching reference) ── */}
      <motion.div
        style={{ y: yHalo, rotate: rotateHalo }}
        className="pointer-events-none absolute -top-24 -right-24 w-[700px] h-[700px] will-change-transform"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full border border-[#FF5A00]/15 bg-gradient-to-br from-[#FF5A00]/[0.05] via-transparent to-transparent blur-[80px]" />
        <div className="absolute top-24 right-24 w-[480px] h-[480px] rounded-full border border-[#FF5A00]/20 opacity-40" />
      </motion.div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[10.8%] relative z-10 flex flex-col justify-between h-full">
        
        {/* ── 1. Header Row (Matching Reference Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-12">
          {/* Left Column: Eyebrow + Big Heading + Subtitle */}
          <div className="lg:col-span-6">
            <SectionEyebrow number="07" label="RECOGNITION" className="!mb-3.5" />
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              className="font-sans text-[clamp(2.4rem,4.2vw,4.5rem)] font-light tracking-[-0.035em] leading-[0.96] text-left uppercase"
            >
              <span className="block" style={{ color: 'var(--foreground)' }}>AWARDS &amp;</span>
              <span className="block text-[#FF5A00] font-normal">RECOGNITION.</span>
            </motion.h2>

            <p className="font-mono text-xs md:text-[13px] leading-relaxed text-[#a4a4a2] mt-4 uppercase tracking-[0.16em] max-w-md">
              RECOGNIZED GLOBALLY BY LEADING RESEARCH AND ANALYST PLATFORMS.
            </p>
          </div>

          {/* Right Column: 20+ Years of Excellence + A Legacy of Trust and Impact + Orbital Tagline */}
          <div className="lg:col-span-6 flex items-start justify-between gap-6 lg:pl-8 lg:border-l lg:border-white/[0.08]">
            <div className="space-y-2 max-w-md">
              <div className="flex items-center gap-2 font-mono text-xs text-[#FF5A00] tracking-[0.2em] uppercase font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
                <span>20+ YEARS OF EXCELLENCE</span>
              </div>

              <h3 className="font-sans text-xl sm:text-2xl md:text-[26px] font-light tracking-tight leading-snug" style={{ color: 'var(--foreground)' }}>
                A LEGACY OF TRUST AND IMPACT.
              </h3>

              <p className="font-sans text-xs sm:text-[13px] leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                Global recognition for engineering excellence, product design and enterprise software innovation.
              </p>
            </div>

            {/* Far Right Celestial Vertical Words */}
            <div className="hidden xl:flex flex-col items-end justify-center font-mono text-[9px] tracking-[0.26em] text-white/40 uppercase space-y-1.5 select-none pl-6 border-l border-white/[0.08] shrink-0">
              <span>PEOPLE</span>
              <span>IDEAS</span>
              <span>TECHNOLOGY</span>
              <span>A BRIGHTER</span>
              <span className="text-[#FF5A00] font-medium">TOMORROW</span>
            </div>
          </div>
        </div>

        {/* ── 2. Main Content Showcase: Left Hero Journey Card + Right 5x2 Awards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10 sm:mb-12">
          
          {/* ── Left Hero Feature Card ("OUR JOURNEY") ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.5, ease: EASE_CUSTOM }}
            style={{ y: yJourney }}
            className="lg:col-span-4 rounded-2xl md:rounded-3xl border border-[#FF5A00]/40 bg-[#0a0a0d] relative overflow-hidden p-7 sm:p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(255,90,0,0.14)] group will-change-transform"
          >
            {/* Dark Mountain Sunrise Artwork Background with Seamless Fade */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/mountain_sunrise_award.jpg"
                alt="20+ Years Journey Dawn Peak"
                fill
                className="object-cover object-center opacity-45 mix-blend-screen transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
            </div>

            {/* Glowing Accent Border Highlight */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10 pointer-events-none z-10" />

            {/* Card Content Top */}
            <div className="relative z-10">
              <span className="font-mono text-[10.5px] tracking-[0.24em] text-[#FF5A00] uppercase font-semibold block mb-6">
                OUR JOURNEY
              </span>

              <div className="font-sans text-5xl sm:text-6xl md:text-[68px] font-light text-[#FF5A00] leading-none tracking-tight mb-2">
                20+
              </div>

              {/* Years of Excellence / Experience - Always White in Light & Dark Mode */}
              <div
                className="font-mono text-xs sm:text-[13px] tracking-[0.2em] uppercase font-medium mb-4"
                style={{ color: "#ffffff" }}
              >
                YEARS OF EXCELLENCE
              </div>

              <p
                className="font-sans text-xs sm:text-[13px] leading-relaxed max-w-xs"
                style={{ color: "rgba(255, 255, 255, 0.72)" }}
              >
                Two decades of innovation, trusted by customers, partners and industry leaders worldwide.
              </p>
            </div>

            {/* Card Content Bottom */}
            <div className="relative z-10 pt-8 mt-12 border-t border-white/10 flex items-center justify-between">
              <div className="font-mono text-[9px] tracking-[0.22em] uppercase leading-snug">
                <span style={{ color: "rgba(255, 255, 255, 0.55)" }}>BUILT FOR</span>
                <br />
                <span className="font-semibold" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                  A BRIGHTER TOMORROW
                </span>
              </div>

              <a
                href="#about"
                aria-label="Explore our journey"
                className="w-10 h-10 rounded-full border border-[#FF5A00]/40 bg-[#FF5A00]/10 hover:bg-[#FF5A00] text-[#FF5A00] hover:text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_rgba(255,90,0,0.25)] group/arrow"
              >
                <span className="text-sm font-semibold transition-transform duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>

          {/* ── Right Column: 10 Authentic Award Badges with Clean White/Light Card Background ── */}
          <motion.div style={{ y: yGrid }} className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 items-stretch will-change-transform">
            {AWARDS_5X2.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.4, delay: idx * 0.03, ease: EASE_CUSTOM }}
                className="award-card group relative rounded-xl sm:rounded-2xl border p-4 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 min-h-[160px] sm:min-h-[175px]"
              >
                {/* ── Minimalist Clean Logo Display Area ── */}
                <div className="relative w-full h-16 sm:h-[72px] flex items-center justify-center">
                  <div 
                    className="relative transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ 
                      width: `${(award.scale || 1) * 100}%`, 
                      height: `${(award.scale || 1) * 100}%` 
                    }}
                  >
                    <Image
                      src={award.image}
                      alt={award.name}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 50vw, 160px"
                      className="object-contain object-center drop-shadow-sm"
                    />
                  </div>
                </div>

                {/* Clean Typography Labels: Award Name + Category */}
                <div className="w-full pt-3 mt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <div className="award-title font-sans text-[12.5px] sm:text-[13px] font-medium transition-colors truncate">
                    {award.name}
                  </div>
                  <div className="award-category font-mono text-[8.5px] sm:text-[9px] tracking-wider uppercase mt-0.5 truncate transition-colors">
                    {award.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ── 3. Bottom Ticker Strip (Directly Matching Reference Image) ── */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/40">
            RECOGNIZED BY INDUSTRY BODIES, CERTIFICATION FRAMEWORKS, AND TECHNOLOGY PARTNERS WORLDWIDE.
          </div>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.24em] uppercase text-white/60 font-medium">
            ARMIA SYSTEMS
          </div>
        </div>

      </div>
    </section>
  );
}
