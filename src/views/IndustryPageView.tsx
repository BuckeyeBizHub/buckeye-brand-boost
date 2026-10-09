import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { getProduct } from "@/content/catalog";
import type { IndustryPage, ProductPage } from "@/content/types";
import { breadcrumbLd, faqLd } from "@/lib/schema";
import { CtaBand, Crumbs, FaqList, HowItWorks, LinkCards, PriceCards, PriceFootnote } from "@/components/site/blocks";
import { ButtonLink, Container, Eyebrow, JsonLd, Paragraphs, PHONE_DISPLAY, PHONE_HREF, Section, SectionHead } from "@/components/site/ui";

export default function IndustryPageView({ page }: { page: IndustryPage }) {
  const path = `/${page.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: page.navLabel, path },
  ];
  const featured = page.featured
    .map((s) => getProduct(s))
    .filter((p): p is ProductPage => Boolean(p))
    .map((p) => ({ href: `/${p.slug}`, title: p.navLabel, blurb: p.blurb, image: p.hero, price: p.prices?.[0] }));

  return (
    <>
      <JsonLd data={[faqLd(page.faqs), breadcrumbLd(crumbs)]} />

      <section className="bg-paper">
        <Container className="grid grid-cols-1 gap-10 pb-14 pt-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-14 md:pb-20 md:pt-12">
          <div>
            <Crumbs items={crumbs.map((c, i) => ({ name: c.name, href: i < crumbs.length - 1 ? c.path : undefined }))} />
            {/* Keyword H1 in the small label slot; the tagline keeps the big headline look. */}
            <h1 className="eyebrow mb-4 leading-normal">{page.h1}</h1>
            <p className="font-display text-[clamp(2.5rem,5.6vw,4.5rem)]">{page.tagline}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">{page.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get a free quote</ButtonLink>
              <ButtonLink href={PHONE_HREF} variant="outline">
                <Phone className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-cream">
            <img src={page.hero.src} alt={page.hero.alt} fetchPriority="high" decoding="async" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Container>
      </section>

      <Section tone="white" bordered>
        <SectionHead eyebrow="What you need" title={`What ${page.navLabel.toLowerCase()} order most`} />
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {page.needs.map((n) => (
            <div key={n.heading} className="border-t border-border pt-5">
              <h3 className="font-display text-[1.6rem] leading-tight">{n.heading}</h3>
              <p className="mt-2 text-body">{n.body}</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {n.products
                  .map((s) => getProduct(s))
                  .filter((p): p is ProductPage => Boolean(p))
                  .map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${p.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-deep">
                        {p.navLabel}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {page.prices && page.prices.length > 0 && (
        <Section bordered>
          <SectionHead eyebrow="Starting prices" title="Where the numbers start" />
          <PriceCards keys={page.prices} />
          <PriceFootnote />
        </Section>
      )}

      {page.sections.map((s, i) => (
        <Section key={s.heading} tone={i % 2 === 0 ? "cream" : "paper"}>
          <div className="max-w-3xl">
            <h2 className="mb-6 text-[clamp(1.85rem,3.6vw,2.75rem)]">{s.heading}</h2>
            <div className="text-[1.0625rem] leading-relaxed text-body">
              <Paragraphs text={s.body} />
            </div>
          </div>
        </Section>
      ))}

      {featured.length > 0 && (
        <Section tone="white" bordered>
          <SectionHead eyebrow="Products" title="Start here" />
          <LinkCards items={featured} />
        </Section>
      )}

      <HowItWorks />

      <Section>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Common questions</h2>
          </div>
          <FaqList faqs={page.faqs} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
