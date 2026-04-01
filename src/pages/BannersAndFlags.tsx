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
  Flag,
  Layers,
  Wind,
  Sticker,
  RectangleHorizontal,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import TrustBadges from "@/components/TrustBadges";

import heroImg from "@/assets/banners-flags-hero.jpg";
import vinylImg from "@/assets/banner-vinyl-product.jpg";
import meshImg from "@/assets/banner-mesh-product.jpg";
import fabricImg from "@/assets/banner-fabric-product.jpg";
import retractableImg from "@/assets/banner-retractable.jpg";
import featherImg from "@/assets/banner-feather-flags.jpg";
import decalsImg from "@/assets/banner-decals-stickers.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const bannerTypes = [
  {
    title: "Vinyl Banners",
    desc: "The workhorse of outdoor advertising. Durable, weatherproof 13oz vinyl with reinforced grommets — perfect for job sites, storefronts, grand openings, and events. Available in any custom size.",
    image: vinylImg,
    icon: RectangleHorizontal,
  },
  {
    title: "Mesh Banners",
    desc: "Designed for windy locations. Micro-perforated mesh allows wind to pass through while maintaining bold, visible graphics. Ideal for fences, construction sites, and elevated installations.",
    image: meshImg,
    icon: Wind,
  },
  {
    title: "Fabric Banners",
    desc: "Premium, wrinkle-resistant fabric with vibrant dye-sublimation printing. Lightweight and portable — perfect for indoor events, trade shows, conferences, and retail displays.",
    image: fabricImg,
    icon: Layers,
  },
  {
    title: "Retractable Banner Stands",
    desc: "Professional roll-up banner stands that set up in seconds. Portable, reusable, and perfect for trade shows, lobbies, open houses, and presentations. Includes carrying case.",
    image: retractableImg,
    icon: Flag,
  },
];

const flagTypes = [
  {
    title: "Feather Flags",
    desc: "Tall, eye-catching teardrop or feather-shaped flags that flutter in the breeze. Available in heights from 7ft to 17ft with ground stakes, cross bases, or water-filled bases for any surface.",
  },
  {
    title: "Blade Flags",
    desc: "Sleek, straight-edge flags that maintain their shape in any wind condition. Bold, modern look that's perfect for car dealerships, retail stores, and outdoor events.",
  },
  {
    title: "Swooper Flags",
    desc: "Ultra-tall, dramatic swooping flags (up to 15ft) that are impossible to miss. Great for roadside visibility, grand openings, and seasonal promotions.",
  },
  {
    title: "Custom Flag Shapes",
    desc: "Need something unique? We produce custom-shaped flags for special events, branding activations, and one-of-a-kind promotional campaigns.",
  },
];

const decalTypes = [
  {
    title: "Die-Cut Logo Stickers",
    desc: "Custom-shaped stickers cut precisely to your logo outline. Perfect for product packaging, mailers, laptops, and giveaways.",
  },
  {
    title: "Window Decals",
    desc: "Static cling or adhesive window decals for storefronts, vehicles, and office doors. Easy to apply and remove without residue.",
  },
  {
    title: "Bumper Stickers",
    desc: "Weather-resistant vinyl bumper stickers with UV-protective lamination. Great for brand awareness campaigns, political campaigns, and events.",
  },
  {
    title: "Floor & Wall Graphics",
    desc: "Large-format adhesive graphics for floors, walls, and windows. Non-slip floor options available for retail, events, and trade shows.",
  },
];

const faqItems = [
  { q: "What sizes do your banners come in?", a: "We produce banners in any custom size. Popular sizes include 2' × 4', 3' × 6', 4' × 8', and 3' × 10'. Just tell us your dimensions and we'll provide a quote within 24 hours." },
  { q: "What material should I choose for outdoor banners?", a: "For most outdoor applications, 13oz vinyl is the industry standard — it's durable, waterproof, and UV-resistant. For windy locations like fences or elevated installations, mesh banners are the best choice as they allow wind to pass through without tearing." },
  { q: "Do banners come with grommets?", a: "Yes! All vinyl and mesh banners include metal grommets in all four corners by default. We can also add grommets every 2 feet along the edges for larger banners, or use pole pockets for hanging on poles or rods." },
  { q: "How do feather flags hold up in wind?", a: "Feather flags are designed to flutter in the wind, which actually makes them more visible. They can withstand moderate winds (15-25 mph). For high-wind areas, we recommend blade flags which maintain their shape better. We always recommend bringing flags indoors during severe weather." },
  { q: "What's the difference between feather flags and blade flags?", a: "Feather flags have a curved, teardrop shape that flutters dramatically in the breeze. Blade flags have a straight, rectangular shape that stays taut and maintains consistent visibility. Both are effective — feather flags are more eye-catching in motion, while blade flags offer better readability." },
  { q: "How long do outdoor banners last?", a: "With proper care, vinyl banners typically last 2-5 years outdoors. Mesh banners last 1-3 years. Fabric banners are best for indoor or short-term outdoor use. All our banners use UV-resistant inks to prevent fading." },
  { q: "Can I get a proof before printing?", a: "Absolutely! Every order includes a free digital proof. We won't print anything until you've reviewed and approved the design. Changes are free at the proof stage." },
  { q: "Do you offer rush production?", a: "Yes! Many banner and flag orders can be completed in 2-3 business days with rush production. Standard turnaround is 5-7 business days. Rush fees may apply and we're always transparent about costs." },
  { q: "What file formats do you accept for printing?", a: 'We accept print-ready PDFs (preferred), Adobe Illustrator (.ai), Photoshop (.psd), and high-resolution JPEG/PNG files. For best results, all files should be 150-300 DPI depending on banner size, with 0.5" bleed on all sides.' },
  { q: "Do you offer design services for banners and flags?", a: "Yes! If you don't have print-ready artwork, our design team can create custom banner, flag, or decal designs that match your brand. Design services are available at competitive rates and include unlimited revisions until you're satisfied." },
];

const trustItems = [
  "24-Hour Quotes",
  "Full Pricing Transparency",
  "Ohio Owned & Operated",
];

const BannersAndFlags = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Banners, Flags & Decals",
    description: "Custom vinyl banners, mesh banners, feather flags, blade flags, and decals for Ohio businesses. 24-hour quotes, wholesale pricing, fast turnaround.",
    url: "https://buckeye-brand-boost.lovable.app/banners-and-flags",
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
          <img src={heroImg} alt="Custom banners, feather flags, and decals displayed at an outdoor event in Columbus Ohio" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Banners, Flags & Decals <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Custom Banners, Flags & Decals That Get You{" "}
              <span className="text-primary">Noticed</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              High-quality event banners, feather flags, job site signs, and small decals — printed fast with 24-hour quotes and full transparency.
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
                  Get Your Custom Banners & Flags Quoted in 24 Hours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8">
              <TrustBadges variant="dark" size="sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Banners & Flags Work */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-8 text-center">
              Why Banners, Flags & Decals Still Drive Results for <span className="text-primary">Ohio Businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Custom banners and flags are among the most versatile and cost-effective marketing tools available. Whether you're promoting a grand opening, marking a job site, attracting foot traffic to your retail store, or branding a trade show booth — banners and flags deliver immediate, high-visibility impact at a fraction of the cost of digital advertising.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For Ohio businesses, outdoor banners and feather flags are especially powerful. They're visible from the road, they work 24/7, and they create thousands of daily impressions in your local market. Pair them with custom decals and stickers for packaging, vehicles, and giveaways — and you've got a complete, low-cost brand awareness strategy that keeps working long after the initial investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Banner Types – 2x2 Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <RectangleHorizontal className="w-4 h-4" /> Banner Types
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Popular <span className="text-primary">Banner Types</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From heavy-duty outdoor vinyl to elegant fabric displays — we produce every type of banner your business needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {bannerTypes.map((cat, i) => (
              <motion.div key={cat.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group bg-card overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={cat.image} alt={`${cat.title} for Ohio businesses`} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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

      {/* Feather Flags & Blade Flags */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={featherImg} alt="Colorful feather flags and blade flags displayed outside an Ohio business" loading="lazy" width={800} height={600} className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
                <Flag className="w-4 h-4" /> Flags
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-6">
                Feather Flags & <span className="text-primary">Blade Flags</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nothing grabs roadside attention like a tall, fluttering flag. Our custom feather flags and blade flags are designed for maximum visibility and durability — available in multiple heights with versatile base options for any surface.
              </p>

              <div className="space-y-5">
                {flagTypes.map((flag, i) => (
                  <motion.div key={flag.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">{flag.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{flag.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact" className="mt-8 inline-block">
                <Button className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.2)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.4)] transition-all duration-300 group/btn uppercase tracking-wider px-8 py-6">
                  Get a Custom Flag Quote
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Small Decals & Stickers */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
                <Sticker className="w-4 h-4" /> Decals & Stickers
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-6">
                Custom Decals & <span className="text-primary">Stickers</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From small logo stickers to large wall graphics, our custom decals are printed on premium vinyl with UV-protective lamination for long-lasting durability. Perfect for packaging, vehicles, storefronts, and promotional giveaways.
              </p>

              <div className="space-y-5">
                {decalTypes.map((decal, i) => (
                  <motion.div key={decal.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">{decal.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{decal.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact" className="mt-8 inline-block">
                <Button className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.2)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.4)] transition-all duration-300 group/btn uppercase tracking-wider px-8 py-6">
                  Get a Custom Decal Quote
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
              <img src={decalsImg} alt="Custom vinyl decals and stickers with business logos for Ohio companies" loading="lazy" width={800} height={600} className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Tips from David */}
      <section className="py-20 lg:py-28 bg-background">
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
                "Banners and flags need to communicate one thing instantly: who you are and what you want people to do. Don't overcrowd them with text. Your company name, one strong benefit statement, and a phone number or website — that's it."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "For feather flags, stick to bold colors and minimal text — they're moving, so people only get 2-3 seconds to read them. For vinyl banners, use high-contrast colors (white text on dark backgrounds works great from a distance) and make your call-to-action the largest element. And always, always include grommets every 2 feet on large banners — Ohio wind is no joke."
              </p>
              <div className="mt-6">
                <p className="font-display font-black text-foreground">— David Stein, The Buckeye Branding Czar</p>
                <p className="text-sm text-muted-foreground font-semibold">Buckeye Biz Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Banners, Flags & Decals <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions about custom banners, flags, and decals for Ohio businesses.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <AccordionItem value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-6 overflow-hidden hover:shadow-md transition-shadow">
                  <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary py-5 text-base">
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
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Ready to get custom banners, flags & decals for your Ohio business?
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
                <Phone className="w-6 h-6" />
                Get Your Custom Banners & Flags Quoted in 24 Hours
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8">
            <TrustBadges variant="dark" size="sm" />
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {trustItems.map((item, i) => (
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

export default BannersAndFlags;
