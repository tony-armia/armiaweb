"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  Compass,
  Code2,
  Brain,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Server,
  Cpu,
  Layers,
  Smartphone,
  Globe,
  Database,
  Lock,
  Workflow,
  CheckCircle2,
  Building2,
  CreditCard,
  HeartPulse,
  ShoppingBag,
  Truck,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 1. Core Service Pillars (Appinventiv Flagship Transformation Model)
// ─────────────────────────────────────────────────────────────────────────────

interface Pillar {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  badge: string;
  ctaText: string;
}

const PILLARS: Pillar[] = [
  {
    id: "consulting",
    num: "01",
    title: "Strategic Technology Consulting",
    tagline: "Aligning architectural strategy with high-impact business outcomes.",
    description:
      "From technical architecture audits to digital transformation strategy, we help enterprise leaders eliminate technical debt, modernize legacy workflows, and ensure technology investments deliver measurable ROI.",
    icon: Compass,
    deliverables: [
      "Architecture Audits & Technical Due Diligence",
      "Digital Transformation Strategy & TCO Modeling",
      "Enterprise Cloud Migration Roadmaps",
      "Legacy Decoupling & Modernization Plans",
    ],
    badge: "24+ Years Advisory",
    ctaText: "Explore Technology Consulting",
  },
  {
    id: "engineering",
    num: "02",
    title: "Digital Product Development & Engineering",
    tagline: "Full-lifecycle engineering from cloud-native software to enterprise SaaS.",
    description:
      "As your digital product engineering company, we handle the full lifecycle of software development—from custom web portals and native mobile applications to high-concurrency microservices and multi-tenant SaaS platforms.",
    icon: Code2,
    deliverables: [
      "Custom Enterprise Web & SaaS Engineering",
      "Native iOS, Android & Cross-Platform Mobile",
      "Event-Driven Microservices & API Gateways",
      "High-Concurrency Distributed Systems",
    ],
    badge: "500+ Deployments",
    ctaText: "Explore Product Engineering",
  },
  {
    id: "ai",
    num: "03",
    title: "AI, Data & Autonomous Intelligence",
    tagline: "Production LLM architectures, agentic systems & predictive modeling.",
    description:
      "We integrate advanced AI, generative models, and autonomous multi-agent workflows into operational business systems—automating manual processes, unlocking proprietary knowledge, and scaling decision intelligence.",
    icon: Brain,
    deliverables: [
      "Enterprise RAG Pipelines & Semantic Search",
      "Autonomous Agentic Workflow Orchestration",
      "Domain Model Fine-Tuning & Quantization",
      "Zero-Data-Retention Security & Guardrails",
    ],
    badge: "Enterprise SOC-2",
    ctaText: "Explore AI & Data Solutions",
  },
  {
    id: "cloud",
    num: "04",
    title: "Cloud Operations & Zero-Trust Cybersecurity",
    tagline: "Elastic cloud topologies, automated GitOps & impenetrable resilience.",
    description:
      "We engineer cloud-native environments rooted in Zero-Trust principles, automated Infrastructure as Code (Terraform), and continuous GitOps pipelines—ensuring your infrastructure is as scalable as it is impenetrable.",
    icon: ShieldCheck,
    deliverables: [
      "Multi-Region Kubernetes (AWS / Azure / GCP)",
      "Automated CI/CD & Infrastructure as Code",
      "Zero-Trust Architecture & Threat Hardening",
      "24/7 SRE & 99.99% Availability SLAs",
    ],
    badge: "99.99% SLA Uptime",
    ctaText: "Explore Cloud & Cybersecurity",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. Deep Technical Expertise (Appinventiv 12-Card Matrix)
// ─────────────────────────────────────────────────────────────────────────────

interface TechCard {
  title: string;
  description: string;
  icon: React.ElementType;
}

const TECH_EXPERTISE: TechCard[] = [
  {
    title: "Artificial Intelligence",
    description: "Embedding intelligence directly into core business operations to drive automated decision-making at scale.",
    icon: Brain,
  },
  {
    title: "Generative AI & LLMs",
    description: "Integrating domain-adapted foundation models with internal knowledge systems under enterprise governance.",
    icon: Sparkles,
  },
  {
    title: "Agentic AI Workflows",
    description: "Autonomous multi-agent ecosystems executing complex, multi-step asynchronous business logic.",
    icon: Workflow,
  },
  {
    title: "Cloud & Kubernetes",
    description: "Resilient containerized topologies with automated failover and elastic multi-region orchestration.",
    icon: Server,
  },
  {
    title: "Zero-Trust Cybersecurity",
    description: "End-to-end identity verification, automated vulnerability scanning, and proactive intrusion defenses.",
    icon: Lock,
  },
  {
    title: "Full-Stack Web Engineering",
    description: "Modern Next.js, TypeScript, React, and Go backends delivering sub-100ms response times globally.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description: "High-performance native iOS, Android, and Flutter applications engineered for smooth 60fps UX.",
    icon: Smartphone,
  },
  {
    title: "Data Science & Analytics",
    description: "Real-time streaming pipelines, predictive churn models, and executive business intelligence dashboards.",
    icon: Database,
  },
  {
    title: "Legacy Modernization",
    description: "Deconstructing legacy monoliths into scalable microservices without business disruption.",
    icon: Layers,
  },
  {
    title: "Microservices & APIs",
    description: "Event-driven distributed architectures powered by Kafka, gRPC, and high-throughput REST gateways.",
    icon: Cpu,
  },
  {
    title: "DevOps & GitOps Pipelines",
    description: "Automated pipelines deploying code from commit to production with automated testing and canary rollouts.",
    icon: Server,
  },
  {
    title: "Data Privacy & Compliance",
    description: "Architectural alignment with HIPAA, GDPR, SOC-2 Type II, and ISO 27001 regulatory standards.",
    icon: CheckCircle2,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. Industry Solutions (Appinventiv Sector Experience)
// ─────────────────────────────────────────────────────────────────────────────

interface Industry {
  id: string;
  name: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  highlights: string[];
}

const INDUSTRIES: Industry[] = [
  {
    id: "fintech",
    name: "FinTech & Banking",
    icon: CreditCard,
    headline: "High-throughput financial protocols and automated fraud defenses.",
    description:
      "We modernize core banking infrastructure, payment gateways, and trading platforms with real-time AI fraud detection, regulatory compliance, and microsecond ledger synchronization.",
    highlights: ["AI Fraud Detection", "Sub-Millisecond Ledgers", "Automated AML / KYC", "PCI-DSS Level 1"],
  },
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    icon: HeartPulse,
    headline: "HIPAA-compliant digital care platforms & predictive diagnostics.",
    description:
      "We develop secure healthcare solutions that enhance patient care, streamline clinical workflows, and protect sensitive health data with end-to-end encryption.",
    highlights: ["HIPAA & HITECH Compliant", "Telehealth & Remote Care", "EHR / EMR Interoperability", "Predictive Patient Analytics"],
  },
  {
    id: "ecommerce",
    name: "eCommerce & Retail",
    icon: ShoppingBag,
    headline: "Headless commerce architectures built for flash sales and global scale.",
    description:
      "Our custom retail platforms optimize conversion, support millions of concurrent sessions, and deliver hyper-personalized shopping experiences powered by AI recommendations.",
    highlights: ["Headless Commerce", "AI Personalized Discovery", "Real-Time Inventory Sync", "Sub-Second Checkout"],
  },
  {
    id: "saas",
    name: "Enterprise SaaS",
    icon: Building2,
    headline: "Multi-tenant platforms engineered for rapid scale and enterprise retention.",
    description:
      "We build resilient B2B software products with granular role-based access, automated recurring billing, self-healing database sharding, and frictionless onboarding.",
    highlights: ["Multi-Tenant Architecture", "Usage-Based Metering", "Enterprise SSO & SCIM", "SOC-2 Type II Ready"],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    headline: "End-to-end supply chain visibility and predictive fleet intelligence.",
    description:
      "We engineer real-time freight tracking, intelligent route optimization, and automated warehouse management platforms that reduce operational drag and improve delivery margins.",
    highlights: ["AI Route Optimization", "IoT Fleet Telemetry", "Predictive Maintenance", "Automated Dispatch"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"pillars" | "expertise" | "industries">("pillars");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("fintech");

  const currentIndustryData = INDUSTRIES.find((i) => i.id === selectedIndustry) || INDUSTRIES[0];

  return (
    <section
      id="services"
      data-theme="dark"
      className="relative w-full bg-[#08090b] text-white py-24 sm:py-32 md:py-36 px-6 sm:px-12 md:px-16 lg:px-24 select-none overflow-hidden border-t border-white/[0.06]"
      aria-label="Services and Enterprise Transformation"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/[0.035] rounded-full blur-[160px] pointer-events-none"
      />

      <div className="mx-auto w-full max-w-[1500px] relative z-10">
        {/* ── Section Header Row (Appinventiv Style) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <SectionEyebrow number="03" label="SERVICES & CAPABILITIES" dark className="!mb-4" />
            <h2 className="font-sans font-light text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1.06] tracking-[-0.03em] text-white">
              Beyond Development.{" "}
              <span className="block text-brand-accent font-normal tracking-[-0.02em]">
                We Deliver Transformation.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6 pb-2">
            <p className="text-[#8e94a0] text-[15px] sm:text-[16px] leading-[1.7] font-normal">
              Enterprise technology succeeds when architecture, intelligence, and execution align.
              We build systems that can last, scale responsibly, and stand up to real-world complexity.
            </p>
          </div>
        </div>

        {/* ── Perspective Navigation Tabs (Appinventiv Model) ── */}
        <div className="flex flex-wrap items-center gap-3 pb-8 mb-12 border-b border-white/[0.08]">
          <button
            onClick={() => setActiveTab("pillars")}
            className={`font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeTab === "pillars"
                ? "bg-brand-accent text-white font-semibold shadow-lg shadow-brand-accent/25"
                : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
            }`}
          >
            Core Service Lines
          </button>

          <button
            onClick={() => setActiveTab("expertise")}
            className={`font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeTab === "expertise"
                ? "bg-brand-accent text-white font-semibold shadow-lg shadow-brand-accent/25"
                : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
            }`}
          >
            Deep Technical Expertise (12)
          </button>

          <button
            onClick={() => setActiveTab("industries")}
            className={`font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeTab === "industries"
                ? "bg-brand-accent text-white font-semibold shadow-lg shadow-brand-accent/25"
                : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
            }`}
          >
            Industry Solutions
          </button>
        </div>

        {/* ── TAB 1: 4 Core Transformation Pillars (Appinventiv Flagship View) ── */}
        {activeTab === "pillars" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="group relative rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0c0d12]/80 hover:bg-[#11131a] hover:border-brand-accent/40 transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-sm"
                >
                  {/* Huge Watermark Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-6 top-4 sm:right-8 sm:top-6 font-mono text-[4.5rem] sm:text-[5.5rem] font-light text-white/[0.03] group-hover:text-brand-accent/[0.12] transition-colors duration-500 select-none leading-none"
                  >
                    {pillar.num}
                  </span>

                  <div>
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center transition-colors duration-300 shadow-sm">
                        <Icon className="w-6 h-6 text-white transition-colors" />
                      </div>

                      <span className="font-mono text-[10px] sm:text-[11px] px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-2xl sm:text-3xl font-light text-white mb-2 tracking-tight group-hover:text-white transition-colors relative inline-block">
                      <span>{pillar.title}</span>
                    </h3>

                    <p className="text-brand-accent text-[13px] sm:text-[14px] font-mono tracking-wide mb-4">
                      {pillar.tagline}
                    </p>

                    <p className="text-[#8e94a0] text-[14px] sm:text-[15px] leading-[1.75] mb-6">
                      {pillar.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 mb-8">
                      {pillar.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-[13px] sm:text-[14px] text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <a
                      href="#contact"
                      className="font-mono text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-brand-accent hover:text-white transition-colors flex items-center gap-2 group/link"
                    >
                      <span>{pillar.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── TAB 2: Deep Technical Expertise 12-Card Grid (Appinventiv Model) ── */}
        {activeTab === "expertise" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_EXPERTISE.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0d12]/70 hover:bg-[#11131a] hover:border-brand-accent/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-brand-accent transition-colors" />
                    </div>

                    <h4 className="font-sans text-lg sm:text-xl font-medium text-white mb-2.5">
                      {tech.title}
                    </h4>

                    <p className="text-[#8e94a0] text-[13px] sm:text-[14px] leading-[1.65]">
                      {tech.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/[0.05]">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 group-hover:text-brand-accent transition-colors">
                      Production Ready &bull; Tier 1
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── TAB 3: Industry Solutions (Appinventiv Sector Experience) ── */}
        {activeTab === "industries" && (
          <div className="space-y-8">
            {/* Sector Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {INDUSTRIES.map((ind) => {
                const Icon = ind.icon;
                const isSelected = selectedIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? "bg-[#14161f] border-brand-accent shadow-lg shadow-brand-accent/15"
                        : "bg-[#0c0d12]/70 border-white/[0.07] hover:border-white/20 hover:bg-[#0f1117]"
                    }`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${isSelected ? "text-white" : "text-white/50"}`} />
                    <span className={`text-[13px] font-medium ${isSelected ? "text-white font-semibold" : "text-white/70"}`}>
                      {ind.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Sector Showcase Card */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#0c0d12]/90 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs tracking-widest text-brand-accent uppercase">
                      Sector Focus //
                    </span>
                    <span className="font-mono text-xs text-white/40 uppercase">
                      {currentIndustryData.name}
                    </span>
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4 leading-tight">
                    {currentIndustryData.headline}
                  </h3>

                  <p className="text-[#8e94a0] text-[15px] sm:text-[16px] leading-[1.75] mb-8 max-w-3xl">
                    {currentIndustryData.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {currentIndustryData.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                        <span className="font-mono text-[11px] sm:text-[12px] text-white/80">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 lg:border-l lg:border-white/[0.08] lg:pl-10 flex flex-col justify-center">
                  <div className="space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
                      Enterprise Impact
                    </span>
                    <div className="text-3xl sm:text-4xl font-light text-brand-accent">
                      100%
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-mono">
                      Domain compliance, rigorous data confidentiality, and battle-tested production stability.
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white hover:text-brand-accent transition-colors pt-2"
                    >
                      <span>Discuss Your Industry Roadmap</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}