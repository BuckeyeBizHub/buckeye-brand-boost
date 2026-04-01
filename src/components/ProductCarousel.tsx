import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  PHOTO_APPAREL_1, PHOTO_PRINT_1, PHOTO_PRINT_3,
  PHOTO_SIGNAGE_1, PHOTO_SIGNAGE_3,
  PHOTO_VEHICLE_1, PHOTO_PRINT_5,
} from "@/lib/photos";

const products = [
  { img: PHOTO_APPAREL_1, label: "Custom Shirts & Hats", tag: "Apparel" },
  { img: PHOTO_PRINT_3, label: "Bar Rails", tag: "Bar & Restaurant" },
  { img: PHOTO_PRINT_1, label: "Branded Drinkware", tag: "Drinkware" },
  { img: PHOTO_SIGNAGE_1, label: "Event Tents", tag: "Outdoor" },
  { img: PHOTO_SIGNAGE_3, label: "Yard Signs", tag: "Signage" },
  { img: PHOTO_VEHICLE_1, label: "Vehicle Wraps", tag: "Vehicle" },
  { img: PHOTO_PRINT_5, label: "Business Printing", tag: "Print" },
];

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <section id="products" className="py-32 lg:py-44 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-primary/[0.05] rounded-full blur-[200px]" />
      <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[160px]" />
      {/* Bottom red accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.1] border border-primary/20 px-6 py-2.5 rounded-full shadow-[0_0_25px_hsl(0_85%_40%/0.12)]">
            <Sparkles className="w-3.5 h-3.5" />
            Our Products
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-black text-foreground leading-[0.88]">
            Popular Products{" "}
            <span className="text-primary relative">
              Right Now
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

        {/* Product count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6 mb-16"
        >
          {[
            { val: "50,000+", lbl: "Products" },
            { val: "500+", lbl: "Categories" },
            { val: "24hr", lbl: "Quotes" },
          ].map((s) => (
            <div key={s.lbl} className="flex items-center gap-2">
              <Star className="w-3 h-3 text-primary fill-primary" />
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{s.val} {s.lbl}</span>
            </div>
          ))}
        </motion.div>

        <div className="relative">
          <button onClick={() => scroll("left")} className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-card shadow-xl border-2 border-border items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_35px_hsl(0_85%_40%/0.45)] transition-all duration-300 hidden md:flex">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll("right")} className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-card shadow-xl border-2 border-border items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_35px_hsl(0_85%_40%/0.45)] transition-all duration-300 hidden md:flex">
            <ChevronRight size={24} />
          </button>

          <div ref={scrollRef} className="flex gap-7 overflow-x-auto snap-x snap-mandatory pb-6" style={{ scrollbarWidth: "none" }}>
            {products.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex-shrink-0 w-[22rem] snap-start group"
              >
                <div className="bg-card rounded-3xl overflow-hidden border-2 border-border group-hover:border-primary/40 card-lift shadow-sm">
                  <div className="relative overflow-hidden h-80">
                    <img src={p.img} alt={p.label} loading="lazy" width={640} height={640} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    {/* Red tint overlay on hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />
                    {/* Category tag */}
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-black text-primary-foreground tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_4px_20px_hsl(0_85%_40%/0.4)]">
                        {p.tag}
                      </span>
                    </div>
                    {/* Quick-view badge */}
                    <div className="absolute bottom-5 right-5 bg-primary-foreground text-primary text-xs font-black px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0 shadow-xl uppercase tracking-wider flex items-center gap-1.5">
                      View
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="p-7">
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
          className="text-center mt-18 mt-16"
        >
          <Link to="/promotional-products">
            <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black px-16 py-9 text-lg rounded-2xl shadow-[0_0_45px_hsl(0_85%_40%/0.4)] hover:shadow-[0_0_70px_hsl(0_85%_40%/0.6)] transition-all duration-300 group uppercase tracking-widest">
              Browse All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCarousel;
