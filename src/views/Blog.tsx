import Link from "next/link";
import { breadcrumbLd } from "@/lib/schema";
import { CtaBand, Crumbs } from "@/components/site/blocks";
import { Container, Eyebrow, JsonLd, Section } from "@/components/site/ui";
import type { BlogCategory, BlogPostSummary } from "@/lib/blog-utils";
import BlogBrowser from "./BlogBrowser";

interface BlogProps {
  /** All posts, newest first (loaded from content/blog by the server page). */
  posts: BlogPostSummary[];
  categories: BlogCategory[];
}

const SERVICE_LINKS = [
  { href: "/services", label: "Everything we make" },
  { href: "/custom-labels", label: "Custom labels" },
  { href: "/business-cards-printing", label: "Business cards" },
  { href: "/vehicle-wraps", label: "Vehicle wraps" },
  { href: "/embroidered-apparel", label: "Embroidered apparel" },
  { href: "/promotional-products", label: "Promotional products" },
  { href: "/banners-and-flags", label: "Banners and flags" },
];

export default function Blog({ posts, categories }: BlogProps) {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      {/* Hero */}
      <section className="bg-paper">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          <Eyebrow>Blog</Eyebrow>
          <h1 className="max-w-4xl text-[clamp(2.5rem,5.6vw,4.5rem)]">Printing guides and branding tips for Ohio businesses</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
            Practical answers on printing, vehicle graphics, promo products and marketing for Columbus and Central Ohio
            businesses.
          </p>
        </Container>
      </section>

      <Section tone="white" bordered>
        <BlogBrowser posts={posts} categories={categories} />
      </Section>

      {/* Service cross-links */}
      <Section bordered>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <Eyebrow>What we make</Eyebrow>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Browse the products</h2>
          </div>
          <ul className="flex flex-wrap content-start gap-2">
            {SERVICE_LINKS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-flex min-h-[44px] items-center rounded-md border border-border bg-white px-4 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/40"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        title="Ready to put it to work?"
        body="Get a free quote within 24 hours for printing, promo products or vehicle graphics. Small first orders are welcome."
      />
    </>
  );
}
