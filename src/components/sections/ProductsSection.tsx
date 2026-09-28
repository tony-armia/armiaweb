"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GridLines } from "@/components/ui/GridLines";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EASE_CUSTOM, fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";
import {
  Sparkles,
  Bot,
  ArrowUpRight,
  ExternalLink,
  ShoppingBag,
  Truck,
  CreditCard,
  Layers,
  CheckCircle2,
  Cpu,
  ShieldCheck,
} from "lucide-react";

interface AiToolItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaUrl: string;
  icon: React.ElementType;
  tag: string;
}

const AI_TOOLS: AiToolItem[] = [
  {
    id: "validator",
    badge: "CUSTOM GPT AGENT",
    title: "Startup Idea Validator",
    tagline: "Algorithmic stress-testing & risk modeling for digital product concepts.",
    description:
      "Armia's proprietary autonomous intelligence tool designed to evaluate product hypotheses, model unit economics, detect competitive vulnerabilities, and assess technical viability before writing a single line of code.",
    features: [
      "Target market TAM & competitive moat analysis",
      "Automated unit economics & CAC/LTV stress-test",
      "Regulatory & compliance risk identification",
      "Tech-stack suitability & initial TCO projection",
    ],
    ctaLabel: "Launch Idea Validator",
    ctaUrl: "https://chatgpt.com/g/g-6a01641dd5448191bc1e3e6a04433e1f-startup-idea-validator",
    icon: Bot,
    tag: "LIVE AI AGENT",
  },
  {
    id: "blueprint",
    badge: "AGENT.AI ARCHITECT",
    title: "Startup Blueprint Maker",
    tagline: "Autonomous sprint architecture & technical specification generator.",
    description:
      "An autonomous agentic engine built on Agent.ai that transforms high-level founder requirements into production-ready software blueprints—generating data schemas, API contracts, milestone backlogs, and cloud infrastructure manifests.",
    features: [
      "Autonomous system architecture & ERD generation",
      "Microservice boundaries & API spec scaffolding",
      "Engineering pod sprint estimation & backlogs",
      "AWS/GCP infrastructure manifest generation",
    ],
    ctaLabel: "Run Blueprint Maker",
    ctaUrl: "https://agent.ai/profile/StartupAgent",
    icon: Cpu,
    tag: "AUTONOMOUS PLANNER",
  },
];

interface SaasPlatformItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  capabilities: string[];
  highlight: string;
}

const SAAS_PLATFORMS: SaasPlatformItem[] = [
  {
    id: "marketplaces",
    title: "Multi-Vendor Marketplace Engines",
    category: "COMMERCE & ESCROW",
    description:
      "High-concurrency B2B & P2P marketplace core with automated vendor onboarding, escrow settlements, split payments, and catalog synchronization.",
    icon: ShoppingBag,
    capabilities: [
      "Stripe Connect automated multi-party payouts",
      "Dynamic commission tiers & escrow holdback",
      "High-scale search & elastic product catalog",
    ],
    highlight: "Cuts custom marketplace build time by 60%",
  },
  {
    id: "logistics",
    title: "Logistics & Dynamic Dispatch Platforms",
    category: "FLEET & ROUTING",
    description:
      "Real-time dispatching engine featuring dynamic route optimization, algorithmic driver allocation, live GPS telemetry, and proof-of-delivery pipelines.",
    icon: Truck,
    capabilities: [
      "Sub-second geofence tracking & live telemetry",
      "Automated load matching & algorithmic dispatch",
      "Native driver & customer real-time mobile apps",
    ],
    highlight: "Battle-tested across 10M+ deliveries",
  },
  {
    id: "fintech",
    title: "Fintech & Payment Processing Suites",
    category: "LEDGER & PAYMENTS",
    description:
      "Compliant digital wallet, automated double-entry ledger reconciliation, and payment gateway orchestration supporting global multi-currency transactions.",
    icon: CreditCard,
    capabilities: [
      "Immutable double-entry transaction ledgers",
      "Multi-currency wallets & FX rate routing",
      "Automated AML/KYC workflow integration",
    ],
    highlight: "Bank-grade auditability & PCI-DSS compliance",
  },
  {
    id: "saas-starters",
    title: "On-Demand B2B SaaS Foundations",
    category: "MULTI-TENANT CLOUD",
    description:
      "Production-ready multi-tenant enterprise core equipped with tenant isolation, tiered RBAC, usage billing meters, SSO (SAML/Okta), and audit trails.",
    icon: Layers,
    capabilities: [
      "Row-level security & isolated tenant DB schemas",
      "Enterprise SSO (Okta, Azure AD, Google Workspace)",
      "Metered usage billing & Stripe subscription sync",
    ],
    highlight: "Saves 4+ months of boilerplate engineering",
  },
];

export function ProductsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"ai-tools" | "saas-platforms">("ai-tools");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={containerRef}
      id="products"
      data-theme="section"
      className="relative z-20 w-full py-20 md:py-28 overflow-hidden select-none transition-colors duration-400"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <GridLines />

      {/* Ambient background glow */}
      <motion.div
        style={{
          y: yBackground,
          background: "radial-gradient(circle, rgba(255, 90, 0, 0.45) 0%, transparent 70%)",
        }}
        className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-20 -z-10 mix-blend-screen"
      />

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-0 relative z-10">
        
        {/* ── Section Header Row (Matching 10.8% Grid) ── */}
        <div className="relative w-full flex flex-col md:flex-row items-start mb-10 md:mb-14">
          {/* Eyebrow: 10.8% to 30.3% */}
          <div className="w-full md:w-[19.5%] md:ml-[10.8%] px-6 md:px-0 pt-1 mb-4 md:mb-0">
            <SectionEyebrow number="05" label="PROPRIETARY IP & AI" className="!mb-0" />
          </div>

          {/* Heading Block: 30.3% to 69.3% */}
          <div className="w-full md:w-[39.0%] px-6 md:px-0 pt-0.5 mb-4 md:mb-0">
            <h2 className="font-sans text-[clamp(2.25rem,3.2vw,3.85rem)] font-light tracking-[-0.035em] leading-[0.98] text-left uppercase">
              <span className="block" style={{ color: "var(--foreground)" }}>PROPRIETARY</span>
              <span className="block font-normal" style={{ color: "var(--foreground-muted)" }}>
                AI &amp; SAAS PLATFORMS.
              </span>
            </h2>
          </div>

          {/* Right Supporting Copy: 69.3% to 88.8% */}
          <div className="w-full md:w-[19.5%] md:mr-[10.8%] px-6 md:px-0 pt-1 flex flex-col justify-start">
            <p className="font-mono text-xs md:text-[12.5px] leading-relaxed text-white/60 mb-3 uppercase tracking-wider">
              Battle-tested accelerators and autonomous AI agents engineered to slash build cycles by up to 60%.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent font-medium">
                PRODUCTION READY IP
              </span>
            </div>
          </div>
        </div>

        {/* ── Filter Tabs Switcher ── */}
        <div className="w-full md:w-[78.4%] md:ml-[10.8%] px-6 md:px-0 mb-8 sm:mb-10">
          <div className="inline-flex items-center p-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <button
              onClick={() => setActiveTab("ai-tools")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                activeTab === "ai-tools"
                  ? "bg-brand-accent text-white shadow-[0_0_16px_rgba(255,90,0,0.4)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>AI Agents &amp; Tools</span>
            </button>

            <button
              onClick={() => setActiveTab("saas-platforms")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                activeTab === "saas-platforms"
                  ? "bg-brand-accent text-white shadow-[0_0_16px_rgba(255,90,0,0.4)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Whitelabel SaaS Engines</span>
            </button>
          </div>
        </div>

        {/* ── Content View Area ── */}
        <div className="w-full md:w-[78.4%] md:ml-[10.8%] px-6 md:px-0">
          <AnimatePresence mode="wait">
            {activeTab === "ai-tools" ? (
              <motion.div
                key="ai-tools"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: EASE_CUSTOM }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
              >
                {AI_TOOLS.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.id}
                      className="group relative flex flex-col justify-between border border-white/10 hover:border-brand-accent/50 bg-[#0d0d0d] hover:bg-[#111111] rounded-2xl p-7 sm:p-9 transition-all duration-500 shadow-xl overflow-hidden"
                    >
                      {/* Top Accent Gradient Border */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div>
                        {/* Header Badge & Tag */}
                        <div className="flex items-center justify-between gap-4 mb-5">
                          <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] font-semibold text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/25">
                            <Sparkles className="w-3 h-3" />
                            {tool.badge}
                          </span>
                          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/40">
                            {tool.tag}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
                          {tool.title}
                        </h3>
                        <p className="font-mono text-[11px] sm:text-[11.5px] uppercase tracking-wider text-white/70 mb-4 leading-relaxed">
                          {tool.tagline}
                        </p>
                        <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-normal">
                          {tool.description}
                        </p>

                        {/* Capability Bullets */}
                        <div className="border-t border-white/[0.08] pt-5 mb-8 space-y-2.5">
                          {tool.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-white/75 font-sans">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div>
                        <a
                          href={tool.ctaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center justify-between w-full h-[46px] px-6 rounded-full font-mono text-[11px] tracking-[0.18em] uppercase transition-all duration-300 bg-white/[0.05] hover:bg-brand-accent text-white border border-white/15 hover:border-brand-accent shadow-sm"
                        >
                          <span className="font-medium">{tool.ctaLabel}</span>
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover/btn:bg-white text-white group-hover/btn:text-black transition-colors duration-300">
                            <ExternalLink className="w-3 h-3" />
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="saas-platforms"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: EASE_CUSTOM }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {SAAS_PLATFORMS.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <div
                      key={platform.id}
                      className="group relative flex flex-col justify-between border border-white/10 hover:border-brand-accent/40 bg-[#0d0d0d] hover:bg-[#111111] rounded-2xl p-6 sm:p-8 transition-all duration-500 shadow-xl"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-brand-accent group-hover:scale-105 transition-transform duration-300">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-white/50">
                              {platform.category}
                            </span>
                          </div>

                          <span className="font-mono text-[9px] uppercase tracking-widest text-brand-accent px-2 py-0.5 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                            iScripts Core
                          </span>
                        </div>

                        <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5 group-hover:text-brand-accent transition-colors duration-300">
                          {platform.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed mb-5 font-normal">
                          {platform.description}
                        </p>

                        <div className="border-t border-white/[0.08] pt-4 mb-6 space-y-2">
                          {platform.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-white/70 font-sans">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/80 shrink-0 mt-1.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                          {platform.highlight}
                        </span>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-brand-accent hover:text-white transition-colors"
                        >
                          <span>Inquire Platform</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
