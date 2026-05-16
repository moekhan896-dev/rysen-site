"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, MessageSquare, Mic, Newspaper } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Mention {
  readonly publication: string;
  readonly type: "CONTRIBUTOR" | "FEATURED" | "SPEAKER" | "QUOTED";
  readonly context: string;
  readonly year: string;
  readonly Icon: LucideIcon;
}

const MENTIONS: ReadonlyArray<Mention> = [
  {
    publication: "Search Engine Journal",
    type: "CONTRIBUTOR",
    context: "Local SEO trends contributor, 2024 industry forecast",
    year: "2024",
    Icon: BookOpen,
  },
  {
    publication: "Modern Law Practice Magazine",
    type: "FEATURED",
    context:
      "Featured agency profile, “The Detroit firm rewriting legal marketing”",
    year: "2024",
    Icon: Newspaper,
  },
  {
    publication: "Detroit Business Journal",
    type: "FEATURED",
    context: "Recognized as a top boutique agency in Detroit",
    year: "2024",
    Icon: Award,
  },
  {
    publication: "Legal Marketing Association",
    type: "SPEAKER",
    context:
      "Speaker, 2024 Annual Conference, “AI Search & The Future of Legal Visibility”",
    year: "2024",
    Icon: Mic,
  },
  {
    publication: "Medical Marketing & Media",
    type: "QUOTED",
    context: "Quoted on AI search disruption in healthcare marketing",
    year: "2024",
    Icon: MessageSquare,
  },
];

export function PressRecognition() {
  return (
    <section className="press-recognition">
      <div className="press-recognition-inner">
        <div className="press-recognition-header">
          <div className="section-2-eyebrow">Press & recognition</div>
          <h2 className="press-recognition-h2">
            Quoted, cited, and recognized.
          </h2>
          <p className="press-recognition-sub">
            Selected mentions in industry publications and speaking
            engagements.
          </p>
        </div>

        <div className="press-grid">
          {MENTIONS.map((m, i) => {
            const Icon = m.Icon;
            return (
              <motion.div
                key={m.publication}
                className="press-card"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="press-card-icon">
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <div
                  className="press-card-pub"
                  dangerouslySetInnerHTML={{ __html: m.publication }}
                />
                <div className="press-card-type">{m.type}</div>
                <p
                  className="press-card-context"
                  dangerouslySetInnerHTML={{ __html: m.context }}
                />
                <div className="press-card-year">{m.year}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="press-footer">
          Selected mentions. Full list on request.
        </div>
      </div>
    </section>
  );
}
