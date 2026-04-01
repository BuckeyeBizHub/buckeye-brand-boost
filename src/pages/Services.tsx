import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesTrustBar from "@/components/services/ServicesTrustBar";

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
    description: "Premium 32pt ultra-thick cards with foil, spot UV, and custom finishes.",
    href: "/business-cards",
  },
  {
    image: brochuresImg,
    title: "Brochures & Business Printing",
    description: "Full-color brochures, flyers, menus, and professional printed materials.",
    href: "/brochures-and-business-printing",
  },
  {
    image: promoImg,
    title: "Promotional Products & Giveaways",
    description: "Custom drinkware, pens, totes, notebooks, and branded merch.",
    href: "/promotional-products",
  },
  {
    image: apparelImg,
    title: "Branded Apparel & Uniforms",
    description: "Custom embroidered polos, hoodies, hats, and staff uniforms.",
    href: "/branded-apparel-and-uniforms",
  },
  {
    image: yardSignsImg,
    title: "Yard Signs & Custom Signage",
    description: "Yard signs, banners, job-site signage, and large-format prints.",
    href: "/yard-signs-and-signage",
  },
  {
    image: vehicleWrapImg,
    title: "Vehicle Wraps & Fleet Branding",
    description: "Full and partial vehicle wraps, magnetic signs, and fleet graphics.",
    href: "/vehicle-wraps-and-fleet-branding",
  },
  {
    image: rebrandImg,
    title: "Full Rebrand Kits",
    description: "Complete branding packages combining printing, apparel, signage, and vehicle wraps.",
    href: "/full-rebrand-kits",
  },
  {
    image: websiteImg,
    title: "Website Design & Development",
    description: "Custom, mobile-friendly websites built to convert visitors into customers.",
    price: "From $1,999",
    href: "/website-design",
  },
  {
    image: seoImg,
    title: "Local SEO & Google Ranking",
    description: "Improve local search rankings and dominate the Google Map Pack.",
    price: "From $399/month",
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
