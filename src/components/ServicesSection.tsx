import { motion } from "framer-motion";
import { Printer, Gift, Truck, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Printer,
    title: "Business Printing",
    description: "From business cards and brochures to banners and signage — sharp, professional print materials that make your brand impossible to ignore.",
    cta: "Shop Printing",
    href: "/business-printing",
    num: "01",
  },
  {
    icon: Gift,
    title: "Promotional Products",
    description: "Custom branded merch your customers will love — apparel, drinkware, pens, bags, and thousands more items with your logo.",
    cta: "Shop Promo Items",
    href: "/promotional-products",
    num: "02",
  },
  {
    icon: Truck,
    title: "Vehicle Branding",
    description: "Turn every drive into a marketing opportunity with professional vehicle wraps, decals, and magnetic signs built to last.",
    cta: "Explore Vehicle Branding",
    href: "/services",
    num: "03",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 lg:py-44 bg-ohio-grey-light relative overflow-hidden">
      {/* Bold background glows */}
      <div className="absolute top-[-250px] right-[-150px] w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[180px]" />
      <div className="absolute bottom-[-250px] left-[-150px] w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[180px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[200px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.1] border border-primary/20 px-6 py-2 rounded-full shadow-[0_0_20px_hsl(0_85%_40%/0.1)]">
            <Sparkles className="w-3.5 h-3.5" />
            Our Services
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.9]">
            What We Do for{" "}
            <span className="text-primary relative">
              Ohio Businesses
              <span className="absolute -bottom-3 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group bg-card rounded-3xl p-10 lg:p-12 border-2 border-border hover:border-primary/40 card-lift relative overflow-hidden shadow-sm hover:shadow-[0_30px_80px_-15px_hsl(0_85%_40%/0.2)]"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ohio-red-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Corner number */}
              <span className="absolute top-5 right-6 font-display text-5xl font-black text-primary/[0.06] group-hover:text-primary/[0.15] transition-colors duration-500 select-none">{s.num}</span>

              <div className="relative">
                <div className="w-20 h-20 mb-8 rounded-2xl bg-primary/[0.1] group-hover:bg-primary/[0.2] flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_35px_hsl(0_85%_40%/0.25)] group-hover:scale-110">
                  <s.icon className="w-10 h-10 text-primary transition-transform duration-400 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-2xl font-black text-card-foreground mb-4 tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground mb-10 leading-[1.75] text-base">{s.description}</p>
                <Link to={s.href}>
                  <Button className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black transition-all duration-300 group/btn shadow-[0_4px_20px_hsl(0_85%_40%/0.25)] hover:shadow-[0_4px_35px_hsl(0_85%_40%/0.45)] text-sm px-7 py-5 uppercase tracking-wider">
                    {s.cta}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
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
