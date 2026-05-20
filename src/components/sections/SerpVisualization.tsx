"use client";

import { type HeroClient } from "@/lib/heroClients";

function GoogleWordmark() {
  return (
    <span className="serp__google" aria-label="Google">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.6" />
      <line x1="12.5" y1="12.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 6V4a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="6" y="2" width="6" height="9" rx="3" fill="#9AA0A6" />
      <path d="M4 9c0 3 2 5 5 5s5-2 5-5M9 14v2" stroke="#9AA0A6" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 5h12v9H3z M7 5l1-2h2l1 2" stroke="#9AA0A6" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <circle cx="9" cy="10" r="2.5" stroke="#9AA0A6" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

function RysenTriangle() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon points="4,4 28,4 4,28" fill="#FFE817" />
    </svg>
  );
}

export function SerpVisualization({ client }: { client: HeroClient }) {
  const stripExt = (d: string) => d.replace(/\.(com|net|org)$/, "");
  return (
    <div className="serp" id="serp-display" role="tabpanel">
      {/* Browser chrome */}
      <div className="serp__chrome">
        <div className="serp__chrome-dots">
          <span className="serp__dot serp__dot--red" />
          <span className="serp__dot serp__dot--yellow" />
          <span className="serp__dot serp__dot--green" />
        </div>
        <div className="serp__chrome-url">
          <LockIcon />
          <span>
            google.com/search?q={encodeURIComponent(client.query).replace(/%20/g, "+")}
          </span>
        </div>
      </div>

      {/* Google search header */}
      <div className="serp__google-header">
        <GoogleWordmark />
        <div className="serp__search-bar">
          <SearchIcon />
          <span className="serp__query">{client.query}</span>
          <span className="serp__google-icons">
            <MicIcon />
            <CameraIcon />
          </span>
        </div>
      </div>

      {/* Tabs + count */}
      <div className="serp__meta">
        <div className="serp__tabs">
          <span className="serp__tab serp__tab--active">All</span>
          <span className="serp__tab">Images</span>
          <span className="serp__tab">News</span>
          <span className="serp__tab">Videos</span>
          <span className="serp__tab">Maps</span>
        </div>
        <div className="serp__count">About 1,840,000 results (0.42 seconds)</div>
      </div>

      {/* Winner row */}
      <div className="serp__result serp__result--winner">
        <div className="serp__winner-tag">#1 · POSITION 1</div>
        <div className="serp__result-row">
          <div className="serp__result-favicon">
            <RysenTriangle />
          </div>
          <div className="serp__result-meta">
            <span className="serp__result-domain">{stripExt(client.yourRow.domain)}</span>
            <span className="serp__result-dot">·</span>
            <span className="serp__result-domain-tld">.com</span>
          </div>
        </div>
        <a href="#" className="serp__result-title">
          {client.yourRow.title}
        </a>
        <p className="serp__result-snippet">{client.yourRow.snippet}</p>
        <div className="serp__result-metric">
          <span className="serp__metric-num">{client.metric.value}</span>
          <span className="serp__metric-label">{client.metric.label}</span>
        </div>
      </div>

      {/* Competitor rows */}
      {client.competitors.map((comp) => {
        const tldMatch = comp.domain.match(/\.([a-z]+)$/);
        const tld = tldMatch ? `.${tldMatch[1]}` : "";
        return (
          <div key={comp.domain} className="serp__result serp__result--competitor">
            <div className="serp__result-row">
              <div className="serp__result-favicon serp__result-favicon--muted">
                <span>{comp.domain[0].toUpperCase()}</span>
              </div>
              <div className="serp__result-meta">
                <span className="serp__result-domain">{stripExt(comp.domain)}</span>
                <span className="serp__result-dot">·</span>
                <span className="serp__result-domain-tld">{tld}</span>
              </div>
            </div>
            <a href="#" className="serp__result-title serp__result-title--muted">
              {comp.title}
            </a>
            <p className="serp__result-snippet serp__result-snippet--muted">{comp.snippet}</p>
          </div>
        );
      })}

      {/* Bottom credibility strip */}
      <div className="serp__footer-strip">
        <span>Ranked by Rysen across</span>
        <strong>Google</strong>
        <span>·</span>
        <strong>ChatGPT</strong>
        <span>·</span>
        <strong>Perplexity</strong>
        <span>·</span>
        <strong>Gemini</strong>
      </div>
    </div>
  );
}
