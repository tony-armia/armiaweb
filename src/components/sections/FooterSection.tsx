"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, ArrowUpRight } from "lucide-react";
import { GridLines } from "@/components/ui/GridLines";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EASE_CUSTOM, fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

export function FooterSection() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const yTeamImage = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isFormValid =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.message.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Thank you! Your message has been submitted. Our engineering team will be in touch within 24 hours.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      data-theme="dark"
      className="relative w-full bg-black text-white pt-0 pb-8 overflow-hidden select-none border-t-[3px] border-brand-accent"
    >
      <GridLines />

      <div className="relative z-10 mx-auto max-w-[1920px] w-full">
        {/* ── Main Two-Column Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

          {/* Left Column — Engineer Leadership Card & Core Company Credentials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="lg:col-span-4 p-6 md:p-10 lg:p-12 flex flex-col justify-between h-full bg-black"
          >
            <div className="flex flex-col justify-between flex-1">
              <div>
                {/* Team Leadership Card */}
                <div className="relative w-full mb-8 overflow-hidden bg-neutral-900 border-t-[3px] border-brand-accent shadow-2xl rounded-2xl group border border-white/10">
                  <div className="relative w-full aspect-[4/5] bg-neutral-800 overflow-hidden">
                    <motion.div style={{ y: yTeamImage, scale: 1.08 }} className="relative w-full h-full will-change-transform">
                      <Image
                        src="/images/engineering_team.png"
                        alt="Armia Leadership & Engineering"
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Distinct direct engineering contact pill — avoids repeating the form's "Get In Touch" */}
                  <div className="p-3.5 bg-[#111111] border-t border-white/10 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-xs tracking-wider text-white/80 uppercase">
                        DIRECT ARCHITECT ACCESS
                      </span>
                    </div>
                    <a
                      href="mailto:hello@armiasystems.com"
                      className="font-mono text-xs tracking-wider text-brand-accent hover:text-[#ff4500] uppercase font-semibold transition-colors flex items-center gap-1 group/arch"
                    >
                      <span>HELLO@ARMIASYSTEMS.COM</span>
                      <span className="transition-transform group-hover/arch:translate-x-0.5">→</span>
                    </a>
                  </div>
                </div>

                {/* Company Credential Highlights (No duplicate location text) */}
                <div className="border-t border-b border-white/10 py-6">
                  <div className="flex items-center justify-between mb-4 font-mono text-xs sm:text-sm tracking-[0.14em] uppercase text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="h-[6px] w-[6px] rounded-full bg-brand-accent inline-block" />
                      <span className="font-semibold text-white">ARMIA SYSTEMS</span>
                    </div>
                    {/* Functional social channel links */}
                    <div className="flex items-center gap-3 text-white/60">
                      <a
                        href="https://www.linkedin.com/company/armia-systems-inc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-accent transition-colors"
                        aria-label="Armia Systems LinkedIn"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                        </svg>
                      </a>
                      <a
                        href="https://x.com/armiasystems"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-accent transition-colors"
                        aria-label="Armia Systems X / Twitter"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.armiasystems.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-accent transition-colors"
                        aria-label="Armia Systems Website"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-xs sm:text-[13px] uppercase">
                    <div className="grid grid-cols-12 gap-2 text-white/60">
                      <span className="col-span-4 text-white/40">FOUNDED</span>
                      <span className="col-span-8 text-white font-medium">2003 &bull; 20+ YEARS TECHNOLOGY LEADERSHIP</span>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-white/60">
                      <span className="col-span-4 text-white/40">COMPLIANCE</span>
                      <span className="col-span-8 text-white font-medium">SOC 2 &bull; HIPAA &bull; ISO 27001 READY</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand statement */}
              <div className="pt-8 mt-auto hidden lg:block">
                <div className="font-mono text-xs text-white/50 uppercase tracking-[0.1em] leading-relaxed">
                  ENTERPRISE PRODUCT ENGINEERING &bull; DISTRIBUTED SYSTEMS &bull; AI ARCHITECTURE
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form & Coherent Information Architecture */}
          <div className="lg:col-span-8 p-6 md:p-12 lg:p-16 flex flex-col justify-between bg-[#0a0a0a]">
            <div>
              {/* Section number 10 */}
              <SectionEyebrow number="10" label="CONTACT" dark />

              <div className="mb-8">
                <h2 className="font-sans text-[clamp(2.2rem,4.8vw,5.6rem)] font-light tracking-[-0.035em] leading-[0.94] text-[#e5e5e5] uppercase max-w-3xl">
                  <span className="block">BUILD YOUR</span>
                  <span className="block">NEXT PROJECT</span>
                  <span className="block text-white font-normal">WITH ARMIA.</span>
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: "15%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.8, ease: EASE_CUSTOM, delay: 0.2 }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 border-b border-white/10 pb-6"
              >
                <p className="font-mono text-xs sm:text-sm tracking-wide text-white/70 uppercase leading-relaxed max-w-xl">
                  FROM FIRST CONCEPT TO FINAL BUILD, WE CREATE ENTERPRISE SOFTWARE WITH CLEAR ARCHITECTURE &amp; RELIABLE DELIVERY.
                </p>
                <div className="flex gap-1.5 text-brand-accent select-none shrink-0">
                  <span className="h-2 w-2 rounded-full bg-brand-accent inline-block" />
                  <span className="h-2 w-2 rounded-full bg-brand-accent inline-block" />
                  <span className="h-2 w-2 rounded-full bg-brand-accent inline-block" />
                  <span className="h-2 w-2 rounded-full bg-white/20 inline-block" />
                </div>
              </motion.div>

              {/* Form fields */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: EASE_CUSTOM, delay: 0.3 }}
                viewport={VIEWPORT_ONCE}
                className="space-y-6 mb-12 max-w-4xl"
              >
                <div className="space-y-6 mb-8 max-w-4xl">
                  <div className="pt-2">
                    <label className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.12em] text-[#999999] uppercase mb-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent inline-block" />
                      <span>YOUR NAME</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      suppressHydrationWarning
                      className="w-full bg-[#121212]/70 text-white font-mono text-sm sm:text-base px-5 py-3.5 border border-white/[0.08] rounded-xl focus:outline-none focus:border-brand-accent placeholder:text-white/20 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.12em] text-[#999999] uppercase mb-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent inline-block" />
                      <span>EMAIL ADDRESS</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      suppressHydrationWarning
                      className="w-full bg-[#121212]/70 text-white font-mono text-sm sm:text-base px-5 py-3.5 border border-white/[0.08] rounded-xl focus:outline-none focus:border-brand-accent placeholder:text-white/20 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.12em] text-[#999999] uppercase mb-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent inline-block" />
                      <span>HOW CAN WE HELP?</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      suppressHydrationWarning
                      className="w-full bg-[#121212]/70 text-white font-mono text-sm sm:text-base px-5 py-3.5 border border-white/[0.08] rounded-xl focus:outline-none focus:border-brand-accent placeholder:text-white/20 resize-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: EASE_CUSTOM }}
                    className="group/btn inline-flex items-center justify-between bg-brand-accent hover:bg-[#ff4500] text-white h-[50px] w-full md:w-auto min-w-0 sm:min-w-[280px] md:min-w-[300px] pl-6 sm:pl-7 pr-2.5 transition-all duration-300 rounded-full shadow-[0_0_24px_rgba(255,90,0,0.35)] hover:shadow-[0_0_32px_rgba(255,90,0,0.55)] cursor-pointer"
                  >
                    <span className="font-mono text-xs sm:text-sm tracking-[0.12em] uppercase font-semibold">
                      {isFormValid ? "SEND MESSAGE" : "COMPLETE ALL FIELDS"}
                    </span>
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-black transition-colors duration-300 group-hover/btn:bg-neutral-100 shadow-sm shrink-0">
                      <span className="text-black text-sm font-bold transition-transform duration-300 group-hover/btn:translate-x-0.5">›</span>
                    </div>
                  </motion.button>

                  {/* Replaced duplicate Terms & Privacy with professional NDA & turnaround guarantee */}
                  <div className="font-mono text-xs text-white/50 tracking-normal leading-relaxed">
                    Protected by strict mutual non-disclosure agreement. <br className="hidden md:inline" />
                    Guaranteed direct architect response within 24 business hours.
                  </div>
                </div>
              </motion.form>
            </div>

            {/* ── Structured Directory: Navigation & Global Offices ── */}
            <div className="pt-10 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start font-mono text-xs sm:text-sm tracking-wider uppercase">
                {/* Clean, Non-Repetitive Navigation Directory */}
                <div className="md:col-span-4 space-y-2.5">
                  <div className="font-mono text-xs text-white/40 tracking-[0.14em] mb-3">
                    EXPLORE
                  </div>
                  <div>
                    <Link href="/work" className="text-white/70 hover:text-brand-accent transition-colors flex items-center gap-1.5 group">
                      <span>CASE STUDIES &amp; WORK</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                  <div>
                    <Link href="/#services" className="text-white/70 hover:text-brand-accent transition-colors">
                      CORE SERVICES
                    </Link>
                  </div>
                  <div>
                    <Link href="/#process" className="text-white/70 hover:text-brand-accent transition-colors">
                      DELIVERY PROCESS
                    </Link>
                  </div>
                  <div>
                    <Link href="/#testimonials" className="text-white/70 hover:text-brand-accent transition-colors">
                      CLIENT TESTIMONIALS
                    </Link>
                  </div>
                  <div>
                    <Link href="/#faq" className="text-white/70 hover:text-brand-accent transition-colors">
                      FAQS
                    </Link>
                  </div>
                </div>

                {/* USA Headquarters (Chicago) */}
                <div className="md:col-span-4 space-y-2.5 font-sans normal-case text-xs sm:text-sm">
                  <div className="font-mono text-xs text-brand-accent tracking-[0.14em] uppercase font-semibold flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-brand-accent inline-block" />
                    USA HEADQUARTERS
                  </div>
                  <div className="text-white/60 leading-relaxed font-sans">
                    1300 E Woodfield Rd, Suite 403<br />
                    Schaumburg, IL 60173, USA
                  </div>
                  <div className="pt-1 font-mono text-xs text-white/80">
                    <a href="tel:+13124236728" className="hover:text-brand-accent transition-colors inline-flex items-center gap-2">
                      <span className="text-white/40">TEL:</span> +1 (312) 423-6728
                    </a>
                  </div>
                  <div className="font-mono text-xs text-white/80">
                    <a href="mailto:info@armiasystems.com" className="hover:text-brand-accent transition-colors inline-flex items-center gap-2">
                      <span className="text-white/40">MAIL:</span> INFO@ARMIASYSTEMS.COM
                    </a>
                  </div>
                </div>

                {/* India Delivery Center (Kochi) */}
                <div className="md:col-span-4 space-y-2.5 font-sans normal-case text-xs sm:text-sm">
                  <div className="font-mono text-xs text-white/50 tracking-[0.14em] uppercase font-semibold flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-white/40 inline-block" />
                    INDIA DELIVERY CENTER
                  </div>
                  <div className="text-white/60 leading-relaxed font-sans">
                    3rd Floor, Jyothirmaya Building<br />
                    Infopark Phase 2, Kochi 682303, India
                  </div>
                  <div className="pt-1 font-mono text-xs text-white/80">
                    <a href="tel:+914844000300" className="hover:text-brand-accent transition-colors inline-flex items-center gap-2">
                      <span className="text-white/40">TEL:</span> +91 484 4000300
                    </a>
                  </div>
                  <div className="font-mono text-xs text-white/80">
                    <a href="mailto:hello@armiasystems.com" className="hover:text-brand-accent transition-colors inline-flex items-center gap-2">
                      <span className="text-white/40">MAIL:</span> HELLO@ARMIASYSTEMS.COM
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Full-Width Unified Bottom Strip (Copyright & Legal) ── */}
        <div className="border-t border-white/10 pt-6 mt-2 px-6 md:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40 tracking-wider uppercase">
          <div className="flex items-center gap-4">
            <div className="relative h-7 w-28 flex items-center shrink-0">
              <Image
                src="/images/armialogo.svg"
                alt="Armia Systems Logo"
                fill
                className="object-contain object-left opacity-70"
              />
            </div>
            <span>&copy; {new Date().getFullYear()} ARMIA SYSTEMS INC. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#terms" className="hover:text-white transition-colors">
              TERMS OF SERVICE
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="#privacy" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <span className="text-white/20">&bull;</span>
            <span className="text-white/30 hidden sm:inline">
              ISO 9001 &bull; SOC 2 READY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
