import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WrittenWelcome } from "@/components/sections/WrittenWelcome";
import { SelectedEngagements } from "@/components/sections/SelectedEngagements";
import { SelectedResults } from "@/components/sections/SelectedResults";
import { SelectedServices } from "@/components/sections/SelectedServices";
import { Leadership } from "@/components/sections/Leadership";
import { Cadence } from "@/components/sections/Cadence";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Rysen Growth, Detroit-Based Marketing for Law Firms and Medical Practices",
  description:
    "We build organic dominance for boutique law firms and medical practices. The team is in Detroit. The work compounds across years, not months.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WrittenWelcome />
      <SelectedEngagements />
      <SelectedResults />
      <SelectedServices />
      <Leadership />
      <Cadence />
      <Contact />
    </>
  );
}
