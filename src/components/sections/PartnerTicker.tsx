"use client";

import React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  "ACTIVE NETWORK",
  "VERA BRADLEY",
  "ALICE",
  "AVANT",
  "FERRARA CANDY COMPANY",
  "8TO18",
  "AROUNDCAMPUS GROUP",
  "JUMPFORWARD",
  "COLLEGIATEPARENT"
];

export function PartnerTicker() {
  // Duplicate for seamless infinite loop
  const marqueeList = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <div className="relative w-full overflow-hidden select-none z-20 transition-colors duration-400" style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="flex w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 45,
          }}
          className="flex shrink-0 items-center" style={{ borderRight: '1px solid var(--border)' }}
        >
          {marqueeList.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-10 md:px-16 py-5 md:py-6"
            >
              <span className="font-mono text-[11px] md:text-[13px] font-medium tracking-[0.2em] uppercase whitespace-nowrap text-white/80 hover:text-white transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
