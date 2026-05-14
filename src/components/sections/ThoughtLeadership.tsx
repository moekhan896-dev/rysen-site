"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Article {
  readonly category: string;
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly date: string;
  readonly readTime: string;
  readonly author: string;
}

const ARTICLES: ReadonlyArray<Article> = [
  {
    category: "AI SEARCH",
    slug: "ai-search-reshape-legal-marketing-2027",
    title: "How AI Search Will Reshape Legal Marketing by 2027.",
    excerpt:
      "ChatGPT, Perplexity, and Google AI Overviews are quietly rewriting how clients find lawyers. Most firms won&rsquo;t survive the transition. Here&rsquo;s what&rsquo;s coming and how to prepare.",
    date: "November 2024",
    readTime: "12 min read",
    author: "Art Khan",
  },
  {
    category: "ATTRIBUTION",
    slug: "death-of-impressions-based-marketing",
    title: "The Death of the Impressions-Based Marketing Report.",
    excerpt:
      "Why every CMO at a professional services firm should stop accepting impression reports and demand revenue attribution. A framework for replacing vanity metrics with dollar-denominated outcomes.",
    date: "October 2024",
    readTime: "9 min read",
    author: "Art Khan",
  },
  {
    category: "LOCAL SEO",
    slug: "why-local-seo-fails-year-two",
    title: "Why Most Local SEO Strategies Fail in Year 2.",
    excerpt:
      "The work that gets you to #1 isn&rsquo;t the work that keeps you there. Eight months in, most engagements plateau. Here&rsquo;s the operational discipline that separates firms that maintain dominance from those that drift back to page 2.",
    date: "September 2024",
    readTime: "11 min read",
    author: "Art Khan",
  },
  {
    category: "METHODOLOGY",
    slug: "inside-the-first-position-playbook",
    title: "Inside the First Position Playbook.",
    excerpt:
      "The five-pillar framework Rysen runs with every engagement. Hyperlocal Dominance. Data-First Reporting. Compound Visibility. Weekly Accountability. Honest Selection. What each means in practice.",
    date: "August 2024",
    readTime: "14 min read",
    author: "Art Khan",
  },
];

export function ThoughtLeadership() {
  return (
    <section className="thought-leadership">
      <div className="thought-leadership-inner">
        <div className="thought-leadership-header">
          <div className="section-2-eyebrow">PUBLISHED THINKING</div>
          <h2 className="thought-leadership-h2">
            Where we stand on{" "}
            <span className="accent-italic">what&rsquo;s changing.</span>
          </h2>
          <p className="thought-leadership-sub">
            Selected writing on AI search, attribution, and the future of
            professional services marketing.
          </p>
        </div>

        <div className="thought-leadership-grid">
          {ARTICLES.map((a, i) => (
            <motion.div
              key={a.slug}
              className="tl-card-wrap"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link href={`/blog/${a.slug}`} className="tl-card">
                <div className="tl-card-badge">{a.category}</div>
                <h3
                  className="tl-card-title"
                  dangerouslySetInnerHTML={{ __html: a.title }}
                />
                <p
                  className="tl-card-excerpt"
                  dangerouslySetInnerHTML={{ __html: a.excerpt }}
                />
                <div className="tl-card-meta">
                  <span>{a.date}</span>
                  <span className="tl-card-dot">·</span>
                  <span>{a.readTime}</span>
                  <span className="tl-card-dot">·</span>
                  <span>{a.author}</span>
                </div>
                <span className="tl-card-read" aria-hidden="true">
                  Read <span className="arrow">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
