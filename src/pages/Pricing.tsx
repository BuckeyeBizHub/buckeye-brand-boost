import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import HowWeWork from "@/components/pricing/HowWeWork";
import HowWePrice from "@/components/pricing/HowWePrice";
import RealProjectExamples from "@/components/pricing/RealProjectExamples";
import CustomerExamples from "@/components/pricing/CustomerExamples";
import WhyOurPricingIsDifferent from "@/components/pricing/WhyOurPricingIsDifferent";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingCTA from "@/components/pricing/PricingCTA";
import { usePageSEO } from "@/hooks/usePageTitle";

const Pricing = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Pricing",
    description:
      "Transparent pricing with true concierge service. No hidden fees. No surprise charges. Honest, clear pricing backed by personal attention from start to finish.",
    url: "https://www.buckeyebizhub.com/pricing",
    areaServed: { "@type": "State", name: "Ohio" },
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
  };

  usePageSEO({
    title: "Transparent Pricing with True Concierge Service | Buckeye Biz Hub",
    description:
      "No hidden fees. No surprise charges. Just honest, clear pricing backed by personal attention from start to finish — for Columbus and Central Ohio businesses.",
  });

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PricingHero />
      <HowWeWork />
      <HowWePrice />
      <RealProjectExamples />
      <CustomerExamples />
      <WhyOurPricingIsDifferent />
      <PricingComparison />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default Pricing;
