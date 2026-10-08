// Structured data for the rebuilt pages. Kept small and honest: no ratings,
// no review markup, no opening hours we haven't confirmed.
import { PRICES, type PriceKey } from "@/content/prices";
import type { Faq } from "@/content/types";
import { SITE_URL } from "@/lib/structured-data";

export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;

const AREA = ["Columbus", "Dublin", "Westerville", "Gahanna", "Hilliard", "Grove City", "Delaware", "Newark", "Mount Vernon"].map(
  (name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "Ohio" } }),
);

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceLd(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  image?: string;
  prices?: PriceKey[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  const offers = (opts.prices ?? []).map((k) => {
    const p = PRICES[k];
    return {
      "@type": "Offer",
      name: p.item,
      description: p.spec,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: p.from,
        priceCurrency: "USD",
        ...(p.per === "each" ? { referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: "each" } } : {}),
      },
      eligibleQuantity: { "@type": "QuantitativeValue", minValue: p.quantity },
      availability: "https://schema.org/InStock",
      seller: { "@id": BUSINESS_ID },
    };
  });
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    ...(opts.image ? { image: `${SITE_URL}${opts.image}` } : {}),
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA,
    ...(offers.length ? { offers } : {}),
  };
}
