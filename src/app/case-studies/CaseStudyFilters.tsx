"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

export interface CaseStudyRecord {
  href: string;
  firm: string;
  vertical: "Legal" | "Medical" | "Special";
  practiceArea: string;
  resultType: ReadonlyArray<"Revenue" | "Ranking" | "Volume" | "Reputation" | "Velocity">;
  badge: string;
  challenge: string;
  stats: ReadonlyArray<{ value: string; label: string }>;
}

interface Props {
  cases: ReadonlyArray<CaseStudyRecord>;
  featured: ReadonlyArray<string>;
}

type Vertical = "All" | "Legal" | "Medical" | "Special";
type ResultType = "All" | "Revenue" | "Ranking" | "Volume" | "Reputation" | "Velocity";

export function CaseStudyFilters({ cases, featured }: Props) {
  const [vertical, setVertical] = useState<Vertical>("All");
  const [practiceArea, setPracticeArea] = useState<string>("All");
  const [resultType, setResultType] = useState<ResultType>("All");

  const availablePracticeAreas = useMemo(() => {
    const set = new Set<string>();
    cases
      .filter((c) => vertical === "All" || c.vertical === vertical)
      .forEach((c) => set.add(c.practiceArea));
    return ["All", ...Array.from(set).sort()];
  }, [cases, vertical]);

  const filtered = useMemo(() => {
    return cases.filter((c) => {
      if (vertical !== "All" && c.vertical !== vertical) return false;
      if (practiceArea !== "All" && c.practiceArea !== practiceArea) return false;
      if (resultType !== "All" && !c.resultType.includes(resultType)) return false;
      return true;
    });
  }, [cases, vertical, practiceArea, resultType]);

  const featuredCases = cases.filter((c) => featured.includes(c.href));

  function reset() {
    setVertical("All");
    setPracticeArea("All");
    setResultType("All");
  }

  return (
    <div className="case-studies-hub">
      {/* Featured */}
      <section className="case-studies-section">
        <div className="section-eyebrow" style={{ marginBottom: 24 }}>
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">Featured engagements</span>
        </div>
        <h2 className="case-studies-section-h2">Four engagements worth a longer read.</h2>
        <div className="featured-cases-grid">
          {featuredCases.map((c) => (
            <Link key={c.href} href={c.href} className="featured-case-card">
              <div className="featured-case-corner">
                <SignalTriangle size={14} decorative />
              </div>
              <div className="featured-case-badge">{c.badge}</div>
              <h3 className="featured-case-firm">{c.firm}</h3>
              <p className="featured-case-challenge">{c.challenge}</p>
              <div className="featured-case-stats">
                {c.stats.map((s) => (
                  <div key={s.label} className="featured-case-stat">
                    <span className="featured-case-stat-value">{s.value}</span>
                    <span className="featured-case-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <span className="featured-case-cta">
                Read case study
                <SignalTriangle size={9} decorative />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="case-studies-section">
        <div className="section-eyebrow" style={{ marginBottom: 24 }}>
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">The complete index</span>
        </div>
        <h2 className="case-studies-section-h2">Filter by vertical, practice area, or result.</h2>

        <div className="case-studies-filters">
          <FilterGroup label="Vertical">
            {(["All", "Legal", "Medical", "Special"] as Vertical[]).map((v) => (
              <FilterChip
                key={v}
                active={vertical === v}
                onClick={() => {
                  setVertical(v);
                  setPracticeArea("All");
                }}
              >
                {v}
              </FilterChip>
            ))}
          </FilterGroup>

          <FilterGroup label="Practice area">
            {availablePracticeAreas.map((p) => (
              <FilterChip
                key={p}
                active={practiceArea === p}
                onClick={() => setPracticeArea(p)}
              >
                {p}
              </FilterChip>
            ))}
          </FilterGroup>

          <FilterGroup label="Result type">
            {(["All", "Revenue", "Ranking", "Volume", "Reputation", "Velocity"] as ResultType[]).map(
              (r) => (
                <FilterChip
                  key={r}
                  active={resultType === r}
                  onClick={() => setResultType(r)}
                >
                  {r}
                </FilterChip>
              )
            )}
          </FilterGroup>

          {(vertical !== "All" || practiceArea !== "All" || resultType !== "All") && (
            <button
              type="button"
              onClick={reset}
              className="case-studies-filters-reset"
            >
              Reset filters
            </button>
          )}
        </div>

        <div className="case-studies-filters-count">
          {filtered.length} of {cases.length} engagements
        </div>

        {filtered.length === 0 ? (
          <div className="case-studies-empty">
            No engagements match the current filters.{" "}
            <button
              type="button"
              onClick={reset}
              className="case-studies-empty-reset"
            >
              Reset
            </button>
          </div>
        ) : (
          <div className="case-studies-index">
            {filtered.map((c) => (
              <Link key={c.href} href={c.href} className="case-index-row">
                <div className="case-index-firm">{c.firm}</div>
                <div className="case-index-meta">
                  <span className="case-index-vertical">{c.vertical}</span>
                  <span aria-hidden="true">·</span>
                  <span className="case-index-area">{c.practiceArea}</span>
                </div>
                <div className="case-index-stat">{c.stats[0]?.value ?? ""}</div>
                <SignalTriangle size={10} decorative />
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="filter-group">
      <div className="filter-group-label">{label}</div>
      <div className="filter-group-chips">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`filter-chip${active ? " is-active" : ""}`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
