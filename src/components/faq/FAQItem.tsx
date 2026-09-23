"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItemData } from "@/data/faqs";
import { EASE_CUSTOM } from "@/lib/motion";

interface FAQItemProps {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="relative z-10 bg-[#0e1017] rounded-xl md:rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-white/20 mb-3 shadow-md">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
          id={`faq-button-${item.id}`}
          className="group flex items-center justify-between w-full py-4 md:py-5 px-4 md:px-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent min-h-[56px] md:min-h-[64px] bg-[#0e1017] hover:bg-[#131620] transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 md:gap-4 pr-4">
            {/* Active Orange Rounded Marker */}
            <div className="relative w-[14px] h-[6px] flex items-center justify-center shrink-0">
              <span className="absolute h-[6px] w-[6px] rounded-full bg-transparent inline-block group-hover:bg-brand-accent/40 transition-colors" />
              <motion.span
                animate={{ scale: isOpen ? 1 : 0 }}
                transition={{ duration: 0.25, ease: EASE_CUSTOM }}
                className="absolute h-[6px] w-[6px] rounded-full bg-brand-accent inline-block shadow-[0_0_8px_rgba(255,90,0,0.6)]"
              />
            </div>

            {/* Question Number */}
            <span className="font-mono text-xs text-[#777777] font-normal w-[30px] shrink-0 group-hover:text-brand-accent transition-colors">
              {item.number}
            </span>

            {/* Question Text */}
            <span className={`font-sans text-[clamp(0.95rem,1vw,1.15rem)] font-medium tracking-[-0.015em] uppercase leading-[1.25] transition-colors ${
              isOpen ? "text-white" : "text-[#d0d0cc] group-hover:text-white"
            }`}>
              {item.question}
            </span>
          </div>

          {/* Toggle icon pill */}
          <div className="relative w-9 h-9 rounded-full bg-white/[0.04] group-hover:bg-white/[0.08] flex items-center justify-center shrink-0 text-[#888888] group-hover:text-white transition-all">
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: EASE_CUSTOM }}
              className="relative block w-[12px] h-[12px]"
            >
              <span className="absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 bg-current rounded-full" />
              <span className="absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 bg-current rotate-90 rounded-full" />
            </motion.span>
          </div>
        </button>
      </h3>

      {/* Expandable Answer Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-button-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: EASE_CUSTOM }}
            className="overflow-hidden bg-[#0e1017] border-t border-white/[0.04]"
          >
            <div className="pb-6 pt-3 pl-[56px] md:pl-[68px] pr-6 md:pr-12 max-w-[680px] max-h-[140px] md:max-h-[160px] overflow-y-auto">
              {item.answer.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="font-sans text-[14px] md:text-[15px] leading-[1.55] text-[#a4a4a2] mb-2.5 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
