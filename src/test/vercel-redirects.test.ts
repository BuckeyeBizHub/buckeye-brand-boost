import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

const config = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../../vercel.json"), "utf8"),
);

describe("vercel.json redirects", () => {
  it("permanently redirects buckeyebizhub.blog to the main site blog", () => {
    const rule = config.redirects.find(
      (r: { has?: { type: string; value: string }[] }) =>
        r.has?.some((h) => h.type === "host" && h.value === "buckeyebizhub.blog"),
    );

    expect(rule).toBeDefined();
    expect(rule.source).toBe("/:path*");
    expect(rule.destination).toBe("https://www.buckeyebizhub.com/blog/:path*");
    // permanent: true makes Vercel answer with a 308
    expect(rule.permanent).toBe(true);
    expect(rule.statusCode).toBeUndefined();
  });
});
