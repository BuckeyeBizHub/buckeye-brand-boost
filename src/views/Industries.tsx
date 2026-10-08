import { INDUSTRIES } from "@/content/catalog";
import { breadcrumbLd } from "@/lib/schema";
import { CtaBand, Crumbs, LinkCards } from "@/components/site/blocks";
import { Container, Eyebrow, JsonLd, Section } from "@/components/site/ui";

export default function Industries() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <section className="bg-paper">
        <Container className="pb-10 pt-8 md:pb-14 md:pt-12">
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "Industries" }]} />
          <Eyebrow>Industries</Eyebrow>
          <h1 className="max-w-4xl text-[clamp(2.5rem,5.6vw,4.5rem)]">Built around how your kind of business works.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
            A roofer needs yard signs and door hangers. A bakery needs labels. A fleet needs every truck to match. Pick
            yours and see what people in your line of work order most.
          </p>
        </Container>
      </section>
      <Section tone="white" bordered>
        <LinkCards
          items={INDUSTRIES.map((p) => ({ href: `/${p.slug}`, title: p.navLabel, blurb: p.blurb, image: p.hero }))}
        />
      </Section>
      <CtaBand />
    </>
  );
}
