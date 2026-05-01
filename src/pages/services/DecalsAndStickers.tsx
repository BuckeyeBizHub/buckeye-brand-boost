import SimpleServicePage from "@/components/services/SimpleServicePage";
import g1 from "@/assets/decal-window-clings.jpg";
import g2 from "@/assets/decal-bumper-stickers.jpg";
import g3 from "@/assets/decal-floor-wall.jpg";

const DecalsAndStickers = () => (
  <SimpleServicePage
    service="Decals & Stickers"
    metaTitle="Decals & Stickers in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Custom decals and stickers in Columbus, Ohio — vehicle decals, window clings, floor graphics, DOT numbers, and bumper stickers printed on premium vinyl."
    slug="/decals-and-stickers"
    description={`Custom decals and stickers are the swiss army knife of small-business marketing. They turn windows into ads, walls into wayfinding, vehicles into billboards, and laptops into walking referrals. Buckeye Biz Hub prints decals and stickers in Columbus, Ohio for every use case you can think of — and a few you probably haven't.

We handle it all in-house: die-cut vinyl stickers, kiss-cut sticker sheets, weatherproof bumper stickers, transparent window clings, frosted privacy decals, reflective DOT and USDOT number decals for trucks, full-color vehicle decals, floor graphics with anti-slip laminate, wall decals for offices and retail spaces, and industrial machinery labels rated for outdoor and chemical exposure. Every product is printed on premium 3M, Avery, or Oracal vinyl with UV-stable inks built for Ohio's freeze-thaw cycles.

Whether you're a Columbus contractor who needs DOT numbers for your fleet, a small-batch coffee roaster who wants product stickers, a real-estate agent who needs branded yard-sign decals, or a Central Ohio gym that wants floor graphics directing traffic, we'll match the right material to your application. Most decal and sticker orders in Columbus Ohio ship in 3–5 business days, with same-business-day proofs and free design help on every order. And like everything else we print, pricing is fully transparent — wholesale material cost plus a single flat management fee, never a markup hidden behind a "setup charge."`}
    gallery={[
      { src: g1, alt: "Custom window clings for a Columbus, Ohio storefront" },
      { src: g2, alt: "Branded bumper stickers and die-cut decals" },
      { src: g3, alt: "Floor and wall graphics installed in a Central Ohio business" },
    ]}
    startingFrom="$0.79"
    pricingNote="per die-cut vinyl sticker at quantity 250+"
    benefits={[
      "Premium 3M, Avery, and Oracal vinyl rated for Ohio weather",
      "Die-cut, kiss-cut, transparent, reflective, and floor-grade options",
      "DOT and USDOT number decals shipped fast for Ohio commercial fleets",
      "Free design help and same-business-day digital proofs",
      "Transparent pricing — no hidden setup or art charges, ever",
    ]}
  />
);

export default DecalsAndStickers;
