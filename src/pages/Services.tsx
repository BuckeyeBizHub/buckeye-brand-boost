import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesTrustBar from "@/components/services/ServicesTrustBar";
import ServiceDetailSections from "@/components/services/ServiceDetailSections";
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
import bannersImg from "@/assets/service-banners-flags-decals.jpg";
import postcardsImg from "@/assets/postcards-hero.jpg";
import catalogsImg from "@/assets/catalogs-hero.jpg";
import foldersImg from "@/assets/presentation-folders-hero.jpg";
import menusImg from "@/assets/menus-hero.jpg";
import letterheadImg from "@/assets/letterhead-hero.jpg";
import largeFormatImg from "@/assets/large-format-hero.jpg";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { usePageSEO } from "@/hooks/usePageTitle";

const services = [
  {
    image: businessCardsImg,
    title: "Business Cards & Stationery",
    description: "Make a powerful first impression that lasts. Our premium business cards feature luxurious paper stocks, elegant gold foil stamping, spot UV finishes, and custom die-cuts — designed to make your brand feel professional, memorable, and high-end from the very first handshake.",
    href: "/business-cards",
  },
  {
    image: brochuresImg,
    title: "Brochures & Business Printing",
    description: "Communicate your message with clarity, impact, and professionalism. We create vibrant, high-quality brochures, flyers, menus, and printed materials that capture attention, build trust, and help your Ohio business stand out in a crowded market.",
    href: "/business-printing",
  },
  {
    image: promoImg,
    title: "Promotional Products & Giveaways",
    description: "Turn every interaction into a lasting brand impression. Our custom promotional products — from drinkware and apparel to tech gadgets and office items — keep your name top-of-mind long after the conversation ends, driving referrals and repeat business across Ohio.",
    href: "/promotional-products",
  },
  {
    image: apparelImg,
    title: "Branded Apparel & Uniforms",
    description: "Build instant credibility and team unity with sharp, professional branded apparel. From embroidered polos and hoodies to jackets and safety vests, your entire staff will look consistent, proud, and ready to represent your Ohio business at the highest level.",
    href: "/branded-apparel-and-uniforms",
  },
  {
    image: yardSignsImg,
    title: "Yard Signs & Custom Signage",
    description: "Get noticed where it matters most. Our bold, weather-resistant yard signs, banners, and job-site signage generate immediate attention, phone calls, and new customers for local businesses throughout Central Ohio.",
    href: "/yard-signs-and-signage",
  },
  {
    image: bannersImg,
    title: "Banners & Flags",
    description: "Eye-catching custom banners, feather flags, retractable banners, and graduation banners that grab attention and drive traffic for grand openings, events, job sites, real estate, and celebrations. Perfect for making your message impossible to miss.",
    href: "/banners-and-flags",
  },
  {
    image: vehicleWrapImg,
    title: "Vehicle Wraps & Fleet Branding",
    description: "Transform your fleet into powerful 24/7 mobile advertisements. Our custom vehicle wraps create thousands of daily impressions while protecting your vehicles and making your brand unforgettable on every Ohio road.",
    href: "/vehicle-wraps-and-fleet-branding",
  },
  {
    image: rebrandImg,
    title: "Full Rebrand Kits",
    description: "Elevate your entire brand presence in one complete, coordinated package. We handle vehicle branding, signage, apparel, printing, promotional products, and digital assets to create a cohesive, professional image that helps your business compete — and win — at the highest level.",
    href: "/full-rebrand-kits",
  },
  {
    image: postcardsImg,
    title: "Postcards & Direct Mail",
    description: "Reach targeted neighborhoods with premium postcards and EDDM direct mail campaigns. Multiple sizes, paper stocks, and finishes — plus we coordinate mailing so you just sit back and watch the leads come in.",
    href: "/postcards",
  },
  {
    image: catalogsImg,
    title: "Catalogs & Booklets",
    description: "Professional saddle-stitched, perfect-bound, and wire-o bound catalogs and booklets that showcase your products beautifully. From 8-page brochures to 200-page catalogs — we handle design, printing, and delivery.",
    href: "/catalogs-and-booklets",
  },
  {
    image: foldersImg,
    title: "Presentation Folders",
    description: "Custom pocket folders with foil stamping, spot UV, and embossing that make your proposals and sales materials look polished and professional. Close more deals with folders that impress.",
    href: "/presentation-folders",
  },
  {
    image: menusImg,
    title: "Menus & Table Tents",
    description: "Durable, vibrant, and professionally designed menus and table tents for restaurants, bars, and hospitality businesses. Laminated, wipeable, and built to withstand daily use.",
    href: "/menus-and-table-tents",
  },
  {
    image: letterheadImg,
    title: "Letterhead & Envelopes",
    description: "Professional letterhead and matching printed envelopes that elevate every letter, invoice, and proposal. Coordinated stationery sets with premium paper stocks and optional foil accents.",
    href: "/letterhead-and-envelopes",
  },
  {
    image: largeFormatImg,
    title: "Large Format Printing",
    description: "Posters, wall graphics, floor graphics, retractable banners, trade show displays, and custom wallpaper — printed big, bold, and beautiful on premium substrates with UV-resistant inks.",
    href: "/large-format-printing",
  },
];

const Services = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub",
    description: "Premium printing, promotional products, signage, vehicle branding & digital services for Ohio businesses.",
    url: "https://www.buckeyebizhub.com/services",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

    usePageSEO({ title: "Services", description: "Explore our full range of branding services including business cards, vehicle wraps, banners & flags, custom decals, promotional products, and more. Get your quote in 24 hours." });

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
              Our Full Service Lineup
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From business cards to vehicle wraps, postcards to large format printing — everything your Ohio business needs to stand out and grow.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>

          {/* Additional Services — available upon request, hidden from primary grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 pt-12 border-t border-border"
          >
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-muted-foreground tracking-[0.3em] uppercase mb-4 bg-muted px-5 py-2 rounded-full">
                Additional Services
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-3">
                Available Upon Request
              </h3>
              <p className="text-base text-muted-foreground">
                We also support clients with{" "}
                <Link to="/website-design" className="text-primary font-semibold hover:underline">
                  website design
                </Link>{" "}
                and{" "}
                <Link to="/local-seo" className="text-primary font-semibold hover:underline">
                  local SEO
                </Link>{" "}
                when it fits the project. Just ask David — happy to discuss whether it's the right fit for your business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceDetailSections />
      <RelatedBlogPosts heading="Branding Tips from Our Blog" searchTerm="branding printing" />
      <ServicesCTA />
      <ServicesTrustBar />
      <Footer />
    </div>
  );
};

export default Services;
