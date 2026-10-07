"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "@/lib/compat/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesTrustBar from "@/components/services/ServicesTrustBar";
import ServiceDetailSections from "@/components/services/ServiceDetailSections";
import FounderQuote from "@/components/services/FounderQuote";

const businessCardsImg = "/assets/business-cards-product.jpg";
const brochuresImg = "/assets/service-brochures-printing.jpg";
const promoImg = "/assets/service-promo-giveaways.jpg";
const apparelImg = "/assets/service-apparel-uniforms.jpg";
const yardSignsImg = "/assets/yard-signs-product.jpg";
const vehicleWrapImg = "/assets/vehicle-wrap-product.jpg";
const rebrandImg = "/assets/service-rebrand-kit.jpg";
const websiteImg = "/assets/service-website-design.jpg";
const seoImg = "/assets/service-local-seo.jpg";
const bannersImg = "/assets/service-banners-flags-decals.jpg";
const postcardsImg = "/assets/postcards-hero.jpg";
const catalogsImg = "/assets/catalogs-hero.jpg";
const foldersImg = "/assets/presentation-folders-hero.jpg";
const menusImg = "/assets/menus-hero.jpg";
const letterheadImg = "/assets/letterhead-hero.jpg";
const largeFormatImg = "/assets/large-format-hero.jpg";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import type { BlogPostSummary } from "@/lib/blog-utils";
import { usePageSEO } from "@/hooks/usePageTitle";

const services = [
  {
    image: businessCardsImg,
    title: "Business Cards & Stationery",
    description: "Your card is your first impression. Thick stocks, gold foil, spot UV and custom die-cuts. People remember a good card after the handshake.",
    href: "/business-cards-printing",
  },
  {
    image: brochuresImg,
    title: "Brochures & Business Printing",
    description: "Brochures, flyers, menus and more. Clear, sharp print that gets read and helps your Ohio business stand out.",
    href: "/business-printing",
  },
  {
    image: promoImg,
    title: "Promotional Products & Giveaways",
    description: "Drinkware, apparel, tech gear and office items with your name on them. They keep you top of mind long after the conversation ends, and that brings referrals and repeat business.",
    href: "/promotional-products",
  },
  {
    image: apparelImg,
    title: "Branded Apparel & Uniforms",
    description: "Embroidered polos, hoodies, jackets and safety vests. Your whole crew looks like one team, and customers trust a crew that looks the part.",
    href: "/embroidered-apparel",
  },
  {
    image: yardSignsImg,
    title: "Yard Signs & Custom Signage",
    description: "Bold, weatherproof yard signs, banners and job-site signs. They get attention and make the phone ring for Central Ohio businesses.",
    href: "/yard-signs-and-signage",
  },
  {
    image: bannersImg,
    title: "Banners & Flags",
    description: "Custom banners, feather flags, retractables and graduation banners. For grand openings, events, job sites, real estate and celebrations. Hard to miss.",
    href: "/banners-and-flags",
  },
  {
    image: vehicleWrapImg,
    title: "Vehicle Wraps & Fleet Branding",
    description: "Turn your fleet into ads that run 24/7. A wrap gets seen thousands of times a day and protects the paint underneath.",
    href: "/vehicle-wraps",
  },
  {
    image: rebrandImg,
    title: "Full Rebrand Kits",
    description: "Your whole brand, redone in one coordinated package. Vehicles, signage, apparel, printing, promo products and digital assets, all matching, so you can compete with the big guys.",
    href: "/full-rebrand-kits",
  },
  {
    image: postcardsImg,
    title: "Postcards & Direct Mail",
    description: "Hit the neighborhoods you want with postcards and EDDM direct mail. Pick your size, stock and finish. We coordinate the mailing too.",
    href: "/postcards",
  },
  {
    image: catalogsImg,
    title: "Catalogs & Booklets",
    description: "Saddle-stitched, perfect-bound and wire-o catalogs and booklets. From 8 pages to 200. We handle design, printing and delivery.",
    href: "/catalogs-and-booklets",
  },
  {
    image: foldersImg,
    title: "Presentation Folders",
    description: "Pocket folders with foil, spot UV and embossing. Your proposals look sharp, and sharp proposals close.",
    href: "/presentation-folders",
  },
  {
    image: menusImg,
    title: "Menus & Table Tents",
    description: "Menus and table tents for restaurants, bars and cafes. Laminated, wipeable and built for daily use.",
    href: "/menus-and-table-tents",
  },
  {
    image: letterheadImg,
    title: "Letterhead & Envelopes",
    description: "Letterhead and matching envelopes for every letter, invoice and proposal. Good paper, optional foil.",
    href: "/letterhead-and-envelopes",
  },
  {
    image: largeFormatImg,
    title: "Large Format Printing",
    description: "Posters, wall and floor graphics, retractable banners, trade show displays and custom wallpaper. Printed big on quality materials with UV-resistant inks.",
    href: "/large-format-printing",
  },
];

const Services = ({ relatedPosts }: { relatedPosts?: BlogPostSummary[] }) => {

    usePageSEO({ title: "Services", description: "Business cards, vehicle wraps, banners, flags, decals, promo products and more for Ohio businesses. Get your quote in 24 hours." });

  return (
    <div className="min-h-screen">
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
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-6 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4">
              Our Full Service Lineup
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Business cards to vehicle wraps, postcards to large format. Everything your Ohio business needs to get noticed.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>

          {/* Additional services: available on request, hidden from primary grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 pt-12 border-t border-border"
          >
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-muted-foreground mb-4 bg-muted px-5 py-2 rounded-full">
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
                when it fits the project. Ask David. He'll tell you straight if it makes sense for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceDetailSections />
      <RelatedBlogPosts heading="Branding Tips from Our Blog" posts={relatedPosts} />
      <ServicesCTA />
      <ServicesTrustBar />
      <Footer />
    </div>
  );
};

export default Services;
