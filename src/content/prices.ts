// Starting prices shown on the site. Approved by David on Oct 8, 2026
// (target 25 to 40% margin, low end of the market). Wraps: David's going rate,
// $14/sq ft for design, print and install, less with print-ready files. Change a number here and
// every page that shows it updates: product pages, the pricing page and the
// structured data Google reads.
//
// Never put vendor names or costs in this file. It ships to the browser.

export type PriceKey =
  | "business-cards"
  | "postcards"
  | "flyers"
  | "door-hangers"
  | "roll-labels"
  | "vinyl-decals"
  | "car-magnets"
  | "vinyl-banner"
  | "yard-signs"
  | "retractable-banner"
  | "aluminum-sign"
  | "door-lettering"
  | "window-lettering"
  | "vehicle-wrap"
  | "embroidered-polos"
  | "screen-printed-tees";

export interface StartingPrice {
  /** What you get, with the quantity. Shown as the headline. */
  item: string;
  /** The spec the price is for. */
  spec: string;
  /** Starting price in whole dollars. */
  from: number;
  /** "each" for per-piece prices, "sq ft" for wraps; omitted for a whole order. */
  per?: "each" | "sq ft";
  /** Quantity the price applies to, for structured data. */
  quantity: number;
  /** True when the price includes installation. */
  installed?: boolean;
}

export const PRICES: Record<PriceKey, StartingPrice> = {
  "business-cards": {
    item: "500 business cards",
    spec: "3.5 x 2, 14pt, full color both sides",
    from: 29,
    quantity: 500,
  },
  postcards: {
    item: "500 postcards",
    spec: "4 x 6, 14pt, full color both sides",
    from: 55,
    quantity: 500,
  },
  flyers: {
    item: "500 flyers",
    spec: "8.5 x 11, 100lb gloss, full color both sides",
    from: 119,
    quantity: 500,
  },
  "door-hangers": {
    item: "500 door hangers",
    spec: "4.25 x 11, 14pt, full color both sides, hole and slit",
    from: 179,
    quantity: 500,
  },
  "roll-labels": {
    item: "1,000 roll labels",
    spec: "2 x 2, white BOPP, laminated",
    from: 179,
    quantity: 1000,
  },
  "vinyl-decals": {
    item: "100 vinyl decals",
    spec: "3 x 3, cut to shape, outdoor vinyl",
    from: 85,
    quantity: 100,
  },
  "car-magnets": {
    item: "Car magnets, pair",
    spec: "12 x 18, 30 mil, rounded corners",
    from: 35,
    quantity: 2,
  },
  "vinyl-banner": {
    item: "Vinyl banner",
    spec: "3 x 6 ft, 13oz, hemmed with grommets",
    from: 55,
    quantity: 1,
  },
  "yard-signs": {
    item: "10 yard signs",
    spec: "18 x 24, 4mm coroplast, both sides, with H-stakes",
    from: 95,
    quantity: 10,
  },
  "retractable-banner": {
    item: "Retractable banner",
    spec: "33 x 81, stand and print included",
    from: 129,
    quantity: 1,
  },
  "aluminum-sign": {
    item: "Aluminum sign",
    spec: "12 x 18, 3mm, full color",
    from: 35,
    quantity: 1,
  },
  "door-lettering": {
    item: "Truck or van door lettering",
    spec: "Both doors, name and phone, cut vinyl, installed",
    from: 249,
    quantity: 1,
    installed: true,
  },
  "window-lettering": {
    item: "Storefront hours and logo lettering",
    spec: "One door or window, cut vinyl, installed",
    from: 149,
    quantity: 1,
    installed: true,
  },
  "vehicle-wrap": {
    item: "Vehicle wraps",
    spec: "Design, print and install. Less if your files are print ready.",
    from: 14,
    per: "sq ft",
    quantity: 1,
    installed: true,
  },
  "embroidered-polos": {
    item: "Embroidered polos",
    spec: "Left chest logo, 12 minimum",
    from: 29,
    per: "each",
    quantity: 12,
  },
  "screen-printed-tees": {
    item: "Screen printed T-shirts",
    spec: "1 color front, 24 minimum",
    from: 14,
    per: "each",
    quantity: 24,
  },
};

export function formatPrice(p: StartingPrice): string {
  const n = p.from >= 1000 ? p.from.toLocaleString("en-US") : String(p.from);
  return `$${n}${p.per === "each" ? " each" : p.per === "sq ft" ? "/sq ft" : ""}`;
}
