import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuePropsStrip from "@/components/ValuePropsStrip";
import IndustryStrip from "@/components/IndustryStrip";
import ServicesSection from "@/components/ServicesSection";
import RealResultsSection from "@/components/RealResultsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductCarousel from "@/components/ProductCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ElevateCtaSection from "@/components/ElevateCtaSection";
import LatestBlogSection from "@/components/LatestBlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead, { localBusinessSchema, organizationSchema } from "@/components/SEOHead";

const Index = () => (
  <div className="min-h-screen">
    <SEOHead
      description="Buckeye Biz Hub is your local Ohio partner for premium business printing, promotional products, vehicle wraps, banners, and full branding solutions. Fast 24-hour quotes, wholesale pricing, and 100% satisfaction guaranteed."
      keywords={["Ohio business printing", "promotional products Ohio", "vehicle wraps Columbus", "branding solutions"]}
      structuredData={[localBusinessSchema(), organizationSchema()]}
    />
    <Navbar />
    <HeroSection />
    <IndustryStrip />
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

export default Index;
