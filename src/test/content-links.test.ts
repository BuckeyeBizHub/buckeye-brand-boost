import { test, expect } from "vitest";
import { PRODUCTS, INDUSTRIES, getProduct, getIndustry } from "@/content/catalog";
import fs from "node:fs";
test("every product link, industry link and page photo resolves", () => {
  const bad: string[] = [];
  for (const p of PRODUCTS) {
    for (const s of [...p.related, ...(p.children ?? []).flatMap((c) => c.slugs)]) if (!getProduct(s)) bad.push(`${p.slug} -> ${s}`);
    for (const s of p.industries ?? []) if (!getIndustry(s)) bad.push(`${p.slug} -> ind ${s}`);
    for (const img of [p.hero, ...p.sections.map((x) => x.image).filter(Boolean)]) if (!fs.existsSync("public" + img!.src)) bad.push(`${p.slug} img ${img!.src}`);
  }
  for (const i of INDUSTRIES) for (const s of [...i.featured, ...i.needs.flatMap((n) => n.products)]) if (!getProduct(s)) bad.push(`${i.slug} -> ${s}`);
  const slugs = PRODUCTS.map((p) => p.slug);
  expect(slugs.length).toBe(new Set(slugs).size);
  expect(bad).toEqual([]);
});
