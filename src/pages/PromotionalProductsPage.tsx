import ServicePageLayout from "@/components/services/ServicePageLayout";
import promoImg from "@/assets/service-promo-giveaways.jpg";

const PromotionalProductsPage = () => (
  <ServicePageLayout
    title="Promotional Products & Giveaways"
    headline="Promotional Products & Giveaways for Ohio Businesses"
    subheadline="Turn every interaction into a lasting brand impression that drives results"
    image={promoImg}
    slug="promotional-products"
    description={[
      "Turn every interaction into a lasting brand impression. Our custom promotional products keep your name top-of-mind long after the conversation ends, driving referrals and repeat business across Ohio.",
      "With access to over 50,000 products through our SAGE and PPAI memberships, we source the highest-quality drinkware, pens, tote bags, notebooks, tech accessories, and branded merchandise at true wholesale pricing.",
      "Whether you're preparing for a trade show, corporate event, client appreciation campaign, or employee onboarding, we'll help you choose the perfect items that represent your brand and stay out of the junk drawer.",
    ]}
    benefits={[
      { text: "Access to 50,000+ promotional products at wholesale pricing" },
      { text: "Custom branding with your logo, colors, and messaging" },
      { text: "Perfect for trade shows, events, and client appreciation" },
      { text: "SAGE & PPAI certified for quality and reliability" },
      { text: "Expert guidance on choosing the right products for your goals" },
    ]}
    whyOhio="Ohio businesses trust us because we combine massive product selection with personal guidance. We don't just sell you promo items — we help you choose the right ones that actually get used, remembered, and drive real business results."
  />
);

export default PromotionalProductsPage;
