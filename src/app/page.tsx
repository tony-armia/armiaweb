import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerTicker } from "@/components/sections/PartnerTicker";
import { EngineeringIntro } from "@/components/sections/EngineeringIntro";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioServicesSection } from "@/components/sections/PortfolioServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-surface-deep overflow-x-hidden">
      {/* Top Header Overlay */}
      <Header />

      {/* 1. Hero Section (Elysium Project Reference) */}
      <HeroSection />

      {/* 2. Section 02 — Elysium Reference Editorial "Who We Are" */}
      <EngineeringIntro />

      {/* Partner Credibility Ticker */}
      <PartnerTicker />

      {/* 3. Section 03 — AI-Powered Engineering Solutions */}
      <ServicesSection />

      {/* 4. Section 04 — Portfolio / Case Studies */}
      <PortfolioServicesSection />

      {/* 5. Section 05 — Delivery Framework Process */}
      <ProcessSection />

      {/* 6. Section 06 — Trusted by Engineering Leaders */}
      <TestimonialsSection />

      {/* 7. Section 07 — Awards & Industry Recognition */}
      <AwardsSection />

      {/* 8. Section 08 — Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Section 09 — Insights & Engineering Blog */}
      <BlogSection />

      {/* 10. Section 10 — Global Offices & Footer */}
      <FooterSection />
    </main>
  );
}
