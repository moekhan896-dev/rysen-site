"use client";

import { useEffect } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { DividerWithMark } from "@/components/brand/DividerWithMark";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ContinueReading } from "@/components/primitives/ContinueReading";
import { AuditForm } from "@/components/sections/AuditForm";
import { BrandsParallax } from "@/components/sections/BrandsParallax";
import { FirmAtAGlance } from "@/components/sections/FirmAtAGlance";
import { HeroSearchAnimation } from "@/components/sections/HeroSearchAnimation";
import { WhatThisMeans } from "@/components/sections/WhatThisMeans";
import { CaseStudySlider } from "@/components/sections/CaseStudySlider";
import { CredibilityBand } from "@/components/sections/CredibilityBand";
import { EditorialBeat } from "@/components/sections/EditorialBeat";
import { PressRecognition } from "@/components/sections/PressRecognition";
import { RevenueClaim } from "@/components/sections/RevenueClaim";
import { ThoughtLeadership } from "@/components/sections/ThoughtLeadership";
import { FounderSection } from "@/components/sections/FounderSection";
import { GrowthChart } from "@/components/sections/GrowthChart";
import { InsideStudio } from "@/components/sections/InsideStudio";
import { InteractiveStats } from "@/components/sections/InteractiveStats";
import { MethodologyExplorer } from "@/components/sections/MethodologyExplorer";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { DataDrivenEdge } from "@/components/sections/DataDrivenEdge";
import { LegalPlaybook } from "@/components/sections/LegalPlaybook";
import { MedicalPlaybook } from "@/components/sections/MedicalPlaybook";
import { MadisonCredibility } from "@/components/sections/MadisonCredibility";
import { OrganicGrowthEngine } from "@/components/sections/OrganicGrowthEngine";
import { RealOperations } from "@/components/sections/RealOperations";
import { TenComponents } from "@/components/sections/TenComponents";
import { WhyUsClosing } from "@/components/sections/WhyUsClosing";
import { TeamFilter } from "@/components/sections/TeamFilter";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";

const HERO_HEADLINE =
  "A boutique agency for law firms and medical practices that intend to organically dominate their market.";

const HERO_CLARITY: ReadonlyArray<{ label: string; value: string }> = [
  { label: "What we build", value: "Organic Growth Engines" },
  { label: "For", value: "Law firms & medical practices" },
  { label: "How", value: "10 coordinated components, data-driven" },
  { label: "Where", value: "Detroit, MI · 100% US team" },
];

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const heroBlockVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, delay: 0.2, ease: [0.19, 1, 0.22, 1] },
        },
  };

  const subheadVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, delay: 0.6, ease: [0.19, 1, 0.22, 1] },
        },
  };

  const proofVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 1,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.2,
          },
        },
  };

  const proofItemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  useEffect(() => {
    // Track all timers, rAF, injected styles, and event listeners for cleanup
    const intervals: ReturnType<typeof setInterval>[] = [];
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const injectedStyles: HTMLStyleElement[] = [];
    const cleanups: Array<() => void> = [];
    let rafId: number | null = null;
    let cancelled = false;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // === PAGE AMBIENT (rAF-throttled). Nav scroll state is handled by Nav.tsx. ===
    const pageAmbient = document.getElementById("pageAmbient");
    if (pageAmbient) {
      let lastScrollY = 0;
      let scrollTicking = false;
      let ambientVisible = false;
      const onScroll = () => {
        lastScrollY = window.scrollY;
        if (!scrollTicking) {
          requestAnimationFrame(() => {
            const vh = window.innerHeight;
            if (!ambientVisible && lastScrollY > vh * 0.5) {
              pageAmbient.style.opacity = "1";
              ambientVisible = true;
            } else if (ambientVisible && lastScrollY < vh * 0.3) {
              pageAmbient.style.opacity = "0";
              ambientVisible = false;
            }
            scrollTicking = false;
          });
          scrollTicking = true;
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    // === MOUSE-FOLLOWING AMBIENT GLOW ===
    if (!prefersReducedMotion) {
      const mouseGlow = document.getElementById("mouseGlow");
      if (mouseGlow) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let glowX = mouseX;
        let glowY = mouseY;
        let glowVisible = false;

        const onMouseMove = (e: MouseEvent) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          if (!glowVisible) {
            mouseGlow.style.opacity = "1";
            glowVisible = true;
          }
        };
        const onMouseLeave = () => {
          mouseGlow.style.opacity = "0";
          glowVisible = false;
        };
        document.addEventListener("mousemove", onMouseMove, { passive: true });
        document.addEventListener("mouseleave", onMouseLeave);
        cleanups.push(() => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseleave", onMouseLeave);
        });

        const animateGlow = () => {
          if (cancelled) return;
          glowX += (mouseX - glowX) * 0.06;
          glowY += (mouseY - glowY) * 0.06;
          mouseGlow.style.transform = `translate3d(${glowX - 260}px, ${glowY - 260}px, 0)`;
          rafId = requestAnimationFrame(animateGlow);
        };
        rafId = requestAnimationFrame(animateGlow);
      }
    }

    // === CURSOR PARALLAX ===
    const group = document.getElementById("cardGroup");
    const heroVisual = document.querySelector<HTMLElement>(".hero-visual");
    if (group && heroVisual) {
      const onHeroMove = (e: MouseEvent) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        group.style.transform = `rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
      };
      const onHeroLeave = () => {
        group.style.transform = "rotateY(0) rotateX(0)";
      };
      heroVisual.addEventListener("mousemove", onHeroMove, { passive: true });
      heroVisual.addEventListener("mouseleave", onHeroLeave);
      cleanups.push(() => {
        heroVisual.removeEventListener("mousemove", onHeroMove);
        heroVisual.removeEventListener("mouseleave", onHeroLeave);
      });
    }

    // === FLOATING PARTICLES ===
    if (!prefersReducedMotion) {
      const particlesContainer = document.getElementById("particles");
      if (particlesContainer) {
        const PARTICLE_POOL = 8;

        const particleStyle = document.createElement("style");
        particleStyle.textContent = `
          @keyframes particleFloat {
            0% { transform: translate3d(0, 0, 0); opacity: 0; }
            10% { opacity: 0.55; }
            90% { opacity: 0.55; }
            100% { transform: translate3d(40px, -130vh, 0); opacity: 0; }
          }
        `;
        document.head.appendChild(particleStyle);
        injectedStyles.push(particleStyle);

        const spawnParticle = () => {
          if (cancelled) return;
          const p = document.createElement("div");
          p.className = "particle";
          const size = 2 + Math.random() * 3;
          p.style.width = `${size}px`;
          p.style.height = `${size}px`;
          p.style.left = `${Math.random() * 100}vw`;
          p.style.top = `${100 + Math.random() * 20}vh`;
          p.style.background =
            Math.random() > 0.6
              ? "rgba(245, 197, 24, 0.4)"
              : "rgba(180, 130, 60, 0.3)";
          const duration = 14 + Math.random() * 16;
          p.style.animation = `particleFloat ${duration}s linear forwards`;
          particlesContainer.appendChild(p);

          const t = setTimeout(() => {
            p.remove();
            if (!cancelled) spawnParticle();
          }, duration * 1000);
          timeouts.push(t);
        };

        for (let i = 0; i < PARTICLE_POOL; i++) {
          const t = setTimeout(spawnParticle, i * 1500);
          timeouts.push(t);
        }

        cleanups.push(() => {
          // Clear remaining particles so a remount in StrictMode doesn't pile them up
          while (particlesContainer.firstChild) {
            particlesContainer.removeChild(particlesContainer.firstChild);
          }
        });
      }
    }

    // === SCROLL REVEAL (IntersectionObserver) ===
    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      const revealEls = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]")
      );
      if (revealEls.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const el = entry.target as HTMLElement;
                const delay = el.dataset.revealDelay ?? "0";
                el.style.transitionDelay = `${delay}ms`;
                el.classList.add("revealed");
                observer.unobserve(el);
              }
            });
          },
          { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
        );
        revealEls.forEach((el) => observer.observe(el));
        cleanups.push(() => observer.disconnect());
      }
    } else if (prefersReducedMotion) {
      // Reduced motion: reveal everything immediately, no transitions
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("revealed"));
    }

    // === HERO SCROLL TRACKING (persistent ambient only — floating CTA is always visible) ===
    const heroSection = document.querySelector<HTMLElement>(".hero");
    const persistentAmbient = document.getElementById("persistentAmbient");
    const persistentGrain = document.getElementById("persistentGrain");
    if (heroSection && "IntersectionObserver" in window) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const past = !entry.isIntersecting;
            if (persistentAmbient)
              persistentAmbient.classList.toggle("visible", past);
            if (persistentGrain)
              persistentGrain.classList.toggle("visible", past);
          });
        },
        { threshold: 0 }
      );
      heroObserver.observe(heroSection);
      cleanups.push(() => heroObserver.disconnect());
    }

    // === COUNT-UP ANIMATION for [data-count-to] ===
    const countEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count-to]")
    );
    if (countEls.length > 0 && "IntersectionObserver" in window) {
      const countSeen = new Set<HTMLElement>();
      const easeOutExpo = (t: number): number =>
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const animateCount = (el: HTMLElement, target: number) => {
        if (prefersReducedMotion) {
          el.textContent = target.toLocaleString();
          return;
        }
        const duration = 1500;
        const start = performance.now();
        const frame = (now: number) => {
          if (cancelled) return;
          const t = Math.min((now - start) / duration, 1);
          const eased = easeOutExpo(t);
          const current = Math.round(eased * target);
          el.textContent = current.toLocaleString();
          if (t < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      };
      const countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            if (countSeen.has(el)) return;
            countSeen.add(el);
            const target = Number(el.dataset.countTo ?? "0");
            if (Number.isFinite(target)) animateCount(el, target);
            countObserver.unobserve(el);
          });
        },
        { threshold: 0.3 }
      );
      countEls.forEach((el) => countObserver.observe(el));
      cleanups.push(() => countObserver.disconnect());
    }

    // === PROCESS LINE DRAW (scroll progress) ===
    const processSection =
      document.querySelector<HTMLElement>(".process-section");
    const processSteps =
      document.querySelector<HTMLElement>(".process-steps");
    if (
      processSection &&
      processSteps &&
      !prefersReducedMotion &&
      "IntersectionObserver" in window
    ) {
      let processRafId: number | null = null;
      const updateLineProgress = () => {
        if (cancelled) return;
        const rect = processSection.getBoundingClientRect();
        const vh = window.innerHeight;
        const startCross = vh * 0.7;
        const endCross = vh * 0.3;
        const denom = rect.height - (vh - startCross - endCross);
        let progress = 0;
        if (denom > 0) progress = (startCross - rect.top) / denom;
        progress = Math.max(0, Math.min(1, progress));
        processSteps.style.setProperty("--line-progress", String(progress));
      };
      const onProcessScroll = () => {
        if (processRafId !== null) return;
        processRafId = requestAnimationFrame(() => {
          updateLineProgress();
          processRafId = null;
        });
      };
      const processObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateLineProgress();
              window.addEventListener("scroll", onProcessScroll, {
                passive: true,
              });
            } else {
              window.removeEventListener("scroll", onProcessScroll);
            }
          });
        },
        { threshold: 0, rootMargin: "200px 0px 200px 0px" }
      );
      processObserver.observe(processSection);
      cleanups.push(() => {
        processObserver.disconnect();
        window.removeEventListener("scroll", onProcessScroll);
        if (processRafId !== null) cancelAnimationFrame(processRafId);
      });
    } else if (processSteps && prefersReducedMotion) {
      processSteps.style.setProperty("--line-progress", "1");
    }

    // === DEMO LOOP ===
    const QUERY = "personal injury lawyer miami";
    const queryEl = document.getElementById("searchQuery");
    const cursorEl = document.getElementById("searchCursor");
    const mapResults = document.getElementById("mapResults");
    const rankBadge = document.getElementById("rankBadge");
    const gptResponse = document.getElementById("gptResponse");
    const pplxText = document.getElementById("pplxText");
    const notif1 = document.getElementById("notif1");
    const notif2 = document.getElementById("notif2");
    const notif3 = document.getElementById("notif3");

    if (
      queryEl &&
      cursorEl &&
      mapResults &&
      rankBadge &&
      gptResponse &&
      pplxText &&
      notif1 &&
      notif2 &&
      notif3
    ) {
      const topRankRow = mapResults.querySelector<HTMLElement>(
        '[data-id="beach"]'
      );
      if (topRankRow) {
        // Capture as locals so TS preserves narrowing inside async closures
        const queryElLocal = queryEl;
        const cursorElLocal = cursorEl;
        const mapResultsLocal = mapResults;
        const rankBadgeLocal = rankBadge;
        const gptResponseLocal = gptResponse;
        const pplxTextLocal = pplxText;
        const notif1Local = notif1;
        const notif2Local = notif2;
        const notif3Local = notif3;
        const topRankRowLocal = topRankRow;

        const initialOrder = ["miami", "coast", "beach"];

        const gptText: ReadonlyArray<{ text: string; strong: boolean }> = [
          { text: "Based on consistent client outcomes, ", strong: false },
          { text: "Beachside Law Partners", strong: true },
          {
            text: " stands out as the top personal injury practice in Miami. They've recovered over $2.4B for clients.",
            strong: false,
          },
        ];

        const pplxFullText = `<strong>Beachside Law Partners</strong> is widely regarded as Miami's leading personal injury practice<sup style="color: var(--accent); font-size: 9px; margin-left: 1px;">[1]</sup>`;

        const sleep = (ms: number) =>
          new Promise<void>((resolve) => {
            const t = setTimeout(() => resolve(), ms);
            timeouts.push(t);
          });

        const reset = () => {
          queryElLocal.textContent = "";
          cursorElLocal.style.display = "inline-block";
          rankBadgeLocal.classList.remove("visible");

          initialOrder.forEach((id) => {
            const row = mapResultsLocal.querySelector<HTMLElement>(
              `[data-id="${id}"]`
            );
            if (row) mapResultsLocal.appendChild(row);
          });
          topRankRowLocal.classList.remove("highlighted-active");
          // Clear any inline transform/transition left over from a previous loop iteration
          topRankRowLocal.style.transform = "";
          topRankRowLocal.style.transition = "";

          gptResponseLocal.innerHTML = "";
          pplxTextLocal.innerHTML = "";

          notif1Local.classList.remove("visible");
          notif2Local.classList.remove("visible");
          notif3Local.classList.remove("visible");
        };

        const typeQuery = async () => {
          for (let i = 0; i < QUERY.length; i++) {
            if (cancelled) return;
            queryElLocal.textContent = QUERY.slice(0, i + 1);
            await sleep(45 + Math.random() * 30);
          }
          if (cancelled) return;
          cursorElLocal.style.display = "none";
        };

        const rerank = async () => {
          await sleep(400);
          if (cancelled) return;
          const startBox = topRankRowLocal.getBoundingClientRect();
          mapResultsLocal.insertBefore(topRankRowLocal, mapResultsLocal.firstChild);
          const endBox = topRankRowLocal.getBoundingClientRect();
          const dy = startBox.top - endBox.top;

          topRankRowLocal.style.transform = `translateY(${dy}px)`;
          topRankRowLocal.style.transition = "none";
          requestAnimationFrame(() => {
            if (cancelled) return;
            topRankRowLocal.style.transition =
              "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
            topRankRowLocal.style.transform = "translateY(0)";
          });

          await sleep(400);
          if (cancelled) return;
          rankBadgeLocal.classList.add("visible");
          await sleep(200);
          if (cancelled) return;
          topRankRowLocal.classList.add("highlighted-active");

          await sleep(300);
          if (cancelled) return;
          notif1Local.classList.add("visible");
        };

        const streamGPT = async () => {
          gptResponseLocal.innerHTML =
            '<span class="gpt-streaming-cursor"></span>';
          let html = "";
          let mentionedAWS = false;

          for (const segment of gptText) {
            const words = segment.text.split(" ");
            for (let i = 0; i < words.length; i++) {
              if (cancelled) return;
              const word =
                words[i] +
                (i < words.length - 1 || segment.strong ? " " : "");
              if (segment.strong) {
                if (i === 0) html += "<strong>";
                html += word;
                if (i === words.length - 1) {
                  html = html.slice(0, -1) + "</strong> ";
                  if (!mentionedAWS) {
                    mentionedAWS = true;
                    const t = setTimeout(() => {
                      if (!cancelled) notif2Local.classList.add("visible");
                    }, 200);
                    timeouts.push(t);
                  }
                }
              } else {
                html += word;
              }
              gptResponseLocal.innerHTML =
                html + '<span class="gpt-streaming-cursor"></span>';
              await sleep(60);
            }
          }
          if (cancelled) return;
          gptResponseLocal.innerHTML = html;
        };

        const revealPerplexity = async () => {
          await sleep(200);
          if (cancelled) return;
          pplxTextLocal.innerHTML = pplxFullText;
          pplxTextLocal.style.opacity = "0";
          pplxTextLocal.style.transition = "opacity 0.6s ease";
          requestAnimationFrame(() => {
            if (cancelled) return;
            pplxTextLocal.style.opacity = "1";
          });
          const t = setTimeout(() => {
            if (!cancelled) notif3Local.classList.add("visible");
          }, 800);
          timeouts.push(t);
        };

        const runDemo = async () => {
          reset();
          await sleep(400);
          if (cancelled) return;
          await typeQuery();
          if (cancelled) return;
          await sleep(400);
          if (cancelled) return;
          await rerank();
          if (cancelled) return;
          await sleep(500);
          if (cancelled) return;

          // These two run concurrently in v17
          streamGPT();
          revealPerplexity();

          await sleep(7000);
        };

        const loop = async () => {
          while (!cancelled) {
            await runDemo();
            if (cancelled) return;
            await sleep(2500);
          }
        };

        const startTimeout = setTimeout(() => {
          if (!cancelled) loop();
        }, 800);
        timeouts.push(startTimeout);
      }
    }

    return () => {
      cancelled = true;
      intervals.forEach(clearInterval);
      timeouts.forEach(clearTimeout);
      if (rafId !== null) cancelAnimationFrame(rafId);
      injectedStyles.forEach((el) => el.remove());
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      {/* Page-wide ambient gradient — fades in past first viewport */}
      <div className="page-ambient" id="pageAmbient" aria-hidden="true"></div>
      <div className="persistent-ambient" id="persistentAmbient" aria-hidden="true"></div>
      <div className="persistent-grain" id="persistentGrain" aria-hidden="true"></div>
      <div className="particles" id="particles"></div>
      <div className="mouse-glow" id="mouseGlow"></div>

      {/* === HERO — Rebrand 2.0 (Session 24 — two-column + clarity block + search animation) === */}
      <section className="hero-rebrand" aria-label="Hero">
        <div className="hero-rebrand-corner-mark">
          <AmbientTriangle size={16} />
        </div>

        <div className="hero-rebrand-grid">
          <div className="hero-rebrand-content">
            <div className="hero-rebrand-masthead">
              <hr className="hero-rebrand-masthead-rule" aria-hidden="true" />
              <div className="hero-rebrand-masthead-row">
                <span className="hero-rebrand-masthead-item">
                  Detroit, Michigan · Founded 2019
                </span>
                <span className="hero-rebrand-masthead-item">
                  An independent firm
                </span>
              </div>
            </div>

            <motion.h1
              className="hero-rebrand-headline"
              variants={heroBlockVariants}
              initial="hidden"
              animate="visible"
            >
              {HERO_HEADLINE}
            </motion.h1>

            <motion.p
              className="hero-rebrand-subhead"
              variants={subheadVariants}
              initial="hidden"
              animate="visible"
            >
              Run by people who have actually built brands of their own,
              supported by a data science team that measures every dollar in
              revenue, not impressions. A US-based firm that puts its
              methodology where its money is.
            </motion.p>

            <motion.div
              className="hero-clarity-block"
              variants={proofVariants}
              initial="hidden"
              animate="visible"
            >
              <hr className="hero-clarity-rule" aria-hidden="true" />
              <div className="hero-clarity-grid">
                {HERO_CLARITY.map((item) => (
                  <motion.div
                    key={item.label}
                    className="clarity-item"
                    variants={proofItemVariants}
                  >
                    <span className="clarity-label">{item.label}</span>
                    <span className="clarity-value">{item.value}</span>
                  </motion.div>
                ))}
              </div>
              <hr className="hero-clarity-rule" aria-hidden="true" />
            </motion.div>

            <div className="hero-rebrand-cta-row">
              <a href="/audit" className="hero-rebrand-cta-primary">
                Request audit
              </a>
              <a href="/case-studies" className="hero-rebrand-cta-secondary">
                View case studies
                <SignalTriangle size={10} decorative />
              </a>
            </div>
          </div>

          <div className="hero-rebrand-visual">
            <HeroSearchAnimation />
          </div>
        </div>
      </section>

      {/* === LEGITIMACY EVIDENCE (Session 25 — front-loaded so a prospect
              sees real-firm signals within the first 1-2 scrolls) === */}

      <FirmAtAGlance />

      <FounderSection />

      <WhatThisMeans />

      <RealOperations />

      <div style={{ background: "var(--paper)", padding: "0 64px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <ContinueReading href="/how-we-work" label="Read about our operations" context="paper" />
      </div>

      <DividerWithMark context="paper" />

      <TeamFilter />

      <DividerWithMark context="paper" />

      <CredibilityBand />

      {/* Activity ticker removed in Session 23 rebrand */}
      <section className="activity-ticker" hidden aria-hidden="true" style={{ display: "none" }}>
        <div className="ticker-wrap">
          <div className="ticker-label">
            <span className="ticker-pulse"></span>
            Live
          </div>
          <div className="ticker-track">
            <div className="ticker-content" id="tickerContent">
              <span className="ticker-item">
                <strong>AWS Law Firm</strong> ranked #1 for "probate lawyer
                tampa" <span className="delta">↑ 9 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Tyler Family Law</strong> +1,240% lead volume in
                Atlanta <span className="delta">↑ 8 months</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Hartman Dermatology</strong> cited by ChatGPT for Miami
                dermatology <span className="delta">↑ 47 mentions</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Coleman & Co.</strong> ranked #1 for "estate
                attorney los angeles"{" "}
                <span className="delta">↑ 12 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Vance Legal</strong> +3 positions in Chicago local pack{" "}
                <span className="delta">↑ 3 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Meridian Health</strong> featured snippet captured{" "}
                <span className="delta">↑ Position 0 NYC</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Ridge Dental</strong> primary citation on Perplexity{" "}
                <span className="delta">+ new</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Rysen team meeting</strong> · Detroit HQ · Weekly client
                reviews <span className="delta">↑ on track</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>AWS Law Firm</strong> · Detroit team executing Tampa
                local SEO campaign <span className="delta">↑ live</span>
              </span>
              <span className="ticker-divider">●</span>
              {/* Duplicate for seamless loop */}
              <span className="ticker-item">
                <strong>AWS Law Firm</strong> ranked #1 for "probate lawyer
                tampa" <span className="delta">↑ 9 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Tyler Family Law</strong> +1,240% lead volume in
                Atlanta <span className="delta">↑ 8 months</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Hartman Dermatology</strong> cited by ChatGPT for Miami
                dermatology <span className="delta">↑ 47 mentions</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Coleman & Co.</strong> ranked #1 for "estate
                attorney los angeles"{" "}
                <span className="delta">↑ 12 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Vance Legal</strong> +3 positions in Chicago local pack{" "}
                <span className="delta">↑ 3 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Meridian Health</strong> featured snippet captured{" "}
                <span className="delta">↑ Position 0 NYC</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Ridge Dental</strong> primary citation on Perplexity{" "}
                <span className="delta">+ new</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Rysen team meeting</strong> · Detroit HQ · Weekly client
                reviews <span className="delta">↑ on track</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>AWS Law Firm</strong> · Detroit team executing Tampa
                local SEO campaign <span className="delta">↑ live</span>
              </span>
              <span className="ticker-divider">●</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="trust-label">
          Trusted by law firms and medical practices across Florida, California,
          Illinois, and New York
        </div>
        <div className="trust-logos">
          <span>AWS Law</span>
          <span>Hartman MD</span>
          <span>Coleman & Co.</span>
          <span>Ridge Dental</span>
          <span>Vance Legal</span>
        </div>
      </section>

      {/* === EDITORIAL BEAT (V4 — noise vs live revenue feed) === */}
      <EditorialBeat />

      {/* === THE SHIFT (then / now comparison) === */}
      <section className="section-2 section-2-comparison">
        <div className="section-2-framing">
          <div className="section-2-eyebrow">The shift</div>
          <h2 className="section-2-h2">
            SEO is no longer just <span className="accent-text">SEO.</span>
          </h2>
        </div>

        <div className="shift-grid">
          {/* LEFT — BEFORE */}
          <div className="shift-col shift-col-before">
            <div className="shift-eyebrow shift-eyebrow-before">Before</div>
            <div className="shift-browser">
              <div className="shift-browser-header">
                <span className="shift-browser-traffic">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="shift-browser-url">google.com</span>
              </div>
              <div className="shift-browser-body">
                <div className="shift-search-bar">
                  <span className="shift-search-icon" aria-hidden="true">
                    ⌕
                  </span>
                  <span className="shift-search-query">
                    best probate lawyer tampa
                  </span>
                </div>
                <div className="shift-result-line"></div>
                <div className="shift-result-line shift-result-line-2"></div>
                <div className="shift-result-line shift-result-line-3"></div>
              </div>
            </div>
          </div>

          {/* MID divider */}
          <div className="shift-divider" aria-hidden="true"></div>

          {/* RIGHT — NOW */}
          <div className="shift-col shift-col-now">
            <div className="shift-eyebrow shift-eyebrow-now">Now</div>
            <div className="shift-surfaces">
              <div className="shift-surface shift-surface-1">
                <div className="shift-surface-label">ChatGPT</div>
                <div className="shift-surface-snippet">
                  …<strong>AWS Law Firm</strong> stands out as the top probate
                  practice in Tampa…
                </div>
              </div>
              <div className="shift-surface shift-surface-2">
                <div className="shift-surface-label">Perplexity</div>
                <div className="shift-surface-snippet">
                  <strong>AWS Law Firm</strong> is widely regarded as Tampa's
                  leading probate practice
                  <sup>[1]</sup>
                </div>
              </div>
              <div className="shift-surface shift-surface-3">
                <div className="shift-surface-label">Google AIO</div>
                <div className="shift-surface-snippet">
                  Tampa's leading probate firm, often cited:{" "}
                  <strong>AWS Law Firm</strong>.
                </div>
              </div>
              <div className="shift-surface shift-surface-4">
                <div className="shift-surface-label">Maps</div>
                <div className="shift-surface-snippet">
                  <span className="shift-surface-rank">#1</span>{" "}
                  <strong>AWS Law Firm</strong> · ★ 4.9 · 412
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="section-2-subhead">
          Your future clients aren't just Googling. They're asking
          ChatGPT, Perplexity, and Google AI Overviews which firm to call.
          They're checking your reviews on Google Maps. They're
          scrolling the local 3-pack. We make sure the answer is yours —
          across every surface that matters.
        </p>
      </section>

      {/* === STATS SECTION (interactive) === */}
      <InteractiveStats />

      {/* === ORGANIC GROWTH ENGINE (Session 16 — proprietary system definition) === */}
      <OrganicGrowthEngine />

      <div style={{ background: "var(--ink)", padding: "0 64px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ContinueReading href="/methodology" label="Read the full methodology" context="ink" />
        </div>
      </div>

      {/* === REVENUE CLAIM ($47M+ counter) === */}
      <RevenueClaim />

      {/* === MADISON CLARK CREDIBILITY (Session 17) === */}
      <MadisonCredibility />

      <div style={{ background: "var(--paper)", padding: "0 64px 48px", margin: "0 auto" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ContinueReading href="/case-studies/madison-clark" label="Read the Madison Clark case study" context="paper" />
        </div>
      </div>

      {/* === TEN COMPONENTS (Session 17 — Social Media added as 10th) === */}
      <TenComponents />

      <div style={{ background: "var(--paper)", padding: "0 64px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ContinueReading href="/services" label="Explore all ten components" context="paper" />
        </div>
      </div>

      {/* === DATA-DRIVEN EDGE (Session 16 — 7 live data systems) === */}
      <DataDrivenEdge />

      <div style={{ background: "var(--ink)", padding: "0 64px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ContinueReading href="/how-we-measure" label="Read how we measure" context="ink" />
        </div>
      </div>

      {/* === METHODOLOGY (FIRST POSITION) — accordion explorer === */}
      <MethodologyExplorer />

      {/* === PROCESS SECTION (scroll-driven timeline) === */}
      <ProcessTimeline />

      {/* === CASE STUDY SECTION === */}
      <section className="case-study-section" id="case-study">
        <div className="case-study-inner">
          <div className="case-study-content">
            <div className="section-2-eyebrow">Case study</div>
            <h2 className="case-study-h2">
              AWS Law Firm: Tampa's{" "}
              <span className="accent-text">leading probate practice.</span>
            </h2>
            <div className="case-study-prose">
              <p>
                When AWS Law Firm came to us in early 2024, they were a
                respected Tampa probate and estate planning practice — but
                invisible online. They were buried on page two of Google for
                their primary keywords. Zero mentions in ChatGPT when prospects
                asked who the best probate lawyer in Tampa was.
              </p>
              <p>
                Our audit surfaced the gaps quickly. No schema markup. Thin
                practice-area pages. No active citation strategy. Strong
                content existed, but it wasn't structured for AI
                consumption. The competitive landscape was dominated by
                national legal directory sites with deeper budgets but weaker
                local authority.
              </p>
              <p>
                We rebuilt their site architecture for AI search. We produced
                fifteen long-form authority pieces on probate, estate planning,
                trust administration, and inheritance law — each designed to
                be cited by AI models. We executed a citation campaign across
                200+ legal industry platforms. We optimized their Google
                Business Profile and built specialty landing pages for every
                service area.
              </p>
              <p>
                Twenty-two months later: ranked #1 for "probate lawyer
                tampa" and "estate planning attorney tampa." 240%
                increase in qualified consultation requests. Cited in 52% of
                relevant ChatGPT queries about Tampa probate and estate
                matters. The firm now operates a 6-week waitlist for new estate
                planning consultations.
              </p>
            </div>
            <a
              href="/case-studies/aws-law-firm"
              className="case-study-link"
            >
              Read full case study <span className="arrow">→</span>
            </a>
          </div>

          <div className="case-study-stats">
            <div
              className="case-stat case-stat-1"
              data-reveal
              data-reveal-delay="0"
            >
              <div className="case-stat-num">#1</div>
              <div className="case-stat-label">Ranked</div>
              <div className="case-stat-sub">
                for "probate lawyer tampa"
              </div>
            </div>
            <div
              className="case-stat case-stat-2"
              data-reveal
              data-reveal-delay="200"
            >
              <div className="case-stat-num">+240%</div>
              <div className="case-stat-label">Increase</div>
              <div className="case-stat-sub">in qualified consultations</div>
            </div>
            <div
              className="case-stat case-stat-3"
              data-reveal
              data-reveal-delay="400"
            >
              <div className="case-stat-num">52%</div>
              <div className="case-stat-label">AI citations</div>
              <div className="case-stat-sub">in relevant ChatGPT queries</div>
            </div>
          </div>
        </div>

        {/* Before/after slider — visual moment for AWS case study */}
        <div className="case-study-slider-wrap">
          <CaseStudySlider />
        </div>
      </section>

      {/* === CASE STUDY (TYLER FAMILY LAW) === */}
      <section
        className="case-study-section case-study-secondary"
        id="case-study-tyler"
      >
        <div className="case-study-inner case-study-inner-flipped">
          <div className="case-study-stats case-study-stats-flipped">
            <div
              className="case-stat-flip-1-chart"
              data-reveal
              data-reveal-delay="0"
            >
              <GrowthChart />
            </div>
            <div
              className="case-stat case-stat-flip-2"
              data-reveal
              data-reveal-delay="200"
            >
              <div className="case-stat-num">8 months</div>
              <div className="case-stat-label">Time</div>
              <div className="case-stat-sub">from start to results</div>
            </div>
            <div
              className="case-stat case-stat-flip-3"
              data-reveal
              data-reveal-delay="400"
            >
              <div className="case-stat-num">#1</div>
              <div className="case-stat-label">Ranked</div>
              <div className="case-stat-sub">
                for "divorce attorney atlanta"
              </div>
            </div>
          </div>

          <div className="case-study-content">
            <div className="section-2-eyebrow">Case study</div>
            <h2 className="case-study-h2">
              Tyler Family Law: Atlanta's{" "}
              <span className="accent-text">#1 divorce attorney.</span>
            </h2>
            <div className="case-study-prose">
              <p>
                Tyler Family Law is a divorce and family law practice in
                Atlanta. When they came to us, they were a respected firm
                with deep trial experience but limited online visibility.
                They were ranking on page two for their primary keywords and
                getting most of their cases through referrals — a great
                problem to have until referrals dry up.
              </p>
              <p>
                The Atlanta divorce attorney market is intensely competitive.
                National brands, lawyer-mill aggregators, and well-funded
                local firms all fighting for the same searches. Most agencies
                told them ranking was impossible without a six-figure annual
                budget. We disagreed.
              </p>
              <p>
                We ran the First Position playbook. Hyperlocal focus on
                Atlanta proper — not Georgia, not the suburbs first, just
                Atlanta. We rebuilt their site for AI consumption. We
                produced authority content on every divorce subtopic that
                mattered (custody, asset division, prenups, post-decree
                modifications). We optimized their GMB to a level most local
                firms haven't seen. We executed citation-stacking across
                legal and local-business platforms. Weekly meetings,
                transparent reporting.
              </p>
              <p>
                Eight months later: ranked #1 for "divorce attorney
                atlanta" and a dozen related queries. Lead volume
                increased by 1,240%. The firm now operates a four-week
                intake waitlist and has expanded their consultation team.
              </p>
            </div>
            <a
              href="/case-studies/tyler-family-law"
              className="case-study-link"
            >
              Read full case study <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* === LEGAL PLAYBOOK (Session 16) === */}
      <LegalPlaybook />

      <div style={{ background: "var(--paper)", padding: "0 64px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ContinueReading href="/legal" label="Read the Legal Playbook" context="paper" />
        </div>
      </div>

      {/* === MEDICAL PLAYBOOK (Session 16) === */}
      <MedicalPlaybook />

      <div style={{ background: "var(--paper)", padding: "0 64px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ContinueReading href="/medical" label="Read the Medical Playbook" context="paper" />
        </div>
      </div>

      {/* FounderSection moved to top of page (Session 25 legitimacy front-load) */}

      {/* === THOUGHT LEADERSHIP (published thinking) === */}
      <ThoughtLeadership />

      <DividerWithMark context="paper" />

      {/* === BRANDS THE FOUNDER BUILT (3D parallax cards) === */}
      <BrandsParallax />

      {/* TeamFilter moved to top of page (Session 25 legitimacy front-load) */}

      {/* === INSIDE THE STUDIO (Detroit HQ illustrated scene) === */}
      <InsideStudio />

      {/* RealOperations moved to top of page (Session 25 legitimacy front-load) */}

      {/* === TESTIMONIALS SECTION (carousel) === */}
      <TestimonialCarousel />

      {/* === PRESS & RECOGNITION === */}
      <PressRecognition />

      {/* === WHY US CLOSING (Session 17 — the closer) === */}
      <WhyUsClosing />

      {/* === FINAL CTA SECTION === */}
      <section className="final-cta-section">
        <div className="final-cta-atmosphere" aria-hidden="true"></div>
        <div className="final-cta-grain" aria-hidden="true"></div>
        <div className="final-cta-inner">
          <div className="section-2-eyebrow final-cta-eyebrow">
            Ready to begin?
          </div>
          <h2 className="final-cta-h2">
            <span className="reveal-word" data-reveal data-reveal-delay="0">
              We
            </span>{" "}
            <span className="reveal-word" data-reveal data-reveal-delay="60">
              don't
            </span>{" "}
            <span className="reveal-word" data-reveal data-reveal-delay="120">
              take
            </span>{" "}
            <span className="reveal-word" data-reveal data-reveal-delay="180">
              every
            </span>{" "}
            <span className="reveal-word" data-reveal data-reveal-delay="240">
              firm.
            </span>{" "}
            <span className="reveal-word" data-reveal data-reveal-delay="300">
              Let's
            </span>{" "}
            <span className="reveal-word" data-reveal data-reveal-delay="360">
              see
            </span>{" "}
            <span className="reveal-word" data-reveal data-reveal-delay="420">
              if
            </span>{" "}
            <span className="reveal-word" data-reveal data-reveal-delay="480">
              we
            </span>{" "}
            <span
              className="reveal-word accent-text"
              data-reveal
              data-reveal-delay="540"
            >
              should
            </span>{" "}
            <span
              className="reveal-word accent-text"
              data-reveal
              data-reveal-delay="600"
            >
              take
            </span>{" "}
            <span
              className="reveal-word accent-text"
              data-reveal
              data-reveal-delay="660"
            >
              yours.
            </span>
          </h2>
          <p className="final-cta-subhead">
            We work with a small number of firms each year. Apply for a free
            audit to learn whether we're the right fit for your practice.
          </p>
          <div className="final-cta-form-wrap">
            <AuditForm />
          </div>
        </div>
      </section>

    </>
  );
}
