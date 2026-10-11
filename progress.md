# Progress: buckeyebizhub.com

Where we left off. Update this before ending a session: newest first in
each section, dates as YYYY-MM-DD.

## Current task

Tool setup (2026-10-11): standing rules, repo skills, blog guardrail, then
the "how ordering works" flow and local SEO upgrades for labels, decals,
vehicle lettering and fleet wraps.

## Outputs

- 2026-10-11: `CLAUDE.md`, `DESIGN.md`, `PRODUCT.md`, this file, repo
  skills in `.claude/skills/`, Humanizer step and hold check for the auto
  blogger (`docs/auto-blogger.md`, `scripts/house-style.mjs`).
- 2026-10-09: auto blogger routine, Tuesdays 8:45 AM ET (PR #8).
- 2026-10-07: Next.js rebuild off Lovable merged (PR #1).

## Decisions

- 2026-10-11: Local SEO work strengthens the four existing category pages
  (`/custom-labels`, `/decals-and-stickers`, `/vehicle-lettering`,
  `/fleet-wraps`) instead of adding near-duplicate city pages, which would
  compete with them in Google.
- 2026-10-11: Impeccable installed without its downloaded binary or hooks.
- 2026-10-09: Blog posts publish themselves once green (David).
- 2026-10-08: Starting prices approved in `src/content/prices.ts` (David).
- 2026-10-07: AI crawlers allowed (David). Lovable must not republish.

## Open issues

- Context7 isn't connected yet. Until it is, code sessions check official
  docs by hand.
- The number check allows small counts (12 or under) without a source, so
  "wraps last 7 years" would still pass. Humanizer and the writing rules
  are the backstop.
- Old WordPress-era posts fail the new strict checks. That's expected; the
  strict check only runs on new posts.

## Next action

David merges the setup PR, then reviews the ordering flow and page
upgrades PR and types PUBLISH when it's right.
