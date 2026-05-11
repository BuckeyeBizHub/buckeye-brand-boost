import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star, TrendingUp, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";

const categories = [
  "All",
  "Vehicle Wraps",
  "Business Printing",
  "Promotional Products",
  "Door Hangers",
  "Yard Signs",
  "Banners",
  "Branded Apparel",
] as const;
type Category = (typeof categories)[number];

interface GalleryPhoto {
  src: string;
  caption: string;
  category: Exclude<Category, "All">;
}

// Placeholder Unsplash photos — to be replaced with real client work.
const photos: GalleryPhoto[] = [
  // Vehicle Wraps
  { src: "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&w=1200&q=80", caption: "Full vehicle wrap — Columbus OH", category: "Vehicle Wraps" },
  { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80", caption: "Commercial van fleet wrap — Central Ohio", category: "Vehicle Wraps" },
  { src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80", caption: "Service van branding — Columbus OH", category: "Vehicle Wraps" },

  // Business Printing
  { src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&q=80", caption: "Premium business cards — Central Ohio", category: "Business Printing" },
  { src: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=1200&q=80", caption: "Tri-fold brochures — Columbus OH", category: "Business Printing" },
  { src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=1200&q=80", caption: "Custom letterhead & stationery — Ohio", category: "Business Printing" },

  // Promotional Products
  { src: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80", caption: "Branded merchandise kits — Columbus OH", category: "Promotional Products" },
  { src: "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?auto=format&fit=crop&w=1200&q=80", caption: "Custom drinkware & swag — Central Ohio", category: "Promotional Products" },
  { src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80", caption: "Promo giveaway bundle — Ohio", category: "Promotional Products" },

  // Door Hangers
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80", caption: "Custom door hangers — Columbus OH", category: "Door Hangers" },
  { src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=80", caption: "Tear-off coupon door hangers — Central Ohio", category: "Door Hangers" },
  { src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80", caption: "Neighborhood marketing door hangers — Ohio", category: "Door Hangers" },

  // Yard Signs
  { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80", caption: "Real estate yard sign — Columbus OH", category: "Yard Signs" },
  { src: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&w=1200&q=80", caption: "Corrugated yard signs — Central Ohio", category: "Yard Signs" },
  { src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80", caption: "Outdoor event signage — Ohio", category: "Yard Signs" },

  // Banners
  { src: "https://images.unsplash.com/photo-1567593810070-7a3d471af022?auto=format&fit=crop&w=1200&q=80", caption: "Large-format vinyl banner — Columbus OH", category: "Banners" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80", caption: "Event banner display — Central Ohio", category: "Banners" },
  { src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80", caption: "Storefront banner — Ohio", category: "Banners" },

  // Branded Apparel
  { src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80", caption: "Custom embroidered polos — Central Ohio", category: "Branded Apparel" },
  { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80", caption: "Embroidered hats — Columbus OH", category: "Branded Apparel" },
  { src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80", caption: "Team uniform program — Ohio", category: "Branded Apparel" },
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  usePageSEO({
    title: "Our Work & Portfolio",
    description: "Browse photo examples of printing, promotional products, vehicle wraps, signage, and branding projects completed for Columbus and Ohio businesses by Buckeye Biz Hub.",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-44 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1200px] h-[1200px] rounded-full bg-primary/[0.18] blur-[220px]" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[700px] h-[500px] rounded-full bg-ohio-red-glow/[0.12] blur-[140px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]">
            <Sparkles className="w-4 h-4" /> Our Work & Portfolio <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}>
            Real Results for Real{" "}
            <span className="text-primary text-glow-red relative">
              Columbus Businesses
              <motion.span className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} />
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-4xl mx-auto font-semibold tracking-wide leading-relaxed">
            Here's a look at some of the printing, promotional, signage, and branding projects we've helped local Ohio businesses bring to life with concierge-level care.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-14 flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { icon: Eye, num: "1M+", label: "Brand Impressions Generated" },
              { icon: Users, num: "500+", label: "Ohio Businesses Served" },
              { icon: TrendingUp, num: "35%", label: "Avg. Client Growth" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-black text-primary" style={{ textShadow: '0 0 25px hsl(0 80% 42% / 0.4)' }}>{stat.num}</div>
                <div className="text-xs font-bold text-primary-foreground/35 tracking-[0.2em] uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative py-10 bg-ohio-grey-light border-b border-border/50 sticky top-[72px] z-30 backdrop-blur-xl bg-ohio-grey-light/95">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm font-black uppercase tracking-[0.12em] px-5 py-2.5 rounded-full border-2 transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_25px_hsl(0_80%_42%/0.4)]"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-24 lg:py-32 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px]" />

        <div className="container relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filtered.map((photo, i) => (
                <motion.div
                  key={`${photo.src}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-border hover:border-primary/40 shadow-sm hover:shadow-[0_20px_60px_-15px_hsl(0_85%_40%/0.25)] transition-all duration-500 bg-card"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center text-[0.6rem] font-extrabold text-primary-foreground tracking-[0.15em] uppercase bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-[0_4px_15px_hsl(0_80%_42%/0.4)]">
                      {photo.category}
                    </span>
                  </div>

                  {/* Bottom gradient + caption (always visible) */}
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-10">
                    <p className="text-sm font-bold text-white leading-tight line-clamp-1">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Hover overlay with CTA */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to="/contact">
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-[0.18em] px-6 py-5 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                      >
                        <Phone className="w-4 h-4" />
                        Get a Quote
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No photos in this category yet — check back soon.</p>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center gap-3 mb-10">
            {[Star, Star, Star, Star, Star].map((Icon, i) => (
              <Icon key={i} className="w-6 h-6 text-primary-foreground/70 fill-primary-foreground/50" />
            ))}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-10 leading-[0.88]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready to See Results{" "}<br className="hidden md:block" />
            <span className="text-primary-foreground/90">for Your Business?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Join 500+ Ohio businesses that trust Buckeye Biz Hub for printing, branding, and promotional products that drive real growth.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl sm:text-2xl px-16 py-10 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.4)] transition-all duration-500 group uppercase tracking-[0.2em]">
                <Phone className="w-6 h-6" />
                Get Your Free Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
