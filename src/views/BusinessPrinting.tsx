"use client";
import BrochuresPricing from "@/components/pricing/BrochuresPricing";
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
  Sparkles,
  FileText,
  Layers,
  Mail,
  Lightbulb,
  Star,
  BookOpen,
  Clock,
  Columns2,
  LayoutGrid,
} from "lucide-react";
import { Link } from "@/lib/compat/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

const businessPrintingHero = "/assets/business-printing-hero.jpg";
const businessCardsStack = "/assets/business-cards-letterhead-stack.jpg";
const yardSignInstall = "/assets/yard-sign-installation.jpg";
const brochuresFlyers = "/assets/brochures-flyers-layou.jpg";
const customApparel = "/assets/custom-apparel-polos-hoodies.jpg";
const halfFoldImg = "/assets/folds/half-fold.png";
const trifoldImg = "/assets/folds/trifold.png";
const zFoldImg = "/assets/folds/z-fold.png";
const gateFoldImg = "/assets/folds/gate-fold.png";
const accordionFoldImg = "/assets/folds/accordion-fold.png";
const doubleParallelFoldImg = "/assets/folds/double-parallel-fold.png";
const frenchFoldImg = "/assets/folds/french-fold.png";
const parallelMapFoldImg = "/assets/folds/parallel-map-fold.png";
const paper70lb = "/assets/paper/70lb.jpg";
const paper80lb = "/assets/paper/80lb.jpg";
const paper100lb = "/assets/paper/100lb.jpg";
const cardstock10pt = "/assets/paper/10pt.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const foldTypes = [
  { title: "Half-Fold", panels: "2-Panel", image: halfFoldImg, desc: "Also called a bifold. Two panels, folded in half. Best for simple business presentations." },
  { title: "Tri-Fold", panels: "3-Panel", image: trifoldImg, desc: "Three vertical panels that walk your customer through the info in order. One of the most popular folds." },
  { title: "Z-Fold", panels: "3-Panel", image: zFoldImg, desc: "Panels fold back and forth in a \"Z\" shape. Open it up and you get one full page." },
  { title: "Gate Fold", panels: "3-Panel", image: gateFoldImg, desc: "Two front panels fold in to form a \"gate.\" Good for design-heavy pieces or a \"big reveal.\"" },
  { title: "Accordion Fold", panels: "4-Panel", image: accordionFoldImg, desc: "Four panels that fold back and forth. Use it for event schedules or maps." },
  { title: "Double Parallel Fold", panels: "4-Panel", image: doubleParallelFoldImg, desc: "Four parallel panels facing the same way. Good for detailed company overviews." },
  { title: "French Fold", panels: "4-Panel", image: frenchFoldImg, desc: "Folded in half, then in half again the other way. Popular for programs and promo pieces." },
  { title: "Parallel Map Fold", panels: "4-Panel", image: parallelMapFoldImg, desc: "Four vertical panels side by side when open. Opens like a folder, then unfolds again." },
];

const serviceCards = [
  {
    title: "Business Cards & Stationery",
    headline: "Your first impression, done right",
    image: businessCardsStack,
    bullets: [
      "Stocks from 14pt standard to ultra-thick 32pt",
      "Spot UV, gold foil, embossing and soft-touch finishes",
      "Wholesale pricing on 250 to 5,000+ card runs",
      "Free design help to match your brand",
    ],
  },
  {
    title: "Banners, Yard Signs & Large Format",
    headline: "Go big without the big price tag",
    image: yardSignInstall,
    bullets: [
      "Tough vinyl banners that handle wind, rain and sun",
      "Corrugated yard signs with H-wire stakes included",
      "Custom sizes from directional signs to building wraps",
      "Bulk pricing for political campaigns, real estate and events",
    ],
  },
  {
    title: "Brochures, Flyers & Marketing Materials",
    headline: "Marketing pieces that tell your story",
    image: brochuresFlyers,
    bullets: [
      "Tri-fold, bi-fold, z-fold and gate-fold",
      "Gloss, matte and silk paper finishes",
      "Sizes from 4×6, 5×7 and 8.5×11 to custom",
      "Runs from 250 to 100,000+ pieces",
    ],
  },
  {
    title: "Letterhead, Envelopes & Corporate Stationery",
    headline: "Look like you mean business",
    image: businessCardsStack,
    bullets: [
      "Matching letterhead, envelopes, notecards and notepads",
      "Linen, cotton and recycled paper stocks",
      "Pantone-matched printing for exact brand colors",
      "Built for law firms, medical offices and corporate offices",
    ],
  },
  {
    title: "Custom Printed Apparel & Branded Gear",
    headline: "Gear your team will actually wear",
    image: customApparel,
    bullets: [
      "Screen printing with colors that last 100+ washes",
      "DTG for small runs and full-color designs",
      "Embroidery for polos, caps and uniforms",
      "No minimums on DTG, good for samples and one-offs",
    ],
  },
];

const paperStocks = [
  { weight: "14pt", type: "Standard Gloss/Matte", best: "Everyday networking and handouts", feel: "Professional and affordable", icon: FileText },
  { weight: "16pt", type: "Premium Gloss/Matte", best: "Client-facing professionals", feel: "Noticeably thicker in the hand", icon: Layers },
  { weight: "24pt", type: "Ultra-Thick", best: "Executives and luxury brands", feel: "Heavy and rigid", icon: Shield },
  { weight: "32pt", type: "Ultra-Premium", best: "Maximum impact", feel: "The thickest card stock available", icon: Award },
  { weight: "Linen", type: "Textured Linen", best: "Law firms and financial advisors", feel: "Classic woven texture", icon: Star },
  { weight: "Cotton", type: "Cotton/Recycled", best: "Eco-conscious brands", feel: "Soft, natural and sustainable", icon: Heart },
];

const paperWeights = [
  { name: "70 lb.", image: paper70lb, desc: "Our thinnest paper, still durable. Best for inside pages of catalogs and booklets." },
  { name: "80 lb.", image: paper80lb, desc: "A step up from 70 lb. Good for posters that need to hold up." },
  { name: "100 lb.", image: paper100lb, desc: "Our thickest paper. Best for flyers and brochures that get handled a lot." },
];

const cardstockWeights = [
  { name: "10 pt.", image: cardstock10pt, desc: "Our thinnest cardstock. Folds well. Good for greeting cards." },
  { name: "14 pt.", desc: "Common for business cards, presentation folders and booklet covers." },
  { name: "16 pt.", desc: "A bit thicker. Best for invitations." },
  { name: "17 pt.", desc: "Our thickest, sturdiest cardstock. Best for direct mail postcards." },
];

const coatings = [
  { name: "Matte", desc: "Smooth, satin feel. Easy to read when there's a lot of text." },
  { name: "Gloss", desc: "Coated on both sides. Adds shine without glare." },
  { name: "High-Gloss UV", desc: "Makes photos pop and holds up to handling." },
];

const laminates = [
  { name: "Silk", desc: "Between matte and gloss. Soft to the touch." },
  { name: "Soft Touch", desc: "Velvety finish for high-end pieces." },
  { name: "Gloss Antibacterial", desc: "High gloss that helps stop germs. Good for brochures that get passed around." },
];

const finishes = [
  { name: "Gold/Silver Foil Stamping", desc: "Metallic accents that catch the light. Best on logos, names and borders." },
  { name: "Spot UV Coating", desc: "A glossy coating on just the spots you pick, for contrast against a matte background." },
  { name: "Embossing / Debossing", desc: "Raised or pressed-in designs you can feel." },
  { name: "Soft-Touch Lamination", desc: "A velvety, suede-like coating that feels high-end." },
  { name: "Edge Painting", desc: "Color on the edges of thick cards. A detail people notice." },
  { name: "Rounded Corners / Die-Cut", desc: "Custom shapes and rounded corners that people remember." },
];

const faqItems = [
  { q: "What paper stock is best for business cards?", a: "14pt for everyday use. 16pt if you want it to feel premium. 24pt–32pt if you want it to make a statement." },
  { q: "What paper stock is best for brochures?", a: "For most brochures, 80lb or 100lb gloss text. Color looks great and it feels professional. For trade shows, 100lb gloss cover (10pt) gives you more stiffness." },
  { q: "What is spot UV and foil stamping?", a: "Spot UV is a glossy coating on just the areas you pick, for contrast. Foil stamping presses metallic foil onto the piece so it catches the eye." },
  { q: "Do you offer rush printing?", a: "Yes. Standard orders ship in 5–7 business days. Rush is 2–3 days, depending on the product." },
  { q: "What file formats do you accept?", a: "Print-ready PDF, AI, EPS and PSD at 300 DPI with 0.125\" bleed. We can also get your artwork ready at no extra charge." },
  { q: "What quantities can I order?", a: "From 250 business cards up to 100,000+ for big campaigns. The more you order, the less each piece costs." },
  { q: "Can you help with design?", a: "Yes. Free design help on every order, from a new design to small tweaks to getting your files print-ready." },
  { q: "How many brochures should I order?", a: "At least 500 for the best per-piece price. We can do runs from 250 to 100,000+. Wholesale pricing keeps the per-piece cost down." },
  { q: "Can I get samples first?", a: "Yes. We send paper samples so you can feel the weight and texture. On big orders, we can get you a printed proof before the full run." },
];

const trustPoints = [
  { icon: Shield, title: "Quality, guaranteed", desc: "We source from 4,300+ suppliers to find the best materials and print quality." },
  { icon: Eye, title: "Every cost shown", desc: "Every fee up front. No hidden markups." },
  { icon: Award, title: "Wholesale pricing", desc: "Wholesale pricing passed straight to you, with a small fee on top that you can see." },
  { icon: Heart, title: "Small business people", desc: "David Stein co-founded Buckeye Biz Hub because Ohio businesses shouldn't overpay for good branding." },
];

const BusinessPrinting = () => {
  usePageSEO({
    title: "Business Printing: Flyers, Brochures, Business Cards & More",
    description: "Business printing in Columbus Ohio. We shop our network of printers to get you the best quality and price. Free quotes in 24 hours.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={businessPrintingHero} alt="Premium business printing materials on a Columbus Ohio office desk" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--ohio-grey-dark))]/95 via-[hsl(var(--ohio-grey-dark))]/85 to-[hsl(var(--ohio-grey-dark))]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ohio-grey-dark))] via-transparent to-[hsl(var(--ohio-grey-dark))]/50" />
        </div>

        <div className="container relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 bg-primary/20 border-2 border-primary/40 rounded-full px-6 py-2.5 mb-8 shadow-[0_0_25px_hsl(var(--primary)/0.2)]">
              <Printer className="w-5 h-5 text-primary" />
              <span className="text-sm font-black text-primary ">Business printing</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 max-w-5xl text-primary-foreground"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Business printing that makes you{" "}
            <span className="text-primary">stand out</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/70 max-w-3xl mb-12 font-medium leading-relaxed"
          >
            Top materials. Skilled printers. Wholesale pricing. Quotes in 24 hours, with nothing hidden.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-[hsl(var(--ohio-red-light))] text-primary-foreground font-black text-lg sm:text-xl px-12 py-7 rounded-xl shadow-[0_0_50px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_80px_hsl(var(--primary)/0.7)] transition-all duration-300 group " style={{ animation: "pulse-glow 3s infinite" }}>
                <Phone className="w-5 h-5" />
                Get your quote in 24 hours
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Concierge Intro */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Flyers, brochures, business cards, door hangers, presentation folders. We handle all of it, start to finish. We're local to Columbus, and we help you stand out without overspending.
          </motion.p>
        </div>
      </section>

      {/* We Do Business Printing Differently */}
      <section className="py-20 lg:py-28 bg-[hsl(var(--ohio-grey-dark)/0.04)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-10 text-center">
              How we do printing <span className="text-primary">differently</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>David Stein has over 25 years in business. He knows what it takes to grow a company. He also knows good printed materials shouldn't cost you a fortune.</p>
              <p>We have wholesale accounts with over <span className="text-primary font-bold">4,300 printing and product suppliers</span>. That gives us options. We find the best materials at the best price.</p>
              <p>We focus on two things: <span className="text-primary font-bold">top quality</span> and <span className="text-primary font-bold">the best price</span>.</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16 max-w-5xl mx-auto">
            {[
              { stat: "4,300+", label: "Supplier partners" },
              { stat: "Wholesale", label: "Pricing" },
              { stat: "100%", label: "Costs shown" },
              { stat: "Top", label: "Quality" },
            ].map((item) => (
              <div key={item.label} className="text-center bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-colors duration-300">
                <div className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-2">{item.stat}</div>
                <div className="text-muted-foreground font-bold text-xs md:text-sm">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Business Printing Services */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-4">
              What we <span className="text-primary">print</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sourced from 4,300+ suppliers. Top quality at the best price.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, idx) => (
              <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeUp}>
                <Card className="group h-full overflow-hidden hover:border-primary/40 hover:shadow-[0_0_50px_hsl(var(--primary)/0.08)] transition-all duration-500 rounded-3xl">
                  <div className="relative h-56 overflow-hidden">
                    <img src={card.image} alt={`${card.title} printing services Columbus Ohio`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-7 pt-4">
                    <h3 className="text-sm font-black text-primary mb-2">{card.title}</h3>
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
                      <Button size="lg" className="w-full bg-primary hover:bg-[hsl(var(--ohio-red-light))] text-primary-foreground font-black text-base py-6 rounded-xl shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all duration-300 group/btn ">
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

      {/* Brochure Fold Types */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Pick the right brochure fold
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The right fold depends on your content, your audience and how you hand them out.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Columns2 className="w-5 h-5" /> 2-panel options
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {foldTypes.filter(f => f.panels === "2-Panel").map((fold, i) => (
              <motion.div key={fold.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300 bg-card overflow-hidden">
                  <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center p-4">
                    <img src={fold.image} alt={`${fold.title} brochure by Buckeye Biz Hub in Columbus Ohio`} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{fold.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{fold.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <LayoutGrid className="w-5 h-5" /> 3-panel options
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {foldTypes.filter(f => f.panels === "3-Panel").map((fold, i) => (
              <motion.div key={fold.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300 bg-card overflow-hidden">
                  <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center p-4">
                    <img src={fold.image} alt={`${fold.title} brochure by Buckeye Biz Hub in Columbus Ohio`} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{fold.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{fold.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" /> 4-panel options
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foldTypes.filter(f => f.panels === "4-Panel").map((fold, i) => (
              <motion.div key={fold.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300 bg-card overflow-hidden">
                  <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center p-4">
                    <img src={fold.image} alt={`${fold.title} brochure by Buckeye Biz Hub in Columbus Ohio`} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{fold.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{fold.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paper Stocks & Finishes: Card Stocks */}
      <section className="py-24 lg:py-32 bg-[hsl(var(--ohio-cream))] relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
              Paper stocks and <span className="text-primary">finishes explained</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Not sure which stock or finish to pick? Here's the breakdown.</p>
          </motion.div>

          {/* Business Card Stocks */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-8 text-center">Popular card stocks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

          {/* Paper & Cardstock Weights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="font-display text-2xl font-black text-foreground mb-4 flex items-center gap-3">
                <Layers className="w-6 h-6 text-primary" /> Paper stock (text weight)
              </h3>
              <div className="space-y-4">
                {paperWeights.map((stock) => (
                  <div key={stock.name} className="bg-card rounded-xl p-5 border border-border/50 flex items-center gap-4">
                    <img src={stock.image} alt={`${stock.name} paper stock sample by Buckeye Biz Hub in Columbus Ohio`} loading="lazy" className="w-24 h-16 object-contain rounded flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground mb-1">{stock.name}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{stock.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="font-display text-2xl font-black text-foreground mb-4 flex items-center gap-3">
                <Layers className="w-6 h-6 text-primary" /> Cardstock (cover weight)
              </h3>
              <div className="space-y-4">
                {cardstockWeights.map((stock) => (
                  <div key={stock.name} className="bg-card rounded-xl p-5 border border-border/50 flex items-center gap-4">
                    {stock.image ? (
                      <img src={stock.image} alt={`${stock.name} cardstock sample by Buckeye Biz Hub in Columbus Ohio`} loading="lazy" className="w-24 h-16 object-contain rounded flex-shrink-0" />
                    ) : (
                      <div className="w-24 h-16 bg-muted/50 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-muted-foreground">{stock.name}</span>
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-foreground mb-1">{stock.name}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{stock.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Coatings & Laminates */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h3 className="font-display text-2xl font-black text-foreground mb-4 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" /> Coating options
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {coatings.map((c) => (
                <div key={c.name} className="bg-card rounded-xl p-5 border border-border/50">
                  <p className="font-bold text-foreground mb-1">{c.name}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">Laminate options</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {laminates.map((l) => (
                <div key={l.name} className="bg-card rounded-xl p-5 border border-border/50">
                  <p className="font-bold text-foreground mb-1">{l.name}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Finishes Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
            <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-8 text-center">Finishes people <span className="text-primary">notice</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Design Tips from David */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
                Design tips from <span className="text-primary">David</span>
              </h2>
            </div>

            <div className="border-l-4 border-primary bg-card rounded-r-2xl p-8 md:p-10 shadow-sm">
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>"In 25+ years in business, I've handed out and received thousands of business cards. The ones I remember <span className="text-primary font-bold">felt right</span>. Good weight, clean design and a finish that made you look twice."</p>
                <p>"The biggest mistake I see with brochures? Cramming too much onto one page. A brochure starts a conversation. Lead with your strongest benefit, keep the visuals clean and always tell people what to do next."</p>
                <p>"My advice: <span className="text-primary font-bold">keep it simple, keep it bold</span>. Use your brand colors every time. Pick a stock that fits your industry. And don't skip the finish. A little spot UV on your logo can turn a $0.10 card into a $10 impression."</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display text-lg font-black text-foreground">David Stein, Your Buckeye Branding Concierge</p>
                <p className="text-sm text-muted-foreground font-bold">Buckeye Biz Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Guide */}
      <BrochuresPricing />

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-[hsl(var(--ohio-cream))] relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
              Why Ohio businesses choose <span className="text-primary">Buckeye Biz Hub</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
              Business printing <span className="text-primary">FAQ</span>
            </h2>
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

      {/* Built by an Operator: credibility insert above final CTA */}
      <section className="py-16 lg:py-20 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Built by an operator
            </span>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-foreground leading-[1.15]">
              Run by someone who's{" "}
              <span className="text-primary">been in your seat.</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              David Stein co-founded Buckeye Biz Hub and runs it day to day. Before that, he co-founded BeerTubes, was named inventor on its patents, grew it from $79K in year one to $4.5M and sold it in 2017. Then he built SBC Hospitality Group to 100+ employees. He's spent his own money on marketing. He knows what works and what doesn't.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2 transition-all"
            >
              Learn more about David
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--ohio-grey-dark))] via-[hsl(var(--ohio-navy))] to-[hsl(var(--ohio-grey-dark))]" />
        <div className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] bg-primary/[0.1] rounded-full hidden" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.08] rounded-full hidden" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[0.9]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              Ready for better printing
              <br />
              <span className="text-primary">at a better price?</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-lg md:text-xl text-primary-foreground/60 mb-12 font-medium max-w-3xl mx-auto">
            Let David and the Buckeye Biz Hub team find you top materials at the best price. Every cost shown. No surprises.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-[hsl(var(--ohio-red-light))] font-black text-xl sm:text-2xl px-14 py-8 rounded-xl shadow-[0_0_60px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_100px_hsl(var(--primary)/0.7)] transition-all duration-300 group " style={{ animation: "pulse-glow 3s infinite" }}>
                Get your quote in 24 hours
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {["24-hour quotes", "Every cost shown", "Ohio owned and operated"].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide">
                <Clock className="w-4 h-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices />
      <Footer />
    </div>
  );
};

export default BusinessPrinting;
