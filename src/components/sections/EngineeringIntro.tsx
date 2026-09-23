"use client";

import React, { useRef } from "react";
import { ArrowUp } from "lucide-react";

export function EngineeringIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="about"
      data-theme="dark"
      className="relative min-h-[90vh] md:min-h-screen w-full bg-[#090909] text-white flex items-center py-24 sm:py-32 md:py-36 px-6 sm:px-12 md:px-16 lg:px-24 select-none overflow-hidden"
      aria-label="Who We Are"
    >
      <div className="mx-auto w-full max-w-[1500px] grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        {/* ── Left Column: Giant Editorial Statement ── */}
        <div className="lg:col-span-7">
          <h2 className="font-sans font-light text-[clamp(2.75rem,5.6vw,5.5rem)] leading-[1.08] tracking-[-0.02em] text-white">
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
          <div className="max-w-xl space-y-6 sm:space-y-7 text-[#8e94a0] text-[15px] sm:text-[16px] leading-[1.78] font-normal">
            {/* Top Metadata Row matching Elysium */}
            <div className="flex items-center justify-between pb-2 text-xs tracking-widest uppercase">
              <span className="font-mono text-white font-medium tracking-[0.22em] text-[12px] sm:text-[13px]">
                WHO WE ARE
              </span>
              <span className="font-mono text-white/50 tracking-[0.16em] text-[11px] sm:text-[12px] flex items-center gap-1.5">
                <span>🇺🇸 USA</span>
                <span className="text-white/30">&bull;</span>
                <span>🇮🇳 INDIA</span>
              </span>
            </div>

            <p className="text-white/85">
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

            <p className="text-white/80">
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
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/20 text-white/60 hover:text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm group cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </section>
  );
}