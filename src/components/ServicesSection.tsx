import { motion } from "framer-motion";
import { Printer, Gift, Truck, ArrowRight, Sparkles, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PHOTO_PRINT_2, PHOTO_APPAREL_2, PHOTO_VEHICLE_2 } from "@/lib/photos";

const services = [
  {
    icon: Printer,
    title: "Business Printing",
    description: "From business cards and brochures to banners and signage — sharp, professional print materials that make your brand impossible to ignore.",
    cta: "Shop Printing",
    href: "/business-printing",
    num: "01",
    image: PHOTO_PRINT_2,
    features: ["Business Cards", "Banners & Signs", "Brochures", "Yard Signs"],
  },
  {
    icon: Gift,
    title: "Promotional Products",
    description: "Custom branded merch your customers will love — apparel, drinkware, pens, bags, and thousands more items with your logo.",
    cta: "Shop Promo Items",
    href: "/promotional-products",
    num: "02",
    image: servicePromo,
    features: ["Custom Apparel", "Drinkware", "Bar Rails", "Giveaways"],
  },
  {
    icon: Truck,
    title: "Vehicle Branding",
    description: "Turn every drive into a marketing opportunity with professional vehicle wraps, decals, and magnetic signs built to last.",
    cta: "Explore Vehicle Branding",
    href: "/services",
    num: "03",
    image: serviceVehicle,
    features: ["Full Wraps", "Decals", "Magnetic Signs", "Fleet Graphics"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 lg:py-44 bg-ohio-grey-light relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[-300px] right-[-200px] w-[800px] h-[800px] bg-primary/[0.06] rounded-full blur-[200px]" />
      <div className="absolute bottom-[-300px] left-[-200px] w-[800px] h-[800px] bg-primary/[0.06] rounded-full blur-[200px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[250px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-28"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.1] border border-primary/20 px-6 py-2.5 rounded-full shadow-[0_0_25px_hsl(0_85%_40%/0.12)]">
            <Sparkles className="w-3.5 h-3.5" />
            Our Services
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-black text-foreground leading-[0.88]">
            What We Do for{" "}
            <span className="text-primary relative">
              Ohio Businesses
              <motion.span
                className="absolute -bottom-3 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group bg-card rounded-3xl border-2 border-border hover:border-primary/40 card-lift relative overflow-hidden shadow-sm hover:shadow-[0_35px_90px_-15px_hsl(0_85%_40%/0.22)]"
            >
              {/* Image header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {/* Red tint on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                {/* Number badge */}
                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_4px_20px_hsl(0_85%_40%/0.4)]">
                  <span className="font-display text-lg font-black text-primary-foreground">{s.num}</span>
                </div>
                {/* Icon overlay */}
                <div className="absolute bottom-[-20px] left-8 w-16 h-16 rounded-2xl bg-card border-2 border-border group-hover:border-primary/30 flex items-center justify-center shadow-xl transition-all duration-400 group-hover:shadow-[0_0_30px_hsl(0_85%_40%/0.2)]">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-10 pt-8">
                <h3 className="font-display text-2xl font-black text-card-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="text-muted-foreground mb-6 leading-[1.75] text-[0.95rem]">{s.description}</p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.features.map((f) => (
                    <span key={f} className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold text-muted-foreground bg-muted border border-border rounded-full px-3 py-1.5 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors duration-300">
                      <CheckCircle className="w-3 h-3 text-primary/60" />
                      {f}
                    </span>
                  ))}
                </div>

                <Link to={s.href}>
                  <Button className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black transition-all duration-300 group/btn shadow-[0_4px_25px_hsl(0_85%_40%/0.3)] hover:shadow-[0_4px_40px_hsl(0_85%_40%/0.5)] text-sm px-8 py-5 uppercase tracking-wider w-full justify-center">
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
