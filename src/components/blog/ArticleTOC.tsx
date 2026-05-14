"use client";

import { useEffect, useState } from "react";

interface TocHeading {
  readonly id: string;
  readonly text: string;
}

interface ArticleTOCProps {
  readonly contentSelector?: string;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function ArticleTOC({ contentSelector = ".article-prose" }: ArticleTOCProps) {
  const [headings, setHeadings] = useState<ReadonlyArray<TocHeading>>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Collect headings from the article DOM after mount
  useEffect(() => {
    const root = document.querySelector(contentSelector);
    if (!root) return;
    const els = Array.from(
      root.querySelectorAll<HTMLHeadingElement>("h2")
    );
    const list: TocHeading[] = els.map((el) => {
      let id = el.id;
      if (!id) {
        id = slugify(el.textContent ?? "");
        el.id = id;
      }
      return { id, text: el.textContent ?? "" };
    });
    setHeadings(list);
  }, [contentSelector]);

  // Active heading via IntersectionObserver
  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0.01,
      }
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="article-toc" aria-label="Table of contents">
      <div className="article-toc-label">On this page</div>
      <ul>
        {headings.map((h) => (
          <li
            key={h.id}
            className={`article-toc-item${activeId === h.id ? " is-active" : ""}`}
          >
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(h.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.replaceState(null, "", `#${h.id}`);
                }
              }}
            >
              <span className="article-toc-line" aria-hidden="true" />
              <span className="article-toc-text">{h.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
