"use client";

import { motion } from "framer-motion";
import type { ArticleFrontmatter } from "@/lib/articles";
import { formatPublishedDate } from "@/lib/articles";

interface ArticleHeroProps {
  readonly frontmatter: ArticleFrontmatter;
}

export function ArticleHero({ frontmatter }: ArticleHeroProps) {
  return (
    <section className="article-hero">
      <div className="page-hero-ambient" aria-hidden="true">
        <span className="page-hero-blob page-hero-blob-1" />
        <span className="page-hero-blob page-hero-blob-2" />
      </div>
      <div className="article-hero-inner">
        <motion.div
          className="article-hero-badge"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {frontmatter.category.toUpperCase()}
        </motion.div>

        <motion.h1
          className="article-hero-title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {frontmatter.title}
        </motion.h1>

        <motion.p
          className="article-hero-desc"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          {frontmatter.description}
        </motion.p>

        <motion.div
          className="article-hero-meta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <span className="article-hero-mono">AK</span>
          <div className="article-hero-meta-text">
            <div className="article-hero-author">{frontmatter.author}</div>
            <div className="article-hero-role">{frontmatter.authorRole}</div>
          </div>
          <span className="article-hero-meta-sep" aria-hidden="true">·</span>
          <span className="article-hero-date">{formatPublishedDate(frontmatter.publishedDate)}</span>
          <span className="article-hero-meta-sep" aria-hidden="true">·</span>
          <span className="article-hero-read">{frontmatter.readTime}</span>
        </motion.div>
      </div>
    </section>
  );
}
