"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FAQS_DATA } from "@/data/faqs";
import { FAQItem } from "@/components/faq/FAQItem";
import { GridLines } from "@/components/ui/GridLines";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, fadeUpSmall, staggerContainer, VIEWPORT_ONCE, EASE_CUSTOM } from "@/lib/motion";

export function FAQSection() {
  const [openId, setOpenId] = useState<string>("");

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="faq"
      data-theme="section"
      className="relative z-20 w-full py-16 sm:py-20 md:py-28 flex flex-col justify-center min-h-[90vh] md:min-h-screen select-none snap-section transition-colors duration-400"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)", borderTop: "1px solid var(--border)" }}
    >
      {/* Background Texture & Grid lines scoped safely without clipping section content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/images/Noise.png')]" />
        <GridLines />
      </div>

      <div className="w-full max-w-[1920px] mx-auto relative z-10">
        {/* Upper Header Row matching ServicesSection Grid Columns */}
        <div className="relative w-full flex flex-col md:flex-row items-start mb-6 md:mb-12">
          {/* Far Left Section Marker: 10.8% to 30.3% */}
          <div className="w-full md:w-[19.5%] md:ml-[10.8%] px-4 sm:px-6 md:px-0 pt-1 mb-4 md:mb-0">
            <SectionEyebrow number="08" label="FAQ" className="!mb-0" />
          </div>

          {/* Heading Block: 30.3% to 69.3% */}
          <div className="w-full md:w-[39.0%] px-4 sm:px-6 md:px-0 pt-0.5 mb-4 md:mb-0">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              className="font-sans text-[clamp(1.9rem,3.2vw,3.85rem)] font-light tracking-[-0.035em] leading-[0.98] text-left uppercase"
            >
              <span className="block" style={{ color: 'var(--foreground-muted)' }}>FREQUENTLY</span>
              <span className="block font-normal" style={{ color: 'var(--foreground)' }}>ASKED QUESTIONS.</span>
            </motion.h2>

            <p className="font-mono text-sm sm:text-base md:text-[17px] leading-relaxed mt-3 md:mt-5 uppercase tracking-[0.1em] max-w-[400px]" style={{ color: 'var(--foreground-muted)' }}>
              COMMON QUESTIONS ABOUT <br />
              <strong className="font-medium" style={{ color: 'var(--foreground)' }}>ARMIA SYSTEMS</strong> &amp; ENGAGEMENTS.
            </p>
          </div>

          {/* Right Supporting Copy / Link */}
          <div className="w-full md:w-[22%] px-4 sm:px-6 md:px-0 pt-1 flex justify-start mb-6 md:mb-0">
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="font-mono text-sm sm:text-base md:text-[17px] text-brand-accent tracking-[0.06em] uppercase transition-colors flex items-center gap-2 group"
              >
                <span>HAVE QUESTIONS? TALK TO US</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion List (30.3% to 88.8% width: 58.5%) */}
        <div className="w-full md:w-[58.5%] md:ml-[30.3%] px-4 sm:px-6 md:px-0">
          <div className="relative w-full">
            {/* Accent line grows in left-to-right */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.7, ease: EASE_CUSTOM }}
              style={{ transformOrigin: "left" }}
              className="h-[2px] w-full bg-[#ff5a00] mb-2"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.6, ease: EASE_CUSTOM }}
              className="w-full"
            >
              {FAQS_DATA.map((faq) => (
                <div key={faq.id}>
                  <FAQItem
                    item={faq}
                    isOpen={openId === faq.id}
                    onToggle={() => handleToggle(faq.id)}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
