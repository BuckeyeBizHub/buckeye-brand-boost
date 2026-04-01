import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import HowWePrice from "@/components/pricing/HowWePrice";
import PopularSolutions from "@/components/pricing/PopularSolutions";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingCTA from "@/components/pricing/PricingCTA";
import { usePageTitle } from "@/hooks/usePageTitle";

const Pricing = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Pricing",
    description:
      "Transparent pricing for business printing, promotional products & vehicle branding in Ohio. 24-hour quotes, no hidden fees, full pricing transparency up front.",
    url: "https://buckeye-brand-boost.lovable.app/pricing",
    areaServed: { "@type": "State", name: "Ohio" },
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
  };

    usePageTitle("Pricing - Transparent Quotes for Ohio Business Branding");

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PricingHero />
      <HowWePrice />
      <PopularSolutions />
      <PricingComparison />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default Pricing;
