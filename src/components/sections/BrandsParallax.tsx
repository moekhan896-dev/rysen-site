"use client";

import { useEffect, useRef, useState } from "react";

type Brand = {
  readonly handle: string;
  readonly url: string;
  readonly name: string;
  readonly category: string;
  readonly initials: string;
  readonly gradientClass: string;
  readonly status: "ACTIVE" | "EXITED";
  readonly stats: ReadonlyArray<{ label: string; value: string }>;
  readonly meta: ReadonlyArray<{ label: string; value: string }>;
};

const brands: ReadonlyArray<Brand> = [
  {
    handle: "@quattrolabs",
    url: "https://www.instagram.com/quattrolabs",
    name: "Quattro Labs",
    category: "Automotive customs",
    initials: "QL",
    gradientClass: "brand-logo-quattro",
    status: "ACTIVE",
    stats: [
      {
        label: "Status",
        value: "Fastest-growing automotive customs brand in the Midwest",
      },
      {
        label: "Notable",
        value: "150K+ followers in under 3 months from launch",
      },
    ],
    meta: [
      { label: "Founded", value: "2022" },
      { label: "Peak followers", value: "150K+" },
      { label: "Markets", value: "Detroit · Chicago · Cleveland" },
    ],
  },
  {
    handle: "@thehonestplumbers",
    url: "https://www.instagram.com/thehonestplumbers",
    name: "The Honest Plumbers",
    category: "Residential plumbing",
    initials: "HP",
    gradientClass: "brand-logo-plumbers",
    status: "ACTIVE",
    stats: [
      {
        label: "Status",
        value: "Fastest-growing plumbing Instagram in the Midwest",
      },
      {
        label: "Notable",
        value: "Active operations across multiple Midwest metros",
      },
    ],
    meta: [
      { label: "Founded", value: "2021" },
      { label: "Service area", value: "5 Midwest metros" },
      { label: "Channel", value: "Instagram-led demand gen" },
    ],
  },
  {
    handle: "@thehonestmaids",
    url: "https://www.instagram.com/thehonestmaids",
    name: "The Honest Maids",
    category: "Residential cleaning",
    initials: "HM",
    gradientClass: "brand-logo-maids",
    status: "EXITED",
    stats: [
      { label: "Status", value: "Fastest-growing cleaning Instagram" },
      { label: "Notable", value: "Successfully exited" },
    ],
    meta: [
      { label: "Founded", value: "2020" },
      { label: "Exit", value: "2023, sold to local operator" },
      { label: "Peak crew", value: "12 cleaners" },
    ],
  },
];

function FollowerCounter() {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setValue(35);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          obs.disconnect();
          const target = 35;
          const start = performance.now();
          const duration = 1400;
          const easeOutExpo = (t: number) =>
            t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          const frame = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            setValue(Math.round(easeOutExpo(t) * target));
            if (t < 1) requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {value}K+
    </span>
  );
}

function BrandCard({
  brand,
  hovered,
  anyHovered,
  onHover,
  onLeave,
}: {
  brand: Brand;
  hovered: boolean;
  anyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    let rafId: number | null = null;
    let tx = 0;
    let ty = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = e.clientX - rect.left - rect.width / 2;
      const cy = e.clientY - rect.top - rect.height / 2;
      tx = (cy / rect.height) * -8;
      ty = (cx / rect.width) * 8;
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        el.style.transform = `perspective(1000px) rotateX(${tx}deg) rotateY(${ty}deg)`;
        rafId = null;
      });
    };
    const onLeaveEl = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
      el.style.transform = "";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeaveEl);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeaveEl);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const dimmed = anyHovered && !hovered;
  return (
    <a
      ref={cardRef}
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`brand-card brand-card-parallax${hovered ? " is-hovered" : ""}${
        dimmed ? " is-dimmed" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="brand-handle">{brand.handle}</div>
      <div className={`brand-logo ${brand.gradientClass}`} aria-hidden="true">
        {brand.initials}
      </div>
      <div className="brand-name">{brand.name}</div>
      <div className="brand-category">{brand.category}</div>
      <div className="brand-rule" aria-hidden="true"></div>

      {brand.stats.map((s, i) => (
        <div key={i} className="brand-stat-row">
          <span className="brand-stat-label">{s.label}</span>
          <span className="brand-stat-value">{s.value}</span>
        </div>
      ))}

      {/* Extra metadata revealed on hover */}
      <div className="brand-meta">
        {brand.meta.map((m, i) => (
          <div key={i} className="brand-meta-row">
            <span className="brand-meta-label">{m.label}</span>
            <span className="brand-meta-value">{m.value}</span>
          </div>
        ))}
      </div>

      <div className="brand-card-footer">
        <span
          className={`brand-status${
            brand.status === "ACTIVE"
              ? " brand-status-active"
              : " brand-status-exited"
          }`}
        >
          {brand.status}
        </span>
        <span className="brand-link">
          View on Instagram <span className="arrow">→</span>
        </span>
      </div>
    </a>
  );
}

export function BrandsParallax() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="brands-built-section" id="brands-built">
      <div className="brands-built-inner">
        <div className="section-2-eyebrow brands-built-eyebrow">
          Proof of playbook
        </div>
        <h2 className="brands-built-h2">
          The same playbook{" "}
          <span className="accent-text">built these brands.</span>
        </h2>
        <p className="brands-built-subhead">
          Before Rysen, Art Khan founded three Instagram-native brands across
          automotive customs, plumbing, and home cleaning, each becoming the
          fastest-growing brand in its category in the Midwest. Same
          hyperlocal focus. Same data discipline. Same compound-visibility
          playbook.
        </p>

        <div className="brands-built-grid brands-built-grid-parallax">
          {brands.map((b, i) => (
            <BrandCard
              key={b.handle}
              brand={b}
              hovered={hoveredIdx === i}
              anyHovered={hoveredIdx !== null}
              onHover={() => setHoveredIdx(i)}
              onLeave={() => setHoveredIdx(null)}
            />
          ))}
        </div>

        <p className="brands-built-footnote">
          Plus a personal brand of <FollowerCounter /> followers,{" "}
          <a
            href="https://www.instagram.com/arttkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="brands-built-footnote-link"
          >
            @arttkhan
          </a>
        </p>
      </div>
    </section>
  );
}
