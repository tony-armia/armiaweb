"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
  ExternalLink,
  ChevronRight,
  Filter,
} from "lucide-react";
import { EASE_CUSTOM } from "@/lib/motion";
import { GridLines } from "@/components/ui/GridLines";
import { CASE_STUDIES, CATEGORY_FILTERS, CaseStudy } from "@/lib/case-studies-data";

export function AllWorkView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return CASE_STUDIES;
    return CASE_STUDIES.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter]);



  return (
    <div className="relative w-full min-h-screen transition-colors duration-400 select-none">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridLines />
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HEADER & INTRO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="all-work-hero"
        data-theme="section"
        className="relative z-10 w-full pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            {/* Top Navigation / Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_CUSTOM }}
              className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10"
            >
              <div className="flex items-center gap-2 sm:gap-3 font-mono text-sm sm:text-base tracking-[0.14em] text-white/70 uppercase font-medium">
                <Link href="/" className="hover:text-brand-accent transition-colors">HOME</Link>
                <span className="text-white/30">/</span>
                <span className="text-brand-accent font-semibold">ALL WORK &amp; CASE STUDIES</span>
              </div>

              <Link
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-sm sm:text-base tracking-[0.14em] uppercase text-white/80 hover:text-brand-accent transition-colors group font-medium"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>BACK TO OVERVIEW</span>
              </Link>
            </motion.div>

            {/* Category Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE_CUSTOM }}
              className="flex items-center gap-2.5 mb-4 select-none"
            >
              <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
              <span className="font-mono text-base font-semibold tracking-[0.14em] text-brand-accent uppercase">
                CASE STUDY ARCHIVE • 20+ YEARS OF ENGINEERING
              </span>
            </motion.div>

            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE_CUSTOM }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="font-sans text-[clamp(2.5rem,5.5vw,5.0rem)] font-light tracking-[-0.035em] leading-[1.0] text-white">
                ENGINEERED PRODUCTS &amp;{" "}
                <span className="font-normal text-white/90">CASE STUDIES.</span>
              </h1>
            </motion.div>

            {/* Introduction Highlighting Armia's Expertise */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: EASE_CUSTOM }}
              className="font-sans text-lg sm:text-xl md:text-2xl text-white/85 font-normal leading-[1.65] max-w-4xl mb-10 sm:mb-12"
            >
              A comprehensive collection of production-grade digital products, scalable SaaS platforms, high-concurrency mobile applications, and enterprise systems engineered by Armia Systems across two decades of technology leadership.
            </motion.p>

            {/* Portfolio Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: EASE_CUSTOM }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.08] text-white/80"
            >
              <div>
                <span className="block text-3xl sm:text-4xl md:text-5xl font-mono font-medium text-brand-accent mb-1.5">20+</span>
                <span className="font-mono text-xs sm:text-sm text-white/70 tracking-[0.12em] uppercase font-medium">Years of Innovation</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl md:text-5xl font-mono font-medium text-brand-accent mb-1.5">100+</span>
                <span className="font-mono text-xs sm:text-sm text-white/70 tracking-[0.12em] uppercase font-medium">Platforms Delivered</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl md:text-5xl font-mono font-medium text-brand-accent mb-1.5">99.99%</span>
                <span className="font-mono text-xs sm:text-sm text-white/70 tracking-[0.12em] uppercase font-medium">Infrastructure SLA</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl md:text-5xl font-mono font-medium text-brand-accent mb-1.5">7+</span>
                <span className="font-mono text-xs sm:text-sm text-white/70 tracking-[0.12em] uppercase font-medium">Industries Served</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. CATEGORY FILTERS & PORTFOLIO SHOWCASE
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="case-studies-grid"
        data-theme="section"
        className="relative z-10 w-full py-12 sm:py-16 md:py-20 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            {/* Filter Pills Navigation */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-12 sm:mb-16">
              <div className="flex items-center gap-2.5 flex-wrap">
                {CATEGORY_FILTERS.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? CASE_STUDIES.length
                      : CASE_STUDIES.filter((p) => p.filterCategory === cat.id).length;
                  const isActive = activeFilter === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveFilter(cat.id)}
                      className={`h-[42px] px-5 sm:px-6 rounded-full font-mono text-xs sm:text-sm tracking-[0.12em] uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                        isActive
                          ? "bg-brand-accent text-white border border-brand-accent shadow-[0_0_15px_rgba(255,90,0,0.3)] font-semibold"
                          : "bg-white/[0.04] text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                      }`}
                      style={isActive ? { color: "#ffffff", backgroundColor: "#ff5a00" } : undefined}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-white/[0.06] text-white/60"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="font-mono text-sm text-white/60 hidden sm:flex items-center gap-2 tracking-wide font-medium">
                <Filter className="w-4 h-4 text-brand-accent" />
                <span>FILTERING {filteredProjects.length} CASE STUDIES</span>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                PORTFOLIO GRID: All Case Studies With Equal Priority
            ────────────────────────────────────────────────────────────── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE_CUSTOM }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    href={proj.link}
                    className="group block p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] hover:bg-[#111111] border border-white/[0.08] hover:border-brand-accent/50 transition-all duration-300 overflow-hidden shadow-none dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Presentation Frame */}
                      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0b0c10] border border-white/10 mb-6 group/img">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                        <div className="absolute -top-16 -left-16 w-36 h-36 bg-brand-accent/10 rounded-full blur-[50px] pointer-events-none" />

                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain object-center p-3 sm:p-4 transition-transform duration-700 group-hover/img:scale-105"
                        />
                        
                        {/* Floating Arrow Overlay */}
                        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                          <span
                            className="p-2 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-lg"
                            style={{ color: "#ffffff", backgroundColor: "#ff5a00" }}
                          >
                            <ArrowUpRight className="w-4 h-4 text-white" style={{ color: "#ffffff" }} />
                          </span>
                        </div>

                        {/* Year & Industry Pill */}
                        <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none flex items-center">
                          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 font-mono text-[11px] sm:text-xs tracking-wide text-white font-medium max-w-full truncate shadow-md whitespace-nowrap">
                            <span className="shrink-0">{proj.year}</span>
                            <span className="text-white/40 shrink-0">•</span>
                            <span className="truncate">{proj.industry}</span>
                          </span>
                        </div>
                      </div>

                      {/* Category & Project Number */}
                      <div className="flex items-center justify-between font-mono text-xs sm:text-sm uppercase mb-2.5">
                        <span className="tracking-[0.12em] text-white/70 font-semibold">{proj.category}</span>
                        <span className="text-brand-accent font-bold text-sm sm:text-base">{proj.num}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-sans text-2xl sm:text-[26px] font-light text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                        {proj.title}
                      </h3>

                      {/* Tagline */}
                      <p className="font-mono text-xs sm:text-sm text-brand-accent uppercase tracking-wide font-medium mb-3">
                        {proj.tagline}
                      </p>

                      {/* Short Description */}
                      <p className="font-sans text-base sm:text-[16.5px] text-white/75 leading-[1.7] mb-5 line-clamp-3">
                        {proj.description}
                      </p>

                      {/* Capabilities Preview */}
                      <div className="space-y-2 mb-5 pt-4 border-t border-white/[0.08] font-sans text-sm sm:text-[15px] text-white/85 leading-snug">
                        {proj.capabilities.slice(0, 2).map((cap, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Capabilities & Tech Tags Footer */}
                    <div className="pt-4 border-t border-white/[0.08]">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-white/[0.05] text-white/80 font-mono text-xs tracking-wider border border-white/10 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between font-mono text-xs sm:text-sm text-brand-accent group-hover:text-[#ff4500] transition-colors">
                        <span className="tracking-[0.12em] uppercase font-semibold">VIEW CASE STUDY</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. DIRECT TECHNICAL CONSULTATION CTA BANNER
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="work-cta"
        data-theme="section"
        className="relative z-10 w-full py-16 sm:py-20 md:py-24"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0d0d0d] border border-black/[0.08] dark:border-white/[0.12] text-center relative overflow-hidden shadow-none dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-brand-accent font-mono text-sm uppercase font-semibold mb-6">
                  <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
                  <span style={{ color: "#ff5a00" }}>START YOUR PROJECT</span>
                </div>

                <h2 className="font-sans text-[clamp(2.2rem,4vw,3.6rem)] font-light tracking-tight text-white leading-[1.08] mb-5">
                  Ready to Build Your Next{" "}
                  <span className="font-normal text-white">Scalable Digital Product?</span>
                </h2>

                <p className="font-sans text-base sm:text-lg md:text-[19px] text-white/80 leading-[1.75] mb-8 max-w-xl mx-auto">
                  Take 30 seconds to talk to our principal architects about your web, cloud, or mobile software requirements. We engineer production-ready systems from concept to launch.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-between gap-4 bg-brand-accent hover:bg-[#ff4500] text-white h-[50px] sm:h-[52px] px-8 rounded-full font-mono text-xs sm:text-sm tracking-[0.14em] uppercase font-semibold transition-all duration-300 shadow-none dark:shadow-[0_0_20px_rgba(255,90,0,0.4)] hover:shadow-[0_0_30px_rgba(255,90,0,0.6)] cursor-pointer"
                    style={{ color: "#ffffff" }}
                  >
                    <span style={{ color: "#ffffff" }}>FREE TECHNICAL CONSULTATION</span>
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                      <span className="text-black text-xs font-bold" style={{ color: "#000000" }}>›</span>
                    </div>
                  </a>

                  <Link
                    href="/#services"
                    className="inline-flex items-center justify-center h-[50px] sm:h-[52px] px-8 rounded-full font-mono text-xs sm:text-sm tracking-[0.14em] uppercase text-white/85 hover:text-white border border-white/20 hover:border-white/40 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 font-semibold"
                  >
                    <span>EXPLORE SERVICES</span>
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
