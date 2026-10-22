import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";
import { SITE_ROUTES } from "@/lib/site-routes";

const OLD_PRINTING_URLS: [string, string][] = [
  ["/business-printing-columbus", "/business-printing"],
  ["/custom-printing-columbus", "/business-printing"],
  ["/real-estate-printing", "/real-estate"],
  ["/custom-die-cut-folders", "/presentation-folders"],
  ["/branded-folders-columbus", "/presentation-folders"],
  ["/presentation-folders-columbus", "/presentation-folders"],
  ["/corporate-folders-columbus", "/presentation-folders"],
  ["/eco-friendly-folders-columbus", "/presentation-folders"],
];

const redirects = await nextConfig.redirects!();

describe("old printing and folder URLs", () => {
  it.each(OLD_PRINTING_URLS)("%s 301s to %s, a live page", (source, destination) => {
    const rule = redirects.find((r) => r.source === source && !r.has);
    expect(rule).toMatchObject({ destination, statusCode: 301 });
    expect(SITE_ROUTES).toContain(destination);
  });
});

const APPAREL_URLS: [string, string][] = [
  ["/embroidered-apparel", "/embroidery"],
  ["/apparel", "/custom-apparel"],
  ["/branded-apparel-and-uniforms", "/custom-apparel"],
];

describe("old apparel URLs", () => {
  it.each(APPAREL_URLS)("%s 301s to %s, a live page", (source, destination) => {
    const rule = redirects.find((r) => r.source === source && !r.has);
    expect(rule).toMatchObject({ destination, statusCode: 301 });
    expect(SITE_ROUTES).toContain(destination);
  });
});
