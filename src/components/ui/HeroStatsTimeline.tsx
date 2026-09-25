"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Globe, Code2 } from "lucide-react";
import { useAppReady } from "@/hooks/useAppReady";

interface StatItem {
  icon: typeof Calendar;
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    icon: Calendar,
    value: "20+",
    label: "Years of Excellence",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients Worldwide",
  },
  {
    icon: Globe,
    value: "3",
    label: "Global Delivery Centres",
  },
  {
    icon: Code2,
    value: "1000+",
    label: "Skilled Engineers",
  },
];

export function HeroStatsTimeline() {
  const isAppReady = useAppReady();

  return (
    <div className="relative flex flex-col pointer-events-auto select-none">
      {/* ── Minimal Vertical Hairline Trace ── */}
      <div
        aria-hidden="true"
        className="absolute left-[15px] top-3.5 bottom-3.5 w-px bg-white/15 z-0"
      />

      {/* ── Minimal Connected Metric Nodes ── */}
      <div className="relative z-10 flex flex-col gap-3.5">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 15 }}
              animate={isAppReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-center gap-3"
            >
              {/* Minimalist Icon Badge with 'armia' animated gradient background */}
              <div className="relative flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[10px] overflow-hidden elysium-animated-bg border border-white/15 shadow-[0_0_11px_rgba(255,90,0,0.19)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#FF5A00]/60 group-hover:shadow-[0_0_15px_rgba(255,90,0,0.42)]">
                {/* Translucent veil for icon contrast */}
                <div className="absolute inset-0 bg-black/40 transition-colors duration-200 group-hover:bg-black/25" />
                <Icon className="relative z-10 h-[15px] w-[15px] text-white transition-transform duration-200 group-hover:scale-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
              </div>

              {/* Compact Number & Label */}
              <div className="flex flex-col justify-center">
                <span className="font-sans text-[13.5px] sm:text-[14.5px] font-medium text-white tracking-tight leading-none group-hover:text-[#FF5A00] transition-colors duration-200">
                  {stat.value}
                </span>
                <span className="font-sans text-[10px] sm:text-[10.5px] text-white/50 font-normal leading-tight mt-0.5">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
