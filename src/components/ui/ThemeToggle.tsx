"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("armia-theme") as Theme) ?? "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  localStorage.setItem("armia-theme", theme);
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
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setIsLight(next === "light");
    applyTheme(next);
  };

  if (!mounted) return null;

  // In the menu overlay (always dark bg) — use white style
  if (inMenu) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-md"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/[0.06] text-white/70 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </span>
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors">
          {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
        </span>
      </button>
    );
  }

  // Header toggle — adapt icon color based on context
  // On hero (not past hero): always dark bg → white icon
  // Past hero in light mode: white bg → dark icon
  // Past hero in dark mode: dark bg → white icon
  const isDarkContext = !isPastHero || !isLight;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent backdrop-blur-sm ${
        isDarkContext
          ? "border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/30 text-white/60 hover:text-white"
          : "border border-black/15 bg-black/[0.05] hover:bg-black/[0.10] hover:border-black/25 text-black/50 hover:text-black"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
            transition={{ duration: 0.22 }}
          >
            <Sun className="w-3.5 h-3.5" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -30, scale: 0.8 }}
            transition={{ duration: 0.22 }}
          >
            <Moon className="w-3.5 h-3.5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
