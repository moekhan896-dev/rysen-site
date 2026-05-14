"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-ambient" aria-hidden="true">
        <span className="not-found-blob not-found-blob-1" />
        <span className="not-found-blob not-found-blob-2" />
      </div>

      <div className="not-found-inner">
        <motion.div
          className="not-found-sonar"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 200 200" width="200" height="200">
            <circle cx="100" cy="100" r="6" fill="var(--accent)" />
            <circle
              cx="100"
              cy="100"
              r="30"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.6"
              className="nf-sonar-ring nf-sonar-ring-1"
            />
            <circle
              cx="100"
              cy="100"
              r="55"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.5"
              className="nf-sonar-ring nf-sonar-ring-2"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.4"
              className="nf-sonar-ring nf-sonar-ring-3"
            />
            <line
              x1="100"
              y1="100"
              x2="180"
              y2="100"
              stroke="var(--accent)"
              strokeWidth="1"
              className="nf-sonar-sweep"
              style={{ transformOrigin: "100px 100px" }}
            />
          </svg>
        </motion.div>

        <motion.div
          className="not-found-display"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          404
        </motion.div>

        <motion.h1
          className="not-found-h1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          This page doesn’t exist.
        </motion.h1>

        <motion.p
          className="not-found-sub"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
        >
          But your firm’s #1 ranking might. Let’s find out.
        </motion.p>

        <motion.div
          className="not-found-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
        >
          <Link href="/audit" className="not-found-primary">
            Get a free audit <span className="arrow">→</span>
          </Link>
          <Link href="/" className="not-found-secondary">
            Go home <span className="arrow">→</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
