// src/components/ui/SectionEyebrow.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASE_CUSTOM } from "@/lib/motion";

interface SectionEyebrowProps {
  /** Two-digit section index, e.g. "06" */
  number: string;
  /** Section label, e.g. "TESTIMONIALS" */
  label: string;
  /** Use on dark-background sections (default true for modern dark theme) */
  dark?: boolean;
  className?: string;
}

export function SectionEyebrow({
  number,
  label,
  dark = true,
  className = "",
}: SectionEyebrowProps) {
  // Theme-aware: use CSS vars so this works in both light and dark mode
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE_CUSTOM }}
      className={`inline-flex items-center gap-2.5 font-mono text-base font-semibold tracking-[0.14em] uppercase select-none ${className}`}
      style={{ color: "var(--foreground-muted)" }}
    >
      <span className="h-2 w-2 rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)] shrink-0" />
      <span style={{ color: "var(--foreground)" }}>{label}</span>
    </motion.div>
  );
}
