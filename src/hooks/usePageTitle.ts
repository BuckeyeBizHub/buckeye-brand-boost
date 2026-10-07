"use client";
import { useEffect } from "react";

const SITE_NAME = "Buckeye Biz Hub";
const SITE_URL = "https://www.buckeyebizhub.com";
const DEFAULT_OG_IMAGE = "https://www.buckeyebizhub.com/og-image.webp";

interface SEOOptions {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageTitle(pageTitle?: string, metaDescription?: string) {
  useEffect(() => {
    document.title = pageTitle
      ? pageTitle.endsWith(SITE_NAME)
        ? pageTitle
        : `${pageTitle} | ${SITE_NAME}`
      : `${SITE_NAME} | Ohio Business Printing, Promotional Products & Vehicle Branding`;

    if (metaDescription) {
      setMeta("description", metaDescription);
    }
  }, [pageTitle, metaDescription]);
}

// Titles, descriptions and canonicals now come from each route's `metadata`
// export (src/lib/page-metadata.ts), so they are in the server HTML. Kept as a
// no-op so the page components did not need rewriting.
export function usePageSEO(_opts: SEOOptions) {}
