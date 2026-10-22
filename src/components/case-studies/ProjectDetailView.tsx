"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Globe,
  Zap,
  Building2,
  Calendar,
  Users,
  Settings,
} from "lucide-react";
import { EASE_CUSTOM } from "@/lib/motion";
import { GridLines } from "@/components/ui/GridLines";
import { CaseStudy, CASE_STUDIES } from "@/lib/case-studies-data";

interface ProjectDetailViewProps {
  project: CaseStudy;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  // Related projects (excluding current)
  const relatedProjects = CASE_STUDIES.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="relative w-full min-h-screen transition-colors duration-400 select-none">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridLines />
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="project-hero"
        data-theme="section"
        className="relative z-10 w-full pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-16 md:pb-20 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            {/* Top Navigation / Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_CUSTOM }}
              className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10"
            >
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 font-mono text-xs sm:text-base tracking-[0.14em] text-white/70 uppercase font-medium">
                <Link href="/" className="hover:text-brand-accent transition-colors">HOME</Link>
                <span className="text-white/30">/</span>
                <Link href="/work" className="hover:text-brand-accent transition-colors">CASE STUDIES</Link>
                <span className="text-white/30">/</span>
                <span className="text-brand-accent font-semibold">{project.title.toUpperCase()}</span>
              </div>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-base tracking-[0.14em] uppercase text-white/80 hover:text-brand-accent transition-colors group font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>ALL CASE STUDIES</span>
              </Link>
            </motion.div>

            {/* Category Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE_CUSTOM }}
              className="flex items-center gap-2.5 mb-3 sm:mb-4 select-none"
            >
              <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
              <span className="font-mono text-xs sm:text-base font-semibold tracking-[0.14em] text-brand-accent uppercase">
                CASE STUDY {project.num} • {project.category}
              </span>
            </motion.div>

            {/* Title & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE_CUSTOM }}
              className="mb-5 sm:mb-8"
            >
              <h1 className="font-sans text-[clamp(1.9rem,4.8vw,4.8rem)] font-light tracking-[-0.035em] leading-[1.05] sm:leading-[1.02] text-white">
                {project.title}: <span className="font-normal text-white/90">{project.tagline}</span>
              </h1>
            </motion.div>

            {/* Concise Overview Hook */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: EASE_CUSTOM }}
              className="font-sans text-base sm:text-xl md:text-2xl text-white/85 font-normal leading-[1.65] max-w-4xl mb-6 sm:mb-10"
            >
              {project.description}
            </motion.p>

            {/* Meta Tags Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: EASE_CUSTOM }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12 font-mono text-xs sm:text-sm text-white/85"
            >
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.06] border border-white/10 flex items-center gap-1.5 sm:gap-2.5 whitespace-nowrap">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent shrink-0" />
                <span>{project.industry}</span>
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.06] border border-white/10 flex items-center gap-1.5 sm:gap-2.5 whitespace-nowrap">
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent shrink-0" />
                <span>Architecture &amp; Engineering</span>
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center gap-1.5 sm:gap-2.5 whitespace-nowrap">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Production Release • {project.year}</span>
              </span>
            </motion.div>

            {/* Product Showcase Visual Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.35, ease: EASE_CUSTOM }}
              data-theme="dark"
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 dark:border-white/15 bg-[#0b0c10] shadow-none dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-accent/15 rounded-full blur-[100px] pointer-events-none" />

              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1500px"
                className="object-contain object-center p-2 sm:p-6 transition-transform duration-700 group-hover:scale-[1.015]"
                priority
              />

              {/* Status Pill Top-Right */}
              <div
                className="absolute top-3 sm:top-6 right-3 sm:right-6 z-20 hidden sm:flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-mono text-[11px] sm:text-xs tracking-wider font-medium"
                style={{ color: "#e4e4e7" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ENGINEERED BY ARMIA</span>
              </div>

              {/* Caption Bottom-Left */}
              <div
                className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 z-20 flex items-center gap-2 font-mono text-[10px] sm:text-xs md:text-sm tracking-wide font-medium"
                style={{ color: "#d4d4d8" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse shrink-0" />
                <span style={{ color: "#d4d4d8" }} className="truncate">
                  {project.title.toUpperCase()} SYSTEM ECOSYSTEM • ARMIA SYSTEMS
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. PROJECT STORY & EXECUTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="project-story"
        data-theme="section"
        className="relative z-10 w-full py-16 sm:py-20 md:py-24 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start mb-12 sm:mb-20">
              
              {/* Left Column: Solution Scope */}
              <div>
                <div className="flex items-center gap-2.5 mb-4 select-none">
                  <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
                  <span className="font-mono text-xs sm:text-base font-semibold tracking-[0.14em] text-white/70 uppercase">
                    PROJECT OBJECTIVE
                  </span>
                </div>

                <h2 className="font-sans text-xl sm:text-3xl lg:text-[2rem] font-light text-white mb-4 sm:mb-5 leading-snug tracking-tight">
                  High-Impact Digital Engineering for <span className="font-normal text-white/90">{project.industry}</span>
                </h2>

                <div className="space-y-3.5 sm:space-y-4 font-sans text-sm sm:text-[17px] md:text-[18px] text-white/80 leading-[1.7] sm:leading-[1.8]">
                  <p>{project.description}</p>
                  <p>
                    Armia Systems designed, architected, and engineered the complete solution to meet strict enterprise standards for throughput, availability, and user delight.
                  </p>
                </div>
              </div>

              {/* Right Column: Armia Delivery */}
              <div className="p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] hover:bg-[#111111] border border-white/[0.08] transition-colors duration-300">
                <div className="flex items-center gap-2.5 mb-4 select-none">
                  <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
                  <span className="font-mono text-xs sm:text-base font-semibold tracking-[0.14em] text-brand-accent uppercase">
                    DELIVERY HIGHLIGHTS
                  </span>
                </div>

                <h3 className="font-sans text-xl sm:text-3xl lg:text-[2rem] font-light text-white mb-4 leading-snug tracking-tight">
                  Engineered &amp; Deployed by Armia Systems
                </h3>

                <p className="font-sans text-sm sm:text-[17px] md:text-[18px] text-white/80 leading-[1.7] sm:leading-[1.8] mb-6">
                  {project.caption}
                </p>

                {/* Scope Highlights */}
                <div className="pt-5 sm:pt-6 border-t border-white/[0.08] space-y-2.5 sm:space-y-3 font-mono text-xs sm:text-sm text-white/85 tracking-wide leading-relaxed">
                  {project.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-accent shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Core Capabilities */}
            <div>
              <div className="flex items-center gap-2.5 mb-4 select-none">
                <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
                <span className="font-mono text-xs sm:text-base font-semibold tracking-[0.14em] text-white/70 uppercase">
                  CORE CAPABILITIES
                </span>
              </div>

              <h2 className="font-sans text-xl sm:text-3xl lg:text-[2rem] font-light text-white mb-6 sm:mb-8 tracking-tight">
                Platform Architecture &amp; Key Features
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {project.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-7 rounded-2xl bg-[#0d0d0d] hover:bg-[#111111] border border-white/[0.08] hover:border-brand-accent/40 transition-colors duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs sm:text-base text-brand-accent font-semibold tracking-wider">
                          /0{idx + 1}
                        </span>
                        <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/[0.05] flex items-center justify-center text-brand-accent">
                          <Zap className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>
                      </div>
                      <p className="font-sans text-sm sm:text-[16.5px] text-white/85 leading-[1.65] font-normal">
                        {cap}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. TECHNOLOGIES
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="tech-stack"
        data-theme="section"
        className="relative z-10 w-full py-14 sm:py-20 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] border border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5 font-mono text-xs sm:text-base font-semibold text-brand-accent uppercase tracking-[0.14em]">
                  <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
                  <span>TECHNOLOGIES &amp; DELIVERY</span>
                </div>
                <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-light text-white mb-2.5 tracking-tight">
                  Production Stack
                </h3>
                <p className="font-sans text-sm sm:text-[17px] text-white/80 max-w-xl leading-[1.75]">
                  Engineered using modern, battle-tested technologies to guarantee high availability, speed, and cross-platform reliability.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-2.5 md:max-w-md">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.06] text-white/90 font-mono text-xs sm:text-sm tracking-wider border border-white/10 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. RELATED CASE STUDIES
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="related-work"
        data-theme="section"
        className="relative z-10 w-full py-16 sm:py-20 md:py-24 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5 select-none">
                  <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
                  <span className="font-mono text-xs sm:text-base font-semibold tracking-[0.14em] text-white/70 uppercase">
                    MORE WORK
                  </span>
                </div>
                <h2 className="font-sans text-[clamp(1.85rem,3.2vw,3rem)] font-light tracking-tight text-white">
                  Explore Other <span className="font-normal text-white/90">Armia Case Studies</span>
                </h2>
              </div>

              <Link
                href="/work"
                className="font-mono text-xs sm:text-base tracking-[0.1em] text-brand-accent hover:text-white transition-colors flex items-center gap-2 group shrink-0 font-medium"
              >
                <span>ALL CASE STUDIES</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
              {relatedProjects.map((proj) => (
                <Link
                  key={proj.id}
                  href={proj.link}
                  className="group block p-4 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] hover:bg-[#111111] border border-white/[0.08] hover:border-brand-accent/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-4 sm:mb-5">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="p-2 rounded-full bg-brand-accent flex items-center justify-center shadow-md">
                          <ArrowUpRight className="w-4 h-4 text-white" style={{ color: "#ffffff" }} />
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-mono text-xs sm:text-sm uppercase mb-2">
                      <span className="tracking-[0.12em] text-white/70 font-semibold">{proj.category}</span>
                      <span className="text-brand-accent font-bold text-xs sm:text-base">{proj.num}</span>
                    </div>

                    <h3 className="font-sans text-xl sm:text-2xl font-light text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors">
                      {proj.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-[16.5px] text-white/75 leading-[1.65] line-clamp-2 mb-4">
                      {proj.caption}
                    </p>
                  </div>

                  <div className="font-mono text-xs sm:text-sm text-white/60 tracking-wider pt-3 border-t border-white/[0.08]">
                    {proj.technologies.slice(0, 3).join(" • ")}
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="cta"
        data-theme="section"
        className="relative z-10 w-full py-16 sm:py-20 md:py-24"
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] border border-black/[0.08] dark:border-white/[0.12] text-center relative overflow-hidden shadow-none dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-brand-accent font-mono text-xs sm:text-sm uppercase font-semibold mb-4 sm:mb-6">
                  <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
                  <span style={{ color: "#ff5a00" }}>START YOUR PROJECT</span>
                </div>

                <h2 className="font-sans text-[clamp(1.85rem,4vw,3.6rem)] font-light tracking-tight text-white leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-5">
                  Have a Product Idea <span className="font-normal text-white">Like {project.title}?</span>
                </h2>

                <p className="font-sans text-sm sm:text-base md:text-[18px] text-white/80 leading-[1.7] mb-6 sm:mb-8 max-w-xl mx-auto">
                  Take 30 seconds to talk to our team about your web or mobile software requirements. We come highly recommended and engineer scalable digital products from concept to launch.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center sm:justify-between gap-3 sm:gap-4 bg-brand-accent hover:bg-[#ff4500] text-white h-[46px] sm:h-[52px] px-6 sm:px-8 rounded-full font-mono text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.14em] uppercase font-semibold transition-all duration-300 shadow-none dark:shadow-[0_0_20px_rgba(255,90,0,0.4)] hover:shadow-[0_0_30px_rgba(255,90,0,0.6)] cursor-pointer w-full sm:w-auto"
                    style={{ color: "#ffffff" }}
                  >
                    <span style={{ color: "#ffffff" }}>FREE TECHNICAL CONSULTATION</span>
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                      <span className="text-black text-xs font-bold" style={{ color: "#000000" }}>›</span>
                    </div>
                  </a>

                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center h-[46px] sm:h-[52px] px-6 sm:px-8 rounded-full font-mono text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.14em] uppercase text-white/85 hover:text-white border border-white/20 hover:border-white/40 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 font-semibold w-full sm:w-auto"
                  >
                    <span>BROWSE MORE WORK</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
