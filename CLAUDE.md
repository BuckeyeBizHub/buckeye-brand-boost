# buckeyebizhub.com: standing rules

The Buckeye Biz Hub website. Same stack and the same build rules as
referralens.com: Next.js 16 (App Router) + Tailwind + shadcn/ui, hosted on
Vercel (team "Buckeye Biz Hub"), deployed by merging to `main`. Read
`README.md` for where things are and `progress.md` for where we left off.

## Gates (David's words, never implied)

- **Merging to `main` publishes the site.** Nothing visible goes live unless
  David types PUBLISH. Work on a branch, open a draft PR, and stop there.
  The one exception is the weekly auto blogger, which follows
  `docs/auto-blogger.md` and merges only green posts.
- Never push straight to `main`. Never merge anything that is not green.
- Never touch DNS, Vercel domains or GoDaddy. Never change secrets or paste
  tokens anywhere. Environment variable names only; values live in Vercel.
- Never send email or text, place an order, or spend money (ads, paid APIs,
  renders) from this repo.
- Lovable must never republish from this repo.

## Build rules (carried over from ReferraLens)

- One feature per branch and per PR.
- Before writing code against a library (Next.js, React, Tailwind, shadcn,
  framer-motion, zod), check current docs with Context7 (`resolve-library-id`
  then `get-library-docs`). The repo pins Next 16.2.9 and React 19; training
  memory is often a version behind. If Context7 isn't connected in the
  session, say so and check the official docs instead.
- `npm run build` (the strict build Vercel runs) and `npm test` must pass
  before you push. Dev mode is forgiving; the build is not.
- Every job ends with a receipt: files changed, how it was tested, the PR
  link and base (must be `main`), and what still needs David.
- No source, no number. Never invent prices, turnaround times, review counts,
  customer names, results or statistics. Prices come only from
  `src/content/prices.ts` (approved by David). Photos are described as what
  they show, never as a past job unless the file name ends in `-real`.
- Pages are data: product and industry pages live in `src/content/` and
  render through `src/app/[slug]`. Add a page there, not as a new route.
  New static pages also go in `src/lib/site-routes.ts` for the sitemap.
- Internal links are relative (`/fleet-wraps`). Old URLs 301 in
  `next.config.ts`; link the final URL.

## Look (sister site to referralens.com)

Follow `DESIGN.md`. Use the Impeccable skill (`.claude/skills/impeccable`)
for any UI work, in refinement mode: keep the incumbent look, palette and
fonts. Do not redesign unless David asks. Impeccable's launcher binary and
edit hooks were left out on purpose; when its setup step says the launcher
is unavailable, read `PRODUCT.md` and `DESIGN.md` directly and carry on.

## Copy

Public copy follows David's writing rules: sound like David, short
sentences, active voice, you/your, real numbers or none, no em dashes, no
"not just X but Y", no fake warmth. The banned list is
`scripts/house-style.mjs`. Run the Humanizer skill as the last pass on any
public copy. Confidentiality: no client internal numbers or patient data,
and don't name client staff in anything that may be forwarded.

## Which skill for which job

| Job | Skill |
|---|---|
| Any UI, layout or styling change | `impeccable` |
| Flowcharts and process maps for the site (e.g. how ordering works) | `diagram-design`, then port the SVG into a React component |
| Local SEO and service pages | `programmatic-seo` + `copywriting`, with `seo-human-writer` for the prose |
| Lead forms and calls to action | `cro` |
| Final pass on any public copy, blog posts included | `humanizer` |
| Before launching anything that collects customer data | `security-audit` (guidance mode; full audit only when David asks) |

Third-party skills were read before install; sources and what was removed
are in `.claude/skills/THIRD_PARTY.md`.

## Session habits

- Pick model and effort at the start. Don't add connectors or plugins
  mid-task. Compact only between tasks.
- End each session with: what changed, the proof, what's uncertain, one
  thing to check. Update `progress.md` before you stop.
- If David corrects the same mistake twice, add it here as a rule.
