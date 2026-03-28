import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShoppingBag, Star, Zap, CheckCircle, Award, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PHOTO_APPAREL_3,
  PHOTO_PRINT_10,
} from "@/lib/photos";
import customApparel from "@/assets/custom-apparel-polos-hoodies.jpg";
import brandedDrinkware from "@/assets/branded-drinkware-tumblers.jpg";
import tentsBarRails from "@/assets/tents-table-throws-bar-rails.jpg";


const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

interface ServiceSectionProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  useCases: string[];
  reversed?: boolean;
  dark?: boolean;
  index: number;
}

const ServiceSection = ({ image, title, subtitle, description, benefits, useCases, reversed, dark, index }: ServiceSectionProps) => (
  <section className={`relative py-24 lg:py-32 overflow-hidden ${dark ? "bg-ohio-grey-dark" : "bg-ohio-grey-light"}`}>
    {dark && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,5%)] via-[hsl(0,30%,6%)] to-[hsl(220,25%,5%)]" />}
    <div className={`absolute top-[-100px] ${reversed ? "left-[-80px]" : "right-[-80px]"} w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px]`} />

    <div className="container relative">
      <motion.div {...fadeUp} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "md:[direction:rtl]" : ""}`}>
        {/* Image */}
        <div className={reversed ? "md:[direction:ltr]" : ""}>
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="relative group">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-primary/15 group-hover:border-primary/40 transition-all duration-500 shadow-[0_25px_70px_rgba(0,0,0,0.35)] group-hover:shadow-[0_30px_90px_hsl(0_80%_42%/0.3)]">
              <img src={image} alt={title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-extrabold text-primary-foreground tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_4px_20px_hsl(0_80%_42%/0.4)]">
                  <Zap className="w-3 h-3" />
                  {subtitle}
                </span>
              </div>
              <div className="absolute bottom-5 right-6 font-display text-8xl font-black text-primary-foreground/[0.08] leading-none select-none">
                0{index + 1}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className={`${reversed ? "md:[direction:ltr]" : ""} space-y-7`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <span className={`inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.25em] uppercase px-5 py-2 rounded-full ${
              dark
                ? "text-primary bg-primary/[0.15] border border-primary/25 shadow-[0_0_20px_hsl(0_80%_42%/0.1)]"
                : "text-primary bg-primary/[0.08] border border-primary/15"
            }`}>
              <Star className="w-3.5 h-3.5 fill-primary" />
              Category 0{index + 1}
            </span>
            <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[0.92] ${dark ? "text-primary-foreground" : "text-foreground"}`}
              style={dark ? { textShadow: '0 0 50px rgba(255,255,255,0.15)' } : {}}>
              {title}
            </h2>
            <div className="w-28 h-[5px] rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light shadow-[0_0_15px_hsl(0_80%_42%/0.3)]" />
            <p className={`text-lg leading-[1.85] max-w-lg font-medium ${dark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
              {description}
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="space-y-3">
            <h3 className={`text-sm font-extrabold tracking-[0.2em] uppercase ${dark ? "text-primary" : "text-primary"}`}>Why Businesses Choose This</h3>
            <ul className="space-y-2">
              {benefits.map((b) => (
                <li key={b} className={`flex items-start gap-3 text-sm font-medium ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="flex flex-wrap gap-2.5">
            {useCases.map((u, j) => (
              <motion.span key={u} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + j * 0.06 }}
                className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                  dark
                    ? "text-primary-foreground/55 bg-primary-foreground/[0.06] border-primary-foreground/10 hover:border-primary/40 hover:text-primary hover:bg-primary/[0.08]"
                    : "text-muted-foreground bg-muted border-border hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04]"
                }`}>
                {u}
              </motion.span>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap gap-4 pt-3">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-xl shadow-[0_0_30px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_55px_hsl(0_80%_42%/0.6)] transition-all duration-300 group/btn uppercase tracking-wider">
                <ShoppingBag className="w-5 h-5" />
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const sections: Omit<ServiceSectionProps, "reversed" | "dark" | "index">[] = [
  {
    image: customApparel,
    title: "Custom Apparel & Branded Clothing",
    subtitle: "Wear Your Brand",
    description: "From Columbus custom shirts and embroidered polos to branded hoodies and jackets, our custom apparel turns your team and customers into walking billboards. Perfect for Ohio businesses looking for high-quality promotional clothing at wholesale prices.",
    benefits: [
      "Screen printing, embroidery, and DTG for any order size",
      "Premium brands: Bella+Canvas, Gildan, Nike, Under Armour",
      "Fast turnaround for corporate events and trade shows in Columbus",
      "Bulk wholesale pricing for Ohio businesses large and small",
    ],
    useCases: ["Columbus Custom Shirts", "Ohio Embroidered Polos", "Branded Hoodies", "Corporate Jackets", "Team Uniforms", "Event T-Shirts"],
  },
  {
    image: PHOTO_APPAREL_3,
    title: "Hats & Custom Headwear",
    subtitle: "Top Off Your Brand",
    description: "Custom embroidered hats, branded snapbacks, trucker caps, and beanies that keep your logo visible year-round. Whether it's a Columbus construction crew, Ohio golf outing, or corporate gift program, custom headwear is one of the highest-retention promotional items available.",
    benefits: [
      "Embroidery, screen print, and patch options on premium blanks",
      "Richardson, Flexfit, New Era, and Yupoong brands available",
      "Low minimums — perfect for Columbus small business branding",
      "Structured, unstructured, trucker, and beanie styles in stock",
    ],
    useCases: ["Columbus Custom Hats", "Ohio Branded Snapbacks", "Corporate Golf Caps", "Trucker Hats", "Embroidered Beanies", "Team Headwear"],
  },
  {
    image: PHOTO_PRINT_9,
    title: "Drinkware & Bar Items",
    subtitle: "Sip, Pour & Promote",
    description: "Custom tumblers, branded coffee mugs, promotional water bottles, and insulated drinkware that Ohio customers use every single day — keeping your logo front and center at home, at work, and on the go across Columbus and beyond.",
    benefits: [
      "Full-color UV printing and laser engraving available",
      "Insulated stainless steel, ceramic, and BPA-free plastic options",
      "Perfect for corporate gifts, employee appreciation, and giveaways",
      "Low minimum orders ideal for Columbus small businesses",
    ],
    useCases: ["Branded Tumblers", "Custom Coffee Mugs", "Promotional Water Bottles", "Ohio Corporate Gifts", "Employee Appreciation"],
  },
  {
    image: PHOTO_SIGNAGE_1,
    title: "Tents, Banners & Outdoor Displays",
    subtitle: "Own Every Event",
    description: "Branded pop-up tents, retractable banners, table throws, and outdoor event displays that make your booth or storefront impossible to miss at Columbus trade shows, Ohio festivals, farmers markets, and community events.",
    benefits: [
      "Dye-sublimation printing for vibrant, weather-resistant graphics",
      "10x10, 10x15, and 10x20 custom canopy tent sizes",
      "Full backwalls, half walls, and table covers to complete your setup",
      "Durable and reusable — built for Ohio's outdoor event season",
    ],
    useCases: ["Columbus Trade Show Displays", "Ohio Festival Tents", "Retractable Banners", "Table Throws", "Outdoor Signage"],
  },
  {
    image: PHOTO_VEHICLE_4,
    title: "Bar Rails, Coasters & Restaurant Branding",
    subtitle: "Bar & Restaurant Essentials",
    description: "Custom branded bar rail mats, rubber bar mats, printed coasters, and restaurant branding products that elevate your Columbus bar, brewery, or restaurant's identity. Perfect for Ohio's thriving hospitality industry.",
    benefits: [
      "Full-color custom bar rail mats with your logo and branding",
      "Durable rubber construction built for heavy daily use",
      "Custom printed coasters in cork, cardboard, and rubber",
      "Branded menus, table tents, and POS displays available",
    ],
    useCases: ["Branded Bar Rails", "Custom Coasters", "Columbus Restaurant Branding", "Ohio Brewery Merchandise", "Bar Mats"],
  },
  {
    image: PHOTO_PRINT_10,
    title: "Giveaways, Office Supplies & Swag",
    subtitle: "Small Items, Big Impact",
    description: "Branded notebooks, custom pens, promotional tote bags, USB drives, lanyards, and keychains — the everyday Ohio promotional products that keep your brand in your customer's hands long after the event ends.",
    benefits: [
      "Thousands of promotional product options to fit any budget",
      "Full-color imprinting, debossing, and laser engraving",
      "Fast shipping across Ohio — Columbus, Cleveland, Cincinnati",
      "Kitting and fulfillment services for large corporate orders",
    ],
    useCases: ["Ohio Promotional Products", "Columbus Corporate Giveaways", "Branded Notebooks", "Custom Pens", "Tote Bags", "Lanyards"],
  },
];

const PromotionalProducts = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Promotional Products",
    description: "Custom promotional products, branded merchandise, apparel, drinkware, and event displays for Ohio businesses. Serving Columbus and all of Ohio.",
    url: "https://buckeye-brand-boost.lovable.app/promotional-products",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Promotional Products",
      itemListElement: sections.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
    },
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-44 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1200px] h-[1200px] rounded-full bg-primary/[0.18] blur-[220px]" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[700px] h-[500px] rounded-full bg-ohio-red-glow/[0.12] blur-[140px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]">
            <Sparkles className="w-4 h-4" /> Branded Merch & Swag <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}>
            Custom Promotional Products That Get Your Brand{" "}
            <span className="text-primary text-glow-red relative">
              Noticed
              <motion.span className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} />
            </span>{" "}
            in Ohio
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-4xl mx-auto font-semibold tracking-wide leading-relaxed">
            Custom shirts, drinkware, bar rails, event tents, and high-impact promotional products for Columbus and Ohio businesses — wholesale pricing, fast turnaround, no minimums on select items.
          </motion.p>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-14 flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { num: "5,000+", label: "Products Available" },
              { num: "500+", label: "Ohio Businesses Served" },
              { num: "24hr", label: "Quote Turnaround" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-black text-primary" style={{ textShadow: '0 0 25px hsl(0 80% 42% / 0.4)' }}>{stat.num}</div>
                <div className="text-xs font-bold text-primary-foreground/35 tracking-[0.2em] uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-16">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2 }}
              className="w-9 h-16 mx-auto border-2 border-primary-foreground/15 rounded-full flex items-start justify-center pt-2.5">
              <div className="w-1.5 h-4 bg-primary rounded-full shadow-[0_0_10px_hsl(0_80%_42%/0.5)]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us strip */}
      <section className="relative py-16 bg-ohio-grey-light border-b border-border/50">
        <div className="container">
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Premium Quality", desc: "Only top-tier brands and materials" },
              { icon: Truck, title: "Fast Ohio Delivery", desc: "Rush options for Columbus & statewide" },
              { icon: Shield, title: "Wholesale Pricing", desc: "Competitive bulk rates for businesses" },
              { icon: Star, title: "500+ Happy Clients", desc: "Trusted by Ohio businesses since day one" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground font-medium">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {sections.map((s, i) => (
        <ServiceSection key={s.title} {...s} index={i} reversed={i % 2 === 1} dark={i % 2 === 1} />
      ))}

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

        <div className="container relative text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-10 leading-[0.88]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready to Get Your Brand{" "}<br className="hidden md:block" />Out There?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Custom promotional products, branded merchandise, and marketing materials for every Ohio business. Wholesale pricing. Fast turnaround. No hassle.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-2xl px-16 py-10 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-widest"
                style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <Phone className="w-7 h-7" />
                Get Your Free Quote Today
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2.5 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromotionalProducts;
