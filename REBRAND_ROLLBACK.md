# Rysen Rebrand 2.0 — Rollback Procedure

The previous site state (before Rebrand 2.0) is preserved in two ways:

## Option 1: Rollback to the tagged release
```
git checkout v1.0-pre-rebrand
git checkout -b restore-from-pre-rebrand
git push origin restore-from-pre-rebrand
```
Then on GitHub, set this branch as main (or merge it forward).

## Option 2: Rollback to the backup branch
```
git checkout backup-pre-rebrand-2026-may
git checkout -b restore-from-pre-rebrand
git push origin restore-from-pre-rebrand
```
Then on GitHub, set this branch as main.

## Option 3: Check what the previous state looked like without restoring
```
git checkout v1.0-pre-rebrand
```
(view the files in this state — when finished, return with: `git checkout main`)

The tagged release `v1.0-pre-rebrand` and branch `backup-pre-rebrand-2026-may` both contain the complete pre-rebrand site.

## Option 4: Rollback to v2.1-pre-architecture (pre-Session-26)
```
git checkout v2.1-pre-architecture
git checkout -b restore-from-pre-architecture
git push origin restore-from-pre-architecture
```
Points at commit `059f271` — the state immediately after Sessions 23–25 finished but before the Session 26 architecture restructure (new deep pages, blueprint illustrations, content redistribution).

## Option 5: Rollback to v2.6-pre-polish (pre-Session-27)
```
git checkout v2.6-pre-polish
git checkout -b restore-from-pre-polish
git push origin restore-from-pre-polish
```
Points at commit `722dc02` — the state immediately after Session 26 Phase 2 (content migration + 12-section homepage + /services/ /case-studies/ /methodology expansions + breadcrumbs + page transitions) but before the Session 27 polish (hero fit, yellow readability, custom card architecture, scroll reveals, interlink bridges).

## Option 6: Rollback to v2.7-pre-deai-audit (pre-Session-28)
```
git checkout v2.7-pre-deai-audit
git checkout -b restore-from-pre-deai-audit
git push origin restore-from-pre-deai-audit
```
Points at commit `7d4445e` — the state immediately after Session 27 polish (hero 4-line fit, yellow text readability with --signal-text token, custom TechDocCard/IndexCard/DataRow components, ScrollReveal/StaggerReveal, InterlinkBridges, page transition framer-motion, typography refinements) but before the Session 28 de-AI audit (monospace purge, em-dash purge, "independent firm" removal, Madison Clark fact corrections, new FeatureCard/FactCard/ProfileCard patterns).

## Option 7: Rollback to v2.9-pre-confidential-redesign (pre-Session-30)
```
git checkout v2.9-pre-confidential-redesign
git checkout -b restore-from-pre-confidential-redesign
git push origin restore-from-pre-confidential-redesign
```
Points at commit `10b4a7a` — the state after Session 28 (Phases 1-4) but before the Session 30 homepage redesign (animated Google search hero, 8-section homepage, removal of FirmAtAGlance, WhatThisMeans, VerticalsWeServe, etc.).
