import ServicePageLayout from "@/components/services/ServicePageLayout";
import websiteImg from "@/assets/service-website-design.jpg";

const WebsiteDesign = () => (
  <ServicePageLayout
    title="Website Design & Development"
    headline="Website Design & Development for Ohio Businesses"
    subheadline="Build a modern website that attracts customers and converts them into loyal clients"
    image={websiteImg}
    slug="website-design"
    description={[
      "Build a modern website that attracts customers and converts them into loyal clients. We design fast, mobile-friendly, lead-generating websites tailored specifically for Ohio small businesses.",
      "Your website is your digital storefront — and first impressions happen in seconds. We create clean, professional, lightning-fast websites optimized for mobile devices, local SEO, and lead generation so you capture every potential customer.",
      "From simple landing pages to full business websites with booking systems and contact forms, we build sites that look great, load fast, and actually drive phone calls and form submissions for your Ohio business.",
    ]}
    benefits={[
      { text: "Custom, mobile-friendly designs that convert visitors into leads" },
      { text: "Built-in SEO optimization for local Columbus and Ohio searches" },
      { text: "Fast-loading pages that rank higher on Google" },
      { text: "Contact forms, booking systems, and call-to-action integration" },
      { text: "Ongoing support and updates available" },
    ]}
    whyOhio="Ohio small businesses choose us because we understand the local market. We don't just build beautiful websites — we build websites that actually generate phone calls, form submissions, and new customers for businesses right here in Central Ohio."
  />
);

export default WebsiteDesign;
