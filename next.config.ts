import fs from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

// Real 301s. The Lovable site faked these in the browser after the old page
// had already loaded, so search engines never saw them.
const PERMANENT_REDIRECTS: [string, string][] = [
  ["/brochures-and-business-printing", "/business-printing"],
  ["/promo-products", "/promotional-products"],
  ["/promo", "/promotional-products"],
  ["/wraps", "/vehicle-wraps"],
  ["/cards", "/business-printing"],
  ["/seo", "/local-seo"],
  ["/apparel", "/embroidered-apparel"],
  ["/signs", "/yard-signs-and-signage"],
  ["/signage", "/yard-signs-and-signage"],
  ["/rebrand", "/full-rebrand-kits"],
  ["/web-design", "/website-design"],
  ["/business-cards", "/business-cards-printing"],
  ["/branded-apparel-and-uniforms", "/embroidered-apparel"],
  ["/vehicle-wraps-and-fleet-branding", "/vehicle-wraps"],
  ["/decals", "/decals-and-stickers"],
  ["/vehicle-branding", "/vehicle-wraps"],
  ["/testimonials", "/about"],
  ["/admin/photos", "/"],
  ["/domain-check", "/"],
  // Oct 2026 rebuild: pages merged or renamed.
  ["/vehicle-decals", "/vehicle-lettering"],
  ["/large-format-printing", "/banners-and-flags"],
  ["/graduation-2026", "/banners-and-flags"],
  ["/portfolio", "/services"],
  ["/labels", "/custom-labels"],
  ["/stickers", "/decals-and-stickers"],
  ["/magnets", "/car-magnets"],
  ["/eddm", "/eddm-postcards"],
  ["/flyers", "/flyers-and-brochures"],
  ["/brochures", "/flyers-and-brochures"],
  // Old quote link from the WordPress blog.
  ["/quote", "/contact"],
];

// The old WordPress blog. Once buckeyebizhub.blog points at this Vercel
// project, every request on that host lands here: posts keep their slug
// under /blog, and anything else (home, categories, feeds) goes to /blog.
const SITE = "https://www.buckeyebizhub.com";
const OLD_BLOG_HOSTS = ["buckeyebizhub.blog", "www.buckeyebizhub.blog"];
const OLD_BLOG_SLUGS = fs
  .readdirSync(path.join(process.cwd(), "content", "blog"))
  .filter((f) => f.endsWith(".json"))
  .map((f) => f.slice(0, -".json".length));

function oldBlogRedirects() {
  return OLD_BLOG_HOSTS.flatMap((host) => {
    const has = [{ type: "host" as const, value: host }];
    return [
      ...OLD_BLOG_SLUGS.map((slug) => ({
        source: `/${slug}`,
        has,
        destination: `${SITE}/blog/${slug}`,
        statusCode: 301 as const,
      })),
      { source: "/:path*", has, destination: `${SITE}/blog`, statusCode: 301 as const },
    ];
  });
}

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      ...oldBlogRedirects(),
      ...PERMANENT_REDIRECTS.map(([source, destination]) => ({ source, destination, statusCode: 301 as const })),
    ];
  },
};

export default nextConfig;
