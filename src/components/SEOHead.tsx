import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// ── Constants ──────────────────────────────────────────────
export const SITE_NAME = "Buckeye Biz Hub";
export const SITE_URL = "https://www.buckeyebizhub.com";
export const DEFAULT_DESCRIPTION =
  "Ohio's trusted business branding partner. Premium printing, promotional products, vehicle wraps, banners, flags, decals & more.";
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/hrXUMAbOK1TQRKQtPFJP1P5NDPp1/social-images/social-1775753483930-Buckeye_Biz_Hub_Logo.webp";
export const TWITTER_HANDLE = "@BuckeyeBizHub";

// ── Types ──────────────────────────────────────────────────
export interface SEOHeadProps {
  /** Page title (site name suffix added automatically) */
  title?: string;
  /** Meta description – max 160 chars recommended */
  description?: string;
  /** Array of keyword strings */
  keywords?: string[];
  /** Canonical URL – auto-generated from current path if omitted */
  canonicalUrl?: string;
  /** Open Graph / social share image URL */
  ogImage?: string;
  /** Open Graph type – defaults to "website" */
  ogType?: "website" | "article" | "product" | string;
  /** Set true to add noindex,nofollow */
  noindex?: boolean;
  /** JSON-LD structured data object(s) */
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

// ── Component ──────────────────────────────────────────────
const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  noindex = false,
  structuredData,
}: SEOHeadProps) => {
  const { pathname } = useLocation();

  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Your Columbus Branding Concierge`;

  const desc = (description || DEFAULT_DESCRIPTION).slice(0, 160);
  const canonical = canonicalUrl || `${SITE_URL}${pathname}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const robots = noindex ? "noindex,nofollow" : "index,follow";

  // Normalise structured data to array
  const ldItems = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="robots" content={robots} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />

      {/* JSON-LD */}
      {ldItems.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;

// ── Structured Data Helpers ────────────────────────────────

/** Organization schema – use on homepage */
export function organizationSchema(overrides?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    sameAs: [
      "https://www.facebook.com/BuckeyeBizHub",
      "https://twitter.com/BuckeyeBizHub",
    ],
    ...overrides,
  };
}

/** LocalBusiness schema – use on homepage / about */
export function localBusinessSchema(overrides?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: "+1-614-300-3BMH",
    image: DEFAULT_OG_IMAGE,
    priceRange: "$$",
    areaServed: { "@type": "State", name: "Ohio" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Columbus",
      addressRegion: "OH",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
    ...overrides,
  };
}

/** WebPage schema */
export function webPageSchema(
  name: string,
  description: string,
  url: string,
  overrides?: Record<string, unknown>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    publisher: { "@type": "Organization", name: SITE_NAME },
    ...overrides,
  };
}

/** Article / BlogPosting schema */
export function articleSchema(opts: {
  headline: string;
  description?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    ...(opts.image && { image: opts.image }),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: { "@type": "Person", name: opts.authorName || "David Stein" },
    publisher: { "@type": "Organization", name: SITE_NAME },
    url: opts.url,
  };
}

/** Product schema */
export function productSchema(opts: {
  name: string;
  description: string;
  image?: string;
  url: string;
  priceCurrency?: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    ...(opts.image && { image: opts.image }),
    url: opts.url,
    ...(opts.price && {
      offers: {
        "@type": "Offer",
        priceCurrency: opts.priceCurrency || "USD",
        price: opts.price,
        availability: "https://schema.org/InStock",
      },
    }),
  };
}

/** BreadcrumbList schema */
export function breadcrumbSchema(
  crumbs: { name: string; url: string }[],
) {
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

/** FAQPage schema */
export function faqSchema(
  questions: { question: string; answer: string }[],
) {
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
