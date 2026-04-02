import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import businessCardsProduct from "@/assets/business-cards-product.jpg";
import brochuresHero from "@/assets/brochures-flyers-layou.jpg";
import servicePromoGiveaways from "@/assets/service-promo-giveaways.jpg";
import customApparelPolos from "@/assets/custom-apparel-polos-hoodies.jpg";
import yardSignsProduct from "@/assets/yard-signs-product.jpg";
import vehicleWrapProduct from "@/assets/vehicle-wrap-product.jpg";
import serviceRebrandKit from "@/assets/service-rebrand-kit.jpg";
import serviceWebsiteDesign from "@/assets/service-website-design.jpg";
import serviceLocalSeo from "@/assets/service-local-seo.jpg";
import bannerFeatherFlags from "@/assets/banner-feather-blade.jpg";
import vehicleDecalCloseup from "@/assets/vehicle-decal-closeup.jpg";

const services = [
  {
    title: "Business Cards & Stationery",
    desc: "Make a powerful first impression that lasts with premium cards featuring luxurious stocks, gold foil, and spot UV finishes.",
    href: "/business-cards",
    img: businessCardsProduct,
  },
  {
    title: "Brochures & Business Printing",
    desc: "Communicate your message with clarity and impact using vibrant, high-quality printed materials that build trust and help you stand out.",
    href: "/brochures-and-business-printing",
    img: brochuresHero,
  },
  {
    title: "Promotional Products & Giveaways",
    desc: "Turn every interaction into a lasting brand impression with custom items that keep your name top-of-mind and drive referrals.",
    href: "/promotional-products",
    img: servicePromoGiveaways,
  },
  {
    title: "Branded Apparel & Uniforms",
    desc: "Build instant credibility and team unity with sharp, professional branded apparel that makes your staff look proud and consistent.",
    href: "/branded-apparel-and-uniforms",
    img: customApparelPolos,
  },
  {
    title: "Yard Signs & Custom Signage",
    desc: "Get noticed where it matters most with bold, weather-resistant signs that generate immediate attention and new customers.",
    href: "/yard-signs-and-signage",
    img: yardSignsProduct,
  },
  {
    title: "Vehicle Wraps & Fleet Branding",
    desc: "Transform your fleet into powerful 24/7 mobile advertisements that create thousands of daily impressions.",
    href: "/vehicle-wraps-and-fleet-branding",
    img: vehicleWrapProduct,
  },
  {
    title: "Full Rebrand Kits",
    desc: "Elevate your entire brand presence in one complete package with coordinated vehicle wraps, signage, apparel, printing, and digital assets.",
    href: "/full-rebrand-kits",
    img: serviceRebrandKit,
  },
  {
    title: "Website Design & Development",
    desc: "Build a modern, fast-loading website that attracts customers and converts visitors into loyal clients 24/7.",
    href: "/website-design",
    img: serviceWebsiteDesign,
  },
  {
    title: "Local SEO & Google Ranking",
    desc: "Get discovered by more local customers when they search online and dominate the Google Map Pack.",
    href: "/local-seo",
    img: serviceLocalSeo,
  },
  {
    title: "Banners & Flags",
    desc: "Grab attention instantly with custom banners, feather flags, retractable banners, and graduation banners designed to drive traffic and make your message impossible to miss.",
    href: "/banners-and-flags",
    img: bannerFeatherFlags,
    featured: true,
  },
  {
    title: "Decals",
    desc: "Custom vehicle decals, equipment numbering, reflective safety stickers, window clings, and patriotic decals that add professional details and promote your brand everywhere.",
    href: "/decals",
    img: vehicleDecalCloseup,
    featured: true,
  },
] as const;

// Masonry height classes for visual variation
const heightVariants = [
  "h-48", "h-56", "h-48", // row 1
  "h-52", "h-48", "h-56", // row 2
  "h-48", "h-56", "h-52", // row 3
];

const ServicesSection = () => {
  const regular = services.filter((s) => !("featured" in s && s.featured));
  const featured = services.filter((s) => "featured" in s && s.featured);

  return (
    <section id="services" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ohio-grey-light/40 to-background" />
      <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[180px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-ohio-navy/[0.02] rounded-full blur-[250px]" />

      <div className="container relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-5 bg-primary/[0.07] px-5 py-2 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4">
            Our Core <span className="text-primary">Branding Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From premium business cards and powerful vehicle wraps to eye-catching banners, flags, graduation banners, and custom decals — everything your Ohio business needs to look professional, stand out, and grow.
          </p>
        </motion.div>

        {/* Staggered masonry grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {regular.map((s, i) => {
            const imgH = heightVariants[i % heightVariants.length];
            const offset = i % 3 === 1 ? "lg:mt-6" : "";

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className={offset}
              >
                <Link
                  to={s.href}
                  className="group flex flex-col bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:border-primary/25 shadow-[0_2px_20px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_-12px_hsl(0_85%_40%/0.14)] transition-all duration-500 hover:-translate-y-1.5"
                >
                  <div className={`relative ${imgH} overflow-hidden`}>
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent" />
                  </div>
                  <div className="p-5 lg:p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {s.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Featured services */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 mt-6 lg:mt-8">
          {featured.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                to={s.href}
                className="group relative flex flex-col bg-gradient-to-br from-card to-card/95 backdrop-blur-sm rounded-2xl border-2 border-primary/25 hover:border-primary/50 overflow-hidden shadow-[0_4px_24px_-6px_hsl(0_85%_40%/0.1)] hover:shadow-[0_20px_56px_-12px_hsl(0_85%_40%/0.2)] transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-primary-foreground bg-primary px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-7 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-black text-foreground leading-snug group-hover:text-primary transition-colors duration-300 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Explore Options
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-12 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_85%_40%/0.3)] hover:shadow-[0_0_60px_hsl(0_85%_40%/0.5)] transition-all duration-300 group uppercase tracking-wider"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
