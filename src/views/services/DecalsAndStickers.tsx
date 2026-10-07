"use client";
import SimpleServicePage from "@/components/services/SimpleServicePage";
const g1 = "/assets/decal-window-clings.jpg";
const g2 = "/assets/decal-bumper-stickers.jpg";
const g3 = "/assets/decal-floor-wall.jpg";
const DecalsAndStickers = () => (
  <SimpleServicePage
    service="Decals & Stickers"
    metaTitle="Decals & Stickers in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Custom decals and stickers in Columbus, Ohio. Vehicle decals, window clings, floor graphics, DOT numbers and bumper stickers on quality vinyl."
    slug="/decals-and-stickers"
    description={`Custom decals and stickers are the Swiss Army knife of small-business marketing. They turn windows into ads, walls into wayfinding, trucks into billboards and laptops into walking referrals. Buckeye Biz Hub handles decals and stickers in Columbus, Ohio for just about any use you can think of.

Die-cut vinyl stickers, kiss-cut sheets, weatherproof bumper stickers, clear window clings, frosted privacy film, reflective DOT and USDOT numbers for trucks, full-color vehicle decals, anti-slip floor graphics, wall decals for offices and stores, and machinery labels rated for outdoor and chemical exposure. Our partner shops print on 3M, Avery or Oracal vinyl with UV-stable inks that hold up to Ohio's freeze-thaw cycles.

Columbus contractor who needs DOT numbers on the fleet? Coffee roaster who wants product stickers? Realtor who needs yard-sign decals? Gym that wants floor graphics to direct traffic? We match the right material to the job. Most decal and sticker orders ship in 3–5 business days, with same-day proofs and free design help. Pricing is out in the open: wholesale material cost plus one flat management fee. No markup hiding behind a "setup charge."`}
    gallery={[
      { src: g1, alt: "Custom window clings for a Columbus, Ohio storefront" },
      { src: g2, alt: "Branded bumper stickers and die-cut decals" },
      { src: g3, alt: "Floor and wall graphics installed in a Central Ohio business" },
    ]}
    startingFrom="$0.79"
    pricingNote="per die-cut vinyl sticker at quantity 250+"
    benefits={[
      "3M, Avery and Oracal vinyl rated for Ohio weather",
      "Die-cut, kiss-cut, clear, reflective and floor-grade options",
      "DOT and USDOT number decals, fast, for Ohio commercial fleets",
      "Free design help and same-day digital proofs",
      "No hidden setup or art charges",
    ]}
  />
);

export default DecalsAndStickers;
