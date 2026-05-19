import Link from "next/link";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";
import { WeeklyRail, WeeklyRailMobile } from "./WeeklyRail";

const FOUNDED = new Date("2019-01-01T00:00:00Z");

function currentWeekNumber(): number {
  const now = new Date();
  return Math.floor(
    (now.getTime() - FOUNDED.getTime()) / (1000 * 60 * 60 * 24 * 7)
  );
}

export function TheProcess() {
  const weekNumber = currentWeekNumber();

  return (
    <section className="the-process" aria-label="How we work">
      <div className="the-process__inner">
        <ScrollReveal>
          <p className="the-process__kicker">How we work.</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="the-process__heading">
            Five days a week. Since 2019.
          </h2>
        </ScrollReveal>

        <div className="the-process__rail">
          <WeeklyRail />
          <WeeklyRailMobile />
        </div>

        <ScrollReveal delay={240}>
          <p className="the-process__footer-line">
            Currently in week {weekNumber} of operation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <Link href="/how-we-work" className="the-process__link">
            Read about how we actually work.
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
