"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import HowWeWork from "@/components/pricing/HowWeWork";
import HowWePrice from "@/components/pricing/HowWePrice";
import WhyOurPricingIsDifferent from "@/components/pricing/WhyOurPricingIsDifferent";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingCTA from "@/components/pricing/PricingCTA";
import { usePageSEO } from "@/hooks/usePageTitle";

const Pricing = () => {

  usePageSEO({
    title: "Pricing",
    description:
      "Every fee up front, no hidden costs. Fast, honest quotes on printing, vehicle wraps, banners and branding in Central Ohio.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PricingHero />
      <HowWeWork />
      <HowWePrice />
      <WhyOurPricingIsDifferent />
      <PricingComparison />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default Pricing;
