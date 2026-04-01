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
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import yardSignHero from "@/assets/yard-sign-installation.jpg";
import standardYardSign from "@/assets/yard-signs-product.jpg";
import largeYardSign from "@/assets/yard-sign-large.jpg";
import coroplastSign from "@/assets/printing-yard-signs.jpg";
import realEstateSign from "@/assets/yard-sign-realestate.jpg";
import jobsiteBanner from "@/assets/yard-sign-jobsite-banner.jpg";
import eventDirectional from "@/assets/yard-sign-event-directional.jpg";

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
    desc: "The most popular size for real estate, political campaigns, contractor branding, and local promotions. Bold, visible, and affordable.",
    image: standardYardSign,
    icon: MapPin,
  },
  {
    title: 'Large Yard Signs (24" × 36")',
    desc: "Extra visibility for high-traffic areas, grand openings, and job-site branding. Impossible to miss from the road.",
    image: largeYardSign,
    icon: Flag,
  },
  {
    title: "Corrugated Plastic Signs (4mm Coroplast)",
    desc: "Lightweight, waterproof, and weather-resistant — the industry standard for outdoor signage that lasts through Ohio's four seasons.",
    image: coroplastSign,
    icon: Layers,
  },
  {
    title: "Real Estate Open House Signs",
    desc: "Professional directional signs that guide buyers straight to your listing. Bold, branded, and built to withstand repeated use.",
    image: realEstateSign,
    icon: Home,
  },
  {
    title: "Job-Site & Construction Banners",
    desc: "Large vinyl banners for fences, scaffolding, and buildings that advertise your company while you work — turning every project into a marketing opportunity.",
    image: jobsiteBanner,
    icon: HardHat,
  },
  {
    title: "Event & Directional Signs",
    desc: "Custom directional arrows, wayfinding signs, and event signage that keep your guests on track and your brand front and center.",
    image: eventDirectional,
    icon: Navigation,
  },
];

const materials = [
  {
    name: "4mm Corrugated Plastic (Coroplast)",
    desc: "The industry standard for yard signs. Lightweight yet sturdy, completely waterproof, and resistant to Ohio's rain, snow, and sun. Flute direction can be vertical or horizontal depending on installation needs.",
  },
  {
    name: "H-Wire Stakes (Galvanized Metal)",
    desc: "Heavy-duty galvanized steel H-frame stakes that slide into the flutes of your corrugated sign for easy, secure lawn installation. Reusable and rust-resistant.",
  },
  {
    name: "Grommets for Hanging",
    desc: "Metal-reinforced grommets punched into your sign or banner for fence, wall, or rope mounting. Available in all four corners or custom placement.",
  },
  {
    name: "Full-Color Printing (One or Both Sides)",
    desc: "Vibrant full-color digital printing on one or both sides of your sign. UV-resistant inks ensure your colors stay bold through months of outdoor exposure.",
  },
];

const faqItems = [
  { q: "What are the most popular yard sign sizes and their uses?", a: 'The most popular size is 18" × 24" — perfect for real estate signs, political campaigns, contractor branding, and local business promotions. For higher visibility on busy roads or job sites, 24" × 36" signs are the best choice. We also offer custom sizes for unique needs.' },
  { q: "Are the signs folded or flat?", a: "All of our yard signs ship flat and unfolded. They arrive ready to install — simply slide them onto an H-wire stake or hang with grommets." },
  { q: "Do you offer custom sizes?", a: 'Yes! While 18" × 24" and 24" × 36" are our most popular sizes, we can produce custom sizes to fit any need. Just let us know your dimensions when you request a quote.' },
  { q: "What material are your yard signs made from?", a: "Our yard signs are printed on 4mm corrugated plastic (Coroplast) — a lightweight, waterproof, and durable material that withstands rain, wind, and sun. It's the industry standard for outdoor signage." },
  { q: "Do you include stakes or stands?", a: "H-wire stakes are available as an add-on and are highly recommended for lawn installation. We also offer grommets for hanging on fences or walls. Stakes and grommets are not included by default but are very affordable to add." },
  { q: "Can the signs be printed on both sides?", a: "Absolutely! We offer single-sided and double-sided printing. Double-sided signs are ideal for locations where traffic passes from both directions — like intersections, medians, and corner lots." },
  { q: "How long do the signs last outdoors?", a: "Our corrugated plastic signs with UV-resistant inks typically last 6–12 months outdoors in Ohio weather conditions. For longer-term signage needs, we offer upgraded materials and can recommend the best option for your situation." },
  { q: "Do you offer rush production?", a: "Yes! We offer rush production for tight deadlines. Many yard sign orders can be completed in 2–3 business days. Rush fees may apply, and we're always transparent about costs upfront." },
  { q: "What file formats do you accept?", a: 'We accept print-ready PDFs (preferred), Adobe Illustrator (.ai), Photoshop (.psd), and high-resolution JPEG/PNG files. For best results, all files should be 300 DPI with 0.125" bleed on all sides.' },
  { q: "Can I get a proof before printing?", a: "Yes! Every order includes a free digital proof showing exactly how your sign will look before it goes to print. We won't produce anything until you approve it." },
];

const YardSignsAndSignage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Yard Signs & Custom Signage",
    description: "Custom yard signs, banners, real estate signs, and job-site signage for Ohio businesses. Weatherproof coroplast, 24-hour quotes, wholesale pricing.",
    url: "https://buckeye-brand-boost.lovable.app/yard-signs-and-signage",
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

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={yardSignHero} alt="Custom yard signs and signage installed on a Columbus Ohio lawn" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Yard Signs & Custom Signage <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Yard Signs & Custom Signage That Get You{" "}
              <span className="text-primary">Noticed in Ohio</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Weatherproof yard signs, banners, job-site signage, and more — designed and printed locally with 24-hour quotes and full transparency.
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
                  Get Your Custom Yard Signs Quoted in 24 Hours
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
              Why Yard Signs & Signage Still Drive Results for <span className="text-primary">Ohio Businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Yard signs are one of the most affordable and effective local marketing tools available. For real estate agents, they're essential for listing visibility and open house traffic. For contractors, landscapers, and home service companies, a well-placed job-site sign turns every completed project into a neighborhood advertisement that generates referrals for weeks.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond traditional business use, custom yard signs are perfect for grand openings, political campaigns, community events, garage sales, church events, and local fundraisers. They're visible from the road, easy to install, weatherproof, and reusable — making them one of the highest-ROI marketing investments any Ohio business or organization can make. A single well-designed sign can generate hundreds of impressions every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Yard Sign & Signage Options – 3x2 Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <MapPin className="w-4 h-4" /> Our Signage Options
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Our Yard Sign & <span className="text-primary">Signage Options</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From standard lawn signs to large job-site banners — all printed with UV-resistant inks on weatherproof materials at wholesale pricing.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Section 4: Materials & Add-Ons Explained */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Materials & Add-Ons <span className="text-primary">Explained</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about our yard sign materials, stakes, grommets, and printing options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
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
                Design Tips from David
              </h2>
            </div>
            <div className="bg-card rounded-2xl border-l-4 border-primary p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "The number one mistake I see with yard signs? Too much information. A yard sign isn't a brochure — it needs to be readable from 100 feet away at 35 miles per hour. That means bold text, high-contrast colors, and one clear call-to-action."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "Stick to your company name, phone number or website, and a short benefit statement. Use your brand colors and make the text as large as possible. White space is your friend — a clean, simple sign will always outperform a cluttered one. And always go double-sided if you're near a road with two-way traffic."
              </p>
              <div className="mt-6">
                <p className="font-display font-black text-foreground">— David Stein, The Buckeye Branding Czar</p>
                <p className="text-sm text-muted-foreground font-semibold">Buckeye Biz Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Yard Signs & Signage FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Yard Signs & Signage <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions about custom yard signs and outdoor signage for Ohio businesses.
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
            Ready for Yard Signs That Actually Get You{" "}
            <span className="text-glow-white">Noticed?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Weatherproof. Full-color. Wholesale pricing. Let's create signage that brings in new customers.
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
            {["24-Hour Quotes", "Full Pricing Transparency", "Weatherproof Materials", "Ohio Owned & Operated"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YardSignsAndSignage;
