import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AllWorkView } from "@/components/case-studies/AllWorkView";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollProgressProvider } from "@/components/parallax/ScrollProgressProvider";
import { SmoothScrollProvider } from "@/components/parallax/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Case Studies & Work Portfolio | Armia Systems",
  description:
    "Explore Armia Systems' portfolio of scalable digital products, SaaS platforms, high-concurrency mobile apps, and enterprise software engineered across 20+ years.",
  keywords: [
    "Armia Systems Portfolio",
    "Armia Case Studies",
    "FLEXSHFT",
    "Ucollabit",
    "Askonnect",
    "BCMCH",
    "Mazeflower",
    "Software Engineering Portfolio",
    "Custom Software Development",
  ],
};

export default function AllWorkPage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgressProvider>
        <main
          className="relative min-h-screen w-full overflow-x-hidden transition-colors duration-400"
          style={{ backgroundColor: "var(--background)" }}
        >
          {/* Global Header */}
          <Header />

          {/* All Work / Case Studies Showcase */}
          <AllWorkView />

          {/* Global Footer & Direct Contact Consultation */}
          <FooterSection />
        </main>
      </ScrollProgressProvider>
    </SmoothScrollProvider>
  );
}
