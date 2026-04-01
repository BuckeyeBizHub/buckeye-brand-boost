import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, MessageSquareQuote, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

import heroImg from "@/assets/rebrand-kit-hero.jpg";
import vehicleWrapImg from "@/assets/vehicle-wrap-full-real.jpg";
import yardSignImg from "@/assets/yard-sign-sizes-real.jpg";
import apparelImg from "@/assets/apparel-polos-golf.jpg";
import businessCardsImg from "@/assets/business-cards-product.jpg";
import brochuresImg from "@/assets/brochures-hero.jpg";
import promoImg from "@/assets/promo-drinkware.jpg";
import websiteImg from "@/assets/rebrand-website.jpg";
import seoImg from "@/assets/rebrand-seo.jpg";
import styleGuideImg from "@/assets/rebrand-style-guide.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const kitItems = [
  { title: "Vehicle Wraps & Fleet Branding", image: vehicleWrapImg, href: "/vehicle-wraps-and-fleet-branding" },
  { title: "Yard Signs & Custom Signage", image: yardSignImg, href: "/yard-signs-and-signage" },
  { title: "Branded Apparel & Uniforms", image: apparelImg, href: "/branded-apparel-and-uniforms" },
  { title: "Business Cards & Stationery", image: businessCardsImg, href: "/business-cards" },
  { title: "Brochures & Business Printing", image: brochuresImg, href: "/brochures-and-business-printing" },
  { title: "Promotional Products & Giveaways", image: promoImg, href: "/promotional-products" },
  { title: "Website Design & Development", image: websiteImg, href: "/website-design" },
  { title: "Local SEO & Google Ranking", image: seoImg, href: "/local-seo" },
  { title: "Brand Style Guide & Standards", image: styleGuideImg, href: "/contact" },
];

const faqItems = [
  { q: "What is typically included in a full rebrand kit?", a: "A full rebrand kit can include any combination of our services: vehicle wraps, yard signs, branded apparel, business cards, brochures, promotional products, website design, local SEO, and a brand style guide. Every kit is fully customized to your business needs and budget." },
  { q: "How long does a full rebrand take?", a: "Timeline depends on scope. A basic rebrand (cards, apparel, signage) can be completed in 2–4 weeks. A comprehensive rebrand including vehicle wraps, website, and SEO typically takes 6–12 weeks. We provide a detailed timeline with your quote." },
  { q: "Can I customize what is included?", a: "Absolutely! Every rebrand kit is fully customizable. You choose exactly which services and products you need. We'll help you prioritize based on your goals and budget." },
  { q: "Do you offer different package levels?", a: "Yes — we can structure packages at any budget level, from a starter kit (business cards + signage + apparel) to a complete transformation covering every touchpoint. We'll recommend the best approach based on your goals." },
  { q: "How much can I save with a full rebrand kit?", a: "Bundling services through our network typically saves 15–30% compared to sourcing each service separately. On a $10,000+ rebrand, that can mean $1,500–$3,000+ in savings while getting higher quality through our trusted partners." },
  { q: "Do you help with installation and rollout?", a: "Yes! We coordinate the entire rollout — from vehicle wrap installation scheduling to apparel distribution and signage placement. You get one point of contact managing everything." },
  { q: "Can I phase the rebrand over time?", a: "Of course. Many businesses start with the highest-impact items (vehicle wraps, business cards, website) and add additional elements over weeks or months. We'll create a phased roadmap that fits your cash flow." },
  { q: "Do you offer design services?", a: "Yes — our design team handles everything from logo refinement to complete visual identity creation. All design work is included in your rebrand quote with unlimited revisions until you're 100% satisfied." },
  { q: "Do you provide a brand style guide?", a: "Yes! Every full rebrand kit includes a professional brand style guide documenting your colors, fonts, logo usage, and brand standards — ensuring consistency across every touchpoint forever." },
  { q: "Can I start with a partial rebrand and add later?", a: "Absolutely. Start with what you need most and expand over time. We keep your brand files and specs on file so adding new items later is seamless and consistent." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full Rebrand Kits",
  description: "Complete business rebrand packages for Ohio businesses including vehicle wraps, signage, apparel, printing, promotional products, website design, and SEO.",
  url: "https://buckeye-brand-boost.lovable.app/full-rebrand-kits",
  provider: {
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  },
};

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
  usePageTitle("Full Rebrand Kits Columbus Ohio");

  return (
  <div className="min-h-screen">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Complete business rebrand kit with vehicle wraps apparel signage and printing on a Columbus Ohio office table" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
      </div>
      <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />Full Rebrand Kits<Sparkles className="w-3.5 h-3.5" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
            Full Rebrand Kits – Your Complete Brand Transformation in One Package
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            Get everything your Ohio business needs for a cohesive, professional brand image — vehicle wraps, signage, apparel, printing, promotional products, and digital assets — all coordinated by us with 24-hour quotes and full transparency.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: ShieldCheck, label: "No Hidden Fees" },
              { icon: BadgeCheck, label: "One Coordinated Package" },
              { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                <b.icon className="w-4 h-4 text-primary" />{b.label}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                Get Your Full Rebrand Kit Quote in 24 Hours
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why a Full Rebrand Kit is a Game-Changer</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            When you piece together branding from different vendors — one shop for cards, another for apparel, another for your website — you end up with inconsistent colors, mismatched fonts, different messaging, and wasted time managing multiple relationships. A coordinated rebrand kit eliminates all of that. Every touchpoint — from your truck wrap to your business card to your website — looks, feels, and communicates the same powerful brand message.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Beyond consistency, bundling your rebrand through Buckeye Biz Hub saves you significant money. Our network of trusted Central Ohio partners gives us volume pricing that we pass directly to you. You get one point of contact, one coordinated timeline, and one transparent quote — while saving 15–30% compared to sourcing everything separately. It's the smartest way to level up your brand.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section 3: What's Included – 3x3 Grid */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
            <Package className="w-4 h-4" /> Complete Package
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            What's Included in Your Full Rebrand Kit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pick and choose the services you need — or go all-in for maximum impact and savings.
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
                    Learn More <ArrowRight className="w-4 h-4" />
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Our Transparent Management Approach</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Based on the scope of your project, a management fee may vary but will always be fully transparent and disclosed at the time of quote. Our goal is to coordinate the entire rebrand through our trusted Central Ohio network so you get the highest quality while paying the lowest overall price.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { label: "Fully Transparent Fees", desc: "Every cost disclosed upfront — no surprises, ever." },
              { label: "One Point of Contact", desc: "We manage every vendor and timeline so you don't have to." },
              { label: "15–30% Bundle Savings", desc: "Volume pricing from our network passed directly to you." },
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
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-8 text-center">Design Tips from David</h2>
          <div className="bg-card rounded-2xl p-8 md:p-10 border-l-4 border-primary shadow-lg">
            <MessageSquareQuote className="w-8 h-8 text-primary mb-4" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">
              "The biggest mistake I see Ohio businesses make is rebranding in pieces — a new logo here, new cards there, but the van still has the old colors and the website hasn't been touched in three years. That disconnect confuses customers and kills trust. A coordinated rebrand — where every single touchpoint matches — is the fastest way to look bigger, more professional, and more trustworthy than your competition. And when you bundle it all through our network, you save thousands while getting it done right the first time."
            </p>
            <p className="font-bold text-foreground">— David Stein, The Buckeye Branding Czar</p>
            <p className="text-muted-foreground text-sm">Buckeye Biz Hub</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 6: FAQ */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">
          Full Rebrand Kits FAQ
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
          Ready to give your Ohio business a complete, professional brand makeover?
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
              <Phone className="w-6 h-6" />
              Get Your Full Rebrand Kit Quote in 24 Hours
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
          {["24-Hour Quotes", "Full Pricing Transparency", "Ohio Owned & Operated"].map((item, i) => (
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
