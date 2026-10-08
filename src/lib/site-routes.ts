import { INDUSTRIES, PRODUCTS } from "@/content/catalog";

// Every public page, for the sitemap. Product and industry pages come from
// src/content, so adding a page there adds it here.
export const STATIC_ROUTES = [
  "/",
  "/services",
  "/pricing",
  "/industries",
  "/about",
  "/faq",
  "/contact",
  "/blog",
  "/privacy-policy",
  "/sms-terms",
];

export const SITE_ROUTES = [
  ...STATIC_ROUTES,
  ...PRODUCTS.map((p) => `/${p.slug}`),
  ...INDUSTRIES.map((p) => `/${p.slug}`),
];
