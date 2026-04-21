/**
 * JSON-LD Structured Data Library
 *
 * Typed generator functions for every common Schema.org type.
 * Import individual helpers or use `combineSchemas()` to merge
 * multiple schemas onto a single page.
 */

// ── Site constants (single source of truth) ────────────────
export const SITE_NAME = "Buckeye Biz Hub";
export const SITE_URL = "https://www.buckeyebizhub.com";
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/hrXUMAbOK1TQRKQtPFJP1P5NDPp1/social-images/social-1775753483930-Buckeye_Biz_Hub_Logo.webp";

// ── Shared fragments ───────────────────────────────────────

const PUBLISHER = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject" as const,
    url: DEFAULT_OG_IMAGE,
    width: 600,
    height: 60,
  },
};

const ADDRESS = {
  "@type": "PostalAddress" as const,
  addressLocality: "Columbus",
  addressRegion: "OH",
  addressCountry: "US",
};

const SOCIAL_PROFILES = [
  "https://www.facebook.com/BuckeyeBizHub",
  "https://www.instagram.com/buckeyebizhub",
  "https://www.pinterest.com/BuckeyeBizHub",
];

/**
 * Shared LocalBusiness defaults — single source of truth for telephone, email,
 * geo coords, opening hours, social profiles, and price range. Pass to
 * `localBusinessSchema()` and override `name`, `description`, or `url` per page.
 */
export const BUCKEYE_LOCAL_BUSINESS_OPTS = {
  telephone: "+16145613358",
  email: "david@buckeyebizhub.com",
  address: {
    city: "Columbus",
    region: "OH",
    country: "US",
  },
  geo: { latitude: 39.9612, longitude: -82.9988 },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  priceRange: "$",
  sameAs: SOCIAL_PROFILES,
};

// ── Helper types ───────────────────────────────────────────

export interface PersonRef {
  name: string;
  url?: string;
}

type JsonLd = Record<string, unknown>;

// ── 1. Organization ────────────────────────────────────────

export interface OrganizationOpts {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  telephone?: string;
  email?: string;
  address?: JsonLd;
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed?: string | string[];
    availableLanguage?: string | string[];
  };
}

export function organizationSchema(opts?: OrganizationOpts): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: opts?.name ?? SITE_NAME,
    url: opts?.url ?? SITE_URL,
    logo: opts?.logo ?? DEFAULT_OG_IMAGE,
    sameAs: opts?.sameAs ?? SOCIAL_PROFILES,
    ...(opts?.telephone && { telephone: opts.telephone }),
    ...(opts?.email && { email: opts.email }),
    ...(opts?.address && { address: opts.address }),
    ...(opts?.contactPoint && {
      contactPoint: { "@type": "ContactPoint", ...opts.contactPoint },
    }),
  };
}

// ── 2. WebSite (homepage) ──────────────────────────────────

export interface WebSiteOpts {
  name?: string;
  url?: string;
  /** Enable SearchAction with the given URL template, e.g. "/search?q={search_term_string}" */
  searchUrlTemplate?: string;
}

export function webSiteSchema(opts?: WebSiteOpts): JsonLd {
  const url = opts?.url ?? SITE_URL;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: opts?.name ?? SITE_NAME,
    url,
    publisher: PUBLISHER,
    ...(opts?.searchUrlTemplate && {
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${url}${opts.searchUrlTemplate}`,
        },
        "query-input": "required name=search_term_string",
      },
    }),
  };
}

// ── 3. WebPage ─────────────────────────────────────────────

export interface WebPageOpts {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  /** Schema sub-type, e.g. "AboutPage", "ContactPage", "CollectionPage" */
  pageType?: string;
}

export function webPageSchema(opts: WebPageOpts): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": opts.pageType ?? "WebPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    publisher: PUBLISHER,
    ...(opts.datePublished && { datePublished: opts.datePublished }),
    ...(opts.dateModified && { dateModified: opts.dateModified }),
  };
}

// ── 4. BreadcrumbList ──────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Build from explicit crumbs */
export function breadcrumbSchema(crumbs: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** Route label map used for auto-generating breadcrumbs from a path */
const ROUTE_LABELS: Record<string, string> = {
  services: "Services",
  blog: "Blog",
  about: "About Us",
  contact: "Contact",
  pricing: "Pricing",
  portfolio: "Portfolio",
  faq: "FAQ",
  testimonials: "Testimonials",
  industries: "Industries",
  research: "Research Assistant",
  "privacy-policy": "Privacy Policy",
  "business-cards": "Business Cards",
  "business-printing": "Business Printing",
  "promotional-products": "Promotional Products",
  "branded-apparel-and-uniforms": "Branded Apparel",
  "yard-signs-and-signage": "Yard Signs & Signage",
  "vehicle-wraps-and-fleet-branding": "Vehicle Wraps",
  "vehicle-branding": "Vehicle Branding",
  "full-rebrand-kits": "Full Rebrand Kits",
  "website-design": "Website Design",
  "local-seo": "Local SEO",
  "banners-and-flags": "Banners & Flags",
  decals: "Custom Decals",
  postcards: "Postcards & Direct Mail",
  "catalogs-and-booklets": "Catalogs & Booklets",
  "presentation-folders": "Presentation Folders",
  "menus-and-table-tents": "Menus & Table Tents",
  "letterhead-and-envelopes": "Letterhead & Envelopes",
  "large-format-printing": "Large Format Printing",
  "door-hangers": "Door Hangers",
};

/** Auto-generate breadcrumbs from a URL path */
export function breadcrumbFromPath(pathname: string): JsonLd {
  if (pathname === "/") return breadcrumbSchema([{ name: "Home", url: SITE_URL }]);

  const segments = pathname.replace(/^\/|\/$/g, "").split("/");
  const crumbs: BreadcrumbItem[] = [{ name: "Home", url: SITE_URL }];

  let accumulated = "";
  for (const seg of segments) {
    accumulated += `/${seg}`;
    const label =
      ROUTE_LABELS[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name: label, url: `${SITE_URL}${accumulated}` });
  }
  return breadcrumbSchema(crumbs);
}

/** Article-specific breadcrumb with optional category */
export function articleBreadcrumbSchema(opts: {
  articleTitle: string;
  articleUrl: string;
  category?: { name: string; slug: string };
}): JsonLd {
  const crumbs: BreadcrumbItem[] = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
  ];
  if (opts.category) {
    crumbs.push({
      name: opts.category.name,
      url: `${SITE_URL}/blog?category=${opts.category.slug}`,
    });
  }
  crumbs.push({ name: opts.articleTitle, url: opts.articleUrl });
  return breadcrumbSchema(crumbs);
}

// ── 5. Article / BlogPosting ───────────────────────────────

export interface ArticleSchemaOpts {
  headline: string;
  description?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authors?: PersonRef | PersonRef[];
  url: string;
  wordCount?: number;
  isBlogPosting?: boolean;
  /** article section / category name */
  articleSection?: string;
  /** keyword strings */
  keywords?: string[];
}

export function articleSchema(opts: ArticleSchemaOpts): JsonLd {
  const authorsList = opts.authors
    ? Array.isArray(opts.authors)
      ? opts.authors
      : [opts.authors]
    : [{ name: "David Stein" }];

  const authorSchema = authorsList.map((a) => ({
    "@type": "Person" as const,
    name: a.name,
    ...(a.url && { url: a.url }),
  }));

  return {
    "@context": "https://schema.org",
    "@type": opts.isBlogPosting ? "BlogPosting" : "Article",
    headline: opts.headline,
    description: opts.description,
    ...(opts.image && { image: opts.image }),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: authorSchema.length === 1 ? authorSchema[0] : authorSchema,
    publisher: PUBLISHER,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    url: opts.url,
    ...(opts.wordCount && { wordCount: opts.wordCount }),
    ...(opts.articleSection && { articleSection: opts.articleSection }),
    ...(opts.keywords?.length && { keywords: opts.keywords.join(", ") }),
  };
}

// ── 6. Product ─────────────────────────────────────────────

export interface ProductOffer {
  price: string;
  priceCurrency?: string;
  availability?:
    | "InStock"
    | "OutOfStock"
    | "PreOrder"
    | "SoldOut"
    | "BackOrder";
  url?: string;
  validFrom?: string;
  priceValidUntil?: string;
}

export interface ProductReview {
  author: string;
  ratingValue: number;
  reviewBody?: string;
  datePublished?: string;
}

export interface ProductSchemaOpts {
  name: string;
  description: string;
  image?: string | string[];
  url: string;
  sku?: string;
  brand?: string;
  offers?: ProductOffer | ProductOffer[];
  aggregateRating?: { ratingValue: string; reviewCount: string };
  reviews?: ProductReview[];
}

export function productSchema(opts: ProductSchemaOpts): JsonLd {
  const offers = opts.offers
    ? Array.isArray(opts.offers)
      ? opts.offers
      : [opts.offers]
    : [];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    ...(opts.image && { image: opts.image }),
    url: opts.url,
    ...(opts.sku && { sku: opts.sku }),
    ...(opts.brand && { brand: { "@type": "Brand", name: opts.brand } }),
    ...(offers.length > 0 && {
      offers: offers.map((o) => ({
        "@type": "Offer",
        price: o.price,
        priceCurrency: o.priceCurrency || "USD",
        availability: `https://schema.org/${o.availability || "InStock"}`,
        ...(o.url && { url: o.url }),
        ...(o.validFrom && { validFrom: o.validFrom }),
        ...(o.priceValidUntil && { priceValidUntil: o.priceValidUntil }),
      })),
    }),
    ...(opts.aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ...opts.aggregateRating,
      },
    }),
    ...(opts.reviews?.length && {
      review: opts.reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.ratingValue,
          bestRating: 5,
        },
        ...(r.reviewBody && { reviewBody: r.reviewBody }),
        ...(r.datePublished && { datePublished: r.datePublished }),
      })),
    }),
  };
}

// ── 7. FAQPage ─────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(questions: FAQItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

// ── 8. LocalBusiness ───────────────────────────────────────

export interface LocalBusinessOpts {
  name?: string;
  url?: string;
  telephone?: string;
  email?: string;
  image?: string;
  priceRange?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  geo?: { latitude: number; longitude: number };
  openingHours?: string[];
  sameAs?: string[];
  areaServed?: string | JsonLd;
  aggregateRating?: { ratingValue: string; reviewCount: string };
}

export function localBusinessSchema(opts?: LocalBusinessOpts): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: opts?.name ?? SITE_NAME,
    url: opts?.url ?? SITE_URL,
    telephone: opts?.telephone ?? "+16145613358",
    image: opts?.image ?? DEFAULT_OG_IMAGE,
    priceRange: opts?.priceRange ?? "$$",
    address: opts?.address
      ? {
          "@type": "PostalAddress",
          ...(opts.address.street && { streetAddress: opts.address.street }),
          ...(opts.address.city && { addressLocality: opts.address.city }),
          ...(opts.address.region && { addressRegion: opts.address.region }),
          ...(opts.address.postalCode && { postalCode: opts.address.postalCode }),
          ...(opts.address.country && { addressCountry: opts.address.country }),
        }
      : ADDRESS,
    areaServed: opts?.areaServed ?? { "@type": "State", name: "Ohio" },
    sameAs: opts?.sameAs ?? SOCIAL_PROFILES,
    ...(opts?.email && { email: opts.email }),
    ...(opts?.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: opts.geo.latitude,
        longitude: opts.geo.longitude,
      },
    }),
    ...(opts?.openingHours && { openingHoursSpecification: opts.openingHours }),
    aggregateRating: opts?.aggregateRating
      ? { "@type": "AggregateRating", ...opts.aggregateRating }
      : {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "500",
        },
  };
}

// ── 9. HowTo ───────────────────────────────────────────────

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export interface HowToOpts {
  name: string;
  description: string;
  image?: string;
  totalTime?: string; // ISO 8601 duration, e.g. "PT30M"
  estimatedCost?: { currency?: string; value: string };
  tools?: string[];
  supplies?: string[];
  steps: HowToStep[];
}

export function howToSchema(opts: HowToOpts): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    ...(opts.image && { image: opts.image }),
    ...(opts.totalTime && { totalTime: opts.totalTime }),
    ...(opts.estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: opts.estimatedCost.currency || "USD",
        value: opts.estimatedCost.value,
      },
    }),
    ...(opts.tools?.length && {
      tool: opts.tools.map((t) => ({ "@type": "HowToTool", name: t })),
    }),
    ...(opts.supplies?.length && {
      supply: opts.supplies.map((s) => ({ "@type": "HowToSupply", name: s })),
    }),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.image && { image: s.image }),
      ...(s.url && { url: s.url }),
    })),
  };
}

// ── 10. Review & AggregateRating ───────────────────────────

export interface ReviewData {
  author: string;
  authorUrl?: string;
  authorTitle?: string;
  authorCompany?: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
}

export interface AggregateRatingOpts {
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  ratingCount: number;
  reviewCount?: number;
}

export interface ReviewSchemaOpts {
  /** The entity being reviewed */
  itemReviewed: {
    type: string; // "LocalBusiness", "Product", "Organization", etc.
    name: string;
    url?: string;
    image?: string;
    description?: string;
  };
  reviews: ReviewData[];
  aggregateRating?: AggregateRatingOpts;
}

/** Generate individual Review JSON-LD */
export function reviewSchema(review: ReviewData, itemReviewed?: ReviewSchemaOpts["itemReviewed"]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
      ...(review.authorUrl && { url: review.authorUrl }),
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    ...(review.datePublished && { datePublished: review.datePublished }),
    ...(itemReviewed && {
      itemReviewed: {
        "@type": itemReviewed.type,
        name: itemReviewed.name,
        ...(itemReviewed.url && { url: itemReviewed.url }),
        ...(itemReviewed.image && { image: itemReviewed.image }),
      },
    }),
  };
}

/** Generate AggregateRating JSON-LD */
export function aggregateRatingSchema(
  rating: AggregateRatingOpts,
  itemReviewed: ReviewSchemaOpts["itemReviewed"],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": itemReviewed.type,
    name: itemReviewed.name,
    ...(itemReviewed.url && { url: itemReviewed.url }),
    ...(itemReviewed.image && { image: itemReviewed.image }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.ratingValue,
      bestRating: rating.bestRating ?? 5,
      worstRating: rating.worstRating ?? 1,
      ratingCount: rating.ratingCount,
      ...(rating.reviewCount && { reviewCount: rating.reviewCount }),
    },
  };
}

/** Generate a complete review collection with aggregate + individual reviews */
export function reviewCollectionSchema(opts: ReviewSchemaOpts): JsonLd {
  const aggregate = opts.aggregateRating ?? calculateAggregateRating(opts.reviews);

  return {
    "@context": "https://schema.org",
    "@type": opts.itemReviewed.type,
    name: opts.itemReviewed.name,
    ...(opts.itemReviewed.url && { url: opts.itemReviewed.url }),
    ...(opts.itemReviewed.image && { image: opts.itemReviewed.image }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregate.ratingValue,
      bestRating: aggregate.bestRating ?? 5,
      worstRating: aggregate.worstRating ?? 1,
      ratingCount: aggregate.ratingCount,
      reviewCount: aggregate.reviewCount ?? aggregate.ratingCount,
    },
    review: opts.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewBody: r.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      ...(r.datePublished && { datePublished: r.datePublished }),
    })),
  };
}

/** Calculate aggregate rating from individual reviews */
export function calculateAggregateRating(reviews: ReviewData[]): AggregateRatingOpts {
  if (reviews.length === 0) {
    return { ratingValue: 0, ratingCount: 0, reviewCount: 0 };
  }
  const sum = reviews.reduce((acc, r) => acc + r.ratingValue, 0);
  return {
    ratingValue: Math.round((sum / reviews.length) * 10) / 10,
    ratingCount: reviews.length,
    reviewCount: reviews.length,
  };
}

// ── Combine helper ─────────────────────────────────────────

/**
 * Merge multiple JSON-LD schemas into a single `@graph` array.
 * Useful for injecting Organization + WebPage + Breadcrumb on one page.
 */
export function combineSchemas(...schemas: JsonLd[]): JsonLd {
  // Strip individual @context since graph shares one
  const items = schemas.map(({ "@context": _, ...rest }) => rest);
  return {
    "@context": "https://schema.org",
    "@graph": items,
  };
}
