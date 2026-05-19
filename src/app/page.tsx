import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TheWork } from "@/components/sections/TheWork";
import { TheOffer } from "@/components/sections/TheOffer";
import { TheTeam } from "@/components/sections/TheTeam";
import { TheServices } from "@/components/sections/TheServices";
import { TheProcess } from "@/components/sections/TheProcess";
import { TheClose } from "@/components/sections/TheClose";

export const metadata: Metadata = {
  title: "Rysen Growth, Detroit + Phoenix Studio for Law Firms and Medical Practices",
  description:
    "We make law firms and medical practices famous on Google. One per metro. By invitation.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <TheWork />
      <TheOffer />
      <TheTeam />
      <TheServices />
      <TheProcess />
      <TheClose />
    </main>
  );
}
