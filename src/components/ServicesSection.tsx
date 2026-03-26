import { motion } from "framer-motion";
import { Printer, Gift, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Printer,
    title: "Business Printing",
    description: "From business cards and brochures to banners and signage — sharp, professional print materials that make your brand impossible to ignore.",
    cta: "Shop Printing",
  },
  {
    icon: Gift,
    title: "Promotional Products",
    description: "Custom branded merch your customers will love — apparel, drinkware, pens, bags, and thousands more items with your logo.",
    cta: "Shop Promo Items",
  },
  {
    icon: Truck,
    title: "Vehicle Branding",
    description: "Turn every drive into a marketing opportunity with professional vehicle wraps, decals, and magnetic signs built to last.",
    cta: "Explore Vehicle Branding",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-36 bg-ohio-grey-light relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4 bg-primary/[0.08] px-4 py-1.5 rounded-full">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-black text-foreground leading-tight">
            What We Do for{" "}
            <span className="text-primary relative">
              Ohio Businesses
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full" />
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-card rounded-2xl p-9 lg:p-10 border border-border hover:border-primary/25 card-lift relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-16 h-16 mb-7 rounded-2xl bg-primary/[0.08] group-hover:bg-primary/[0.15] flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_25px_hsl(0_80%_42%/0.15)]">
                  <s.icon className="w-8 h-8 text-primary transition-transform duration-400 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-[1.4rem] font-black text-card-foreground mb-3 tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground mb-8 leading-[1.7] text-[0.95rem]">{s.description}</p>
                <Button className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold transition-all duration-300 group/btn shadow-sm hover:shadow-[0_0_20px_hsl(0_80%_42%/0.3)]">
                  {s.cta}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
