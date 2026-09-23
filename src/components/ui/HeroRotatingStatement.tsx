"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StatementItem {
  id: string;
  tag: string;
  primary: string[];
  secondary: string[];
}

const STATEMENTS: StatementItem[] = [
  {
    id: "01",
    tag: "GLOBAL FOOTPRINT",
    primary: [
      "Designing & engineering",
      "digital experiences",
      "from India & USA.",
    ],
    secondary: [
      "Crafted for enterprises",
      "that scale globally.",
    ],
  },
  {
    id: "02",
    tag: "AI & CLOUD SYSTEMS",
    primary: [
      "Architecting modern AI,",
      "cloud infrastructure &",
      "enterprise platforms.",
    ],
    secondary: [
      "High-performance systems",
      "engineered for 99.9% uptime.",
    ],
  },
  {
    id: "03",
    tag: "PRODUCT EXCELLENCE",
    primary: [
      "Full-lifecycle software",
      "from rapid MVP build to",
      "enterprise maturity.",
    ],
    secondary: [
      "Trusted by 500+ product teams",
      "over 20+ years.",
    ],
  },
  {
    id: "04",
    tag: "SECURITY & COMPLIANCE",
    primary: [
      "Building secure, compliant",
      "healthcare, fintech &",
      "mission-critical software.",
    ],
    secondary: [
      "ISO 9001 & 27001 certified",
      "engineering excellence.",
    ],
  },
];

const CYCLE_INTERVAL_MS = 4800;

export function HeroRotatingStatement() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATEMENTS.length);
    }, CYCLE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const current = STATEMENTS[index];

  return (
    <div className="relative min-w-[260px] max-w-[340px] select-none pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col"
        >
          {/* Micro Category Tag & Index */}
          <div className="flex items-center gap-2 mb-2.5 font-mono text-[9.5px] sm:text-[10px] tracking-[0.2em] uppercase text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_#FF5A00] inline-block shrink-0" />
            <span className="text-brand-accent font-medium">{current.id}</span>
            <span className="text-white/25">/</span>
            <span className="text-white/60">{current.tag}</span>
          </div>

          {/* Primary Statement Block */}
          <div className="flex flex-col text-xs sm:text-[13px] md:text-sm leading-snug text-white/80 font-normal">
            {current.primary.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%", opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-110%", opacity: 0, filter: "blur(2px)" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="leading-snug"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Spacing */}
          <div className="h-3" />

          {/* Secondary Statement Block */}
          <div className="flex flex-col text-xs sm:text-[12px] md:text-[12.5px] leading-snug text-white/50 font-normal">
            {current.secondary.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%", opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-110%", opacity: 0, filter: "blur(2px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="leading-snug text-white/50"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
