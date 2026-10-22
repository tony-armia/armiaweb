import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { ProjectDetailView } from "@/components/case-studies/ProjectDetailView";
import { FlexshftDetailView } from "@/components/case-studies/FlexshftDetailView";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollProgressProvider } from "@/components/parallax/ScrollProgressProvider";
import { SmoothScrollProvider } from "@/components/parallax/SmoothScrollProvider";
import { CASE_STUDIES } from "@/lib/case-studies-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Armia Systems",
    };
  }

  return {
    title: `${project.title}: ${project.tagline} | Armia Systems Case Studies`,
    description: project.description,
    keywords: [
      project.title,
      project.industry,
      project.category,
      "Armia Systems Portfolio",
      "Case Study",
      ...project.technologies,
    ],
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = CASE_STUDIES.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <SmoothScrollProvider>
      <ScrollProgressProvider>
        <main
          className="relative min-h-screen w-full overflow-x-hidden transition-colors duration-400"
          style={{ backgroundColor: "var(--background)" }}
        >
          {/* Global Header */}
          <Header />

          {/* Dedicated Case Study View */}
          {slug === "flexshft" ? (
            <FlexshftDetailView />
          ) : (
            <ProjectDetailView project={project} />
          )}

          {/* Global Footer & Direct Contact Consultation */}
          <FooterSection />
        </main>
      </ScrollProgressProvider>
    </SmoothScrollProvider>
  );
}
