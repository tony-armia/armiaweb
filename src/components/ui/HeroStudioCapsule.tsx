"use client";

import React from "react";
import { Clock, MapPin, BarChart2 } from "lucide-react";

export function HeroStudioCapsule() {
  const minimalGlassClass =
    "relative flex items-center gap-1.5 h-[27px] sm:h-[28px] px-2.5 sm:px-3 rounded-full " +
    "border border-white/[0.08] bg-white/[0.03] backdrop-blur-md " +
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] " +
    "text-white/70 transition-all duration-200 " +
    "hover:border-white/20 hover:bg-white/[0.06] hover:text-white";

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3.5 sm:mt-4 select-none">
      {/* ── Pill 1: Since 2003 ── */}
      <div className={minimalGlassClass}>
        <Clock className="w-3 h-3 text-brand-accent shrink-0 opacity-90" strokeWidth={1.75} />
        <span className="font-mono text-[10px] sm:text-[10.5px] tracking-wide font-normal">
          Since 2003
        </span>
      </div>

      <span className="hidden sm:inline-block w-px h-2.5 bg-white/10" />

      {/* ── Pill 2: India & USA ── */}
      <div className={minimalGlassClass}>
        <MapPin className="w-3 h-3 text-brand-accent shrink-0 opacity-90" strokeWidth={1.75} />
        <span className="font-mono text-[10px] sm:text-[10.5px] tracking-wide font-normal">
          India &amp; USA
        </span>
      </div>

      <span className="hidden sm:inline-block w-px h-2.5 bg-white/10" />

      {/* ── Pill 3: Build • Scale • Support ── */}
      <div className={minimalGlassClass}>
        <BarChart2 className="w-3 h-3 text-brand-accent shrink-0 opacity-90" strokeWidth={1.75} />
        <span className="font-mono text-[10px] sm:text-[10.5px] tracking-wide font-normal">
          Build &bull; Scale &bull; Support
        </span>
      </div>
    </div>
  );
}
