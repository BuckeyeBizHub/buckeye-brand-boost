import { describe, expect, it } from "vitest";
// Shared with scripts/check-blog-post.mjs, which holds posts that break these rules.
import { BANNED, claimUnit, stripComments, unsourcedNumbers } from "../../scripts/house-style.mjs";

const facts = new Set(["3", "5", "7", "29", "40", "500", "614", "561", "3358", "24 hour"]);
const banned = (text: string) => BANNED.filter(([p]) => p.test(text)).map(([, r]) => r);

describe("house style", () => {
  it("flags banned words and shapes", () => {
    expect(banned("Unlock your brand's potential.")).toContain("banned word: unlock");
    expect(banned("It's not just a sticker, but a statement.")).toContain('banned shape: "not just X, but Y"');
    expect(banned("We guarantee it.")).toContain("claim: guarantee");
  });

  it("leaves plain copy and landscaping alone", () => {
    expect(banned("We print truck lettering for landscape crews in Columbus.")).toEqual([]);
    expect(banned("Call us and we'll quote it the same day.")).toEqual([]);
  });

  it("holds numbers that have no source", () => {
    expect(unsourcedNumbers("<p>73% of buyers remember a truck wrap.</p>", facts)).toHaveLength(1);
    expect(unsourcedNumbers("<p>Trucks over 10,001 pounds need it.</p>", facts)).toHaveLength(1);
  });

  it("passes site facts, years, small counts and linked numbers", () => {
    expect(unsourcedNumbers("<p>500 cards start at $29. Call (614) 561-3358.</p>", facts)).toEqual([]);
    expect(unsourcedNumbers("<p>Our 2026 guide has three to 6 tips.</p>", facts)).toEqual([]);
    expect(
      unsourcedNumbers('<p>Trucks over 10,001 pounds need it (<a href="https://www.fmcsa.dot.gov/">FMCSA</a>).</p>', facts),
    ).toEqual([]);
    expect(unsourcedNumbers("<p>List it as on your MCS-150, e.g. USDOT 123456.</p>", facts)).toEqual([]);
  });

  it("holds claims even when the bare number appears elsewhere on the site", () => {
    // 3, 5, 7 and 40 are all in `facts`, the way they are somewhere in src/content.
    expect(unsourcedNumbers("<p>A good wrap lasts 7 years.</p>", facts)).toHaveLength(1);
    expect(unsourcedNumbers("<p>Trusted by 40 local fleets.</p>", facts)).toHaveLength(1);
    expect(unsourcedNumbers("<p>Owners see 3 times more calls.</p>", facts)).toHaveLength(1);
    expect(unsourcedNumbers("<p>Owners see 3x more calls.</p>", facts)).toHaveLength(1);
    expect(unsourcedNumbers("<p>Turnaround is 5 business days.</p>", facts)).toHaveLength(1);
    expect(unsourcedNumbers("<p>We have a 5-star rating.</p>", facts)).toHaveLength(1);
  });

  it("passes a claim the site already makes the same way", () => {
    expect(unsourcedNumbers("<p>Your quote comes back within 24 hours.</p>", facts)).toEqual([]);
  });

  it("reads claim words and ignores code comments", () => {
    expect(claimUnit(" local fleets and more")).toBe("fleet");
    expect(claimUnit(" business days")).toBe("day");
    expect(claimUnit("% of buyers")).toBe("%");
    expect(claimUnit(" business cards")).toBeNull();
    expect(stripComments("// target 25 to 40% margin\nconst a = 1; /* 7 years */")).not.toMatch(/40|7 years/);
    expect(stripComments('const url = "https://example.com";')).toContain("https://example.com");
  });
});
