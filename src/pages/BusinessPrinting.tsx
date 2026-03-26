import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Printer, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import businessCards from "@/assets/printing-business-cards.jpg";
import stationery from "@/assets/printing-stationery.jpg";
import cardsPremium from "@/assets/printing-cards-premium.jpg";
import banners from "@/assets/printing-banners.jpg";
import yardSigns from "@/assets/printing-yard-signs.jpg";
import retractable from "@/assets/printing-retractable.jpg";
import brochures from "@/assets/printing-brochures.jpg";
import flyers from "@/assets/printing-flyers.jpg";
import sellsheets from "@/assets/printing-sellsheets.jpg";
import posters from "@/assets/printing-posters.jpg";
import tradeshow from "@/assets/printing-tradeshow.jpg";
import murals from "@/assets/printing-murals.jpg";
import apparel from "@/assets/printing-apparel.jpg";
import hoodies from "@/assets/printing-hoodies.jpg";
import teamwear from "@/assets/printing-teamwear.jpg";

const categories = [
  {
    title: "Business Cards & Stationery",
    description: "Premium cards, letterhead, envelopes — powered by NextDayFlyers.com",
    products: [
      { img: businessCards, title: "Business Cards", desc: "Premium full-color cards with multiple paper stocks & finishes" },
      { img: stationery, title: "Letterhead & Envelopes", desc: "Professional stationery sets that elevate your brand" },
      { img: cardsPremium, title: "Specialty Cards", desc: "Embossed, foil-stamped, and ultra-thick luxury cards" },
    ],
  },
  {
    title: "Banners & Yard Signs",
    description: "Large format banners, yard signs, and outdoor signage — powered by NextDayFlyers.com",
    products: [
      { img: banners, title: "Vinyl Banners", desc: "Durable indoor/outdoor banners in any custom size" },
      { img: yardSigns, title: "Yard Signs", desc: "Corrugated plastic signs for events, campaigns & more" },
      { img: retractable, title: "Retractable Banners", desc: "Portable pull-up displays perfect for trade shows" },
    ],
  },
  {
    title: "Brochures & Marketing Materials",
    description: "Tri-fold brochures, flyers, rack cards, and sell sheets — powered by NextDayFlyers.com",
    products: [
      { img: brochures, title: "Tri-Fold Brochures", desc: "High-impact brochures with glossy or matte finishes" },
      { img: flyers, title: "Flyers & Rack Cards", desc: "Eye-catching single-sheet marketing materials" },
      { img: sellsheets, title: "Sell Sheets & Postcards", desc: "Professional leave-behinds and direct mail pieces" },
    ],
  },
  {
    title: "Large Format Printing",
    description: "Posters, murals, trade show graphics, and vehicle wraps — powered by NextDayFlyers.com",
    products: [
      { img: posters, title: "Posters & Prints", desc: "Vivid large format posters from any digital file" },
      { img: tradeshow, title: "Trade Show Graphics", desc: "Booth backdrops, displays, and exhibition signage" },
      { img: murals, title: "Wall Murals", desc: "Full-wall graphics that transform any interior space" },
    ],
  },
  {
    title: "Custom Apparel & More",
    description: "Printed shirts, hoodies, and branded apparel — powered by NextDayFlyers.com",
    products: [
      { img: apparel, title: "Custom T-Shirts", desc: "Screen-printed and DTG shirts for teams & events" },
      { img: hoodies, title: "Branded Hoodies", desc: "Embroidered and printed premium outerwear" },
      { img: teamwear, title: "Team & Corporate Wear", desc: "Polos, caps, and uniforms with your branding" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const BusinessPrinting = () => {
  return (
    <div className="min-h-screen bg-ohio-grey-dark text-primary-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-grey-dark via-[hsl(0,0%,10%)] to-ohio-grey-dark" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/[0.08] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 mb-8">
              <Printer className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary tracking-wider uppercase">Powered by NextDayFlyers.com</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] mb-8 text-glow-white"
          >
            Business Printing That
            <br />
            <span className="text-primary text-glow-red">Makes You Stand Out</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-primary-foreground/60 max-w-3xl mx-auto mb-12 font-medium"
          >
            Professional printing delivered fast with NextDayFlyers quality.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.6)] transition-all duration-300 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                <Phone className="w-5 h-5" />
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, catIdx) => (
        <section
          key={cat.title}
          className={`py-20 lg:py-28 relative overflow-hidden ${catIdx % 2 === 0 ? "bg-ohio-grey-dark" : "bg-[hsl(0,0%,10%)]"}`}
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />

          <div className="container relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <span className="inline-block bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
                Category {catIdx + 1}
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-glow-white">
                {cat.title}
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/50 max-w-2xl mx-auto font-medium">
                {cat.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cat.products.map((product, prodIdx) => (
                <motion.div
                  key={product.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={prodIdx + 1}
                  variants={fadeUp}
                  className="group relative bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_hsl(0_80%_42%/0.15)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ohio-grey-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ohio-red-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-black mb-2 group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed mb-5">
                      {product.desc}
                    </p>
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider text-xs group/btn">
                        Get a Quote
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-ohio-grey-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,8%)] via-ohio-grey-dark to-[hsl(0,0%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 mb-8">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <Star className="w-6 h-6 text-primary fill-primary" />
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary-foreground mb-6 leading-[0.95] text-glow-white">
              Ready to Print{" "}
              <br className="hidden md:block" />
              <span className="text-primary text-glow-red">Your Success?</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-primary-foreground/60 mb-14 font-medium">
            Let Buckeye Biz Hub handle all your printing needs.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-lg sm:text-xl px-12 py-8 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.6)] transition-all duration-400 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                <Phone className="w-5 h-5" />
                Get Your Free Quote Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessPrinting;
