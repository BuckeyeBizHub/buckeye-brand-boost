import { motion } from "framer-motion";
import { Printer, Gift, Truck, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import businessCards from "@/assets/business-cards-letterhead-stack.jpg";
import yardSign from "@/assets/yard-sign-installation.jpg";
import apparel from "@/assets/custom-apparel-polos-hoodies.jpg";
import drinkware from "@/assets/branded-drinkware-tumblers.jpg";
import vehicleWrap from "@/assets/vehicle-wrap-before-after.jpg";
import fleet from "@/assets/branded-vehicle-fleet.jpg";

const services = [
  {
    icon: Printer,
    num: "01",
    title: "Business Printing",
    headline: "Print That Demands Attention",
    bullets: [
      "Premium business cards, brochures & banners",
      "Yard signs, letterhead & large format",
      "Fast turnaround, wholesale pricing",
    ],
    images: [businessCards, yardSign],
    href: "/business-printing",
    cta: "Learn More",
  },
  {
    icon: Gift,
    num: "02",
    title: "Promotional Products",
    headline: "Merch Your Customers Will Love",
    bullets: [
      "Custom apparel, polos & hoodies",
      "Branded drinkware, tumblers & bar items",
      "Thousands of logo-ready products",
    ],
    images: [apparel, drinkware],
    href: "/promotional-products",
    cta: "Learn More",
  },
  {
    icon: Truck,
    num: "03",
    title: "Vehicle Branding",
    headline: "Turn Every Drive Into Marketing",
    bullets: [
      "Full & partial wraps, decals & lettering",
      "Fleet branding for maximum reach",
      "Durable, weather-resistant materials",
    ],
    images: [vehicleWrap, fleet],
    href: "/vehicle-branding",
    cta: "Learn More",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-36 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[200px]" />
      <div className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[200px]" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-5">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            What We Do for{" "}
            <span className="text-primary">Ohio Businesses</span>
          </h2>
        </motion.div>

        {/* 3-column card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group bg-card rounded-2xl border border-border hover:border-primary/40 overflow-hidden card-lift shadow-sm"
            >
              {/* Dual image strip */}
              <div className="relative h-52 grid grid-cols-2 overflow-hidden">
                {s.images.map((img, j) => (
                  <div key={j} className="relative overflow-hidden">
                    <img
                      src={img}
                      alt={`${s.title} example ${j + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>

              {/* Red accent header */}
              <div className="px-7 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-black text-primary tracking-[0.2em] uppercase">
                    {s.num} · {s.title}
                  </span>
                </div>

                <h3 className="font-display text-xl font-black text-card-foreground mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                  {s.headline}
                </h3>

                {/* Benefit bullets */}
                <ul className="space-y-2.5 mb-7">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-7 pb-7">
                <Link to={s.href}>
                  <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-sm uppercase tracking-wider py-5 rounded-xl shadow-[0_4px_25px_hsl(0_85%_40%/0.3)] hover:shadow-[0_4px_40px_hsl(0_85%_40%/0.5)] transition-all duration-300 group/btn">
                    {s.cta}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
