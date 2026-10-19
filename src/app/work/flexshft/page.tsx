import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { FlexshftDetailView } from "@/components/case-studies/FlexshftDetailView";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollProgressProvider } from "@/components/parallax/ScrollProgressProvider";
import { SmoothScrollProvider } from "@/components/parallax/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "FLEXSHFT: The Marketplace for Flexible Hospitality Work | Armia Systems",
  description:
    "Flexible workforce management platform combining a worker mobile application, business web portal, and administration platform for the hospitality, leisure, and events industry.",
  keywords: [
    "FLEXSHFT",
    "Armia Systems Portfolio",
    "Flexible Workforce Management",
    "Hospitality Shift Management",
    "Staffing Marketplace",
    "React Native",
  ],
};

export default function FlexshftCaseStudyPage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgressProvider>
        <main
          className="relative min-h-screen w-full overflow-x-hidden transition-colors duration-400"
          style={{ backgroundColor: "var(--background)" }}
        >
          {/* Global Header */}
          <Header />

          {/* Dedicated Flexshft Case Study Story */}
          <FlexshftDetailView />

          {/* Global Footer & Direct Contact Consultation */}
          <FooterSection />
        </main>
      </ScrollProgressProvider>
    </SmoothScrollProvider>
  );
}
