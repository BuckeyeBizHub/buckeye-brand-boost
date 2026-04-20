import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const PHOTO_BASE = "https://ustxmgctwrjdzcpsrewb.supabase.co/storage/v1/object/public/photos";
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
    title: "Full Vehicle Wraps & Fleet Graphics",
    description:
      "Turn every truck, van, and trailer into a 24/7 rolling billboard — designed for visibility, durability, and Ohio weather.",
    image: `${PHOTO_BASE}/roofing-truck-wrap-bluepeaks.jpg`,
    imageAlt: "Roofing contractor pickup truck with white and blue branded vehicle wrap",
  },
  {
    icon: Shirt,
    title: "Crew Apparel & Safety Wear",
    description:
      "Embroidered polos, t-shirts, hoodies, and high-vis safety vests built for the job site — comfortable, branded, and long-lasting.",
    image: `${PHOTO_BASE}/roofing-apparel-titan.jpg`,
    imageAlt: "Titan Roofing branded blue polo shirt with embroidered logo, packed for crew delivery",
  },
  {
    icon: Palette,
    title: "Logo Design & Complete Branding Refresh",
    description:
      "From logo refinement to full visual identity systems — give your roofing company the polished look established competitors have.",
    image: `${PHOTO_BASE}/roofing-business-cards-american.jpg`,
    imageAlt: "American Roofing branded business cards showcasing complete logo and identity design",
  },
  {
    icon: Megaphone,
    title: "Door Hangers, Yard Signs & Fertilizer Signs",
    description:
      "High-impact neighborhood marketing that drives leads while you're on a job — printed weather-tough for outdoor use.",
    image: `${PHOTO_BASE}/roofing-yard-sign-shingles.jpg`,
    imageAlt: "Roofing contractors free estimates yard sign with shingles graphic",
  },
  {
    icon: FileText,
    title: "Sales Sheets, Folders, Cards & QR Stickers",
    description:
      "Sales sheets, presentation folders, business cards, and QR code stickers that close more bids and put your brand in every customer's hands.",
    image: `${PHOTO_BASE}/roofing-qr-sticker-scan.jpg`,
    imageAlt: "Large Scan Me QR code window sticker on a glass storefront door",
  },
  {
    icon: LayoutGrid,
    title: "Carbonless Contract & Job-Site Forms",
    description:
      "Estimates, work orders, invoices, inspection forms, and contracts — branded, numbered, and built for the field.",
    image: `${PHOTO_BASE}/roofing-carbonless-form.jpg`,
    imageAlt: "Multi-part carbonless contract forms for roofing job sites",
  },
  {
    icon: Users,
    title: "Trade Show Booths & Event Displays",
    description:
      "Retractable banners, table throws, branded backdrops, and giveaways for home shows, expos, and community events.",
    image: `${PHOTO_BASE}/roofing-trade-show-shift.jpg`,
    imageAlt: "Shift Roofing & Exteriors trade show booth with branded backdrop, retractable banner, and team",
  },
  {
    icon: Mail,
    title: "Postcards & Direct-Mail Campaigns",
    description:
      "Targeted neighborhood postcard campaigns and direct-mail programs that fill your pipeline before storm season ramps up.",
    image: `${PHOTO_BASE}/roofing-direct-mail-postcard.jpg`,
    imageAlt: "Roofing storm damage direct mail postcard delivered to a residential mailbox",
  },
];

const faqs = [
  {
    q: "Do you work with both residential and commercial roofing companies?",
    a: "Yes. We help residential roofers with eye-catching door hangers, yard signs, and crew apparel that builds local trust, and we support commercial and industrial roofers with durable fleet wraps, high-vis safety gear, carbonless contract forms, and professional sales materials that hold up on job sites.",
  },
  {
    q: "How quickly can you deliver fleet wraps or large orders during busy season?",
    a: "Most standard crew apparel and printed materials ship within 1–3 business days. Full vehicle wraps and larger custom orders typically take 5–10 business days depending on complexity. We also offer rush options when you need something fast for a neighborhood blitz or a big bid.",
  },
  {
    q: "Can you help with last-minute door hangers or yard signs?",
    a: "Absolutely. Many roofing companies use us for quick-turnaround door hangers and yard signs before a targeted marketing push. We can usually deliver these in 2–3 days.",
  },
  {
    q: "Do you offer volume discounts for larger crews or multi-location companies?",
    a: "Yes. We provide meaningful discounts for orders of 10+ crew polos or hoodies, full fleet graphics packages, or larger quantities of printed materials. Just let us know your crew size and we'll put together customized pricing.",
  },
  {
    q: "What makes your fleet wraps different from other shops?",
    a: "We focus on durable, high-quality materials that stand up to Ohio weather, road salt, and job-site conditions. We also make sure the design looks professional both up close and from a distance — because your truck is a moving billboard.",
  },
  {
    q: "Do you help with logo design or full branding refreshes?",
    a: "Yes. Many roofing companies come to us when they're rebranding or want a more cohesive look across trucks, uniforms, signs, and sales materials. We can start from scratch or refine what you already have.",
  },
  {
    q: "How does the free cost comparison work?",
    a: "Send us a list or photos of what you're currently buying — uniforms, door hangers, signs, forms, and so on — and we'll provide a side-by-side breakdown showing what we can deliver for the same or better quality, often with noticeable savings.",
  },
  {
    q: "Can we order just a few items to test quality?",
    a: "Of course. Many contractors start with a small test order — crew polos, a batch of door hangers, or a single truck wrap — before committing to larger quantities. We'd rather earn the bigger order than push it.",
  },
];

const audiences = [
  "Residential Roofers",
  "Commercial Roofing Contractors",
  "Industrial Roofing Contractors",
  "Storm Restoration Specialists",
  "Multi-Location Roofing Operations",
  "Exterior & Siding Contractors",
];

const Roofing = () => {
  usePageSEO({
    title: "Fleet, Crew & Marketing Solutions for Central Ohio Roofing Contractors | Buckeye Biz Hub",
    description:
      "Vehicle wraps, durable crew apparel, door hangers, yard signs, carbonless forms, and full marketing materials for Central Ohio roofing contractors. Real-world experience helping 9 local roofing operations.",
  });

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Roofing Contractor Branding",
    description:
      "Vehicle wraps, fleet graphics, crew apparel, door hangers, yard signs, carbonless forms, and full marketing materials for Central Ohio roofing contractors.",
    url: "https://www.buckeyebizhub.com/roofing",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

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
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30 backdrop-blur-sm"
          >
            <Hammer className="w-4 h-4" /> Central Ohio Roofing Contractors
          </motion.div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.98), 0 4px 16px rgba(0,0,0,0.95), 0 8px 40px rgba(0,0,0,0.85), 0 0 80px rgba(0,0,0,0.7)" }}
          >
            Make Your Trucks and Crews Look{" "}
            <span
              className="text-primary text-glow-red inline-block"
              style={{
                WebkitTextStroke: "1.5px hsl(0 0% 100%)",
                textShadow:
                  "0 0 2px hsl(0 0% 100% / 0.9), 0 2px 8px rgba(0,0,0,0.95), 0 0 30px hsl(0 85% 40% / 0.7), 0 0 60px hsl(0 85% 40% / 0.4)",
                paintOrder: "stroke fill",
              }}
            >
              as Strong as Your Work
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground font-medium leading-relaxed max-w-3xl mx-auto mb-10"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.98), 0 4px 18px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)" }}
          >
            Professional vehicle wraps, durable crew apparel, door hangers, yard signs, and full marketing materials built for busy Central Ohio roofing companies.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
            >
              Get Your Free Roofing Branding Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 1 — Why Roofing Contractors Choose Us */}
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
                <Shield className="w-4 h-4" /> Why Roofing Contractors Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                Built for Crews That Work Hard{" "}
                <span className="text-primary">All Season Long</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Spring and summer are your busiest months. You need materials that survive the field, look professional on the road, and actually help generate leads — without chasing multiple vendors.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                One trusted point of contact for wraps, apparel, signage, print, and marketing. We move fast because we know your season won't wait.
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
                src={ROOFING_JOBSITE}
                alt="Fully wrapped roofing service van with bold branding parked at job site"
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
                Real Experience with{" "}
                <span className="text-primary">Fleet-Heavy, Crew-Based Businesses</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                In the last 20 months, I helped a local vehicle wrap company <span className="font-bold text-foreground">double their sales</span> by improving their fleet branding. I've also built <span className="font-bold text-foreground">3 businesses</span> from the ground up right here in Central Ohio.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Those experiences taught me exactly what fleet-heavy, crew-based companies like yours really need: durable materials that survive tough job sites, branding that looks sharp on the road, and a single reliable partner who can deliver quickly when busy season hits.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                We've already helped <span className="font-bold text-foreground">9 different Central Ohio roofing companies</span> strengthen their brand across every touchpoint — full vehicle wraps, crew uniforms and high-vis safety gear, door hangers, yard signs, carbonless contract forms, sales materials, and more.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At Buckeye Biz Hub, we act as your <span className="font-bold text-foreground">branding concierge</span> — handling the details so you can stay focused on running jobs and growing your business.
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
                src={ROOFING_BEFORE_AFTER}
                alt="Briggs Roofing branded fleet pickup truck with full green and white vehicle wrap"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(0,0%,4%/0.95)] to-transparent">
                <p className="text-primary-foreground font-bold text-lg">Real Fleet Branding</p>
                <p className="text-primary-foreground/70 text-sm">The kind of look that stops traffic</p>
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
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight">
              Everything a Roofing Crew Needs to{" "}
              <span className="text-primary">Win More Work</span>
            </h2>
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

      {/* Real Roofing Work Gallery */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-4 h-4" /> Real Roofing Work
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Examples of What We <span className="text-primary">Build for Roofers</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Truck wraps, yard signs, door hangers, carbonless contracts, and trade show banners — the exact mix Central Ohio roofing crews use every season.
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
              Trusted by Roofing Contractors{" "}
              <span className="text-primary">Across Central Ohio</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Residential roofers, commercial and industrial roofing contractors, storm restoration specialists, and growing multi-location operations across Central Ohio.
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
              Spring is here — make sure your brand looks{" "}
              <span className="text-primary">as strong as your workmanship.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's talk fleet wraps, crew apparel, door hangers, yard signs, or a complete marketing rollout. Free consultation, honest pricing, no pressure.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
              >
                Start Your Free Consultation
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
