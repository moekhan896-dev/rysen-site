"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

interface ShareButtonsProps {
  readonly title: string;
  readonly slug: string;
}

const SITE_URL = "https://rysengrowth.com";

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}/blog/${slug}`;

  const liHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Ignore — old browsers
    }
  };

  return (
    <div className="share-buttons" aria-label="Share this article">
      <a
        href={liHref}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button"
        aria-label="Share to LinkedIn"
      >
        <LinkedinIcon />
      </a>
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button"
        aria-label="Share to X / Twitter"
      >
        <TwitterIcon />
      </a>
      <button
        type="button"
        className={`share-button${copied ? " is-copied" : ""}`}
        onClick={onCopy}
        aria-label="Copy article link"
      >
        {copied ? (
          <Check size={15} strokeWidth={2} aria-hidden="true" />
        ) : (
          <Link2 size={15} strokeWidth={1.8} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
