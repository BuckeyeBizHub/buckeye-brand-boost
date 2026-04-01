import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuePropsStrip from "@/components/ValuePropsStrip";
import ServicesSection from "@/components/ServicesSection";
import RealResultsSection from "@/components/RealResultsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductCarousel from "@/components/ProductCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ElevateCtaSection from "@/components/ElevateCtaSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

const Index = () => {
    usePageTitle();

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
      <ElevateCtaSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
