import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pricingHero from "@/assets/pricing-hero.jpg";
import businessCardsImg from "@/assets/business-cards-product.jpg";
import vehicleWrapImg from "@/assets/vehicle-wrap-product.jpg";
import apparelImg from "@/assets/service-apparel-uniforms.jpg";
import yardSignsImg from "@/assets/yard-signs-product.jpg";
import promoImg from "@/assets/service-promo-giveaways.jpg";
import brochuresImg from "@/assets/service-brochures-printing.jpg";
import rebrandImg from "@/assets/service-rebrand-kit.jpg";

const services = [
  {
    image: businessCardsImg,
    title: "Business Cards & Stationery",
    description: "Premium business cards, letterhead, and stationery that make a powerful first impression. From spot UV to gold foil — we do it all.",
    href: "/business-cards",
  },
  {
    image: vehicleWrapImg,
    title: "Vehicle Wraps & Fleet Branding",
    description: "Turn every mile into mobile advertising with full or partial wraps. We connect you with top installers and save you thousands.",
    href: "/vehicle-wraps-and-fleet-branding",
  },
  {
    image: apparelImg,
    title: "Branded Apparel & Uniforms",
    description: "Custom polos, t-shirts, hoodies, and uniforms with professional embroidery or screen printing. Outfit your entire team.",
    href: "/branded-apparel-and-uniforms",
  },
  {
    image: yardSignsImg,
    title: "Yard Signs & Custom Signage",
    description: "Durable, full-color yard signs, banners, retractable displays, and custom signage that gets your business noticed fast.",
    href: "/yard-signs-and-signage",
  },
  {
    image: promoImg,
    title: "Promotional Products & Giveaways",
    description: "Branded pens, tote bags, drinkware, keychains, and thousands more items. Perfect for trade shows, events, and client gifts.",
    href: "/promotional-products",
  },
  {
    image: brochuresImg,
    title: "Brochures, Flyers & Business Printing",
    description: "High-impact brochures, flyers, postcards, and sell sheets printed on premium stock with vibrant full-color quality.",
    href: "/brochures-and-business-printing",
  },
  {
    image: rebrandImg,
    title: "Full Rebrand Kits",
    description: "Complete brand overhaul packages — business cards, signage, apparel, vehicle wraps, and digital assets all unified under one cohesive look.",
    href: "/full-rebrand-kits",
  },
];

const trustItems = [
  "500+ Ohio Businesses Helped",
  "Full Pricing Transparency",
  "24-Hour Quotes",
  "Ohio Owned & Operated",
];

const Services = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub",
    description: "Premium printing, promotional products, signage & vehicle branding for Ohio businesses.",
    url: "https://buckeye-brand-boost.lovable.app/services",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero — same style as Pricing hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pricingHero}
            alt="Branded Ohio vehicles, apparel, signage and promotional products"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
        </div>

        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30 shadow-[0_0_30px_hsl(0_80%_42%/0.15)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Our Services
              <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.3)" }}
            >
              Everything Your Ohio Business Needs to{" "}
              <span className="text-primary">Stand Out</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
            >
              Premium printing, promotional products, signage & vehicle branding — all with 24-hour quotes and full transparency
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {[
                { icon: ShieldCheck, label: "No Hidden Fees" },
                { icon: BadgeCheck, label: "Wholesale Pricing" },
                { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  <b.icon className="w-4 h-4 text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300"
                >
                  Get Your Custom Quote in 24 Hours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
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
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From business cards to full fleet wraps — we help Ohio businesses look professional at wholesale prices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-400"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-xl font-black text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {s.description}
                  </p>
                  <Link to={s.href}>
                    <Button
                      variant="outline"
                      className="font-bold border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-foreground/[0.05] rounded-full blur-[120px]" />

        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            Not sure which service is right for you?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-12 font-semibold"
          >
            Get a custom recommendation in 24 hours — completely free, no obligation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_70px_rgba(255,255,255,0.2)] transition-all duration-400 group uppercase tracking-widest"
              >
                <Phone className="w-6 h-6" />
                Get Your Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide">
                <Clock className="w-4 h-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
