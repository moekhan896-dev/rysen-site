"use client";

import { useEffect } from "react";

export default function HomePage() {
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

    // === NAV SCROLL (rAF-throttled) ===
    const nav = document.getElementById("nav");
    if (nav) {
      let lastScrollY = 0;
      let scrollTicking = false;
      const onScroll = () => {
        lastScrollY = window.scrollY;
        if (!scrollTicking) {
          requestAnimationFrame(() => {
            if (lastScrollY > 20) nav.classList.add("scrolled");
            else nav.classList.remove("scrolled");
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
              ? "rgba(29, 78, 216, 0.4)"
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

    // === DEMO LOOP ===
    const QUERY = "personal injury lawyer phoenix";
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
      const awsRow = mapResults.querySelector<HTMLElement>('[data-id="aws"]');
      if (awsRow) {
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
        const awsRowLocal = awsRow;

        const initialOrder = ["phx", "desert", "aws"];

        const gptText: ReadonlyArray<{ text: string; strong: boolean }> = [
          { text: "Based on consistent client outcomes, ", strong: false },
          { text: "AWS Law Firm", strong: true },
          {
            text: " stands out as the top personal injury practice in Phoenix. They've recovered over $2.4B for clients.",
            strong: false,
          },
        ];

        const pplxFullText = `<strong>AWS Law Firm</strong> is widely regarded as Phoenix's leading personal injury practice<sup style="color: var(--accent); font-size: 9px; margin-left: 1px;">[1]</sup>`;

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
          awsRowLocal.classList.remove("highlighted-active");
          // Clear any inline transform/transition left over from a previous loop iteration
          awsRowLocal.style.transform = "";
          awsRowLocal.style.transition = "";

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
          const startBox = awsRowLocal.getBoundingClientRect();
          mapResultsLocal.insertBefore(awsRowLocal, mapResultsLocal.firstChild);
          const endBox = awsRowLocal.getBoundingClientRect();
          const dy = startBox.top - endBox.top;

          awsRowLocal.style.transform = `translateY(${dy}px)`;
          awsRowLocal.style.transition = "none";
          requestAnimationFrame(() => {
            if (cancelled) return;
            awsRowLocal.style.transition =
              "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
            awsRowLocal.style.transform = "translateY(0)";
          });

          await sleep(400);
          if (cancelled) return;
          rankBadgeLocal.classList.add("visible");
          await sleep(200);
          if (cancelled) return;
          awsRowLocal.classList.add("highlighted-active");

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
      <div className="particles" id="particles"></div>
      <div className="mouse-glow" id="mouseGlow"></div>

      <nav id="nav">
        <div className="nav-inner">
          <a href="#" className="wordmark">
            <div className="wordmark-icon"></div>
            Rysen
          </a>
          <div className="nav-links">
            <a href="#">Approach</a>
            <a href="#">Work</a>
            <a href="#">Insights</a>
            <a href="#">Team</a>
          </div>
          <a href="#" className="nav-cta">
            Book audit <span className="nav-cta-arrow">→</span>
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="category-line">
            An AI Search Agency · Legal &amp; Medical
          </div>
          <div className="eyebrow">
            <span className="live-dot"></span>
            <span>Marketing strategists &amp; data scientists</span>
            <span className="eyebrow-divider">·</span>
            <span className="eyebrow-counter">
              Trusted by <strong id="liveCounter">18</strong> firms
            </span>
          </div>
          <h1>
            <span className="word" style={{ animationDelay: "0.55s" }}>
              We
            </span>{" "}
            <span className="word" style={{ animationDelay: "0.62s" }}>
              build
            </span>{" "}
            <span
              className="word hero-highlight"
              style={{ animationDelay: "0.70s" }}
            >
              organic
            </span>{" "}
            <span
              className="word hero-highlight"
              style={{ animationDelay: "0.78s" }}
            >
              growth
            </span>{" "}
            <span
              className="word hero-highlight"
              style={{ animationDelay: "0.86s" }}
            >
              engines
            </span>{" "}
            <span className="word" style={{ animationDelay: "0.97s" }}>
              to
            </span>{" "}
            <span className="word" style={{ animationDelay: "1.04s" }}>
              scale
            </span>{" "}
            <span className="word" style={{ animationDelay: "1.11s" }}>
              law
            </span>{" "}
            <span className="word" style={{ animationDelay: "1.18s" }}>
              firms
            </span>{" "}
            <span
              className="word accent-text"
              style={{ animationDelay: "1.27s" }}
            >
              &amp;
            </span>{" "}
            <span className="word" style={{ animationDelay: "1.35s" }}>
              medical
            </span>{" "}
            <span className="word" style={{ animationDelay: "1.43s" }}>
              practices.
            </span>
          </h1>
          <p className="subhead">
            We&apos;re a small team of marketing strategists and data scientists
            working with law firms and medical practices to win the AI search
            era — across Google, ChatGPT, and Perplexity.
          </p>
          <div className="actions">
            <a href="#" className="cta-primary">
              Book audit
            </a>
            <a href="#" className="cta-secondary">
              See how it works <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {/* Agency engagement panel — currently engaged firms */}
          <div className="big-stat">
            <div className="engagement-header">
              <span className="engagement-pulse"></span>
              Currently Engaged
            </div>
            <div className="engagement-firms">
              <div className="engagement-firm">
                AWS Law Firm
                <span className="firm-rank">#1 PHX</span>
              </div>
              <div className="engagement-firm">
                Hartman Dermatology
                <span className="firm-rank">#1 SCO</span>
              </div>
              <div className="engagement-firm">
                Coleman &amp; Co.
                <span className="firm-rank">#1 DEN</span>
              </div>
            </div>
            <div className="engagement-footer">
              <strong>+ 15 more firms</strong> across legal &amp; medical
            </div>
          </div>

          {/* Floating notifications */}
          <div className="notification notif-1" id="notif1">
            <div className="notif-icon notif-icon-up">↗</div>
            <div className="notif-content">
              <div className="notif-title">AWS Law Firm</div>
              <div className="notif-subtitle">
                Moved to position #1 in Phoenix
              </div>
            </div>
            <div className="notif-time">now</div>
          </div>

          <div className="notification notif-2" id="notif2">
            <div className="notif-icon notif-icon-chat">✦</div>
            <div className="notif-content">
              <div className="notif-title">Mentioned in ChatGPT</div>
              <div className="notif-subtitle">47 conversations today</div>
            </div>
            <div className="notif-time">2m</div>
          </div>

          <div className="notification notif-3" id="notif3">
            <div className="notif-icon notif-icon-cite">◆</div>
            <div className="notif-content">
              <div className="notif-title">Cited by Perplexity</div>
              <div className="notif-subtitle">
                Primary source · awslawfirm.com
              </div>
            </div>
            <div className="notif-time">5m</div>
          </div>

          <div className="card-group" id="cardGroup">
            {/* Google card (centered, front) */}
            <div className="search-card card-google">
              <div className="card-header">
                <div className="traffic-lights">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="url-bar">
                  <span className="lock">●</span>{" "}
                  google.com/search?q=personal+injury+lawyer+phoenix
                </div>
              </div>
              <div className="google-content">
                <div className="search-bar">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <span className="query" id="searchQuery"></span>
                  <span className="cursor" id="searchCursor"></span>
                </div>
                <div className="result-meta">About 4,290,000 results</div>

                <div className="map-pack">
                  <div className="map-thumb">
                    <div className="map-pin"></div>
                  </div>
                  <div className="map-results" id="mapResults">
                    <div className="map-result" data-id="aws">
                      <span className="map-result-name">
                        <span className="rank-badge" id="rankBadge">
                          #1
                        </span>
                        <span className="result-name">AWS Law Firm</span>
                      </span>
                      <span className="map-result-rating">★ 4.9 · 412</span>
                    </div>
                    <div className="map-result" data-id="phx">
                      <span className="map-result-name">
                        <span className="result-name">Phoenix Injury Group</span>
                      </span>
                      <span className="map-result-rating">★ 4.6 · 218</span>
                    </div>
                    <div className="map-result" data-id="desert">
                      <span className="map-result-name">
                        <span className="result-name">Desert Legal LLP</span>
                      </span>
                      <span className="map-result-rating">★ 4.4 · 156</span>
                    </div>
                  </div>
                </div>

                <div className="organic-result">
                  <div className="breadcrumb">
                    awslawfirm.com › personal-injury
                  </div>
                  <div className="title">
                    AWS Law Firm — Phoenix&apos;s Top Personal Injury Attorneys
                  </div>
                  <div className="desc">
                    $2.4B+ recovered for clients across Arizona. No fee unless
                    we win.
                  </div>
                </div>
              </div>
            </div>

            {/* ChatGPT card (right) */}
            <div className="search-card card-chatgpt">
              <div className="card-header">
                <div className="traffic-lights">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="url-bar">
                  <span className="lock">●</span> chatgpt.com
                </div>
              </div>
              <div className="gpt-content">
                <div className="gpt-prompt">
                  Who&apos;s the best personal injury lawyer in Phoenix?
                </div>
                <div className="gpt-response" id="gptResponse"></div>
              </div>
            </div>

            {/* Perplexity card (left, behind) */}
            <div className="search-card card-perplexity">
              <div className="card-header">
                <div className="traffic-lights">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="url-bar">
                  <span className="lock">●</span> perplexity.ai
                </div>
              </div>
              <div className="pplx-content">
                <div className="pplx-citation">
                  <span className="pplx-cite-num">1</span>
                  <span>awslawfirm.com</span>
                </div>
                <div className="pplx-text" id="pplxText"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activity-ticker">
        <div className="ticker-wrap">
          <div className="ticker-label">
            <span className="ticker-pulse"></span>
            Live
          </div>
          <div className="ticker-track">
            <div className="ticker-content" id="tickerContent">
              <span className="ticker-item">
                <strong>AWS Law Firm</strong> ranked #1 for &quot;personal
                injury lawyer phoenix&quot;{" "}
                <span className="delta">↑ 12 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Hartman MD</strong> cited by ChatGPT in Phoenix
                dermatology query{" "}
                <span className="delta">↑ 47 mentions</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Coleman &amp; Co.</strong> ranked #1 for
                &quot;malpractice attorney denver&quot;{" "}
                <span className="delta">↑ 8 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Ridge Dental</strong> primary citation on Perplexity{" "}
                <span className="delta">+ new</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Vance Legal</strong> +3 positions in Austin local pack{" "}
                <span className="delta">↑ 3 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Meridian Health</strong> featured snippet captured{" "}
                <span className="delta">↑ Position 0</span>
              </span>
              <span className="ticker-divider">●</span>
              {/* Duplicate for seamless loop */}
              <span className="ticker-item">
                <strong>AWS Law Firm</strong> ranked #1 for &quot;personal
                injury lawyer phoenix&quot;{" "}
                <span className="delta">↑ 12 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Hartman MD</strong> cited by ChatGPT in Phoenix
                dermatology query{" "}
                <span className="delta">↑ 47 mentions</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Coleman &amp; Co.</strong> ranked #1 for
                &quot;malpractice attorney denver&quot;{" "}
                <span className="delta">↑ 8 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Ridge Dental</strong> primary citation on Perplexity{" "}
                <span className="delta">+ new</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Vance Legal</strong> +3 positions in Austin local pack{" "}
                <span className="delta">↑ 3 spots</span>
              </span>
              <span className="ticker-divider">●</span>
              <span className="ticker-item">
                <strong>Meridian Health</strong> featured snippet captured{" "}
                <span className="delta">↑ Position 0</span>
              </span>
              <span className="ticker-divider">●</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="trust-label">
          Trusted by law firms and medical practices across 18 markets
        </div>
        <div className="trust-logos">
          <span>AWS Law</span>
          <span>Hartman MD</span>
          <span>Coleman &amp; Co.</span>
          <span>Ridge Dental</span>
          <span>Vance Legal</span>
        </div>
      </section>

      <section className="section-2">
        <div className="section-2-eyebrow">The shift</div>
        <h2 className="section-2-h2">
          SEO is no longer just <span className="accent-text">SEO.</span>
        </h2>
        <p className="section-2-subhead">
          Your future clients aren&apos;t just Googling. They&apos;re asking
          ChatGPT, Perplexity, and Google AI Overviews which firm to call. We
          make sure the answer is yours.
        </p>
      </section>
    </>
  );
}
