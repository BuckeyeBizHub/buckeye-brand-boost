import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuePropsStrip from "@/components/ValuePropsStrip";
import IndustryStrip from "@/components/IndustryStrip";
import ServicesSection from "@/components/ServicesSection";
import ConciergeModelSection from "@/components/ConciergeModelSection";
import RealResultsSection from "@/components/RealResultsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductCarousel from "@/components/ProductCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ElevateCtaSection from "@/components/ElevateCtaSection";
import LatestBlogSection from "@/components/LatestBlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      title="Buckeye Biz Hub | Columbus Ohio Branding Concierge, Printing & Promotional Products"
      description="Columbus Ohio's branding concierge — printing, promotional products, apparel, fleet branding. Built by a 3-time founder. Free 24-hour quotes."
      keywords={["Columbus Ohio printing", "vehicle wraps Columbus Ohio", "fleet wraps Columbus Ohio", "promotional products Columbus Ohio", "branding concierge Columbus", "business printing Columbus", "embroidered apparel Ohio", "banners Columbus Ohio"]}
      canonicalUrl="https://www.buckeyebizhub.com"
      ogImage="https://storage.googleapis.com/gpt-engineer-file-uploads/hrXUMAbOK1TQRKQtPFJP1P5NDPp1/social-images/social-1775753483930-Buckeye_Biz_Hub_Logo.webp"
      ogType="website"
    />
    <Navbar />
    <HeroSection />
    <IndustryStrip />
    <ValuePropsStrip />
    <FlowDivider />
    {/* Centerpiece */}
    <ServicesSection />
    <FlowDivider />
    <ConciergeModelSection />
    <FlowDivider />

    {/* Built by an Operator — credibility before proof */}
    <section className="py-24 lg:py-28 bg-ohio-cream">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
            Why Buckeye Biz Hub Exists
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
            This Isn't Just Another Print Shop. It's Built by{" "}
            <span className="text-primary">an Operator</span> Who's Been Where You Are.
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Buckeye Biz Hub was founded by David Stein — a third-generation Ohio operator and three-time business founder. Before launching Buckeye Biz Hub, David built and sold BeerTubes — a patented product company that placed in the on-premise catalogs of InBev, Anheuser-Busch, MillerCoors, and Constellation Brands. He also founded a multi-concept restaurant group and ran one of Columbus's largest independent automotive service businesses.
            </p>
            <p>
              That operating experience changes everything about how Buckeye Biz Hub serves clients. The branding recommendations come from someone who's spent his own money on marketing. The strategic guidance comes from someone who's lived the problems other consultants only read about.
            </p>
            <p className="text-foreground font-semibold">
              For business owners who want a partner who actually understands what it takes to build something — this is it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/about">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.45)] hover:shadow-[0_0_70px_hsl(0_80%_42%/0.65)] transition-all duration-300 group uppercase tracking-wider"
              >
                Read David's Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/business-consulting">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 text-foreground hover:bg-primary/10 font-bold text-base md:text-lg px-9 py-7 rounded-2xl"
              >
                Explore Consulting Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
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
