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
