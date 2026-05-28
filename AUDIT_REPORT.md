# Rysen Growth — Agency Site Audit (Phase 1)

_Audit date: 2026-05-26. Report only — Phase 2 will build the prioritized items._

This audit measures the current state of `rysengrowth.com` against what a serious 100+ person agency website typically ships. Items are tagged **P0** (critical), **P1** (important), **P2** (nice-to-have).

---

### 1. Legal + compliance

**Currently present:**
- Privacy Policy at `/privacy` (12 sections, "Last updated May 2026").
- Terms placeholder page at `/terms` (route exists per build output).
- `prefers-reduced-motion` honored site-wide.

**Missing:**
- Cookie consent banner with explicit accept/reject and category controls (P0 for EU traffic).
- Cookie policy detail (currently combined into Privacy) (P1).
- Accessibility Statement page describing WCAG conformance + contact for remediation (P1).
- DSAR / data-rights request form (currently a mailto only) (P1).
- DMCA / copyright notice (P2).
- Cookie analytics opt-out wired to actual analytics provider (P1 once analytics is added).

**Recommendation:** Ship a cookie consent banner with category-level controls before any analytics goes live. Split Cookie Policy into its own page and link it from the banner + Privacy. Add an accessibility statement and a structured DSAR form.

---

### 2. Pages typically present on agency sites

**Currently present:**
- Home (`/`)
- Work index (`/work` — built in Session 51)
- Per-client case studies (`/case-studies/aws-law-firm`, `/case-studies/tyler-family-law`, `/case-studies/slim-dental`, `/case-studies/hartman-dermatology`, plus `coleman-co`, `madison-clark`, `quattro-labs`, `ridge-dental`).
- Case studies index at `/case-studies`.
- Services index at `/services` + sub-pages (`/services/ai-search`, `/services/content`, `/services/local-seo`).
- Methodology (`/methodology`), How-we-work, How-we-measure.
- Vertical landing pages: `/legal`, `/medical`.
- About (`/about`).
- Careers (`/careers`).
- Contact (`/contact`).
- Audit lead-magnet (`/audit`).
- Blog (`/blog`) + 4 posts.
- Privacy, Terms, RSS feed, sitemap.xml, robots.txt.

**Missing:**
- FAQ page (P1).
- News / Press page (linked from About but no dedicated page) (P2).
- HTML sitemap for users (P2).
- 404 page with branded design (Next.js default is in use) (P1).
- 500 / error boundary page (P2).
- Pricing / engagement-tier page (deliberate boutique stance may justify omission) (P2).

**Recommendation:** Ship a real 404 page (brand it; offer the search demo + 4 most-relevant links). Stand up an FAQ page sourced from real prospect questions. The site is otherwise unusually complete for page coverage.

---

### 3. SEO + discoverability

**Currently present:**
- `sitemap.xml` and `robots.txt` (built by Next.js).
- Per-page `<title>` and meta description on every page that ships a Next `Metadata` export.
- Open Graph image generator for blog posts (`/blog/[slug]/opengraph-image`).
- RSS feed at `/rss.xml`.

**Missing:**
- Default OG image / Twitter Card on home + non-blog pages (P0 — links shared today look unbranded).
- Canonical URLs on all pages (P1).
- JSON-LD structured data (P0): `Organization`, `WebSite`, `BreadcrumbList`, `LocalBusiness`, `Service`, `Article` on blog posts. None of these are present.
- `apple-touch-icon` and full PWA icon set (P2).
- Per-page Twitter handle / `twitter:creator` (P2).

**Recommendation:** Ship JSON-LD `Organization` + `LocalBusiness` (Detroit) sitewide; add per-page `BreadcrumbList`; add `Article` markup on blog. Generate a default OG image with the Rysen brand mark for all non-blog pages.

---

### 4. Performance + technical

**Currently present:**
- `next/image` is used in several places (TheTeam, TheOffice).
- LazyVideo component gates Quattro clips on IntersectionObserver (Session 45).
- RankClimb container locked to fixed height — no document reflow.
- Reveal motion is GPU-friendly (opacity + transform only).
- Off-screen looping animations are gated via IntersectionObserver (Session 47).

**Missing:**
- Many viral carousel images and brand stills are raw `<img>` rather than `next/image` (P1 — losing srcset + AVIF/WebP).
- No measured Lighthouse score in the repo; estimated Performance is high but unverified (P1).
- Bundle analysis not run; possible unused-code in `src/components/sections/*` (P2).
- Above-the-fold critical CSS not extracted (Next handles some of this) (P2).

**Recommendation:** Migrate the viral carousel + AwardsStrip + RosterTable favicon images to `next/image`. Run Lighthouse on home/work/case-study/contact and capture the baseline. Audit `src/components/sections` for unused files (several from earlier sessions look superseded — eg `homepage-previews.tsx`).

---

### 5. Accessibility (a11y)

**Currently present:**
- Semantic landmarks (`<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
- `aria-label` / `aria-hidden` used on icons and decorative SVG.
- `prefers-reduced-motion` respected everywhere.
- Focus styles inherited from default browser styles.
- Mobile drawer (Session 51) traps focus + closes on Escape.

**Missing:**
- "Skip to main content" link (P0 — required for keyboard users).
- Custom focus rings — current default outline is inconsistent across components (P1).
- Color-contrast audit (especially `--text-tertiary` on `--canvas-recessed`) (P1).
- Alt text on many decorative images is empty; some content images need richer alt (P1).
- ARIA labelling on the world-clock row and the marker-underline could be tighter (P2).

**Recommendation:** Add a skip-link as the first focusable element. Run an automated a11y pass (axe DevTools) on home/work/case-study/careers/contact and remediate findings. Standardize the focus ring across all interactive elements.

---

### 6. Internal linking + IA

**Currently present:**
- Footer with Sitemap column (Methodology · Services · Work · About · Careers · Contact), Verticals column, Contact column.
- Header nav with About dropdown + Careers + Transparency tabs.
- `/work` index links to each case study (Session 51).
- Carousel case-study cards link to per-client pages.
- Methodology callout from `/work`.

**Missing:**
- Breadcrumbs on deep pages (P1 — case studies, services sub-pages, blog posts).
- An HTML sitemap page (P2).
- Cross-links between Services and Case Studies (which service produced which result) (P1).
- "Related" suggestions at the bottom of each case study (P1).

**Recommendation:** Add a `<Breadcrumbs>` component used on case-study, service, and blog detail pages. Link Services pages outward to relevant case studies and vice versa. Add a "More work" strip at the bottom of each case study.

---

### 7. Trust + credibility

**Currently present:**
- Real testimonials with attribution (`TheWall`, 5 quotes).
- Office section (`/components/sections/TheOffice`) with team imagery (currently AI placeholders — Session 50 noted this).
- Operators section showing the four owned brands (Quattro Labs, The Honest Plumbers, The Honest Maids, Madison Clark) with growth data.
- Founder portrait (currently AI placeholder).
- Per-client case-study pages.
- Honest pipeline math in the lead feed (Session 50).

**Missing:**
- Real team photos to replace the AI placeholders (P0 for credibility).
- Press / "as featured in" logos with verifiable links (P1).
- Client logos (with permission) (P2 — selective).
- Awards / recognition — removed in Session 49; if real awards exist, surface them (P2).
- Third-party verification of results (e.g. SEMrush rank screenshots) (P1).

**Recommendation:** Replace the AI placeholders with real photography as soon as a shoot is scheduled. Add a small "Verified by" line on each case-study metric pointing to its source (Search Console screenshot, GA snapshot, etc.). Selectively add 2-3 real press placements once they exist.

---

### 8. Conversion + contact

**Currently present:**
- `/contact` page (route ships; needs verification of actual form).
- `marketing@rysengrowth.com` + `(248) 406-6223` exposed in footer + TheClose.
- "Claim your city" CTA in hero, header, mobile drawer, floating bar, and TheClose — strong distribution.
- `/audit` page as a free-audit lead magnet.
- mailto: apply links per-role on `/careers`.

**Missing:**
- Backend behind the contact form (currently unverified) — confirm form submissions go somewhere (P0 if not wired).
- Calendar / scheduling integration (Calendly etc.) for direct booking (P1).
- "Save for later" / engagement tracking on the audit form (P2).
- Exit-intent / scroll-depth CTA testing (P2).
- Phone-call tracking number for attribution (P1).

**Recommendation:** Verify the `/contact` form actually delivers (Formspree / Resend / API route) and acknowledge submissions. Add a Calendly link on the Contact page and in the floating CTA for prospects who prefer to book directly.

---

### 9. Analytics + tooling

**Currently present:**
- _No analytics found in the repo._ No Google Analytics, no Plausible, no Vercel Analytics import, no Tag Manager.
- Privacy policy text references "Vercel Analytics or similar" but it does not appear to be wired in.

**Missing:**
- Web analytics (P0 — flying blind).
- Conversion / goal tracking (form submit, audit request, mailto click) (P0).
- Tag Manager for downstream integrations (P1).
- Heatmap / session recording (Hotjar / Clarity) (P2).
- Server-side analytics for high-intent actions (P2).
- Real-time dashboard / Looker / Datastudio for the team (P2).

**Recommendation:** Wire **either** Vercel Analytics (lowest friction, privacy-respecting) **or** Plausible (richer event API) site-wide. Define and instrument the 4 core conversion events: audit form submit, contact form submit, mailto click, "Claim your city" click. This is the single highest-leverage missing item.

---

### 10. Content depth

**Currently present:**
- Blog at `/blog` with 4 in-depth posts.
- Methodology, How-we-work, How-we-measure pages.
- Per-client case-study pages (some placeholder content remains — slim-dental and quattro-labs both contain "PLACEHOLDER:" markers).

**Missing:**
- Full narrative case-study content (currently placeholder on most pages) (P0 — these are the proof).
- Downloadable resources (audits, whitepapers, templates) gated by email (P1).
- Video content (the Quattro clips are decorative, not informational) (P2).
- Service-specific deep dives beyond the existing three (P2).

**Recommendation:** Fully write out the case-study pages. Each needs a real challenge / approach / result narrative with screenshots. After that, ship 1-2 gated resources (e.g., "The first-position playbook PDF") to capture lead emails.

---

### 11. Social proof + community

**Currently present:**
- Owned-brand proof via Operators (4 brands with growth data).
- Viral carousel showing Instagram feed grids of the owned brands.
- Madison Clark profile-grid spotlight card.
- Testimonials in TheWall.

**Missing:**
- Linked social profiles in the footer or contact area (P1 — there is currently no IG / LinkedIn / YouTube link anywhere).
- Newsletter signup (no opt-in form anywhere) (P1).
- Slack community / events / meetups (P2).
- Public roadmap or changelog (P2).

**Recommendation:** Add a footer social row (LinkedIn, IG, YouTube) and a newsletter opt-in on the blog index + a dismissible homepage banner (low-friction). Keep the signup form tasteful and on-brand.

---

### 12. Internationalization (i18n)

**Currently present:**
- All content is English-only, single locale.

**Missing:**
- Locale routing / `next-intl` setup (P2 — depends on strategy).
- Translated content (P2).
- Region-aware copy or pricing (P2).

**Recommendation:** Not a priority. The current ICP is US firms in named metros. Defer i18n unless the agency expands into Canada / UK markets, in which case start with a `/uk` or `/ca` locale rather than full route-level i18n.

---

## Prioritized top-10 next steps (build in Phase 2)

1. **Wire analytics (P0).** Vercel Analytics or Plausible site-wide; instrument the 4 core conversion events. Cannot manage what we cannot see.
2. **Verify and harden the `/contact` form (P0).** Confirm submissions reach the team and the user sees an acknowledgement; add a server-side fallback if it doesn't.
3. **Real case-study narratives (P0).** Replace the placeholder text on slim-dental, quattro-labs, and any other case-study pages with the actual challenge / approach / result, with verified screenshots.
4. **Cookie consent + Cookie Policy (P0).** Banner with category controls before analytics fires; dedicated `/cookies` page; opt-out plumbing.
5. **JSON-LD structured data (P0).** Organization + LocalBusiness sitewide; BreadcrumbList on deep pages; Article on blog posts.
6. **Default OG image + sitewide Twitter cards (P0).** Branded preview when any non-blog page is shared.
7. **Real team photography (P0 once shoot is scheduled).** Swap the AI placeholders in TheOffice + TheTeam + founder portrait.
8. **Skip-to-content link + a11y pass (P1).** Skip link first, then axe DevTools sweep of home/work/case-study/careers/contact.
9. **Branded 404 page (P1).** Brand it; offer the search demo + the four most-relevant destinations.
10. **Breadcrumbs + cross-links between Services and Case Studies (P1).** Plus a "More work" strip at the bottom of each case study so users keep moving forward.

After this top-10, the second batch (Calendly, FAQ, newsletter, footer socials, press logos, performance audit, related-content suggestions, downloadable resources) becomes the natural follow-up.
