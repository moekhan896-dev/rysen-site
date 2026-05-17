"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

const FOUNDING = new Date("2019-01-01T00:00:00Z");

function weeksSinceFounding(): number {
  const ms = Date.now() - FOUNDING.getTime();
  return Math.max(0, Math.floor(ms / (7 * 24 * 60 * 60 * 1000)));
}

export function Cadence() {
  const [weekNumber, setWeekNumber] = useState<number>(0);

  useEffect(() => {
    setWeekNumber(weeksSinceFounding());
    const id = setInterval(() => setWeekNumber(weeksSinceFounding()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="cadence-confidential-section" aria-label="The cadence">
      <div className="cadence-confidential-corner-mark" aria-hidden="true">
        <SignalTriangle size={12} decorative />
      </div>
      <div className="cadence-confidential">
        <ScrollReveal>
          <span className="cadence-confidential__label">The cadence</span>
        </ScrollReveal>
        <ScrollReveal delay={100} yOffset={0} duration={600}>
          <div className="cadence-confidential__rule" aria-hidden="true" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <h2 className="cadence-confidential__heading">
            Five days a week, since 2019.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={350}>
          <p className="cadence-confidential__description">
            Monday is data sync. Tuesday is strategy review. Wednesday is
            production. Thursday is quality assurance. Friday is client reports
            and internal retrospective. Standing meetings, named owners,
            documented decisions. The same rhythm every week, for six years
            running.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={500}>
          <p className="cadence-confidential__meta">
            Currently in week{" "}
            <span className="cadence-confidential__week">
              {weekNumber || 387}
            </span>{" "}
            of operation.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <Link href="/how-we-work" className="cadence-confidential__link">
            Read more about operations
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
