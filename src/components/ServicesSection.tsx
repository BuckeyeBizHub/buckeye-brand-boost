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

const ServicesSection = () => {
  const regular = services.filter((s) => !("featured" in s && s.featured));
  const featured = services.filter((s) => "featured" in s && s.featured);

  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ohio-grey-light/60 to-background" />
      <div className="absolute top-[-200px] right-[-150px] w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[250px]" />
      <div className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[200px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="container relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.08] px-6 py-2.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4">
            Our Core <span className="text-primary">Branding Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything your Ohio business needs to look professional, stand out, and grow — from premium business cards to powerful vehicle wraps, banners, flags, graduation banners, and custom decals.
          </p>
        </motion.div>

        {/* 3-column grid with photos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {regular.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`h-full ${i % 3 === 1 ? "lg:translate-y-4" : ""}`}
            >
              <Link
                to={s.href}
                className="group flex flex-col h-full bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 hover:border-primary/30 overflow-hidden shadow-sm hover:shadow-[0_12px_40px_-8px_hsl(0_85%_40%/0.12)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-[1.05rem] font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary mt-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured services — Banners & Flags + Decals */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 mt-5 lg:mt-6">
          {featured.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Link
                to={s.href}
                className="group relative flex flex-col h-full bg-gradient-to-br from-card to-card/90 backdrop-blur-sm rounded-2xl border-2 border-primary/30 hover:border-primary/60 overflow-hidden shadow-md hover:shadow-[0_16px_50px_-10px_hsl(0_85%_40%/0.2)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  {/* Popular badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-primary-foreground bg-primary px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </span>
                  </div>
                </div>

                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-black text-foreground leading-snug group-hover:text-primary transition-colors duration-300 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary mt-auto">
                    Explore Options
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-12 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_60px_hsl(0_85%_40%/0.55)] transition-all duration-300 group uppercase tracking-wider">
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
