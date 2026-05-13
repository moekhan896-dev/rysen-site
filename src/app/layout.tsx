import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rysen — AI Search Agency for Law Firms & Medical Practices",
  description:
    "We're a small team of marketing strategists and data scientists helping law firms and medical practices win the AI search era — across Google, ChatGPT, and Perplexity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
