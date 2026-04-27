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

/**
 * Subtle gradient divider — replaces hard section breaks with a soft,
 * almost imperceptible transition that keeps the page flowing.
 */
const FlowDivider = () => (
  <div aria-hidden className="relative h-px max-w-6xl mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.08] to-transparent" />
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-gradient-to-b from-background via-ohio-grey-light/15 to-background">
    <SEOHead
      description="Buckeye Biz Hub is your local Ohio partner for premium business printing, vehicle wraps, banners, decals, promotional products, and full rebrand kits. Fast 24-hour quotes, wholesale pricing, and 100% satisfaction guaranteed."
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
    <FlowDivider />
    {/* Centerpiece */}
    <ServicesSection />
    <FlowDivider />
    <RealResultsSection />
    <WhyChooseSection />
    <FlowDivider />
    <ProductCarousel />
    <TestimonialsSection />
    <FlowDivider />
    <LatestBlogSection />
    <ElevateCtaSection />

    {/* Free Cost Comparison — flowing, no hard box */}
    <section className="relative py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/[0.04] via-background to-primary/[0.04]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/[0.05] rounded-full blur-[180px]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 text-[0.7rem] font-extrabold text-primary tracking-[0.4em] uppercase mb-6 bg-primary/[0.08] px-5 py-2 rounded-full border border-primary/15">
          No Commitment
        </span>
        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-[1.05] tracking-tight">
          Free <span className="text-primary">Cost Comparison</span>
        </h3>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-[1.7] font-light max-w-2xl mx-auto">
          Tell us what you're currently spending on branded materials, uniforms, signage, or printed items and we'll show you exactly what we can provide for less — often with significant savings.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-black px-12 py-5 rounded-2xl hover:bg-ohio-red-light transition-all duration-300 shadow-[0_0_50px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_70px_hsl(0_85%_40%/0.55)] uppercase tracking-[0.15em] text-sm"
        >
          Request Your Free Comparison
        </a>
      </div>
    </section>
    <CTASection />
    <Footer />
  </div>
);

export default Index;
