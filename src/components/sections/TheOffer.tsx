import Link from "next/link";
import {
  EstablishPathIllustration,
  DominatePathIllustration,
  ForkConnector,
  AuditIcon,
  PlanIcon,
  GBPIcon,
  AISearchIcon,
  RankingsIcon,
  AuthorityIcon,
  ReportingIcon,
  ExclusiveIcon,
  TeamIcon,
  ConversionIcon,
  ReviewsIcon,
  PressIcon,
  StrategyIcon,
} from "@/components/illustrations/PathIllustrations";
import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PATH_01_BULLETS = [
  { Icon: AuditIcon, label: "30-day comprehensive audit" },
  { Icon: PlanIcon, label: "Custom 12-month growth plan" },
  { Icon: GBPIcon, label: "Google Business Profile rebuild" },
  { Icon: AISearchIcon, label: "AI search optimization" },
  { Icon: RankingsIcon, label: "Local rankings program" },
  { Icon: AuthorityIcon, label: "Authority content engine" },
  { Icon: ReportingIcon, label: "Monthly attribution reporting" },
];

const PATH_02_BULLETS = [
  { Icon: AuditIcon, label: "Everything in Path 01" },
  { Icon: ExclusiveIcon, label: "Exclusive territory rights" },
  { Icon: TeamIcon, label: "Dedicated account team" },
  { Icon: ConversionIcon, label: "Custom landing page system" },
  { Icon: ReviewsIcon, label: "Reputation acceleration" },
  { Icon: PressIcon, label: "Press placement program" },
  { Icon: StrategyIcon, label: "Quarterly on-site strategy" },
];

export function TheOffer() {
  return (
    <section className="offer" aria-label="Engagement paths">
      <div className="offer__inner">
        <Reveal className="offer__header">
          <p className="offer__label">
            <span className="offer__label-marker" aria-hidden="true" />
            06 — Engagement
          </p>
          <h2 className="offer__headline">
            Two paths in.{" "}
            <span className="offer__highlight">
              One destination.
              <MarkerUnderline className="highlight-marker__underline" />
            </span>
          </h2>
          <p className="offer__sub">
            Two ways to work with us. Both start with a real conversation,
            not a sales pitch.
          </p>
        </Reveal>

        <div className="offer__paths-row">
          <Reveal as="article" className="path-card" delay={120}>
            <div className="path-card__illustration">
              <EstablishPathIllustration />
            </div>
            <div className="path-card__body">
              <div className="path-card__label">PATH 01</div>
              <h3 className="path-card__title">Establish.</h3>
              <p className="path-card__tagline">
                For firms ranked outside the top 5.
              </p>
              <p className="path-card__best">
                <span className="path-card__best-label">BEST FOR</span>
                New or growing firms ready to claim their metro position.
              </p>
              <div className="path-card__includes">
                <div className="path-card__includes-label">INCLUDES</div>
                <ul className="path-card__list">
                  {PATH_01_BULLETS.map(({ Icon, label }) => (
                    <li key={label}>
                      <Icon />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="path-card__cta">
                Apply for engagement <ArrowIcon />
              </Link>
            </div>
          </Reveal>

          <div className="offer__fork" aria-hidden="true">
            <ForkConnector />
          </div>

          <Reveal as="article" className="path-card path-card--featured" delay={260}>
            <div className="path-card__badge">MOST AGGRESSIVE</div>
            <div className="path-card__illustration">
              <DominatePathIllustration />
            </div>
            <div className="path-card__body">
              <div className="path-card__label">PATH 02</div>
              <h3 className="path-card__title">Dominate.</h3>
              <p className="path-card__tagline">
                For top-3 firms ready for metro lockup.
              </p>
              <p className="path-card__best">
                <span className="path-card__best-label">BEST FOR</span>
                Established firms ready to permanently close their metro.
              </p>
              <div className="path-card__includes">
                <div className="path-card__includes-label">INCLUDES</div>
                <ul className="path-card__list">
                  {PATH_02_BULLETS.map(({ Icon, label }) => (
                    <li key={label}>
                      <Icon />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="path-card__cta">
                Apply for engagement <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Session 55 — fit and exclusivity block, per audit. */}
        <Reveal className="offer__fit" delay={200}>
          <div className="offer__fit-label">HOW EXCLUSIVITY WORKS</div>
          <p className="offer__fit-body">
            We only take one firm per metro per vertical. A metro is a
            single defined market — usually a city and its immediate
            reach. If a competing firm in your specialty is already on
            the roster in your market, we&apos;ll tell you before the
            first call. Exclusivity holds for the full engagement.
          </p>
          <p className="offer__fit-body">
            We work best with established practices that already have
            real referrals and reputation and want to compound them
            through search. We&apos;re probably not the fit for very new
            practices without a book of business yet, or for firms
            looking for month-to-month vendor work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
