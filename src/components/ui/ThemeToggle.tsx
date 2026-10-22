"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("armia-theme-v2") as Theme) ?? "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  localStorage.setItem("armia-theme-v2", theme);
}

interface ThemeToggleProps {
  /** Used inside the mobile menu overlay (always dark bg) */
  inMenu?: boolean;
  /** When true, header is past hero so bg is solid (theme-aware) */
  isPastHero?: boolean;
}

export function ThemeToggle({ inMenu = false, isPastHero = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    applyTheme(stored);
    setIsLight(stored === "light");
    setMounted(true);

    const handleThemeEvent = () => {
      const current = getStoredTheme();
      setTheme(current);
      setIsLight(current === "light");
    };

    window.addEventListener("themeChange", handleThemeEvent);
    window.addEventListener("storage", handleThemeEvent);
    return () => {
      window.removeEventListener("themeChange", handleThemeEvent);
      window.removeEventListener("storage", handleThemeEvent);
    };
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setIsLight(next === "light");
    applyTheme(next);
    window.dispatchEvent(new CustomEvent("themeChange", { detail: next }));
  };

  if (!mounted) return null;

  // In the menu overlay (always dark bg) — use white style
  if (inMenu) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-md cursor-pointer"
      >
        <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-white/[0.06] text-white/70 group-hover:text-white group-hover:border-white/30 transition-all duration-300 shrink-0">
          {theme === "light" ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />}
        </span>
        <span className="hidden xs:inline font-mono text-xs sm:text-base tracking-[0.14em] uppercase text-white/70 group-hover:text-white transition-colors">
          {theme === "light" ? "DARK" : "LIGHT"}
        </span>
      </button>
    );
  }

  // Header toggle — adapt icon color based on context
  // When in light theme/hero: dark icon & border for high contrast
  // When in dark theme: white icon & border
  const isDarkContext = !isLight;

  return (
    <button
      type="button"
      onClick={toggle}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`group relative flex items-center justify-center w-[42px] h-[42px] md:w-[44px] md:h-[44px] rounded-full transition-all duration-700 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent backdrop-blur-sm ${
        isDarkContext
          ? "border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/30 text-white/70 hover:text-white"
          : "border border-black/15 bg-black/[0.05] hover:bg-black/[0.10] hover:border-black/25 text-neutral-800 hover:text-black"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
            transition={{ duration: 0.22 }}
          >
            <Sun className="w-4 h-4 text-amber-500" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -30, scale: 0.8 }}
            transition={{ duration: 0.22 }}
          >
            <Moon className="w-4 h-4 text-white/80" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
