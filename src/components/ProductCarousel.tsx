import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    scrollRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
  };

  return (
    <section id="products" className="py-28 lg:py-36 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/[0.03] rounded-full blur-[130px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4 bg-primary/[0.08] px-4 py-1.5 rounded-full">Our Products</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-black text-foreground leading-tight">
            Popular Products{" "}
            <span className="text-primary relative">
              Right Now
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full" />
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <button onClick={() => scroll("left")} className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_20px_hsl(0_80%_42%/0.3)] transition-all duration-300 hidden md:flex">
            <ChevronLeft size={22} />
          </button>
          <button onClick={() => scroll("right")} className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_20px_hsl(0_80%_42%/0.3)] transition-all duration-300 hidden md:flex">
            <ChevronRight size={22} />
          </button>

          <div ref={scrollRef} className="flex gap-7 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: "none" }}>
            {products.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex-shrink-0 w-80 snap-start group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border group-hover:border-primary/25 card-lift">
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={p.label} loading="lazy" width={640} height={640} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Quick-view hint */}
                    <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0 shadow-lg">
                      View →
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">{p.label}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black px-12 py-7 text-lg rounded-xl shadow-[0_0_30px_hsl(0_80%_42%/0.3)] hover:shadow-[0_0_50px_hsl(0_80%_42%/0.5)] transition-all duration-300 group uppercase tracking-wider">
            Browse All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCarousel;
