import type { Metadata } from "next";
import { Fraunces, Geist, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CookieConsent } from "@/components/ui/CookieConsent";
import "./globals.css";

// Primary typeface, Session 37 onward
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geist",
  display: "swap",
});

// Inter is now reserved for the RysenLogo wordmark only
const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

// Fraunces kept loaded for deep pages and other surfaces that still use it
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const SITE_URL = "https://rysengrowth.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rysen Growth, Marketing Engineering for Law Firms and Medical Practices",
    template: "%s | Rysen Growth",
  },
  description:
    "Rysen Growth is a Detroit-based marketing firm engineered for selective law firms and medical practices. One firm per metro across Google, ChatGPT, Perplexity, and Gemini.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Rysen Growth",
    title:
      "Rysen Growth, Marketing Engineering for Law Firms and Medical Practices",
    description:
      "A Detroit-based marketing firm. We make law firms and medical practices the #1 result across Google, ChatGPT, Perplexity, and Gemini.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Rysen Growth — Search engineering for law firms and medical practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rysen Growth, Marketing Engineering for Law and Medical",
    description:
      "Detroit-based. 30+ engagements across legal and medical. By invitation.",
    images: ["/og-default.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Session 52 — combined @graph JSON-LD: Organization + LocalBusiness
  // + WebSite. Identified by @id so each entity can be referenced
  // elsewhere (eg the WebSite -> publisher).
  const siteGraphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Rysen Growth",
        url: SITE_URL,
        logo: `${SITE_URL}/og-default.png`,
        email: "marketing@rysengrowth.com",
        telephone: "+1-248-406-6223",
        foundingDate: "2019",
        sameAs: [
          "https://www.linkedin.com/company/rysen-growth",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "1 Campus Martius, Suite 200",
          addressLocality: "Detroit",
          addressRegion: "MI",
          postalCode: "48226",
          addressCountry: "US",
        },
        areaServed: "United States",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "Rysen Growth",
        url: SITE_URL,
        telephone: "+1-248-406-6223",
        email: "marketing@rysengrowth.com",
        priceRange: "$$$",
        description:
          "A search engineering agency for law firms and medical practices. Ranking firms #1 across Google, ChatGPT, Perplexity, and Gemini.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1 Campus Martius, Suite 200",
          addressLocality: "Detroit",
          addressRegion: "MI",
          postalCode: "48226",
          addressCountry: "US",
        },
        areaServed: "United States",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Rysen Growth",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${fraunces.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraphJsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-to-content">Skip to content</a>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
