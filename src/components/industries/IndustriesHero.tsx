import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { PHOTO_VEHICLE_1, PHOTO_SIGNAGE_1, PHOTO_APPAREL_1 } from "@/lib/photos";

const badges = [
  { icon: Clock, label: "24-Hour Quotes" },
  { icon: MapPin, label: "Ohio Owned & Operated" },
  { icon: Shield, label: "100% Satisfaction Guaranteed" },
];

const IndustriesHero = () => (
  <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
    {/* Montage background with overlay */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 grid grid-cols-3 opacity-30">
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO_VEHICLE_1})` }} />
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO_SIGNAGE_1})` }} />
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO_APPAREL_1})` }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/95 via-ohio-navy/90 to-ohio-navy" />
    </div>

    {/* Subtle accent line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ohio-forest via-primary to-ohio-forest" />

    <div className="container relative text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary-foreground leading-[0.92] mb-6"
      >
        Industries We{" "}
        <span className="text-primary">Proudly Serve</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl md:text-2xl text-primary-foreground/70 max-w-3xl mx-auto mb-10 font-medium"
      >
        From small businesses to large organizations across Columbus and Central Ohio, we provide custom printing, promotional products, and vehicle branding with concierge-level care.
      </motion.p>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
      >
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-2 text-sm font-bold text-primary-foreground/80 bg-primary-foreground/10 border border-primary-foreground/15 px-5 py-2.5 rounded-full backdrop-blur-sm"
          >
            <b.icon className="w-4 h-4 text-primary" />
            {b.label}
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/contact">
          <Button
            size="lg"
            className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_85%_40%/0.4)] hover:shadow-[0_0_60px_hsl(0_85%_40%/0.6)] transition-all duration-300 group uppercase tracking-wider"
          >
            Get Your Free Industry Quote in 24 Hours
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default IndustriesHero;
