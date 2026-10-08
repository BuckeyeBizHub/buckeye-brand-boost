import Link from "next/link";
import { PRODUCTS } from "@/content/catalog";
import { PRICES, formatPrice, type PriceKey } from "@/content/prices";
import { breadcrumbLd, faqLd } from "@/lib/schema";
import { CtaBand, Crumbs, FaqList, StartSmall } from "@/components/site/blocks";
import { Container, Eyebrow, JsonLd, Section, SectionHead } from "@/components/site/ui";

const TABLES: { title: string; keys: PriceKey[] }[] = [
  { title: "Labels, decals and lettering", keys: ["roll-labels", "vinyl-decals", "door-lettering", "car-magnets", "window-lettering"] },
  { title: "Signs and banners", keys: ["yard-signs", "vinyl-banner", "aluminum-sign", "retractable-banner"] },
  { title: "Business printing", keys: ["business-cards", "postcards", "flyers", "door-hangers"] },
  { title: "Vehicle wraps", keys: ["partial-wrap", "full-van-wrap"] },
  { title: "Apparel", keys: ["embroidered-polos", "screen-printed-tees"] },
];

// The first product page that leads with this price, for the "details" link.
function pageFor(key: PriceKey) {
  return PRODUCTS.find((p) => p.prices?.[0] === key) ?? PRODUCTS.find((p) => p.prices?.includes(key));
}

const FAQS = [
  {
    q: "Are these the final prices?",
    a: "They're where each job starts, for the spec listed. Your quote comes back within 24 hours with your exact size, quantity and finish.",
  },
  {
    q: "Why do bigger orders cost less per piece?",
    a: "Setup is the same whether you print 100 or 5,000. Spread over more pieces, each one costs less. That's why a small first order and a bigger reorder is a smart way to buy.",
  },
  {
    q: "Is design included?",
    a: "First order? Design and setup are free. Send your logo and what you want on it. If you already have a print-ready file, even better.",
  },
  {
    q: "Do prices include installation?",
    a: "Lettering and wrap prices marked installed include installation. Printed items ship to you.",
  },
  {
    q: "What if I'm not happy with it?",
    a: "If you're not happy with the result, we make it right.",
  },
];

export default function Pricing() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]), faqLd(FAQS)]} />
      <section className="bg-paper">
        <Container className="pb-10 pt-8 md:pb-14 md:pt-12">
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "Pricing" }]} />
          <Eyebrow>Starting prices</Eyebrow>
          <h1 className="max-w-4xl text-[clamp(2.5rem,5.6vw,4.5rem)]">What things cost to start.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
            Most print and sign shops in Columbus make you call to find out. Here are the real starting numbers. Your exact
            quote comes back within 24 hours. First order? Design and setup are free.
          </p>
        </Container>
      </section>

      {TABLES.map((t, i) => (
        <Section key={t.title} tone={i % 2 === 0 ? "white" : "paper"} bordered>
          <SectionHead title={t.title} />
          <div className="overflow-hidden rounded-xl border border-border bg-white">
            <table className="w-full text-left">
              <thead className="hidden border-b border-border bg-cream text-sm text-muted-foreground sm:table-header-group">
                <tr>
                  <th className="px-5 py-3 font-medium">Item</th>
                  <th className="px-5 py-3 font-medium">Spec</th>
                  <th className="px-5 py-3 text-right font-medium">Starts at</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {t.keys.map((k) => {
                  const p = PRICES[k];
                  const page = pageFor(k);
                  return (
                    <tr key={k} className="flex flex-col gap-1 px-5 py-4 sm:table-row sm:px-0 sm:py-0">
                      <td className="font-semibold text-ink sm:px-5 sm:py-4">
                        {page ? (
                          <Link href={`/${page.slug}`} className="hover:text-brand">
                            {p.item}
                          </Link>
                        ) : (
                          p.item
                        )}
                      </td>
                      <td className="text-sm text-muted-foreground sm:px-5 sm:py-4">{p.spec}</td>
                      <td className="font-display text-[1.6rem] leading-none text-ink sm:px-5 sm:py-4 sm:text-right">
                        {formatPrice(p)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>
      ))}

      <Section tone="cream">
        <StartSmall />
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">About these prices</h2>
          </div>
          <FaqList faqs={FAQS} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
