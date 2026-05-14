"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ArticleFrontmatter } from "@/lib/articles";
import { formatPublishedDate } from "@/lib/articles";

interface ArticleCardProps {
  readonly frontmatter: ArticleFrontmatter;
  readonly variant?: "full" | "compact";
  readonly index?: number;
}

export function ArticleCard({ frontmatter, variant = "full", index = 0 }: ArticleCardProps) {
  const fm = frontmatter;
  return (
    <motion.div
      className={`tl-card-wrap${variant === "compact" ? " tl-card-wrap-compact" : ""}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link href={`/blog/${fm.slug}`} className="tl-card">
        <div className="tl-card-badge">{fm.category.toUpperCase()}</div>
        <h3 className="tl-card-title">{fm.title}</h3>
        <p className="tl-card-excerpt">{fm.description}</p>
        <div className="tl-card-meta">
          <span>{formatPublishedDate(fm.publishedDate)}</span>
          <span className="tl-card-dot">·</span>
          <span>{fm.readTime}</span>
          <span className="tl-card-dot">·</span>
          <span>{fm.author}</span>
        </div>
        <span className="tl-card-read" aria-hidden="true">
          Read <span className="arrow">→</span>
        </span>
      </Link>
    </motion.div>
  );
}
