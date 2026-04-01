import ServicePageLayout from "@/components/services/ServicePageLayout";
import rebrandImg from "@/assets/service-rebrand-kit.jpg";

const FullRebrandKits = () => (
  <ServicePageLayout
    title="Full Rebrand Kits"
    headline="Full Rebrand Kits for Ohio Businesses"
    subheadline="Elevate your entire brand presence in one complete, cohesive package"
    image={rebrandImg}
    slug="full-rebrand-kits"
    description={[
      "Elevate your entire brand presence in one complete package. We coordinate vehicle branding, signage, apparel, printing, and digital assets to create a cohesive, professional image that helps your business compete at the highest level.",
      "A full rebrand kit from Buckeye Biz Hub includes everything — business cards, letterhead, brochures, branded apparel, vehicle wraps, signage, and even digital assets like website design and Google Business Profile optimization.",
      "Instead of juggling multiple vendors, you get one dedicated partner who ensures every touchpoint of your brand looks unified, professional, and powerful. We save you time, money, and the headache of managing it all yourself.",
    ]}
    benefits={[
      { text: "Complete brand overhaul — printing, apparel, signage, wraps, and digital" },
      { text: "One partner, one vision, one cohesive brand identity" },
      { text: "Save time and money vs. managing multiple vendors" },
      { text: "Includes digital assets: website, Google Business Profile, and SEO" },
      { text: "Perfect for new businesses, acquisitions, or brand refreshes" },
    ]}
    whyOhio="Ohio businesses trust Buckeye Biz Hub for full rebrands because we're the only local partner that handles everything under one roof — from business cards to vehicle wraps to websites — ensuring a unified brand that commands respect."
  />
);

export default FullRebrandKits;
