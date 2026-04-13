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

export interface ArticleAuthor {
  name: string;
  url?: string;
}

export interface ArticleMeta {
  /** ISO date string */
  publishedTime: string;
  /** ISO date string */
  modifiedTime?: string;
  /** Author(s) – single or multiple */
  authors: ArticleAuthor | ArticleAuthor[];
  /** Primary category / section name */
  section?: string;
  /** Tag strings for article:tag */
  tags?: string[];
  /** Word count of the article body (used for reading time) */
  wordCount?: number;
}

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
  /** Article-specific meta (only used when ogType is "article") */
  article?: ArticleMeta;
}

// ── Helpers ────────────────────────────────────────────────

/** Estimate reading time in minutes from a word count */
export function estimateReadingTime(wordCount: number, wpm = 238): number {
  return Math.max(1, Math.ceil(wordCount / wpm));
}

/** Count words in an HTML string (strips tags first) */
export function countWords(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return text ? text.split(" ").length : 0;
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
  article,
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

  // Normalise authors to array
  const authors = article
    ? Array.isArray(article.authors)
      ? article.authors
      : [article.authors]
    : [];

  const readingTime =
    article?.wordCount ? estimateReadingTime(article.wordCount) : undefined;

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

      {/* Article-specific OG tags */}
      {ogType === "article" && article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {authors.map((a, i) => (
            <meta key={`author-${i}`} property="article:author" content={a.url || a.name} />
          ))}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags?.map((tag) => (
            <meta key={`tag-${tag}`} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      {readingTime && (
        <meta name="twitter:label1" content="Reading time" />
      )}
      {readingTime && (
        <meta name="twitter:data1" content={`${readingTime} min read`} />
      )}

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

const PUBLISHER_SCHEMA = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: DEFAULT_OG_IMAGE,
    width: 600,
    height: 60,
  },
};

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
    publisher: PUBLISHER_SCHEMA,
    ...overrides,
  };
}

/** Article / BlogPosting schema with full publisher + mainEntityOfPage */
export interface ArticleSchemaOpts {
  headline: string;
  description?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  /** Single author or array of authors */
  authors?: ArticleAuthor | ArticleAuthor[];
  url: string;
  /** Word count for reading time / wordCount property */
  wordCount?: number;
  /** Use "BlogPosting" instead of "Article" */
  isBlogPosting?: boolean;
}

export function articleSchema(opts: ArticleSchemaOpts) {
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
    publisher: PUBLISHER_SCHEMA,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.url,
    },
    url: opts.url,
    ...(opts.wordCount && { wordCount: opts.wordCount }),
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
export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
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

/** Generate article breadcrumb with optional category */
export function articleBreadcrumbSchema(opts: {
  articleTitle: string;
  articleUrl: string;
  category?: { name: string; slug: string };
}) {
  const crumbs: { name: string; url: string }[] = [
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

/** FAQPage schema */
export function faqSchema(questions: { question: string; answer: string }[]) {
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
