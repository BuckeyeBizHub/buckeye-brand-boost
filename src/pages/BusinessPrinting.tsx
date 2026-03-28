import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Printer, Star, Zap, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  PHOTO_PRINT_1, PHOTO_PRINT_2, PHOTO_PRINT_3, PHOTO_PRINT_4, PHOTO_PRINT_5,
  PHOTO_PRINT_6, PHOTO_PRINT_7, PHOTO_PRINT_8,
  PHOTO_SIGNAGE_1, PHOTO_SIGNAGE_2, PHOTO_SIGNAGE_3, PHOTO_SIGNAGE_4,
  PHOTO_APPAREL_1, PHOTO_APPAREL_2, PHOTO_APPAREL_3,
} from "@/lib/photos";

const categories = [
  {
    title: "Business Cards & Stationery",
    description: "Premium cards, letterhead, envelopes — powered by NextDayFlyers.com",
    products: [
      { img: PHOTO_PRINT_1, title: "Business Cards", desc: "Premium full-color cards with multiple paper stocks & finishes" },
      { img: PHOTO_PRINT_2, title: "Letterhead & Envelopes", desc: "Professional stationery sets that elevate your brand" },
      { img: PHOTO_PRINT_3, title: "Specialty Cards", desc: "Embossed, foil-stamped, and ultra-thick luxury cards" },
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
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const trustBadges = [
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Shield, label: "Quality Guaranteed" },
  { icon: Clock, label: "24hr Quote Response" },
];

const BusinessPrinting = () => {
  return (
    <div className="min-h-screen bg-ohio-grey-dark text-primary-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,6%)] via-ohio-grey-dark to-[hsl(0,0%,8%)]" />
        <div className="absolute top-[-200px] right-[-200px] w-[900px] h-[900px] bg-primary/[0.12] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[700px] h-[700px] bg-primary/[0.08] rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[200px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        {/* Diagonal red accent strip */}
        <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-b from-primary/[0.06] to-transparent skew-x-[-12deg] translate-x-20" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 bg-primary/25 border-2 border-primary/40 rounded-full px-7 py-3 mb-10 shadow-[0_0_30px_hsl(0_80%_42%/0.2)]">
              <Printer className="w-5 h-5 text-primary" />
              <span className="text-sm font-black text-primary tracking-[0.15em] uppercase">Powered by NextDayFlyers.com</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.85] mb-10 text-glow-white"
          >
            Business Printing
            <br />
            <span className="text-primary text-glow-red relative">
              That Stands Out
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/55 max-w-3xl mx-auto mb-14 font-medium"
          >
            Professional printing delivered fast with <span className="text-primary font-bold">NextDayFlyers</span> quality.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-14"
          >
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5 bg-primary-foreground/[0.05] border border-primary-foreground/10 rounded-full px-5 py-2.5">
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-primary-foreground/70 uppercase tracking-wider">{badge.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-xl px-14 py-8 rounded-xl shadow-[0_0_50px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                <Phone className="w-6 h-6" />
                Get a Free Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, catIdx) => (
        <section
          key={cat.title}
          className={`py-24 lg:py-32 relative overflow-hidden ${catIdx % 2 === 0 ? "bg-ohio-grey-dark" : "bg-[hsl(0,0%,7%)]"}`}
        >
          {/* Bold accent glows */}
          <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[150px]" />
          <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
          {/* Red side accent */}
          <div className={`absolute top-0 ${catIdx % 2 === 0 ? 'left-0' : 'right-0'} w-1.5 h-full bg-gradient-to-b from-transparent via-primary/60 to-transparent`} />

          <div className="container relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
              className="text-center mb-20"
            >
              <span className="inline-block bg-primary/25 border-2 border-primary/40 text-primary text-xs font-black uppercase tracking-[0.25em] px-6 py-2 rounded-full mb-6 shadow-[0_0_20px_hsl(0_80%_42%/0.15)]">
                0{catIdx + 1} — Service Category
              </span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-5 text-glow-white leading-[0.9]">
                {cat.title}
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/45 max-w-2xl mx-auto font-medium">
                {cat.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {cat.products.map((product, prodIdx) => (
                <motion.div
                  key={product.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={prodIdx + 1}
                  variants={fadeUp}
                  className="group relative bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_hsl(0_80%_42%/0.2)] hover:-translate-y-2"
                >
                  {/* Top red accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ohio-red-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ohio-grey-dark via-ohio-grey-dark/30 to-transparent" />
                    {/* Overlay red tint on hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-black mb-3 group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-primary-foreground/45 text-sm leading-relaxed mb-6">
                      {product.desc}
                    </p>
                    <Link to="/contact">
                      <Button size="sm" className="bg-primary/15 border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-black uppercase tracking-wider text-xs px-6 py-5 shadow-[0_0_15px_hsl(0_80%_42%/0.1)] hover:shadow-[0_0_30px_hsl(0_80%_42%/0.3)] transition-all duration-300 group/btn">
                        Get a Quote
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(0,0%,5%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,8%)] to-[hsl(0,0%,4%)]" />
        <div className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] bg-primary/[0.1] rounded-full blur-[200px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-10">
              <Star className="w-6 h-6 text-primary fill-primary" />
              <Star className="w-8 h-8 text-primary fill-primary" />
              <Star className="w-6 h-6 text-primary fill-primary" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground mb-8 leading-[0.85] text-glow-white">
              Ready to Print{" "}
              <br className="hidden md:block" />
              <span className="text-primary text-glow-red">Your Success?</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/50 mb-16 font-medium max-w-3xl mx-auto">
            Let Buckeye Biz Hub handle all your printing needs.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-xl sm:text-2xl px-16 py-9 rounded-xl shadow-[0_0_60px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_100px_hsl(0_80%_42%/0.7)] transition-all duration-400 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                <Phone className="w-6 h-6" />
                Get Your Free Quote Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
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
