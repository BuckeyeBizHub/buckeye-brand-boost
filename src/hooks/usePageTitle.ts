import { useEffect } from "react";

const SITE_NAME = "Buckeye Biz Hub";
const SITE_URL = "https://www.buckeyebizhub.com";
const DEFAULT_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/hrXUMAbOK1TQRKQtPFJP1P5NDPp1/social-images/social-1775753483930-Buckeye_Biz_Hub_Logo.webp";

interface SEOOptions {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
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
      ? `${pageTitle} | ${SITE_NAME}`
      : "Buckeye Biz Hub | Your Columbus Branding Concierge";

    if (metaDescription) {
      setMeta("description", metaDescription);
    }
  }, [pageTitle, metaDescription]);
}

export function usePageSEO(opts: SEOOptions) {
  useEffect(() => {
    const fullTitle = opts.title
      ? `${opts.title} | ${SITE_NAME}`
      : "Buckeye Biz Hub | Your Columbus Branding Concierge";

    document.title = fullTitle;

    if (opts.description) setMeta("description", opts.description);

    // Canonical
    const canonicalUrl = opts.canonical || `${SITE_URL}${window.location.pathname}`;
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("og:title", fullTitle, "property");
    if (opts.description) setMeta("og:description", opts.description, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:type", opts.ogType || "website", "property");
    setMeta("og:image", opts.ogImage || DEFAULT_OG_IMAGE, "property");
    setMeta("og:site_name", SITE_NAME, "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    if (opts.description) setMeta("twitter:description", opts.description);
    setMeta("twitter:image", opts.ogImage || DEFAULT_OG_IMAGE);
    setMeta("twitter:site", "@BuckeyeBizHub");
  }, [opts.title, opts.description, opts.canonical, opts.ogImage, opts.ogType]);
}
