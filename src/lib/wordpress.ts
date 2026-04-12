const WP_API = "https://buckeyebizhub.blog/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: { sizes?: { medium_large?: { source_url: string }; full?: { source_url: string } } };
    }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPPaginatedResult<T> {
  items: T[];
  totalPages: number;
  total: number;
}

function stripHtml(html: string): string {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function decodeHtmlEntities(text: string): string {
  const tmp = document.createElement("div");
  tmp.innerHTML = text;
  return tmp.textContent || tmp.innerText || text;
}

export function getExcerpt(post: WPPost, maxLen = 160): string {
  const raw = stripHtml(post.excerpt.rendered);
  return raw.length > maxLen ? raw.slice(0, maxLen).trimEnd() + "…" : raw;
}

export function getFeaturedImage(post: WPPost): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  return media.media_details?.sizes?.medium_large?.source_url || media.source_url;
}

export function getCategories(post: WPPost): WPCategory[] {
  const terms = post._embedded?.["wp:term"]?.[0];
  return (terms || []).map((t) => ({ id: t.id, name: decodeHtmlEntities(t.name), slug: t.slug, count: 0 }));
}

export function getAuthor(post: WPPost) {
  const a = post._embedded?.author?.[0];
  return a ? { name: a.name, avatar: a.avatar_urls?.["96"] || a.avatar_urls?.["48"] } : null;
}

export async function fetchPosts(
  page = 1,
  perPage = 9,
  categoryId?: number,
  search?: string
): Promise<WPPaginatedResult<WPPost>> {
  const params = new URLSearchParams({
    _embed: "true",
    page: String(page),
    per_page: String(perPage),
    orderby: "date",
    order: "desc",
  });
  if (categoryId) params.set("categories", String(categoryId));
  if (search) params.set("search", search);

  const res = await fetch(`${WP_API}/posts?${params}`);
  if (!res.ok) throw new Error(`WordPress API error: ${res.status}`);

  const items: WPPost[] = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  const total = parseInt(res.headers.get("X-WP-Total") || "0", 10);
  return { items, totalPages, total };
}

export async function fetchPost(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${WP_API}/posts?_embed=true&slug=${encodeURIComponent(slug)}`);
  if (!res.ok) throw new Error(`WordPress API error: ${res.status}`);
  const posts: WPPost[] = await res.json();
  return posts[0] || null;
}

export async function fetchCategories(): Promise<WPCategory[]> {
  const res = await fetch(`${WP_API}/categories?per_page=50&orderby=count&order=desc`);
  if (!res.ok) throw new Error(`WordPress API error: ${res.status}`);
  const cats: WPCategory[] = await res.json();
  return cats.map((c) => ({ ...c, name: decodeHtmlEntities(c.name) }));
}

export async function fetchRelatedPosts(post: WPPost, limit = 3): Promise<WPPost[]> {
  const catId = post.categories?.[0];
  if (!catId) return [];
  const params = new URLSearchParams({
    _embed: "true",
    per_page: String(limit + 1),
    categories: String(catId),
    exclude: String(post.id),
  });
  const res = await fetch(`${WP_API}/posts?${params}`);
  if (!res.ok) return [];
  const posts: WPPost[] = await res.json();
  return posts.slice(0, limit);
}
