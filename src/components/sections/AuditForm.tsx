"use client";

import { type FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function AuditForm() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="audit-form-wrap">
      <AnimatePresence mode="wait" initial={false}>
        {submitted ? (
          <motion.div
            key="thanks"
            className="audit-form-thanks"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            aria-live="polite"
          >
            <span className="audit-form-thanks-icon" aria-hidden="true">
              ✓
            </span>
            Thanks. We&apos;ll review and respond within 24 hours.
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="audit-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            noValidate
          >
            <input
              type="text"
              className="audit-form-input"
              placeholder="What's your firm's website?"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              aria-label="Your firm's website"
              autoComplete="url"
              spellCheck={false}
            />
            <button type="submit" className="audit-form-submit">
              Get my free audit <span className="arrow">→</span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <a href="#" className="audit-form-secondary">
        Schedule a call <span className="arrow">→</span>
      </a>
    </div>
  );
}
