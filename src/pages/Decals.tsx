import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles, ArrowRight, Star, Shield, Truck, Flag, Sticker,
  HardHat, CheckCircle2, Lightbulb, Phone, Layers, Eye,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";

import heroImg from "@/assets/decals-hero.jpg";
import vehicleFleetImg from "@/assets/decal-vehicle-fleet.jpg";
import dotNumbersImg from "@/assets/decal-dot-numbers.png";
import reflectiveSafetyImg from "@/assets/decal-reflective-safety.jpg";
import machineryIndustrialImg from "@/assets/decal-machinery-industrial.jpg";
import windowClingsImg from "@/assets/decal-window-clings.jpg";
import bumperStickersImg from "@/assets/decal-bumper-stickers.jpg";
import floorWallImg from "@/assets/decal-floor-wall.jpg";
import americanFlagImg from "@/assets/decal-american-flag.jpg";
import anniversary250Img from "@/assets/decal-250th-anniversary.jpg";

import googleBadge from "@/assets/google-5-star-badge.png";
import bbbBadge from "@/assets/bbb-a-plus-badge.png";

const serviceCards = [
  {
    image: vehicleFleetImg,
    title: "Vehicle & Fleet Decals",
    desc: "Turn every company vehicle into a rolling billboard with custom vinyl decals that display your logo, phone number, and website. Durable, weather-resistant, and designed to last for years on trucks, vans, and cars across Ohio.",
    alt: "Custom vehicle fleet decals on a commercial truck in Columbus Ohio",
  },
  {
    image: dotNumbersImg,
    title: "DOT Numbers & Equipment Numbering",
    desc: "Stay compliant and professional with USDOT number decals, MC numbers, GVW markings, and custom equipment ID numbering. Required for commercial vehicles — we make ordering easy and fast.",
    alt: "USDOT format DOT number decals for commercial trucking compliance",
  },
  {
    image: reflectiveSafetyImg,
    title: "Reflective Safety Decals",
    desc: "Keep your team safe and your equipment visible with high-visibility reflective safety decals. Caution signs, hazard warnings, biohazard labels, and custom safety stickers built to meet OSHA and DOT standards.",
    alt: "Reflective caution biohazard safety decal sticker for industrial use",
  },
  {
    image: machineryIndustrialImg,
    title: "Large Machinery & Industrial Decals",
    desc: "Brand heavy equipment, construction machinery, and industrial assets with durable decals that withstand harsh conditions. Warning labels, operator instructions, and company branding for excavators, loaders, and more.",
    alt: "Large machinery industrial warning decal on construction equipment",
  },
  {
    image: windowClingsImg,
    title: "Window Clings & Static Decals",
    desc: "Promote your business, certifications, and seasonal offers with clean, professional window clings. Easy to apply, remove, and reposition — perfect for storefronts, restaurants, and office windows.",
    alt: "Custom window cling static decal on a storefront glass door",
  },
  {
    image: bumperStickersImg,
    title: "Bumper Stickers & Promotional Decals",
    desc: "Spread your message everywhere with custom bumper stickers, campaign decals, alumni stickers, and promotional giveaways. Eye-catching, affordable, and perfect for events, fundraisers, and brand awareness.",
    alt: "Colorful custom bumper stickers and promotional decals collection",
  },
  {
    image: floorWallImg,
    title: "Floor Graphics & Wall Decals",
    desc: "Transform any surface into a branding opportunity with durable floor graphics and wall decals. Ideal for retail displays, directional signage, clearance zones, trade show booths, and office branding.",
    alt: "Custom floor graphic clearance decal on retail store hardwood floor",
  },
  {
    image: americanFlagImg,
    title: "Custom American Flag Decals",
    desc: "Show your patriotism with premium American flag decals for vehicles, trucks, equipment, and windows. Available in full-color, black & chrome, distressed vintage, and thin blue line styles.",
    alt: "Custom American flag decal applied on a Ford F-150 truck",
  },
  {
    image: anniversary250Img,
    title: "250th USA Anniversary Decals",
    desc: "Celebrate America's 250th anniversary (1776–2026) with special commemorative decals. Perfect for businesses, schools, community events, and patriotic displays throughout Ohio and nationwide.",
    alt: "250th USA Anniversary 1776-2026 commemorative decal design",
  },
];

const materials = [
  { name: "Premium Vinyl", desc: "Most popular — durable, waterproof, and UV-resistant for outdoor and indoor use." },
  { name: "Reflective Vinyl", desc: "High-visibility material that glows under headlights — ideal for safety and DOT compliance." },
  { name: "Static Cling", desc: "No adhesive needed — repositionable and removable, perfect for glass surfaces." },
  { name: "Polyester (BOPP)", desc: "Tear-resistant and chemical-resistant for demanding industrial environments." },
  { name: "UV-Resistant Laminate", desc: "Extra UV protection layer that prevents fading for 5+ years outdoors." },
  { name: "High-Gloss Finish", desc: "Vibrant, shiny appearance that makes colors pop and graphics stand out." },
  { name: "Matte Finish", desc: "Elegant, non-reflective look for a premium, professional appearance." },
  { name: "Removable Adhesive", desc: "Clean removal without residue — ideal for temporary promotions and seasonal displays." },
];

const faqItems = [
  { q: "What types of decals do you offer?", a: "We offer vehicle & fleet decals, DOT number decals, reflective safety stickers, large machinery branding, window clings, bumper stickers, floor graphics, wall decals, American flag decals, and special 250th USA anniversary commemorative decals. If you can stick it on a surface, we can make it." },
  { q: "Are your decals weatherproof and UV resistant?", a: "Yes! Our premium vinyl decals are waterproof, weatherproof, and UV-resistant, designed to last 5–7+ years outdoors without fading, cracking, or peeling. We also offer UV-resistant laminate for extra protection." },
  { q: "Can decals be applied to vehicles and equipment?", a: "Absolutely. Our vehicle decals, DOT number stickers, and equipment branding decals are specifically designed for trucks, vans, cars, trailers, heavy machinery, and construction equipment. They're built to withstand road conditions and harsh environments." },
  { q: "Do you make reflective safety decals?", a: "Yes — we produce high-visibility reflective safety decals that meet OSHA and DOT standards. These include caution signs, hazard warnings, biohazard labels, and custom safety stickers for construction sites, warehouses, and commercial vehicles." },
  { q: "Can I order custom American flag decals?", a: "Of course! We offer American flag decals in full-color, black & chrome, distressed vintage, thin blue line, and custom styles. We also have special 250th USA Anniversary (1776–2026) commemorative designs." },
  { q: "What sizes are available?", a: "We offer decals in virtually any size — from small 2\" bumper stickers to large-format wall and floor graphics measuring several feet. DOT number decals are available in all FMCSA-compliant sizes. Just tell us what you need." },
  { q: "Are decals removable?", a: "It depends on the material. Our static cling and removable adhesive decals peel off cleanly without residue. Permanent vinyl decals are designed for long-term application but can be removed with heat and proper technique." },
  { q: "Do you offer design help?", a: "Yes! David and our design team will work with you to create the perfect decal — whether it's DOT lettering, a company logo, a patriotic design, or a promotional sticker. We offer free design consultations and mockups with every order." },
  { q: "How fast can decals be produced?", a: "Most standard decal orders are produced within 3–5 business days. Rush orders are available for time-sensitive projects. We provide 24-hour quotes so you know exactly what to expect before production begins." },
  { q: "What file formats do you accept?", a: "We accept AI, EPS, PDF, SVG, PNG (300+ DPI), and PSD files. Don't have print-ready artwork? No problem — our design team can create or convert your files for optimal print quality at no extra charge." },
];

const Decals = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Decals & Stickers - Buckeye Biz Hub",
    description: "Custom decals, vehicle graphics, DOT numbers, reflective safety stickers, window clings, floor graphics, American flag decals, and 250th USA anniversary decals for Ohio businesses.",
    provider: {
      "@type": "LocalBusiness",
      name: "Buckeye Biz Hub",
      areaServed: { "@type": "State", name: "Ohio" },
    },
    url: "https://buckeye-brand-boost.lovable.app/decals",
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

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Custom decals applied to vehicles, equipment, and windows in Columbus Ohio" width={1920} height={768} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-white/90 tracking-[0.3em] uppercase mb-6 bg-white/10 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/20">
              <Sticker className="w-3.5 h-3.5" /> Custom Decals & Stickers
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Custom Decals & Stickers That Make Your Brand{" "}
              <span className="text-primary">Stand Out</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-8 leading-relaxed">
              Vehicle decals, equipment numbering, DOT decals, reflective safety stickers, window clings, floor graphics, and custom American flag & 250th USA anniversary decals — all printed with 24-hour quotes and full transparency.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-10 py-7 rounded-2xl shadow-[0_0_40px_hsl(var(--primary)/0.35)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.55)] transition-all duration-300 group uppercase tracking-wider">
                Get Your Custom Decals Quoted in 24 Hours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center justify-center gap-6 mt-8">
            <img src={googleBadge} alt="Google 5-Star Rated" className="h-12 w-auto" loading="lazy" />
            <img src={bbbBadge} alt="BBB A+ Accredited" className="h-12 w-auto" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Why Decals ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center mb-8">
              Why Custom Decals Are a <span className="text-primary">Smart Branding Tool</span> for Ohio Businesses
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Custom decals are one of the most cost-effective, versatile branding tools available to Ohio businesses today. Whether you need vehicle graphics that turn your fleet into mobile billboards, DOT compliance numbers for commercial trucks, reflective safety stickers for construction equipment, or eye-catching window clings for your storefront — decals deliver long-lasting, professional results at a fraction of the cost of other advertising methods.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From patriotic American flag decals that show your pride to special 250th USA anniversary commemorative designs, from floor graphics that guide customers through your store to bumper stickers that spread your message across Ohio — decals work 24/7 to promote, protect, and celebrate your business. And with our 24-hour quotes and transparent pricing, getting started has never been easier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: 3x3 Grid ── */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Decal Options
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
              Our Decal & Sticker Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From vehicle graphics and DOT numbers to patriotic flag decals and 250th anniversary designs — we have every decal solution your Ohio business needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group bg-card rounded-2xl border border-border hover:border-primary/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={card.image} alt={card.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Commercial & Industrial ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <HardHat className="w-3.5 h-3.5" /> Commercial & Industrial
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              Commercial & Industrial Decals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional-grade decals built for the toughest environments — from highway trucks to construction sites.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Truck, title: "DOT Number Compliance", desc: "FMCSA-compliant USDOT, MC, CA, and GVW number decals for commercial trucks and trailers. Available in multiple sizes, fonts, and colors to meet federal requirements while keeping your fleet looking sharp." },
              { icon: Shield, title: "Reflective Safety & Warning Decals", desc: "High-visibility reflective decals for construction zones, warehouses, heavy equipment, and commercial vehicles. OSHA and DOT compliant options including caution signs, hazard warnings, and biohazard labels." },
              { icon: HardHat, title: "Heavy Equipment & Machinery Branding", desc: "Durable decals for excavators, loaders, cranes, and industrial machinery. Company logos, operator instructions, warning labels, and equipment ID numbers that withstand extreme weather, UV exposure, and rough use." },
              { icon: Layers, title: "Equipment ID & Asset Tracking", desc: "Custom numbering decals for fleet tracking, asset management, and inventory control. Sequential numbering, barcodes, and QR code decals for efficient equipment identification across your operations." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Patriotic & 250th ── */}
      <section className="py-20 lg:py-28 bg-[hsl(var(--ohio-navy))] text-white relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="container relative max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-white/90 tracking-[0.3em] uppercase mb-6 bg-white/10 px-6 py-2.5 rounded-full">
              <Flag className="w-3.5 h-3.5" /> Patriotic Collection
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Patriotic & 250th USA Anniversary Decals
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Celebrate American pride and the nation's 250th anniversary with custom patriotic decals for your business, school, or community event.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <img src={americanFlagImg} alt="Custom American flag decal on a Ford F-150 truck" loading="lazy" className="w-full aspect-video object-cover" />
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold mb-3">Custom American Flag Decals</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Show your patriotism with premium American flag decals available in full-color, black & chrome, distressed vintage, thin blue line, and custom styles. Perfect for trucks, cars, equipment, storefronts, and community displays.
                </p>
                <ul className="space-y-2">
                  {["Full-color & chrome styles", "Distressed vintage options", "Thin blue line & first responder", "Multiple sizes available"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/90 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <img src={anniversary250Img} alt="250th USA Anniversary 1776-2026 commemorative decal" loading="lazy" className="w-full aspect-video object-cover" />
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold mb-3">250th USA Anniversary Decals</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Commemorate America's 250th birthday (1776–2026) with special anniversary decals. A unique branding opportunity for businesses, schools, municipalities, and community organizations across Ohio and nationwide.
                </p>
                <ul className="space-y-2">
                  {["Official 250th anniversary designs", "Custom branded versions available", "Perfect for events & celebrations", "Schools & community organizations"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/90 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Materials & Finishes ── */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <Layers className="w-3.5 h-3.5" /> Materials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              Materials & Finishes Explained
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We use only premium materials to ensure your decals look great and last for years.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }} className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h3 className="font-display text-base font-bold text-foreground mb-2">{m.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Design Tips from David ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-black text-foreground">Design Tips from David</h2>
                <p className="text-sm text-muted-foreground">David Stein, The Buckeye Branding Czar</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">"Keep it bold, keep it simple."</strong> The best decals communicate your message instantly. Whether it's your company logo on a truck door, DOT numbers on a trailer, or a patriotic flag on a storefront window — simplicity is your best friend. Use high-contrast colors, clean fonts, and make sure your phone number or website is large enough to read from a distance.
              </p>
              <p>
                For vehicle decals and fleet graphics, I always tell my clients: <strong className="text-foreground">think about what someone sees in 3 seconds at a traffic light.</strong> That's your window. Your logo, your number, and one clear message. That's all you need to turn a company truck into your hardest-working salesperson.
              </p>
              <p>
                And don't forget — we offer free design consultations and mockups with every order. Send us your logo and ideas, and we'll create a professional proof before anything gets printed. No surprises, no guesswork.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 8: FAQ ── */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <Eye className="w-3.5 h-3.5" /> FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              Decals FAQ
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.8),transparent_70%)]" />
        <div className="container relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
              Ready for Custom Decals That Protect, Promote, and Celebrate Your Ohio Business?
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-8">
              From DOT compliance numbers to patriotic American flag decals and 250th anniversary designs — get your custom quote in 24 hours with no hidden fees.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-black text-lg px-12 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group uppercase tracking-wider">
                <Phone className="w-5 h-5 mr-2" />
                Get Your Custom Decals Quote in 24 Hours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Decals;
