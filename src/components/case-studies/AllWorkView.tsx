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
              <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm tracking-[0.14em] text-white/60 uppercase">
                <Link href="/" className="hover:text-brand-accent transition-colors">HOME</Link>
                <span className="text-white/30">/</span>
                <span className="text-brand-accent font-semibold">ALL WORK &amp; CASE STUDIES</span>
              </div>

              <Link
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.14em] uppercase text-white/80 hover:text-brand-accent transition-colors group"
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
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-[2px] w-[24px] bg-brand-accent inline-block" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.16em] text-brand-accent font-semibold uppercase">
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
              className="font-sans text-lg sm:text-xl md:text-2xl text-white/75 font-normal leading-[1.6] max-w-4xl mb-10 sm:mb-12"
            >
              A comprehensive collection of production-grade digital products, scalable SaaS platforms, high-concurrency mobile applications, and enterprise systems engineered by Armia Systems across two decades of technology leadership.
            </motion.p>

            {/* Portfolio Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: EASE_CUSTOM }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08] font-mono text-xs text-white/80"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-light text-brand-accent font-sans mb-1">20+</span>
                <span className="text-white/60 tracking-wider uppercase text-[11px] sm:text-xs">Years of Innovation</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-light text-brand-accent font-sans mb-1">100+</span>
                <span className="text-white/60 tracking-wider uppercase text-[11px] sm:text-xs">Platforms Delivered</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-light text-brand-accent font-sans mb-1">99.99%</span>
                <span className="text-white/60 tracking-wider uppercase text-[11px] sm:text-xs">Infrastructure SLA</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-light text-brand-accent font-sans mb-1">7+</span>
                <span className="text-white/60 tracking-wider uppercase text-[11px] sm:text-xs">Industries Served</span>
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
              <div className="flex items-center gap-2 flex-wrap">
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
                      className={`h-[38px] px-4 sm:px-5 rounded-full font-mono text-xs tracking-[0.12em] uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? "bg-brand-accent text-white border border-brand-accent shadow-[0_0_15px_rgba(255,90,0,0.3)] font-semibold"
                          : "bg-white/[0.04] text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                      }`}
                      style={isActive ? { color: "#ffffff", backgroundColor: "#ff5a00" } : undefined}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-white/[0.06] text-white/50"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="font-mono text-xs text-white/50 hidden sm:flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-brand-accent" />
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
                        <div className="absolute bottom-3 left-3 z-20">
                          <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 font-mono text-[10px] text-white/90">
                            {proj.year} • {proj.industry}
                          </span>
                        </div>
                      </div>

                      {/* Category & Project Number */}
                      <div className="flex items-center justify-between font-mono text-xs text-white/50 uppercase mb-2">
                        <span className="tracking-wider">{proj.category}</span>
                        <span className="text-brand-accent font-semibold">{proj.num}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-sans text-2xl font-light text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
                        {proj.title}
                      </h3>

                      {/* Tagline */}
                      <p className="font-mono text-xs text-white/60 uppercase tracking-wide mb-3">
                        {proj.tagline}
                      </p>

                      {/* Short Description */}
                      <p className="font-sans text-xs sm:text-sm text-white/65 leading-[1.65] mb-4 line-clamp-3">
                        {proj.description}
                      </p>

                      {/* Capabilities Preview */}
                      <div className="space-y-1.5 mb-5 pt-3.5 border-t border-white/[0.08] font-sans text-xs text-white/75">
                        {proj.capabilities.slice(0, 2).map((cap, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Capabilities & Tech Tags Footer */}
                    <div className="pt-4 border-t border-white/[0.08]">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proj.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full bg-white/[0.04] text-white/70 font-mono text-[10px] border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between font-mono text-xs text-brand-accent group-hover:text-[#ff4500] transition-colors">
                        <span className="tracking-wider uppercase font-semibold">VIEW CASE STUDY</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-brand-accent font-mono text-xs uppercase font-semibold mb-5">
                  <span style={{ color: "#ff5a00" }}>START YOUR PROJECT</span>
                </div>

                <h2 className="font-sans text-[clamp(2rem,3.8vw,3.4rem)] font-light tracking-tight text-white leading-[1.1] mb-5">
                  Ready to Build Your Next{" "}
                  <span className="font-normal text-white">Scalable Digital Product?</span>
                </h2>

                <p className="font-sans text-sm sm:text-base text-white/70 leading-[1.7] mb-8 max-w-xl mx-auto">
                  Take 30 seconds to talk to our principal architects about your web, cloud, or mobile software requirements. We engineer production-ready systems from concept to launch.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-between gap-4 bg-brand-accent hover:bg-[#ff4500] text-white h-[48px] px-7 rounded-full font-mono text-sm tracking-[0.14em] uppercase font-semibold transition-all duration-300 shadow-none dark:shadow-[0_0_20px_rgba(255,90,0,0.4)] hover:shadow-[0_0_30px_rgba(255,90,0,0.6)] cursor-pointer"
                    style={{ color: "#ffffff" }}
                  >
                    <span style={{ color: "#ffffff" }}>FREE TECHNICAL CONSULTATION</span>
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                      <span className="text-black text-xs font-bold" style={{ color: "#000000" }}>›</span>
                    </div>
                  </a>

                  <Link
                    href="/#services"
                    className="inline-flex items-center justify-center h-[48px] px-7 rounded-full font-mono text-sm tracking-[0.14em] uppercase text-white/80 hover:text-white border border-white/20 hover:border-white/40 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300"
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
