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
import SEOHead, { localBusinessSchema, organizationSchema, BUCKEYE_LOCAL_BUSINESS_OPTS } from "@/components/SEOHead";

const Index = () => (
  <div className="min-h-screen">
    <SEOHead
      description="Buckeye Biz Hub is your local Ohio partner for premium business printing, promotional products, vehicle wraps, banners, and full branding solutions. Fast 24-hour quotes, wholesale pricing, and 100% satisfaction guaranteed."
      keywords={["Ohio business printing", "promotional products Ohio", "vehicle wraps Columbus", "branding solutions"]}
      structuredData={[
        localBusinessSchema(BUCKEYE_LOCAL_BUSINESS_OPTS),
        organizationSchema(),
      ]}
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
    <section className="py-16 bg-muted">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-card-foreground">
            Free Cost Comparison — No Commitment
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us what you're currently spending on branded materials, uniforms, signage, or printed items and we'll show you exactly what we can provide for less — often with significant savings.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-2xl hover:bg-primary/90 transition-colors"
          >
            Request Your Free Comparison
          </a>
        </div>
      </div>
    </section>
    <CTASection />
    <Footer />
  </div>
);

export default Index;
