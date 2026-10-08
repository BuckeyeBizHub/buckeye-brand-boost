import { GROUP_LABEL, GROUP_ORDER, productsInGroup } from "@/content/catalog";
import { breadcrumbLd } from "@/lib/schema";
import { CtaBand, Crumbs, LinkCards } from "@/components/site/blocks";
import { Container, Eyebrow, JsonLd, Section, SectionHead } from "@/components/site/ui";

const GROUP_INTRO: Record<string, string> = {
  labels: "What most people call about first. Short runs welcome, reorders get cheaper.",
  signs: "Yard signs, banners, flags and trade show stands for job sites, storefronts and events.",
  print: "Cards, mailers, flyers and the paper your business runs on.",
  vehicles: "Commercial wraps for one truck or the whole fleet.",
  gear: "Apparel, giveaways and packaging with your name on it.",
  more: "Websites, local search and business consulting, for customers who want more help.",
};

export default function Services() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Products", path: "/services" }])} />
      <section className="bg-paper">
        <Container className="pb-10 pt-8 md:pb-14 md:pt-12">
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "Products" }]} />
          <Eyebrow>Everything we make</Eyebrow>
          <h1 className="max-w-4xl text-[clamp(2.5rem,5.6vw,4.5rem)]">Labels, signs, printing and wraps for Central Ohio.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
            One person to call for all of it. Pick what you need below, or call and describe the job. Free quote within 24
            hours.
          </p>
        </Container>
      </section>
      {GROUP_ORDER.map((g, i) => (
        <Section key={g} tone={i % 2 === 0 ? "white" : "paper"} bordered>
          <SectionHead title={GROUP_LABEL[g]} intro={GROUP_INTRO[g]} />
          <LinkCards
            items={productsInGroup(g).map((p) => ({
              href: `/${p.slug}`,
              title: p.navLabel,
              blurb: p.blurb,
              image: p.hero,
              price: p.prices?.[0],
            }))}
          />
        </Section>
      ))}
      <CtaBand />
    </>
  );
}
