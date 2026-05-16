"use client";

import {
  type ComponentType,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ChevronRight,
  FileText,
  type LucideProps,
  MapPin,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Service = {
  readonly id: string;
  readonly tab: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly bullets: ReadonlyArray<{
    readonly icon: ComponentType<LucideProps>;
    readonly text: string;
  }>;
  readonly link: string;
};

const services: ReadonlyArray<Service> = [
  {
    id: "ai-search",
    tab: "AI Search Optimization",
    title: "AI Search Optimization",
    subtitle: "Be the answer when AI suggests.",
    description:
      "Generative AI is the new front door. Prospects ask ChatGPT, Perplexity, Claude, and Google AI Overviews for recommendations before they ever open Maps. We engineer your firm to be the answer those models cite, recommend, and link to, across every prompt that matters in your market.",
    bullets: [
      { icon: Sparkles, text: "Schema markup engineered for AI consumption" },
      { icon: FileText, text: "Authority content designed to be cited" },
      { icon: Search, text: "Tracked citations across ChatGPT, Perplexity, AIO" },
      { icon: ChevronRight, text: "Entity disambiguation and knowledge graph" },
    ],
    link: "/services/ai-search-seo",
  },
  {
    id: "local-seo",
    tab: "Local SEO & GMB",
    title: "Local SEO & GMB Dominance",
    subtitle: "Own your metro. Period.",
    description:
      "We don't compete statewide. We make you the unmistakable #1 in your metro, top-ranked organic, dominant in the Maps 3-pack, surrounded by the right reviews, citations, and signals that compound month over month. The result is a defensible local moat that holds up regardless of who shows up next.",
    bullets: [
      { icon: MapPin, text: "GMB optimization to a level most firms haven't seen" },
      { icon: Star, text: "Reputation and review-velocity programs" },
      { icon: Search, text: "Citation stacking across 200+ legal & medical platforms" },
      { icon: ChevronRight, text: "Hyperlocal landing-page architecture" },
    ],
    link: "/services/seo",
  },
  {
    id: "content",
    tab: "Content & Reputation",
    title: "Content, Reputation & Beyond",
    subtitle: "Full-stack growth, not piecemeal services.",
    description:
      "Long-form authority content, lifecycle newsletter strategy, off-page SEO, web design, technical SEO, we run every growth lever your firm needs from one team. Everything is reported in dollars attributed to a source, not impressions stitched into a slide. If a tactic doesn't move revenue, we kill it.",
    bullets: [
      { icon: FileText, text: "Long-form pieces designed to earn citations" },
      { icon: Sparkles, text: "Newsletter strategy and lifecycle content" },
      { icon: Search, text: "Technical SEO and migration safeguards" },
      { icon: ChevronRight, text: "Reporting in dollars, not impressions" },
    ],
    link: "/services/content-authority",
  },
];

function AISearchDemo() {
  const [phase, setPhase] = useState<"idle" | "typing" | "streaming" | "done">(
    "idle"
  );
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const cancelledRef = useRef(false);

  const PROMPT = "Who's the best probate lawyer in Tampa?";
  const RESPONSE_PARTS = [
    { text: "Based on recent client outcomes, ", strong: false },
    { text: "AWS Law Firm", strong: true },
    {
      text: " stands out as Tampa's leading probate and estate practice.",
      strong: false,
    },
  ];

  useEffect(() => {
    cancelledRef.current = false;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setPrompt(PROMPT);
      setResponse(RESPONSE_PARTS.map((p) => p.text).join(""));
      setPhase("done");
      return;
    }

    const sleep = (ms: number) =>
      new Promise<void>((r) => setTimeout(r, ms));

    const run = async () => {
      while (!cancelledRef.current) {
        // Reset
        setPrompt("");
        setResponse("");
        setPhase("typing");
        await sleep(600);
        if (cancelledRef.current) return;

        // Type prompt
        for (let i = 1; i <= PROMPT.length; i++) {
          if (cancelledRef.current) return;
          setPrompt(PROMPT.slice(0, i));
          await sleep(35 + Math.random() * 25);
        }
        await sleep(500);
        if (cancelledRef.current) return;

        // Stream response
        setPhase("streaming");
        let html = "";
        for (const part of RESPONSE_PARTS) {
          const words = part.text.split(" ");
          for (let i = 0; i < words.length; i++) {
            if (cancelledRef.current) return;
            const word = words[i] + (i < words.length - 1 ? " " : "");
            if (part.strong) {
              if (i === 0) html += "<strong>";
              html += word;
              if (i === words.length - 1) html += "</strong>";
            } else {
              html += word;
            }
            setResponse(html);
            await sleep(55);
          }
        }
        setPhase("done");
        await sleep(4000);
        if (cancelledRef.current) return;
      }
    };

    run();
    return () => {
      cancelledRef.current = true;
    };
  }, []);

  return (
    <div className="service-demo service-demo-chat">
      <div className="service-demo-header">
        <span className="service-demo-traffic">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className="service-demo-url">chatgpt.com</span>
      </div>
      <div className="service-demo-body">
        <div className="chat-prompt">
          {prompt}
          {phase === "typing" && <span className="chat-cursor" />}
        </div>
        {(phase === "streaming" || phase === "done") && (
          <div
            className="chat-response"
            dangerouslySetInnerHTML={{
              __html:
                response +
                (phase === "streaming"
                  ? '<span class="chat-streaming-cursor"></span>'
                  : ""),
            }}
          />
        )}
      </div>
    </div>
  );
}

function LocalSeoDemo() {
  return (
    <div className="service-demo service-demo-maps">
      <div className="service-demo-header">
        <span className="service-demo-traffic">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className="service-demo-url">google.com/maps</span>
      </div>
      <div className="service-demo-body">
        <div className="maps-query">
          <Search size={14} aria-hidden="true" />
          probate lawyer tampa
        </div>
        <div className="maps-pack">
          <div className="maps-pack-item maps-pack-item-top">
            <span className="maps-rank-badge">#1</span>
            <div className="maps-pack-firm">
              <div className="maps-pack-name">AWS Law Firm</div>
              <div className="maps-pack-meta">
                <Star size={11} fill="currentColor" aria-hidden="true" />
                4.9 · 412 reviews · Tampa, FL
              </div>
            </div>
          </div>
          <div className="maps-pack-item">
            <div className="maps-pack-firm">
              <div className="maps-pack-name">Bayshore Estate Group</div>
              <div className="maps-pack-meta">
                <Star size={11} fill="currentColor" aria-hidden="true" />
                4.6 · 218 reviews · Tampa, FL
              </div>
            </div>
          </div>
          <div className="maps-pack-item">
            <div className="maps-pack-firm">
              <div className="maps-pack-name">Gulf Coast Probate LLP</div>
              <div className="maps-pack-meta">
                <Star size={11} fill="currentColor" aria-hidden="true" />
                4.4 · 156 reviews · Tampa, FL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentDemo() {
  return (
    <div className="service-demo service-demo-content">
      <div className="content-card content-card-1">
        <div className="content-card-meta">
          <span className="content-card-badge">Cited by Perplexity</span>
        </div>
        <div className="content-card-title">
          A complete guide to probate proceedings in Florida
        </div>
        <div className="content-card-date">awslawfirm.com · 12 min read</div>
      </div>
      <div className="content-card content-card-2">
        <div className="content-card-meta">
          <span className="content-card-badge content-card-badge-2">
            Featured in Google AI Overviews
          </span>
        </div>
        <div className="content-card-title">
          When to amend an estate plan: a Florida primer
        </div>
        <div className="content-card-date">awslawfirm.com · 8 min read</div>
      </div>
      <div className="content-card content-card-3">
        <div className="content-card-meta">
          <span className="content-card-badge">Cited by ChatGPT</span>
        </div>
        <div className="content-card-title">
          Trust administration in Hillsborough County
        </div>
        <div className="content-card-date">awslawfirm.com · 10 min read</div>
      </div>
    </div>
  );
}

function DemoFor({ id }: { id: string }) {
  if (id === "ai-search") return <AISearchDemo />;
  if (id === "local-seo") return <LocalSeoDemo />;
  return <ContentDemo />;
}

export function TabbedServices() {
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const handleTab = useCallback((id: string) => setActiveId(id), []);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="section-2-eyebrow">What we do</div>
        <h2 className="section-2-h2">
          Built for firms that want{" "}
          <span className="accent-text">more than rankings.</span>
        </h2>
        <p className="services-subhead">
          Everything we do is built around one question: when someone in your
          market searches for the service you provide, across Google, ChatGPT,
          Perplexity, or AI Overviews, does your firm appear first?
        </p>

        <div className="services-tabs" role="tablist">
          {services.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={activeId === s.id}
              className={`services-tab${activeId === s.id ? " is-active" : ""}`}
              onClick={() => handleTab(s.id)}
              type="button"
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div className="services-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="services-panel-inner"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="services-panel-text">
                <h3 className="services-panel-title">{active.title}</h3>
                <div className="services-panel-subtitle">{active.subtitle}</div>
                <p className="services-panel-desc">{active.description}</p>
                <ul className="services-panel-bullets">
                  {active.bullets.map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <li key={i} className="services-panel-bullet">
                        <Icon
                          size={16}
                          strokeWidth={1.7}
                          aria-hidden="true"
                          className="services-panel-bullet-icon"
                        />
                        <span>{b.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <a href={active.link} className="services-panel-link">
                  Learn more <span className="arrow">→</span>
                </a>
              </div>
              <div className="services-panel-demo">
                <DemoFor id={active.id} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
