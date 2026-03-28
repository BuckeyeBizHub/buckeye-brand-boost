import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShoppingBag, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PHOTO_APPAREL_1, PHOTO_PRINT_9, PHOTO_SIGNAGE_1,
  PHOTO_VEHICLE_4, PHOTO_PRINT_10,
} from "@/lib/photos";

const categories = [
  {
    image: PHOTO_APPAREL_1,
    title: "Apparel",
    subtitle: "Wear Your Brand Everywhere",
    description: "Custom shirts, embroidered hats, hoodies, polos, and jackets — premium branded apparel that turns your team and customers into walking billboards.",
    items: ["T-Shirts & Polos", "Embroidered Caps", "Hoodies & Fleece", "Jackets & Outerwear"],
  },
  {
    image: PHOTO_PRINT_9,
    title: "Drinkware & Bar Items",
    subtitle: "Sip, Pour & Promote",
    description: "Custom tumblers, coffee mugs, bar rail mats, branded coasters, and water bottles your audience will use daily — keeping your logo front and center.",
    items: ["Insulated Tumblers", "Coffee Mugs", "Bar Rail Mats", "Custom Coasters"],
  },
  {
    image: PHOTO_SIGNAGE_1,
    title: "Outdoor & Events",
    subtitle: "Own Every Event",
    description: "Branded pop-up tents, table throws, retractable banners, yard signs, and event displays that make your booth or storefront impossible to miss.",
    items: ["Pop-Up Tents", "Table Throws", "Retractable Banners", "Yard Signs"],
  },
  {
    image: PHOTO_VEHICLE_4,
    title: "Vehicle Branding",
    subtitle: "Turn Miles Into Marketing",
    description: "Full wraps, partial wraps, decals, and magnetic signs that transform your fleet into a rolling advertisement seen by thousands every day.",
    items: ["Full Vehicle Wraps", "Partial Wraps", "Vinyl Decals", "Magnetic Signs"],
  },
  {
    image: PHOTO_PRINT_10,
    title: "Office & Giveaways",
    subtitle: "Small Items, Big Impact",
    description: "Branded notebooks, pens, tote bags, USB drives, lanyards, and keychains — the everyday giveaways that keep your brand in your customer's hands.",
    items: ["Notebooks & Pads", "Branded Pens", "Tote Bags", "Keychains & Lanyards"],
  },
];

const PromotionalProducts = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero — massive & dramatic */}
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-44 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1200px] h-[1200px] rounded-full bg-primary/[0.18] blur-[220px]" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[700px] h-[500px] rounded-full bg-ohio-red-glow/[0.12] blur-[140px]" />
        </div>
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.08] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]"
          >
            <Sparkles className="w-4 h-4" />
            Branded Merch & Swag
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}
          >
            Promotional Products{" "}
            <br className="hidden lg:block" />
            That Get{" "}
            <span className="text-primary text-glow-red relative">
              Noticed
              <motion.span
                className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/50 max-w-4xl mx-auto font-semibold tracking-wide leading-relaxed"
          >
            Custom shirts, hats, drinkware, bar rails, tents, and high-impact swag that turns every day into{" "}
            <span className="text-primary font-black">marketing</span>.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-14 flex flex-wrap justify-center gap-8 md:gap-14"
          >
            {[
              { num: "5,000+", label: "Products Available" },
              { num: "500+", label: "Ohio Businesses Served" },
              { num: "24hr", label: "Quote Turnaround" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-black text-primary" style={{ textShadow: '0 0 25px hsl(0 80% 42% / 0.4)' }}>
                  {stat.num}
                </div>
                <div className="text-xs font-bold text-primary-foreground/35 tracking-[0.2em] uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-9 h-16 mx-auto border-2 border-primary-foreground/15 rounded-full flex items-start justify-center pt-2.5"
            >
              <div className="w-1.5 h-4 bg-primary rounded-full shadow-[0_0_10px_hsl(0_80%_42%/0.5)]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid — alternating dark/light for energy */}
      {categories.map((cat, i) => {
        const isDark = i % 2 === 1;
        return (
          <section
            key={cat.title}
            className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? "bg-ohio-grey-dark" : "bg-ohio-grey-light"}`}
          >
            {isDark && (
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,5%)] via-[hsl(0,30%,6%)] to-[hsl(220,25%,5%)]" />
            )}
            <div className={`absolute top-[-100px] ${i % 2 === 0 ? "right-[-80px]" : "left-[-80px]"} w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px]`} />

            <div className="container relative">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                {/* Image */}
                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative group"
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-primary/15 group-hover:border-primary/40 transition-all duration-500 shadow-[0_25px_70px_rgba(0,0,0,0.35)] group-hover:shadow-[0_30px_90px_hsl(0_80%_42%/0.3)]">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Badge on image */}
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-extrabold text-primary-foreground tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_4px_20px_hsl(0_80%_42%/0.4)]">
                          <Zap className="w-3 h-3" />
                          {cat.subtitle}
                        </span>
                      </div>
                      {/* Number overlay */}
                      <div className="absolute bottom-5 right-6 font-display text-8xl font-black text-primary-foreground/[0.08] leading-none select-none">
                        0{i + 1}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Text */}
                <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""} space-y-7`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <span className={`inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.25em] uppercase px-5 py-2 rounded-full ${
                      isDark
                        ? "text-primary bg-primary/[0.15] border border-primary/25 shadow-[0_0_20px_hsl(0_80%_42%/0.1)]"
                        : "text-primary bg-primary/[0.08] border border-primary/15"
                    }`}>
                      <Star className="w-3.5 h-3.5 fill-primary" />
                      Category 0{i + 1}
                    </span>
                    <h2
                      className={`font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.92] ${
                        isDark ? "text-primary-foreground" : "text-foreground"
                      }`}
                      style={isDark ? { textShadow: '0 0 50px rgba(255,255,255,0.15)' } : {}}
                    >
                      {cat.title}
                    </h2>
                    <div className="w-28 h-[5px] rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light shadow-[0_0_15px_hsl(0_80%_42%/0.3)]" />
                    <p className={`text-lg lg:text-xl leading-[1.85] max-w-lg font-medium ${
                      isDark ? "text-primary-foreground/50" : "text-muted-foreground"
                    }`}>
                      {cat.description}
                    </p>
                  </motion.div>

                  {/* Item pills */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="flex flex-wrap gap-2.5"
                  >
                    {cat.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + j * 0.06 }}
                        className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                          isDark
                            ? "text-primary-foreground/55 bg-primary-foreground/[0.06] border-primary-foreground/10 hover:border-primary/40 hover:text-primary hover:bg-primary/[0.08]"
                            : "text-muted-foreground bg-muted border-border hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04]"
                        }`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="flex flex-wrap gap-4 pt-3"
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-xl shadow-[0_0_30px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_55px_hsl(0_80%_42%/0.6)] transition-all duration-300 group/btn uppercase tracking-wider"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Shop Category
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className={`font-bold text-lg px-10 py-7 rounded-xl transition-all duration-300 ${
                        isDark
                          ? "border-primary-foreground/15 text-primary-foreground/65 hover:border-primary/50 hover:text-primary hover:bg-primary/[0.08]"
                          : "border-border hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04]"
                      }`}
                    >
                      Request Samples
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA — massive */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

        <div className="container relative text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[9.5rem] font-black text-primary-foreground mb-10 leading-[0.88]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}
          >
            Ready to Get Your Brand{" "}
            <br className="hidden md:block" />
            Out There?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display"
          >
            Rooted in Ohio. Built to Grow Your Business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-2xl px-16 py-10 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-widest"
              style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
            >
              <Phone className="w-7 h-7" />
              Get Your Free Quote Today
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2.5 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromotionalProducts;
