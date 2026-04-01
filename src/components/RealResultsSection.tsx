import { motion } from "framer-motion";
import { PhoneCall, Award, Wallet, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const RealResultsSection = () => (
  <section className="py-20 lg:py-28 bg-ohio-grey-light relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
          Real Results for Real <span className="text-primary">Ohio Businesses</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We don't just make things look good — we help Ohio businesses grow with branding that delivers measurable results.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {results.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{r.title}</h3>
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
