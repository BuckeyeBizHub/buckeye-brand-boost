import { motion } from "framer-motion";
import { Printer, Gift, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Printer,
    title: "Business Printing",
    description: "From business cards and brochures to banners and signage — we deliver sharp, professional print materials that make your brand stand out.",
    cta: "Shop Printing",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Gift,
    title: "Promotional Products",
    description: "Custom branded merch your customers will love — apparel, drinkware, pens, bags, and thousands more items with your logo.",
    cta: "Shop Promo Items",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    icon: Truck,
    title: "Vehicle Branding",
    description: "Turn every drive into a marketing opportunity with professional vehicle wraps, decals, and magnetic signs built to last.",
    cta: "Explore Vehicle Branding",
    gradient: "from-primary/20 to-primary/5",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 bg-ohio-grey-light relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What We Do for <span className="text-primary">Ohio Businesses</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/30 card-glow-hover relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="w-18 h-18 mb-6 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 w-[72px] h-[72px]">
                  <s.icon className="w-9 h-9 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{s.description}</p>
                <Button className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold group/btn">
                  {s.cta}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
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
