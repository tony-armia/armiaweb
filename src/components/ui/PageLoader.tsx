// src/components/ui/PageLoader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dispatchAppReady } from "@/hooks/useAppReady";

const TOTAL_DURATION_MS = 2200;

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<1 | 2>(1);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      dispatchAppReady();
      return;
    }

    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;

    // Trigger phrase morph halfway through
    const phaseTimer = setTimeout(() => {
      setPhase(2);
    }, 950);

    function tick(now: number) {
      const elapsed = now - start;
      const progressFraction = Math.min(1, elapsed / (TOTAL_DURATION_MS - 200));
      // Smooth cubic ease-out progress
      const curvedProgress = 1 - Math.pow(1 - progressFraction, 2.2);
      const currentPct = Math.min(100, Math.floor(curvedProgress * 100));

      setProgress(currentPct);

      if (elapsed < TOTAL_DURATION_MS) {
        raf = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setVisible(false);
          dispatchAppReady();
        }, 120);
      }
    }

    raf = requestAnimationFrame(tick);

    return () => {
      clearTimeout(phaseTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="editorial-typographic-loader"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[999] flex flex-col justify-between p-8 sm:p-12 md:p-16 select-none bg-black text-white overflow-hidden"
        >
          {/* Subtle Ambient Warm Core Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#FF5A00]/[0.08] blur-[120px] pointer-events-none" />

          {/* ── Top Header Studio Meta ── */}
          <div className="relative z-10 w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/40">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_#FF5A00]" />
              <span className="text-white/70">ARMIA SYSTEMS</span>
            </div>
            <div>EST. 2003</div>
          </div>

          {/* ── Centered Editorial Typography (Inspired by Reference Image) ── */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full">
            <div className="w-fit text-left">
              {/* Line 1: Constant Anchor "We" */}
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-sans font-medium text-[clamp(3.2rem,8.5vw,6.5rem)] leading-[0.98] tracking-[-0.04em] text-white"
                >
                  We
                </motion.span>
              </div>

              {/* Dynamic Stacked Lines (Phase 1: Build Scalable Systems -> Phase 2: Engineer What's Next.) */}
              <AnimatePresence mode="wait">
                {phase === 1 ? (
                  <motion.div
                    key="phase-1-build"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.5, staggerChildren: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                  >
                    {/* Line 2: Build */}
                    <div className="overflow-hidden">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="block font-sans font-medium text-[clamp(3.2rem,8.5vw,6.5rem)] leading-[0.98] tracking-[-0.04em] text-white"
                      >
                        Build
                      </motion.span>
                    </div>

                    {/* Line 3: Scalable (Highlighted in brand orange #FF5A00) */}
                    <div className="overflow-hidden">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="block font-sans font-medium text-[clamp(3.2rem,8.5vw,6.5rem)] leading-[0.98] tracking-[-0.04em] text-brand-accent drop-shadow-[0_0_28px_rgba(255,90,0,0.4)]"
                      >
                        Scalable
                      </motion.span>
                    </div>

                    {/* Line 4: Systems. */}
                    <div className="overflow-hidden">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="block font-sans font-medium text-[clamp(3.2rem,8.5vw,6.5rem)] leading-[0.98] tracking-[-0.04em] text-white"
                      >
                        Systems.
                      </motion.span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="phase-2-next"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, staggerChildren: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                  >
                    {/* Line 2: Engineer */}
                    <div className="overflow-hidden">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="block font-sans font-medium text-[clamp(3.2rem,8.5vw,6.5rem)] leading-[0.98] tracking-[-0.04em] text-white"
                      >
                        Engineer
                      </motion.span>
                    </div>

                    {/* Line 3: What's */}
                    <div className="overflow-hidden">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="block font-sans font-medium text-[clamp(3.2rem,8.5vw,6.5rem)] leading-[0.98] tracking-[-0.04em] text-white"
                      >
                        What&apos;s
                      </motion.span>
                    </div>

                    {/* Line 4: Next. (Vibrant Signature Brand Orange #FF5A00) */}
                    <div className="overflow-hidden">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="block font-sans font-medium text-[clamp(3.2rem,8.5vw,6.5rem)] leading-[0.98] tracking-[-0.04em] text-brand-accent drop-shadow-[0_0_28px_rgba(255,90,0,0.4)]"
                      >
                        Next<span className="text-brand-accent">.</span>
                      </motion.span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Bottom Meta Row: Progress Bar & Numeric Counter ── */}
          <div className="relative z-10 w-full flex items-end justify-between font-mono text-xs text-white/50 tracking-wider">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/40">
              INDIA &bull; USA &bull; WORLDWIDE
            </div>

            {/* Hairline Center Progress Bar */}
            <div className="hidden sm:block w-48 md:w-64 h-[1.5px] bg-white/10 rounded-full overflow-hidden mx-6">
              <div
                className="h-full bg-gradient-to-r from-[#D93D00] to-brand-accent transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Numeric Percentage Counter */}
            <div className="tabular-nums font-mono text-xs sm:text-[13px] text-white/70">
              [ {String(progress).padStart(2, "0")}% ]
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
