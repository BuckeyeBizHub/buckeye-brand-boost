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

// Masonry sizing — varied heights/spans create a flowing, premium rhythm
// instead of a rigid uniform grid. Tuned for 12-col layout on lg+.
const layout = [
  { colSpan: "lg:col-span-5", aspect: "aspect-[4/5]",  size: "tall"  }, // Business Cards
  { colSpan: "lg:col-span-7", aspect: "aspect-[16/10]", size: "wide" }, // Brochures
  { colSpan: "lg:col-span-4", aspect: "aspect-[4/5]",  size: "tall"  }, // Promo
  { colSpan: "lg:col-span-4", aspect: "aspect-[1/1]",  size: "square"}, // Apparel
  { colSpan: "lg:col-span-4", aspect: "aspect-[4/5]",  size: "tall"  }, // Yard Signs
  { colSpan: "lg:col-span-7", aspect: "aspect-[16/9]",  size: "hero" }, // Vehicle Wraps — hero card
  { colSpan: "lg:col-span-5", aspect: "aspect-[4/5]",  size: "tall"  }, // Rebrand Kits
] as const;

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Flowing background — soft navy → white with red accent glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ohio-grey-light/30 to-background" />
      <div className="absolute top-[10%] right-[-15%] w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[220px]" />
      <div className="absolute bottom-[5%] left-[-15%] w-[600px] h-[600px] bg-ohio-navy/[0.06] rounded-full blur-[200px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/[0.025] rounded-full blur-[260px]" />

      <div className="container relative max-w-[1400px] mx-auto px-6">
        {/* Header — bigger, airier, with elegant eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-extrabold text-primary tracking-[0.4em] uppercase mb-7 bg-primary/[0.08] px-6 py-2.5 rounded-full border border-primary/15">
            <Sparkles className="w-3.5 h-3.5" />
            What We Offer
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.02] mb-7 tracking-tight">
            Our Core{" "}
            <span className="relative inline-block text-primary">
              Branding Services
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.7] font-light">
            Premium business cards, vehicle wraps, signage, apparel, and full rebrand kits — everything your Ohio business needs to look professional, stand out, and grow.
          </p>
        </motion.div>

        {/* Masonry grid — 12-col with varied spans + heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7">
          {services.map((s, i) => {
            const cfg = layout[i] ?? layout[0];
            const isHero = cfg.size === "hero";
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`${cfg.colSpan} ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}
              >
                <Link
                  to={s.href}
                  className={`group relative block h-full rounded-[28px] overflow-hidden bg-card shadow-[0_4px_30px_-8px_rgba(15,23,42,0.12)] hover:shadow-[0_30px_80px_-20px_hsl(0_85%_40%/0.28)] transition-all duration-700 hover:-translate-y-2 ${isHero ? "ring-1 ring-primary/20" : "ring-1 ring-border/40 hover:ring-primary/30"}`}
                >
                  {/* Large immersive image */}
                  <div className={`relative ${cfg.aspect} overflow-hidden bg-muted`}>
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                    />
                    {/* Editorial gradient — image bleeds into card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-ohio-navy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {isHero && (
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-primary-foreground bg-primary/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full uppercase tracking-[0.18em] shadow-lg">
                          <Star className="w-3 h-3 fill-current" />
                          Signature
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Floating content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <h3 className={`font-display font-black text-foreground leading-[1.1] mb-2.5 group-hover:text-primary transition-colors duration-500 ${isHero ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"}`}>
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 max-w-md">
                      {s.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Featured row — wider editorial cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-7 mt-20 lg:mt-24">
          {featuredServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={s.href}
                className="group relative block rounded-[28px] overflow-hidden bg-card shadow-[0_8px_40px_-10px_rgba(15,23,42,0.15)] hover:shadow-[0_30px_80px_-20px_hsl(0_85%_40%/0.3)] ring-1 ring-primary/15 hover:ring-primary/40 transition-all duration-700 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-primary-foreground bg-primary/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full uppercase tracking-[0.18em] shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </span>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                  <h3 className="font-display text-2xl lg:text-3xl font-black text-foreground leading-[1.1] group-hover:text-primary transition-colors duration-500 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Explore Options
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional services — gentle gradient divider, no hard border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <p className="pt-10 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Also available upon request:</span>{" "}
            {additionalServices.map((s, i) => (
              <span key={s.href}>
                <Link to={s.href} className="text-primary font-semibold hover:underline">
                  {s.title}
                </Link>
                {i < additionalServices.length - 1 && <span> &middot; </span>}
              </span>
            ))}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-14"
        >
          <Link to="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-12 py-7 rounded-2xl shadow-[0_0_50px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_70px_hsl(0_85%_40%/0.55)] transition-all duration-300 group uppercase tracking-[0.15em]"
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
