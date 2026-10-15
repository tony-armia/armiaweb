"use client";

import React from "react";
import { Globe2, ShieldCheck, Layers } from "lucide-react";

interface HeroStudioCapsuleProps {
  isLight?: boolean;
}

export function HeroStudioCapsule({ isLight = false }: HeroStudioCapsuleProps) {
  const minimalGlassClass = isLight
    ? "relative flex items-center gap-2 h-[38px] sm:h-[40px] px-4 sm:px-4.5 rounded-full " +
      "border border-black/[0.08] bg-black/[0.035] backdrop-blur-md " +
      "shadow-[0_1px_3px_rgba(0,0,0,0.03),inset_0_1px_0_0_rgba(255,255,255,0.7)] " +
      "text-[#374151] transition-all duration-700 ease-in-out " +
      "hover:border-black/20 hover:bg-black/[0.07] hover:text-[#111827]"
    : "relative flex items-center gap-2 h-[38px] sm:h-[40px] px-4 sm:px-4.5 rounded-full " +
      "border border-white/[0.08] bg-white/[0.03] backdrop-blur-md " +
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] " +
      "text-white/70 transition-all duration-700 ease-in-out " +
      "hover:border-white/20 hover:bg-white/[0.06] hover:text-white";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-5 select-none">
      {/* ── Pill 1: Dual-Shore Delivery ── */}
      <div className={minimalGlassClass}>
        <Globe2 className="w-4 h-4 text-brand-accent shrink-0 opacity-90" strokeWidth={1.75} />
        <span className="font-mono text-base tracking-[0.04em] font-normal">
          Dual-Shore Delivery
        </span>
      </div>

      <span
        className={`hidden sm:inline-block w-px h-4 transition-colors duration-700 ease-in-out ${
          isLight ? "bg-black/10" : "bg-white/10"
        }`}
      />

      {/* ── Pill 2: SOC 2 & ISO 27001 Certified ── */}
      <div className={minimalGlassClass}>
        <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0 opacity-90" strokeWidth={1.75} />
        <span className="font-mono text-base tracking-[0.04em] font-normal">
          SOC 2 &amp; ISO 27001 Certified
        </span>
      </div>

      <span
        className={`hidden sm:inline-block w-px h-4 transition-colors duration-700 ease-in-out ${
          isLight ? "bg-black/10" : "bg-white/10"
        }`}
      />

      {/* ── Pill 3: Dedicated Engineering Pods ── */}
      <div className={minimalGlassClass}>
        <Layers className="w-4 h-4 text-brand-accent shrink-0 opacity-90" strokeWidth={1.75} />
        <span className="font-mono text-base tracking-[0.04em] font-normal">
          Dedicated Engineering Pods
        </span>
      </div>
    </div>
  );
}
