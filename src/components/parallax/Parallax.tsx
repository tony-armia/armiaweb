"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // e.g. 0.2, -0.2 (maps to default y offset)
  yOffset?: [number, number];
  xOffset?: [number, number];
  scale?: [number, number];
  opacity?: [number, number];
  rotate?: [number, number];
  className?: string;
  style?: React.CSSProperties;
  targetRef?: React.RefObject<HTMLElement | null>;
  offset?: [
    "start end" | "start start" | "center end" | "center center",
    "end start" | "end end" | "start start"
  ];
}

export function Parallax({
  children,
  speed,
  yOffset,
  xOffset,
  scale,
  opacity,
  rotate,
  className = "",
  style = {},
  targetRef,
  offset = ["start end", "end start"],
}: ParallaxProps) {
  const fallbackRef = useRef<HTMLDivElement>(null);
  const activeRef = targetRef || fallbackRef;
  const isReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: activeRef as React.RefObject<HTMLElement>,
    offset,
  });

  const resolvedYOffset: [number, number] =
    yOffset ?? (speed !== undefined ? [speed * 160, -speed * 160] : [0, 0]);

  const y = useTransform(scrollYProgress, [0, 1], resolvedYOffset);
  const x = useTransform(scrollYProgress, [0, 1], xOffset ?? [0, 0]);
  const s = useTransform(scrollYProgress, [0, 1], scale ?? [1, 1]);
  const op = useTransform(scrollYProgress, [0, 1], opacity ?? [1, 1]);
  const rot = useTransform(scrollYProgress, [0, 1], rotate ?? [0, 0]);

  if (isReduced) {
    return (
      <div ref={fallbackRef} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={fallbackRef}
      className={`will-change-transform ${className}`}
      style={{
        ...style,
        ...(yOffset || speed !== undefined ? { y } : {}),
        ...(xOffset ? { x } : {}),
        ...(scale ? { scale: s } : {}),
        ...(opacity ? { opacity: op } : {}),
        ...(rotate ? { rotate: rot } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}
