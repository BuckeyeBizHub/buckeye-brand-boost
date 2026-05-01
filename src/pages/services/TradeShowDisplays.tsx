import SimpleServicePage from "@/components/services/SimpleServicePage";
import g1 from "@/assets/banner-retractable.jpg";
import g2 from "@/assets/event-tent-product.jpg";
import g3 from "@/assets/printing-tradeshow.jpg";

const TradeShowDisplays = () => (
  <SimpleServicePage
    service="Trade Show Displays"
    metaTitle="Trade Show Displays in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Trade show displays in Columbus, Ohio — retractable banner stands, pop-up backdrops, branded tents, table throws, and full booth kits ready for any Central Ohio event."
    slug="/trade-show-displays"
    description={`Trade shows are still one of the highest-converting marketing channels for Columbus, Ohio businesses — but only if your booth actually looks the part. A wrinkled tablecloth and a curling poster from the office printer doesn't cut it next to a competitor with a real backdrop, branded tent, and matching collateral. Buckeye Biz Hub builds full trade show displays in Columbus Ohio for businesses exhibiting at the Greater Columbus Convention Center, the Ohio Expo Center, regional industry conferences, and local job fairs across Central Ohio.

We assemble full booth kits piece by piece based on your space and budget: retractable banner stands (33", 47", and 60" widths), backlit pop-up backdrops, fabric tension-frame walls, 10x10 branded tents with custom canopies and side walls, printed table throws, table runners, counters, brochure holders, branded tablecloths, and giveaway products to drive booth traffic. Every piece is portable, packs into a wheeled travel case, and is built to be set up by one person in under 15 minutes.

Bundling matters. When you order your trade show displays in Columbus Ohio with Buckeye Biz Hub, we color-match every piece — your tent, banners, table throw, and giveaways all share the exact same brand colors, logos, and messaging. That visual consistency is what separates a forgettable booth from one that gets remembered (and called) after the show. Most full booth kits ship in 7–14 business days, with transparent wholesale-plus-management-fee pricing on every component.`}
    gallery={[
      { src: g1, alt: "Retractable banner stand at a Columbus Ohio trade show" },
      { src: g2, alt: "Branded 10x10 event tent for a Central Ohio business expo" },
      { src: g3, alt: "Printed trade show booth materials for an Ohio company" },
    ]}
    startingFrom="$249"
    pricingNote="for a 33\" retractable banner stand with full-color print"
    benefits={[
      "Full booth kits — banners, backdrops, tents, table throws, and counters",
      "Color-matched across every piece for consistent brand presentation",
      "Portable, single-person setup in under 15 minutes per piece",
      "Most orders ship in 7–14 business days, with rush options available",
      "Transparent pricing — wholesale cost plus one flat management fee",
    ]}
  />
);

export default TradeShowDisplays;
