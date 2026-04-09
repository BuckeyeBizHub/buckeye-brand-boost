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
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  ThumbsUp,
  Lightbulb,
  Shirt,
  HardHat,
  Crown,
  Users,
  Briefcase,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

import apparelHero from "@/assets/service-apparel-uniforms.jpg";
import polosGolf from "@/assets/apparel-polos-golf.jpg";
import hoodies from "@/assets/printing-hoodies.jpg";
import tshirts from "@/assets/apparel-tshirts-performance.jpg";
import jackets from "@/assets/apparel-jackets-outerwear.jpg";
import hats from "@/assets/custom-hats-headwear.jpg";
import safetyVests from "@/assets/apparel-safety-hivis.jpg";
import aprons from "@/assets/apparel-aprons-service.jpg";
import corporateDress from "@/assets/apparel-corporate-dress.jpg";
import teamwear from "@/assets/printing-teamwear.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const apparelCategories = [
  {
    title: "Embroidered Polos & Golf Shirts",
    desc: "The gold standard for professional team apparel. Premium polos with crisp embroidered logos that look sharp wash after wash.",
    image: polosGolf,
    icon: Crown,
  },
  {
    title: "Hoodies & Sweatshirts",
    desc: "Cozy, comfortable, and branded — perfect for casual Fridays, outdoor events, and employee appreciation gifts.",
    image: hoodies,
    icon: Shirt,
  },
  {
    title: "T-Shirts & Performance Tees",
    desc: "From 100% cotton basics to moisture-wicking performance tees, screen printed or DTG with your logo and brand colors.",
    image: tshirts,
    icon: Shirt,
  },
  {
    title: "Work Jackets & Outerwear",
    desc: "Softshell jackets, fleece vests, and rain gear that keep your crew warm and your brand visible year-round.",
    image: jackets,
    icon: ShoppingBag,
  },
  {
    title: "Custom Hats & Caps",
    desc: "Embroidered snapbacks, truckers, beanies, and structured caps from Richardson, Flexfit, and New Era.",
    image: hats,
    icon: HardHat,
  },
  {
    title: "Safety Vests & Hi-Vis Apparel",
    desc: "ANSI-compliant hi-vis vests and workwear with your company logo — keeping your crew safe and branded on every jobsite.",
    image: safetyVests,
    icon: ShieldCheck,
  },
  {
    title: "Aprons & Service Uniforms",
    desc: "Custom embroidered aprons, chef coats, and server uniforms that elevate your restaurant or hospitality brand.",
    image: aprons,
    icon: Users,
  },
  {
    title: "Corporate Button-Downs & Dress Shirts",
    desc: "Professional embroidered dress shirts and oxfords that give your office team a polished, cohesive look.",
    image: corporateDress,
    icon: Briefcase,
  },
  {
    title: "Team & Event Apparel",
    desc: "Custom t-shirts, tanks, and matching outfits for company events, 5Ks, charity walks, and team-building days.",
    image: teamwear,
    icon: Users,
  },
];

const customizationMethods = [
  {
    name: "Embroidery",
    best: "Polos, hats, jackets, bags, towels",
    pros: "Premium look, extremely durable, doesn't fade or crack — lasts the lifetime of the garment",
    cons: "Limited color gradients, higher cost for very complex designs with many colors",
    when: "When you want the most professional, high-end look on fabric items. The go-to for corporate apparel and uniforms.",
  },
  {
    name: "Screen Printing",
    best: "T-shirts, hoodies, tote bags, bulk event apparel",
    pros: "Vibrant colors, lowest per-unit cost at volume, bold and consistent designs",
    cons: "Not ideal for orders under 12 pieces or photo-realistic images",
    when: "When you're ordering 12+ items and want bold, consistent branding at the best per-unit price.",
  },
  {
    name: "Direct-to-Garment (DTG)",
    best: "Apparel with complex, full-color, or photographic artwork",
    pros: "Photo-quality prints, unlimited colors, great for small runs and one-offs",
    cons: "Slightly less durable than screen print over many washes, higher per-unit cost at volume",
    when: "When your design has many colors, gradients, or photographic elements — especially for orders under 12 pieces.",
  },
  {
    name: "Heat Transfer / Vinyl",
    best: "Names, numbers, small text, multi-color designs on apparel",
    pros: "Great for individual customization (names/numbers), sharp edges, durable",
    cons: "Not ideal for very large designs or bulk orders over 50 pieces",
    when: "When you need personalized names or numbers on each garment, like team jerseys or staff uniforms.",
  },
  {
    name: "Laser Engraving",
    best: "Leather patches on hats, bags, and premium accessories",
    pros: "Extremely precise, permanent, elegant and upscale finish",
    cons: "Material-dependent (leather, wood, metal), single color",
    when: "When you want a sleek, sophisticated branded patch or mark on hats, bags, or leather goods.",
  },
  {
    name: "Full-Color Digital Printing",
    best: "All-over prints, sublimation on polyester, complex artwork",
    pros: "Unlimited colors, edge-to-edge printing possible, photo-quality",
    cons: "Works best on white or light polyester fabrics",
    when: "When you need vibrant, full-coverage designs or all-over prints on performance fabrics.",
  },
];

const faqItems = [
  { q: "What is the minimum order quantity?", a: "Minimum order quantities vary by decoration method — embroidery typically starts at 6–12 pieces, screen printing at 12–24 pieces, and DTG can be done for as few as 1 piece. We always find the best option for your quantity and budget." },
  { q: "How long does production take?", a: "Standard production is typically 10–14 business days from proof approval. Many popular items and simpler orders can be completed faster. We'll confirm your exact timeline when you request a quote." },
  { q: "Do you offer embroidery or screen printing?", a: "We offer both, plus DTG, heat transfer, vinyl, laser engraving, and full-color digital printing. We'll recommend the best method based on your artwork, garment choice, quantity, and budget." },
  { q: "Can I get a proof before production?", a: "Absolutely! Every order includes a free digital mockup showing exactly how your logo will appear on the garment. We won't go to production until you approve it." },
  { q: "What file formats do you accept?", a: "We accept vector files (AI, EPS, PDF) for the best results. High-resolution PNG and JPEG files (300+ DPI) also work well. For embroidery, we'll digitize your logo at no extra charge." },
  { q: "Do you offer rush options?", a: "Yes! Many products are available with rush production and shipping. Depending on the item and decoration method, we can often deliver in 5–7 business days. Rush fees may apply, and we're always transparent about costs." },
  { q: "Can I order different styles in one order?", a: "Of course! Many clients mix polos, hoodies, hats, and jackets in a single order. We'll coordinate all decoration to ensure consistent branding across every item." },
  { q: "How do I choose the right apparel for my team?", a: "Tell us about your industry, work environment, and how your team will wear the apparel. We'll recommend the best garments, fabrics, and decoration methods to match — whether it's durable workwear for the field or polished polos for the office." },
  { q: "Do you help with design?", a: "Yes! We offer free design consultation and can help you optimize your logo for any decoration method. If you need a brand-new design, we can connect you with our design team." },
  { q: "What is the best way to maximize ROI with branded apparel?", a: "Choose quality garments your team will actually want to wear, keep your branding clean and professional, and order enough for new hires and replacements. Well-branded apparel turns every team member into a walking billboard — the ROI compounds every time they leave the office." },
];

const BrandedApparel = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Branded Apparel & Custom Uniforms",
    description: "Custom embroidered polos, hoodies, jackets, hats, and uniforms for Ohio businesses. Wholesale pricing, 24-hour quotes, full transparency.",
    url: "https://buckeye-brand-boost.lovable.app/branded-apparel-and-uniforms",
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
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

    usePageTitle("Branded Apparel & Uniforms Columbus Ohio", "Custom branded apparel and uniforms for Ohio businesses. Embroidered polos, hoodies, jackets, and safety vests with your company logo. Wholesale pricing available.");

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={apparelHero} alt="Custom branded apparel and uniforms for Ohio businesses" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Branded Apparel & Uniforms <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Branded Apparel & Uniforms That Build Team Pride and{" "}
              <span className="text-primary">Instant Credibility</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Custom embroidered polos, hoodies, jackets, hats, and more — professionally branded for your Ohio business with 24-hour quotes and full transparency.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: ShieldCheck, label: "No Hidden Fees" },
                { icon: BadgeCheck, label: "Wholesale Pricing" },
                { icon: ThumbsUp, label: "24-Hour Quotes" },
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-10 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                  Get Your Custom Apparel & Uniforms Quoted in 24 Hours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Branded Apparel Matters */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-8 text-center">
              Why Branded Apparel Matters for <span className="text-primary">Ohio Businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              First impressions are everything — and your team's appearance speaks volumes before a single word is said. Consistent, professionally branded apparel instantly communicates trust, competence, and pride. Whether your HVAC techs pull up to a customer's home in matching embroidered polos or your restaurant staff greets guests in custom-branded aprons, the message is clear: this is a business that takes quality seriously.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond professionalism, branded apparel builds team unity and turns every employee into a walking brand ambassador. Every job site, every lunch run, every community event becomes a branding opportunity. For Ohio businesses competing in crowded local markets, consistent uniforms are one of the simplest and most cost-effective ways to stand out, build recognition, and earn customer trust from the very first interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Popular Branded Apparel – 3x3 Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Shirt className="w-4 h-4" /> Our Apparel Categories
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Our Most Popular <span className="text-primary">Branded Apparel</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From everyday team polos to rugged workwear and polished corporate dress shirts — all professionally decorated with your logo at wholesale pricing.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {apparelCategories.map((cat, i) => (
              <motion.div key={cat.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group bg-card overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={cat.image} alt={`${cat.title} for Ohio businesses`} loading="lazy" width={1024} height={768} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center">
                        <cat.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-7">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{cat.desc}</p>
                    <Link to="/contact">
                      <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.2)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.4)] transition-all duration-300 group/btn uppercase tracking-wider">
                        Get a Quote
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Customization Options Explained */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Customization Options <span className="text-primary">Explained</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not sure which decoration method is right for your apparel? Here's a breakdown of every option we offer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {customizationMethods.map((method, i) => (
              <motion.div key={method.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300 bg-card">
                  <CardContent className="p-8">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">{method.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-bold text-foreground">Best for: </span>
                        <span className="text-muted-foreground">{method.best}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><span className="font-semibold text-foreground">Pros:</span> {method.pros}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground text-center font-bold">–</span>
                        <span className="text-muted-foreground"><span className="font-semibold text-foreground">Cons:</span> {method.cons}</span>
                      </div>
                      <div className="pt-2 border-t border-border/50">
                        <span className="font-bold text-primary text-xs uppercase tracking-wider">When to choose: </span>
                        <span className="text-muted-foreground">{method.when}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Design Tips from David */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">
                Design Tips from David
              </h2>
            </div>
            <div className="bg-card rounded-2xl border-l-4 border-primary p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "I've seen hundreds of Ohio businesses order branded apparel, and the ones that get the best results all have one thing in common: they keep it simple. A clean, well-placed logo on a quality garment always looks more professional than a busy design on a cheap shirt."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "My top tip? Invest in the garment quality first. A $12 polo with great embroidery will get worn every week. A $5 tee with a flashy print ends up at the bottom of a drawer. Your team will actually want to wear premium apparel — and that's when branded clothing starts working as a real marketing tool, not just a uniform obligation."
              </p>
              <div className="mt-6">
                <p className="font-display font-black text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
                <p className="text-sm text-muted-foreground font-semibold">Buckeye Biz Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Branded Apparel FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Branded Apparel <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions we hear from Ohio businesses about custom apparel and uniforms.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <AccordionItem value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary transition-colors py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />

        <div className="container relative text-center max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-10 leading-[0.9]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready to Make Your Ohio Team Look Sharp and{" "}
            <span className="text-glow-white">Professional?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Premium apparel. Wholesale pricing. Full transparency. Let's create branded uniforms your team will actually want to wear.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl md:text-2xl px-14 py-9 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-widest"
                style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <Phone className="w-6 h-6" />
                Get Your Custom Quote in 24 Hours
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-muted/50 border-t border-border/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-bold text-muted-foreground tracking-wide">
            {["24-Hour Quotes", "Full Pricing Transparency", "Embroidery & Screen Print", "Ohio Owned & Operated"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
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

export default BrandedApparel;
