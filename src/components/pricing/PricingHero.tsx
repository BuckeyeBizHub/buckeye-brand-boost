import { motion } from "framer-motion";
import { ArrowRight, Heart, ShieldCheck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import pricingHero from "@/assets/pricing-hero.jpg";

const badges = [
  { icon: ShieldCheck, label: "No Hidden Fees" },
  { icon: BadgeCheck, label: "Concierge Service Included" },
  { icon: Heart, label: "Supporting Ohio Businesses" },
];

const PricingHero = () => (
  <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={pricingHero}
        alt="Branded Ohio vehicles, apparel, signage and promotional products"
        className="w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
    </div>

    <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
      <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.95]"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
        >
          Transparent Pricing with{" "}
          <span className="text-primary">True Concierge Service</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-medium"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
        >
          No hidden fees. No surprise charges. Just honest, clear pricing
          backed by personal attention from start to finish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {badges.map((b) => (
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
          <a href="#quote-cta">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PricingHero;
