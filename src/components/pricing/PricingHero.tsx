import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BadgeCheck, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import pricingHero from "@/assets/pricing-hero.jpg";

const badges = [
  { icon: ShieldCheck, label: "No Hidden Fees" },
  { icon: BadgeCheck, label: "No Setup Fees on Most Orders" },
  { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
];

const PricingHero = () => (
  <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={pricingHero}
        alt="Branded Ohio vehicles, apparel, signage and promotional products montage"
        className="w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-bg))/0.88] via-[hsl(var(--hero-bg))/0.92] to-[hsl(var(--hero-bg))]" />
    </div>

    <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6"
        style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
      >
        Pricing That Works as Hard as{" "}
        <span className="text-primary">Your Business</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-lg md:text-xl text-primary-foreground/75 max-w-3xl mx-auto leading-relaxed mb-8"
      >
        24-Hour Quotes • Full Pricing Transparency Up Front • All Fees Known at
        Time of Quote • Nothing Ever Hidden
      </motion.p>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {badges.map((b) => (
          <span
            key={b.label}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 text-sm font-bold text-primary-foreground"
          >
            <b.icon className="w-4 h-4 text-primary" />
            {b.label}
          </span>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        <a href="#quote-cta">
          <Button
            size="lg"
            className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-12 py-7 rounded-xl shadow-2xl group uppercase tracking-wider"
          >
            Get Your Custom Quote in 24 Hours
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default PricingHero;
