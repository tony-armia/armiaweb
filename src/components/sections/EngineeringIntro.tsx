"use client";

import React, { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function EngineeringIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="about"
      data-theme="section"
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center py-20 sm:py-28 md:py-32 select-none overflow-hidden transition-colors duration-400"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      aria-label="Who We Are"
    >
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[10.8%] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ── Left Column: Giant Editorial Statement ── */}
        <div className="lg:col-span-7">
          <h2 className="font-sans font-light text-[clamp(2.75rem,5.6vw,5.5rem)] leading-[1.08] tracking-[-0.02em]" style={{ color: 'var(--foreground)' }}>
            <span className="block">We don’t chase</span>
            <span className="block">trends.</span>
            <span className="block">We engineer what</span>
            <span className="block">deserves to</span>
            <span className="block">live on the</span>
            <span className="block text-brand-accent font-normal tracking-[-0.02em] transition-colors hover:text-brand-accent-hover">
              internet
            </span>
          </h2>
        </div>

        {/* ── Right Column: Metadata & Editorial Storytelling ── */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="max-w-xl space-y-6 sm:space-y-7 text-[15px] sm:text-[16px] leading-[1.78] font-normal" style={{ color: 'var(--foreground-muted)' }}>
            {/* Top Metadata Row matching Elysium with standardized SectionEyebrow */}
            <div className="flex items-center justify-between pb-3 border-b text-xs tracking-widest uppercase" style={{ borderColor: 'var(--border)' }}>
              <SectionEyebrow number="02" label="WHO WE ARE" className="!mb-0" />
              <span className="font-mono tracking-[0.16em] text-[11px] sm:text-[12px] flex items-center gap-1.5" style={{ color: 'var(--foreground-subtle)' }}>
                <span>🇺🇸 USA</span>
                <span style={{ opacity: 0.4 }}>&bull;</span>
                <span>🇮🇳 INDIA</span>
              </span>
            </div>

            <p style={{ color: 'var(--foreground)' }}>
              We&apos;re a digital engineering studio focused on building thoughtful, high-performance
              software for high-growth enterprises and modern platforms.
            </p>

            <p>
              We work at the intersection of design and engineering &mdash; where clarity,
              performance, and aesthetics are treated with equal importance.
            </p>

            <p>
              Starting from a clean slate allows us to question defaults, avoid unnecessary
              complexity, and focus on what truly matters.
            </p>

            <p>
              Every detail is intentional, from typography and motion to cloud infrastructure,
              API latency, and long-term maintainability.
            </p>

            <p style={{ color: 'var(--foreground)' }}>
              We don&apos;t believe in disposable software. We build digital products designed to
              last, evolve, and age gracefully.
            </p>
          </div>
        </div>
      </div>

      {/* ── Floating Scroll-to-Top Indicator matching Elysium ── */}
      <div className="absolute bottom-8 right-6 sm:bottom-10 sm:right-10 md:bottom-12 md:right-14 z-20">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group cursor-pointer" style={{ border: '1px solid var(--border)', color: 'var(--foreground-muted)' }}
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </section>
  );
}