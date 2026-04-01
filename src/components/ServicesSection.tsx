import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CreditCard, BookOpen, Gift, Shirt, Signpost, Car, Package, Monitor, Search, Flag, Sticker,
} from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Business Cards & Stationery",
    desc: "Make a powerful first impression that lasts with premium cards featuring luxurious stocks, gold foil, and spot UV finishes.",
    href: "/business-cards",
  },
  {
    icon: BookOpen,
    title: "Brochures & Business Printing",
    desc: "Communicate your message with clarity and impact using vibrant, high-quality printed materials that build trust and help you stand out.",
    href: "/brochures-and-business-printing",
  },
  {
    icon: Gift,
    title: "Promotional Products & Giveaways",
    desc: "Turn every interaction into a lasting brand impression with custom items that keep your name top-of-mind and drive referrals.",
    href: "/promotional-products",
  },
  {
    icon: Shirt,
    title: "Branded Apparel & Uniforms",
    desc: "Build instant credibility and team unity with sharp, professional branded apparel that makes your staff look proud and consistent.",
    href: "/branded-apparel-and-uniforms",
  },
  {
    icon: Signpost,
    title: "Yard Signs & Custom Signage",
    desc: "Get noticed where it matters most with bold, weather-resistant signs that generate immediate attention and new customers.",
    href: "/yard-signs-and-signage",
  },
  {
    icon: Car,
    title: "Vehicle Wraps & Fleet Branding",
    desc: "Transform your fleet into powerful 24/7 mobile advertisements that create thousands of daily impressions.",
    href: "/vehicle-wraps-and-fleet-branding",
  },
  {
    icon: Package,
    title: "Full Rebrand Kits",
    desc: "Elevate your entire brand presence in one complete package with coordinated vehicle wraps, signage, apparel, printing, and digital assets.",
    href: "/full-rebrand-kits",
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    desc: "Build a modern, fast-loading website that attracts customers and converts visitors into loyal clients 24/7.",
    href: "/website-design",
  },
  {
    icon: Search,
    title: "Local SEO & Google Ranking",
    desc: "Get discovered by more local customers when they search online and dominate the Google Map Pack.",
    href: "/local-seo",
  },
  {
    icon: Flag,
    title: "Banners & Flags",
    desc: "Eye-catching custom banners, feather flags, retractable banners, and graduation banners that grab attention and drive traffic for grand openings, events, job sites, and celebrations.",
    href: "/banners-and-flags",
  },
  {
    icon: Sticker,
    title: "Decals",
    desc: "Custom decals that make a big impact — from vehicle decals and window clings to bumper stickers, floor graphics, and wall decals. Perfect for branding, promotions, and adding professional details to any surface.",
    href: "/contact",
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
            Our 11 Core <span className="text-primary">Branding Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From business cards to vehicle wraps, banners, flags, decals, and full rebrand kits — everything your Ohio business needs to look professional and grow.
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
              className="h-full"
            >
              <Link
                to={s.href}
                className="group flex flex-col h-full bg-card rounded-2xl border border-border hover:border-primary/30 overflow-hidden card-lift shadow-sm hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary mt-auto">
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
              View All 11 Services
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
