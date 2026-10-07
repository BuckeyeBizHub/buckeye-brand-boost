import type { MetadataRoute } from "next";
import { fetchPosts } from "@/lib/wordpress";
import { SITE_URL } from "@/lib/structured-data";
import { SITE_ROUTES } from "@/lib/site-routes";

export const revalidate = 3600;

// One sitemap for the whole site plus the blog. Replaces the two
// disagreeing sitemaps from the Lovable build.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = SITE_ROUTES.map((r) => ({ url: `${SITE_URL}${r === "/" ? "" : r}` }));
  try {
    const { items } = await fetchPosts(1, 100);
    for (const p of items) pages.push({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.modified });
  } catch {
    // WordPress unreachable; posts are added on the next refresh.
  }
  return pages;
}
