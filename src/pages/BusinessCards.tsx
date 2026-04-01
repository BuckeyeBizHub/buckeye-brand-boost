import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp,
  Clock, CheckCircle, Layers, Gem, Paintbrush, Star, Scissors, CreditCard,
  FileText, Lightbulb, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/business-cards-hero.jpg";
import businessCardsImg from "@/assets/business-cards-product.jpg";

/* ── data ── */
const cardOptions = [
  {
    id: "standard",
    icon: CreditCard,
    title: "Standard Business Cards (14pt)",
    description: "Professional quality at an affordable price. Perfect for networking events, everyday handouts, and high-volume needs.",
    features: ["Full-color front & back", "Gloss or matte finish", "Fast 3–5 day turnaround"],
  },
  {
    id: "premium",
    icon: Star,
    title: "Premium Business Cards (16pt)",
    description: "A noticeable step up in thickness and feel. Ideal for professionals who want to stand out without going ultra-luxury.",
    features: ["Thicker 16pt cardstock", "Matte, gloss, or soft-touch", "UV coating available"],
  },
  {
    id: "ultra-thick",
    icon: Layers,
    title: "Ultra-Thick Business Cards (24pt–32pt)",
    description: "The ultimate in business card luxury. A card so thick it commands attention the moment it hits someone's hand.",
    features: ["24pt or 32pt ultra-thick stock", "Soft-touch lamination", "Edge painting available"],
  },
  {
    id: "foil",
    icon: Gem,
    title: "Foil Stamped Business Cards",
    description: "Add brilliant gold, silver, copper, or rose-gold foil accents that catch the light and make your brand unforgettable.",
    features: ["Gold, silver, copper, rose-gold", "Hot foil stamping process", "Combines with any stock"],
  },
  {
    id: "spot-uv",
    icon: Paintbrush,
    title: "Spot UV + Foil Combination Cards",
    description: "Combine raised glossy spot UV with metallic foil for a multi-textured card that people can't stop touching.",
    features: ["Spot UV on logos & text", "Foil stamping accents", "Tactile & visual impact"],
  },
  {
    id: "die-cut",
    icon: Scissors,
    title: "Custom Die-Cut & Shaped Cards",
    description: "Break free from the standard rectangle. Custom shapes, rounded corners, and unique die-cuts make your card one-of-a-kind.",
    features: ["Custom shapes & cutouts", "Rounded corners", "Mini cards & folded options"],
  },
];

const paperStocks = [
  { weight: "14pt", type: "Standard", finish: "Gloss / Matte", best: "Everyday networking & high-volume handouts", feel: "Smooth, professional — similar to a standard business card" },
  { weight: "16pt", type: "Premium", finish: "Gloss / Matte / Soft-Touch", best: "Professionals who want a premium feel without going ultra-thick", feel: "Noticeably thicker with a satisfying weight" },
  { weight: "24pt", type: "Ultra-Thick", finish: "Matte / Soft-Touch / Uncoated", best: "Luxury brands, attorneys, realtors, executives", feel: "Substantial and rigid — makes an immediate impression" },
  { weight: "32pt", type: "Ultra-Premium", finish: "Soft-Touch / Uncoated", best: "Maximum impact — high-end branding & VIP clients", feel: "The thickest card available — feels like a mini sign" },
];

const finishes = [
  { icon: Gem, title: "Gold / Silver Foil Stamping", desc: "Metallic foil pressed onto the card surface creates a brilliant, reflective finish that catches light beautifully. Available in gold, silver, copper, and rose-gold." },
  { icon: Paintbrush, title: "Spot UV Coating", desc: "A clear, raised gloss coating applied to specific areas — logos, text, or patterns — creating a stunning contrast against matte backgrounds." },
  { icon: Layers, title: "Embossing / Debossing", desc: "Raised (embossed) or recessed (debossed) impressions pressed into the card stock create a tactile, dimensional effect that feels luxurious." },
  { icon: Star, title: "Soft-Touch Lamination", desc: "A velvety matte coating that transforms any card into something people don't want to put down. Resists fingerprints and feels incredibly premium." },
  { icon: Paintbrush, title: "Edge Painting", desc: "Add a pop of color to the edges of ultra-thick cards. Edge painting in Buckeye red, gold, black, or any custom color makes your card unmistakably unique." },
];

const faqItems = [
  { q: "What paper stock is best for my business cards?", a: "It depends on your brand and budget. Standard 14pt works great for everyday networking. If you want a premium feel, go with 16pt. For maximum impact — especially for lawyers, realtors, and executives — our ultra-thick 24pt or 32pt cards are unbeatable." },
  { q: "What is spot UV and foil stamping?", a: "Spot UV is a clear, raised gloss coating applied to specific areas of your card (like your logo) to create a stunning contrast. Foil stamping presses metallic foil (gold, silver, copper) onto the card for a brilliant, reflective accent. Both add a tactile, premium feel." },
  { q: "How thick should my business cards be?", a: "Standard 14pt is similar to most business cards you encounter. 16pt adds noticeable heft. 24pt–32pt is ultra-thick and rigid — these are the cards that make people stop and say 'wow.' We recommend 16pt+ for any professional who wants to stand out." },
  { q: "Do you offer rush printing?", a: "Yes! We offer expedited turnaround for most business card products. Standard orders ship in 3–5 business days, and rush orders can be completed in as little as 1–2 business days depending on the product and finish." },
  { q: "What file format do I need to submit?", a: "We accept print-ready PDF, AI, PSD, and high-resolution PNG files. If you don't have a design ready, our team can help create one for you — just mention it when you request your quote." },
  { q: "Can I order different quantities?", a: "Absolutely. We offer quantities starting at 250 cards all the way up to 10,000+ for larger businesses. Volume discounts are available, and we'll always find the most cost-effective option for you." },
  { q: "How long does printing take?", a: "Standard business cards typically ship in 3–5 business days. Premium finishes like foil stamping and spot UV may take 5–7 business days. Rush options are available for most products." },
  { q: "Do you offer design help?", a: "Yes! If you need a professional business card design from scratch or want to refine an existing layout, our design team is here to help. Just let us know when you request your quote and we'll include design services." },
];

const trustItems = ["24-Hour Quotes", "Full Pricing Transparency", "Ohio Owned & Operated"];

/* ── component ── */
const BusinessCards = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Cards & Stationery",
    description: "Premium business cards with foil stamping, spot UV, and ultra-thick stocks for Ohio businesses.",
    url: "https://buckeye-brand-boost.lovable.app/business-cards",
    provider: {
      "@type": "LocalBusiness",
      name: "Buckeye Biz Hub",
      areaServed: { "@type": "State", name: "Ohio" },
      address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
    },
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium gold-foiled business cards" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Business Cards & Stationery <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Premium Business Cards That Make a Lasting First Impression
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              From standard to ultra-thick 32pt with foil, spot UV, and custom finishes — all designed and printed right here in Ohio with 24-hour quotes and full transparency
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: ShieldCheck, label: "No Hidden Fees" },
                { icon: BadgeCheck, label: "Wholesale Pricing" },
                { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" /> {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                  Get Your Custom Business Cards Quoted in 24 Hours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WHY BUSINESS CARDS MATTER ═══ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={businessCardsImg} alt="Premium business cards showcase" loading="lazy" width={800} height={600} className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-6">Why Your Business Cards Matter More Than Ever</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In a world dominated by screens, a physical business card cuts through the noise. It's tangible, personal, and memorable — the one marketing tool that puts your brand directly into someone's hand. Studies show that 72% of people judge a company based on the quality of their business card, and a premium card makes you 10x more likely to be remembered after a networking event.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Buckeye Biz Hub, we believe your business card should feel as impressive as the business behind it. That's why we offer everything from standard professional cards to ultra-thick 32pt luxury stocks with gold foil, spot UV, and custom die-cuts — all at wholesale pricing that saves Ohio businesses real money compared to local print shops.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CARD OPTIONS GRID ═══ */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">Our Business Card Options</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From everyday networking cards to ultra-luxury foil-stamped masterpieces — find the perfect card for your brand.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardOptions.map((card, i) => (
              <motion.div key={card.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-black text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{card.description}</p>
                    <ul className="space-y-2">
                      {card.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PAPER STOCKS EXPLAINED ═══ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">Paper Stocks Explained</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Not sure which paper stock is right for you? Here's a straightforward breakdown.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {paperStocks.map((stock, i) => (
              <motion.div key={stock.weight} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-border/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-black text-primary">{stock.weight}</span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground">{stock.type}</h3>
                        <p className="text-sm text-muted-foreground">Finishes: {stock.finish}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Best for:</strong> {stock.best}</p>
                    <p className="text-muted-foreground"><strong className="text-foreground">Feel:</strong> {stock.feel}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINISHES & ENHANCEMENTS ═══ */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">Finishes & Enhancements That Wow</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Elevate your cards with premium finishes that people can see, feel, and remember.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishes.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DESIGN TIPS FROM DAVID ═══ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-l-4 border-primary pl-8 md:pl-10">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl font-black text-foreground">Design Tips from David</h2>
            </div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic font-serif mb-4">
              "I've handed out thousands of business cards over 25 years in Ohio — and I can tell you, the cards that get kept are the ones that feel different. My advice? Go thicker than you think you need, add one premium finish like foil or spot UV, and keep the design clean. White space is your friend. Your card should say 'I'm serious about my business' before anyone reads a single word on it."
            </p>
            <footer>
              <p className="font-bold text-foreground text-base">— David Stein, The Buckeye Branding Czar</p>
              <p className="text-muted-foreground text-sm font-semibold">Buckeye Biz Hub</p>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">Business Card FAQ</h2>
            <p className="text-muted-foreground text-lg">Answers to the questions we hear most from Ohio businesses.</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Ready to order premium business cards that actually represent your brand?
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
                <Phone className="w-6 h-6" />
                Get Your 24-Hour Custom Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="py-8 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide">
                <Clock className="w-4 h-4 text-primary" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessCards;
