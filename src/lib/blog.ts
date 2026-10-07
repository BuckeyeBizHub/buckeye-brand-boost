// Blog posts are stored as JSON in content/blog/<slug>.json and read from
// disk at build time. No network calls. Server only: client components get
// posts as props from the page components in src/app.
import fs from "node:fs";
import path from "node:path";
import {
  decodeHtmlEntities,
  toPlainText,
  toSummary,
  type BlogCategory,
  type BlogPost,
  type BlogPostSummary,
  type BlogTerm,
} from "@/lib/blog-utils";

export * from "@/lib/blog-utils";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// The page already has the post title as its one <h1>. WordPress bodies
// sometimes repeat it: drop a leading copy and demote any other <h1>.
function demoteHeadings(html: string, title: string): string {
  const plain = (s: string) => s.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  let out = html.replace(/^\s*<h1[^>]*>([\s\S]*?)<\/h1>/i, (m, inner: string) =>
    plain(inner) === plain(title) ? "" : m,
  );
  out = out.replace(/<h1(\s|>)/gi, "<h2$1").replace(/<\/h1>/gi, "</h2>");
  return out;
}

interface RawTerm {
  name?: string;
  slug?: string;
}

interface RawPost {
  slug?: string;
  title?: string;
  date?: string;
  modified?: string;
  excerpt?: string;
  categories?: RawTerm[];
  tags?: RawTerm[];
  author?: string;
  featuredImage?: string | null;
  featuredAlt?: string;
  content?: string;
}

function normalizeTerms(terms: RawTerm[] | undefined): BlogTerm[] {
  return (terms || [])
    .filter((t) => t && t.slug)
    .map((t) => ({ name: decodeHtmlEntities(t.name || t.slug), slug: t.slug }));
}

function normalizePost(raw: RawPost, file: string): BlogPost {
  const slug = raw.slug || path.basename(file, ".json");
  const title = toPlainText(raw.title || slug);
  return {
    slug,
    title,
    date: raw.date || "",
    modified: raw.modified || raw.date || "",
    excerpt: raw.excerpt || "",
    categories: normalizeTerms(raw.categories),
    tags: normalizeTerms(raw.tags),
    author: raw.author || "David Stein",
    featuredImage: raw.featuredImage || null,
    featuredAlt: raw.featuredAlt ? decodeHtmlEntities(raw.featuredAlt) : "",
    content: demoteHeadings(raw.content || "", title),
  };
}

let cache: BlogPost[] | null = null;

function loadAll(): BlogPost[] {
  // Cache for the whole build; re-read in dev so edits to the JSON show up.
  if (cache && process.env.NODE_ENV === "production") return cache;
  const files = fs.existsSync(BLOG_DIR) ? fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".json")) : [];
  const posts = files.map((f) =>
    normalizePost(JSON.parse(fs.readFileSync(path.join(BLOG_DIR, f), "utf8")) as RawPost, f),
  );
  posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  cache = posts;
  return posts;
}

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return loadAll();
}

/** All posts without their bodies, newest first. */
export function getAllPostSummaries(): BlogPostSummary[] {
  return loadAll().map(toSummary);
}

export function getPost(slug: string): BlogPost | null {
  return loadAll().find((p) => p.slug === slug) || null;
}

/** Categories that have posts, most posts first. */
export function getCategories(): BlogCategory[] {
  const bySlug = new Map<string, BlogCategory>();
  for (const post of loadAll()) {
    for (const c of post.categories) {
      const existing = bySlug.get(c.slug);
      if (existing) existing.count += 1;
      else bySlug.set(c.slug, { name: c.name, slug: c.slug, count: 1 });
    }
  }
  return [...bySlug.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/**
 * Posts that share a category with `slug` (more shared categories, then
 * shared tags, then newest first). Topped up with the latest posts when a
 * category has fewer than `n` others.
 */
export function getRelatedPosts(slug: string, n = 3): BlogPostSummary[] {
  const all = loadAll();
  const post = all.find((p) => p.slug === slug);
  if (!post) return [];
  const cats = new Set(post.categories.map((c) => c.slug));
  const tags = new Set(post.tags.map((t) => t.slug));
  const others = all.filter((p) => p.slug !== slug);

  const scored = others
    .map((p, i) => ({
      p,
      i,
      cat: p.categories.filter((c) => cats.has(c.slug)).length,
      tag: p.tags.filter((t) => tags.has(t.slug)).length,
    }))
    .filter((s) => s.cat > 0)
    .sort((a, b) => b.cat - a.cat || b.tag - a.tag || a.i - b.i)
    .map((s) => s.p);

  const picked = scored.slice(0, n);
  for (const p of others) {
    if (picked.length >= n) break;
    if (!picked.includes(p)) picked.push(p);
  }
  return picked.map(toSummary);
}

/**
 * Simple keyword match over title, excerpt, categories, tags and body.
 * Posts matching more of the words rank higher; ties go to the newest.
 * Falls back to the latest posts when nothing matches.
 */
export function searchPosts(query: string, n = 3): BlogPostSummary[] {
  const all = loadAll();
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return all.slice(0, n).map(toSummary);
  const scored = all
    .map((p, i) => {
      const head = [p.title, toPlainText(p.excerpt), ...p.categories.map((c) => c.name), ...p.tags.map((t) => t.name)]
        .join(" ")
        .toLowerCase();
      const body = toPlainText(p.content).toLowerCase();
      let score = 0;
      for (const w of words) {
        if (head.includes(w)) score += 3;
        else if (body.includes(w)) score += 1;
      }
      return { p, i, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .map((s) => s.p);
  return (scored.length > 0 ? scored : all).slice(0, n).map(toSummary);
}
