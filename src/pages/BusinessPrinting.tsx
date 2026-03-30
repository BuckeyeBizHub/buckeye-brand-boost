import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Printer, CheckCircle2, Shield, Eye, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import businessCardsStack from "@/assets/business-cards-letterhead-stack.jpg";
import yardSignInstall from "@/assets/yard-sign-installation.jpg";
import brochuresFlyers from "@/assets/brochures-flyers-layou.jpg";
import productCollage from "@/assets/product-collage-hero.jpg";
import customApparel from "@/assets/custom-apparel-polos-hoodies.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const serviceCards = [
  {
    title: "Business Cards & Stationery",
    headline: "Your First Impression, Perfected",
    image: businessCardsStack,
    bullets: [
      "Premium stocks: 32pt ultra-thick, silk laminate, linen & more",
      "Spot UV, foil stamping, embossing & specialty finishes",
      "Wholesale pricing on 250 to 5,000+ card runs",
      "Free design assistance to match your brand",
    ],
  },
  {
    title: "Banners, Yard Signs & Large Format",
    headline: "Go Big — Without the Big Price Tag",
    image: yardSignInstall,
    bullets: [
      "Durable vinyl banners — wind, rain & UV resistant",
      "Corrugated yard signs with H-wire stakes included",
      "Custom sizes from directional signs to building banners",
      "Bulk pricing for campaigns, real estate & events",
    ],
  },
  {
    title: "Brochures, Flyers & Marketing Materials",
    headline: "Marketing That Tells Your Story",
    image: brochuresFlyers,
    bullets: [
      "Tri-fold, bi-fold, z-fold & gate-fold options",
      "Glossy, matte & silk premium finishes",
      "Multiple sizes: 4×6, 5×7, 8.5×11 & custom",
      "Affordable runs from 250 to 100,000+ pieces",
    ],
  },
  {
    title: "Letterhead, Envelopes & Corporate Stationery",
    headline: "Establish Your Brand Authority",
    image: businessCardsStack,
    bullets: [
      "Matching letterhead, envelopes, cards & notepads",
      "Linen, cotton & recycled premium paper stocks",
      "Pantone-matched printing for exact brand colors",
      "Ideal for law firms, medical offices & corporate HQs",
    ],
  },
  {
    title: "Custom Printed Apparel & More",
    headline: "Branded Gear Your Team Will Love",
    image: customApparel,
    bullets: [
      "Screen printing — vibrant colors that last 100s of washes",
      "DTG for small runs & complex full-color designs",
      "Embroidery for polos, caps & corporate uniforms",
      "No minimums on DTG — perfect for prototypes",
    ],
  },
];

const trustPoints = [
  { icon: Shield, title: "Highest Quality Guaranteed", desc: "We source from 4,300+ suppliers to always find the best materials and printing quality for your project." },
  { icon: Eye, title: "Full Transparency", desc: "See the actual supplier cost on every project. No hidden markups, no games, no surprises — ever." },
  { icon: Award, title: "Best Possible Pricing", desc: "True wholesale pricing passed directly to you with only a small, transparent fee on top." },
  { icon: Heart, title: "Passion for Small Business", desc: "David Stein built Buckeye Biz Hub because he believes every business deserves premium branding without overpaying." },
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

      {/* Service Card Grid */}
      <section className="py-24 lg:py-32 bg-ohio-grey-dark relative overflow-hidden">
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-glow-white mb-4">
              Our <span className="text-primary text-glow-red">Printing Services</span>
            </h2>
            <p className="text-lg text-primary-foreground/50 max-w-2xl mx-auto">Premium products sourced from 4,300+ suppliers — always the highest quality at the best price.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={idx} variants={fadeUp}
                className="group bg-[hsl(0,0%,8%)] border border-primary-foreground/10 rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-[0_0_50px_hsl(0_80%_42%/0.12)] transition-all duration-500"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img src={card.image} alt={card.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,8%)] via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-7 pt-4">
                  <h3 className="text-sm font-black text-primary tracking-[0.15em] uppercase mb-2">{card.title}</h3>
                  <p className="font-display text-xl md:text-2xl font-black text-primary-foreground mb-5 leading-tight">{card.headline}</p>

                  <div className="space-y-2.5 mb-7">
                    {card.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-primary-foreground/70 font-medium leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button size="lg" className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base py-6 rounded-xl shadow-[0_0_30px_hsl(0_80%_42%/0.3)] hover:shadow-[0_0_50px_hsl(0_80%_42%/0.5)] transition-all duration-300 group/btn uppercase tracking-wider">
                      Get a Quote
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose — Light Background for Max Contrast */}
      <section className="py-24 lg:py-32 bg-ohio-grey-light relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
              Why Ohio Businesses Choose <span className="text-primary">Buckeye Biz Hub</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Quality, transparency, and passion for helping businesses grow.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {trustPoints.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-black text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
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
