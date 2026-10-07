"use client";
import YardSignsPricing from "@/components/pricing/YardSignsPricing";
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
  MapPin,
  Home,
  HardHat,
  Flag,
  Navigation,
  Layers,
} from "lucide-react";
import { Link } from "@/lib/compat/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

const yardSignHero = "/assets/yard-sign-installation.jpg";
const standardYardSign = "/assets/yard-signs-product.jpg";
const largeYardSign = "/assets/yard-sign-sizes-real.jpg";
const coroplastSign = "/assets/yard-sign-coroplast-real.jpg";
const realEstateSign = "/assets/yard-sign-realestate-real.jpg";
const jobsiteBanner = "/assets/yard-sign-jobsite-real.jpg";
const eventDirectional = "/assets/yard-sign-event-directional-real.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const signCategories = [
  {
    title: 'Standard Yard Signs (18" × 24")',
    desc: "The go-to size for real estate, political campaigns, contractors and local promotions. Easy to read and easy on the budget.",
    image: standardYardSign,
    icon: MapPin,
  },
  {
    title: 'Large Yard Signs (24" × 36")',
    desc: "More size for busy roads, grand openings and job sites. Hard to miss from the street.",
    image: largeYardSign,
    icon: Flag,
  },
  {
    title: "Corrugated Plastic Signs (4mm Coroplast)",
    desc: "Light, waterproof and built for weather. The standard for outdoor signs that make it through an Ohio year.",
    image: coroplastSign,
    icon: Layers,
  },
  {
    title: "Real Estate Open House Signs",
    desc: "Directional signs that walk buyers straight to your listing. Branded, and built to use again and again.",
    image: realEstateSign,
    icon: Home,
  },
  {
    title: "Job-Site & Construction Banners",
    desc: "Big vinyl banners for fences, scaffolding and buildings. Every job you work becomes an ad for the next one.",
    image: jobsiteBanner,
    icon: HardHat,
  },
  {
    title: "Event & Directional Signs",
    desc: "Arrows, wayfinding and event signs that get guests where they need to go, with your name on every one.",
    image: eventDirectional,
    icon: Navigation,
  },
];

const materials = [
  {
    name: "4mm Corrugated Plastic (Coroplast)",
    desc: "The standard for yard signs. Light but sturdy, waterproof, and holds up to Ohio rain, snow and sun. Flutes can run vertical or horizontal depending on how you mount it.",
  },
  {
    name: "H-Wire Stakes (Galvanized Metal)",
    desc: "Galvanized steel H-frame stakes slide into the sign's flutes and push into the lawn. Reusable and rust-resistant.",
  },
  {
    name: "Grommets for Hanging",
    desc: "Metal grommets for hanging on a fence, wall or rope. All four corners, or wherever you need them.",
  },
  {
    name: "Full-Color Printing (One or Both Sides)",
    desc: "Full-color printing on one or both sides. UV-resistant inks keep colors strong through months outside.",
  },
];

const faqItems = [
  { q: "What are the most popular yard sign sizes and their uses?", a: 'The most popular size is 18" × 24". It works for real estate, political campaigns, contractors and local promotions. For busy roads or job sites, go 24" × 36". Custom sizes are available too.' },
  { q: "Are the signs folded or flat?", a: "Flat. They arrive ready to go. Slide one onto an H-wire stake or hang it with grommets." },
  { q: "Do you offer custom sizes?", a: 'Yes. 18" × 24" and 24" × 36" are the most popular, but we can make any size. Give us your dimensions when you ask for a quote.' },
  { q: "What material are your yard signs made from?", a: "4mm corrugated plastic (Coroplast). It's light, waterproof and stands up to rain, wind and sun. It's the standard for outdoor signs." },
  { q: "Do you include stakes or stands?", a: "H-wire stakes are an add-on, and we recommend them for lawns. Grommets for fences or walls are an add-on too. Neither is included by default, but both are cheap to add." },
  { q: "Can the signs be printed on both sides?", a: "Yes. Single or double-sided. Go double-sided where traffic comes from both directions, like intersections, medians and corner lots." },
  { q: "How long do the signs last outdoors?", a: "Corrugated plastic signs with UV-resistant inks usually last 6–12 months outside in Ohio. Need longer? We offer upgraded materials and will tell you which one fits." },
  { q: "Do you offer rush production?", a: "Yes. Many yard sign orders can be done in 2–3 business days. Rush fees may apply, and you'll see them up front." },
  { q: "What file formats do you accept?", a: 'Print-ready PDF (preferred), Adobe Illustrator (.ai), Photoshop (.psd) and high-res JPEG or PNG. For best results, use 300 DPI with 0.125" bleed on all sides.' },
  { q: "Can I get a proof before printing?", a: "Yes. Every order comes with a free digital proof. Nothing gets printed until you approve it." },
];

const YardSignsAndSignage = () => {

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

    usePageSEO({ title: "Yard Signs & Custom Signage Columbus Ohio", description: "Yard signs and custom signage for Columbus and Central Ohio businesses. Made through our local sign partners with fast turnaround and wholesale pricing." });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={yardSignHero} alt="Custom yard signs and signage installed on a Columbus Ohio lawn" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Yard signs and custom signage <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Yard signs that get you{" "}
              <span className="text-primary">noticed in Ohio</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Weatherproof yard signs, banners and job-site signs. Printed through local partners. Quotes in 24 hours. Every cost shown.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: ShieldCheck, label: "No hidden fees" },
                { icon: BadgeCheck, label: "Wholesale pricing" },
                { icon: ThumbsUp, label: "24-hour quotes" },
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-10 py-8 rounded-2xl group transition-all duration-300">
                  Get your yard sign quote in 24 hours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Yard Signs Still Drive Results */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-8 text-center">
              Why yard signs still work for <span className="text-primary">Ohio businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Yard signs are one of the cheapest local marketing tools that still works. Real estate agents need them for listings and open houses. For contractors, landscapers and home service companies, a sign in the yard turns every job into an ad the whole street sees for weeks.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              They also work for grand openings, political campaigns, community events, garage sales, church events and fundraisers. You can see them from the road. They go in fast, handle weather and get reused. One good sign can be seen hundreds of times a day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Yard Sign & Signage Options, 3x2 Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <MapPin className="w-4 h-4" /> Our signage options
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Yard signs and <span className="text-primary">signage options</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Standard lawn signs to big job-site banners. All printed with UV-resistant inks on weatherproof material at wholesale pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {signCategories.map((cat, i) => (
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
                      <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold rounded-xl transition-all duration-300 group/btn ">
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

      {/* Section 4: Materials & Add-Ons Explained */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Materials and add-ons <span className="text-primary">explained</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What your sign is made of, how it mounts and how it prints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((mat, i) => (
              <motion.div key={mat.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300 bg-card">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <h3 className="font-display text-xl font-bold text-foreground">{mat.name}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{mat.desc}</p>
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
                Design tips from David
              </h2>
            </div>
            <div className="bg-card rounded-2xl border-l-4 border-primary p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "The number one mistake I see on yard signs? Too much information. People have to read it from 100 feet away at 35 miles an hour. That means big text, high-contrast colors and one clear next step."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "Stick to your company name, your phone number or website, and one short reason to call. Use your brand colors and make the text as big as it will go. Leave empty space. A clean sign beats a cluttered one every time. And go double-sided if the road has two-way traffic."
              </p>
              <div className="mt-6">
                <p className="font-display font-black text-foreground">David Stein, Your Buckeye Branding Concierge</p>
                <p className="text-sm text-muted-foreground font-semibold">Buckeye Biz Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Guide */}
      <YardSignsPricing />

      {/* Section 6: Yard Signs & Signage FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Yard sign <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The questions Ohio businesses ask us most about yard signs and outdoor signage.
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,14%,12%)] via-primary to-[hsl(216,14%,12%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full hidden" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full hidden" />

        <div className="container relative text-center max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-10 leading-[0.9]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready for signs that get you{" "}
            <span className="text-glow-white">noticed?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Weatherproof. Full color. Wholesale pricing. Let's make signs that bring in customers.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl md:text-2xl px-14 py-9 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group "
                style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <Phone className="w-6 h-6" />
                Get your quote in 24 hours
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
            {["24-hour quotes", "Every cost shown", "Weatherproof materials", "Ohio owned and operated"].map((item) => (
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

export default YardSignsAndSignage;
