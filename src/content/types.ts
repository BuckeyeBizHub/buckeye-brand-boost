import type { PriceKey } from "./prices";

export type ProductGroup = "labels" | "signs" | "print" | "vehicles" | "gear" | "more";

export interface Img {
  /** Path under /public, e.g. "/assets/decals-hero.jpg". */
  src: string;
  /** Describe what's in the picture. Never claim it's a past job. */
  alt: string;
}

export interface Faq {
  q: string;
  a: string;
}

/** One product or service page, rendered by ProductPageView at /<slug>. */
export interface ProductPage {
  slug: string;
  group: ProductGroup;
  /** Short name for menus and cards, e.g. "Custom labels". */
  navLabel: string;
  /** One line for cards and menus (under 90 characters). */
  blurb: string;
  /** <title>. 50 to 60 characters, primary keyword first, ends with "Columbus, Ohio" or "Columbus" when it fits. */
  metaTitle: string;
  /** Meta description, 140 to 160 characters, includes a starting price when there is one. */
  metaDescription: string;
  /** Eyebrow above the H1, e.g. "Labels and decals". */
  eyebrow: string;
  h1: string;
  /** Two or three short sentences under the H1. */
  lede: string;
  hero: Img;
  /** Starting prices shown on the page, in order. */
  prices?: PriceKey[];
  /** What we make: 4 to 8 options, each one or two sentences. */
  options: { name: string; detail: string }[];
  /** Who buys it / what it's for. 4 to 8 short items. */
  uses: string[];
  /** Two or three longer sections, each an H2 and 1 to 3 short paragraphs (separate paragraphs with a blank line). Real SEO copy. */
  sections: { heading: string; body: string; image?: Img }[];
  /** Optional short true story. Only facts David has stated. */
  story?: { heading: string; body: string };
  faqs: Faq[];
  /** Slugs of related product pages, 3 to 4. */
  related: string[];
  /** Industry slugs this product matters to, optional. */
  industries?: string[];
}

/** One industry page, rendered by IndustryPageView at /<slug>. */
export interface IndustryPage {
  slug: string;
  navLabel: string;
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  hero: Img;
  /** The jobs this kind of business needs done, each pointing at product pages. 3 to 6. */
  needs: { heading: string; body: string; products: string[] }[];
  /** Two or three longer sections, same rules as product pages. */
  sections: { heading: string; body: string }[];
  /** Product slugs to feature as cards, 4 to 8. */
  featured: string[];
  /** Starting prices to show, optional. */
  prices?: PriceKey[];
  faqs: Faq[];
}
