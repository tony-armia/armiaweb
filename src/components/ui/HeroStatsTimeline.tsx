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

interface HeroStatsTimelineProps {
  isLight?: boolean;
}

export function HeroStatsTimeline({ isLight = false }: HeroStatsTimelineProps) {
  const isAppReady = useAppReady();

  return (
    <div className="relative flex flex-col pointer-events-auto select-none">
      {/* ── Soft Clean White Text Scrim (Light mode only, seamless 100% feather, zero circular disc edges) ── */}
      {isLight && (
        <div
          aria-hidden="true"
          className="absolute -inset-x-8 -inset-y-4 pointer-events-none z-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 40% 50%, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.75) 45%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      )}

      {/* ── Minimal Vertical Hairline Trace ── */}
      <div
        aria-hidden="true"
        className={`absolute left-[15px] top-3.5 bottom-3.5 w-px z-10 transition-colors duration-700 ease-in-out ${
          isLight ? "bg-black/15" : "bg-white/15"
        }`}
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
              <div
                className={`relative flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] overflow-hidden elysium-animated-bg transition-all duration-700 ease-in-out group-hover:scale-105 ${
                  isLight
                    ? "border border-black/10 shadow-[0_2px_8px_rgba(255,90,0,0.15)] group-hover:border-[#FF5A00]/60 group-hover:shadow-[0_0_15px_rgba(255,90,0,0.35)]"
                    : "border border-white/15 shadow-[0_0_11px_rgba(255,90,0,0.19)] group-hover:border-[#FF5A00]/60 group-hover:shadow-[0_0_15px_rgba(255,90,0,0.42)]"
                }`}
              >
                {/* Translucent veil for icon contrast */}
                <div
                  className={`absolute inset-0 transition-colors duration-700 ease-in-out ${
                    isLight
                      ? "bg-black/20 group-hover:bg-black/10"
                      : "bg-black/40 group-hover:bg-black/25"
                  }`}
                />
                <Icon className="relative z-10 h-[18px] w-[18px] text-white transition-transform duration-200 group-hover:scale-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
              </div>

              {/* Compact Number & Label */}
              <div className="flex flex-col justify-center">
                <span
                  className={`font-sans text-[18px] sm:text-[20px] font-semibold tracking-tight leading-none group-hover:text-[#FF5A00] transition-colors duration-700 ease-in-out ${
                    isLight ? "text-[#111827]" : "text-white"
                  }`}
                >
                  {stat.value}
                </span>
                <span
                  className={`font-sans text-base font-normal leading-tight mt-1 transition-colors duration-700 ease-in-out ${
                    isLight ? "text-black" : "text-white/50"
                  }`}
                >
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
