import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const trustItems = [
  { icon: MapPin, label: "Ohio Owned & Operated" },
  { icon: Clock, label: "24-Hour Quote Turnaround" },
  { icon: Shield, label: "100% Satisfaction Guaranteed" },
];

const IndustriesCTA = () => (
  <section className="py-28 lg:py-36 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(0,78%,32%)] to-ohio-navy" />
    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)' }} />

    <div className="container relative text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[0.92]"
      >
        Ready to Grow Your Business<br className="hidden md:block" />
        <span className="text-primary-foreground/80">in Your Industry?</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-xl text-primary-foreground/60 mb-12 max-w-2xl mx-auto font-medium"
      >
        Tailored printing, promotional products, and vehicle branding solutions for every Ohio industry. Let's build your brand together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-14"
      >
        <Link to="/contact">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_70px_rgba(255,255,255,0.2)] transition-all duration-400 group uppercase tracking-widest"
          >
            <Phone className="w-6 h-6 mr-2" />
            Get Your Quote in 24 Hours
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
        </Link>
      </motion.div>

      {/* Trust elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {trustItems.map((t) => (
          <div key={t.label} className="flex items-center gap-2 text-primary-foreground/50 text-sm font-semibold">
            <t.icon className="w-4 h-4" />
            {t.label}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default IndustriesCTA;
