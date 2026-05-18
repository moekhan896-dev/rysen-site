import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TheWork } from "@/components/sections/TheWork";
import { TheOffer } from "@/components/sections/TheOffer";
import { TheTeam } from "@/components/sections/TheTeam";
import { TheServices } from "@/components/sections/TheServices";
import { TheProcess } from "@/components/sections/TheProcess";
import { TheClose } from "@/components/sections/TheClose";

export const metadata: Metadata = {
  title: "Rysen Growth, Detroit-Based SEO for Law Firms and Medical Practices",
  description:
    "We rank one law firm and one medical practice per metro. Stop competing for visibility. Real clients, real rankings, real revenue.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TheWork />
      <TheOffer />
      <TheTeam />
      <TheServices />
      <TheProcess />
      <TheClose />
    </main>
  );
}
