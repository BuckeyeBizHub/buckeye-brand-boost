import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesTrustBar from "@/components/services/ServicesTrustBar";
import FounderQuote from "@/components/services/FounderQuote";

import businessCardsImg from "@/assets/business-cards-product.jpg";
import brochuresImg from "@/assets/service-brochures-printing.jpg";
import promoImg from "@/assets/service-promo-giveaways.jpg";
import apparelImg from "@/assets/service-apparel-uniforms.jpg";
import yardSignsImg from "@/assets/yard-signs-product.jpg";
import vehicleWrapImg from "@/assets/vehicle-wrap-product.jpg";
import rebrandImg from "@/assets/service-rebrand-kit.jpg";
import websiteImg from "@/assets/service-website-design.jpg";
import seoImg from "@/assets/service-local-seo.jpg";

const services = [
  {
    image: businessCardsImg,
    title: "Business Cards & Stationery",
    description: "Create a powerful first impression that lasts. Our premium business cards with luxurious paper stocks, elegant gold foil stamping, and spot UV finishes make your brand feel professional, memorable, and high-end.",
    href: "/business-cards",
  },
  {
    image: brochuresImg,
    title: "Brochures & Business Printing",
    description: "Communicate your message with clarity and impact. We produce vibrant, high-quality brochures, flyers, menus, and printed materials that capture attention, build trust, and help you stand out in the Columbus market.",
    href: "/brochures-and-business-printing",
  },
  {
    image: promoImg,
    title: "Promotional Products & Giveaways",
    description: "Turn every interaction into a lasting brand impression. Our custom promotional products keep your name top-of-mind long after the conversation ends, driving referrals and repeat business across Ohio.",
    href: "/promotional-products",
  },
  {
    image: apparelImg,
    title: "Branded Apparel & Uniforms",
    description: "Build instant credibility and team unity with professional branded apparel. From embroidered polos to hoodies and jackets, your entire staff will look sharp, consistent, and proud to represent your Ohio business.",
    href: "/branded-apparel-and-uniforms",
  },
  {
    image: yardSignsImg,
    title: "Yard Signs & Custom Signage",
    description: "Get noticed where it matters most. Our bold yard signs, banners, and job-site signage generate immediate attention, phone calls, and new customers for local businesses throughout Central Ohio.",
    href: "/yard-signs-and-signage",
  },
  {
    image: vehicleWrapImg,
    title: "Vehicle Wraps & Fleet Branding",
    description: "Transform your fleet into powerful 24/7 mobile advertisements. Our custom vehicle wraps create thousands of daily impressions while making your brand unforgettable on every Ohio road.",
    href: "/vehicle-wraps-and-fleet-branding",
  },
  {
    image: rebrandImg,
    title: "Full Rebrand Kits",
    description: "Elevate your entire brand presence in one complete package. We coordinate vehicle branding, signage, apparel, printing, and digital assets to create a cohesive, professional image that helps your business compete at the highest level.",
    href: "/full-rebrand-kits",
  },
  {
    image: websiteImg,
    title: "Website Design & Development",
    description: "Build a modern website that attracts customers and converts them into loyal clients. We design fast, mobile-friendly, lead-generating websites tailored specifically for Ohio small businesses.",
    href: "/website-design",
  },
  {
    image: seoImg,
    title: "Local SEO & Google Ranking",
    description: "Get discovered by more local customers when they search online. Our local SEO strategies help you rank higher on Google, dominate the Map Pack, and appear exactly when potential customers are looking for you in Columbus and beyond.",
    href: "/local-seo",
  },
];

const Services = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub",
    description: "Premium printing, promotional products, signage, vehicle branding & digital services for Ohio businesses.",
    url: "https://buckeye-brand-boost.lovable.app/services",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <ServicesHero />
      <FounderQuote />

      <section className="py-24 lg:py-36 bg-background">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4">
              Our 9 Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From business cards to full fleet wraps and digital marketing — we help Ohio businesses look professional at wholesale prices.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ServicesCTA />
      <ServicesTrustBar />
      <Footer />
    </div>
  );
};

export default Services;
