import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import businessCardsProduct from "@/assets/business-card-american-roofing.jpg";
import brochuresHero from "@/assets/print-roofing-door-hanger.jpg";
import servicePromoGiveaways from "@/assets/service-promo-giveaways.jpg";
import customApparelPolos from "@/assets/custom-apparel-polos-hoodies.jpg";
import yardSignsProduct from "@/assets/yard-signs-product.jpg";
import vehicleWrapProduct from "@/assets/vehicle-wrap-lumpia-queen-columbus.jpg";
import serviceRebrandKit from "@/assets/service-rebrand-kit.jpg";
import serviceWebsiteDesign from "@/assets/service-website-design.jpg";
import serviceLocalSeo from "@/assets/service-local-seo.jpg";
import bannerFeatherFlags from "@/assets/banner-retractable-roofing.jpg";
import vehicleDecalCloseup from "@/assets/decal-realestate-qr-window.jpg";
import { PHOTO_PRINT_1, PHOTO_PRINT_3, PHOTO_VEHICLE_1, PHOTO_VEHICLE_3 } from "@/lib/photos";

const services = [
  {
    title: "Business Cards & Stationery",
    desc: "Premium cards on ultra-thick 32pt stock with gold foil stamping, spot UV, embossing, and custom die-cuts — designed to leave a lasting impression.",
    href: "/business-cards",
    img: businessCardsProduct,
    showcase: [],
  },
  {
    title: "Brochures & Business Printing",
    desc: "Tri-fold, bi-fold, gate-fold, and Z-fold brochures on premium paper stocks with vivid full-color printing, plus flyers, notepads, and custom forms.",
    href: "/business-printing",
    img: brochuresHero,
    showcase: [],
  },
  {
    title: "Promotional Products & Giveaways",
    desc: "Turn every interaction into a lasting brand impression with custom items that keep your name top-of-mind and drive referrals.",
    href: "/promotional-products",
    img: servicePromoGiveaways,
    showcase: [],
  },
  {
    title: "Branded Apparel & Uniforms",
    desc: "Build instant credibility and team unity with sharp, professional branded apparel that makes your staff look proud and consistent.",
    href: "/branded-apparel-and-uniforms",
    img: customApparelPolos,
    showcase: [],
  },
  {
    title: "Yard Signs & Custom Signage",
    desc: "Get noticed where it matters most with bold, weather-resistant signs that generate immediate attention and new customers.",
    href: "/yard-signs-and-signage",
    img: yardSignsProduct,
    showcase: [],
  },
  {
    title: "Vehicle Wraps & Fleet Branding",
    desc: "Transform your fleet into powerful 24/7 mobile advertisements with 3M/Avery materials and professional Ohio installers.",
    href: "/vehicle-wraps-and-fleet-branding",
    img: vehicleWrapProduct,
    showcase: [],
  },
  {
    title: "Full Rebrand Kits",
    desc: "Elevate your entire brand presence in one complete package with coordinated vehicle wraps, signage, apparel, printing, and digital assets.",
    href: "/full-rebrand-kits",
    img: serviceRebrandKit,
    showcase: [],
  },
] as const;

// Website Design & Local SEO are available upon request — kept live but de-emphasized
// from the homepage Services grid and primary navigation.
const additionalServices = [
  {
    title: "Website Design & Development",
    href: "/website-design",
    img: serviceWebsiteDesign,
  },
  {
    title: "Local SEO & Google Ranking",
    href: "/local-seo",
    img: serviceLocalSeo,
  },
];

const featuredServices = [
  {
    title: "Banners & Flags",
    desc: "Custom banners, feather flags, retractable banners, and graduation banners designed to drive traffic and make your message impossible to miss.",
    href: "/banners-and-flags",
    img: bannerFeatherFlags,
  },
  {
    title: "Decals",
    desc: "Custom vehicle decals, equipment numbering, reflective safety stickers, window clings, and patriotic decals that promote your brand everywhere.",
    href: "/decals",
    img: vehicleDecalCloseup,
  },
];

const ServicesSection = () => {
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
            Premium business cards, brochures, postcards, catalogs, presentation folders, menus, vehicle wraps, banners, and custom decals — everything your Ohio business needs to look professional, stand out, and grow.
          </p>
        </motion.div>

        {/* Uniform grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => {
            const hasShowcase = s.showcase && s.showcase.length > 0;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="h-full"
              >
                <Link
                  to={s.href}
                  className="group h-full flex flex-col bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:border-primary/25 shadow-[0_2px_20px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_-12px_hsl(0_85%_40%/0.14)] transition-all duration-500 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />

                    {/* Showcase thumbnails overlay */}
                    {hasShowcase && (
                      <div className="absolute bottom-3 right-3 flex gap-1.5">
                        {s.showcase.map((thumb, ti) => (
                          <div key={ti} className="w-12 h-12 rounded-lg overflow-hidden border border-primary-foreground/20 shadow-md opacity-80 group-hover:opacity-100 transition-opacity">
                            <img src={thumb} alt="" className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        ))}
                        <div className="w-12 h-12 rounded-lg bg-foreground/60 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                          <Eye className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                    )}
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
          {featuredServices.map((s, i) => (
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
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
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
