"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BLOG_ARTICLES } from "@/data/blog";
import { GridLines } from "@/components/ui/GridLines";
import { VIEWPORT_ONCE, EASE_CUSTOM } from "@/lib/motion";

export function BlogSection() {
  const featuredArticle = BLOG_ARTICLES[0];
  const sideArticles = BLOG_ARTICLES.slice(1, 4);

  return (
    <section
      data-theme="section"
      className="relative w-full min-h-[100svh] select-none snap-section flex flex-col justify-between overflow-hidden py-10 md:py-14 transition-colors duration-400"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)", borderTop: "1px solid var(--border)" }}
    >
      <GridLines />

      {/* Subtle ambient grid intersection nodes matching reference image */}
      <div className="absolute top-[9%] left-[3.2%] w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_#FF5A00] pointer-events-none opacity-80" />
      <div className="absolute bottom-[24%] left-[3.2%] w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_#FF5A00] pointer-events-none opacity-80" />
      <div className="absolute top-[28%] right-[2.5%] w-1.5 h-1.5 rounded-full bg-brand-accent/60 shadow-[0_0_8px_#FF5A00] pointer-events-none" />

      {/* ── Top Header Area ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-[10.8%] mb-6 md:mb-8 shrink-0">
        {/* Top Eyebrow Row: 09 / INSIGHTS & VIEW ALL ARTICLES */}
        <div className="flex items-center justify-between mb-3 md:mb-4">
          {/* Left Eyebrow with glowing orange node */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_#FF5A00] inline-block shrink-0" />
            <span className="font-mono text-xs md:text-[13px] tracking-[0.2em] uppercase text-brand-accent font-medium">
              09
            </span>
            <span className="font-mono text-xs md:text-[13px] tracking-[0.2em]" style={{ color: 'var(--foreground-subtle)' }}>
              /
            </span>
            <span className="font-mono text-xs md:text-[13px] tracking-[0.2em] uppercase font-medium" style={{ color: 'var(--foreground)' }}>
              INSIGHTS
            </span>
          </div>

          {/* Right Action Link */}
          <a
            href="#blog"
            className="font-mono text-xs md:text-[13px] text-brand-accent tracking-[0.16em] uppercase transition-colors flex items-center gap-1.5 group"
          >
            <span>VIEW ALL ARTICLES</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Title + Center Engineering Monospace + Far Right Micro Meta */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Main Title & Center Divider Block */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-12">
            <h2 className="font-sans text-[clamp(2.5rem,4.2vw,4.5rem)] font-light tracking-[-0.035em] leading-[0.92] text-left">
              <span className="block" style={{ color: 'var(--foreground)' }}>LATEST</span>
              <span className="block font-normal" style={{ color: 'var(--foreground)' }}>
                INSIGHTS<span className="text-brand-accent">.</span>
              </span>
            </h2>

            {/* Hairline Divider + Engineering Strategy text */}
            <div className="hidden md:flex items-center gap-6 pl-2">
              <div className="w-[1px] h-14" style={{ backgroundColor: 'var(--border-strong)' }} />
              <p className="font-mono text-[11px] md:text-xs leading-relaxed uppercase tracking-[0.16em] max-w-[260px]" style={{ color: 'var(--foreground-muted)' }}>
                ENGINEERING ARCHITECTURE,
                <br />
                AI SYSTEMS &amp; TECH STRATEGY.
              </p>
            </div>
          </div>

          {/* Far Right 3-tier label list */}
          <div className="hidden lg:flex flex-col items-start font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase leading-snug pr-2" style={{ color: 'var(--foreground-subtle)' }}>
            <span>IDEAS</span>
            <span>SYSTEMS</span>
            <span>REAL IMPACT</span>
          </div>
        </div>
      </div>

      {/* ── Main Asymmetric 2-Column Showcase (Left Featured 01 + Right Stacked 02, 03, 04) ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-[10.8%] flex-1 flex flex-col justify-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* ── LEFT COLUMN: Featured Large Card (01) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.5, ease: EASE_CUSTOM }}
            className="lg:col-span-6 flex"
          >
            <Link
              href={featuredArticle.href}
              className="relative w-full rounded-2xl border border-white/[0.08] bg-[#0c0e14]/90 overflow-hidden flex flex-col justify-between p-6 sm:p-8 group hover:border-white/20 transition-all duration-500 shadow-2xl min-h-[460px] lg:min-h-[500px]"
            >
              {/* Background Cover Image with Eclipse Glow & Dark Gradients */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                />
                {/* Top gradient for meta legibility */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
                {/* Bottom deep gradient for title/text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/75 to-transparent pointer-events-none" />
                {/* Card subtle border ring */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08] pointer-events-none" />
              </div>

              {/* Card Top Row: 01 / and Date */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="flex items-center gap-1 font-mono text-sm tracking-wider">
                  <span className="text-white font-medium">01</span>
                  <span className="text-brand-accent font-semibold">/</span>
                </div>
                <span className="font-mono text-[11px] md:text-xs text-white/60 tracking-widest uppercase">
                  {featuredArticle.date}
                </span>
              </div>

              {/* Rotated Left Edge Badge: FEATURED ARTICLE */}
              <div className="absolute left-6 sm:left-8 top-28 z-10 [writing-mode:vertical-rl] rotate-180 font-mono text-[9px] md:text-[10px] tracking-[0.28em] text-white/35 uppercase select-none pointer-events-none">
                FEATURED ARTICLE
              </div>

              {/* Card Bottom Area: Category, Title, Subtitle & Arrow */}
              <div className="relative z-10 mt-auto pt-24">
                {/* Category indicator with orange square */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2 h-2 bg-brand-accent inline-block shrink-0" />
                  <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/80 font-semibold">
                    {featuredArticle.category}
                  </span>
                </div>

                {/* Title, description & circular arrow button */}
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <h3 className="font-sans font-medium text-xl sm:text-2xl lg:text-[26px] text-white leading-tight tracking-tight group-hover:text-brand-accent transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed mt-2 max-w-md">
                      {featuredArticle.description}
                    </p>
                  </div>

                  {/* Circular Arrow Button */}
                  <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 group-hover:border-brand-accent group-hover:text-brand-accent group-hover:bg-brand-accent/10 transition-all duration-300 shrink-0">
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── RIGHT COLUMN: 3 Stacked Horizontal Cards (02, 03, 04) ── */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3.5 sm:gap-4">
            {sideArticles.map((article, idx) => {
              const num = `0${idx + 2}`;
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.5, delay: 0.08 * (idx + 1), ease: EASE_CUSTOM }}
                  className="flex-1"
                >
                  <Link
                    href={article.href}
                    className="relative rounded-2xl border border-white/[0.08] bg-[#0c0e14]/90 overflow-hidden p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 group hover:border-white/20 hover:bg-[#10121a] transition-all duration-300 h-full shadow-lg"
                  >
                    {/* Left Thumbnail with Number Overlay */}
                    <div className="relative w-full sm:w-[190px] md:w-[210px] lg:w-[220px] h-[130px] sm:h-auto min-h-[130px] rounded-xl overflow-hidden shrink-0 bg-neutral-900">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      {/* Top-left number label with subtle dark backdrop */}
                      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 font-mono text-xs font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2 py-0.5 rounded bg-black/45 backdrop-blur-sm border border-white/10">
                        <span>{num}</span>
                        <span className="text-brand-accent font-semibold">/</span>
                      </div>
                    </div>

                    {/* Right Content Block */}
                    <div className="flex-1 flex flex-col justify-between py-0.5 pr-1">
                      {/* Top Row: Date & Circular Arrow Button */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] md:text-[11px] text-white/50 tracking-wider uppercase">
                          {article.date}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:border-brand-accent group-hover:text-brand-accent group-hover:bg-brand-accent/10 transition-all duration-300 shrink-0">
                          <svg
                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.75}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Category, Title & Description */}
                      <div>
                        {/* Category with orange square marker */}
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="w-1.5 h-1.5 bg-brand-accent inline-block shrink-0" />
                          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-white/70 uppercase font-semibold">
                            {article.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-sans font-medium text-[15px] md:text-[16px] text-white leading-snug group-hover:text-brand-accent transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-xs md:text-[12.5px] text-white/60 leading-relaxed mt-1.5 line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
