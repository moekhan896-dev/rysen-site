"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTABannerProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly primaryText: string;
  readonly primaryHref: string;
  readonly secondaryText?: string;
  readonly secondaryHref?: string;
}

export function CTABanner({
  title,
  subtitle,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="cta-banner">
      <div className="cta-banner-atmosphere" aria-hidden="true" />
      <div className="cta-banner-grain" aria-hidden="true" />
      <div className="cta-banner-inner">
        <motion.h2
          className="cta-banner-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="cta-banner-subtitle"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="cta-banner-actions"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Link href={primaryHref} className="cta-banner-primary">
            {primaryText} <span className="arrow">→</span>
          </Link>
          {secondaryText && secondaryHref && (
            <Link href={secondaryHref} className="cta-banner-secondary">
              {secondaryText} <span className="arrow">→</span>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
