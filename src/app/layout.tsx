import type { Metadata } from "next";
import { Fraunces, Geist, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
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
    siteName: "Rysen Growth",
    title:
      "Rysen Growth, Marketing Engineering for Law Firms and Medical Practices",
    description:
      "A Detroit-based marketing firm. We make law firms and medical practices the #1 result across Google, ChatGPT, Perplexity, and Gemini.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rysen Growth, Marketing Engineering for Law and Medical",
    description:
      "Detroit-based. 30+ engagements across legal and medical. By invitation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rysen Growth",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    email: "marketing@rysengrowth.com",
    telephone: "+1-248-406-6223",
    foundingDate: "2019",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Campus Martius, Suite 200",
      addressLocality: "Detroit",
      addressRegion: "MI",
      postalCode: "48226",
      addressCountry: "US",
    },
    areaServed: "United States",
  };

  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${fraunces.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-to-content">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
