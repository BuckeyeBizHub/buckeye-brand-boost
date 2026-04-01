import ServicePageLayout from "@/components/services/ServicePageLayout";
import businessCardsImg from "@/assets/business-cards-product.jpg";

const BusinessCards = () => (
  <ServicePageLayout
    title="Business Cards & Stationery"
    headline="Business Cards & Stationery for Ohio Businesses"
    subheadline="Make a powerful first impression that opens doors and wins clients"
    image={businessCardsImg}
    slug="business-cards"
    description={[
      "Create a powerful first impression that lasts. Our premium business cards with luxurious paper stocks, elegant gold foil stamping, and spot UV finishes make your brand feel professional, memorable, and high-end.",
      "At Buckeye Biz Hub, we go beyond standard printing. We offer ultra-thick 32pt cardstock, soft-touch lamination, raised spot UV, gold and silver foil stamping, and custom die-cut shapes — all at wholesale pricing that saves you real money compared to local print shops.",
      "Whether you need 250 cards for a startup launch or 10,000 for an established firm, we deliver premium quality with fast turnaround and full pricing transparency. Your cards will feel as impressive as the business behind them.",
    ]}
    benefits={[
      { text: "Premium 32pt ultra-thick cardstock that commands attention" },
      { text: "Gold foil, silver foil, and spot UV coating options" },
      { text: "Matching letterhead, envelopes, and stationery sets available" },
      { text: "Wholesale pricing — save 30–50% vs. local print shops" },
      { text: "Fast turnaround with 24-hour quotes guaranteed" },
    ]}
    whyOhio="Ohio businesses trust Buckeye Biz Hub because we combine premium quality with wholesale pricing and a genuine commitment to helping local brands succeed. We're not a faceless online printer — we're your neighbors, and we treat every order like it's our own."
  />
);

export default BusinessCards;
