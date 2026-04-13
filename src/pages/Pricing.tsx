import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import HowWePrice from "@/components/pricing/HowWePrice";
import CustomerExamples from "@/components/pricing/CustomerExamples";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingCTA from "@/components/pricing/PricingCTA";
import { usePageSEO } from "@/hooks/usePageTitle";

const Pricing = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Pricing",
    description:
      "Transparent pricing with concierge service included. Best possible pricing for Ohio businesses without cutting corners on quality.",
    url: "https://www.buckeyebizhub.com/pricing",
    areaServed: { "@type": "State", name: "Ohio" },
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
  };

  usePageSEO({
    title: "Transparent Pricing with Concierge Service | Buckeye Biz Hub",
    description:
      "Transparent pricing with concierge service included. We deliver the best possible pricing for Ohio businesses without cutting corners on quality.",
  });

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PricingHero />
      <HowWePrice />
      <CustomerExamples />
      <PricingComparison />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default Pricing;
