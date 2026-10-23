"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [activeHero, setActiveHero] = useState<"hero1" | "hero2">("hero1");

  // Track active hero from URL and custom event
  useEffect(() => {
    const syncFromUrl = () => {
      if (typeof window === "undefined") return;
      const params = new URLSearchParams(window.location.search);
      const raw = params.get("hero")?.toLowerCase().replace(/[\s+_-]/g, "");
      if (raw === "hero2" || raw === "2") setActiveHero("hero2");
      else if (raw === "hero1" || raw === "1") setActiveHero("hero1");
    };
    syncFromUrl();

    const handleCustomChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "hero1" || detail === "hero2") {
        setActiveHero(detail);
      }
    };
    window.addEventListener("heroChange", handleCustomChange);
    return () => window.removeEventListener("heroChange", handleCustomChange);
  }, []);

  const handleHeroChange = (val: "hero1" | "hero2") => {
    setActiveHero(val);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("hero", val === "hero2" ? "Hero 2" : "Hero 1");
      window.history.replaceState({}, "", url.toString());
      window.dispatchEvent(new CustomEvent("heroChange", { detail: val }));
    }
  };

  // Track theme changes so header can adapt contrast
  useEffect(() => {
    const check = () => {
      const isHtmlLight = document.documentElement.classList.contains("light");
      const isHeroLightEl = !!document.querySelector('[data-theme="hero-light"]');
      setIsLight(isHtmlLight || isHeroLightEl);
    };
    check();

    window.addEventListener("themeChange", check);
    window.addEventListener("storage", check);

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
      subtree: true,
    });
    return () => {
      window.removeEventListener("themeChange", check);
      window.removeEventListener("storage", check);
      observer.disconnect();
    };
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

  // Check if header context requires dark text/icons
  const isLightContext = isPastHero ? isLight : isLight;

  // Menu button: adapt contrast to current background
  const menuBtnBase = !isLightContext
    ? "bg-white/[0.07] hover:bg-white/[0.14] text-white border-white/15 hover:border-brand-accent/50"
    : "bg-black/[0.06] hover:bg-black/[0.12] text-neutral-900 border-black/15 hover:border-brand-accent/40 font-semibold";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 select-none ${
          !isPastHero
            ? "bg-transparent border-transparent shadow-none"
            : solidBg
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-0 h-16 md:h-20 flex items-center">
          <div className="w-full md:w-[78%] md:ml-[10.8%] flex items-center justify-between gap-2">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm shrink-0"
            >
              <div className="relative h-9 w-28 sm:h-11 sm:w-32 md:h-14 md:w-60 flex items-center">
                <Image
                  src="/images/armialogo.svg"
                  alt="Armia Systems"
                  fill
                  className={`object-contain object-left transition-opacity duration-700 ease-in-out ${
                    isLightContext ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                />
                <Image
                  src="/images/armialogo-light.svg"
                  alt="Armia Systems"
                  fill
                  className={`object-contain object-left transition-opacity duration-700 ease-in-out ${
                    isLightContext ? "opacity-100" : "opacity-0"
                  }`}
                  priority
                />
              </div>
            </Link>

            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {isHome ? (
                /* Hero Switcher Dropdown integrated seamlessly inside header controls on homepage */
                <div className="relative">
                  <select
                    value={activeHero}
                    onChange={(e) => handleHeroChange(e.target.value as "hero1" | "hero2")}
                    aria-label="Hero Version Switcher"
                    suppressHydrationWarning
                    className={`backdrop-blur-md border text-xs sm:text-base font-mono tracking-wide px-2 sm:px-3 h-[38px] sm:h-[42px] md:h-[44px] rounded-full outline-none focus:border-brand-accent transition-all duration-300 cursor-pointer shadow-sm ${
                      isLightContext
                        ? "bg-black/[0.06] hover:bg-black/[0.10] border-black/15 text-neutral-900 hover:border-brand-accent/40 font-medium"
                        : "bg-white/10 hover:bg-white/15 border-white/20 text-white hover:border-brand-accent/50"
                    }`}
                  >
                    <option value="hero1" className="bg-neutral-900 text-white">Hero 1</option>
                    <option value="hero2" className="bg-neutral-900 text-white">Hero 2</option>
                  </select>
                </div>
              ) : pathname === "/work" ? (
                <Link
                  href="/"
                  className={`hidden sm:inline-flex items-center gap-2 px-3 sm:px-3.5 h-[38px] sm:h-[42px] md:h-[44px] rounded-full border text-xs sm:text-base font-mono tracking-wide backdrop-blur-md transition-all duration-300 group ${
                    isLightContext
                      ? "bg-black/[0.06] hover:bg-black/[0.10] border-black/15 text-neutral-900 hover:border-brand-accent/40 font-medium"
                      : "bg-white/10 hover:bg-white/15 border-white/20 text-white hover:border-brand-accent/50"
                  }`}
                >
                  <span className="text-brand-accent font-bold transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
                  <span className={`text-xs sm:text-sm font-semibold tracking-wider transition-colors ${isLightContext ? "text-neutral-900" : "text-white"}`}>
                    HOME
                  </span>
                </Link>
              ) : (
                <Link
                  href="/work"
                  className={`hidden sm:inline-flex items-center gap-2 px-3 sm:px-3.5 h-[38px] sm:h-[42px] md:h-[44px] rounded-full border text-xs sm:text-base font-mono tracking-wide backdrop-blur-md transition-all duration-300 group ${
                    isLightContext
                      ? "bg-black/[0.06] hover:bg-black/[0.10] border-black/15 text-neutral-900 hover:border-brand-accent/40 font-medium"
                      : "bg-white/10 hover:bg-white/15 border-white/20 text-white hover:border-brand-accent/50"
                  }`}
                >
                  <span className="text-brand-accent font-bold transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
                  <span className={`text-xs sm:text-sm font-semibold tracking-wider transition-colors ${isLightContext ? "text-neutral-900" : "text-white"}`}>
                    ALL WORK
                  </span>
                </Link>
              )}

              {/* Theme Toggle — always visible for easy access */}
              <ThemeToggle isPastHero={isLightContext} />

              {/* Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav"
                className={`group relative flex items-center gap-1.5 sm:gap-3 h-[38px] sm:h-[42px] md:h-[44px] pl-3 pr-1.5 sm:pl-4.5 sm:pr-2 rounded-full font-mono text-xs sm:text-base tracking-[0.12em] sm:tracking-[0.14em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent backdrop-blur-md border shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_0_20px_rgba(255,90,0,0.25)] ${menuBtnBase}`}
              >
                <div className="flex flex-col justify-center items-center gap-[3.5px] sm:gap-[4px] w-3.5 sm:w-4" aria-hidden="true">
                  <span className="block h-[1.5px] w-3 sm:w-3.5 rounded-full bg-current transition-all duration-300 group-hover:w-4 group-hover:translate-x-0.5 group-hover:bg-brand-accent" />
                  <span className="block h-[1.5px] w-3.5 sm:w-4 rounded-full bg-current opacity-80 transition-all duration-300 group-hover:w-3 group-hover:-translate-x-0.5" />
                </div>

                <span className="font-semibold text-current transition-colors duration-300">
                  MENU
                </span>

                <div className="flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-brand-accent text-white shadow-[0_0_10px_rgba(255,90,0,0.4)] transition-all duration-300 group-hover:bg-[#ff4500] group-hover:scale-105 shrink-0">
                  <span className="text-sm sm:text-base font-bold transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
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
            className="fixed inset-0 z-50 flex flex-col bg-[#060606] pt-16 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-8 text-white overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5 sm:pb-6 mb-6 sm:mb-8">
              <span className="font-mono text-xs sm:text-base tracking-[0.14em] text-white/70 uppercase">
                NAVIGATION
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Theme toggle in menu */}
                <ThemeToggle inMenu />

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center gap-2 sm:gap-3 h-[38px] sm:h-[42px] pl-3 sm:pl-4 pr-1.5 sm:pr-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-xs sm:text-base tracking-[0.14em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
                >
                  <span className="font-semibold text-white/90 group-hover:text-white">CLOSE</span>
                  <div className="flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-brand-accent text-white shadow-[0_0_10px_rgba(255,90,0,0.4)] transition-transform duration-300 group-hover:rotate-90 shrink-0">
                    <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                  </div>
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-4 sm:space-y-6 max-w-xl my-auto">
              {NAV_ITEMS.map((label, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.04, duration: 0.35 }}
                >
                  <Link
                    href={
                      label === "WORK"
                        ? "/work"
                        : isHome
                        ? `#${label.toLowerCase().replace(/\s+/g, "-")}`
                        : `/#${label.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-sans text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white hover:text-brand-accent transition-colors focus:outline-none focus-visible:text-brand-accent py-1"
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
