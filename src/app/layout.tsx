import type { Metadata } from "next";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
