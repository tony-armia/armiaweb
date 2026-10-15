"use client";

import React from "react";
import { WaterRippleImage } from "@/components/ui/water-ripple-image";
import { motion } from "framer-motion";

interface DaqBackgroundVisualProps {
  isLight?: boolean;
}

export function DaqBackgroundVisual({ isLight = false }: DaqBackgroundVisualProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* ── 1. Unified Single WebGL Fluid Wave Canvas (Single Context, Auto-Disposed) ── */}
      <div className="absolute inset-0">
        <WaterRippleImage
          key={isLight ? "light-ripple" : "dark-ripple"}
          blueish={isLight ? 0.04 : 0.2}
          scale={isLight ? 5.5 : 6}
          illumination={isLight ? 0.035 : 0.02}
          surfaceDistortion={isLight ? 0.02 : 0.03}
          waterDistortion={isLight ? 0.018 : 0.02}
          src={isLight ? "/images/daq_liquid_bg_light.jpg" : "/images/daq_liquid_bg.jpg"}
          className={`transition-opacity duration-700 ease-in-out ${
            isLight
              ? "opacity-65 contrast-[1.06] brightness-[1.0] mix-blend-multiply"
              : "opacity-70 contrast-[1.2] brightness-[0.6] mix-blend-screen"
          }`}
        />
      </div>

      {/* ── 2. Subtle Adaptive Readability Shroud ── */}
      <div
        className={`absolute inset-0 z-10 transition-colors duration-700 ease-in-out ${
          isLight
            ? "bg-gradient-to-b from-[#fbfbfb]/80 via-[#fbfbfb]/35 to-[#fbfbfb]/85"
            : "bg-gradient-to-b from-[#090909]/90 via-[#090909]/60 to-[#090909]"
        }`}
      />

      {/* ── 3. Subtle Structural Grid Overlay (DAQ Style) ── */}
      <div
        className={`absolute inset-0 z-20 transition-all duration-700 ease-in-out ${
          isLight ? "opacity-40" : "opacity-30"
        }`}
        style={{
          backgroundImage: isLight
            ? `
              linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* ── 4. Hardware-Accelerated Ambient Tone Glows (Pure Radial Gradients, 0px GPU Blur Overheads) ── */}
      <div
        className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full pointer-events-none transition-opacity duration-700 ease-in-out ${
          isLight ? "opacity-25" : "opacity-30 mix-blend-screen"
        }`}
        style={{
          background: isLight
            ? "radial-gradient(circle at center, rgba(59, 130, 246, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(59, 130, 246, 0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full pointer-events-none transition-opacity duration-700 ease-in-out ${
          isLight ? "opacity-30" : "opacity-25 mix-blend-screen"
        }`}
        style={{
          background: isLight
            ? "radial-gradient(circle at center, rgba(255, 90, 0, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(255, 90, 0, 0.18) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
