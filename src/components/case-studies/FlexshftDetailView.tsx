"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Smartphone,
  Globe,
  ShieldCheck,
  Zap,
  Users,
  CreditCard,
  Building2,
  Calendar,
  MessageSquare,
  Star,
  Settings,
  Maximize2,
  X,
} from "lucide-react";
import { EASE_CUSTOM } from "@/lib/motion";
import { GridLines } from "@/components/ui/GridLines";

// ─────────────────────────────────────────────────────────────────────────────
// Related Case Studies Data (Reused from existing Armia portfolio)
// ─────────────────────────────────────────────────────────────────────────────
const RELATED_PROJECTS = [
  {
    id: "02",
    num: "/02",
    title: "Ucollabit",
    category: "ENTERPRISE COLLABORATION",
    image: "/images/Ucollabit.png",
    description:
      "Unified workspace and collaborative project intelligence system for distributed enterprise teams.",
    tag: "Next.js • WebSockets • Redis",
    link: "/#work",
  },
  {
    id: "03",
    num: "/03",
    title: "Askonnect",
    category: "TELECOM & NETWORKING",
    image: "/images/Askonnect.png",
    description:
      "Intelligent B2B communication and omni-channel customer engagement platform with automated CRM routing.",
    tag: "VoIP Telephony • Microservices • AWS",
    link: "/#work",
  },
  {
    id: "04",
    num: "/04",
    title: "BCMCH",
    category: "HEALTHCARE PLATFORM",
    image: "/images/BCMCH.png",
    description:
      "Comprehensive hospital management system, telehealth portal, and electronic medical records ecosystem.",
    tag: "HIPAA Compliant • EHR • Telehealth",
    link: "/#work",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Verified Platform Capabilities (From Armia Systems Portfolio)
// ─────────────────────────────────────────────────────────────────────────────
const PLATFORM_FEATURES = [
  {
    num: "01",
    title: "Business & Worker Onboarding",
    description:
      "Streamlined verification workflows for hospitality venues and flexible workers, establishing verified profiles and compliance fast.",
    icon: Users,
  },
  {
    num: "02",
    title: "Shift Posting & Rapid Discovery",
    description:
      "Businesses create and broadcast open shifts in seconds, while workers filter and claim opportunities matching their schedule and pay goals.",
    icon: Calendar,
  },
  {
    num: "03",
    title: "Intelligent Shift Matching",
    description:
      "Automated matching engine pairing open shifts with nearby, qualified professionals based on role requirements, availability, and tier ratings.",
    icon: Zap,
  },
  {
    num: "04",
    title: "Workforce Coordination & Roster",
    description:
      "Centralized operational hub for venue managers to schedule, monitor attendance, and coordinate shift rotations in real time.",
    icon: Building2,
  },
  {
    num: "05",
    title: "Secure Payment Processing",
    description:
      "Transparent shift payout management and automated invoicing with integrated secure billing pathways for businesses and workers.",
    icon: CreditCard,
  },
  {
    num: "06",
    title: "In-App Real-Time Messaging",
    description:
      "Direct communication channel between venue supervisors and confirmed workers for arrival instructions, shift notes, and updates.",
    icon: MessageSquare,
  },
  {
    num: "07",
    title: "Verified Performance Ratings",
    description:
      "Mutual feedback system allowing businesses to build trusted rosters of reliable talent while workers build a verified track record.",
    icon: Star,
  },
  {
    num: "08",
    title: "Centralized Admin & Subscriptions",
    description:
      "Comprehensive administrative portal for business account verification, platform moderation, subscription plans, and telemetry.",
    icon: Settings,
  },
];

export function FlexshftDetailView() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  return (
    <div className="relative w-full min-h-screen transition-colors duration-400 select-none">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridLines />
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="case-study-hero"
        data-theme="section"
        className="relative z-10 w-full pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-16 md:pb-20 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            {/* Top Navigation / Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_CUSTOM }}
              className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10"
            >
              <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm tracking-[0.14em] text-white/60 uppercase">
                <Link href="/" className="hover:text-brand-accent transition-colors">HOME</Link>
                <span className="text-white/30">/</span>
                <Link href="/#work" className="hover:text-brand-accent transition-colors">CASE STUDIES</Link>
                <span className="text-white/30">/</span>
                <span className="text-brand-accent font-semibold">FLEXSHFT</span>
              </div>

              <Link
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.14em] uppercase text-white/80 hover:text-brand-accent transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>ALL CASE STUDIES</span>
              </Link>
            </motion.div>

            {/* Category Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE_CUSTOM }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-[2px] w-[24px] bg-brand-accent inline-block" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.16em] text-brand-accent font-semibold uppercase">
                CASE STUDY / 01 • WORKFORCE MANAGEMENT PLATFORM
              </span>
            </motion.div>

            {/* Title & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE_CUSTOM }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="font-sans text-[clamp(2.5rem,5.2vw,4.8rem)] font-light tracking-[-0.035em] leading-[1.02] text-white">
                FLEXSHFT: <span className="font-normal text-white/90">The Marketplace for Flexible Hospitality Work</span>
              </h1>
            </motion.div>

            {/* Concise Overview Hook */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: EASE_CUSTOM }}
              className="font-sans text-lg sm:text-xl md:text-2xl text-white/75 font-normal leading-[1.6] max-w-4xl mb-8 sm:mb-10"
            >
              FLEXSHFT is an on-demand workforce marketplace combining a native mobile application and web platform to simplify hiring, empower flexible professionals, and transform the future of temporary staffing across the hospitality, leisure, and events industry.
            </motion.p>

            {/* Meta Tags Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: EASE_CUSTOM }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-12 font-mono text-xs text-white/80"
            >
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-brand-accent" />
                <span>Worker Mobile App (iOS & Android)</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-brand-accent" />
                <span>Business Web Portal & Admin</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-brand-accent" />
                <span>Hospitality, Leisure & Events</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Production Release</span>
              </span>
            </motion.div>

            {/* Clean Product Showcase Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.35, ease: EASE_CUSTOM }}
              data-theme="dark"
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 dark:border-white/15 bg-[#0b0c10] shadow-none dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-accent/15 rounded-full blur-[100px] pointer-events-none" />

              <Image
                src="/images/Flexshft.png"
                alt="FLEXSHFT Mobile App, Tablet Kiosk and Web Management Suite"
                fill
                sizes="(max-width: 1200px) 100vw, 1500px"
                className="object-contain object-center p-3 sm:p-6 transition-transform duration-700 group-hover:scale-[1.015]"
                priority
              />

              {/* Status pill top-right */}
              <div
                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-mono text-[11px]"
                style={{ color: "#e4e4e7" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span style={{ color: "#e4e4e7" }}>MULTI-TIER ECOSYSTEM</span>
              </div>

              {/* Caption bottom-left */}
              <div
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 flex items-center gap-2.5 font-mono text-xs"
                style={{ color: "#d4d4d8" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                <span style={{ color: "#d4d4d8" }}>
                  FLEXSHFT MULTI-TIER ECOSYSTEM • DESIGNED &amp; ENGINEERED BY ARMIA SYSTEMS
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. PROJECT STORY (CLIENT OVERVIEW & WHAT ARMIA DELIVERED)
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="project-story"
        data-theme="section"
        className="relative z-10 w-full py-16 sm:py-20 md:py-24 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start mb-16 sm:mb-20">
              
              {/* Left Column: Client Overview */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-[20px] bg-brand-accent inline-block" />
                  <span className="font-mono text-xs sm:text-sm tracking-[0.14em] text-white/60 uppercase font-semibold">
                    CLIENT OVERVIEW
                  </span>
                </div>

                <h2 className="font-sans text-2xl sm:text-3xl font-light text-white mb-5 leading-snug">
                  Simplifying Temporary Staffing for <span className="font-normal text-white/90">Hospitality & Events</span>
                </h2>

                <div className="space-y-4 font-sans text-sm sm:text-base text-white/70 leading-[1.7]">
                  <p>
                    Designed for the hospitality, leisure, and events industry, FLEXSHFT connects businesses with skilled, on-demand workers through a fast, secure, and user-friendly digital experience.
                  </p>
                  <p>
                    The platform enables businesses to create and manage shifts, discover qualified talent, and streamline workforce operations, while giving professionals the flexibility to find opportunities that match their skills, availability, and career goals.
                  </p>
                  <p>
                    By bringing businesses and professionals together within one connected ecosystem, FLEXSHFT delivers a faster, smarter, and more efficient approach to temporary staffing.
                  </p>
                </div>
              </div>

              {/* Right Column: Project Description & Armia Delivery */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#0d0d0d] hover:bg-[#111111] border border-white/[0.08] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-[20px] bg-brand-accent inline-block" />
                  <span className="font-mono text-xs sm:text-sm tracking-[0.14em] text-brand-accent uppercase font-semibold">
                    PROJECT EXECUTION
                  </span>
                </div>

                <h3 className="font-sans text-2xl font-light text-white mb-4 leading-snug">
                  Comprehensive Workforce Solution Delivered by Armia
                </h3>

                <div className="space-y-4 font-sans text-sm sm:text-base text-white/70 leading-[1.7] mb-6">
                  <p>
                    Armia Systems delivered a complete workforce management solution comprising a worker mobile application, business web portal, and administration platform.
                  </p>
                  <p>
                    The solution enables businesses to monitor workforce performance and streamline hiring through a centralized dashboard. Workers can browse shifts, manage schedules, track earnings, and build their professional reputation through verified profiles and ratings.
                  </p>
                </div>

                {/* Scope Highlights */}
                <div className="pt-5 border-t border-white/[0.08] space-y-2.5 font-mono text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Cross-platform mobile apps for iOS & Android</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Centralized business portal & administration system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Real-time communication, matching & secure billing</span>
                  </div>
                </div>
              </div>

            </div>

            {/* ─────────────────────────────────────────────────────────────
                DESIGN SHOWCASE: Two High-Res Authentic Client Artboards
                (Product overview.png & Verification.png)
            ────────────────────────────────────────────────────────────── */}
            <div className="space-y-12 sm:space-y-16">
              
              {/* Artboard 1: Product Overview */}
              <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] border border-white/[0.1] relative group overflow-hidden transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-xs tracking-[0.16em] text-brand-accent uppercase font-semibold">
                      DESIGN SHOWCASE 01 • PRODUCT OVERVIEW
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-medium text-white mt-1">
                      Mobile-First Worker Marketplace Experience
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/flexshft-product-overview.png",
                        alt: "FLEXSHFT Product Overview Design Artboard",
                        title: "FLEXSHFT Product Overview Artboard",
                      })
                    }
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 font-mono text-xs text-white/80 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-brand-accent" />
                    <span>EXPAND ARTBOARD</span>
                  </button>
                </div>

                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/flexshft-product-overview.png",
                      alt: "FLEXSHFT Product Overview Design Artboard",
                      title: "FLEXSHFT Product Overview Artboard",
                    })
                  }
                  className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-none dark:shadow-2xl group/artboard"
                >
                  <Image
                    src="/images/flexshft-product-overview.png"
                    alt="FLEXSHFT Product Overview — Mobile Worker Marketplace, Shift Discovery, and Push Notifications"
                    width={3840}
                    height={3986}
                    sizes="(max-width: 1200px) 100vw, 1600px"
                    className="w-full h-auto block transition-transform duration-700 group-hover/artboard:scale-[1.008]"
                    priority
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover/artboard:opacity-100 transition-opacity">
                    <span
                      className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 font-mono text-xs flex items-center gap-1.5 shadow-xl"
                      style={{ color: "#ffffff" }}
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-brand-accent" />
                      <span style={{ color: "#ffffff" }}>Click to view full resolution</span>
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-white/60 mt-4 leading-relaxed">
                  FLEXSHFT is a mobile-first worker marketplace for hospitality and events. Workers discover relevant SHFTs, build trusted profiles, manage work, communicate with businesses, and track earnings — all within one connected mobile experience.
                </p>
              </div>

              {/* Artboard 2: Verification */}
              <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] border border-white/[0.1] relative group overflow-hidden transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-xs tracking-[0.16em] text-brand-accent uppercase font-semibold">
                      DESIGN SHOWCASE 02 • IDENTITY &amp; VERIFICATION
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-medium text-white mt-1">
                      Right-to-Work Compliance &amp; Brand Construction
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/flexshft-verification.png",
                        alt: "FLEXSHFT Verification and Brand Design Artboard",
                        title: "FLEXSHFT Verification Artboard",
                      })
                    }
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 font-mono text-xs text-white/80 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-brand-accent" />
                    <span>EXPAND ARTBOARD</span>
                  </button>
                </div>

                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/flexshft-verification.png",
                      alt: "FLEXSHFT Verification and Brand Design Artboard",
                      title: "FLEXSHFT Verification Artboard",
                    })
                  }
                  className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-none dark:shadow-2xl group/artboard"
                >
                  <Image
                    src="/images/flexshft-verification.png"
                    alt="FLEXSHFT Verification — Right to Work checks, identity verification, logo grid, and iOS app tile"
                    width={3840}
                    height={3804}
                    sizes="(max-width: 1200px) 100vw, 1600px"
                    className="w-full h-auto block transition-transform duration-700 group-hover/artboard:scale-[1.008]"
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover/artboard:opacity-100 transition-opacity">
                    <span
                      className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 font-mono text-xs flex items-center gap-1.5 shadow-xl"
                      style={{ color: "#ffffff" }}
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-brand-accent" />
                      <span style={{ color: "#ffffff" }}>Click to view full resolution</span>
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-white/60 mt-4 leading-relaxed">
                  Workers can browse before verification, but must verify before applying. A trusted third-party provider handles identity and Right to Work checks, which may include document verification, selfie matching, and authenticity checks. Verified workers receive a visible profile status.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. KEY PLATFORM FEATURES
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="features"
        data-theme="section"
        className="relative z-10 w-full py-16 sm:py-20 md:py-24 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-[20px] bg-brand-accent inline-block" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.14em] text-white/60 uppercase font-semibold">
                CORE CAPABILITIES
              </span>
            </div>

            <h2 className="font-sans text-[clamp(2rem,3.2vw,3.2rem)] font-light tracking-tight text-white mb-4">
              Mobile App & <span className="font-normal text-white/90">Platform Features</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-white/70 leading-[1.7] max-w-2xl mb-12">
              Key capabilities engineered into the FLEXSHFT ecosystem to power high-velocity shift operations:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {PLATFORM_FEATURES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="p-6 rounded-2xl bg-[#0d0d0d] hover:bg-[#111111] border border-white/[0.08] hover:border-brand-accent/40 transition-colors duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-brand-accent font-semibold tracking-wider">
                          /{item.num}
                        </span>
                        <div className="h-8 w-8 rounded-full bg-white/[0.05] flex items-center justify-center text-brand-accent">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-sans text-lg font-medium text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-white/60 leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. TECHNOLOGY & DELIVERY
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="tech-stack"
        data-theme="section"
        className="relative z-10 w-full py-16 sm:py-20 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 sm:p-10 rounded-2xl bg-[#0d0d0d] border border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-brand-accent uppercase tracking-wider font-semibold">
                  <span>TECHNOLOGIES & DELIVERY</span>
                </div>
                <h3 className="font-sans text-2xl font-light text-white mb-3">
                  Delivered by Armia Systems
                </h3>
                <p className="font-sans text-sm text-white/65 max-w-xl leading-relaxed">
                  Engineered using modern mobile and cloud technologies to ensure fast response times, high availability, and seamless scalability across thousands of active shifts.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:max-w-md">
                {[
                  "React Native",
                  "iOS & Android",
                  "Node.js",
                  "Web Portal",
                  "Real-Time Messaging",
                  "Secure Payment Gateway",
                  "Cloud Infrastructure",
                  "Admin Dashboard",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.06] text-white/90 font-mono text-xs border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. RELATED CASE STUDIES
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="related-work"
        data-theme="section"
        className="relative z-10 w-full py-16 sm:py-20 md:py-24 border-b border-white/[0.08]"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-[2px] w-[20px] bg-brand-accent inline-block" />
                  <span className="font-mono text-xs sm:text-sm tracking-[0.14em] text-white/60 uppercase font-semibold">
                    MORE WORK
                  </span>
                </div>
                <h2 className="font-sans text-[clamp(2rem,3vw,3rem)] font-light tracking-tight text-white">
                  Explore Other <span className="font-normal text-white/90">Armia Case Studies</span>
                </h2>
              </div>

              <Link
                href="/#work"
                className="font-mono text-xs sm:text-sm text-brand-accent hover:text-white transition-colors flex items-center gap-2 group shrink-0"
              >
                <span>ALL CASE STUDIES</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RELATED_PROJECTS.map((proj) => (
                <Link
                  key={proj.id}
                  href={proj.link}
                  className="group block p-6 rounded-2xl bg-[#0d0d0d] hover:bg-[#111111] border border-white/[0.08] hover:border-brand-accent/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-5">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="p-1.5 rounded-full bg-brand-accent flex items-center justify-center shadow-md">
                        <ArrowUpRight className="w-4 h-4 text-white" style={{ color: "#ffffff" }} />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between font-mono text-xs text-white/50 uppercase mb-2">
                    <span>{proj.category}</span>
                    <span className="text-brand-accent font-semibold">{proj.num}</span>
                  </div>

                  <h3 className="font-sans text-xl font-medium text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {proj.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-[1.6] line-clamp-2 mb-4">
                    {proj.description}
                  </p>

                  <div className="font-mono text-[11px] text-white/40 tracking-wider">
                    {proj.tag}
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          6. FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="cta"
        data-theme="section"
        className="relative z-10 w-full py-16 sm:py-20 md:py-24"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0">
          <div className="w-full md:w-[78.0%] md:ml-[10.8%]">
            
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0d0d0d] border border-black/[0.08] dark:border-white/[0.12] text-center relative overflow-hidden shadow-none dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-brand-accent font-mono text-xs uppercase font-semibold mb-5">
                  <span style={{ color: "#ff5a00" }}>START YOUR PROJECT</span>
                </div>

                <h2 className="font-sans text-[clamp(2rem,3.8vw,3.4rem)] font-light tracking-tight text-white leading-[1.1] mb-5">
                  Have a Product Idea <span className="font-normal text-white">Like Flexshft?</span>
                </h2>

                <p className="font-sans text-sm sm:text-base text-white/70 leading-[1.7] mb-8 max-w-xl mx-auto">
                  Take 30 seconds to talk to our team about your web or mobile software requirements. We come highly recommended and engineer scalable digital products from concept to launch.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-between gap-4 bg-brand-accent hover:bg-[#ff4500] text-white h-[48px] px-7 rounded-full font-mono text-sm tracking-[0.14em] uppercase font-semibold transition-all duration-300 shadow-none dark:shadow-[0_0_20px_rgba(255,90,0,0.4)] hover:shadow-[0_0_30px_rgba(255,90,0,0.6)] cursor-pointer"
                    style={{ color: "#ffffff" }}
                  >
                    <span style={{ color: "#ffffff" }}>FREE TECHNICAL CONSULTATION</span>
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                      <span className="text-black text-xs font-bold" style={{ color: "#000000" }}>›</span>
                    </div>
                  </a>

                  <Link
                    href="/#work"
                    className="inline-flex items-center justify-center h-[48px] px-7 rounded-full font-mono text-sm tracking-[0.14em] uppercase text-white/80 hover:text-white border border-white/20 hover:border-white/40 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <span>BROWSE MORE WORK</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          Full-Screen Lightbox Modal for Ultra-High-Res Image Inspection
      ────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            data-theme="dark"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl cursor-zoom-out"
          >
            <div className="relative max-w-6xl max-h-[92vh] w-full h-full flex flex-col items-center justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(null);
                }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20"
                style={{ color: "#ffffff" }}
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" style={{ color: "#ffffff" }} />
              </button>

              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 flex items-center justify-center cursor-default"
              >
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain p-2 sm:p-4"
                  priority
                />
              </div>

              <div className="mt-3 text-center font-mono text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                {lightboxImage.title} • Press Esc or click anywhere outside to close
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
