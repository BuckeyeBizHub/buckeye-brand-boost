import { Check, Phone } from "lucide-react";
import { getProduct, GROUP_LABEL, GROUP_HUB } from "@/content/catalog";
import type { ProductPage } from "@/content/types";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/schema";
import {
  CtaBand,
  Crumbs,
  FaqList,
  HowItWorks,
  LinkCards,
  PriceCards,
  PriceFootnote,
  StartSmall,
} from "@/components/site/blocks";
import { ButtonLink, Container, Eyebrow, JsonLd, Paragraphs, PHONE_DISPLAY, PHONE_HREF, Section, SectionHead } from "@/components/site/ui";

export default function ProductPageView({ page }: { page: ProductPage }) {
  const path = `/${page.slug}`;
  const hub = GROUP_HUB[page.group];
  const crumbs = [
    { name: "Home", path: "/" },
    ...(hub && hub.path !== path ? [{ name: hub.name, path: hub.path }] : []),
    { name: page.navLabel, path },
  ];
  const related = page.related
    .map((s) => getProduct(s))
    .filter((p): p is ProductPage => Boolean(p))
    .map((p) => ({ href: `/${p.slug}`, title: p.navLabel, blurb: p.blurb, image: p.hero, price: p.prices?.[0] }));

  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: page.navLabel,
            description: page.metaDescription,
            path,
            serviceType: page.navLabel,
            image: page.hero.src,
            prices: page.prices,
          }),
          faqLd(page.faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      {/* Hero */}
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
            {page.group !== "more" && (
              <p className="mt-6 text-sm text-muted-foreground">
                Quote back within 24 hours. Small first orders welcome.
                {page.group !== "vehicles" && " First order? Design and setup are free."}
              </p>
            )}
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-cream">
            <img
              src={page.hero.src}
              alt={page.hero.alt}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Starting prices */}
      {page.prices && page.prices.length > 0 && (
        <Section tone="white" bordered>
          <SectionHead
            eyebrow="Starting prices"
            title="What it costs to start"
            intro="Real numbers, so you know where you stand before you call. Your exact price depends on size, quantity and finish."
          />
          <PriceCards keys={page.prices} />
          <PriceFootnote />
        </Section>
      )}

      {/* Options */}
      <Section bordered>
        <SectionHead eyebrow={page.eyebrow} title="What we make" />
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {page.options.map((o) => (
            <div key={o.name} className="border-t border-border pt-5">
              <h3 className="font-display text-[1.6rem] leading-tight">{o.name}</h3>
              <p className="mt-2 text-body">{o.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Start small */}
      <Section tone="cream">
        <StartSmall heading={page.story?.heading} body={page.story?.body} />
      </Section>

      {/* Long-form sections */}
      {page.sections.map((s, i) => (
        <Section key={s.heading} tone={i % 2 === 0 ? "paper" : "white"} bordered={i > 0}>
          <div className={s.image ? "grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-14" : "max-w-3xl"}>
            <div className={s.image && i % 2 === 1 ? "md:order-2" : undefined}>
              <h2 className="mb-6 text-[clamp(1.85rem,3.6vw,2.75rem)]">{s.heading}</h2>
              <div className="text-[1.0625rem] leading-relaxed text-body">
                <Paragraphs text={s.body} />
              </div>
            </div>
            {s.image && (
              <div className="overflow-hidden rounded-2xl border border-border bg-cream">
                <img src={s.image.src} alt={s.image.alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
              </div>
            )}
          </div>
        </Section>
      ))}

      {/* Uses */}
      <Section tone="white" bordered>
        <SectionHead eyebrow="Who orders this" title="Good for" />
        <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.uses.map((u) => (
            <li key={u} className="flex gap-3 text-body">
              <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </Section>

      <HowItWorks />

      {/* FAQ */}
      <Section>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">{page.navLabel}: common questions</h2>
          </div>
          <FaqList faqs={page.faqs} />
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="white" bordered>
          <SectionHead eyebrow={hub ? GROUP_LABEL[page.group] : "Related"} title="People also order" />
          <LinkCards items={related} />
        </Section>
      )}

      <CtaBand />
    </>
  );
}
