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
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-36 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[200px]" />
      <div className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[200px]" />

      <div className="container relative">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group bg-card rounded-3xl border border-border hover:border-primary/40 overflow-hidden card-lift shadow-md hover:shadow-2xl"
            >
              {/* Dual image strip */}
              <div className="relative h-60 grid grid-cols-2 overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="px-8 pt-7 pb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-black text-primary tracking-[0.2em] uppercase">
                    {s.title}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-black text-foreground mb-5 leading-snug group-hover:text-primary transition-colors duration-300">
                  {s.headline}
                </h3>

                <ul className="space-y-3 mb-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[0.95rem] text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link to={s.href}>
                  <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base uppercase tracking-wider py-6 rounded-xl shadow-[0_4px_30px_hsl(0_85%_40%/0.35)] hover:shadow-[0_6px_50px_hsl(0_85%_40%/0.55)] transition-all duration-300 group/btn">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-1 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
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
