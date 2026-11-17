import { test, expect } from "vitest";
import fs from "node:fs";
import WIDTHS from "@/lib/responsive-images.json";
import { responsive, SIZES } from "@/lib/responsive-image";

test("every photo listed for phones has its full file and its 800px copy", () => {
  const missing: string[] = [];
  for (const src of Object.keys(WIDTHS)) {
    if (!fs.existsSync("public" + src)) missing.push(src);
    if (!fs.existsSync("public" + src.replace(/(\.[a-z]+)$/i, "-800w$1"))) missing.push(src + " (800w)");
  }
  expect(missing).toEqual([]);
});

test("photos without a small copy render the normal way", () => {
  expect(responsive("/assets/not-a-listed-photo.jpg", SIZES.card)).toEqual({});
});
