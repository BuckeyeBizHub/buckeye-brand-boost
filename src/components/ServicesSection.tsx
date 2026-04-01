import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CreditCard, BookOpen, Gift, Shirt, Signpost, Car, Package, Monitor, Search, Flag,
} from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Business Cards & Stationery",
    desc: "Premium cards that make a lasting first impression.",
    href: "/business-cards",
  },
  {
    icon: BookOpen,
    title: "Brochures & Business Printing",
    desc: "High-impact materials that clearly communicate your message.",
    href: "/brochures-and-business-printing",
  },
  {
    icon: Gift,
    title: "Promotional Products & Giveaways",
    desc: "Custom items that keep your brand top-of-mind.",
    href: "/promotional-products",
  },
  {
    icon: Shirt,
    title: "Branded Apparel & Uniforms",
    desc: "Professional uniforms that build team pride and credibility.",
    href: "/branded-apparel-and-uniforms",
  },
  {
    icon: Signpost,
    title: "Yard Signs & Custom Signage",
    desc: "Bold signs that generate immediate attention and calls.",
    href: "/yard-signs-and-signage",
  },
  {
    icon: Flag,
    title: "Banners, Flags & Decals",
    desc: "Custom banners, feather flags, and decals that grab attention and drive traffic.",
    href: "/services",
  },
  {
    icon: Car,
    title: "Vehicle Wraps & Fleet Branding",
    desc: "Turn your vehicles into powerful 24/7 advertisements.",
    href: "/vehicle-wraps-and-fleet-branding",
  },
  {
    icon: Package,
    title: "Full Rebrand Kits",
    desc: "Complete brand transformations in one coordinated package.",
    href: "/full-rebrand-kits",
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    desc: "Modern websites that attract and convert customers.",
    href: "/website-design",
  },
  {
    icon: Search,
    title: "Local SEO & Google Ranking",
    desc: "Dominate local search and appear in the Map Pack.",
    href: "/local-seo",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-36 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[200px]" />
      <div className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[200px]" />

      <div className="container relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.08] px-6 py-2.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4">
            Our 10 Core <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From business cards to vehicle wraps, banners, flags, and decals — everything your Ohio business needs to stand out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                to={s.href}
                className="group block bg-card rounded-2xl border border-border hover:border-primary/30 overflow-hidden card-lift shadow-sm hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-12 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_60px_hsl(0_85%_40%/0.55)] transition-all duration-300 group uppercase tracking-wider">
              View All 10 Services
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
