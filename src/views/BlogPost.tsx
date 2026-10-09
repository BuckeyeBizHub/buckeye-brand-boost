import Link from "next/link";
import { format } from "date-fns";
import BlogCard from "@/components/blog/BlogCard";
import { CtaBand, Crumbs } from "@/components/site/blocks";
import { ButtonLink, Container, Eyebrow, JsonLd, Section, SectionHead } from "@/components/site/ui";
import { breadcrumbLd } from "@/lib/schema";
import { articleSchema, DAVID_STEIN, SITE_URL } from "@/lib/structured-data";
import { getExcerpt, toPlainText, type BlogPost as BlogPostData, type BlogPostSummary } from "@/lib/blog-utils";

interface BlogPostProps {
  /** Loaded from content/blog by the server page. */
  post: BlogPostData | null;
  related?: BlogPostSummary[];
}

const SERVICE_LINKS = [
  { href: "/promotional-products", label: "Promotional products" },
  { href: "/business-cards-printing", label: "Business cards" },
  { href: "/vehicle-wraps", label: "Vehicle wraps" },
  { href: "/embroidered-apparel", label: "Embroidered apparel" },
  { href: "/banners-and-flags", label: "Banners and flags" },
  { href: "/yard-signs-and-signage", label: "Signs" },
];

export default function BlogPost({ post, related = [] }: BlogPostProps) {
  if (!post) {
    return (
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-[clamp(2.5rem,5.6vw,4rem)]">Post not found</h1>
          <p className="mt-4 text-lg text-body">That article isn&apos;t here.</p>
          <div className="mt-8">
            <ButtonLink href="/blog" variant="outline">
              Back to the blog
            </ButtonLink>
          </div>
        </div>
      </Section>
    );
  }

  const path = `/blog/${post.slug}`;
  const image = post.featuredImage;
  const categories = post.categories;
  const author = post.author || "David Stein";
  const date = format(new Date(post.date), "MMMM d, yyyy");
  const plain = toPlainText(post.content);
  const wordCount = plain ? plain.split(" ").length : 0;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: post.title,
            description: getExcerpt(post, 155),
            image: image ? `${SITE_URL}${image}` : undefined,
            datePublished: post.date,
            dateModified: post.modified,
            authors: author === DAVID_STEIN.name ? DAVID_STEIN : { name: author },
            url: `${SITE_URL}${path}`,
            wordCount,
            isBlogPosting: true,
            articleSection: categories[0]?.name,
            keywords: categories.map((c) => c.name),
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />

      {/* Header */}
      <section className="bg-paper">
        <Container className="pb-10 pt-8 md:pb-14 md:pt-12">
          <div className="mx-auto max-w-3xl">
            <Crumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]} />
            {categories.length > 0 && <Eyebrow>{categories.map((c) => c.name).join(" · ")}</Eyebrow>}
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)]">{post.title}</h1>
            <p className="mt-6 text-sm text-muted-foreground">
              <time dateTime={post.date}>{date}</time>
              <span aria-hidden> · </span>
              {author}
            </p>
          </div>
        </Container>
      </section>

      {/* Article */}
      <article className="border-t border-border bg-white">
        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            {image && (
              <img
                src={image}
                alt={post.featuredAlt || post.title}
                loading="eager"
                fetchPriority="high"
                width={960}
                height={540}
                className="mb-10 w-full rounded-xl border border-border"
              />
            )}
            <div
              className="blog-body prose prose-lg max-w-none break-words
                prose-headings:font-display prose-headings:font-normal prose-headings:text-ink
                prose-p:text-body prose-li:text-body prose-strong:text-ink
                prose-a:font-semibold prose-a:text-brand prose-a:underline-offset-4
                prose-img:rounded-lg
                prose-blockquote:border-l-brand prose-blockquote:font-normal prose-blockquote:text-ink"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Service cross-links */}
            <div className="mt-14 rounded-xl border border-border bg-cream p-6 md:p-8">
              <h2 className="text-[1.75rem]">Need this done?</h2>
              <p className="mt-2 text-body">Here&apos;s what I make for Columbus and Central Ohio businesses.</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="inline-flex min-h-[40px] items-center rounded-md border border-border bg-white px-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Section bordered>
          <SectionHead eyebrow="Keep reading" title="Related articles" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <BlogCard key={r.slug} post={r} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
