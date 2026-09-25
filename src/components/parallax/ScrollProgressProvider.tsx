"use client";

import React, { createContext, useContext, useRef } from "react";
import { useScroll, MotionValue } from "framer-motion";

interface ScrollProgressContextType {
  globalProgress: MotionValue<number>;
}

const ScrollProgressContext = createContext<ScrollProgressContextType | null>(null);

export function ScrollProgressProvider({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  return (
    <ScrollProgressContext.Provider value={{ globalProgress: scrollYProgress }}>
      <div className="relative w-full h-full">
        {children}
      </div>
    </ScrollProgressContext.Provider>
  );
}

export function useGlobalScroll() {
  const context = useContext(ScrollProgressContext);
  if (!context) {
    throw new Error("useGlobalScroll must be used within a ScrollProgressProvider");
  }
  return context;
}
