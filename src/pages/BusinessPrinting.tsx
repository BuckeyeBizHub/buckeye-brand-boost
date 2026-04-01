import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Phone,
  Printer,
  CheckCircle2,
  Shield,
  Eye,
  Award,
  Heart,
  Layers,
  Sparkles,
  FileText,
  Shirt,
  Flag,
  Mail,
  Lightbulb,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import businessPrintingHero from "@/assets/business-printing-hero.jpg";
import businessCardsStack from "@/assets/business-cards-letterhead-stack.jpg";
import yardSignInstall from "@/assets/yard-sign-installation.jpg";
import brochuresFlyers from "@/assets/brochures-flyers-layou.jpg";
import customApparel from "@/assets/custom-apparel-polos-hoodies.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const serviceCards = [
  {
    title: "Business Cards & Stationery",
    headline: "Your First Impression, Perfected",
    image: businessCardsStack,
    bullets: [
      "Premium stocks from 14pt standard to ultra-thick 32pt",
      "Spot UV, gold foil stamping, embossing & soft-touch finishes",
      "Wholesale pricing on 250 to 5,000+ card runs",
      "Free design assistance to match your brand identity",
    ],
  },
  {
    title: "Banners, Yard Signs & Large Format",
    headline: "Go Big — Without the Big Price Tag",
    image: yardSignInstall,
    bullets: [
      "Durable vinyl banners — wind, rain & UV resistant",
      "Corrugated yard signs with H-wire stakes included",
      "Custom sizes from directional signs to building wraps",
      "Bulk pricing for political campaigns, real estate & events",
    ],
  },
  {
    title: "Brochures, Flyers & Marketing Materials",
    headline: "Marketing Collateral That Tells Your Story",
    image: brochuresFlyers,
    bullets: [
      "Tri-fold, bi-fold, z-fold & gate-fold options",
      "Glossy, matte & silk premium paper finishes",
      "Multiple sizes: 4×6, 5×7, 8.5×11 & custom dimensions",
      "Affordable runs from 250 to 100,000+ pieces",
    ],
  },
  {
    title: "Letterhead, Envelopes & Corporate Stationery",
    headline: "Establish Your Brand Authority",
    image: businessCardsStack,
    bullets: [
      "Matching letterhead, envelopes, notecards & notepads",
      "Linen, cotton & recycled premium paper stocks",
      "Pantone-matched printing for exact brand colors",
      "Ideal for law firms, medical offices & corporate headquarters",
    ],
  },
  {
    title: "Custom Printed Apparel & Branded Gear",
    headline: "Branded Gear Your Team Will Actually Love",
    image: customApparel,
    bullets: [
      "Screen printing — vibrant colors that last 100+ washes",
      "DTG for small runs & complex full-color designs",
      "Embroidery for polos, caps & corporate uniforms",
      "No minimums on DTG — perfect for prototypes & samples",
    ],
  },
];

const paperStocks = [
  { weight: "14pt", type: "Standard Gloss/Matte", best: "Everyday networking & handouts", feel: "Professional & affordable", icon: FileText },
  { weight: "16pt", type: "Premium Gloss/Matte", best: "Client-facing professionals", feel: "Noticeably thicker & more substantial", icon: Layers },
  { weight: "24pt", type: "Ultra-Thick", best: "Executives & luxury brands", feel: "Heavy, rigid & impressive", icon: Shield },
  { weight: "32pt", type: "Ultra-Premium", best: "Maximum impact & prestige", feel: "The thickest card stock available", icon: Award },
  { weight: "Linen", type: "Textured Linen", best: "Law firms & financial advisors", feel: "Classic woven texture with elegance", icon: Star },
  { weight: "Cotton", type: "Cotton/Recycled", best: "Eco-conscious brands", feel: "Soft, natural & sustainable", icon: Heart },
];

const finishes = [
  { name: "Gold/Silver Foil Stamping", desc: "Metallic accents that catch light and convey luxury. Perfect for logos, names, and borders on premium business cards and stationery." },
  { name: "Spot UV Coating", desc: "Glossy raised coating applied to specific areas for contrast against matte backgrounds. Creates a tactile, eye-catching effect." },
  { name: "Embossing / Debossing", desc: "Raised or pressed-in designs that add a three-dimensional texture to your cards, letterhead, or folders." },
  { name: "Soft-Touch Lamination", desc: "A velvety, suede-like coating that makes your printed piece feel luxurious and high-end to the touch." },
  { name: "Edge Painting", desc: "Bold color applied to the edges of thick cards for a standout detail that's visible even in a stack." },
  { name: "Rounded Corners / Die-Cut", desc: "Custom-shaped cards and rounded corners that break the mold and make your brand memorable." },
];

const faqItems = [
  { q: "What paper stock is best for business cards?", a: "It depends on your industry and goals. 14pt is great for everyday use, 16pt adds a premium feel for client-facing roles, and 24pt–32pt makes a powerful statement for executives, attorneys, and luxury brands. We'll help you choose the perfect stock for your brand." },
  { q: "What is spot UV and foil stamping?", a: "Spot UV is a glossy, raised coating applied to specific areas of your card (like your logo) to create contrast and texture. Foil stamping presses metallic foil (gold, silver, rose gold, etc.) onto your card for a luxurious, eye-catching finish. Both can be combined for maximum impact." },
  { q: "How thick should my business cards be?", a: "Standard 14pt cards work for most professionals. If you want to stand out, 16pt or 24pt adds noticeable heft. For the ultimate impression, 32pt ultra-thick cards are rigid, impressive, and unforgettable — especially with edge painting or foil." },
  { q: "Do you offer rush printing?", a: "Yes! We offer expedited turnaround on most products. Standard orders typically ship in 5–7 business days, but rush options can cut that to 2–3 days depending on the product. Contact us for rush availability and pricing." },
  { q: "What file formats do you accept?", a: "We accept print-ready PDF, AI, EPS, and PSD files at 300 DPI with 0.125\" bleed. Don't have print-ready files? No problem — our design team can prepare your artwork at no extra charge." },
  { q: "What quantities can I order?", a: "We offer flexible quantities from as few as 250 business cards up to 100,000+ for large campaigns. Brochures, flyers, and banners are similarly flexible. The more you order, the lower your per-unit cost — true wholesale pricing." },
  { q: "How long does printing take?", a: "Standard turnaround is 5–7 business days after proof approval. Specialty finishes like foil stamping or embossing may add 1–2 days. Rush options are available for most products." },
  { q: "Can you help with design?", a: "Absolutely! We offer free design assistance on all orders. Whether you need a complete design from scratch, minor tweaks to existing artwork, or just help getting your files print-ready, our team is here to help at no additional cost." },
];

const trustPoints = [
  { icon: Shield, title: "Highest Quality Guaranteed", desc: "We source from 4,300+ suppliers to always find the best materials and printing quality for your project." },
  { icon: Eye, title: "Full Transparency", desc: "See the actual supplier cost on every project. No hidden markups, no games, no surprises — ever." },
  { icon: Award, title: "Best Possible Pricing", desc: "True wholesale pricing passed directly to you with only a small, transparent fee on top." },
  { icon: Heart, title: "Passion for Small Business", desc: "David Stein built Buckeye Biz Hub because he believes every Ohio business deserves premium branding without overpaying." },
];

const BusinessPrinting = () => {
    usePageTitle("Business Printing Services Columbus Ohio", "Professional business printing services in Columbus Ohio. Business cards, brochures, flyers, letterheads, and more with premium quality and fast turnaround.");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={businessPrintingHero} alt="Premium gold-foiled business cards on a Columbus Ohio office desk" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--ohio-grey-dark))]/95 via-[hsl(var(--ohio-grey-dark))]/85 to-[hsl(var(--ohio-grey-dark))]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ohio-grey-dark))] via-transparent to-[hsl(var(--ohio-grey-dark))]/50" />
        </div>

        <div className="container relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 bg-primary/20 border-2 border-primary/40 rounded-full px-6 py-2.5 mb-8 shadow-[0_0_25px_hsl(var(--primary)/0.2)]">
              <Printer className="w-5 h-5 text-primary" />
              <span className="text-sm font-black text-primary tracking-[0.15em] uppercase">Business Printing</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 max-w-5xl text-primary-foreground"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Premium Business Printing That Makes Your Brand{" "}
            <span className="text-primary">Stand Out</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/70 max-w-3xl mb-12 font-medium leading-relaxed"
          >
            Highest-quality materials, expert craftsmanship, and true wholesale pricing — all with 24-hour quotes and nothing ever hidden.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-[hsl(var(--ohio-red-light))] text-primary-foreground font-black text-lg sm:text-xl px-12 py-7 rounded-xl shadow-[0_0_50px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_80px_hsl(var(--primary)/0.7)] transition-all duration-300 group uppercase tracking-wider" style={{ animation: "pulse-glow 3s infinite" }}>
                <Phone className="w-5 h-5" />
                Get Your Custom Quote in 24 Hours
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: We Do Business Printing Differently */}
      <section className="py-20 lg:py-28 bg-[hsl(var(--ohio-grey-dark)/0.04)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-10 text-center">
              We Do Business Printing <span className="text-primary">Differently</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                At Buckeye Biz Hub we do business printing differently. With over 25 years of experience, David Stein, The Buckeye Branding Czar, understands exactly what it takes to grow a company — and how important it is to have high-quality branded materials without overpaying.
              </p>
              <p>
                We maintain wholesale accounts with over <span className="text-primary font-bold">4,300 printing and item suppliers</span>. This gives us unmatched options and the ability to always find the highest quality materials at the best possible price. We compare multiple suppliers for every single project so you always get the best solution for your needs.
              </p>
              <p>
                We focus on two things above everything else: <span className="text-primary font-bold">Highest Quality</span> and <span className="text-primary font-bold">Best Pricing</span>. We offer full transparency on costs and are happy to show you exactly what we are charged so you know you're getting a fair deal — every time.
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
              <div key={item.label} className="text-center bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-colors duration-300">
                <div className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-2">{item.stat}</div>
                <div className="text-muted-foreground font-bold uppercase tracking-wider text-xs md:text-sm">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Our Business Printing Services – 3x2 grid */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-4">
              Our Business <span className="text-primary">Printing Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Premium products sourced from 4,300+ suppliers — always the highest quality at the best price.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={idx} variants={fadeUp}
              >
                <Card className="group h-full overflow-hidden hover:border-primary/40 hover:shadow-[0_0_50px_hsl(var(--primary)/0.08)] transition-all duration-500 rounded-3xl">
                  <div className="relative h-56 overflow-hidden">
                    <img src={card.image} alt={`${card.title} printing services Columbus Ohio`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  <CardContent className="p-7 pt-4">
                    <h3 className="text-sm font-black text-primary tracking-[0.15em] uppercase mb-2">{card.title}</h3>
                    <p className="font-display text-xl md:text-2xl font-black text-foreground mb-5 leading-tight">{card.headline}</p>

                    <div className="space-y-2.5 mb-7">
                      {card.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground font-medium leading-snug">{b}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button size="lg" className="w-full bg-primary hover:bg-[hsl(var(--ohio-red-light))] text-primary-foreground font-black text-base py-6 rounded-xl shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all duration-300 group/btn uppercase tracking-wider">
                        Get a Quote
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Paper Stocks & Finishes Explained */}
      <section className="py-24 lg:py-32 bg-[hsl(var(--ohio-cream))] relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
              Paper Stocks & <span className="text-primary">Finishes Explained</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Not sure which stock or finish is right for your project? Here's a clear breakdown to help you choose.</p>
          </motion.div>

          {/* Paper Stocks Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-8 text-center">Popular Paper Stocks</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {paperStocks.map((stock) => (
                <Card key={stock.weight} className="hover:border-primary/40 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <stock.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-display text-xl font-black text-foreground">{stock.weight}</div>
                        <div className="text-sm text-muted-foreground">{stock.type}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2"><span className="font-bold text-foreground">Best for:</span> {stock.best}</p>
                    <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Feel:</span> {stock.feel}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Finishes Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
            <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-8 text-center">Finishes & Enhancements That <span className="text-primary">Wow</span></h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {finishes.map((finish) => (
                <Card key={finish.name} className="hover:border-primary/40 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-5 h-5 text-primary shrink-0" />
                      <h4 className="font-display text-lg font-black text-foreground">{finish.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{finish.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Design Tips from David */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
                Design Tips from <span className="text-primary">David</span>
              </h2>
            </div>

            <div className="border-l-4 border-primary bg-card rounded-r-2xl p-8 md:p-10 shadow-sm">
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "After 25+ years in business, I've handed out — and received — thousands of business cards. The ones I remember? They weren't the flashiest. They were the ones that <span className="text-primary font-bold">felt right</span>. A good weight in your hand, clean design, and a finish that made you look twice."
                </p>
                <p>
                  "My advice: <span className="text-primary font-bold">keep it simple, keep it bold</span>. Use your brand colors consistently. Choose a stock that matches your industry — a law firm should feel different from a landscaping company. And don't skip the finish. A little spot UV on your logo or a soft-touch coating can turn a $0.10 card into a $10 impression."
                </p>
                <p>
                  "Most importantly, your printed materials should tell people who you are before they read a single word. That's the power of quality printing — and that's what we deliver at Buckeye Biz Hub."
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display text-lg font-black text-foreground">— David Stein, The Buckeye Branding Czar</p>
                <p className="text-sm text-muted-foreground font-bold">Buckeye Biz Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="py-24 lg:py-32 bg-[hsl(var(--ohio-cream))] relative overflow-hidden">
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

      {/* Section 7: FAQ */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
              Business Printing <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Common questions about our business printing services in Columbus, Ohio.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border border-border rounded-xl px-6 data-[state=open]:border-primary/40 transition-colors">
                  <AccordionTrigger className="text-left font-display font-bold text-foreground hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--ohio-grey-dark))] via-[hsl(var(--ohio-navy))] to-[hsl(var(--ohio-grey-dark))]" />
        <div className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] bg-primary/[0.1] rounded-full blur-[200px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[180px]" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[0.9]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              Ready for Premium Business Printing
              <br />
              <span className="text-primary">at the Best Possible Price?</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-lg md:text-xl text-primary-foreground/60 mb-12 font-medium max-w-3xl mx-auto">
            Let David and the Buckeye Biz Hub team find you the highest quality materials at the best possible price. Full transparency, no markups, no surprises.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-[hsl(var(--ohio-red-light))] font-black text-xl sm:text-2xl px-14 py-8 rounded-xl shadow-[0_0_60px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_100px_hsl(var(--primary)/0.7)] transition-all duration-300 group uppercase tracking-wider" style={{ animation: "pulse-glow 3s infinite" }}>
                Get Your 24-Hour Custom Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Business Printing Services - Buckeye Biz Hub",
        "description": "Premium business cards, brochures, letterhead, banners and custom printing services in Columbus, Ohio. Wholesale pricing with full transparency.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Buckeye Biz Hub",
          "areaServed": { "@type": "State", "name": "Ohio" },
          "address": { "@type": "PostalAddress", "addressLocality": "Columbus", "addressRegion": "OH" },
        },
        "serviceType": ["Business Card Printing", "Brochure Printing", "Banner Printing", "Letterhead Printing", "Custom Apparel Printing"],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      }) }} />

      <Footer />
    </div>
  );
};

export default BusinessPrinting;
