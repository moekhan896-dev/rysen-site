import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { AwardsStrip } from "@/components/sections/AwardsStrip";
import { ViralCarousel } from "@/components/sections/ViralCarousel";
import { LiveLeadFeed } from "@/components/sections/LiveLeadFeed";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { TheOutcome } from "@/components/sections/TheOutcome";
import { TheOffice } from "@/components/sections/TheOffice";
import { Verticals } from "@/components/sections/Verticals";
import { TheStack } from "@/components/sections/TheStack";
import { BuiltByOperators } from "@/components/sections/BuiltByOperators";
import { TheServices } from "@/components/sections/TheServices";
import { TheWall } from "@/components/sections/TheWall";
import { TheOffer } from "@/components/sections/TheOffer";
import { TheTeam } from "@/components/sections/TheTeam";
import { TheProcess } from "@/components/sections/TheProcess";
import { TheClose } from "@/components/sections/TheClose";

export const metadata: Metadata = {
  title:
    "Rysen Growth, the search engineering agency for law firms and medical practices",
  description:
    "We make law firms and medical practices the #1 result on Google, ChatGPT, Perplexity, and Gemini. One firm per metro. By invitation.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LiveDemo />
      <AwardsStrip />
      <ViralCarousel />
      <LiveLeadFeed />
      <SelectedWork />
      <TheOutcome />
      <TheOffice />
      <Verticals />
      <TheStack />
      <BuiltByOperators />
      <TheServices />
      <TheWall />
      <TheOffer />
      <TheTeam />
      <TheProcess />
      <TheClose />
    </main>
  );
}
