"use client";
import { motion } from "framer-motion";
import { Link } from "@/lib/compat/router";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  Truck,
  Award,
  Shield,
  Shirt,
  Palette,
  Megaphone,
  FileText,
  LayoutGrid,
  Mail,
  Users,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePageSEO } from "@/hooks/usePageTitle";

const PHOTO_BASE = "/photos";
const ROOFING_HERO = `${PHOTO_BASE}/roofing-hero-sunset-crew.jpg`;
const ROOFING_JOBSITE = `${PHOTO_BASE}/roofing-van-wrap-titan.jpg`;
const ROOFING_BEFORE_AFTER = `${PHOTO_BASE}/roofing-fleet-briggs.jpg`;

const galleryPhotos = [
  { src: `${PHOTO_BASE}/roofing-van-wrap-titan.jpg`, alt: "Full roofing company van wrap with bold mascot graphics", label: "Full Van Wrap" },
  { src: `${PHOTO_BASE}/roofing-truck-wrap-castles.jpg`, alt: "Red roofing contractor pickup truck with full vehicle graphics", label: "Pickup Truck Wrap" },
  { src: `${PHOTO_BASE}/roofing-truck-wrap-maspeth.jpg`, alt: "Roofing pickup truck shown from multiple angles with branded graphics", label: "Multi-Angle Truck Wrap" },
  { src: `${PHOTO_BASE}/roofing-yard-sign-fair.jpg`, alt: "Roofing yard signs staked in lawn for storm restoration marketing", label: "Yard Signs" },
  { src: `${PHOTO_BASE}/roofing-yard-sign-spartan.jpg`, alt: "Large roofing contractor yard sign in residential lawn", label: "Large Format Yard Sign" },
  { src: `${PHOTO_BASE}/roofing-yard-sign-contractors.jpg`, alt: "Stack of roofing contractor free estimates yard signs", label: "Bulk Yard Signs" },
  { src: `${PHOTO_BASE}/roofing-door-hanger-knock.jpg`, alt: "Roofing company door hanger with services and free estimate offer", label: "Door Hangers" },
  { src: `${PHOTO_BASE}/roofing-door-hanger-baker.jpg`, alt: "Front and back of professional roofing contractor door hanger", label: "Premium Door Hangers" },
  { src: `${PHOTO_BASE}/roofing-carbonless-form.jpg`, alt: "Multi-part carbonless contract forms for roofing job sites", label: "Carbonless Contract Forms" },
  { src: `${PHOTO_BASE}/roofing-pull-up-banners.jpg`, alt: "Retractable roofing trade show banners with services and offers", label: "Retractable Banners" },
];

const products = [
  {
    icon: Truck,
    title: "Vehicle wraps and fleet graphics",
    description:
      "Every truck, van and trailer becomes a billboard that works 24/7. Easy to read, built to last, ready for Ohio weather.",
    image: `${PHOTO_BASE}/roofing-truck-wrap-bluepeaks.jpg`,
    imageAlt: "Roofing contractor pickup truck with white and blue branded vehicle wrap",
  },
  {
    icon: Shirt,
    title: "Crew apparel and safety wear",
    description:
      "Embroidered polos, t-shirts, hoodies and hi-vis vests made for the job site. Comfortable, branded and built to last.",
    image: `${PHOTO_BASE}/roofing-apparel-titan.jpg`,
    imageAlt: "Example: roofing crew polo with embroidered logo",
  },
  {
    icon: Palette,
    title: "Logo design and brand refresh",
    description:
      "A cleaned-up logo or a full new look. Give your company the polish your established competitors already have.",
    image: `${PHOTO_BASE}/roofing-business-cards-american.jpg`,
    imageAlt: "Example: roofing company business cards with logo and identity design",
  },
  {
    icon: Megaphone,
    title: "Door hangers, yard signs and fertilizer signs",
    description:
      "Neighborhood marketing that brings in leads while you're on the roof. Printed tough enough for outdoor use.",
    image: `${PHOTO_BASE}/roofing-yard-sign-shingles.jpg`,
    imageAlt: "Roofing contractors free estimates yard sign with shingles graphic",
  },
  {
    icon: FileText,
    title: "Sales sheets, folders, cards and QR stickers",
    description:
      "Sales sheets, folders, business cards and QR code stickers. Help close the bid and leave your name in the customer's hands.",
    image: `${PHOTO_BASE}/roofing-qr-sticker-scan.jpg`,
    imageAlt: "Large Scan Me QR code window sticker on a glass storefront door",
  },
  {
    icon: LayoutGrid,
    title: "Carbonless contracts and job-site forms",
    description:
      "Estimates, work orders, invoices, inspection forms and contracts. Branded, numbered and built for the field.",
    image: `${PHOTO_BASE}/roofing-carbonless-form.jpg`,
    imageAlt: "Multi-part carbonless contract forms for roofing job sites",
  },
  {
    icon: Users,
    title: "Trade show booths and event displays",
    description:
      "Retractable banners, table throws, backdrops and giveaways for home shows, expos and community events.",
    image: `${PHOTO_BASE}/roofing-trade-show-shift.jpg`,
    imageAlt: "Example: roofing trade show booth with branded backdrop and retractable banner",
  },
  {
    icon: Mail,
    title: "Postcards and direct mail",
    description:
      "Targeted neighborhood postcards and direct mail. Fill your pipeline before storm season hits.",
    image: `${PHOTO_BASE}/roofing-direct-mail-postcard.jpg`,
    imageAlt: "Roofing storm damage direct mail postcard delivered to a residential mailbox",
  },
];

const faqs = [
  {
    q: "Do you work with both residential and commercial roofing companies?",
    a: "Yes. Residential roofers get door hangers, yard signs and crew apparel that build local trust. Commercial and industrial roofers get tough fleet wraps, hi-vis gear, carbonless contracts and sales materials that hold up on the job.",
  },
  {
    q: "How quickly can you deliver fleet wraps or large orders during busy season?",
    a: "Most crew apparel and printed materials ship in 1–3 business days. Full wraps and bigger custom orders usually take 5–10 business days, depending on the job. Need something fast for a neighborhood blitz or a big bid? Ask about rush options.",
  },
  {
    q: "Can you help with last-minute door hangers or yard signs?",
    a: "Yes. Plenty of roofers come to us for fast door hangers and yard signs right before a push. We can usually deliver in 2–3 days.",
  },
  {
    q: "Do you offer volume discounts for larger crews or multi-location companies?",
    a: "Yes. Orders of 10+ crew polos or hoodies, full fleet graphics packages and bigger print runs get real discounts. Tell us your crew size and we'll price it.",
  },
  {
    q: "What makes your fleet wraps different from other shops?",
    a: "We use materials that stand up to Ohio weather, road salt and job sites. And we make sure the design reads well up close and from across the street. Your truck is a moving billboard.",
  },
  {
    q: "Do you help with logo design or full branding refreshes?",
    a: "Yes. A lot of roofers come to us when they rebrand or want trucks, uniforms, signs and sales materials to finally match. We can start from scratch or clean up what you have.",
  },
  {
    q: "How does the free cost comparison work?",
    a: "Send us a list or photos of what you buy now: uniforms, door hangers, signs, forms. We'll send back a side-by-side showing what we can do at the same or better quality. Often for less.",
  },
  {
    q: "Can we order just a few items to test quality?",
    a: "Sure. Plenty of contractors start small with a few polos, a batch of door hangers or one truck wrap. Then they order more. We'd rather earn the bigger order than push it.",
  },
];

const audiences = [
  "Residential roofers",
  "Commercial roofing contractors",
  "Industrial roofing contractors",
  "Storm restoration specialists",
  "Multi-location roofing companies",
  "Exterior and siding contractors",
];

const Roofing = () => {
  usePageSEO({
    title: "Fleet Wraps, Crew Apparel and Marketing for Central Ohio Roofers",
    description:
      "Vehicle wraps, crew apparel, door hangers, yard signs and carbonless forms for Central Ohio roofing contractors. We shop top vendors. Free quotes within 24 hours.",
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ROOFING_HERO}
            alt="Roofing crew in safety vests and hard hats working on a residential roof at golden hour"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[hsl(0,0%,4%/0.6)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,4%/0.85)] via-[hsl(0,0%,4%/0.55)] to-[hsl(0,0%,4%/0.75)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%/0.4)] via-transparent to-[hsl(0,0%,4%/0.95)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0,0%,4%/0.25)_0%,_hsl(0,0%,4%/0.8)_80%)]" />
        </div>
        <div className="container relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30 backdrop-blur-sm"
          >
            <Hammer className="w-4 h-4" /> Central Ohio roofing contractors
          </motion.div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.98), 0 4px 16px rgba(0,0,0,0.95), 0 8px 40px rgba(0,0,0,0.85), 0 0 80px rgba(0,0,0,0.7)" }}
          >
            Make your trucks and crews look{" "}
            <span
              className="text-primary text-glow-red inline-block"
              style={{
                WebkitTextStroke: "1.5px hsl(0 0% 100%)",
                textShadow:
                  "0 0 2px hsl(0 0% 100% / 0.9), 0 2px 8px rgba(0,0,0,0.95), 0 0 30px hsl(0 85% 40% / 0.7), 0 0 60px hsl(0 85% 40% / 0.4)",
                paintOrder: "stroke fill",
              }}
            >
              as strong as your work
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground font-medium leading-relaxed max-w-3xl mx-auto mb-10"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.98), 0 4px 18px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)" }}
          >
            Vehicle wraps, tough crew apparel, door hangers, yard signs and marketing materials for busy Central Ohio roofers.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl transition-all duration-300 group "
            >
              Get a free roofing branding quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 1: Why roofing contractors choose us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
                <Shield className="w-4 h-4" /> Why roofing contractors choose us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                Built for crews that work hard{" "}
                <span className="text-primary">all season long</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Spring and summer are your busiest months. You need materials that survive the field, look sharp on the road and bring in leads. You don't have time to chase five vendors.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                One contact for wraps, apparel, signs, print and marketing. We move fast. Your season won't wait.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border-2 border-border "
            >
              <img
                src={ROOFING_JOBSITE}
                alt="Fully wrapped roofing service van with bold branding parked at job site"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our story */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
                <Award className="w-4 h-4" /> Our story
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                Real experience{" "}
                <span className="text-primary">building businesses</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I co-founded BeerTubes and grew it from <span className="font-bold text-foreground">$79K to $4.5M</span>. Then I built a brewery and restaurant group to <span className="font-bold text-foreground">100+ employees</span>.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I know what crew-based companies with fleets need. Materials that survive tough job sites. Branding that looks sharp on the road. One reliable partner who delivers fast when busy season hits.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                We handle it all for roofers: vehicle wraps, crew uniforms and hi-vis gear, door hangers, yard signs, carbonless contracts, sales materials and more.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Think of us as your <span className="font-bold text-foreground">branding concierge</span>. We handle the details. You run jobs and grow the business.
              </p>
              <p className="mt-6 text-sm font-bold text-primary ">
                David Stein, co-founder, Buckeye Biz Hub
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1 relative rounded-2xl overflow-hidden border-2 border-border "
            >
              <img
                src={ROOFING_BEFORE_AFTER}
                alt="Example: roofing pickup truck with full green and white vehicle wrap"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(0,0%,4%/0.95)] to-transparent">
                <p className="text-primary-foreground font-bold text-lg">Fleet branding example</p>
                <p className="text-primary-foreground/70 text-sm">A look that turns heads on the road</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Products and solutions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <Sparkles className="w-4 h-4" /> Products and solutions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight">
              What a roofing crew needs to{" "}
              <span className="text-primary">win more work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-card border-2 border-border hover:border-primary/40 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ohio-grey-light">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-black text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing examples gallery */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <Sparkles className="w-4 h-4" /> Examples
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Examples of what we <span className="text-primary">build for roofers</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Truck wraps, yard signs, door hangers, carbonless contracts and trade show banners. The mix Central Ohio roofing crews use every season.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="group relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300 bg-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-3 left-3 right-3 flex justify-start pointer-events-none">
                  <span className="inline-block bg-primary text-primary-foreground text-[10px] md:text-xs font-black px-3 py-1.5 rounded-full shadow-lg border border-primary-foreground/20">
                    {photo.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Who we serve */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <Users className="w-4 h-4" /> Who we serve
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
              Built for roofing contractors{" "}
              <span className="text-primary">across Central Ohio</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Residential, commercial and industrial roofers, storm restoration specialists and growing multi-location companies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {audiences.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <HelpCircle className="w-4 h-4" /> Frequently asked questions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Straight answers for{" "}
              <span className="text-primary">roofing contractors</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Questions we hear from Central Ohio roofers, answered like we would at the job site.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="bg-card border-2 border-border rounded-2xl px-6 md:px-7 hover:border-primary/40 transition-all data-[state=open]:border-primary/50 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-black text-foreground hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Free Cost Comparison */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Free cost comparison. No commitment.
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us what you spend now on branded materials, uniforms, signs or print. We'll show you what we can do for less.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-foreground text-background font-semibold px-10 py-4 rounded-2xl hover:bg-foreground/85 transition-colors"
            >
              Get your free comparison
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] border-2 border-primary/40 rounded-3xl p-10 md:p-14 text-center "
          >
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Busy season comes fast. Make your brand look{" "}
              <span className="text-primary">as strong as your work.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Fleet wraps, crew apparel, door hangers, yard signs or a full marketing rollout. Let's talk. Free consult, honest pricing, no pressure.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl transition-all duration-300 group "
              >
                Get a free consult
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-6">
              Or browse{" "}
              <Link to="/industries" className="text-primary font-bold hover:underline">
                all industries we serve
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roofing;
