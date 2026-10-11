# Auto blogger

Blog posts live in this repo as `content/blog/<slug>.json`. Merging a post to
`main` publishes it: Vercel rebuilds and the post appears at
`/blog/<slug>`, in the sitemap and on the blog index. WordPress is no longer
involved.

A scheduled Claude routine runs once a week (Tuesday morning, US Eastern)
and publishes one post per run. David asked on 2026-10-09 for the blog to
keep updating on its own, so the routine merges its own post once every
check is green. David reviews after the fact and can ask for any post to be
edited or pulled.

1. Start from the latest `main`. If an open pull request whose branch starts
   with `blog/auto-` already exists, finish that one first (step 8) instead
   of writing a new post.
2. If fewer than four unchecked lines are left in `content/blog-queue.md`,
   add six new lines first, in the same format: topics a Columbus or Central
   Ohio buyer would search, each tied to a service or industry page in
   `src/content/` that the queue and `content/blog/` don't already cover
   (or a clearly different question about one), with a fitting image path.
   Never repeat a topic or target keyword that an existing post covers.
3. Take the first unchecked line in `content/blog-queue.md`.
4. Read the page that line names (its file in `src/content/`) so the post
   matches what Buckeye Biz Hub actually sells and how the page describes it.
   Read two existing posts in `content/blog/` for tone.
5. Write `content/blog/<slug>.json` (format below) and check the queue
   line's box.
6. Humanizer pass, before anything can go live: follow
   `.claude/skills/humanizer/SKILL.md` in embedded mode on the title,
   excerpt, `featuredAlt` and every paragraph of `content`. Change prose
   only; keep every link, price, number and HTML tag as it was, and do not
   add facts. The Writing rules below win where the two disagree.
7. Run `node scripts/check-blog-post.mjs content/blog/<slug>.json` until it
   passes. Then run `node scripts/check-blog-post.mjs` (all posts). The
   check holds the post (fails, so it can't merge) if it has an em or en
   dash, a banned word or phrase from `scripts/house-style.mjs`, or a number
   that isn't already on the site and isn't in a paragraph that links its
   source. Fix the sentence; never edit `house-style.mjs` to get a post
   through.
8. Push a branch named `blog/auto-<slug>` and open a pull request titled
   `Blog: <post title>`. Wait for the GitHub "check" job and the Vercel
   preview status on the head commit. When both are green, merge the pull
   request (merge commit). If either fails, fix the post and push again; if
   it still fails, leave the pull request open and say what failed. Never
   push straight to `main` and never merge anything that is not green.

## Writing rules

- Audience: owners and office managers of small businesses in Columbus and
  Central Ohio. Plain, practical, first person plural ("we") is fine.
- Answer the question in the title in the first two paragraphs. Then use
  three to six `<h2>` sections, short paragraphs, and lists where they help.
  800 to 1,600 words.
- Facts about Buckeye Biz Hub come only from this repo: services and
  descriptions from `src/content/`, starting prices from
  `src/content/prices.ts`, phone (614) 561-3358, address 1193 Virginia Ave,
  Columbus. Do not invent prices, turnaround times, customer names, reviews,
  results, statistics or partnerships. If a general fact needs a number
  (a USPS or USDOT rule, for example), say where it comes from and link the
  official source, or leave the number out.
- No em dashes. No "guaranteed", "#1" or "best in Columbus" claims. No
  banned words (list in `scripts/house-style.mjs`): delve, unlock,
  game-changer, tapestry, harness, cutting-edge, furthermore, "in
  conclusion", "not just X, but Y", "Here's the thing" and the rest.
- Internal links: relative paths only (`/custom-labels`, never
  `https://www.buckeyebizhub.com/custom-labels`). Link the queue line's page
  in the first few paragraphs with a descriptive anchor, link at least one
  other related service or industry page, and link `/contact` near the end.
  Link at most one or two older posts where they genuinely help.
- Images: use an existing file under `public/assets` or `public/photos` that
  fits the topic. Describe what the image shows in `featuredAlt`. Don't
  describe a mockup or stock image as Buckeye Biz Hub's own work unless the
  file name ends in `-real`.
- Don't repeat a topic or target keyword that an existing post already
  covers. Check titles in `content/blog/` first.

## Post format

Written with `JSON.stringify(post, null, 2)` plus a trailing newline.

```json
{
  "slug": "roll-labels-vs-sheet-labels-columbus",
  "title": "Roll Labels vs Sheet Labels for Columbus Small Businesses",
  "date": "2026-10-12T09:00:00",
  "modified": "2026-10-12T09:00:00",
  "excerpt": "<p>One or two sentences that work as the meta description.</p>",
  "categories": [{ "name": "Custom Printing", "slug": "custom-printing" }],
  "tags": [],
  "author": "David Stein",
  "featuredImage": "/assets/decals-hero.jpg",
  "featuredAlt": "Sheets of printed product labels on a work table",
  "content": "<p>...</p><h2>...</h2><p>...</p>"
}
```

- `slug`: lowercase words joined by hyphens, about four to seven words, and
  not the same as any service or industry page slug.
- `title`: 65 characters or fewer, with the main keyword near the front.
- `categories`: reuse an existing category from another post
  (`custom-printing`, `vehicle-branding`, `signage`, `promotional-products`,
  `trade-show-events`, `apparel-embroidery`). Add a new one only if none fits.
- `date`: the day the pull request is opened.
