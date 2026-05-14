"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageHeroProps {
  readonly eyebrow: string;
  readonly title: ReactNode;
  readonly subtitle?: ReactNode;
  readonly variant?: "default" | "compact";
  readonly showAmbient?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = "default",
  showAmbient = true,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero${variant === "compact" ? " page-hero-compact" : ""}`}
    >
      {showAmbient && (
        <div className="page-hero-ambient" aria-hidden="true">
          <span className="page-hero-blob page-hero-blob-1" />
          <span className="page-hero-blob page-hero-blob-2" />
        </div>
      )}
      <div className="page-hero-inner">
        <motion.div
          className="page-hero-eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {eyebrow}
        </motion.div>
        <motion.h1
          className="page-hero-title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
