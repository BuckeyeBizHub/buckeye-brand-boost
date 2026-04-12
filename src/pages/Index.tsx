import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuePropsStrip from "@/components/ValuePropsStrip";
import ServicesSection from "@/components/ServicesSection";
import RealResultsSection from "@/components/RealResultsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductCarousel from "@/components/ProductCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ElevateCtaSection from "@/components/ElevateCtaSection";

import LatestBlogSection from "@/components/LatestBlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buckeye Biz Hub",
  description: "Ohio's trusted business branding partner. Premium printing, promotional products, vehicle wraps, banners, flags, decals & more.",
  url: "https://www.buckeyebizhub.com",
  telephone: "+1-614-300-3BMH",
  areaServed: { "@type": "State", name: "Ohio" },
  address: { "@type": "PostalAddress", addressLocality: "Columbus", addressRegion: "OH", addressCountry: "US" },
  sameAs: ["https://www.facebook.com/BuckeyeBizHub", "https://twitter.com/BuckeyeBizHub"],
  image: "https://storage.googleapis.com/gpt-engineer-file-uploads/hrXUMAbOK1TQRKQtPFJP1P5NDPp1/social-images/social-1775753483930-Buckeye_Biz_Hub_Logo.webp",
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
};

const Index = () => {
    usePageSEO({ description: "Buckeye Biz Hub is your local Ohio partner for premium business printing, promotional products, vehicle wraps, banners, and full branding solutions. Fast 24-hour quotes, wholesale pricing, and 100% satisfaction guaranteed." });

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <HeroSection />
      <ValuePropsStrip />
      <ServicesSection />
      <RealResultsSection />
      <WhyChooseSection />
      <ProductCarousel />
      <TestimonialsSection />
      <LatestBlogSection />
      <ElevateCtaSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
