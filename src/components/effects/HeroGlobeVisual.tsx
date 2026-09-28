"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroGlobeVisualProps {
  isLight?: boolean;
}

export function HeroGlobeVisual({ isLight = false }: HeroGlobeVisualProps) {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none transition-colors duration-700 ease-in-out"
      aria-hidden="true"
    >
      {/* ── High-Res Earth Globe Background with Stable GPU Compositing & 700ms Cross-Dissolve ── */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Dark Earth Globe Image */}
          <Image
            src="/images/hero_dark_globe.jpg"
            alt="Dark Earth Globe at Night"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-[68%_center] lg:object-[72%_center] transition-opacity duration-700 ease-in-out ${
              isLight ? "opacity-0" : "opacity-50"
            }`}
          />

          {/* Light Earth Globe Image */}
          <Image
            src="/images/hero_light_globe.jpg"
            alt="Daylight Earth Globe from Space"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-[62%_center] lg:object-[64%_center] transition-opacity duration-700 ease-in-out ${
              isLight ? "opacity-90" : "opacity-0 pointer-events-none"
            }`}
          />
        </div>

        {/* ── Dark Mode Shrouds & Masks Layer (Fades smoothly out in light mode) ── */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out ${
            isLight ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 w-full md:w-[82%] lg:w-[75%] bg-gradient-to-r from-[#090909] via-[#090909]/95 via-[48%] to-transparent" />
          <div className="absolute bottom-0 left-0 w-full sm:w-[560px] h-[360px] bg-gradient-to-tr from-[#090909] via-[#090909] to-transparent z-20" />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#090909] via-[#090909]/80 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#090909] via-[#090909]/85 to-transparent z-10" />
          <div
            className="absolute inset-0 mix-blend-screen opacity-45"
            style={{
              background:
                "radial-gradient(circle at 68% 34%, rgba(255, 90, 0, 0.22) 0%, rgba(255, 140, 0, 0.08) 28%, transparent 60%)",
            }}
          />
        </div>

        {/* ── Light Mode Shrouds & Masks Layer (Fades smoothly in in light mode) ── */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out ${
            isLight ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 w-full md:w-[82%] lg:w-[75%] bg-gradient-to-r from-[#fbfbfb] via-[#fbfbfb]/95 via-[44%] to-transparent" />
          <div className="absolute bottom-0 left-0 w-full sm:w-[560px] h-[360px] bg-gradient-to-tr from-[#fbfbfb] via-[#fbfbfb]/90 to-transparent z-20" />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb]/80 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#fbfbfb] via-[#fbfbfb]/85 to-transparent z-10" />
          <div
            className="absolute inset-0 opacity-35"
            style={{
              background:
                "radial-gradient(circle at 64% 35%, rgba(255, 120, 20, 0.22) 0%, rgba(255, 170, 50, 0.08) 32%, transparent 65%)",
            }}
          />
        </div>
      </div>

      {/* ── Worldwide Neuralink-Inspired Synaptic Connection Network (Locked Onto Globe Sphere) ── */}
      <div
        className={`absolute inset-0 z-10 hidden md:block ${
          isLight ? "opacity-75" : "opacity-60"
        } transition-all duration-700 ease-in-out`}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Primary gradient for neural trunk arcs */}
            <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5A00" stopOpacity={isLight ? "0.45" : "0.3"} />
              <stop offset="50%" stopColor="#FFA040" stopOpacity={isLight ? "0.98" : "0.9"} />
              <stop offset="100%" stopColor="#FF5A00" stopOpacity={isLight ? "0.5" : "0.35"} />
            </linearGradient>

            {/* Subtle atmospheric haze for core delivery beacon */}
            <radialGradient id="hubBeaconGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFA040" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#FF5A00" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FF5A00" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ════════════════════════════════════════════════════════════
              WHOLE NETWORK ALIGNMENT GROUP (Shifted slight left & down)
             ════════════════════════════════════════════════════════════ */}
          <g transform="translate(-130, 55)">
            {/* ════════════════════════════════════════════════════════════
                1. NEURALINK SYNAPTIC LATTICE (Fine Geodesic Mesh on Sphere)
               ════════════════════════════════════════════════════════════ */}
          <g
            stroke={isLight ? "#FF5A00" : "#FFA040"}
            strokeWidth="0.65"
            strokeDasharray="2 3"
            opacity={isLight ? "0.35" : "0.26"}
            className="transition-all duration-700 ease-in-out"
          >
            {/* Western Hemisphere (Americas to Atlantic) */}
            <path d="M 740 340 L 820 240 L 770 305 Z" />
            <path d="M 770 305 L 820 240 L 880 290 Z" />
            <path d="M 740 340 L 770 305 L 780 530 Z" />
            <path d="M 770 305 L 780 530 L 890 420 Z" />

            {/* Europe & Middle East Mesh */}
            <path d="M 880 290 L 940 305 L 1040 390 Z" />
            <path d="M 880 290 L 890 420 L 960 490 Z" />
            <path d="M 890 420 L 940 305 L 1040 390 Z" />
            <path d="M 940 305 L 1010 290 L 1040 390 Z" />

            {/* Indian Subcontinent & Central Asia Mesh */}
            <path d="M 1040 390 L 1010 290 L 1090 450 Z" />
            <path d="M 960 490 L 1040 390 L 1090 450 Z" />
            <path d="M 960 490 L 880 590 L 1090 450 Z" />

            {/* Asia-Pacific & Oceania Mesh */}
            <path d="M 1010 290 L 1150 370 L 1090 450 Z" />
            <path d="M 1090 450 L 1150 370 L 1210 330 Z" />
            <path d="M 1090 450 L 1170 490 L 1150 370 Z" />
            <path d="M 1170 490 L 1150 370 L 1210 330 Z" />
            <path d="M 1170 490 L 1140 570 L 1200 580 Z" />
            <path d="M 1090 450 L 1140 570 L 1200 580 Z" />
          </g>

          {/* ════════════════════════════════════════════════════════════
              2. PRIMARY SYNAPTIC TRUNK ARCS (On the Earth Surface)
             ════════════════════════════════════════════════════════════ */}
          {/* Arc 1: US West (SF) to US East (NY) */}
          <path
            id="arcSFtoNY"
            d="M 740 340 Q 755 320 770 305"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.3" : "1.1"}
            opacity={isLight ? "0.7" : "0.55"}
          />

          {/* Arc 2: US East (NY) to Europe (London) */}
          <path
            id="arcNYtoLON"
            d="M 770 305 Q 820 250 880 290"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.5" : "1.2"}
            opacity={isLight ? "0.8" : "0.65"}
          />

          {/* Arc 3: US East (NY) to São Paulo (LatAm) */}
          <path
            id="arcNYtoSAO"
            d="M 770 305 Q 775 420 780 530"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.2" : "1"}
            strokeDasharray="3 3"
            opacity={isLight ? "0.55" : "0.4"}
          />

          {/* Arc 4: London to Frankfurt */}
          <path
            id="arcLONtoFRA"
            d="M 880 290 Q 910 290 940 305"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.3" : "1.1"}
            opacity={isLight ? "0.75" : "0.6"}
          />

          {/* Arc 5: Frankfurt to Dubai */}
          <path
            id="arcFRAtoDXB"
            d="M 940 305 Q 990 340 1040 390"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.4" : "1.1"}
            opacity={isLight ? "0.75" : "0.6"}
          />

          {/* Arc 6: London to Nairobi / Africa */}
          <path
            id="arcLONtoNBO"
            d="M 880 290 Q 915 390 960 490"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.2" : "1"}
            strokeDasharray="3 3"
            opacity={isLight ? "0.55" : "0.4"}
          />

          {/* Arc 7: Dubai to Bengaluru Core Hub */}
          <path
            id="arcDXBtoBLR"
            d="M 1040 390 Q 1065 415 1090 450"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.6" : "1.3"}
            opacity={isLight ? "0.9" : "0.75"}
          />

          {/* Arc 8: Bengaluru to Singapore */}
          <path
            id="arcBLRtoSGP"
            d="M 1090 450 Q 1130 465 1170 490"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.5" : "1.2"}
            opacity={isLight ? "0.85" : "0.7"}
          />

          {/* Arc 9: Singapore to Tokyo */}
          <path
            id="arcSGPtoTYO"
            d="M 1170 490 Q 1205 410 1210 330"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.4" : "1.1"}
            opacity={isLight ? "0.75" : "0.6"}
          />

          {/* Arc 10: Singapore to Sydney */}
          <path
            id="arcSGPtoSYD"
            d="M 1170 490 Q 1190 535 1200 580"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.3" : "1"}
            opacity={isLight ? "0.7" : "0.55"}
          />

          {/* ════════════════════════════════════════════════════════════
              3. HIGH-SPEED NEURAL ORBITAL BACKBONES (Intercontinental)
             ════════════════════════════════════════════════════════════ */}
          {/* Backbone 1: Trans-Global USA East to India Direct Highway */}
          <path
            id="backboneUSAIndia"
            d="M 770 305 Q 930 220 1090 450"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.5" : "1.2"}
            strokeDasharray="4 4"
            opacity={isLight ? "0.6" : "0.45"}
          />

          {/* Backbone 2: London to Tokyo Trans-Eurasian Highway */}
          <path
            id="backboneEurAsia"
            d="M 880 290 Q 1050 250 1210 330"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.3" : "1"}
            strokeDasharray="4 3"
            opacity={isLight ? "0.55" : "0.4"}
          />

          {/* Backbone 3: Bengaluru to Sydney Indian Ocean Highway */}
          <path
            id="backboneIndOcean"
            d="M 1090 450 Q 1145 530 1200 580"
            stroke="url(#arcGlow)"
            strokeWidth={isLight ? "1.3" : "1"}
            strokeDasharray="4 3"
            opacity={isLight ? "0.55" : "0.4"}
          />

          {/* ════════════════════════════════════════════════════════════
              4. ACTIVE TRAVELLING SYNAPTIC PHOTONS (Live Data Packets)
             ════════════════════════════════════════════════════════════ */}
          {/* Packet 1: USA East -> London */}
          <circle r="4.5" fill="#FFA040" opacity={isLight ? "0.65" : "0.5"}>
            <animateMotion dur="3.8s" repeatCount="indefinite" path="M 770 305 Q 820 250 880 290" />
          </circle>
          <circle r="1.6" fill="#FFFFFF">
            <animateMotion dur="3.8s" repeatCount="indefinite" path="M 770 305 Q 820 250 880 290" />
          </circle>

          {/* Packet 2: London -> Frankfurt -> Dubai */}
          <circle r="4.5" fill="#FF5A00" opacity={isLight ? "0.65" : "0.5"}>
            <animateMotion dur="3.6s" begin="0.6s" repeatCount="indefinite" path="M 880 290 Q 940 305 1040 390" />
          </circle>
          <circle r="1.6" fill="#FFFFFF">
            <animateMotion dur="3.6s" begin="0.6s" repeatCount="indefinite" path="M 880 290 Q 940 305 1040 390" />
          </circle>

          {/* Packet 3: Dubai -> Bengaluru Core Hub */}
          <circle r="5" fill="#FF5A00" opacity={isLight ? "0.75" : "0.6"}>
            <animateMotion dur="2.8s" begin="0.3s" repeatCount="indefinite" path="M 1040 390 Q 1065 415 1090 450" />
          </circle>
          <circle r="1.8" fill="#FFFFFF">
            <animateMotion dur="2.8s" begin="0.3s" repeatCount="indefinite" path="M 1040 390 Q 1065 415 1090 450" />
          </circle>

          {/* Packet 4: Direct USA East -> Bengaluru Orbital Backbone */}
          <circle r="4.5" fill="#FFA040" opacity={isLight ? "0.65" : "0.5"}>
            <animateMotion dur="4.6s" begin="1s" repeatCount="indefinite" path="M 770 305 Q 930 220 1090 450" />
          </circle>
          <circle r="1.6" fill="#FFFFFF">
            <animateMotion dur="4.6s" begin="1s" repeatCount="indefinite" path="M 770 305 Q 930 220 1090 450" />
          </circle>

          {/* Packet 5: Bengaluru -> Singapore */}
          <circle r="4.5" fill="#FFA040" opacity={isLight ? "0.65" : "0.5"}>
            <animateMotion dur="3s" begin="1.4s" repeatCount="indefinite" path="M 1090 450 Q 1130 465 1170 490" />
          </circle>
          <circle r="1.6" fill="#FFFFFF">
            <animateMotion dur="3s" begin="1.4s" repeatCount="indefinite" path="M 1090 450 Q 1130 465 1170 490" />
          </circle>

          {/* Packet 6: Singapore -> Tokyo */}
          <circle r="4.5" fill="#FF5A00" opacity={isLight ? "0.65" : "0.5"}>
            <animateMotion dur="3.2s" begin="0.2s" repeatCount="indefinite" path="M 1170 490 Q 1205 410 1210 330" />
          </circle>
          <circle r="1.6" fill="#FFFFFF">
            <animateMotion dur="3.2s" begin="0.2s" repeatCount="indefinite" path="M 1170 490 Q 1205 410 1210 330" />
          </circle>

          {/* Packet 7: Singapore -> Sydney */}
          <circle r="4" fill="#FFA040" opacity={isLight ? "0.6" : "0.45"}>
            <animateMotion dur="3.4s" begin="1.8s" repeatCount="indefinite" path="M 1170 490 Q 1190 535 1200 580" />
          </circle>
          <circle r="1.5" fill="#FFFFFF">
            <animateMotion dur="3.4s" begin="1.8s" repeatCount="indefinite" path="M 1170 490 Q 1190 535 1200 580" />
          </circle>

          {/* ════════════════════════════════════════════════════════════
              5. SYNAPTIC RELAY NODES (Fine Micro Points on Sphere)
             ════════════════════════════════════════════════════════════ */}
          <g fill="#FF5A00" opacity={isLight ? "0.65" : "0.5"}>
            <circle cx="820" cy="240" r="2.2" />
            <circle cx="890" cy="420" r="2.2" />
            <circle cx="1010" cy="290" r="2.2" />
            <circle cx="1150" cy="370" r="2.2" />
            <circle cx="1140" cy="570" r="2" />
            <circle cx="880" cy="590" r="2" />
          </g>

          {/* ════════════════════════════════════════════════════════════
              6. REGIONAL CONTINENTAL HUBS & TELEMETRY (Locked onto Earth)
             ════════════════════════════════════════════════════════════ */}

          {/* ── Node: US WEST / SFO (740, 340) ── */}
          <g transform="translate(740, 340)">
            <circle r="6" fill="#FF5A00" opacity="0.25" className="animate-ping" />
            <circle r="4" fill="#FF5A00" opacity={isLight ? "0.5" : "0.35"} className="transition-all duration-700 ease-in-out" />
            <circle r="2.2" fill="#FF5A00" />
            <circle r="1.1" fill="#FFFFFF" />
          </g>

          {/* ── Node: US EAST / NYC (770, 305) ── */}
          <g transform="translate(770, 305)">
            <circle r="7" fill="#FF5A00" opacity="0.25" className="animate-ping" style={{ animationDelay: "0.5s" }} />
            <circle r="4.5" fill="#FF5A00" opacity={isLight ? "0.5" : "0.35"} className="transition-all duration-700 ease-in-out" />
            <circle r="2.5" fill="#FF5A00" />
            <circle r="1.2" fill="#FFFFFF" />
          </g>

          {/* ── Node: LATAM / SÃO PAULO (780, 530) ── */}
          <g transform="translate(780, 530)">
            <circle r="5" fill="#FF5A00" opacity="0.25" className="animate-ping" style={{ animationDelay: "1.4s" }} />
            <circle r="3.5" fill="#FF5A00" opacity={isLight ? "0.45" : "0.3"} className="transition-all duration-700 ease-in-out" />
            <circle r="2" fill="#FF5A00" />
            <circle r="1" fill="#FFFFFF" />
          </g>

          {/* ── Node: EUROPE WEST / LONDON (880, 290) ── */}
          <g transform="translate(880, 290)">
            <circle r="7" fill="#FF5A00" opacity="0.25" className="animate-ping" style={{ animationDelay: "0.8s" }} />
            <circle r="4.5" fill="#FF5A00" opacity={isLight ? "0.5" : "0.35"} className="transition-all duration-700 ease-in-out" />
            <circle r="2.5" fill="#FF5A00" />
            <circle r="1.2" fill="#FFFFFF" />
          </g>

          {/* ── Node: EUROPE CENTRAL / FRANKFURT (940, 305) ── */}
          <g transform="translate(940, 305)">
            <circle r="4.5" fill="#FF5A00" opacity={isLight ? "0.45" : "0.3"} className="transition-all duration-700 ease-in-out" />
            <circle r="2.5" fill="#FF5A00" />
            <circle r="1.2" fill="#FFFFFF" />
          </g>

          {/* ── Node: MIDDLE EAST / DUBAI (1040, 390) ── */}
          <g transform="translate(1040, 390)">
            <circle r="6" fill="#FF5A00" opacity="0.25" className="animate-ping" style={{ animationDelay: "1s" }} />
            <circle r="4" fill="#FF5A00" opacity={isLight ? "0.45" : "0.3"} className="transition-all duration-700 ease-in-out" />
            <circle r="2.2" fill="#FF5A00" />
            <circle r="1.1" fill="#FFFFFF" />
          </g>

          {/* ── Node: AFRICA / NAIROBI (960, 490) ── */}
          <g transform="translate(960, 490)">
            <circle r="4" fill="#FF5A00" opacity={isLight ? "0.4" : "0.25"} className="transition-all duration-700 ease-in-out" />
            <circle r="2" fill="#FF5A00" />
            <circle r="1" fill="#FFFFFF" />
          </g>

          {/* ── Node: INDIA / BENGALURU (1090, 450) - Core Delivery Hub ── */}
          <g transform="translate(1090, 450)">
            <circle
              r="20"
              fill="none"
              stroke="#FF5A00"
              strokeWidth="1.2"
              opacity="0.3"
              className="animate-ping"
              style={{ animationDuration: "2.8s" }}
            />
            <circle
              r="12"
              fill="none"
              stroke="#FFA040"
              strokeWidth="1"
              opacity="0.4"
              className="animate-pulse"
            />
            <circle r="7" fill="#FF5A00" opacity="0.35" className="animate-ping" style={{ animationDelay: "1s" }} />
            <circle r="5" fill="#FF5A00" opacity={isLight ? "0.6" : "0.45"} className="transition-all duration-700 ease-in-out" />
            <circle r="3" fill="#FF5A00" />
            <circle r="1.5" fill="#FFFFFF" />
          </g>

          {/* ── Node: SE ASIA / SINGAPORE (1170, 490) ── */}
          <g transform="translate(1170, 490)">
            <circle r="6" fill="#FF5A00" opacity="0.25" className="animate-ping" style={{ animationDelay: "0.6s" }} />
            <circle r="4" fill="#FF5A00" opacity={isLight ? "0.5" : "0.35"} className="transition-all duration-700 ease-in-out" />
            <circle r="2.2" fill="#FF5A00" />
            <circle r="1.1" fill="#FFFFFF" />
          </g>

          {/* ── Node: EAST ASIA / TOKYO (1210, 330) ── */}
          <g transform="translate(1210, 330)">
            <circle r="7" fill="#FF5A00" opacity="0.25" className="animate-ping" style={{ animationDelay: "1.2s" }} />
            <circle r="4" fill="#FF5A00" opacity={isLight ? "0.5" : "0.35"} className="transition-all duration-700 ease-in-out" />
            <circle r="2.2" fill="#FF5A00" />
            <circle r="1.1" fill="#FFFFFF" />
          </g>

          {/* ── Node: OCEANIA / SYDNEY (1200, 580) ── */}
          <g transform="translate(1200, 580)">
            <circle r="6" fill="#FF5A00" opacity="0.25" className="animate-ping" style={{ animationDelay: "1.8s" }} />
            <circle r="4" fill="#FF5A00" opacity={isLight ? "0.5" : "0.35"} className="transition-all duration-700 ease-in-out" />
            <circle r="2.2" fill="#FF5A00" />
            <circle r="1.1" fill="#FFFFFF" />
          </g>
          </g>
        </svg>
      </div>

      {/* ── Subtle Ambient Floating Star Dust Particles ── */}
      <motion.div
        animate={{
          opacity: isLight ? [0.3, 0.7, 0.3] : [0.2, 0.5, 0.2],
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
          opacity: isLight ? [0.2, 0.6, 0.2] : [0.15, 0.4, 0.15],
          scale: [1, 1.15, 1],
          y: [6, -6, 6],
        }}
        transition={{
          duration: 11,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-[38%] right-[28%] w-1.5 h-1.5 rounded-full pointer-events-none ${
          isLight ? "bg-[#FF5A00]/80 shadow-[0_0_8px_#FF5A00]" : "bg-white/70 shadow-[0_0_8px_#FFF]"
        }`}
      />
    </div>
  );
}
