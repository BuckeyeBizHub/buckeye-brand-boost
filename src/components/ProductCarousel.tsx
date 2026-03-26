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
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="products" className="py-28 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Products</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Popular Products <span className="text-primary">Right Now</span>
          </h2>
        </motion.div>

        <div className="relative">
          <button onClick={() => scroll("left")} className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden md:flex">
            <ChevronLeft size={22} />
          </button>
          <button onClick={() => scroll("right")} className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden md:flex">
            <ChevronRight size={22} />
          </button>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: "none" }}>
            {products.map((p) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 snap-start group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border group-hover:border-primary/30">
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={p.label} loading="lazy" width={640} height={640} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-card-foreground">{p.label}</h3>
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
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-extrabold px-10 py-7 text-lg shadow-[0_0_30px_hsl(0_78%_45%/0.3)] hover:shadow-[0_0_50px_hsl(0_78%_45%/0.5)] transition-all duration-300 group">
            Browse All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCarousel;
