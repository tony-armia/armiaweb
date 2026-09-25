"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroGlobeVisual() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ── High-Res Dark Earth Globe Background with Subtle Orbital Drift ── */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [-5, 5, -5],
            scale: [1, 1.018, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero_dark_globe.jpg"
            alt="Dark Earth Globe at Night"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] lg:object-right opacity-60 brightness-[0.70] contrast-[1.25]"
          />
        </motion.div>

        {/* Global Dark Shroud Overlay for deeper obsidian tone */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        {/* Wide Deep Black Left Blend (Keeps Hero Center Typography 100% Crisp) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/95 via-[48%] to-transparent w-full md:w-[82%] lg:w-[75%]" />

        {/* Dedicated Deep Obsidian Mask for Bottom-Left Text (Eliminates Any Dot/Light Bleed) */}
        <div className="absolute bottom-0 left-0 w-full sm:w-[560px] h-[360px] bg-gradient-to-tr from-[#090909] via-[#090909] to-transparent pointer-events-none z-20" />

        {/* Top Header Mask & Bottom Section Blend */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#090909] via-[#090909]/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#090909] via-[#090909]/85 to-transparent z-10" />

        {/* Dynamic Breathing Atmospheric Sunrise Rim Glow */}
        <motion.div
          animate={{
            opacity: [0.35, 0.55, 0.35],
            scale: [0.98, 1.06, 0.98],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 pointer-events-none mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at 74% 34%, rgba(255, 90, 0, 0.22) 0%, rgba(255, 140, 0, 0.08) 28%, transparent 60%)",
          }}
        />
      </div>

      {/* ── Global Connection Network Arcs with Active Data Packets (USA → EUROPE → INDIA → APAC) ── */}
      <div className="absolute inset-0 z-10 hidden md:block translate-x-[4%] translate-y-[12%] scale-105 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradient for connection arcs */}
            <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5A00" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#FFA040" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FF5A00" stopOpacity="0.2" />
            </linearGradient>

            {/* Amber node glow filter */}
            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Bright photon core glow */}
            <filter id="photonGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection Arc 1: USA to Europe */}
          <path
            id="arcUSAEurope"
            d="M 680 340 Q 820 250 960 380"
            stroke="url(#arcGlow)"
            strokeWidth="1.1"
            strokeDasharray="4 3"
            opacity="0.45"
          />

          {/* Connection Arc 2: Europe to India */}
          <path
            id="arcEuropeIndia"
            d="M 960 380 Q 940 450 945 520"
            stroke="url(#arcGlow)"
            strokeWidth="1.2"
            opacity="0.55"
          />

          {/* Connection Arc 3: India to APAC */}
          <path
            id="arcIndiaApac"
            d="M 945 520 Q 1050 540 1100 610"
            stroke="url(#arcGlow)"
            strokeWidth="1.1"
            strokeDasharray="3 3"
            opacity="0.4"
          />

          {/* Connection Arc 4: USA to India (Direct Global Backbone) */}
          <path
            id="arcUSAIndia"
            d="M 680 340 Q 820 440 945 520"
            stroke="url(#arcGlow)"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* ── Active Travelling Data Photons along the Arcs ── */}
          {/* Packet 1: USA to Europe */}
          <circle r="3.5" fill="#FFA040" filter="url(#photonGlow)">
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              path="M 680 340 Q 820 250 960 380"
            />
          </circle>
          <circle r="1.5" fill="#FFFFFF">
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              path="M 680 340 Q 820 250 960 380"
            />
          </circle>

          {/* Packet 2: Europe to India */}
          <circle r="3.5" fill="#FF5A00" filter="url(#photonGlow)">
            <animateMotion
              dur="3.8s"
              begin="1s"
              repeatCount="indefinite"
              path="M 960 380 Q 940 450 945 520"
            />
          </circle>
          <circle r="1.5" fill="#FFFFFF">
            <animateMotion
              dur="3.8s"
              begin="1s"
              repeatCount="indefinite"
              path="M 960 380 Q 940 450 945 520"
            />
          </circle>

          {/* Packet 3: India to APAC */}
          <circle r="3" fill="#FFA040" filter="url(#photonGlow)">
            <animateMotion
              dur="4s"
              begin="2s"
              repeatCount="indefinite"
              path="M 945 520 Q 1050 540 1100 610"
            />
          </circle>
          <circle r="1.5" fill="#FFFFFF">
            <animateMotion
              dur="4s"
              begin="2s"
              repeatCount="indefinite"
              path="M 945 520 Q 1050 540 1100 610"
            />
          </circle>

          {/* Packet 4: USA to India Backbone */}
          <circle r="3" fill="#FF5A00" filter="url(#photonGlow)">
            <animateMotion
              dur="6s"
              begin="0.5s"
              repeatCount="indefinite"
              path="M 680 340 Q 820 440 945 520"
            />
          </circle>

          {/* ── Node: USA (680, 340) ── */}
          <g transform="translate(680, 340)">
            <circle r="9" fill="#FF5A00" opacity="0.2" className="animate-ping" />
            <circle r="4" fill="#FF5A00" filter="url(#glowFilter)" />
            <circle r="2" fill="#FFFFFF" />
            <text
              x="12"
              y="4"
              fill="#FFFFFF"
              opacity="0.4"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="0.15em"
            >
              USA
            </text>
          </g>

          {/* ── Node: EUROPE (960, 380) ── */}
          <g transform="translate(960, 380)">
            <circle
              r="9"
              fill="#FF5A00"
              opacity="0.2"
              className="animate-ping"
              style={{ animationDelay: "0.6s" }}
            />
            <circle r="4" fill="#FF5A00" filter="url(#glowFilter)" />
            <circle r="2" fill="#FFFFFF" />
            <text
              x="12"
              y="4"
              fill="#FFFFFF"
              opacity="0.4"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="0.15em"
            >
              EUROPE
            </text>
          </g>

          {/* ── Node: INDIA Hub (945, 520) - Primary Core Hub ── */}
          <g transform="translate(945, 520)">
            {/* Multi-tier expanding radar wave for central delivery hub */}
            <circle
              r="18"
              fill="none"
              stroke="#FF5A00"
              strokeWidth="1"
              opacity="0.25"
              className="animate-ping"
              style={{ animationDuration: "3s" }}
            />
            <circle r="12" fill="#FF5A00" opacity="0.15" className="animate-pulse" />
            <circle
              r="7"
              fill="#FF5A00"
              opacity="0.3"
              className="animate-ping"
              style={{ animationDelay: "1.2s" }}
            />
            <circle r="4.5" fill="#FF5A00" filter="url(#glowFilter)" />
            <circle r="2" fill="#FFFFFF" />
            <text
              x="14"
              y="4"
              fill="#FFFFFF"
              fontWeight="600"
              opacity="0.4"
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="0.2em"
            >
              INDIA
            </text>
          </g>

          {/* ── Node: APAC (1100, 610) ── */}
          <g transform="translate(1100, 610)">
            <circle
              r="8"
              fill="#FF5A00"
              opacity="0.2"
              className="animate-ping"
              style={{ animationDelay: "1.8s" }}
            />
            <circle r="4" fill="#FF5A00" filter="url(#glowFilter)" />
            <circle r="2" fill="#FFFFFF" />
            <text
              x="12"
              y="4"
              fill="#FFFFFF"
              opacity="0.65"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="0.15em"
            >
              APAC
            </text>
          </g>
        </svg>
      </div>

      {/* ── Subtle Ambient Floating Star Dust Particles ── */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1],
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[22%] right-[16%] w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_12px_#FF5A00] pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.15, 1],
          y: [6, -6, 6],
        }}
        transition={{
          duration: 11,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[38%] right-[28%] w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_8px_#FFF] pointer-events-none"
      />
    </div>
  );
}
