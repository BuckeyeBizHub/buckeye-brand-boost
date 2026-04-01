import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductCarousel from "@/components/ProductCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <PageLayout showBreadcrumbs={false}>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProductCarousel />
      <TestimonialsSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
