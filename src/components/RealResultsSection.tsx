import { motion } from "framer-motion";
import { PhoneCall, Award, Wallet, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import vehicleWrapFleet from "@/assets/vehicle-wrap-fleet-real.jpg";
import brandedApparel from "@/assets/custom-apparel-polos-hoodies.jpg";
import yardSignReal from "@/assets/yard-sign-realestate-real.jpg";
import bannerEvent from "@/assets/banner-event-grandopening.jpg";

const results = [
  {
    icon: PhoneCall,
    title: "Increased Inbound Calls",
    desc: "Clients see a measurable jump in calls after launching vehicle wraps, signage, and local SEO.",
  },
  {
    icon: Award,
    title: "Stronger Brand Recognition",
    desc: "Consistent branding across print, apparel, and vehicles makes your business unforgettable.",
  },
  {
    icon: Wallet,
    title: "Saved Time & Money",
    desc: "One trusted partner for everything — no juggling multiple vendors or inflated markups.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Image That Builds Trust",
    desc: "Premium materials and expert design give your business the credibility it deserves.",
  },
];

const photos = [vehicleWrapFleet, brandedApparel, yardSignReal, bannerEvent];

const RealResultsSection = () => (
  <section className="relative py-20 lg:py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-ohio-grey-light/40 to-ohio-grey-light/80" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[180px]" />

    <div className="container max-w-6xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
          Real Results for Real <span className="text-primary">Ohio Businesses</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We don't just make things look good — we help Ohio businesses grow with branding that delivers measurable results.
        </p>
      </motion.div>

      {/* Photo strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 rounded-2xl overflow-hidden"
      >
        {photos.map((src, i) => (
          <div key={i} className="relative h-40 md:h-48 overflow-hidden rounded-xl">
            <img
              src={src}
              alt={`Ohio business branding result ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
        ))}
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 mb-10">
        {results.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group flex items-start gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/25 hover:shadow-[0_8px_30px_-8px_hsl(0_85%_40%/0.1)] transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-black text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <Link to="/contact">
          <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_85%_40%/0.3)] hover:shadow-[0_0_60px_hsl(0_85%_40%/0.5)] transition-all duration-300 group uppercase tracking-wider">
            See How We Can Help Your Business
            <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default RealResultsSection;
