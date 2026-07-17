# Session 55 — Section Inventory

_Audit date: 2026-07-17. Current quarter: Q3 2026._

Section-by-section review of the entire site. Format per section:

- **Purpose** — what job it does
- **Question it answers** — target audience question
- **Works** — what's strong
- **Weakens** — what's off
- **Factual / illustrative / unclear** — content classification
- **Repeats** — overlaps another section
- **Preserve visual?** — visual worth keeping
- **Action** — Preserve / Preserve and refine / Reposition / Combine carefully / Remove only if clearly necessary

---

## Homepage — `src/app/page.tsx`

### 1. Hero — `Hero.tsx`

- **Purpose:** state offer, cycle four platforms, four capability pillars, Q2 2026 status pill, primary CTA
- **Question:** "Who does this help and what do they get?"
- **Works:** four-platform inline logos, cycling headline word, 4-pillar strip, glow CTA, marker underlines
- **Weakens:** Q2 2026 pill is stale (current: Q3); "search engineering agency" branded term is undefined in-page
- **Content:** factual (positioning + capability list)
- **Repeats:** no
- **Preserve visual?** yes — distinctive
- **Action:** **Preserve and refine** — date the availability language; define "search engineering" once in plain language; broaden ICP language to include dental + high-value local

### 2. LiveDemo (RankClimb) — `LiveDemo.tsx` / `RankClimb.tsx`

- **Purpose:** show a search query resolving to a #1 ranking
- **Question:** "What does the outcome look like in practice?"
- **Works:** locked height (no page-jump), platform cycle, animated climb
- **Weakens:** demo could be mistaken for a live rank tool
- **Content:** illustrative
- **Repeats:** no
- **Preserve visual?** yes — flagship demo
- **Action:** **Preserve and refine** — add small "Illustrative view — sample query" label; no other change

### 3. ViralCarousel — `ViralCarousel.tsx`

- **Purpose:** show owned-brand viral content + case-study cards + feed spotlights
- **Question:** "Do you understand attention and content at scale?"
- **Works:** infinite marquee, feed grids, per-client charts on case-study cards
- **Weakens:** currently reads as PRIMARY identity signal ("we make brands go viral"). Brief says virality should be SUPPORTING proof, not the pitch
- **Content:** mix — owned-brand posts are factual; case-study cards are factual
- **Repeats:** case-study cards overlap Selected Work + /work index (mild)
- **Preserve visual?** yes — the format is distinctive
- **Action:** **Reposition + refine copy** — keep the visual; reframe headline from "we make brands go viral" toward "how we test our thinking on our own brands first"

### 4. LiveLeadFeed — `LiveLeadFeed.tsx`

- **Purpose:** deterministic ET-window simulation of inbound leads across the roster
- **Question:** "What does the day-to-day output look like?"
- **Works:** ET business hours, honest math, real analog clocks, per-card intro line, disclaimers
- **Weakens:** dollar totals + client-specific pipeline math without a persistent "illustrative simulation" caption near the top could still read as literal live client data at a glance
- **Content:** illustrative (deterministic seed)
- **Repeats:** no
- **Preserve visual?** yes — distinctive
- **Action:** **Preserve and refine** — add a small "Illustrative simulation" caption near the section header so first glance can't misread it as literal client-live

### 5. SelectedWork / RosterTable — `SelectedWork.tsx` / `RosterTable.tsx`

- **Purpose:** roster snapshot (AWS, Tyler, Slim NY, Hartman)
- **Question:** "Who do you actually work with?"
- **Works:** compact, per-client metric, four-platform pips
- **Weakens:** Slim NY still shows "Voted best dental experience"–style copy elsewhere referencing dated details; roster metrics need a "representative" note once
- **Content:** factual (representative)
- **Repeats:** partially overlaps /work index + viral case-study cards
- **Preserve visual?** yes
- **Action:** **Preserve** — clean and useful

### 6. TheOutcome (cascade) — `TheOutcome.tsx`

- **Purpose:** SERP → #1 → click → contact → revenue cascade
- **Question:** "How does #1 turn into revenue?"
- **Works:** 5-station cascade, all-platform first station
- **Weakens:** softened sub landed well in S54; still no explicit "Illustrative" caption on the % values
- **Content:** interpretation (CTR / conversion figures)
- **Repeats:** no
- **Preserve visual?** yes — flagship explainer
- **Action:** **Preserve and refine** — add "Industry-standard benchmarks; results vary" micro-note under the sub

### 7. TheOffice — `TheOffice.tsx`

- **Purpose:** show the team / studio
- **Question:** "Are these real people?"
- **Works:** AI-placeholder photos with visible PLACEHOLDER captions (honest)
- **Weakens:** photos are AI — user handling separately per S52
- **Content:** illustrative (labeled)
- **Repeats:** overlap with TheTeam
- **Preserve visual?** yes
- **Action:** **Preserve** — already labeled

### 8. Verticals — `Verticals.tsx`

- **Purpose:** side-by-side legal + medical breakdowns with practice-area lists
- **Question:** "Do you understand my vertical?"
- **Works:** editorial two-column, area lists, per-vertical metrics
- **Weakens:** copy still reads "Two verticals" — brief broadens ICP to law + medical + dental + high-value local
- **Content:** factual (positioning)
- **Repeats:** no
- **Preserve visual?** yes
- **Action:** **Preserve and refine** — broaden ICP language to 4 audiences; keep the two-column visual for now (legal / medical are the primary two)

### 9. CoverageHeatmap — `CoverageHeatmap.tsx`

- **Purpose:** national coverage map with dominant/active/open metros
- **Question:** "Where do you actually work?"
- **Works:** boutique US map, staggered pulses, honest legend
- **Weakens:** "Metros open for Q2" is stale (Q3 now); "for Q2" language everywhere in section
- **Content:** factual (positioning) — active list is real; light list is illustrative "open" markers
- **Repeats:** no
- **Preserve visual?** yes — new S54 flagship
- **Action:** **Preserve and refine** — remove specific quarter reference; use "open metros" without quarter

### 10. TheStack — `TheStack.tsx`

- **Purpose:** 4-layer stack (Content Eng, Query Intel, AI Citation, Attribution)
- **Question:** "What's under the hood?"
- **Works:** slab tower visualization, softer sub landed in S54
- **Weakens:** heavy use of "engineered" / "proprietary" / "engine" — brief flags overuse of those words
- **Content:** interpretation (methodology framing)
- **Repeats:** no
- **Preserve visual?** yes — technical proof
- **Action:** **Preserve and refine** — light copy trim on the four slab bodies to reduce "proprietary/engineered" density

### 11. BuiltByOperators — `BuiltByOperators.tsx`

- **Purpose:** four owned brands (Quattro Labs, Honest Plumbers/Maids, Madison Clark) as operator proof
- **Question:** "Have you actually done this yourselves?"
- **Works:** four cards + growth charts + Quattro video row + aggregate strip
- **Weakens:** Detroit fix landed S54.1; some copy still frames as "we make brands go viral" identity
- **Content:** factual (owned brands)
- **Repeats:** partial overlap with ViralCarousel
- **Preserve visual?** yes — high-impact operator proof
- **Action:** **Preserve and refine** — reframe headline/sub as OPERATOR PROOF (why we're not vibes-based) rather than "virality expertise"

### 12. TheServices — `TheServices.tsx`

- **Purpose:** 4-layer service architecture (Engagement / Visibility / Authority / Foundation)
- **Question:** "What's actually included?"
- **Works:** stack diagram with 10 numbered services
- **Weakens:** service catalog is comprehensive but generic-agency-y in places
- **Content:** factual (service list)
- **Repeats:** overlap with TheStack (methodology vs deliverable — subtle but real)
- **Preserve visual?** yes
- **Action:** **Preserve** — the visual differentiates it enough from Stack

### 13. TheWall — `TheWall.tsx`

- **Purpose:** 5-quote testimonial wall (1 featured + 4 supporting)
- **Question:** "What do actual clients say?"
- **Works:** editorial arrangement, softened sub in S54
- **Weakens:** attributions are anonymized ("Operating Partner"); OK if kept once labeled once as "representative"
- **Content:** representative (anonymized)
- **Repeats:** no
- **Preserve visual?** yes
- **Action:** **Preserve and refine** — one small line at the bottom: "Anonymized where required by client contract" or similar

### 14. TheOffer — `TheOffer.tsx`

- **Purpose:** Establish vs Dominate two-path engagement model
- **Question:** "How do we start?"
- **Works:** two path cards with include lists, softer sub in S54
- **Weakens:** heavy "engagement" jargon; no fit/exclusivity spelled out
- **Content:** factual (engagement model)
- **Repeats:** no
- **Preserve visual?** yes
- **Action:** **Preserve and refine** — add a small "How exclusivity works" line inline; already close to the brief's "Fit and exclusivity" ask

### 15. TheTeam — `TheTeam.tsx`

- **Purpose:** founder portrait + 4 ventures + previously-at
- **Question:** "Who's behind this?"
- **Works:** portrait treatment, venture cards
- **Weakens:** founder portrait is AI placeholder — labeled; some overlap with TheOffice
- **Content:** factual + representative
- **Repeats:** overlaps TheOffice
- **Preserve visual?** yes
- **Action:** **Preserve** — OK as-is; awaiting real photography

### 16. TheClose — `TheClose.tsx`

- **Purpose:** final CTA with target reticle background
- **Question:** "What do I do next?"
- **Works:** strong visual anchor, glow CTA, softened sub S54
- **Weakens:** no explicit "what happens next" post-click sequence
- **Content:** factual (CTA)
- **Repeats:** overlaps floating CTA
- **Preserve visual?** yes
- **Action:** **Preserve and refine** — add a small 3-line "here's what happens after you contact us" list

---

## Deep pages — capsule review

- `/work` — **Preserve** (S51 build, per-client charts). Refine sub to broaden ICP.
- `/case-studies/aws-law-firm`, `/tyler-family-law`, `/hartman-dermatology` — **Preserve** (real S52 narratives).
- `/case-studies/slim-dental` — **Preserve** (S52 real NY narrative).
- `/case-studies/quattro-labs`, `/madison-clark` — **Preserve** as owned-brand pages; ensure "owned brand" is clearly labeled at page top.
- `/case-studies/coleman-co`, `/ridge-dental` — **Preserve** (uses PlatformGallery / TwinSerps components).
- `/services` + `/services/{ai-search,content,local-seo}` — **Preserve and refine** — light copy trim of "proprietary/engineered" density.
- `/methodology` — **Preserve and refine** — add the "Diagnose / Build / Measure / Expand" framing per brief.
- `/about` — **Preserve**.
- `/careers` — **Preserve** (S48).
- `/privacy` — **Preserve** (S52, 12 sections).
- `/cookies` — **Preserve** (S52).
- `/legal`, `/medical` — **Preserve**.
- `/how-we-work`, `/how-we-measure` — **Preserve**.
- `/blog` — **Preserve** (4 posts).
- `/contact` — **Preserve** (S52 Formspree wire).
- `/audit` — **Preserve**.
- `/terms` — **Preserve** (route ships).
- `/not-found` — **Preserve** (S52 branded).

---

## Sections flagged for removal

**None.** Everything on the site currently earns its place per the brief's evaluation criteria. Every "weakens" note above has a proposed refinement, not a removal.
