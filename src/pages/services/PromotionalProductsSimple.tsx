import SimpleServicePage from "@/components/services/SimpleServicePage";
import g1 from "@/assets/branded-drinkware-tumblers.jpg";
import g2 from "@/assets/custom-bags-totes.jpg";
import g3 from "@/assets/custom-hats-product.jpg";

const PromotionalProductsSimple = () => (
  <SimpleServicePage
    service="Promotional Products"
    metaTitle="Promotional Products in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Branded promotional products in Columbus, Ohio — custom drinkware, totes, pens, hats, and giveaways from a 4,300+ supplier network at honest wholesale pricing."
    slug="/promotional-products"
    description={`Promotional products are one of the most cost-effective marketing tools any Columbus, Ohio business can use. Unlike a digital ad that disappears after three seconds, a branded tumbler, tote bag, or pen lives on a desk, in a car, or in someone's hand for months — sometimes years — quietly delivering impressions every single day. Industry research shows 85% of consumers remember the company that gave them a promotional product, and nearly half of recipients use those items daily.

At Buckeye Biz Hub we tap into a 4,300+ supplier network so you're never stuck choosing from a tiny catalog. Need 250 branded coffee tumblers for a real estate closing kit? A pallet of t-shirts for a Columbus 5K? Custom notebooks, koozies, totes, hats, water bottles, USB drives, or office swag for a trade show? We source it all, vet the suppliers, and pass the wholesale pricing through to you with one transparent management fee on top.

We help every kind of Ohio organization with promotional products in Columbus Ohio — small businesses, schools, churches, nonprofits, healthcare practices, contractors, breweries, and event organizers. Every project starts with a free consultation: tell us your audience, budget, and event date, and David will come back with 3–5 product recommendations, real photos, and a side-by-side price comparison within 24 hours. No high-pressure sales, no order minimums on most items, no hidden setup fees. Just thoughtful giveaways your customers will actually keep and use.`}
    gallery={[
      { src: g1, alt: "Branded drinkware and tumblers for a Columbus Ohio business" },
      { src: g2, alt: "Custom branded tote bags and totes" },
      { src: g3, alt: "Custom embroidered hats for a Central Ohio company" },
    ]}
    startingFrom="$1.29"
    pricingNote="per item on common giveaways like pens, koozies, and stickers"
    benefits={[
      "Access to a 4,300+ supplier network — far more options than any single catalog",
      "Wholesale pricing with one flat management fee, never markup-on-markup",
      "Free product recommendations matched to your audience and budget",
      "Low minimums — many items start at just 12–25 pieces",
      "Local Columbus, Ohio service with same-business-day proofs and quotes",
    ]}
  />
);

export default PromotionalProductsSimple;
