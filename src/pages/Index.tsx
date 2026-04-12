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

const Index = () => {
    usePageSEO({ description: "Buckeye Biz Hub is your local Ohio partner for premium business printing, promotional products, vehicle wraps, banners, and full branding solutions. Fast 24-hour quotes, wholesale pricing, and 100% satisfaction guaranteed." });

  return (
    <div className="min-h-screen">
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
