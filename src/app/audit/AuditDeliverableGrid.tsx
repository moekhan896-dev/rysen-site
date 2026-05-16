"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  FileSearch,
  MapPin,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const ITEMS = [
  {
    icon: Search,
    title: "Google Rankings Snapshot",
    desc: "Current positions for your top 20 priority keywords, by city and intent.",
  },
  {
    icon: Sparkles,
    title: "AI Search Visibility",
    desc: "How you appear (or don't) in ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    icon: MapPin,
    title: "Google Maps & Local Pack",
    desc: "Your 3-pack appearance in every priority metro and neighborhood.",
  },
  {
    icon: FileSearch,
    title: "Content & Authority Gaps",
    desc: "What competitors have published that you haven't, and why it matters.",
  },
  {
    icon: BarChart3,
    title: "Competitor Analysis",
    desc: "Who's beating you, where they're winning, and the specific moves they're making.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Opportunity Estimate",
    desc: "Dollar value of the rankings you're missing, modeled against your practice area.",
  },
] as const;

export function AuditDeliverableGrid() {
  return (
    <div className="audit-grid">
      {ITEMS.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            className="audit-card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="audit-card-icon">
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div className="audit-card-title">{item.title}</div>
            <p className="audit-card-desc">{item.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
