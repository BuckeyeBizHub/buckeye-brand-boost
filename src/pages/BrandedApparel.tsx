import ServicePageLayout from "@/components/services/ServicePageLayout";
import apparelImg from "@/assets/service-apparel-uniforms.jpg";

const BrandedApparel = () => (
  <ServicePageLayout
    title="Branded Apparel & Uniforms"
    headline="Branded Apparel & Uniforms for Ohio Businesses"
    subheadline="Build instant credibility and team unity with professional branded apparel"
    image={apparelImg}
    slug="branded-apparel-and-uniforms"
    description={[
      "Build instant credibility and team unity with professional branded apparel. From embroidered polos to hoodies and jackets, your entire staff will look sharp, consistent, and proud to represent your Ohio business.",
      "We offer a full range of custom apparel including polos, t-shirts, hoodies, hats, jackets, and workwear — all professionally embroidered or screen printed with your logo and brand colors for a polished, cohesive look.",
      "Whether you need 12 polos for a small team or 500 shirts for a company event, we deliver premium quality at wholesale pricing with fast turnaround. Your team will look like a million bucks without spending it.",
    ]}
    benefits={[
      { text: "Professional embroidery and screen printing options" },
      { text: "Polos, t-shirts, hoodies, hats, jackets, and workwear" },
      { text: "Bulk team ordering with size flexibility" },
      { text: "Wholesale pricing — save significantly vs. retail decorators" },
      { text: "Fast turnaround for events, launches, and seasonal needs" },
    ]}
    whyOhio="Ohio businesses choose Buckeye Biz Hub for branded apparel because we combine premium decoration quality with wholesale pricing and the flexibility to handle orders of any size — from a dozen polos to hundreds of custom hoodies."
  />
);

export default BrandedApparel;
