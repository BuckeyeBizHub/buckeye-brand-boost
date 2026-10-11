#!/usr/bin/env node
// Checks blog post JSON files before they ship. No dependencies, so it runs
// without npm install:
//
//   node scripts/check-blog-post.mjs content/blog/<slug>.json   # full checks on new posts
//   node scripts/check-blog-post.mjs                            # link checks on every post
//
// Exits 1 if anything fails. A failing post is held: the auto blogger never
// merges it, so it never goes live.
import fs from "node:fs";
import path from "node:path";
import { BANNED, siteFactNumbers, unsourcedNumbers } from "./house-style.mjs";

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "content", "blog");

// Every path the site serves: app routes, product/industry pages, blog posts.
function knownRoutes() {
  const routes = new Set(["/", "/blog"]);
  const walk = (dir, base) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!e.isDirectory() || e.name.startsWith("[")) continue;
      const route = `${base}/${e.name}`;
      if (fs.existsSync(path.join(dir, e.name, "page.tsx"))) routes.add(route);
      walk(path.join(dir, e.name), route);
    }
  };
  walk(path.join(ROOT, "src", "app"), "");
  const contentFiles = [
    path.join(ROOT, "src", "content", "industries.ts"),
    ...fs.readdirSync(path.join(ROOT, "src", "content", "products")).map((f) => path.join(ROOT, "src", "content", "products", f)),
  ];
  for (const f of contentFiles) {
    for (const m of fs.readFileSync(f, "utf8").matchAll(/^ {4}slug: "([^"]+)"/gm)) routes.add(`/${m[1]}`);
  }
  for (const f of fs.readdirSync(BLOG_DIR)) if (f.endsWith(".json")) routes.add(`/blog/${f.slice(0, -5)}`);
  return routes;
}

// Old URLs that 301 somewhere real. Links should point at the final URL.
function redirectSources() {
  const src = fs.readFileSync(path.join(ROOT, "next.config.ts"), "utf8");
  return new Set([...src.matchAll(/\["(\/[^"]+)", "\/[^"]*"\]/g)].map((m) => m[1]));
}

const routes = knownRoutes();
const facts = siteFactNumbers(ROOT);
const redirects = redirectSources();
const productAndIndustry = [...routes].filter((r) => !r.startsWith("/blog") && r.split("/").length === 2);

function check(file, strict) {
  const errors = [];
  const raw = fs.readFileSync(file, "utf8");
  let post;
  try {
    post = JSON.parse(raw);
  } catch (e) {
    return [`not valid JSON: ${e.message}`];
  }
  const content = post.content || "";
  const hrefs = [...content.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);

  for (const original of hrefs) {
    const own = original.match(/^https?:\/\/(www\.)?buckeyebizhub\.(com|blog)(\/.*)?$/i);
    if (own) {
      if (own[2].toLowerCase() === "blog") errors.push(`link to the old WordPress blog: ${original}`);
      else if (strict) errors.push(`absolute link to our own site, use a relative path: ${original}`);
    }
    const href = own ? own[3] || "/" : original;
    if (!href.startsWith("/")) continue;
    const p = href.split(/[?#]/)[0].replace(/\/$/, "") || "/";
    if (p.startsWith("/media/") || p.startsWith("/assets/") || p.startsWith("/photos/")) {
      if (!fs.existsSync(path.join(ROOT, "public", p))) errors.push(`missing file: ${href}`);
    } else if (redirects.has(p)) {
      errors.push(`link goes through a redirect, link the final URL instead: ${href}`);
    } else if (!routes.has(p)) {
      errors.push(`broken internal link: ${href}`);
    }
  }

  if (!strict) return errors;

  const slug = path.basename(file, ".json");
  if (post.slug !== slug) errors.push(`slug "${post.slug}" does not match file name "${slug}"`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) errors.push(`slug must be lowercase words joined by hyphens`);
  if (routes.has(`/${slug}`)) errors.push(`slug clashes with an existing page: /${slug}`);
  for (const k of ["title", "date", "modified", "excerpt", "author", "featuredImage", "featuredAlt", "content"]) {
    if (!post[k]) errors.push(`missing ${k}`);
  }
  if (!Array.isArray(post.categories) || post.categories.length === 0) errors.push("needs at least one category");
  if (post.title && post.title.length > 65) errors.push(`title is ${post.title.length} characters, keep it to 65`);
  if (post.date && Number.isNaN(Date.parse(post.date))) errors.push(`date is not a valid date: ${post.date}`);
  if (post.featuredImage && !fs.existsSync(path.join(ROOT, "public", post.featuredImage))) {
    errors.push(`featuredImage not found in public/: ${post.featuredImage}`);
  }
  if (/<h1[\s>]/i.test(content)) errors.push("content has an <h1>; the page already uses the title as the H1");
  if ((content.match(/<h2[\s>]/gi) || []).length < 3) errors.push("content needs at least three <h2> sections");

  const words = content.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  if (words < 800) errors.push(`content is ${words} words, needs at least 800`);
  if (words > 2200) errors.push(`content is ${words} words, keep it under 2200`);

  const linked = new Set(hrefs.map((h) => h.split(/[?#]/)[0].replace(/\/$/, "")).filter((h) => productAndIndustry.includes(h)));
  if (linked.size < 2) errors.push("link at least two service or industry pages");
  if (!hrefs.some((h) => h.startsWith("/contact"))) errors.push("link /contact at least once");

  // House style (scripts/house-style.mjs): no em dashes, no banned words,
  // no numbers without a source.
  if (/—|–|&mdash;|&ndash;|\s--\s/.test(raw)) errors.push("contains an em or en dash");
  const prose = [post.title, post.excerpt, post.featuredAlt, content].join(" ").replace(/<[^>]*>/g, " ").replace(/&#39;|&rsquo;/g, "'");
  for (const [pattern, reason] of BANNED) if (pattern.test(prose)) errors.push(reason);
  errors.push(...unsourcedNumbers([post.title, post.excerpt].map((t) => `<p>${t}</p>`).join("") + content, facts));

  if (raw !== JSON.stringify(post, null, 2) + "\n") errors.push("format: write with 2-space indent and a trailing newline");
  return errors;
}

const args = process.argv.slice(2);
const files = args.length ? args : fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".json")).map((f) => path.join(BLOG_DIR, f));
let failed = 0;
for (const f of files) {
  const errors = check(f, args.length > 0);
  if (errors.length) {
    failed++;
    console.log(`FAIL ${path.relative(ROOT, f)}`);
    for (const e of errors) console.log(`  - ${e}`);
  } else {
    console.log(`ok   ${path.relative(ROOT, f)}`);
  }
}
process.exit(failed ? 1 : 0);
