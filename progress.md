# Progress: buckeyebizhub.com

Where we left off. Update this before ending a session: newest first in
each section, dates as YYYY-MM-DD.

## Current task

Site rebuild from the vendor catalog map (2026-10-22, plan:
https://claude.ai/artifact/L3QPvpjGSQLh94xBUrkuaj). Five sections, one PR
each: apparel (done, PR #17), signs (done, PR #18), printing (done, PR #19),
labels and packaging (done, PR #22), then menus and home page (draft PR).

## Outputs

- 2026-10-26: menus, home page and sitemap (step 5). Apparel is its own
  product group ("Custom apparel"), split from "Promo and packaging"
  (promo products, packaging, hang tags, rebrand kits). Products menu,
  footer and the home page list now use five columns, with vehicle wraps
  and promo sharing the last one (`MENU_COLUMNS` in `catalog.ts`). Products
  hub, its title, the footer blurb, the home hero lede and the business
  schema now mention apparel. The Products menu now centers under the
  header (it was clipping the first column on the left). Sitemap already
  lists every page from `src/content`. Draft PR.
- 2026-10-26: apparel style picks v2 (David: "general showing, nicer
  brands"). Garment pages now show 33 styles (was 44) from the updated
  /mnt/project-files/apparel/site-styles/styles.json. Budget brands are out,
  and Richardson, Columbia and DRI DUCK beanies are in. Still no prices.
  PR #23, merged.
- 2026-10-23: labels and packaging section. New `/hang-tags` page (apparel,
  gift, price, shaped, folded and bottle neck tags; no price, none in
  `prices.ts`). `/custom-labels` gets a materials section (paper, BOPP,
  clear, metallic, kraft) and a finishes section (gloss, matte, laminate).
  `/decals-and-stickers` gets a vinyl and laminate section. Round 3 photo
  pack: 25 Higgsfield photos (about 6 credits) as option tiles on labels,
  decals and hang tags, plus hang tags hero and section photos. Packaging
  and labels pages link hang tags. PR #22, merged on PUBLISH by David.
- 2026-10-23: round 2 photo pack. 18 Higgsfield photos (plus 2 redos for
  calendars that showed a past year, about 5 credits) as option photo tiles
  on `/rack-cards`, `/poster-printing` and `/magnets-and-calendars`. PR #21,
  merged on PUBLISH by David.
- 2026-10-23: product page look, first pass (David: new pages "boring").
  Template now shows photo tiles for options when every option has an
  image, and a larger hero photo. Rack cards, posters and magnets pages get
  section photos from existing assets; magnets hero is now a calendar.
  Round 1 photo pack: 9 Higgsfield photos (David picked Higgsfield, about
  2.5 of 300 plan credits) as heroes and section photos on those 3 pages.
  Shot list: /mnt/project-files/website/photo-pack/. PR #20, merged on PUBLISH by David.
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

## 2026-10-26: Contact page look

David said the Contact page looked boring. Refinement only (same palette and
fonts): hero now has David's photo with a "David answers every request
himself" card, the phone card is dark ink, the duplicate clock card is gone,
and the "how ordering works" band sits under the form. Draft PR, nothing
live until PUBLISH. Open: the Fillout form inside the page still wears
Fillout's blue default button; restyling it is a separate call.
