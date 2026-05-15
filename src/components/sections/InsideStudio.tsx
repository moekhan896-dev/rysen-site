"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, Calendar, Users } from "lucide-react";

export function InsideStudio() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [refreshing, setRefreshing] = useState(false);

  const onMonitorEnter = () => {
    setRefreshing(true);
    window.setTimeout(() => setRefreshing(false), 900);
  };

  return (
    <section className="inside-studio-section" id="inside-studio" ref={ref}>
      <div className="inside-studio-inner">
        <div className="is-header">
          <div className="section-2-eyebrow is-eyebrow">Inside the studio</div>
          <h2 className="is-h2">
            Detroit HQ.{" "}
            <span className="is-italic-accent">Built for output.</span>
          </h2>
          <p className="is-subhead">
            We're a small team operating out of downtown Detroit. Strategy
            work, content production, and weekly client reviews — all
            coordinated from one room, all reported in real numbers.
          </p>
        </div>

        <motion.div
          className="is-scene-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <svg
            className="is-scene"
            viewBox="0 0 1200 525"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Stylized illustration of the Rysen Detroit studio"
          >
            <defs>
              <linearGradient id="is-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f1ede1" />
                <stop offset="100%" stopColor="#e8e2d2" />
              </linearGradient>
              <linearGradient id="is-floor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d8d0bd" />
                <stop offset="100%" stopColor="#c4bca8" />
              </linearGradient>
              <linearGradient id="is-light" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255, 240, 200, 0.5)" />
                <stop offset="100%" stopColor="rgba(255, 240, 200, 0)" />
              </linearGradient>
              <pattern
                id="is-stripes"
                width="40"
                height="525"
                patternUnits="userSpaceOnUse"
              >
                <rect width="40" height="525" fill="url(#is-wall)" />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="525"
                  stroke="rgba(0,0,0,0.025)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            <rect x="0" y="0" width="1200" height="380" fill="url(#is-stripes)" />
            <rect x="0" y="380" width="1200" height="145" fill="url(#is-floor)" />
            <line
              x1="0"
              y1="380"
              x2="1200"
              y2="380"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
            />
            <rect x="0" y="0" width="1200" height="525" fill="url(#is-light)" />

            {/* Drifting data particles */}
            <g>
              <circle
                className="is-particle is-p1"
                cx="200"
                cy="120"
                r="2"
                fill="rgba(29, 78, 216, 0.45)"
              />
              <circle
                className="is-particle is-p2"
                cx="500"
                cy="80"
                r="2.5"
                fill="rgba(180, 130, 60, 0.4)"
              />
              <circle
                className="is-particle is-p3"
                cx="820"
                cy="150"
                r="2"
                fill="rgba(29, 78, 216, 0.35)"
              />
              <circle
                className="is-particle is-p4"
                cx="1050"
                cy="100"
                r="2"
                fill="rgba(180, 130, 60, 0.4)"
              />
            </g>

            {/* LEFT DESK */}
            <g
              className="is-element is-left-desk"
              onMouseEnter={onMonitorEnter}
              style={{ cursor: "pointer" }}
            >
              <rect x="60" y="360" width="320" height="14" rx="2" fill="#3a342a" />
              <rect x="74" y="374" width="6" height="80" fill="#3a342a" />
              <rect x="360" y="374" width="6" height="80" fill="#3a342a" />

              {/* Monitor */}
              <rect x="190" y="340" width="60" height="20" rx="2" fill="#2a2520" />
              <rect x="170" y="350" width="100" height="10" rx="2" fill="#1f1c18" />
              <rect x="110" y="180" width="220" height="160" rx="6" fill="#1a1a1f" />
              <rect x="118" y="188" width="204" height="144" rx="3" fill="#fafaf6" />

              {/* Dashboard mockup */}
              <rect x="126" y="196" width="60" height="6" rx="1" fill="#1a1a1f" />
              <rect x="190" y="196" width="30" height="6" rx="1" fill="#9a9aa3" />
              <g className={refreshing ? "is-dash-refresh" : ""}>
                <rect x="126" y="212" width="80" height="6" rx="1" fill="#1d4ed8" />
                <rect
                  x="126"
                  y="222"
                  width="120"
                  height="6"
                  rx="1"
                  fill="#1d4ed8"
                  opacity="0.55"
                />
                <rect
                  x="126"
                  y="232"
                  width="60"
                  height="6"
                  rx="1"
                  fill="#1d4ed8"
                  opacity="0.35"
                />
                <rect
                  x="126"
                  y="242"
                  width="100"
                  height="6"
                  rx="1"
                  fill="#1d4ed8"
                  opacity="0.7"
                />
              </g>
              <polyline
                points="126,290 150,280 174,285 198,265 222,272 246,255 270,260 294,245 314,250"
                stroke="#1d4ed8"
                strokeWidth="1.5"
                fill="none"
              />
              <line
                x1="126"
                y1="310"
                x2="314"
                y2="310"
                stroke="#1a1a1f"
                strokeOpacity="0.15"
                strokeWidth="0.5"
              />
              <text
                x="266"
                y="206"
                fontSize="6"
                fontFamily="Geist, system-ui, sans-serif"
                fill="#1d4ed8"
              >
                +12
              </text>

              {/* Coffee mug with steam */}
              <g>
                <rect x="60" y="332" width="28" height="28" rx="3" fill="#b48238" />
                <rect
                  x="86"
                  y="338"
                  width="6"
                  height="14"
                  rx="2"
                  fill="none"
                  stroke="#b48238"
                  strokeWidth="2"
                />
                <path
                  className="is-steam"
                  d="M70 326 Q 74 318, 70 312 Q 66 308, 70 302"
                  stroke="rgba(150,140,120,0.6)"
                  strokeWidth="1.2"
                  fill="none"
                />
              </g>

              {/* Papers */}
              <rect
                x="290"
                y="355"
                width="60"
                height="6"
                rx="1"
                fill="#fafaf6"
                stroke="#1a1a1f"
                strokeOpacity="0.1"
              />
              <rect
                x="294"
                y="350"
                width="58"
                height="6"
                rx="1"
                fill="#fafaf6"
                stroke="#1a1a1f"
                strokeOpacity="0.1"
              />
            </g>

            {/* MIDDLE WHITEBOARD */}
            <g className="is-element">
              <rect x="450" y="100" width="280" height="240" rx="4" fill="#3a342a" />
              <rect x="458" y="108" width="264" height="224" rx="2" fill="#fafaf6" />
              <rect x="468" y="118" width="80" height="6" rx="1" fill="#1a1a1f" />

              <g>
                <rect
                  x="468"
                  y="138"
                  width="76"
                  height="34"
                  rx="3"
                  fill="#fff7d9"
                  stroke="rgba(0,0,0,0.08)"
                />
                <text
                  x="474"
                  y="152"
                  fontSize="8"
                  fontFamily="Geist, sans-serif"
                  fill="#1a1a1f"
                >
                  Q1 Goals
                </text>
                <text
                  x="474"
                  y="164"
                  fontSize="6"
                  fontFamily="Geist, system-ui, sans-serif"
                  fill="#595964"
                >
                  3 metros · 6 firms
                </text>
              </g>
              <g>
                <rect
                  x="560"
                  y="138"
                  width="76"
                  height="34"
                  rx="3"
                  fill="#e6f0ff"
                  stroke="rgba(0,0,0,0.08)"
                />
                <text
                  x="566"
                  y="152"
                  fontSize="8"
                  fontFamily="Geist, sans-serif"
                  fill="#1a1a1f"
                >
                  Tampa Probate
                </text>
                <text
                  x="566"
                  y="164"
                  fontSize="6"
                  fontFamily="Geist, system-ui, sans-serif"
                  fill="#595964"
                >
                  AWS · live
                </text>
              </g>
              <g>
                <rect
                  x="652"
                  y="138"
                  width="64"
                  height="34"
                  rx="3"
                  fill="#fff7d9"
                  stroke="rgba(0,0,0,0.08)"
                />
                <text
                  x="658"
                  y="152"
                  fontSize="8"
                  fontFamily="Geist, sans-serif"
                  fill="#1a1a1f"
                >
                  Atlanta Family
                </text>
                <text
                  x="658"
                  y="164"
                  fontSize="6"
                  fontFamily="Geist, system-ui, sans-serif"
                  fill="#595964"
                >
                  in progress
                </text>
              </g>
              <g>
                <rect
                  x="468"
                  y="200"
                  width="120"
                  height="40"
                  rx="3"
                  fill="#e8f5e8"
                  stroke="rgba(0,0,0,0.08)"
                />
                <text
                  x="474"
                  y="216"
                  fontSize="9"
                  fontFamily="Geist, sans-serif"
                  fill="#1a1a1f"
                  fontWeight="500"
                >
                  Local Pack #1
                </text>
                <text
                  x="474"
                  y="230"
                  fontSize="6"
                  fontFamily="Geist, system-ui, sans-serif"
                  fill="#595964"
                >
                  priority active
                </text>
                <circle
                  className="is-pulse-dot"
                  cx="578"
                  cy="208"
                  r="3"
                  fill="#1d4ed8"
                />
              </g>

              {/* arrows */}
              <path
                d="M508 172 Q 520 188, 530 200"
                stroke="#1a1a1f"
                strokeOpacity="0.35"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M526 196 L 530 200 L 528 192"
                stroke="#1a1a1f"
                strokeOpacity="0.35"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M598 172 Q 588 192, 580 220"
                stroke="#1a1a1f"
                strokeOpacity="0.35"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M576 215 L 580 220 L 584 213"
                stroke="#1a1a1f"
                strokeOpacity="0.35"
                strokeWidth="1"
                fill="none"
              />

              <line
                x1="468"
                y1="270"
                x2="556"
                y2="270"
                stroke="#1a1a1f"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
              <line
                x1="468"
                y1="282"
                x2="600"
                y2="282"
                stroke="#1a1a1f"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
              <line
                x1="468"
                y1="294"
                x2="520"
                y2="294"
                stroke="#1a1a1f"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
              <line
                x1="468"
                y1="306"
                x2="640"
                y2="306"
                stroke="#1a1a1f"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
            </g>

            {/* RIGHT DESK */}
            <g className="is-element">
              <rect x="820" y="360" width="320" height="14" rx="2" fill="#3a342a" />
              <rect x="834" y="374" width="6" height="80" fill="#3a342a" />
              <rect x="1120" y="374" width="6" height="80" fill="#3a342a" />

              {/* Maps monitor */}
              <rect x="830" y="220" width="140" height="120" rx="5" fill="#1a1a1f" />
              <rect x="836" y="226" width="128" height="108" rx="3" fill="#fafaf6" />
              <rect x="842" y="232" width="116" height="60" rx="2" fill="#dde7d8" />
              <line x1="842" y1="252" x2="958" y2="252" stroke="#fff" strokeWidth="2" />
              <line x1="900" y1="232" x2="900" y2="292" stroke="#fff" strokeWidth="2" />
              <circle cx="876" cy="256" r="3" fill="#1d4ed8" />
              <circle cx="920" cy="244" r="3" fill="#1d4ed8" />
              <circle cx="940" cy="272" r="3" fill="#1d4ed8" />
              <rect x="842" y="298" width="80" height="4" rx="1" fill="#1a1a1f" />
              <rect x="842" y="306" width="100" height="3" rx="1" fill="#9a9aa3" />
              <rect x="842" y="314" width="70" height="3" rx="1" fill="#9a9aa3" />
              <rect x="842" y="322" width="90" height="3" rx="1" fill="#9a9aa3" />

              {/* Analytics monitor */}
              <rect x="985" y="220" width="140" height="120" rx="5" fill="#1a1a1f" />
              <rect x="991" y="226" width="128" height="108" rx="3" fill="#fafaf6" />
              <rect x="997" y="232" width="50" height="5" rx="1" fill="#1a1a1f" />
              <rect x="997" y="241" width="80" height="3" rx="1" fill="#9a9aa3" />
              <text
                x="997"
                y="266"
                fontSize="14"
                fontFamily="Geist, sans-serif"
                fontWeight="600"
                fill="#1d4ed8"
              >
                $2.4M
              </text>
              <polyline
                points="997,310 1010,302 1023,305 1036,290 1049,294 1062,280 1075,284 1088,272 1101,275 1114,260"
                stroke="#1d4ed8"
                strokeWidth="1.5"
                fill="none"
              />
              <line
                x1="997"
                y1="324"
                x2="1114"
                y2="324"
                stroke="#1a1a1f"
                strokeOpacity="0.15"
                strokeWidth="0.5"
              />

              <rect x="888" y="340" width="24" height="14" fill="#2a2520" />
              <rect x="1043" y="340" width="24" height="14" fill="#2a2520" />

              {/* Headphones */}
              <path
                d="M1110 220 Q 1130 215, 1140 240"
                stroke="#1a1a1f"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <rect x="1132" y="240" width="10" height="18" rx="3" fill="#1a1a1f" />
              <rect x="1106" y="240" width="10" height="18" rx="3" fill="#1a1a1f" />

              {/* Plant */}
              <g>
                <rect x="1140" y="338" width="22" height="22" rx="2" fill="#b48238" />
                <ellipse
                  cx="1151"
                  cy="332"
                  rx="4"
                  ry="8"
                  fill="#5a7c52"
                  transform="rotate(-20 1151 332)"
                />
                <ellipse cx="1156" cy="328" rx="4" ry="8" fill="#6b8d63" />
                <ellipse
                  cx="1145"
                  cy="325"
                  rx="3"
                  ry="6"
                  fill="#5a7c52"
                  transform="rotate(15 1145 325)"
                />
              </g>
            </g>
          </svg>
        </motion.div>

        <div className="is-captions">
          <CaptionCard
            icon={<Users size={16} strokeWidth={2} aria-hidden="true" />}
            title="14 Strategists"
            desc="In Detroit, working on every account"
            delay={0.2}
            inView={inView}
          />
          <CaptionCard
            icon={<Calendar size={16} strokeWidth={2} aria-hidden="true" />}
            title="Weekly Reviews"
            desc="Every client gets a standing meeting"
            delay={0.35}
            inView={inView}
          />
          <CaptionCard
            icon={<Activity size={16} strokeWidth={2} aria-hidden="true" />}
            title="Real-Time Dashboards"
            desc="Live reporting, not monthly PDFs"
            delay={0.5}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
}

interface CaptionCardProps {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly desc: string;
  readonly delay: number;
  readonly inView: boolean;
}

function CaptionCard({ icon, title, desc, delay, inView }: CaptionCardProps) {
  return (
    <motion.div
      className="is-caption-card"
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <div className="is-caption-icon">{icon}</div>
      <div className="is-caption-text">
        <div className="is-caption-title">{title}</div>
        <div className="is-caption-desc">{desc}</div>
      </div>
    </motion.div>
  );
}
