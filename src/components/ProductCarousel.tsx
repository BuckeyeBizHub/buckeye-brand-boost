import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import shirtsHats from "@/assets/products/shirts-hats.jpg";
import barRails from "@/assets/products/bar-rails.jpg";
import drinkware from "@/assets/products/drinkware.jpg";
import tents from "@/assets/products/tents.jpg";
import yardSigns from "@/assets/products/yard-signs.jpg";
import vehicleBranding from "@/assets/products/vehicle-branding.jpg";
import businessPrinting from "@/assets/products/business-printing.jpg";

const products = [
  { img: shirtsHats, label: "Custom Shirts & Hats" },
  { img: barRails, label: "Bar Rails" },
  { img: drinkware, label: "Branded Drinkware" },
  { img: tents, label: "Event Tents" },
  { img: yardSigns, label: "Yard Signs" },
  { img: vehicleBranding, label: "Vehicle Wraps" },
  { img: businessPrinting, label: "Business Printing" },
];

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
  };

  return (
    <section id="products" className="py-32 lg:py-44 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/[0.04] rounded-full blur-[180px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[140px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.1] border border-primary/20 px-6 py-2 rounded-full shadow-[0_0_20px_hsl(0_85%_40%/0.1)]">
            <Sparkles className="w-3.5 h-3.5" />
            Our Products
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.9]">
            Popular Products{" "}
            <span className="text-primary relative">
              Right Now
              <span className="absolute -bottom-3 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <button onClick={() => scroll("left")} className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-card shadow-xl border-2 border-border items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_30px_hsl(0_85%_40%/0.4)] transition-all duration-300 hidden md:flex">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll("right")} className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-card shadow-xl border-2 border-border items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_30px_hsl(0_85%_40%/0.4)] transition-all duration-300 hidden md:flex">
            <ChevronRight size={24} />
          </button>

          <div ref={scrollRef} className="flex gap-7 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: "none" }}>
            {products.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex-shrink-0 w-80 snap-start group"
              >
                <div className="bg-card rounded-3xl overflow-hidden border-2 border-border group-hover:border-primary/40 card-lift shadow-sm">
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={p.label} loading="lazy" width={640} height={640} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-115" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Red tint overlay on hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    {/* Quick-view badge */}
                    <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground text-xs font-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0 shadow-[0_4px_20px_hsl(0_85%_40%/0.4)] uppercase tracking-wider">
                      View →
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-black text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">{p.label}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/promotional-products">
            <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black px-14 py-8 text-lg rounded-xl shadow-[0_0_40px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_60px_hsl(0_85%_40%/0.55)] transition-all duration-300 group uppercase tracking-wider">
              Browse All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCarousel;
