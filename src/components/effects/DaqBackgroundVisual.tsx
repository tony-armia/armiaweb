"use client";

import React from "react";
import { WaterRippleImage } from "@/components/ui/water-ripple-image";
import { motion } from "framer-motion";

export function DaqBackgroundVisual() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black select-none">
      
      {/* ── 1. The Fluid / Liquid Obsidian Background Image ── */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.75, 0.9, 0.75],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <WaterRippleImage
          blueish={0.2}
          scale={6}
          illumination={0.02}
          surfaceDistortion={0.03}
          waterDistortion={0.02}
          src="/images/daq_liquid_bg.jpg"
          className="mix-blend-screen opacity-70 contrast-[1.2] brightness-[0.6]"
        />
      </motion.div>

      {/* ── 2. Subtle Dark Shroud to maintain readability ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/90 via-[#090909]/60 to-[#090909] z-10" />

      {/* ── 3. Subtle Structural Grid Overlay (DAQ Style) ── */}
      <div 
        className="absolute inset-0 z-20 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      {/* ── 4. Deep Spotlights for ambient color tone ── */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] z-10 mix-blend-screen"
      />
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-accent/5 rounded-full blur-[140px] z-10 mix-blend-screen"
      />
    </div>
  );
}
