import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Zap, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const trustItems = [
  { icon: Star, label: "500+ Happy Ohio Businesses" },
  { icon: Heart, label: "Concierge Service Included" },
  { icon: ShieldCheck, label: "100% Satisfaction Guarantee" },
  { icon: Zap, label: "24-Hour Quotes" },
  { icon: MapPin, label: "Ohio Owned & Operated" },
];

const PricingCTA = () => (
  <>
    <section id="quote-cta" className="py-20 lg:py-28 bg-primary">
      <div className="container text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            Let's Build Something Great Together
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need 50 t-shirts or a full rebrand, we'll find the best solution at the best price — and make the process easy. Reach out today and let's get started.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-lg px-14 py-7 rounded-xl shadow-2xl group uppercase tracking-wider"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <section className="py-6 bg-foreground">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {trustItems.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-foreground/70"
            >
              <item.icon className="w-4 h-4 text-primary" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PricingCTA;
