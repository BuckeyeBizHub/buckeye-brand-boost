// @ts-nocheck -- plain JS module shared with scripts/check-blog-post.mjs
import { BANNED, unsourcedNumbers } from "../../scripts/house-style.mjs";

const facts = new Set(["29", "500", "614", "561", "3358"]);
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
});
