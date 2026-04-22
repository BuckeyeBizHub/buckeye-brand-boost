import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  Award,
  Leaf,
  Shirt,
  Megaphone,
  FileText,
  LayoutGrid,
  Mail,
  Users,
  Sparkles,
  HelpCircle,
  Gift,
  CreditCard,
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
import { localBusinessSchema, BUCKEYE_LOCAL_BUSINESS_OPTS, breadcrumbFromPath } from "@/lib/structured-data";
import lawncareHero from "@/assets/lawncare-hero.jpg";
import lawncareTrailerWrap from "@/assets/lawncare-trailer-wrap.jpg";
import lawncareStoryVan from "@/assets/lawncare-story-van.jpg";
import lawncarePostcard from "@/assets/lawncare-postcard.jpg";
import lawncareYardSign from "@/assets/lawncare-yard-sign.jpg";

const PHOTO_BASE = "https://ustxmgctwrjdzcpsrewb.supabase.co/storage/v1/object/public/photos";
// Reusing roofing/contractor photos as visual placeholders — same fleet/crew/sign categories apply to landscaping
const HERO = lawncareHero;
const JOBSITE = `${PHOTO_BASE}/roofing-van-wrap-titan.jpg`;
const STORY = `${PHOTO_BASE}/roofing-fleet-briggs.jpg`;

const galleryPhotos = [
  { src: `${PHOTO_BASE}/roofing-van-wrap-titan.jpg`, alt: "Full landscaping company van wrap with bold branding", label: "Full Van Wrap" },
  { src: `${PHOTO_BASE}/roofing-truck-wrap-castles.jpg`, alt: "Branded landscaping pickup truck with full vehicle graphics", label: "Pickup Truck Wrap" },
  { src: `${PHOTO_BASE}/roofing-truck-wrap-maspeth.jpg`, alt: "Multi-angle view of branded landscaping truck wrap", label: "Multi-Angle Truck Wrap" },
  { src: `${PHOTO_BASE}/roofing-yard-sign-fair.jpg`, alt: "Lawn care yard signs staked in residential lawn", label: "Yard Signs" },
  { src: `${PHOTO_BASE}/roofing-yard-sign-spartan.jpg`, alt: "Large landscaping company yard sign in residential lawn", label: "Large Format Yard Sign" },
  { src: `${PHOTO_BASE}/roofing-yard-sign-contractors.jpg`, alt: "Stack of landscaping company free estimate yard signs", label: "Bulk Yard Signs" },
  { src: `${PHOTO_BASE}/roofing-door-hanger-knock.jpg`, alt: "Lawn care company door hanger with services and free quote offer", label: "Door Hangers" },
  { src: `${PHOTO_BASE}/roofing-door-hanger-baker.jpg`, alt: "Front and back of professional landscaping door hanger", label: "Premium Door Hangers" },
  { src: `${PHOTO_BASE}/roofing-carbonless-form.jpg`, alt: "Multi-part carbonless estimate forms for landscaping job sites", label: "Carbonless Forms" },
  { src: `${PHOTO_BASE}/roofing-pull-up-banners.jpg`, alt: "Retractable landscaping company banners for home and garden shows", label: "Retractable Banners" },
];

const products = [
  {
    icon: Truck,
    title: "Vehicle Wraps & Fleet Graphics",
    description:
      "Full wraps, partial wraps, and magnetic signs for trucks, trailers, and equipment that turn every mile into a neighborhood impression.",
    image: `${PHOTO_BASE}/roofing-truck-wrap-bluepeaks.jpg`,
    imageAlt: "Landscaping pickup truck with branded vehicle wrap",
  },
  {
    icon: Shirt,
    title: "Crew T-Shirts, Polos & Safety Gear",
    description:
      "Embroidered polos, branded t-shirts, hoodies, and high-visibility safety vests that keep every crew member looking consistent and professional.",
    image: `${PHOTO_BASE}/roofing-apparel-titan.jpg`,
    imageAlt: "Branded landscaping crew polo shirt with embroidered logo",
  },
  {
    icon: Megaphone,
    title: "Door Hangers",
    description:
      "High-impact, weather-resistant door hangers that generate callbacks from the neighborhoods you're already working in.",
    image: `${PHOTO_BASE}/roofing-door-hanger-knock.jpg`,
    imageAlt: "Lawn care door hanger with services and seasonal offers",
  },
  {
    icon: Leaf,
    title: "Yard Signs & Property Signage",
    description:
      "Bold, durable yard signs that advertise your work while you're doing it — turning every active job site into a lead magnet.",
    image: lawncareYardSign,
    imageAlt: "Branded lawn care yard sign promoting fall clean up service staked in a residential lawn",
  },
  {
    icon: Mail,
    title: "Seasonal Postcards & Direct Mail",
    description:
      "Targeted neighborhood postcard campaigns timed for spring startup, fall cleanup, and snow removal season.",
    image: lawncarePostcard,
    imageAlt: "Spring landscaping promotional postcard with seasonal offers and free estimate callouts",
  },
  {
    icon: CreditCard,
    title: "Business Cards & Leave-Behinds",
    description:
      "Professional business cards and branded door cards that make every crew interaction a referral opportunity.",
    image: `${PHOTO_BASE}/roofing-business-cards-american.jpg`,
    imageAlt: "Branded landscaping company business cards with logo",
  },
  {
    icon: FileText,
    title: "Carbonless Estimate & Job-Site Forms",
    description:
      "Branded, numbered estimate forms, work orders, and service agreements built for the field.",
    image: `${PHOTO_BASE}/roofing-carbonless-form.jpg`,
    imageAlt: "Multi-part carbonless estimate forms for landscaping job sites",
  },
  {
    icon: Gift,
    title: "Promotional Products & Client Gifts",
    description:
      "Branded drinkware, koozies, hats, and seasonal gifts that keep your company name visible with property managers and commercial clients.",
    image: `${PHOTO_BASE}/roofing-qr-sticker-scan.jpg`,
    imageAlt: "Branded landscaping promotional products and client gifts",
  },
];

const faqs = [
  {
    q: "Do you work with both residential lawn care companies and large commercial landscaping operations?",
    a: "Yes. We help solo operators and small residential lawn care companies with eye-catching door hangers, yard signs, and branded crew shirts that build local trust, and we support commercial landscaping contractors and multi-crew operations with full fleet wraps, embroidered uniforms, high-vis safety gear, carbonless estimate forms, and seasonal marketing programs.",
  },
  {
    q: "How quickly can you turn around fleet wraps and apparel before the spring rush?",
    a: "Most standard crew apparel and printed materials ship within 1–3 business days. Full vehicle wraps and larger custom apparel orders typically take 5–10 business days depending on complexity. We strongly recommend planning fleet graphics and uniform orders in late winter so your trucks and crews are ready when spring startup hits.",
  },
  {
    q: "Do you offer volume discounts for multi-crew operations?",
    a: "Yes. We provide meaningful discounts for orders of 10+ crew polos or t-shirts, full fleet graphics packages, or larger quantities of door hangers and yard signs. Tell us your crew size and seasonal volume and we'll put together customized pricing.",
  },
  {
    q: "Can we order just a few items first to test the quality?",
    a: "Absolutely. Many landscaping companies start with a small test order — a batch of crew polos, a stack of door hangers, or a single truck wrap — before committing to larger seasonal quantities. We'd rather earn the bigger order than push it.",
  },
  {
    q: "Do you do graphics for trailers, mowers, and smaller equipment?",
    a: "Yes. We produce decals, partial wraps, and lettering for enclosed and open trailers, zero-turn mowers, skid steers, and smaller equipment so every piece of gear on the job site reinforces your brand.",
  },
  {
    q: "Can you help us plan a full seasonal marketing program?",
    a: "Yes. We help lawn care and landscaping companies build out spring startup, fall cleanup, and snow removal marketing programs — combining door hangers, postcards, yard signs, and crew apparel into one coordinated rollout instead of last-minute one-offs.",
  },
  {
    q: "How does the free cost comparison work?",
    a: "Send us a list or photos of what you're currently buying — uniforms, door hangers, yard signs, estimate forms, and so on — and we'll provide a side-by-side breakdown showing what we can deliver for the same or better quality, often with noticeable savings.",
  },
  {
    q: "Will the materials hold up to mud, rain, and heavy field use?",
    a: "Yes. We spec materials specifically for field conditions — UV-stable wrap films, weather-resistant coroplast and aluminum yard signs, durable polyester polos, and waterproof carbonless forms — so everything survives the season instead of falling apart by July.",
  },
];

const audiences = [
  "Residential Lawn Care Companies",
  "Commercial Landscaping Contractors",
  "Snow Removal & Seasonal Services",
  "Tree Service & Arborists",
  "Irrigation & Outdoor Lighting Companies",
  "Property Maintenance & Multi-Crew Operations",
];

const LawnCareLandscaping = () => {
  usePageSEO({
    title:
      "Fleet Wraps, Crew Apparel & Marketing Materials for Ohio Lawn Care & Landscaping Companies",
    description:
      "Vehicle wraps, crew t-shirts and polos, door hangers, yard signs, and seasonal marketing materials for Central Ohio lawn care and landscaping companies. Free 24-hour quotes.",
  });

  const localBusinessJsonLd = localBusinessSchema({
    ...BUCKEYE_LOCAL_BUSINESS_OPTS,
    name: "Buckeye Biz Hub – Lawn Care & Landscaping Branding",
    url: "https://www.buckeyebizhub.com/lawn-care-landscaping",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbFromPath("/lawn-care-landscaping")) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO}
            alt="Lush, freshly mowed Central Ohio lawn at golden hour with soft tree line in the background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Heavy contrast stack: ensures bright sky/grass don't wash out white headline */}
          <div className="absolute inset-0 bg-[hsl(0,0%,4%/0.82)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,4%/0.95)] via-[hsl(0,0%,4%/0.78)] to-[hsl(0,0%,4%/0.92)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%/0.85)] via-[hsl(0,0%,4%/0.6)] to-[hsl(0,0%,4%/0.98)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0,0%,4%/0.45)_0%,_hsl(0,0%,4%/0.92)_85%)]" />
        </div>
        <div className="container relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30 backdrop-blur-sm"
          >
            <Leaf className="w-4 h-4" /> Ohio Lawn Care & Landscaping Companies
          </motion.div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.98), 0 4px 16px rgba(0,0,0,0.95), 0 8px 40px rgba(0,0,0,0.85), 0 0 80px rgba(0,0,0,0.7)" }}
          >
            Every Truck on the Road Is a Billboard —{" "}
            <span
              className="text-primary text-glow-red inline-block"
              style={{
                WebkitTextStroke: "1.5px hsl(0 0% 100%)",
                textShadow:
                  "0 0 2px hsl(0 0% 100% / 0.9), 0 2px 8px rgba(0,0,0,0.95), 0 0 30px hsl(0 85% 40% / 0.7), 0 0 60px hsl(0 85% 40% / 0.4)",
                paintOrder: "stroke fill",
              }}
            >
              Make Sure It's Working for You
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground font-medium leading-relaxed max-w-3xl mx-auto mb-10"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.98), 0 4px 18px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)" }}
          >
            Fleet graphics, crew apparel, door hangers, yard signs, and seasonal marketing materials — for Ohio lawn care and landscaping companies that grow by being seen.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
            >
              Get Your Free Landscaping Branding Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Professional Courtesy Banner */}
      <section className="bg-primary/10 border-b border-primary/20 py-4">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-primary">
            Professional Courtesy for Ohio Businesses:{" "}
            <span className="font-semibold">20% off your first order</span>{" "}
            on our already wholesale pricing. No commitment required.
          </p>
        </div>
      </section>

      {/* Section 1 — Why Ohio Lawn Care Companies Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
                <Leaf className="w-4 h-4" /> Why Ohio Lawn Care Companies Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                Your Trucks Are in Every Neighborhood.{" "}
                <span className="text-primary">We Make Sure They're Remembered.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                In lawn care and landscaping, your trucks spend all day driving through the neighborhoods where your next customers live. Every vehicle is a lead-generation opportunity — if it's branded right.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We work with Central Ohio lawn care companies, landscaping crews, and property maintenance operations to make sure every truck, every crew member, and every door hanger tells the same consistent story about your company.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border-2 border-border shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
            >
              <img
                src={lawncareTrailerWrap}
                alt="Fully wrapped landscaping company trailer with full-color branding, services list, and contact info"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Our Story */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
                <Award className="w-4 h-4" /> Our Story
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                We Know What It Takes to Turn Trucks and Crews Into a{" "}
                <span className="text-primary">Marketing Machine</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I've started <span className="font-bold text-foreground">3 businesses</span> from the ground up here in Central Ohio. In the last 20 months, I helped a local vehicle wrap company <span className="font-bold text-foreground">double their fleet branding division's revenue</span> — working directly with contractors on fleet graphics, vehicle wraps, and branded crew gear that actually hold up on job sites.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I've also spent <span className="font-bold text-foreground">15+ years</span> helping my wife, Dr. Kerry Stein, run Marion Endodontics in Marion, Ohio — handling all the procurement, branding, and materials for a busy professional practice. That experience taught me what it means to need a partner who delivers on time, every time, without excuses.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At Buckeye Biz Hub, we bring that same inside knowledge to Ohio lawn care and landscaping companies. We know what holds up in the field and what doesn't.
              </p>
              <p className="mt-6 text-sm font-bold text-primary uppercase tracking-wider">
                — David Stein, Your Buckeye Branding Concierge
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1 relative rounded-2xl overflow-hidden border-2 border-border shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
            >
              <img
                src={lawncareStoryVan}
                alt="Brightly wrapped lawn care service van parked in front of a freshly striped residential lawn"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(0,0%,4%/0.95)] to-transparent">
                <p className="text-primary-foreground font-bold text-lg">Real Fleet Branding</p>
                <p className="text-primary-foreground/70 text-sm">The kind of look that wins the next neighborhood</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Products & Solutions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-4 h-4" /> Products & Solutions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Everything Your Crews, Fleet, and Marketing Need to{" "}
              <span className="text-primary">Look Professional</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From the first truck that pulls up to the last yard sign in the ground — we handle all of it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Real Landscaping Work Gallery */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-4 h-4" /> Real Field Work
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Examples of What We <span className="text-primary">Build for Crews on the Ground</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Truck wraps, yard signs, door hangers, carbonless forms, and event banners — the exact mix Central Ohio landscaping crews use every season.
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
                  <span className="inline-block bg-primary text-primary-foreground text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-primary-foreground/20">
                    {photo.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Who We Serve */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Users className="w-4 h-4" /> Who We Serve
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
              Built for Every Type of{" "}
              <span className="text-primary">Ohio Landscaping Operation</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From solo residential operators to multi-crew commercial landscaping contractors and seasonal snow removal teams across Central Ohio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3"
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
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Honest Answers for{" "}
              <span className="text-primary">Lawn Care & Landscaping Companies</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real questions we hear from Central Ohio landscaping crews — answered the way we'd answer them at the job site.
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
              Free Cost Comparison — No Commitment
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us what you're currently spending on branded materials, uniforms, signage, or printed items and we'll show you exactly what we can provide for less — often with significant savings.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-2xl hover:bg-ohio-red-light transition-colors"
            >
              Request Your Free Comparison
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
            className="bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] border-2 border-primary/40 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
          >
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Ready to Turn Every Truck and Crew Into a{" "}
              <span className="text-primary">Lead-Generating Machine?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We offer free 24-hour quotes and a no-obligation cost comparison showing exactly what our wholesale network can provide versus what you're currently paying.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
                >
                  Get Your Free Landscaping Branding Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/industries">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/40 hover:border-primary text-foreground hover:bg-primary/5 font-black text-base md:text-lg px-10 py-7 rounded-xl transition-all duration-300 group uppercase tracking-wider"
                >
                  See All Industries We Serve
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LawnCareLandscaping;
