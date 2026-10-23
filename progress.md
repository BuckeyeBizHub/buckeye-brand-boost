# Progress: buckeyebizhub.com

Where we left off. Update this before ending a session: newest first in
each section, dates as YYYY-MM-DD.

## Current task

Site rebuild from the vendor catalog map (2026-10-22, plan:
https://claude.ai/artifact/L3QPvpjGSQLh94xBUrkuaj). Five sections, one PR
each: apparel (done, PR #17), signs (done, PR #18), printing (done, PR #19),
labels and packaging, then menus and home page.

## Outputs

- 2026-10-23: product page look, first pass (David: new pages "boring").
  Template now shows photo tiles for options when every option has an
  image, and a larger hero photo. Rack cards, posters and magnets pages get
  section photos from existing assets; magnets hero is now a calendar.
  Round 1 photo pack: 9 Higgsfield photos (David picked Higgsfield, about
  2.5 of 300 plan credits) as heroes and section photos on those 3 pages.
  Shot list: /mnt/project-files/website/photo-pack/. Draft PR #20.
- 2026-10-22: printing section. New `/rack-cards`, `/poster-printing` and
  `/magnets-and-calendars` (no prices yet, none in `prices.ts`). Business
  cards page gets a specialty finishes section (foil, spot UV, soft touch,
  painted edges). `/business-printing` hub lists every print page.
  Letterhead page relabeled "Office stationery and forms" in menus. Dental
  and restaurant industry pages link the new pages. Magnets and rack cards
  use stand-in photos. PR #19, merged on PUBLISH by David.
- 2026-10-22: signs section. New `/aluminum-signs` (aluminum, ACM, PVC,
  acrylic), `/a-frame-signs` and `/safety-and-parking-signs`. Trade show
  page gets a table throw and step-and-repeat section. Construction, real
  estate, medical and fleet industry pages link the new pages. PR #18,
  merged on PUBLISH by David.
- 2026-10-22: apparel section. `/embroidered-apparel` split into a hub
  (`/custom-apparel`), decoration pages (`/screen-printing`, `/embroidery`,
  `/dtf-printing`), garment pages (`/custom-t-shirts`, `/custom-polos`,
  `/custom-jackets`, `/custom-hats`, `/custom-hoodies-and-pullovers`) and
  `/team-stores`. Garment pages show popular styles from the distributor
  catalog (`src/content/products/apparel-styles.ts`, no prices) with the
  distributor's photos hotlinked. 301 `/embroidered-apparel` to `/embroidery`.
  PR #17, merged by David.
- 2026-10-22: Contact quote form switched from Tally to Fillout
  (`@fillout/react`), form id `jPqs2ct8BQus` in `src/content/forms.ts`
  (empty id falls back to Tally QKYlz8). Free plan caps uploads at 20 MB
  per file. PR #16, merged on PUBLISH by David.
- 2026-10-16: 301s for 8 dead old printing and folder URLs
  (`/business-printing-columbus`, `/*-folders-columbus` and others) to
  `/business-printing`, `/real-estate` and `/presentation-folders`, with
  `src/test/redirects.test.ts`. Draft PR, waiting on PUBLISH.
- 2026-10-11: audit fix 2. The number check no longer counts code comments
  as site facts, and a number that reads as a claim ("7 years", "40
  fleets", "3 times", "5-star") needs a source unless the site already
  says it the same way. New `scripts/check-site-copy.mjs` runs house style on
  site pages. New CI workflow `site-check.yml`: copy check, tests, strict build.
- 2026-10-11: `CLAUDE.md`, `DESIGN.md`, `PRODUCT.md`, this file, repo
  skills in `.claude/skills/`, Humanizer step and hold check for the auto
  blogger (`docs/auto-blogger.md`, `scripts/house-style.mjs`).
- 2026-10-09: auto blogger routine, Tuesdays 8:45 AM ET (PR #8).
- 2026-10-07: Next.js rebuild off Lovable merged (PR #1).

## Decisions

- 2026-10-22: Quote form moves from Tally to Fillout so uploads land in a
  Google Drive folder directly (David: "go Fillout").
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
- Claims David hasn't decided (MARKETING-PLAN "Claims decision"): 5-star
  badge, "within 24 hours", "we make it right", "wholesale pricing". Also
  "4,300+ vetted suppliers" on the promo pages has no source in the repo.
- Old WordPress-era posts fail the new strict checks. That's expected; the
  strict check only runs on new posts.

## Next action

David clicks through the printing preview and types PUBLISH, or sends
changes. Then step 4, labels and packaging.

Earlier:

David reviews the audit fix 2 PR (number check and site check) and
decides the four sitewide claims.
