"use client";

import React, { useRef } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string;
  imageClassName?: string;
  parallaxOffset?: [string, string]; // e.g. ["-10%", "10%"]
  scale?: number; // e.g. 1.15 to ensure no gaps
}

export function ParallaxImage({
  containerClassName = "",
  imageClassName = "",
  parallaxOffset = ["-8%", "8%"],
  scale = 1.12,
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallaxOffset);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.div
        className="relative w-full h-full will-change-transform"
        style={isReduced ? {} : { y, scale }}
      >
        <Image
          {...imageProps}
          alt={alt}
          className={`object-cover ${imageClassName}`}
        />
      </motion.div>
    </div>
  );
}
