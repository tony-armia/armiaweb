export interface CaseStudy {
  id: string;
  num: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  filterCategory: "all" | "saas" | "telecom" | "healthcare" | "edtech" | "media";
  industry: string;
  year: string;
  image: string;
  caption: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  link: string;
  featured?: boolean;
}

export const CATEGORY_FILTERS = [
  { id: "all", label: "ALL WORK" },
  { id: "saas", label: "SAAS & MARKETPLACES" },
  { id: "telecom", label: "TELECOM & NETWORKING" },
  { id: "healthcare", label: "HEALTHCARE" },
  { id: "edtech", label: "EDTECH & APPS" },
  { id: "media", label: "MEDIA & STREAMING" },
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "01",
    num: "/01",
    slug: "flexshft",
    title: "FLEXSHFT",
    tagline: "The Marketplace for Flexible Hospitality Work",
    category: "LOGISTICS & ON-DEMAND SAAS",
    filterCategory: "saas",
    industry: "Hospitality & Events",
    year: "2024",
    image: "/images/Flexshft.png",
    caption:
      "Enterprise shift-scheduling and dynamic on-demand workforce management platform built for scale.",
    description:
      "FLEXSHFT is an on-demand workforce marketplace combining native iOS/Android worker apps and a web platform to simplify hiring, empower flexible professionals, and transform temporary staffing across hospitality and events.",
    capabilities: [
      "Real-time shift dispatching & automated matching algorithms",
      "Multi-tenant cloud architecture engineered on AWS",
      "Cross-platform mobile apps for hospitality workers and supervisors",
      "Automated payroll processing, invoicing and compliance tracking",
      "Instant push notifications, live status telemetry & verified ratings",
    ],
    technologies: [
      "React Native",
      "iOS & Android",
      "AWS Cloud",
      "Node.js",
      "Stripe Connect",
      "WebSockets",
      "Admin Portal",
    ],
    link: "/work/flexshft",
    featured: true,
  },
  {
    id: "02",
    num: "/02",
    slug: "ucollabit",
    title: "Ucollabit",
    tagline: "Unified Workspace & Project Intelligence",
    category: "ENTERPRISE COLLABORATION",
    filterCategory: "saas",
    industry: "Enterprise SaaS",
    year: "2024",
    image: "/images/Ucollabit.png",
    caption:
      "Unified workspace and collaborative project intelligence system for distributed enterprise teams.",
    description:
      "A high-throughput collaborative intelligence hub enabling distributed engineering and business pods to co-author documentation, orchestrate tasks, and synchronize state in sub-100ms real time.",
    capabilities: [
      "Real-time document sync & interactive whiteboards",
      "Role-based access control & enterprise security compliance",
      "Automated sprint planning & workflow triggers",
      "Custom integrations with Slack, Jira & GitHub pipelines",
      "Sub-100ms WebSocket messaging infrastructure",
    ],
    technologies: [
      "Next.js",
      "WebSockets",
      "Redis",
      "Distributed Cloud",
      "TypeScript",
      "Tailwind CSS",
      "Microservices",
    ],
    link: "/work/ucollabit",
    featured: false,
  },
  {
    id: "03",
    num: "/03",
    slug: "askonnect",
    title: "Askonnect",
    tagline: "Intelligent B2B Omni-Channel Communication",
    category: "TELECOM & NETWORKING",
    filterCategory: "telecom",
    industry: "Telecommunications",
    year: "2023",
    image: "/images/Askonnect.png",
    caption:
      "Intelligent B2B communication and omni-channel customer engagement platform with automated CRM routing.",
    description:
      "Unified B2B communication architecture integrating VoIP telephony, intelligent conversation triage, and predictive dialer consoles into a single high-availability operational cockpit.",
    capabilities: [
      "VoIP telephony & unified conversation inbox architecture",
      "AI-driven lead qualification & conversation triage",
      "Predictive dialer and live agent monitoring console",
      "Omni-channel API gateway across SMS, WhatsApp & Voice",
      "Zero-downtime microservices with 99.99% operational SLA",
    ],
    technologies: [
      "VoIP Telephony",
      "Microservices",
      "AWS ECS",
      "WebRTC",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
    link: "/work/askonnect",
    featured: false,
  },
  {
    id: "04",
    num: "/04",
    slug: "bcmch",
    title: "BCMCH",
    tagline: "Comprehensive Hospital Management & Telehealth",
    category: "HEALTHCARE PLATFORM",
    filterCategory: "healthcare",
    industry: "HealthTech",
    year: "2023",
    image: "/images/BCMCH.png",
    caption:
      "Comprehensive hospital management system, telehealth portal, and electronic medical records ecosystem.",
    description:
      "Mission-critical healthcare operations ecosystem managing in-patient care, outpatient bookings, telehealth consultations, pharmacy distribution, and electronic medical records with rigorous HIPAA compliance.",
    capabilities: [
      "HIPAA-compliant patient portal & EHR integration",
      "Automated OPD appointment booking & doctor schedule management",
      "Secure lab report generation & telemetry synchronization",
      "In-hospital pharmacy inventory & billing automation",
      "High-availability disaster recovery cloud architecture",
    ],
    technologies: [
      "HIPAA Compliant",
      "EHR Systems",
      "Telehealth",
      "Disaster Recovery",
      "AWS Cloud",
      "Node.js",
      "React",
    ],
    link: "/work/bcmch",
    featured: false,
  },
  {
    id: "05",
    num: "/05",
    slug: "mazeflower",
    title: "Mazeflower",
    tagline: "Adaptive Gamified Learning Platform",
    category: "EDTECH & INTERACTIVE MEDIA",
    filterCategory: "edtech",
    industry: "EdTech & Media",
    year: "2023",
    image: "/images/Mazeflower.png",
    caption:
      "Interactive learning and creative content publishing platform with adaptive gamification engines.",
    description:
      "Next-generation digital learning and creative content platform combining responsive canvas rendering, adaptive gamified progression, and real-time learner telemetry.",
    capabilities: [
      "Gamified learning paths & progress telemetry analytics",
      "Cross-platform responsive canvas rendering architecture",
      "AI-driven dynamic curriculum recommendations",
      "Secure cloud asset pipeline & instant streaming",
      "Scalable multi-user collaborative experiences",
    ],
    technologies: [
      "Interactive Canvas",
      "Gamification Engine",
      "Adaptive Learning",
      "AWS CDN",
      "React",
      "TypeScript",
    ],
    link: "/work/mazeflower",
    featured: false,
  },
  {
    id: "06",
    num: "/06",
    slug: "tinybits",
    title: "Tinybits",
    tagline: "High-Performance Mobile Utility Toolset",
    category: "MOBILE APPS & CONSUMER TECH",
    filterCategory: "edtech",
    industry: "Mobile Utilities",
    year: "2022",
    image: "/images/Tinybits.png",
    caption:
      "Compact mobile utility and digital interaction toolset built for lightning-fast performance.",
    description:
      "High-performance mobile utility suite featuring offline-first data replication, low-latency background synchronisation, and intuitive tactile micro-interactions on iOS and Android.",
    capabilities: [
      "Native iOS and Android mobile performance tuning",
      "Offline-first data replication and background sync",
      "Refined micro-interaction design and low-latency response",
      "Lightweight cloud telemetry and analytics",
      "Cross-platform UI/UX consistency across screen sizes",
    ],
    technologies: [
      "iOS & Android",
      "Offline-First",
      "Swift & Kotlin",
      "Cloud Sync",
      "REST APIs",
      "Figma",
    ],
    link: "/work/tinybits",
    featured: false,
  },
  {
    id: "07",
    num: "/07",
    slug: "freemedia",
    title: "FreeMedia",
    tagline: "High-Concurrency Media Streaming Network",
    category: "MEDIA STREAMING & CDN",
    filterCategory: "media",
    industry: "Media Streaming",
    year: "2022",
    image: "/images/freemedia.png",
    caption:
      "Global digital media distribution and video streaming network engineered for high-concurrency content delivery.",
    description:
      "High-throughput digital media distribution network with dynamic transcode pipelines, edge caching, and automated digital rights management delivering seamless video streaming worldwide.",
    capabilities: [
      "Adaptive bitrate video transcode pipeline",
      "High-concurrency global CDN edge caching",
      "Automated digital rights management & stream security",
      "Real-time user engagement telemetry",
      "Zero-buffer multi-region content delivery",
    ],
    technologies: [
      "Video CDN",
      "Adaptive Bitrate",
      "Edge Caching",
      "Cloud Infrastructure",
      "HLS/DASH",
      "Node.js",
    ],
    link: "/work/freemedia",
    featured: false,
  },
];
