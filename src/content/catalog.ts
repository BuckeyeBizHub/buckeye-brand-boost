// Single index of every product and industry page. The [slug] route, the
// menus, the sitemap and the pricing page all read from here.
import type { IndustryPage, ProductGroup, ProductPage } from "./types";
import { LABEL_PAGES } from "./products/labels";
import { SIGN_PAGES } from "./products/signs";
import { PRINT_PAGES } from "./products/print";
import { VEHICLE_PAGES } from "./products/vehicles";
import { GEAR_PAGES } from "./products/gear";
import { MORE_PAGES } from "./products/more";
import { INDUSTRY_PAGES } from "./industries";

export const PRODUCTS: ProductPage[] = [
  ...LABEL_PAGES,
  ...SIGN_PAGES,
  ...PRINT_PAGES,
  ...VEHICLE_PAGES,
  ...GEAR_PAGES,
  ...MORE_PAGES,
];

export const INDUSTRIES: IndustryPage[] = INDUSTRY_PAGES;

const productMap = new Map(PRODUCTS.map((p) => [p.slug, p]));
const industryMap = new Map(INDUSTRIES.map((p) => [p.slug, p]));

export function getProduct(slug: string): ProductPage | undefined {
  return productMap.get(slug);
}

export function getIndustry(slug: string): IndustryPage | undefined {
  return industryMap.get(slug);
}

export const GROUP_ORDER: ProductGroup[] = ["labels", "signs", "print", "vehicles", "gear", "more"];

export const GROUP_LABEL: Record<ProductGroup, string> = {
  labels: "Labels, decals and lettering",
  signs: "Signs, banners and displays",
  print: "Business printing",
  vehicles: "Vehicle wraps",
  gear: "Apparel and promo",
  more: "More from David",
};

export const GROUP_HUB: Record<ProductGroup, { name: string; path: string } | undefined> = {
  labels: { name: "Products", path: "/services" },
  signs: { name: "Products", path: "/services" },
  print: { name: "Products", path: "/services" },
  vehicles: { name: "Products", path: "/services" },
  gear: { name: "Products", path: "/services" },
  more: { name: "Products", path: "/services" },
};

export function productsInGroup(group: ProductGroup): ProductPage[] {
  return PRODUCTS.filter((p) => p.group === group);
}
