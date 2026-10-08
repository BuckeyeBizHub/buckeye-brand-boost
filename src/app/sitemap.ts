import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/structured-data";
import { SITE_ROUTES } from "@/lib/site-routes";

// One sitemap for the whole site plus the blog. Replaces the two
// disagreeing sitemaps from the Lovable build. Blog posts are read from
// content/blog/*.json at build time.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = SITE_ROUTES.map((r) => ({ url: `${SITE_URL}${r === "/" ? "" : r}` }));
  for (const p of getAllPosts()) pages.push({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.modified });
  return pages;
}
