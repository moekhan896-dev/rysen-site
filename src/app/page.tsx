import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Verticals } from "@/components/sections/Verticals";
import { TheWall } from "@/components/sections/TheWall";
import { TheOffer } from "@/components/sections/TheOffer";
import { TheTeam } from "@/components/sections/TheTeam";
import { TheServices } from "@/components/sections/TheServices";
import { TheProcess } from "@/components/sections/TheProcess";
import { TheClose } from "@/components/sections/TheClose";

export const metadata: Metadata = {
  title: "Rysen Growth, Marketing Engineering for Law Firms and Medical Practices",
  description:
    "We make law firms and medical practices the #1 result on Google, ChatGPT, Perplexity, and Gemini. One firm per metro. By invitation.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Verticals />
      <TheWall />
      <TheOffer />
      <TheTeam />
      <TheServices />
      <TheProcess />
      <TheClose />
    </main>
  );
}
