import { OperatorsBannerIllustration } from "@/components/illustrations/OperatorsBannerIllustration";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { Reveal } from "@/components/ui/Reveal";
import {
  QuattroGrowthChart,
  HonestPlumbersChart,
  HonestMaidsChart,
  MadisonClarkChart,
} from "./BrandGrowthCharts";

const PLUMBERS_PHOTO = "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=85";
const MAIDS_PHOTO = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=85";

export function BuiltByOperators() {
  return (
    <section className="operators" aria-label="Built by operators">
      <div className="operators__inner">
        <Reveal className="operators__header">
          <p className="operators__label">
            <span className="operators__label-marker" aria-hidden="true" /> 05 — Operators
          </p>
          <h2 className="operators__headline">
            <span className="operators__headline-line">
              We don&apos;t just market other companies.
            </span>
            <span className="operators__headline-line">
              We&apos;re entrepreneurs who made our{" "}
              <span className="operators__emph">
                OWN brands viral.
                <MarkerUnderline className="operators__emph-underline" />
              </span>
            </span>
          </h2>
          <p className="operators__sub">
            Before serving law firms and medical practices, our team built four
            brands from scratch. Real founders. Real audiences. The same
            proprietary data and AI stack we deploy for clients was first
            tested on our own ventures. This is how we know it works.
          </p>
        </Reveal>

        <Reveal className="operators__banner" delay={120}>
          <OperatorsBannerIllustration />
        </Reveal>

        <div className="operators__cards">
          {/* Card 1 — Quattro Labs */}
          <Reveal as="article" className="operator-card" delay={0}>
            <div className="operator-card__visual">
              <div className="operator-card__velocity">ZERO TO 150K · 4 YEARS</div>
              <LazyVideo
                className="operator-card__video"
                src="/assets/quattro-labs/car-meet-1.mp4"
                aspectRatio="9 / 16"
                ariaLabel="Quattro Labs car meet footage"
              />
            </div>
            <div className="operator-card__chart">
              <QuattroGrowthChart />
            </div>
            <div className="operator-card__body">
              <span className="operator-card__category">AUTOMOTIVE MEDIA · ACTIVE</span>
              <h3 className="operator-card__name">Quattro Labs</h3>
              <p className="operator-card__desc">
                Built from zero to 150,000+ Instagram followers since 2021. Active automotive media brand we run as our growth laboratory. Every algorithm change tested here first.
              </p>
              <div className="operator-card__metrics">
                <span>150K+ followers</span>
                <span>Active 4 years</span>
                <span>Auto · Detroit</span>
              </div>
            </div>
          </Reveal>

          {/* Card 2 — The Honest Plumbers */}
          <Reveal as="article" className="operator-card" delay={120}>
            <div className="operator-card__visual">
              <div className="operator-card__velocity">ZERO TO #1 · MICHIGAN</div>
              <img
                src={PLUMBERS_PHOTO}
                alt="Plumbing work"
                className="operator-card__image"
                loading="lazy"
                width={800}
                height={450}
              />
              <div className="operator-card__visual-overlay" aria-hidden="true" />
              <div className="operator-card__badge">#1 IN MICHIGAN</div>
            </div>
            <div className="operator-card__chart">
              <HonestPlumbersChart />
            </div>
            <div className="operator-card__body">
              <span className="operator-card__category">HOME SERVICE · STILL RUNNING</span>
              <h3 className="operator-card__name">The Honest Plumbers</h3>
              <p className="operator-card__desc">
                Michigan&apos;s most-followed plumbing brand on Instagram. Built from scratch in 2022. We operate it actively to prove our playbook in a vertical no one expected to win on social.
              </p>
              <div className="operator-card__metrics">
                <span>#1 IG · Michigan</span>
                <span>Active 3 years</span>
                <span>Home service</span>
              </div>
            </div>
          </Reveal>

          {/* Card 3 — The Honest Maids */}
          <Reveal as="article" className="operator-card" delay={240}>
            <div className="operator-card__visual">
              <div className="operator-card__velocity">ZERO TO #1 · MICHIGAN</div>
              <img
                src={MAIDS_PHOTO}
                alt="Cleaning service"
                className="operator-card__image"
                loading="lazy"
                width={800}
                height={450}
              />
              <div className="operator-card__visual-overlay" aria-hidden="true" />
              <div className="operator-card__badge">#1 IN MICHIGAN</div>
            </div>
            <div className="operator-card__chart">
              <HonestMaidsChart />
            </div>
            <div className="operator-card__body">
              <span className="operator-card__category">HOME SERVICE · ACTIVE</span>
              <h3 className="operator-card__name">The Honest Maids</h3>
              <p className="operator-card__desc">
                Michigan&apos;s most-followed cleaning brand on Instagram. Launched 2022. Same proof of method applied to a different vertical, same #1 result.
              </p>
              <div className="operator-card__metrics">
                <span>#1 IG · Michigan</span>
                <span>Active 3 years</span>
                <span>Home service</span>
              </div>
            </div>
          </Reveal>

          {/* Card 4 — Madison Clark */}
          <Reveal as="article" className="operator-card" delay={360}>
            <div className="operator-card__visual">
              <div className="operator-card__velocity">ZERO TO 100M · 60 DAYS</div>
              <div className="operator-card__viz">
                <div className="operator-card__viz-big">100M</div>
                <div className="operator-card__viz-label">VIEWS · 60 DAYS · ZERO AD SPEND</div>

                <svg className="operator-card__viz-curve" viewBox="0 0 400 80" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="madison-curve-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34C759" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#34C759" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 70 Q 80 68 120 65 Q 200 60 240 50 Q 320 35 400 5 L 400 80 L 0 80 Z"
                    fill="url(#madison-curve-fill)"
                  />
                  <path
                    d="M 0 70 Q 80 68 120 65 Q 200 60 240 50 Q 320 35 400 5"
                    stroke="#34C759"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="0" cy="70" r="3" fill="#34C759" />
                  <circle cx="120" cy="65" r="3" fill="#34C759" />
                  <circle cx="240" cy="50" r="3" fill="#34C759" />
                  <circle cx="400" cy="5" r="5" fill="#34C759" />
                  <circle cx="400" cy="5" r="12" fill="#34C759" opacity="0.25" />
                </svg>
              </div>
            </div>
            <div className="operator-card__chart">
              <MadisonClarkChart />
            </div>
            <div className="operator-card__body">
              <span className="operator-card__category">AI PERSONA · CASE STUDY</span>
              <h3 className="operator-card__name">Madison Clark</h3>
              <p className="operator-card__desc">
                Built and scaled an AI-generated persona to 100 million views in 60 days. Zero ad spend. Proof that the playbook compounds across any vertical, any format, any starting point.
              </p>
              <div className="operator-card__metrics">
                <span>100M views</span>
                <span>60 days</span>
                <span>Zero spend</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Gallery row: 3 more Quattro videos — lazy-loaded so only
            the in-view clip plays. Multiple high-res clips playing
            simultaneously was the source of the prior lag (not the
            source resolution). Source files preserved at full
            quality. */}
        <div className="operators__gallery">
          <figure className="operators__gallery-item">
            <LazyVideo
              className="operators__gallery-video"
              src="/assets/quattro-labs/car-meet-1.mp4"
              aspectRatio="16 / 9"
              ariaLabel="Quattro Labs car meet 2025"
            />
            <figcaption className="operators__gallery-caption">QUATTRO LABS · CAR MEET · 2025</figcaption>
          </figure>
          <figure className="operators__gallery-item">
            <LazyVideo
              className="operators__gallery-video"
              src="/assets/quattro-labs/car-meet-2.mp4"
              aspectRatio="16 / 9"
              ariaLabel="Quattro Labs Detroit 2025"
            />
            <figcaption className="operators__gallery-caption">QUATTRO LABS · DETROIT · 2025</figcaption>
          </figure>
          <figure className="operators__gallery-item">
            <LazyVideo
              className="operators__gallery-video"
              src="/assets/quattro-labs/car-meet-3.mp4"
              aspectRatio="16 / 9"
              ariaLabel="Quattro Labs meet highlights"
            />
            <figcaption className="operators__gallery-caption">QUATTRO LABS · MEET HIGHLIGHTS</figcaption>
          </figure>
        </div>

        <Reveal className="operators__aggregate" delay={120}>
          <div className="operators__agg-item">
            <div className="operators__agg-num">4</div>
            <div className="operators__agg-label">brands built from zero</div>
          </div>
          <div className="operators__agg-divider" aria-hidden="true" />
          <div className="operators__agg-item">
            <div className="operators__agg-num">~250K+</div>
            <div className="operators__agg-label">combined followers</div>
          </div>
          <div className="operators__agg-divider" aria-hidden="true" />
          <div className="operators__agg-item">
            <div className="operators__agg-num">~100M+</div>
            <div className="operators__agg-label">collective views generated</div>
          </div>
          <div className="operators__agg-divider" aria-hidden="true" />
          <div className="operators__agg-item">
            <div className="operators__agg-num">5 years</div>
            <div className="operators__agg-label">building our own ventures</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
