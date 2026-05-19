import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhatSEODoes } from "@/components/sections/WhatSEODoes";
import { TheWork } from "@/components/sections/TheWork";
import { TheOffer } from "@/components/sections/TheOffer";
import { TheTeam } from "@/components/sections/TheTeam";
import { TheServices } from "@/components/sections/TheServices";
import { TheProcess } from "@/components/sections/TheProcess";
import { TheClose } from "@/components/sections/TheClose";

export const metadata: Metadata = {
  title: "Rysen Growth, Detroit-Based SEO for Law Firms and Medical Practices",
  description:
    "We make law firms and medical practices famous on Google. One per metro. By invitation.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatSEODoes />
      <TheWork />
      <TheOffer />
      <TheTeam />
      <TheServices />
      <TheProcess />
      <TheClose />
    </main>
  );
}
