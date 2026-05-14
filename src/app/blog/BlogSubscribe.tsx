"use client";

/**
 * FORMSPREE SETUP — REQUIRED FOR BLOG SUBSCRIBE TO WORK IN PRODUCTION
 *
 * 1. Sign in at https://formspree.io with marketing@rysengrowth.com.
 * 2. Create a new form named "Rysen Blog Subscribe".
 * 3. Copy its endpoint URL.
 * 4. Replace YOUR_BLOG_FORM_ID_HERE below with the real ID.
 * 5. Commit and push.
 */
const BLOG_FORMSPREE_ENDPOINT =
  "https://formspree.io/f/YOUR_BLOG_FORM_ID_HERE";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

export function BlogSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(BLOG_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, source: "blog-subscribe" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className="form-success blog-subscribe-success"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="form-success-mark">✓</div>
        <h3>You&rsquo;re on the list.</h3>
        <p>
          Next note arrives in your inbox when it publishes. Nothing else.
        </p>
      </motion.div>
    );
  }

  return (
    <form className="blog-subscribe" onSubmit={onSubmit} noValidate>
      <label className="blog-subscribe-field">
        <span className="form-field-label">EMAIL</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourfirm.com"
          required
        />
      </label>
      <button
        type="submit"
        className="form-submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="form-error-banner">
          Something went wrong. Try emailing us directly at{" "}
          <a href="mailto:marketing@rysengrowth.com">marketing@rysengrowth.com</a>.
        </p>
      )}
    </form>
  );
}
