// Types and plain-string helpers for blog posts. No `fs`, no `document`:
// this file is safe to import from client components as well as the server.
// The file loader lives in "@/lib/blog" (server only).

export interface BlogTerm {
  name: string;
  slug: string;
}

export interface BlogPost {
  slug: string;
  /** Plain text, entities already decoded by the loader. */
  title: string;
  /** ISO-like local timestamp, e.g. "2026-04-12T20:30:57". */
  date: string;
  modified: string;
  /** HTML. */
  excerpt: string;
  categories: BlogTerm[];
  tags: BlogTerm[];
  author: string;
  /** "/media/blog/<slug>/<file>" or null. */
  featuredImage: string | null;
  featuredAlt: string;
  /** HTML. Our own content, rendered with dangerouslySetInnerHTML. */
  content: string;
}

/** A post without its body, small enough to pass to client components in bulk. */
export type BlogPostSummary = Omit<BlogPost, "content">;

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  mdash: "—",
  ndash: "–",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
  copy: "©",
  reg: "®",
  trade: "™",
};

/** Decode HTML entities (&amp; &#8217; &#x2019; ...) with string work only. */
export function decodeHtmlEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) && n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : match;
    }
    return NAMED_ENTITIES[code.toLowerCase()] ?? match;
  });
}

/** Strip tags, decode entities and collapse whitespace. */
export function toPlainText(html: string): string {
  return decodeHtmlEntities(html.replace(/<[^>]*>/g, " "))
    .replace(/[\s ]+/g, " ")
    .trim();
}

/** Plain-text excerpt, cut at a word boundary with an ellipsis when too long. */
export function getExcerpt(post: { excerpt: string }, maxLen = 160): string {
  const raw = toPlainText(post.excerpt);
  if (raw.length <= maxLen) return raw;
  const cut = raw.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > maxLen * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd() + "…";
}

/** Drop the body so the post can be sent to the browser cheaply. */
export function toSummary(post: BlogPost | BlogPostSummary): BlogPostSummary {
  const { content, ...rest } = post as BlogPost;
  void content;
  return rest;
}
