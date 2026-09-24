"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Play,
  X,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials Data
// ─────────────────────────────────────────────────────────────────────────────

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  videoPoster: string;
  videoAuthor: {
    name: string;
    role: string;
  };
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "01",
    name: "Edward Friedman",
    role: "Managing Director, Green D Market Analytics",
    company: "Green D Market Analytics",
    quote:
      "Armia Systems did an excellent job from cradle to grave. Their senior engineering accountability, proactive architecture guidance, and responsive communication transformed our analytics requirements into a robust, high-performance platform. The Armia team delivered every milestone with absolute precision and SLA integrity. I could not recommend the team at Armia Systems highly enough!",
    avatar: "/images/avatar_david.png",
    videoPoster: "/images/testimonial_video_poster.jpg",
    videoAuthor: {
      name: "Edward Friedman",
      role: "Managing Director, Green D Market Analytics",
    },
  },
  {
    id: "02",
    name: "Brian Jacobs",
    role: "Founder & CEO, Orbtattoo",
    company: "Orbtattoo",
    quote:
      "The Armia engineering team's dedication and proactive approach made our product collaboration both efficient and highly effective. They took our complex marketplace workflow and turned it into an intuitive, high-concurrency digital platform. Their technical depth, transparent sprint velocity, and problem-solving abilities are second to none.",
    avatar: "/images/avatar_jakub.png",
    videoPoster: "/images/engineering_team.png",
    videoAuthor: {
      name: "Brian Jacobs",
      role: "Founder & CEO, Orbtattoo",
    },
  },
  {
    id: "03",
    name: "Mike Serrano",
    role: "Executive Director, Armia Creative Inc.",
    company: "Armia Creative",
    quote:
      "Armia Systems was a genuine game changer for us. They helped us architect and build our enterprise application with extraordinary cost-efficiency, technical finesse, and speed to market. Their senior engineers truly go above and beyond, with a genuine desire to see their clients succeed across every digital touchpoint.",
    avatar: "/images/avatar_anna.png",
    videoPoster: "/images/testimonial_video_poster.jpg",
    videoAuthor: {
      name: "Mike Serrano",
      role: "Executive Director, Armia Creative Inc.",
    },
  },
  {
    id: "04",
    name: "Mike Morris",
    role: "VP of Technology, Software Migration",
    company: "Enterprise Software Migration",
    quote:
      "The team at Armia was extremely easy to work with and extraordinarily patient throughout our legacy software migration to modern cloud architecture. They provided thorough technical detail at every phase, resulting in zero downtime, seamless data integrity, and complete stakeholder confidence.",
    avatar: "/images/avatar_emma.png",
    videoPoster: "/images/engineering_team.png",
    videoAuthor: {
      name: "Mike Morris",
      role: "VP of Technology, Software Migration",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  const current = TESTIMONIALS[currentIdx];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      data-theme="section"
      className="relative w-full py-20 sm:py-24 md:py-28 select-none overflow-hidden transition-colors duration-400"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      aria-label="Client Testimonials and Reviews"
    >
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[10.8%]">
        
        {/* ── Section Header Row (Directly matching reference) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <SectionEyebrow number="06" label="TESTIMONIALS" className="!mb-3.5" />
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-light tracking-tight leading-[1.2]" style={{ color: 'var(--foreground)' }}>
              What Global &amp; Enterprise Clients <br className="hidden sm:inline" />
              Say About Armia Systems&apos; Delivery
            </h2>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/[0.12] hover:border-brand-accent/50 text-white font-mono text-xs tracking-[0.16em] uppercase transition-all duration-300 backdrop-blur-md group cursor-pointer"
            >
              <span>ALL TESTIMONIALS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-brand-accent" />
            </a>
          </div>
        </div>

        {/* ── Main 2-Card Showcase (Matching Reference Screenshot) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          
          {/* ── Left Card: White Editorial Quote Card (5 cols) ── */}
          <div className="lg:col-span-5 rounded-[26px] bg-white text-[#111111] p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[460px] md:min-h-[500px]">
            
            {/* 3D Angled Brand Orange Decorative Graphic in Bottom Right */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -right-4 w-[220px] h-[220px] select-none z-0"
            >
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="orangeRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff5a00" />
                    <stop offset="100%" stopColor="#ff8a43" />
                  </linearGradient>
                  <linearGradient id="orangeRibbon2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e04e00" />
                    <stop offset="100%" stopColor="#ff5a00" />
                  </linearGradient>
                  <linearGradient id="orangeRibbon3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff3d00" />
                    <stop offset="100%" stopColor="#ff7a29" />
                  </linearGradient>
                </defs>
                {/* 3D Parallel Angled Slabs */}
                <rect x="70" y="30" width="36" height="180" rx="8" transform="rotate(-38 70 30)" fill="url(#orangeRibbon1)" fillOpacity="0.88" />
                <rect x="110" y="55" width="36" height="180" rx="8" transform="rotate(-38 110 55)" fill="url(#orangeRibbon2)" fillOpacity="0.92" />
                <rect x="150" y="80" width="36" height="180" rx="8" transform="rotate(-38 150 80)" fill="url(#orangeRibbon3)" fillOpacity="0.88" />
              </svg>
            </div>

            {/* Top: Brand Orange Double Quotation Mark */}
            <div className="relative z-10 mb-5">
              <svg
                width="36"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-brand-accent fill-current"
              >
                <path d="M0 28V16.8C0 11.76 1.44 7.64 4.32 4.44C7.28 1.16 11.28 0 16.32 0V5.6C13.28 5.6 11.08 6.48 9.72 8.24C8.44 10 7.8 12.36 7.8 15.32H16.32V28H0ZM19.68 28V16.8C19.68 11.76 21.12 7.64 24 4.44C26.96 1.16 30.96 0 36 0V5.6C32.96 5.6 30.76 6.48 29.4 8.24C28.12 10 27.48 12.36 27.48 15.32H36V28H19.68Z" />
              </svg>
            </div>

            {/* Middle: The Client Quote */}
            <div className="relative z-10 flex-1 flex items-start mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="font-sans text-[13.5px] sm:text-[14.5px] leading-[1.68] text-[#1c1c1c] font-normal"
                >
                  {current.quote}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bottom: Floating Avatar & Author Bar with Nav Arrows */}
            <div className="relative z-10 w-full p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-neutral-100/90 backdrop-blur-md border border-orange-200/50 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-black/10 shrink-0 bg-neutral-200">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-sans font-semibold text-sm text-[#111111] leading-snug truncate">
                    {current.name}
                  </div>
                  <div className="font-sans text-[11px] text-[#555555] leading-snug truncate">
                    {current.role}
                  </div>
                </div>
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="p-1.5 text-[#222222] hover:text-black transition-transform duration-200 hover:-translate-x-0.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="p-1.5 text-[#222222] hover:text-black transition-transform duration-200 hover:translate-x-0.5 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* ── Right Card: Video Reel Showcase (7 cols) ── */}
          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="lg:col-span-7 rounded-[26px] overflow-hidden relative min-h-[460px] md:min-h-[500px] shadow-2xl bg-[#0e0f14] border border-white/10 group cursor-pointer flex flex-col justify-between p-7 sm:p-9"
          >
            {/* Background Image / Video Poster */}
            <Image
              src={current.videoPoster}
              alt={`${current.videoAuthor.name} Video Reel`}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none" />

            {/* Empty top row for spacing */}
            <div className="relative z-10" />

            {/* Center Floating Watch Reel Pill Button (matching reference) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="px-7 py-3.5 rounded-full bg-white text-black font-sans text-xs tracking-widest uppercase font-semibold flex items-center gap-3 shadow-2xl transition-all duration-300 group-hover:scale-105 pointer-events-auto cursor-pointer">
                <div className="w-5 h-5 rounded-full border-[1.5px] border-black flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-black text-black ml-0.5" />
                </div>
                <span>WATCH REEL</span>
              </div>
            </div>

            {/* Bottom Left Author Tag (matching reference with brand orange indicator) */}
            <div className="relative z-10 flex items-start gap-3">
              <span className="w-1 h-10 bg-brand-accent rounded-full inline-block shrink-0 mt-0.5" />
              <div>
                <div className="font-sans text-lg sm:text-xl font-medium text-white leading-snug">
                  {current.videoAuthor.name}
                </div>
                <div className="font-sans text-xs sm:text-[13px] text-white/75 font-light tracking-normal mt-0.5">
                  {current.videoAuthor.role}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── Video Modal Dialog ── */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl aspect-video flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <Image
                src={current.videoPoster}
                alt="Client Video Reel"
                fill
                className="object-cover opacity-60"
              />

              <div className="relative z-10 text-center p-8">
                <div className="w-16 h-16 rounded-full bg-brand-accent text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-brand-accent/30">
                  <Play className="w-7 h-7 fill-white text-white ml-1" />
                </div>
                <h4 className="font-sans text-2xl font-medium text-white mb-2">
                  {current.videoAuthor.name} &mdash; Client Story
                </h4>
                <p className="font-sans text-xs text-white/70 max-w-md mx-auto">
                  {current.videoAuthor.role} &bull; Enterprise Case Study &amp; Scalability Reel
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
