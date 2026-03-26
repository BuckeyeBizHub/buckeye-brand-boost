import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="products" className="py-24 bg-ohio-grey-light">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
        >
          Popular Products Right Now
        </motion.h2>

        <div className="relative">
          <button onClick={() => scroll("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors hidden md:flex">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors hidden md:flex">
            <ChevronRight size={20} />
          </button>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4" style={{ scrollbarWidth: "none" }}>
            {products.map((p) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-72 snap-start"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img src={p.img} alt={p.label} loading="lazy" width={640} height={640} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h3 className="font-display font-bold text-card-foreground">{p.label}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold px-8">
            Browse All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
