"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { EASE_CUSTOM } from "@/lib/motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  "SERVICES",
  "WORK",
  "ABOUT",
  "AI & ML",
  "CLOUD",
  "CAREERS",
  "CONTACT",
] as const;

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isLight, setIsLight] = useState(false);

  // Track theme changes so header can adapt contrast
  useEffect(() => {
    const check = () =>
      setIsLight(document.documentElement.classList.contains("light"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero =
        document.getElementById("home") || document.querySelector("section");
      if (!hero) {
        setIsPastHero(window.scrollY > 80);
        return;
      }
      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsPastHero(heroBottom <= 70);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  // When scrolled past hero: if light theme → white frosted; if dark → dark frosted
  const solidBg = isLight
    ? "bg-white/90 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
    : "bg-black/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.7)]";

  // Menu button: on hero always dark; when past hero respect theme
  const menuBtnBase =
    !isPastHero || !isLight
      ? "bg-white/[0.07] hover:bg-white/[0.14] text-white border-white/15 hover:border-brand-accent/50"
      : "bg-black/[0.06] hover:bg-black/[0.12] text-foreground border-black/15 hover:border-brand-accent/40";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 select-none ${
          !isPastHero
            ? "bg-transparent border-transparent shadow-none"
            : solidBg
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0 h-16 md:h-20 flex items-center">
          <div className="w-full md:w-[78%] md:ml-[10.8%] flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm"
            >
              <div className="relative h-11 w-32 md:h-14 md:w-60 flex items-center transition-all duration-300">
                <Image
                  src={isPastHero && isLight ? "/images/armialogo-light.svg" : "/images/armialogo.svg"}
                  alt="Armia Systems"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <div className="flex items-center gap-2.5">
              {/* Theme Toggle — always visible for easy access */}
              <ThemeToggle isPastHero={isPastHero} />

              {/* Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav"
                className={`group relative flex items-center gap-2.5 h-[34px] md:h-[36px] pl-3.5 pr-1 md:pl-4 md:pr-1.5 rounded-full font-mono text-[10.5px] md:text-[11px] tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent backdrop-blur-md border shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_0_20px_rgba(255,90,0,0.25)] ${menuBtnBase}`}
              >
                <div className="flex flex-col justify-center items-center gap-[4px] w-3.5" aria-hidden="true">
                  <span className="block h-[1.5px] w-3 rounded-full bg-current transition-all duration-300 group-hover:w-3.5 group-hover:translate-x-0.5 group-hover:bg-brand-accent" />
                  <span className="block h-[1.5px] w-3.5 rounded-full bg-current opacity-80 transition-all duration-300 group-hover:w-2.5 group-hover:-translate-x-0.5" />
                </div>

                <span className="font-medium opacity-90 group-hover:opacity-100 transition-colors duration-300">
                  MENU
                </span>

                <div className="flex items-center justify-center h-6 w-6 md:h-6 md:w-6 rounded-full bg-brand-accent text-white shadow-[0_0_10px_rgba(255,90,0,0.4)] transition-all duration-300 group-hover:bg-[#ff4500] group-hover:scale-105">
                  <span className="text-xs font-bold transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                    ›
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Full-screen Mobile Navigation Overlay ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: EASE_CUSTOM }}
            className="fixed inset-0 z-50 flex flex-col bg-[#060606] pt-24 pb-12 px-8 text-white"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <span className="font-mono text-xs tracking-widest text-white/60 uppercase">
                NAVIGATION
              </span>
              <div className="flex items-center gap-3">
                {/* Theme toggle in menu */}
                <ThemeToggle inMenu />

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center gap-3 h-[36px] pl-4 pr-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  <span className="font-semibold text-white/90 group-hover:text-white">CLOSE</span>
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-accent text-white shadow-[0_0_10px_rgba(255,90,0,0.4)] transition-transform duration-300 group-hover:rotate-90">
                    <X className="h-3.5 w-3.5" aria-hidden />
                  </div>
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-6 max-w-xl">
              {NAV_ITEMS.map((label, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.04, duration: 0.35 }}
                >
                  <Link
                    href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-sans text-3xl md:text-4xl font-normal tracking-tight text-white hover:text-brand-accent transition-colors focus:outline-none focus-visible:text-brand-accent"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
