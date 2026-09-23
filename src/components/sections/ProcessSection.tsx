"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    id: "04",
    num: "04",
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
  const [activeIdx, setActiveIdx] = useState<number>(2); // Default to Phase 03 Assurance matching screenshot

  const activePhase = PHASES[activeIdx];

  return (
    <section
      id="process"
      data-theme="dark"
      className="relative w-full bg-[#08090c] text-white select-none overflow-hidden"
      aria-label="Delivery Framework and Process"
    >
      {/* ── 1. Top Light Header Strip (Matching Reference Mockup) ── */}
      <div className="w-full bg-[#f6f6f5] text-[#111111] py-8 sm:py-10 px-6 sm:px-12 md:px-16 lg:px-24 border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1500px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left: Section Indicator */}
          <div className="flex items-center gap-3">
            <span className="w-4 h-[2px] bg-[#FF5A00] inline-block" />
            <span className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-[#111111]">
              05
            </span>
            <span className="font-mono text-[11px] sm:text-xs tracking-[0.24em] text-[#777777] uppercase font-medium">
              PROCESS
            </span>
          </div>

          {/* Center: Main Headline */}
          <div className="flex flex-col">
            <div className="font-mono text-[11px] sm:text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold mb-1 flex items-center gap-2">
              <span className="w-2.5 h-[1.5px] bg-[#666666]" />
              <span>A &mdash; PROVEN</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[3.2rem] tracking-tight text-[#111111] leading-none uppercase">
              DELIVERY FRAMEWORK
              <span className="text-[#FF5A00]">.</span>
            </h2>
          </div>

          {/* Right: Subtitle Copy */}
          <div className="max-w-xs lg:border-l lg:border-black/10 lg:pl-6">
            <p className="font-sans text-[13px] sm:text-[14px] text-[#666666] leading-[1.6]">
              Every engagement follows the same rigorous five-phase process &mdash; refined over 20+ years.
            </p>
          </div>
        </div>
      </div>

      {/* ── 2. Main Dark Showcase Body (Obsidian + Warm Bronze Fluid Lighting) ── */}
      <div className="relative w-full py-16 sm:py-24 lg:py-28 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden">
        {/* Sweeping Architectural Bronze Wave Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/delivery_bronze_wave.jpg')" }}
        />

        {/* Subtle radial ambient glow */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-10 w-[600px] h-[400px] bg-[#FF5A00]/[0.035] rounded-full blur-[160px] pointer-events-none"
        />

        <div className="mx-auto w-full max-w-[1500px] relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
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
                  <span className="font-mono text-[11px] sm:text-xs tracking-[0.22em] text-[#999999] uppercase font-semibold">
                    PHASE {activePhase.num} // {activePhase.category}
                  </span>
                </div>

                {/* Phase Title */}
                <h3 className="font-sans text-3xl sm:text-4xl lg:text-[3.2rem] font-bold tracking-tight text-white leading-[1.08] mb-5">
                  {activePhase.title}
                </h3>

                {/* Phase Description */}
                <p className="font-sans text-[15px] sm:text-[16px] text-white/70 leading-[1.7] max-w-xl mb-10">
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
                          <h4 className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-wider text-white uppercase mb-1">
                            {feat.title}
                          </h4>
                          <p className="text-xs text-white/50 leading-relaxed">
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
              <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
                {PHASES.map((p, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <React.Fragment key={p.id}>
                      <button
                        onClick={() => setActiveIdx(idx)}
                        className="relative pb-3 text-left transition-all cursor-pointer group shrink-0 min-w-[75px]"
                      >
                        <span
                          className={`block font-mono text-xs font-semibold transition-colors ${
                            isActive ? "text-[#FF5A00]" : "text-white/40 group-hover:text-white"
                          }`}
                        >
                          {p.num}
                        </span>
                        <span
                          className={`block font-sans text-sm transition-colors ${
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

              {/* Scroll to Explore indicator */}
              <div className="flex items-center gap-3 pt-6">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                  SCROLL TO EXPLORE
                </span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Floating White Card with Engineer Photo (5 cols) ── */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white text-[#111111] border border-white/10">
              
              {/* Top Photo with Code Monitor & Trusted Tag */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-black">
                <Image
                  src="/images/delivery_engineer_monitor.jpg"
                  alt="Software Engineer analyzing performance metrics"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Top Right Floating Badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
                  <span className="w-2.5 h-[1.5px] bg-[#FF5A00] inline-block" />
                  <span className="font-mono text-[9.5px] tracking-widest text-white/90 uppercase font-medium">
                    TRUSTED BY GLOBAL BRANDS
                  </span>
                </div>
              </div>

              {/* Bottom White Card Body */}
              <div className="p-7 sm:p-9 bg-[#fbfbfb]">
                {/* Header Row: Title on Left, Metric on Right */}
                <div className="grid grid-cols-12 gap-4 items-center pb-6 border-b border-black/[0.08]">
                  <div className="col-span-8">
                    <div className="font-mono text-[10.5px] tracking-widest text-[#FF5A00] uppercase font-semibold mb-1">
                      // WHAT WE DELIVER
                    </div>
                    <h4 className="font-sans font-bold text-xl sm:text-2xl text-[#111111] leading-tight">
                      Built for Security.
                      <br />
                      Engineered for Performance.
                    </h4>
                  </div>

                  <div className="col-span-4 pl-4 border-l border-black/10 flex flex-col justify-center">
                    <div className="font-sans font-extrabold text-3xl sm:text-4xl text-[#FF5A00] leading-none">
                      99.99%
                    </div>
                    <div className="font-mono text-[8.5px] sm:text-[9px] tracking-wider uppercase text-[#777777] font-semibold mt-1">
                      RESILIENCE GUARANTEE
                    </div>
                  </div>
                </div>

                {/* 3 Points Checklist matching reference */}
                <div className="space-y-3.5 py-6">
                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-sm text-[#FF5A00] font-bold shrink-0 mt-0.5">
                      01
                    </span>
                    <span className="font-sans text-[13px] sm:text-[14px] text-[#222222] font-medium">
                      Dedicated engineers &amp; sprint leads
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-sm text-[#FF5A00] font-bold shrink-0 mt-0.5">
                      02
                    </span>
                    <span className="font-sans text-[13px] sm:text-[14px] text-[#222222] font-medium">
                      2-week sprints with transparent Jira boards
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-sm text-[#FF5A00] font-bold shrink-0 mt-0.5">
                      03
                    </span>
                    <span className="font-sans text-[13px] sm:text-[14px] text-[#222222] font-medium">
                      Automated testing &amp; 99.99% SLA uptime
                    </span>
                  </div>
                </div>

                {/* Card Action Row matching mockup */}
                <div className="pt-5 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href="#contact"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#FF5A00] text-white flex items-center justify-center shadow-md shadow-[#FF5A00]/25 transition-transform duration-300 group-hover:scale-105">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#111111] font-bold group-hover:text-[#FF5A00] transition-colors">
                      SCHEDULE A TECHNICAL AUDIT
                    </span>
                  </a>

                  <a
                    href="#services"
                    className="font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#777777] hover:text-[#111111] flex items-center gap-1.5 transition-colors group/learn"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/learn:translate-x-1" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
