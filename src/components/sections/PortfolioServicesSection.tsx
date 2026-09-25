"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { EASE_CUSTOM } from "@/lib/motion";
import { GridLines } from "@/components/ui/GridLines";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { useRotator } from "@/hooks/useRotator";
import { RotatorTabStrip } from "@/components/ui/RotatorTabStrip";

// ─────────────────────────────────────────────────────────────────────────────
// Portfolio Data (5 Case Studies)
// ─────────────────────────────────────────────────────────────────────────────

interface CaseStudyItem {
  id: string;
  num: string;
  category: string;
  title: string;
  image: string;
  caption: string;
  capabilities: string[];
}

const servicesData: CaseStudyItem[] = [
  {
    id: "01",
    num: "/01",
    category: "LOGISTICS & SAAS PLATFORM",
    title: "Flexshft",
    image: "/images/Flexshft.png",
    caption:
      "Enterprise shift-scheduling and dynamic on-demand workforce management platform built for scale.",
    capabilities: [
      "Real-time shift dispatching & automated matching",
      "Multi-tenant cloud architecture on AWS",
      "High-concurrency mobile app for workers & admins",
      "Automated payroll & compliance tracking engines",
      "Instant push notifications & live GPS check-ins",
    ],
  },
  {
    id: "02",
    num: "/02",
    category: "ENTERPRISE COLLABORATION",
    title: "Ucollabit",
    image: "/images/Ucollabit.png",
    caption:
      "Unified workspace and collaborative project intelligence system for distributed enterprise teams.",
    capabilities: [
      "Real-time document sync & interactive whiteboards",
      "Role-based access control & enterprise security",
      "Automated sprint planning & workflow triggers",
      "Custom integrations with Slack, Jira & GitHub",
      "Sub-100ms WebSocket messaging infrastructure",
    ],
  },
  {
    id: "03",
    num: "/03",
    category: "TELECOM & NETWORKING",
    title: "Askonnect",
    image: "/images/Askonnect.png",
    caption:
      "Intelligent B2B communication and omni-channel customer engagement platform with automated CRM routing.",
    capabilities: [
      "VoIP telephony & unified inbox architecture",
      "AI-driven lead qualification & conversation triage",
      "Predictive dialer and agent monitoring console",
      "Omni-channel API gateway (SMS, WhatsApp, Voice)",
      "Zero-downtime microservices with 99.99% SLA",
    ],
  },
  {
    id: "04",
    num: "/04",
    category: "HEALTHCARE PLATFORM",
    title: "BCMCH",
    image: "/images/BCMCH.png",
    caption:
      "Comprehensive hospital management system, telehealth portal, and electronic medical records ecosystem.",
    capabilities: [
      "HIPAA-compliant patient portal & EHR integration",
      "Automated OPD booking & doctor schedule management",
      "Secure lab report generation & telemetry sync",
      "In-hospital pharmacy & billing automation",
      "High-availability disaster recovery architecture",
    ],
  },
  {
    id: "05",
    num: "/05",
    category: "EDTECH & INTERACTIVE MEDIA",
    title: "Mazeflower",
    image: "/images/Mazeflower.png",
    caption:
      "Interactive learning and creative content publishing platform with adaptive gamification engines.",
    capabilities: [
      "Gamified learning paths & progress telemetry",
      "Cross-platform responsive canvas rendering",
      "AI-driven dynamic curriculum recommendations",
      "Secure cloud asset pipeline & instant streaming",
      "Scalable multi-user collaborative experiences",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Content entrance variants
// ─────────────────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.065, delayChildren: 0.05 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_CUSTOM },
  },
};

const maskVariants = {
  hidden: { y: "108%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.65, ease: EASE_CUSTOM },
  },
};

const imageVariants = {
  hidden: { scale: 1.04, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_CUSTOM },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PortfolioServicesSection Component
// ─────────────────────────────────────────────────────────────────────────────

export function PortfolioServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const yRightCol = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const {
    activeIndex,
    setActiveIndex,
    activeItem: service,
    setIsPaused,
    autoAdvance,
    intervalMs,
    timerKey,
    isPaused,
  } = useRotator(servicesData, { autoAdvance: true, intervalMs: 4500 });

  return (
    <section
      ref={containerRef}
      data-theme="section"
      className="relative z-20 w-full h-[100svh] min-h-[100svh] py-8 md:py-12 flex flex-col justify-center overflow-hidden snap-section select-none transition-colors duration-400"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)", borderTop: "1px solid var(--border)" }}
    >
      <GridLines />

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0 relative z-10">
        
        {/* ── Upper Header Row matching 10.8% / 30.3% / 69.3% Grid ── */}
        <div className="relative w-full flex flex-col md:flex-row items-start mb-6 md:mb-8">
          {/* Far Left Section Marker: 10.8% to 30.3% */}
          <div className="w-full md:w-[19.5%] md:ml-[10.8%] px-6 md:px-0 pt-1 mb-4 md:mb-0">
            <SectionEyebrow number="04" label="CASE STUDIES" className="!mb-0" />
          </div>

          {/* Heading Block: 30.3% to 69.3% */}
          <div className="w-full md:w-[39.0%] px-6 md:px-0 pt-0.5 mb-4 md:mb-0">
            <h2 className="font-sans text-[clamp(2.25rem,3.2vw,3.85rem)] font-light tracking-[-0.035em] leading-[0.98] text-left">
              <span className="block" style={{ color: 'var(--foreground)' }}>CASE</span>
              <span className="block font-normal" style={{ color: 'var(--foreground-muted)' }}>STUDIES.</span>
            </h2>
          </div>

          {/* Right Supporting Copy / Link: 69.3% to 88.8% */}
          <div className="w-full md:w-[19.5%] px-6 md:px-0 pt-1 flex justify-start">
            <a
              href="#contact"
              className="font-mono text-xs md:text-[13px] text-brand-accent tracking-[0.18em] uppercase hover:text-white transition-colors flex items-center gap-1.5 group"
            >
              <span>ALL WORK</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* ── Main Showcase Grid (10.8% to 88.8% -> width: 78.0%) ── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="w-full md:w-[78.0%] md:ml-[10.8%] px-6 md:px-0"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-14 items-center">
            
            {/* ── Left Column: Large Hero Case Study Image Showcase (7 cols) ── */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.id}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="w-full flex flex-col"
                >
                  {/* Category Eyebrow & Number */}
                  <motion.div variants={fadeUpVariants} className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-[2px] w-[18px] bg-[#ff5a00] inline-block" />
                      <span className="font-mono text-[12px] md:text-[13.5px] tracking-widest text-white/70 uppercase font-semibold">
                        {service.category}
                      </span>
                    </div>
                    <span className="font-mono text-sm md:text-base font-semibold text-[#ff5a00]">
                      {service.num}
                    </span>
                  </motion.div>

                  {/* Large High-Impact Case Study Device / Product Image */}
                  <motion.div
                    variants={imageVariants}
                    className="relative overflow-hidden w-full aspect-[16/10] bg-neutral-900 border border-white/10 shadow-2xl rounded-2xl group"
                  >
                    <motion.div style={{ y: yImage, scale: 1.08 }} className="relative w-full h-full will-change-transform">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 750px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                        priority
                      />
                    </motion.div>
                  </motion.div>

                  {/* Caption under large image */}
                  <motion.p
                    variants={fadeUpVariants}
                    className="font-sans text-[15px] md:text-[16px] mt-3 leading-[1.6]" style={{ color: 'var(--foreground-muted)' }}
                  >
                    {service.caption}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Right Column: Project Title, Impact Capabilities & Navigation (5 cols) ── */}
            <motion.div style={{ y: yRightCol }} className="md:col-span-5 flex flex-col justify-between h-full will-change-transform">
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.id}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="w-full flex flex-col justify-between"
                >
                  <div>
                    {/* Project Title */}
                    <div className="overflow-hidden pb-2 mb-4 border-b border-white/10">
                      <motion.h3
                        variants={maskVariants}
                        className="font-sans text-[clamp(2.2rem,3.2vw,4.0rem)] leading-[1.0] tracking-[-0.04em] font-medium text-white"
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    {/* Capabilities List */}
                    <div className="mb-6 md:mb-8">
                      <div className="font-mono text-[10px] md:text-[11.5px] tracking-widest text-white/50 uppercase mb-3">
                        ENGINEERING HIGHLIGHTS
                      </div>
                      <ul className="space-y-2.5">
                        {service.capabilities.map((capability, i) => (
                          <motion.li
                            key={i}
                            variants={fadeUpVariants}
                            className="font-sans text-[14px] md:text-[15.5px] leading-[1.55] text-white/80 flex items-start"
                          >
                            <span className="text-[#ff5a00] font-mono mr-3 text-sm font-medium select-none">
                              +
                            </span>
                            <span>{capability}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 01 / 02 / 03 / 04 / 05 Rotator Numbered Controls Strip */}
                  <div className="pt-2">
                    <RotatorTabStrip
                      dark
                      items={servicesData.map((s) => ({ id: s.id, label: s.num }))}
                      activeIndex={activeIndex}
                      onSelect={(idx) => {
                        setIsPaused(true);
                        setActiveIndex(idx);
                      }}
                      autoAdvance={autoAdvance}
                      intervalMs={intervalMs}
                      timerKey={timerKey}
                      isPaused={isPaused}
                      layoutIdPrefix="portfolio-case-tab"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
