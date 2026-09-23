"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    name: "Zayne Rendell",
    role: "Founder/CEO, Rapid Teachers",
    company: "Rapid Teachers",
    quote:
      "Our company would not be where we are today without Armia Systems' business expertise or willingness to help. The engineering staff have significant experience in enterprise systems and truly go above and beyond, with a genuine desire to see their clients succeed! Furthermore, the level of confidentiality, trust, and SLA integrity are second to none! The Armia team are exceptional to deal with and create extremely high-quality products. I could not recommend the team at Armia Systems highly enough!",
    avatar: "/images/avatar_jakub.png",
    videoPoster: "/images/testimonial_video_poster.jpg",
    videoAuthor: {
      name: "Bat-Erdene A.",
      role: "Manager, IT Division, TokiApp",
    },
  },
  {
    id: "02",
    name: "Mark Henderson",
    role: "Director of Engineering, Active Network",
    company: "ACTIVE NETWORK",
    quote:
      "Armia's senior engineering team engineered our distributed cloud backend to handle massive seasonal traffic surges with sub-second response times. Their dedication to architectural excellence, automated CI/CD pipelines, and zero-downtime migrations gave us complete peace of mind.",
    avatar: "/images/avatar_david.png",
    videoPoster: "/images/engineering_team.png",
    videoAuthor: {
      name: "Mark Henderson",
      role: "Director of Engineering, Active Network",
    },
  },
  {
    id: "03",
    name: "Sarah Jenkins",
    role: "VP of Technology, JumpForward",
    company: "JUMPFORWARD",
    quote:
      "Working with Armia accelerated our product roadmap by six months. From complex compliance workflows to intuitive mobile app delivery, their transparent Jira telemetry, proactive communication, and top-tier code quality have set a new benchmark for software engineering partners.",
    avatar: "/images/avatar_anna.png",
    videoPoster: "/images/testimonial_video_poster.jpg",
    videoAuthor: {
      name: "Sarah Jenkins",
      role: "VP of Technology, JumpForward",
    },
  },
  {
    id: "04",
    name: "Diane Miller",
    role: "Founder & CEO, CollegiateParent",
    company: "COLLEGIATEPARENT",
    quote:
      "Armia has been our trusted digital technology partner for over eight continuous years. They have architected our publishing engines, user portals, and multi-tenant cloud platforms with absolute reliability. They act as a genuine extension of our executive leadership team.",
    avatar: "/images/avatar_emma.png",
    videoPoster: "/images/engineering_team.png",
    videoAuthor: {
      name: "Diane Miller",
      role: "Founder & CEO, CollegiateParent",
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
      data-theme="dark"
      className="relative w-full bg-black text-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-16 lg:px-20 select-none overflow-hidden"
      aria-label="Client Testimonials and Reviews"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        
        {/* ── Section Header Row (Directly matching reference) ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight leading-[1.2]">
            What Australian and Global Clients <br className="hidden sm:inline" />
            Say About Our Mobile App Delivery
          </h2>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/60 hover:border-white text-white font-sans text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-300 hover:bg-white/10 group cursor-pointer"
            >
              <span>View All Client Testimonials</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ── Main 2-Card Showcase (Matching Reference Screenshot) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          
          {/* ── Left Card: White Editorial Quote Card (5 cols) ── */}
          <div className="lg:col-span-5 rounded-[26px] bg-white text-[#111111] p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[460px] md:min-h-[500px]">
            
            {/* 3D Angled Blue Decorative Graphic in Bottom Right (matching reference) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -right-4 w-[220px] h-[220px] select-none z-0"
            >
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="blueRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                  <linearGradient id="blueRibbon2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="blueRibbon3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284C7" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
                {/* 3D Parallel Angled Slabs */}
                <rect x="70" y="30" width="36" height="180" rx="8" transform="rotate(-38 70 30)" fill="url(#blueRibbon1)" fillOpacity="0.85" />
                <rect x="110" y="55" width="36" height="180" rx="8" transform="rotate(-38 110 55)" fill="url(#blueRibbon2)" fillOpacity="0.9" />
                <rect x="150" y="80" width="36" height="180" rx="8" transform="rotate(-38 150 80)" fill="url(#blueRibbon3)" fillOpacity="0.85" />
              </svg>
            </div>

            {/* Top: Blue Double Quotation Mark (matching reference) */}
            <div className="relative z-10 mb-5">
              <svg
                width="36"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#0066FF] fill-current"
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
            <div className="relative z-10 w-full p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-sky-50/90 via-blue-50/85 to-indigo-100/80 backdrop-blur-md border border-blue-200/60 flex items-center justify-between shadow-sm">
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
                  <div className="font-sans font-bold text-sm text-[#111111] leading-snug truncate">
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
              <div className="px-7 py-3.5 rounded-full bg-white text-black font-sans text-xs tracking-widest uppercase font-bold flex items-center gap-3 shadow-2xl transition-all duration-300 group-hover:scale-105 pointer-events-auto cursor-pointer">
                <div className="w-5 h-5 rounded-full border-[1.5px] border-black flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-black text-black ml-0.5" />
                </div>
                <span>WATCH REEL</span>
              </div>
            </div>

            {/* Bottom Left Author Tag (matching reference) */}
            <div className="relative z-10 flex items-start gap-3">
              <span className="w-1 h-10 bg-[#0066FF] rounded-full inline-block shrink-0 mt-0.5" />
              <div>
                <div className="font-sans text-lg sm:text-xl font-bold text-white leading-snug">
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
                <div className="w-16 h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/30">
                  <Play className="w-7 h-7 fill-white text-white ml-1" />
                </div>
                <h4 className="font-sans text-2xl font-bold text-white mb-2">
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
