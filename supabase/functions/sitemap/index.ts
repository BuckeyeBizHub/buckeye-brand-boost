const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const DOMAIN = "https://www.buckeyebizhub.com";
const WP_API = "https://buckeyebizhub.blog/wp-json/wp/v2";

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq: string;
  priority: string;
}

// ── Static pages ───────────────────────────────────────────
const STATIC_PAGES: SitemapUrl[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/services", changefreq: "weekly", priority: "0.9" },
  { loc: "/blog", changefreq: "daily", priority: "0.9" },
  { loc: "/promotional-products", changefreq: "weekly", priority: "0.9" },
  { loc: "/contact", changefreq: "monthly", priority: "0.9" },
  { loc: "/business-cards", changefreq: "monthly", priority: "0.8" },
  { loc: "/brochures-and-business-printing", changefreq: "monthly", priority: "0.8" },
  { loc: "/branded-apparel-and-uniforms", changefreq: "monthly", priority: "0.8" },
  { loc: "/vehicle-wraps-and-fleet-branding", changefreq: "monthly", priority: "0.8" },
  { loc: "/vehicle-branding", changefreq: "monthly", priority: "0.8" },
  { loc: "/yard-signs-and-signage", changefreq: "monthly", priority: "0.8" },
  { loc: "/banners-and-flags", changefreq: "monthly", priority: "0.8" },
  { loc: "/decals", changefreq: "monthly", priority: "0.8" },
  { loc: "/full-rebrand-kits", changefreq: "monthly", priority: "0.8" },
  { loc: "/postcards", changefreq: "monthly", priority: "0.8" },
  { loc: "/catalogs-and-booklets", changefreq: "monthly", priority: "0.8" },
  { loc: "/presentation-folders", changefreq: "monthly", priority: "0.8" },
  { loc: "/menus-and-table-tents", changefreq: "monthly", priority: "0.8" },
  { loc: "/letterhead-and-envelopes", changefreq: "monthly", priority: "0.8" },
  { loc: "/large-format-printing", changefreq: "monthly", priority: "0.8" },
  { loc: "/website-design", changefreq: "monthly", priority: "0.8" },
  { loc: "/local-seo", changefreq: "monthly", priority: "0.8" },
  { loc: "/business-printing", changefreq: "monthly", priority: "0.8" },
  { loc: "/about", changefreq: "monthly", priority: "0.7" },
  { loc: "/industries", changefreq: "monthly", priority: "0.7" },
  { loc: "/pricing", changefreq: "monthly", priority: "0.7" },
  { loc: "/portfolio", changefreq: "monthly", priority: "0.7" },
  { loc: "/testimonials", changefreq: "monthly", priority: "0.6" },
  { loc: "/faq", changefreq: "monthly", priority: "0.6" },
  { loc: "/research", changefreq: "monthly", priority: "0.6" },
  { loc: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
];

// ── Fetch all WP blog posts (paginated) ────────────────────
async function fetchAllBlogSlugs(): Promise<SitemapUrl[]> {
  const urls: SitemapUrl[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    try {
      const res = await fetch(
        `${WP_API}/posts?per_page=${perPage}&page=${page}&_fields=slug,modified&orderby=date&order=desc`
      );
      if (!res.ok) break;

      const posts: { slug: string; modified: string }[] = await res.json();
      if (!posts.length) break;

      for (const p of posts) {
        urls.push({
          loc: `/blog/${p.slug}`,
          lastmod: p.modified.split("T")[0],
          changefreq: "weekly",
          priority: "0.7",
        });
      }

      const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
      if (page >= totalPages) break;
      page++;
    } catch {
      break;
    }
  }

  return urls;
}

// ── XML helpers ────────────────────────────────────────────
function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildUrlEntry(u: SitemapUrl): string {
  let xml = `  <url>\n    <loc>${escapeXml(DOMAIN + u.loc)}</loc>\n`;
  if (u.lastmod) xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += `  </url>`;
  return xml;
}

// ── Handler ────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const blogUrls = await fetchAllBlogSlugs();

    // Combine and enforce 50k limit
    const allUrls = [...STATIC_PAGES, ...blogUrls].slice(0, 50_000);

    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...allUrls.map(buildUrlEntry),
      "</urlset>",
    ].join("\n");

    return new Response(xml, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "X-Robots-Tag": "noindex",
      },
    });
  } catch (err) {
    console.error("Sitemap generation error:", err);
    return new Response(
      '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/xml; charset=utf-8",
        },
      }
    );
  }
});
