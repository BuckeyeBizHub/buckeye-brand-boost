"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, MessageSquareQuote, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

const heroImg = "/assets/rebrand-kit-hero.jpg";
const vehicleWrapImg = "/assets/vehicle-wrap-full-real.jpg";
const yardSignImg = "/assets/yard-sign-sizes-real.jpg";
const apparelImg = "/assets/apparel-polos-golf.jpg";
const businessCardsImg = "/assets/business-cards-product.jpg";
const brochuresImg = "/assets/brochures-hero.jpg";
const promoImg = "/assets/promo-drinkware.jpg";
const websiteImg = "/assets/rebrand-website.jpg";
const seoImg = "/assets/rebrand-seo.jpg";
const styleGuideImg = "/assets/rebrand-style-guide.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const kitItems = [
  { title: "Vehicle Wraps & Fleet Branding", image: vehicleWrapImg, href: "/vehicle-wraps" },
  { title: "Yard Signs & Custom Signage", image: yardSignImg, href: "/yard-signs-and-signage" },
  { title: "Branded Apparel & Uniforms", image: apparelImg, href: "/embroidered-apparel" },
  { title: "Business Cards & Stationery", image: businessCardsImg, href: "/business-cards-printing" },
  { title: "Brochures & Business Printing", image: brochuresImg, href: "/business-printing" },
  { title: "Promotional Products & Giveaways", image: promoImg, href: "/promotional-products" },
  { title: "Website Design & Development", image: websiteImg, href: "/website-design" },
  { title: "Local SEO & Google Ranking", image: seoImg, href: "/local-seo" },
  { title: "Brand Style Guide & Standards", image: styleGuideImg, href: "/contact" },
];

const faqItems = [
  { q: "What is typically included in a full rebrand kit?", a: "Any mix of what we do: vehicle wraps, yard signs, branded apparel, business cards, brochures, promo products, website design, local SEO and a brand style guide. Every kit is built around your business and your budget." },
  { q: "How long does a full rebrand take?", a: "It depends on scope. A basic rebrand (cards, apparel, signage) takes 2–4 weeks. A full rebrand with vehicle wraps, website and SEO usually takes 6–12 weeks. You get a timeline with your quote." },
  { q: "Can I customize what is included?", a: "Yes. You pick the pieces you need. We help you decide what comes first based on your goals and budget." },
  { q: "Do you offer different package levels?", a: "Yes. We can build a package at any budget, from a starter kit (business cards, signage, apparel) to a full overhaul of everything with your name on it. We'll tell you what makes sense." },
  { q: "How much can I save with a full rebrand kit?", a: "Bundling through our network typically saves 15–30% compared to buying each piece separately. On a $10,000+ rebrand, that can mean $1,500–$3,000+ back in your pocket, with work done by partners we trust." },
  { q: "Do you help with installation and rollout?", a: "Yes. We coordinate the whole rollout: wrap install dates, apparel delivery, sign placement. You get one point of contact for all of it." },
  { q: "Can I phase the rebrand over time?", a: "Yes. Most businesses start with the big-impact items (vehicle wraps, business cards, website) and add the rest over weeks or months. We'll lay out a plan that fits your cash flow." },
  { q: "Do you offer design services?", a: "Yes. Our design team handles everything from cleaning up a logo to building a full visual identity. Design is included in your rebrand quote, and we revise until you're happy." },
  { q: "Do you provide a brand style guide?", a: "Yes. Every full rebrand kit includes a style guide with your colors, fonts, logo rules and brand standards. Hand it to any vendor and your brand stays consistent." },
  { q: "Can I start with a partial rebrand and add later?", a: "Yes. Start with what you need most and add later. We keep your brand files and specs on hand, so new pieces match the old ones." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const FullRebrandKits = () => {
  usePageSEO({ title: "Full Rebrand Kits Columbus Ohio", description: "Complete rebrand kits for Ohio businesses. Vehicle wraps, signage, apparel and print, all coordinated through our partner network. One contact." });

  return (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Complete business rebrand kit with vehicle wraps apparel signage and printing on a Columbus Ohio office table" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
      </div>
      <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />Full rebrand kits<Sparkles className="w-3.5 h-3.5" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
            Full rebrand kits: your whole brand, redone in one package
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            Vehicle wraps, signage, apparel, printing, promo products and your website. We coordinate all of it. Quotes in 24 hours. Every cost on the table.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: ShieldCheck, label: "No hidden fees" },
              { icon: BadgeCheck, label: "One coordinated package" },
              { icon: ThumbsUp, label: "100% satisfaction guarantee" },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                <b.icon className="w-4 h-4 text-primary" />{b.label}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                Get your rebrand kit quote in 24 hours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 2: Why a Full Rebrand */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why do it all at once</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Use one shop for cards, another for shirts and another for your website, and you get three shades of your color, mismatched fonts and three vendors to chase. A coordinated kit fixes that. Your truck, your card and your website all look like the same company.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            It also saves money. Our Central Ohio partners give us volume pricing, and we pass it to you. One contact, one timeline, one quote with every cost shown. Typically 15–30% less than buying everything separately.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section 3: What's Included – 3x3 Grid */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
            <Package className="w-4 h-4" /> Complete package
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            What can go in your kit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pick what you need. Or do all of it for the biggest impact and the biggest savings.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitItems.map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}>
              <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={item.image} alt={item.title + " for Ohio businesses"} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-black text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <Link to={item.href} className="inline-flex items-center gap-1 text-primary font-bold hover:underline text-sm">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 4: Transparent Management */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">How we charge</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Our management fee depends on the size of the project. You see it in the quote, up front. We run the whole rebrand through partners we trust in Central Ohio, so you get top quality at the lowest total price.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { label: "Fees shown up front", desc: "Every cost in the quote. No surprises." },
              { label: "One point of contact", desc: "We manage every vendor and every deadline." },
              { label: "15–30% bundle savings", desc: "Volume pricing from our network, passed to you." },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <span className="font-bold text-foreground mb-2">{item.label}</span>
                <span className="text-muted-foreground text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 5: Design Tips from David */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-8 text-center">Design tips from David</h2>
          <div className="bg-card rounded-2xl p-8 md:p-10 border-l-4 border-primary shadow-lg">
            <MessageSquareQuote className="w-8 h-8 text-primary mb-4" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">
              "The biggest mistake I see is rebranding in pieces. New logo here, new cards there, but the van still has the old colors and nobody's touched the website in three years. That confuses customers and it costs you trust. When everything matches, you look bigger and more professional than the other guy. Bundle it through our network and you save money and get it right the first time."
            </p>
            <p className="font-bold text-foreground">David Stein, Your Buckeye Branding Concierge</p>
            <p className="text-muted-foreground text-sm">Buckeye Biz Hub</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 6: FAQ */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">
          Full rebrand kit FAQ
        </motion.h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6 shadow-sm">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
      <div className="container relative text-center max-w-3xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
          Ready to make your whole brand match?
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
              <Phone className="w-6 h-6" />
              Get your rebrand kit quote in 24 hours
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
              <Clock className="w-4 h-4 text-primary" />{item}
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

export default FullRebrandKits;
