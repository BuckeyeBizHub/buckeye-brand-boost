import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Printer, CheckCircle2, Shield, Award, Eye, Heart, Users, Package } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import businessCardsStack from "@/assets/business-cards-letterhead-stack.jpg";
import yardSignInstall from "@/assets/yard-sign-installation.jpg";
import brochuresFlyers from "@/assets/brochures-flyers-layou.jpg";
import productCollage from "@/assets/product-collage-hero.jpg";
import customApparel from "@/assets/custom-apparel-polos-hoodies.jpg";
import printingStationery from "@/assets/printing-stationery.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

const sections = [
  {
    num: "01",
    title: "Business Cards & Stationery",
    headline: "Your First Impression, Perfected",
    description: "Premium business cards that make people take notice. From ultra-thick 32pt cards with spot UV and foil stamping to classic designs on silk laminate — we source from hundreds of suppliers to find you the highest quality at the best price.",
    benefits: [
      "Multiple premium paper stocks: 16pt, 32pt ultra-thick, silk laminate, linen, and more",
      "Full-color printing with spot UV, foil stamping, embossing, and specialty finishes",
      "Wholesale pricing on bulk orders — 250, 500, 1,000, 5,000+ cards",
      "We compare multiple suppliers to always get you the best quality and price",
      "Free design assistance to match your existing brand identity",
    ],
    images: [businessCardsStack],
    reversed: false,
  },
  {
    num: "02",
    title: "Banners, Yard Signs & Large Format",
    headline: "Go Big — Without the Big Price Tag",
    description: "High-visibility outdoor signage built to withstand Ohio weather. Whether you need 10 yard signs or 10,000, we'll find the best supplier with the highest quality materials at a price that makes sense.",
    benefits: [
      "Durable vinyl banners — wind, rain, and UV resistant for Ohio's toughest conditions",
      "Corrugated plastic yard signs with optional H-wire stakes included",
      "Custom sizes from small directional signs to massive building-sized banners",
      "Vibrant full-color printing with fade-resistant inks",
      "Bulk pricing for political campaigns, real estate, and event promotions",
    ],
    images: [yardSignInstall],
    reversed: true,
  },
  {
    num: "03",
    title: "Brochures, Flyers & Marketing Materials",
    headline: "Marketing That Tells Your Story",
    description: "Professional marketing collateral printed on premium stock. Tri-fold brochures, rack cards, flyers, sell sheets — everything your business needs to communicate quality and professionalism.",
    benefits: [
      "Tri-fold, bi-fold, z-fold, and gate-fold brochure options",
      "Glossy, matte, and silk finishes for a premium look and feel",
      "Available in multiple sizes: 4×6, 5×7, 8.5×11, and custom dimensions",
      "Perfect for direct mail, trade shows, restaurants, medical offices, and more",
      "Affordable pricing on runs from 250 to 100,000+ pieces",
    ],
    images: [brochuresFlyers],
    reversed: false,
  },
  {
    num: "04",
    title: "Letterhead, Envelopes & Corporate Stationery",
    headline: "Establish Your Brand Authority",
    description: "A complete, professionally printed stationery package tells your clients you're serious about your business. Matching letterhead, envelopes, notepads, and business cards create a cohesive, polished image.",
    benefits: [
      "Matching sets: letterhead, envelopes, business cards, and custom notepads",
      "Premium paper stocks including linen, cotton, and recycled options",
      "Full-color or Pantone-matched printing for exact brand color consistency",
      "Ideal for law firms, medical offices, financial advisors, and corporate HQs",
      "Custom die-cut options for truly unique branding",
    ],
    images: [printingStationery],
    reversed: true,
  },
  {
    num: "05",
    title: "Custom Printed Apparel & More",
    headline: "Branded Gear Your Team Will Love",
    description: "From company uniforms to event merchandise, we source the highest quality apparel and printing at wholesale prices. Screen printing, DTG, embroidery — whatever fits your brand best.",
    benefits: [
      "Screen printing for bulk orders — vibrant colors that last hundreds of washes",
      "Direct-to-garment (DTG) for small runs and complex full-color designs",
      "Embroidery for polos, caps, and corporate uniforms with a premium feel",
      "Wide garment selection: t-shirts, hoodies, tank tops, hats, jackets, and more",
      "No minimum orders on DTG — perfect for prototypes and one-offs",
    ],
    images: [customApparel],
    reversed: false,
  },
];

const trustPoints = [
  { icon: Shield, title: "Highest Quality Guaranteed", desc: "We source from 4,300+ suppliers to always find the best materials and printing quality for your project." },
  { icon: Eye, title: "Full Transparency", desc: "See the actual supplier cost on every project. No hidden markups, no games, no surprises — ever." },
  { icon: Award, title: "Best Possible Pricing", desc: "True wholesale pricing passed directly to you with only a small, transparent fee on top." },
  { icon: Heart, title: "Passion for Small Business", desc: "David Stein built Buckeye Biz Hub because he believes every business deserves premium branding without overpaying." },
  { icon: Users, title: "Local Ohio Service", desc: "Real people who understand Ohio businesses. Personal service, not a faceless online form." },
  { icon: Package, title: "4,300+ Supplier Partners", desc: "We compare multiple suppliers for every project so you always get the best solution for your needs." },
];

const BusinessPrinting = () => {
  return (
    <div className="min-h-screen bg-ohio-grey-dark text-primary-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={productCollage} alt="Business printing products" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,4%)]/95 via-[hsl(0,0%,4%)]/85 to-[hsl(0,0%,4%)]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,4%)] via-transparent to-[hsl(0,0%,4%)]/50" />
        </div>
        <div className="absolute top-[-200px] right-[-200px] w-[800px] h-[800px] bg-primary/[0.1] rounded-full blur-[200px]" />

        <div className="container relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 bg-primary/20 border-2 border-primary/40 rounded-full px-6 py-2.5 mb-8 shadow-[0_0_25px_hsl(0_80%_42%/0.2)]">
              <Printer className="w-5 h-5 text-primary" />
              <span className="text-sm font-black text-primary tracking-[0.15em] uppercase">Business Printing</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 max-w-5xl text-glow-white"
          >
            Highest Quality Business Printing
            <br />
            <span className="text-primary text-glow-red">at the Best Possible Price</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/60 max-w-3xl mb-12 font-medium leading-relaxed"
          >
            Premium materials and expert craftsmanship without the premium price tag — because your business deserves to look professional and grow without paying an arm and a leg.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-7 rounded-xl shadow-[0_0_50px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                <Phone className="w-5 h-5" />
                Get Your Custom Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Story / Body Copy */}
      <section className="py-20 lg:py-28 bg-[hsl(0,0%,7%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-10 text-center text-glow-white">
              We Do Business Printing <span className="text-primary text-glow-red">Differently</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-primary-foreground/60 leading-relaxed">
              <p>
                At Buckeye Biz Hub we do business printing differently. As a former business owner, David Stein understands exactly what it takes to grow a company — and how important it is to have high-quality branded materials without overpaying.
              </p>
              <p>
                We maintain wholesale accounts with over <span className="text-primary font-bold">4,300 printing and item suppliers</span>. This gives us unmatched options and the ability to always find you the highest quality materials at the best possible price. We compare multiple suppliers for every project so you always get the best solution for your needs.
              </p>
              <p>
                We focus on two things above everything else: <span className="text-primary font-bold">Highest Quality</span> and <span className="text-primary font-bold">Best Pricing</span>. We offer full transparency on costs and are happy to show you exactly what we are charged so you know you're getting a fair deal.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16 max-w-5xl mx-auto">
            {[
              { stat: "4,300+", label: "Supplier Partners" },
              { stat: "Best", label: "Possible Pricing" },
              { stat: "100%", label: "Transparent Costs" },
              { stat: "Premium", label: "Quality Always" },
            ].map((item) => (
              <div key={item.label} className="text-center bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-colors duration-300">
                <div className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-2">{item.stat}</div>
                <div className="text-primary-foreground/50 font-bold uppercase tracking-wider text-xs md:text-sm">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {sections.map((s, idx) => (
        <section key={s.title} className={`py-20 lg:py-28 relative overflow-hidden ${idx % 2 === 0 ? "bg-ohio-grey-dark" : "bg-[hsl(0,0%,7%)]"}`}>
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[150px]" />

          <div className="container relative">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${s.reversed ? '' : ''}`}>
              {/* Image */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={0} variants={fadeUp}
                className={s.reversed ? 'lg:order-2' : ''}
              >
                <div className="relative overflow-hidden rounded-3xl group shadow-2xl">
                  <img src={s.images[0]} alt={s.title} loading="lazy" width={800} height={600}
                    className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ohio-grey-dark/50 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute top-5 left-5 bg-primary/90 text-primary-foreground font-black text-sm px-4 py-2 rounded-xl tracking-wider uppercase">
                    {s.num} · {s.title.split(' ')[0]}
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={1} variants={fadeUp}
                className={s.reversed ? 'lg:order-1' : ''}
              >
                <span className="inline-block text-xs font-black text-primary tracking-[0.25em] uppercase mb-4">
                  {s.num} — {s.title}
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-glow-white leading-tight">
                  {s.headline}
                </h2>
                <p className="text-lg text-primary-foreground/55 leading-relaxed mb-8">
                  {s.description}
                </p>

                <div className="space-y-3 mb-8">
                  {s.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-primary-foreground/70 font-medium">{b}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base px-10 py-6 rounded-xl shadow-[0_0_35px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_55px_hsl(0_80%_42%/0.6)] transition-all duration-300 group uppercase tracking-wider">
                    Get a Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Section */}
      <section className="py-24 lg:py-32 bg-[hsl(0,0%,6%)] relative overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.06] rounded-full blur-[200px]" />
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-glow-white">
              Why Ohio Businesses Choose <span className="text-primary text-glow-red">Buckeye Biz Hub</span>
            </h2>
            <p className="text-lg text-primary-foreground/50 max-w-2xl mx-auto">Quality, transparency, and passion for helping businesses grow.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trustPoints.map((item) => (
              <div key={item.title} className="bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-2xl p-8 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(0_80%_42%/0.1)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-black text-primary-foreground mb-3">{item.title}</h3>
                <p className="text-primary-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,8%)] to-[hsl(0,0%,4%)]" />
        <div className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] bg-primary/[0.1] rounded-full blur-[200px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[180px]" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[0.9] text-glow-white">
              Ready for Premium Printing
              <br />
              <span className="text-primary text-glow-red">at the Best Price?</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-lg md:text-xl text-primary-foreground/50 mb-12 font-medium max-w-3xl mx-auto">
            Let David and the Buckeye Biz Hub team find you the highest quality materials at the best possible price. Full transparency, no markups, no surprises.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-xl sm:text-2xl px-14 py-8 rounded-xl shadow-[0_0_60px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_100px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                Get Your Custom Quote Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Buckeye Biz Hub - Business Printing Services",
        "description": "Highest quality business printing at the best possible price. 4,300+ supplier partners. Columbus, Ohio.",
        "url": "https://buckeye-brand-boost.lovable.app/business-printing",
        "areaServed": { "@type": "State", "name": "Ohio" },
      }) }} />

      <Footer />
    </div>
  );
};

export default BusinessPrinting;
