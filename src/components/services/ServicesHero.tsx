import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pricingHero from "@/assets/pricing-hero.jpg";

const ServicesHero = () => (
  <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={pricingHero}
        alt="Branded Ohio vehicles, apparel, signage and promotional products"
        className="w-full h-full object-cover"
        width={1920}
        height={800}
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
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

        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.3)" }}
        >
          Everything Your Ohio Business Needs to{" "}
          <span className="text-primary">Stand Out</span>
        </h1>

        <p
          className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
        >
          Premium printing, promotional products, signage, vehicle branding & digital services — all with 24-hour quotes and full transparency
        </p>

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
              Get Your 24-Hour Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServicesHero;
