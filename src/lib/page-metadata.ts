import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/structured-data";

interface PageMetaOpts {
  title?: string;
  description?: string;
  /** Route path, e.g. "/vehicle-wraps". Becomes the canonical URL. */
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

// Server-side replacement for the old usePageSEO hook, which only set the
// title and canonical after JavaScript ran. These land in the HTML itself.
export function pageMetadata({ title, description, path, ogImage, noindex }: PageMetaOpts): Metadata {
  // Add the brand only when the result still fits in about 60 characters.
  // Google shows the site name above the title anyway, so a long title keeps
  // its keywords instead of getting cut off at the brand.
  const branded = title && !title.endsWith(SITE_NAME) ? `${title} | ${SITE_NAME}` : title;
  const fullTitle = title
    ? branded && branded.length <= 60
      ? branded
      : title
    : `${SITE_NAME} | Ohio Business Printing, Promotional Products & Vehicle Branding`;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      type: "website",
      siteName: SITE_NAME,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      site: "@BuckeyeBizHub",
    },
  };
}
