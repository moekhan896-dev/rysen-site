import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import "./globals.css";

// Display serif — variable, with optical sizing
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

// UI + body
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

// Tabular numerals — for metrics and data
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = "https://rysengrowth.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rysen Growth — Data-Driven Marketing for Law Firms & Medical Practices",
    template: "%s | Rysen Growth",
  },
  description:
    "Rysen Growth is a Detroit-based, founder-led marketing agency for law firms and medical practices. Founded 2019. 30+ engagements across FL, CA, IL, NY.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rysen Growth",
    title:
      "Rysen Growth — Data-Driven Marketing for Law Firms & Medical Practices",
    description:
      "A Detroit-based, founder-led marketing agency. We make law firms and medical practices the first answer — across Google, AI search, and Maps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rysen Growth — Data-Driven Marketing for Law & Medical",
    description:
      "Detroit-based, founder-led. 30+ engagements across legal and medical. Free audit available.",
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
      className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}
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
      </body>
    </html>
  );
}
