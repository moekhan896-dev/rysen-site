# Session 55 — Trust and Credibility Issues Requiring Correction

_Audit date: 2026-07-17. Current quarter: **Q3 2026**._

Every item below risks credibility with the target skeptical practice owner. Priorities: **P0** = fix this session (Phase 2), **P1** = fix this session if bandwidth allows, **P2** = later pass.

---

### P0 — Stale quarter references (current is Q3 2026)

| Location | Current | Fix |
|---|---|---|
| `Hero.tsx:217` — status pill | "Currently accepting clients for Q2 2026" | Drop the specific quarter — "Currently accepting new engagements" (dateless). |
| `CoverageHeatmap.tsx:445` — stats strip | "Metros open for Q2" | "Currently open metros" or drop the quarter. |
| `CoverageHeatmap.tsx:112` — comment | "open for Q2" | Update to dateless. |
| `HeaderNav.tsx:166` — description | "Tampa probate · 348 calls in Q1 2026" | Q1 2026 is > 6 months old; leave as historical result (facts are dated by nature). Refine to "348 calls, ~4 months (Q1 2026)". |
| `PlatformGallery.tsx:98` — strip meta | "AWS Law Firm · Tampa, FL · Probate · Q2 2026" | Q2 2026 is stale; change to "Q1 2026" or drop the quarter. |
| `MoreWork.tsx:38` — metric | "~348 calls · Q1 2026" | OK — historical fact, dated correctly. |
| `CaseStudyChart.tsx:100` — bars label | "Q1 2026" | OK — historical fact. |
| `TwinSerps.tsx:32` — metricLabel | "qualified calls · Q1 2026" | OK — historical fact. |
| `StackIllustrations.tsx:454` — decorative SVG text | "COHORT · Q1 2026" | OK — historical decorative label. |
| `globals.css` code-only comment | comment references Q2 2026 | Comment only; no user impact. |

### P0 — Illustrative simulations not labeled

| Location | Risk | Fix |
|---|---|---|
| `LiveLeadFeed` | Deterministic ET-window simulation. Disclaimer at the BOTTOM says "Representative activity from active engagements" but the top of the section could still read as literal live client data at a glance. | Add a small "Illustrative simulation of typical activity" caption near the section header (companion line already softens this — S54; still could be clearer). |
| `LiveDemo (RankClimb)` | Animated demo of a client climbing a SERP. Could read as live rank tool. | Add a small "Illustrative demonstration — sample query" caption inside the section header. |
| `PositionMonitor` | Deep-page rank monitor dashboard. Could read as proprietary tool. | Confirm illustrative labeling; add caption if missing. |

### P1 — Positioning and ICP breadth

| Location | Risk | Fix |
|---|---|---|
| `layout.tsx` metadata title | "Marketing Engineering for Law Firms and Medical Practices" | Broaden to include dental + high-value local per brief. Consider: "Search Growth for Law Firms, Medical Practices, and High-Value Local Businesses". |
| `Hero.tsx` line 2 | "for law firms and medical practices" (in headline) | Keep the two-vertical headline (the visual anchor) but add a small line elsewhere that broadens to dental + high-value local. |
| `Verticals.tsx` copy | "We only work with two kinds of businesses" | Broaden phrasing to include dental + high-value local as first-class audiences. |
| `page.tsx` metadata | "We make law firms and medical practices the #1 result…" | Broaden. |
| `Hero.tsx` sub | Already softened; still says "handful of firms" (fine) | OK. |

### P1 — "Search engineering" needs plain-English definition

The brief allows the branded term but requires it to be defined once in plain language. Currently the term appears in title / hero / metadata without a defining sentence anywhere on the homepage.

**Fix:** Add one sentence, near the top of the homepage flow — either at the end of the Hero copy or as the first line of the LiveDemo header — that defines the term. Suggested:
> "We call it search engineering because we treat your website, local profiles, content, reputation, and tracking as one connected acquisition system."

### P1 — Viral virality framed as primary identity

**Location:** `ViralCarousel.tsx` header + `BuiltByOperators.tsx` header

**Risk:** The brief explicitly says "Do not make social media virality the primary identity of the company." Currently the ViralCarousel headline reads "We make brands go viral." which fronts virality as identity.

**Fix:** Reframe as OPERATOR PROOF ("Why we're not vibes-based"), keep the visual. Suggested new headline: "We test our thinking on our own brands first."

### P1 — AI-placement language could imply guarantees

| Location | Risk | Fix |
|---|---|---|
| Homepage metadata | "the #1 result on Google, ChatGPT, Perplexity, and Gemini" | Soften: "…as the cited source across Google, ChatGPT, Perplexity, and Gemini". Slight change avoids implying guaranteed placement. |
| Various sections referencing "the #1 result on Google, ChatGPT…" | Same | Same softening. |
| Case-study "AI citation rate" numbers | Presented as verified — likely representative | OK — already framed as percentages within the client-attributed narrative. |

### P2 — "Proprietary" / "engineered" / "engine" density

The brief flags overuse. Grep shows heavy use in TheStack + TheServices + BuiltByOperators + methodology copy. A light copy trim to reduce density without gutting the technical positioning would help. **Deferred to a copy pass** unless bandwidth allows.

### P2 — Homepage metadata + OG image reads as "law firms and medical practices only"

If the ICP broadens, the OG image + default meta could reference the four-audience version. Deferred — image rebuild is a separate task.

### P2 — /methodology missing the Diagnose / Build / Measure / Expand overview

Brief specifically recommends this framing. `/methodology` deep page exists but does not currently use these four-stage names. Deferred to a `/methodology` refactor session unless bandwidth allows for a light addition.

### P2 — Fit and exclusivity section missing on homepage

Brief recommends a section that spells out:
- Who Rysen works best with
- Who may not be a fit
- How market exclusivity works
- What happens when a competing client already occupies a metro

Currently touched implicitly in TheOffer + CoverageHeatmap legend. A short dedicated paragraph would help. **Recommend adding a small block inline in TheOffer.** Included in Phase 2 as a light add.

### P2 — TheClose "what happens next" sequence

Brief recommends a 3-step "here's what happens after you contact us" list at the end. Currently TheClose has strong visual + glow CTA but no explicit process. **Recommend adding 3 short lines.** Included in Phase 2.

---

## Phase 2 target list

**Doing this session (P0 + high-value P1 + small P2 additions):**

1. Drop all stale "Q2 2026" from user-facing surfaces (Hero pill, CoverageHeatmap stats, PlatformGallery meta).
2. Add "Illustrative simulation" captions to LiveLeadFeed + LiveDemo.
3. Broaden layout.tsx + page.tsx metadata + Verticals copy to include dental + high-value local.
4. Add plain-English "search engineering" definition once (LiveDemo header sub).
5. Reframe ViralCarousel header from virality-as-identity to operator-proof.
6. Soften AI-platform language in metadata to avoid implying guarantees.
7. Add small "Fit and exclusivity" inline block in TheOffer.
8. Add "what happens next" 3-step list in TheClose.

**Deferred:** heavy copy trim of "proprietary/engineered" density, OG image rebuild, `/methodology` Diagnose/Build/Measure/Expand rewrite.
