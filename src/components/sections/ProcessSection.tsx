"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  ShieldCheck,
  Lock,
  Target,
  ArrowRight,
  ArrowDown,
  Compass,
  Layers,
  Code2,
  Rocket,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 5-Phase Delivery Framework Data
// ─────────────────────────────────────────────────────────────────────────────

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface PhaseData {
  id: string;
  num: string;
  label: string;
  category: string;
  title: string;
  description: string;
  features: FeatureItem[];
}

const PHASES: PhaseData[] = [
  {
    id: "01",
    num: "01",
    label: "Discovery",
    category: "STRATEGY",
    title: "Discovery & Technical Due Diligence",
    description:
      "We turn high-level business goals into a risk-managed technical roadmap, auditing existing systems and defining architectural benchmarks.",
    features: [
      {
        icon: Compass,
        title: "ARCHITECTURE AUDIT",
        description: "Audit legacy stack & uncover hidden bottlenecks.",
      },
      {
        icon: Lock,
        title: "SECURITY MATRIX",
        description: "Establish SOC-2 & compliance baselines early.",
      },
      {
        icon: Target,
        title: "ROADMAP BLUEPRINT",
        description: "Sprint milestones & architectural deliverables locked.",
      },
    ],
  },
  {
    id: "02",
    num: "02",
    label: "Planning",
    category: "ARCHITECTURE & UX",
    title: "System Architecture & UX Design",
    description:
      "We define data schemas, API contracts, and interactive Figma design systems to ensure pixel-perfect clarity before engineering begins.",
    features: [
      {
        icon: Layers,
        title: "COMPONENT TOKENS",
        description: "Design systems with WCAG 2.1 AA compliance.",
      },
      {
        icon: Compass,
        title: "API CONTRACTS",
        description: "Event streams, databases & microservices defined.",
      },
      {
        icon: Target,
        title: "USER VALIDATION",
        description: "High-fidelity clickable prototypes tested with users.",
      },
    ],
  },
  {
    id: "03",
    num: "03",
    label: "Development",
    category: "EXECUTION",
    title: "Agile Sprints & CI/CD Pipelines",
    description:
      "Two-week iterative sprints with automated testing gates, clean code reviews, and transparent Jira telemetry tracking daily velocity.",
    features: [
      {
        icon: Code2,
        title: "BI-WEEKLY BUILDS",
        description: "Demonstrable working software every sprint.",
      },
      {
        icon: ShieldCheck,
        title: "AUTOMATED CI/CD",
        description: "Automated test suites on every pull request.",
      },
      {
        icon: Target,
        title: "PRODUCTION APIS",
        description: "Microservices engineered for sub-second latency.",
      },
    ],
  },
  {
    id: "04",
    num: "04",
    label: "Assurance",
    category: "ASSURANCE",
    title: "Security Audits & Performance",
    description:
      "Automated regression test suites, penetration testing, and load stress audits guarantee 99.99% resilience before going live.",
    features: [
      {
        icon: ShieldCheck,
        title: "AUTOMATED TEST SUITES",
        description: "Catch issues early, ship with confidence.",
      },
      {
        icon: Lock,
        title: "SECURITY AUDITS",
        description: "Find and fix risks before they hit users.",
      },
      {
        icon: Target,
        title: "LOAD & STRESS PROFILING",
        description: "Built for scale, ready for growth.",
      },
    ],
  },
  {
    id: "05",
    num: "05",
    label: "Launch",
    category: "DEPLOYMENT & SRE",
    title: "Zero-Downtime Rollout & Scale",
    description:
      "Canary and blue-green cloud deployments with multi-region DNS routing, 24/7 observability, and guaranteed 99.99% uptime.",
    features: [
      {
        icon: Rocket,
        title: "BLUE-GREEN DEPLOY",
        description: "Zero disruption for active enterprise users.",
      },
      {
        icon: ShieldCheck,
        title: "24/7 TELEMETRY",
        description: "Real-time latency alerts and automated monitoring.",
      },
      {
        icon: Target,
        title: "ENTERPRISE SLA",
        description: "Guaranteed uptime with automated disaster recovery.",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function ProcessSection() {
  const [activeIdx, setActiveIdx] = useState<number>(2); // Default to Phase 03 Development
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yCard = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const yWave = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const activePhase = PHASES[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="process"
      data-theme="section"
      className="relative w-full select-none overflow-hidden transition-colors duration-400"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      aria-label="Delivery Framework and Process"
    >
      {/* ── 1. Top Dark Header Strip ── */}
      <div className="w-full py-8 sm:py-10 transition-colors duration-400" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[10.8%] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left: Standardized Section Indicator */}
          <div className="flex items-center gap-3">
            <SectionEyebrow number="05" label="PROCESS" className="!mb-0" />
          </div>

          {/* Center: Main Headline */}
          <div className="flex flex-col">
            <div className="font-mono text-base tracking-[0.14em] text-white/60 uppercase font-semibold mb-1 flex items-center gap-2">
              <span className="w-2.5 h-[1.5px] bg-[#FF5A00]" />
              <span>PROVEN METHODOLOGY</span>
            </div>
            <h2 className="font-sans font-light text-2xl sm:text-3xl lg:text-[2.6rem] tracking-tight text-white leading-none uppercase">
              DELIVERY FRAMEWORK
              <span className="text-[#FF5A00] font-normal">.</span>
            </h2>
          </div>

          {/* Right: Subtitle Copy */}
          <div className="max-w-xs lg:border-l lg:border-white/10 lg:pl-6">
            <p className="font-sans text-base sm:text-[17px] text-white/70 leading-[1.6]">
              Every engagement follows the same rigorous five-phase process &mdash; refined over 20+ years.
            </p>
          </div>
        </div>
      </div>

      {/* ── 2. Main Dark Showcase Body (Obsidian + Warm Bronze Fluid Lighting) ── */}
      <div className="relative w-full py-16 sm:py-24 lg:py-28 overflow-hidden">
        {/* Sweeping Architectural Bronze Wave Background (Dark Mode) */}
        <motion.div
          style={{ y: yWave, backgroundImage: "url('/images/delivery_bronze_wave.jpg')" }}
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen bg-cover bg-center img-dark-mode will-change-transform"
        />

        {/* Sweeping Architectural Fluid Wave Background (Light Mode) */}
        <motion.div
          style={{ y: yWave, backgroundImage: "url('/images/process_fluid_wave_light.jpg')" }}
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center img-light-mode will-change-transform"
        />

        {/* Subtle radial ambient glow */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-10 w-[600px] h-[400px] bg-[#FF5A00]/[0.035] rounded-full blur-[160px] pointer-events-none"
        />

        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[10.8%] relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ── Left Column: Phase Details & Interactive Timeline (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Phase Eyebrow */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="w-4 h-[2px] bg-[#FF5A00] inline-block" />
                  <span className="font-mono text-base tracking-[0.14em] text-white/70 uppercase font-semibold">
                    PHASE {activePhase.num} // {activePhase.category}
                  </span>
                </div>

                {/* Phase Title */}
                <h3 className="font-sans text-3xl sm:text-4xl lg:text-[3.0rem] font-light tracking-tight text-white leading-[1.08] mb-5">
                  {activePhase.title}
                </h3>

                {/* Phase Description */}
                <p className="font-sans text-base sm:text-[17px] text-white/75 leading-[1.75] max-w-xl mb-10">
                  {activePhase.description}
                </p>

                {/* 3 Features Row matching mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                  {activePhase.features.map((feat, i) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div key={i} className="flex flex-col gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white/90">
                          <FeatIcon className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                          <h4 className="font-mono text-base font-semibold tracking-wide text-white uppercase mb-1.5">
                            {feat.title}
                          </h4>
                          <p className="text-base text-white/60 leading-relaxed">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Horizontal Phase Stepper Timeline matching mockup */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {PHASES.map((p, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <React.Fragment key={p.id}>
                      <button
                        onClick={() => setActiveIdx(idx)}
                        className="relative pb-3 text-left transition-all cursor-pointer group shrink-0 min-w-[75px]"
                      >
                        <span
                          className={`block font-mono text-base font-semibold transition-colors ${
                            isActive ? "text-[#FF5A00]" : "text-white/40 group-hover:text-white"
                          }`}
                        >
                          {p.num}
                        </span>
                        <span
                          className={`block font-sans text-base transition-colors ${
                            isActive ? "text-white font-medium" : "text-white/60 group-hover:text-white"
                          }`}
                        >
                          {p.label}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="activePhaseBar"
                            className="absolute bottom-0 left-0 h-[2.5px] w-full bg-[#FF5A00] rounded-full"
                          />
                        )}
                      </button>

                      {idx < PHASES.length - 1 && (
                        <div className="h-[1px] flex-1 min-w-[20px] bg-white/10 self-center -mt-2" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>


            </div>

          </div>

          {/* ── Right Column: Floating Dark Card with Engineer Photo (5 cols) ── */}
          <motion.div style={{ y: yCard }} className="lg:col-span-5 will-change-transform mt-2 sm:mt-4 lg:mt-0">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0c0d14] text-white border border-white/10">
              
              {/* Top Photo with Code Monitor & Trusted Tag */}
              <div className="relative w-full h-[200px] sm:h-[240px] xl:h-[260px] overflow-hidden bg-neutral-900 dark:bg-black">
                {/* Dark Mode Photo */}
                <div className="absolute inset-0 img-dark-mode">
                  <Image
                    src="/images/delivery_engineer_monitor.jpg"
                    alt="Software Engineer analyzing performance metrics"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                </div>

                {/* Light Mode Photo */}
                <div className="absolute inset-0 img-light-mode">
                  <Image
                    src="/images/delivery_engineer_monitor_light.jpg"
                    alt="Software Engineer analyzing performance metrics"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Top Right Floating Badge */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 shadow-sm">
                  <span className="w-2.5 h-[1.5px] bg-[#FF5A00] inline-block" />
                  <span className="font-mono text-xs sm:text-[13px] tracking-[0.12em] text-white uppercase font-medium">
                    TRUSTED BY GLOBAL BRANDS
                  </span>
                </div>
              </div>

              {/* Bottom Dark Card Body */}
              <div className="p-5 sm:p-6 lg:p-7 bg-[#0e1018]">
                {/* Header Row: Title on Left, Metric on Right */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-white/[0.08]">
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs sm:text-[13px] tracking-[0.14em] text-[#FF5A00] uppercase font-semibold mb-1">
                      // WHAT WE DELIVER
                    </div>
                    <h4 className="font-sans font-normal text-base sm:text-lg lg:text-xl text-white leading-snug">
                      Built for Security.
                      <br className="hidden sm:inline" />{" "}
                      Engineered for Performance.
                    </h4>
                  </div>

                  <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center gap-2 sm:gap-1 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4">
                    <div className="font-sans font-medium text-2xl sm:text-3xl lg:text-4xl text-[#FF5A00] leading-none whitespace-nowrap">
                      99.99%
                    </div>
                    <div className="font-mono text-[9px] sm:text-[10px] xl:text-[11px] tracking-wider uppercase text-white/60 font-medium sm:text-right leading-tight">
                      RESILIENCE GUARANTEE
                    </div>
                  </div>
                </div>

                {/* 3 Points Checklist matching reference */}
                <div className="space-y-2.5 sm:space-y-3 py-4 sm:py-5">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs sm:text-sm text-[#FF5A00] font-semibold shrink-0 mt-0.5">
                      01
                    </span>
                    <span className="font-sans text-sm sm:text-base text-white/90 font-normal leading-snug">
                      Dedicated engineers &amp; sprint leads
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs sm:text-sm text-[#FF5A00] font-semibold shrink-0 mt-0.5">
                      02
                    </span>
                    <span className="font-sans text-sm sm:text-base text-white/90 font-normal leading-snug">
                      2-week sprints with transparent Jira boards
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs sm:text-sm text-[#FF5A00] font-semibold shrink-0 mt-0.5">
                      03
                    </span>
                    <span className="font-sans text-sm sm:text-base text-white/90 font-normal leading-snug">
                      Automated testing &amp; 99.99% SLA uptime
                    </span>
                  </div>
                </div>

                {/* Card Action Row matching mockup */}
                <div className="pt-4 sm:pt-5 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between flex-wrap gap-x-4 gap-y-2.5">
                    <a
                      href="#contact"
                      className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF5A00] text-white flex items-center justify-center shadow-md shadow-[#FF5A00]/25 transition-transform duration-300 group-hover:scale-105 shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs sm:text-[13px] tracking-wide uppercase text-white font-medium group-hover:text-[#FF5A00] transition-colors whitespace-nowrap">
                        SCHEDULE A TECHNICAL AUDIT
                      </span>
                    </a>

                    <a
                      href="#services"
                      className="font-mono text-xs sm:text-[13px] tracking-wide uppercase text-white/60 hover:text-white flex items-center gap-1.5 transition-colors group/learn shrink-0 pl-11 sm:pl-0"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/learn:translate-x-1" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
