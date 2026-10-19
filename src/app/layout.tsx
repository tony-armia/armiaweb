import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CursorFollower } from "@/components/effects/CursorFollower";
import { PageLoader } from "@/components/ui/PageLoader";
import { ScrollToTopOnReload } from "@/components/utils/ScrollToTopOnReload";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Armia Systems | Software Engineering & Digital Product Development",
  description:
    "Armia Systems helps businesses design, engineer and scale high-performance digital products through software engineering, AI, cloud and product expertise.",
  keywords: [
    "Software Engineering",
    "Digital Product Development",
    "Enterprise Software",
    "AI Engineering",
    "Cloud DevOps",
    "Armia Systems",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline theme init — prevents flash of wrong theme on load (same pattern as Elysium Project) */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(){try{
  var stored=localStorage.getItem('armia-theme');
  var theme=(stored==='light'||stored==='dark')?stored:'dark';
  document.documentElement.classList.remove('dark','light');
  document.documentElement.classList.add(theme);

  // Intercept and prevent browser extensions (e.g. McAfee WebAdvisor, form fillers)
  // from injecting 'fdprocessedid' before React hydration completes, preventing hydration mismatch errors.
  var origSetAttr = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, val) {
    if (name === 'fdprocessedid') return;
    return origSetAttr.apply(this, arguments);
  };
  if (typeof document !== 'undefined') {
    var els = document.querySelectorAll('[fdprocessedid]');
    for (var i = 0; i < els.length; i++) {
      els[i].removeAttribute('fdprocessedid');
    }
  }
}catch(e){}})();
            `.trim(),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full font-sans text-foreground selection:bg-brand-accent selection:text-white"
        style={{ backgroundColor: "var(--background)" }}
      >
        <ScrollToTopOnReload />
        <PageLoader />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
