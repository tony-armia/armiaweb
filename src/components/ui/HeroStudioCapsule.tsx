"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CAPABILITIES = [
  { action: "BUILD", label: "SCALE • SUPPORT" },
  { action: "SCALE", label: "BUILD • SUPPORT" },
  { action: "SUPPORT", label: "BUILD • SCALE" },
];

export function HeroStudioCapsule() {
  const [capIndex, setCapIndex] = useState(0);
  const [timeIST, setTimeIST] = useState("");
  const [timeEDT, setTimeEDT] = useState("");

  useEffect(() => {
    // Cycle active capability verb
    const cycleTimer = setInterval(() => {
      setCapIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 2800);

    // Live dual-timezone clocks (Kochi/India & New York/USA)
    const updateTimes = () => {
      const now = new Date();
      setTimeIST(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      setTimeEDT(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTimes();
    const clockTimer = setInterval(updateTimes, 10000);

    return () => {
      clearInterval(cycleTimer);
      clearInterval(clockTimer);
    };
  }, []);

  const currentCap = CAPABILITIES[capIndex];

  return (
    <div className="relative group mt-4 sm:mt-5 select-none">
      {/* ── Ambient Backglow ── */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-brand-accent/0 via-brand-accent/20 to-brand-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none" />

      {/* ── Main Unified Segmented Glass Capsule ── */}
      <div className="relative h-9 sm:h-10 px-4 sm:px-5 rounded-full border border-white/[0.08] bg-[#0c0d12]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-3 sm:gap-4 transition-all duration-300 group-hover:border-white/20 group-hover:bg-[#10121a]/90">
        
        {/* ── Segment 1: Experience & Longevity ── */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent shadow-[0_0_8px_#FF5A00]" />
          </span>
          <span className="font-mono text-[11px] sm:text-[11.5px] font-medium tracking-wider text-white">
            20+ YRS
          </span>
          <span className="hidden md:inline font-mono text-[10px] text-white/40 tracking-widest uppercase">
            EST. 2003
          </span>
        </div>

        {/* Hairline Divider */}
        <span className="w-px h-3.5 bg-white/10 shrink-0" />

        {/* ── Segment 2: Global Dual-Shore Delivery (Live Presence) ── */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-white/70">
            INDIA
          </span>
          {timeIST && (
            <span className="hidden sm:inline font-mono text-[9.5px] text-brand-accent/80 tracking-tight">
              {timeIST}
            </span>
          )}
          <span className="text-brand-accent font-semibold text-xs leading-none">&bull;</span>
          <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-white/70">
            USA
          </span>
          {timeEDT && (
            <span className="hidden sm:inline font-mono text-[9.5px] text-white/40 tracking-tight">
              {timeEDT}
            </span>
          )}
        </div>

        {/* Hairline Divider */}
        <span className="w-px h-3.5 bg-white/10 shrink-0" />

        {/* ── Segment 3: Kinetic Capability Engine (Build • Scale • Support) ── */}
        <div className="flex items-center overflow-hidden h-5 min-w-[130px] sm:min-w-[155px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCap.action}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-1.5 font-mono text-[10.5px] sm:text-[11.5px] tracking-wide"
            >
              <span className="text-brand-accent font-semibold">
                {currentCap.action}
              </span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 hidden sm:inline">
                {currentCap.label}
              </span>
              <span className="text-white/50 sm:hidden">
                SCALE
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
