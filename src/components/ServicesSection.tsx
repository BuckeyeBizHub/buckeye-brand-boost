import { motion } from "framer-motion";
import { Printer, Gift, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Printer,
    title: "Business Printing",
    description: "From business cards and brochures to banners and signage — we deliver sharp, professional print materials that make your brand stand out.",
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
    <section id="services" className="py-24 bg-ohio-grey-light">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
        >
          What We Do for Ohio Businesses
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{s.description}</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                {s.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
