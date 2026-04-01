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
  Clock,
  Flag,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import TrustBadges from "@/components/TrustBadges";

import heroImg from "@/assets/decals-hero.jpg";
import vehicleFleetImg from "@/assets/decal-vehicle-fleet.jpg";
import dotNumbersImg from "@/assets/decal-dot-numbers.jpg";
import reflectiveSafetyImg from "@/assets/decal-reflective-safety.jpg";
import machineryImg from "@/assets/decal-machinery-industrial.jpg";
import windowClingsImg from "@/assets/decal-window-clings.jpg";
import bumperStickersImg from "@/assets/decal-bumper-stickers.jpg";
import floorWallImg from "@/assets/decal-floor-wall.jpg";
import americanFlagImg from "@/assets/decal-american-flag.jpg";
import anniversaryImg from "@/assets/decal-250th-anniversary.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const serviceCards = [
  {
    image: vehicleFleetImg,
    title: "Vehicle & Fleet Decals",
    desc: "Custom vinyl lettering, logos, and graphics for trucks, vans, and fleet vehicles. Durable outdoor-grade vinyl that withstands Ohio weather while promoting your brand on every road.",
  },
  {
    image: dotNumbersImg,
    title: "DOT Numbers & Equipment Numbering",
    desc: "USDOT-compliant number decals, MC numbers, GVW ratings, and equipment ID numbering for commercial vehicles. Meet federal and state regulations with professional, durable lettering.",
  },
  {
    image: reflectiveSafetyImg,
    title: "Reflective Safety Decals",
    desc: "High-visibility reflective decals for hard hats, equipment, vehicles, and job sites. Engineered-grade reflective vinyl that enhances safety and meets OSHA and DOT visibility requirements.",
  },
  {
    image: machineryImg,
    title: "Large Machinery & Industrial Decals",
    desc: "Heavy-duty branding decals for excavators, bulldozers, forklifts, and industrial equipment. UV-resistant vinyl built to endure harsh conditions while keeping your brand visible on every job site.",
  },
  {
    image: windowClingsImg,
    title: "Window Clings & Static Decals",
    desc: "Repositionable window clings and frosted vinyl for storefronts, offices, and retail displays. Easy to apply and remove without residue — perfect for seasonal promotions and business hours.",
  },
  {
    image: bumperStickersImg,
    title: "Bumper Stickers & Promotional Decals",
    desc: "Custom die-cut stickers, bumper stickers, and promotional decals printed on premium vinyl with UV-protective lamination. Great for giveaways, packaging, and grassroots brand building.",
  },
  {
    image: floorWallImg,
    title: "Floor Graphics & Wall Decals",
    desc: "Eye-catching floor graphics with anti-slip lamination and large-format wall decals for lobbies, offices, retail spaces, and event venues. Transform any surface into a branding opportunity.",
  },
  {
    image: americanFlagImg,
    title: "Custom American Flag Decals",
    desc: "Patriotic American flag decals in all sizes — from small truck window flags to large building displays. Available in full color, distressed, black-and-white, and thin-line variations.",
  },
  {
    image: anniversaryImg,
    title: "250th USA Anniversary Decals",
    desc: "Celebrate America's 250th birthday (1776–2026) with custom commemorative decals featuring patriotic designs, stars and stripes, and anniversary branding for businesses, schools, and community events.",
  },
];

const materialsInfo = [
  { title: "Premium Cast Vinyl", desc: "Conformable, long-lasting vinyl that molds to curved surfaces on vehicles and equipment. 5–7 year outdoor durability." },
  { title: "Reflective Vinyl", desc: "Engineer-grade and prismatic reflective films that shine brightly under headlights for maximum safety visibility at night." },
  { title: "Static Cling", desc: "Adhesive-free material that clings to glass using static electricity. Repositionable and removable without residue." },
  { title: "UV-Resistant Inks", desc: "Eco-solvent and UV-cured inks that resist fading from sun exposure, keeping your decals vibrant for years in Ohio weather." },
  { title: "Anti-Slip Floor Lamination", desc: "Textured overlaminate rated for foot traffic — keeps floor graphics safe and slip-resistant in commercial environments." },
  { title: "Gloss, Matte & Satin Finishes", desc: "Choose high-gloss for vivid colors, matte for a sophisticated look, or satin for a balanced finish that reduces glare." },
];

const faqItems = [
  { q: "What types of decals do you offer?", a: "We offer vehicle & fleet decals, DOT number decals, reflective safety decals, large machinery branding, window clings, bumper stickers, floor graphics, wall decals, custom American flag decals, and special 250th USA anniversary decals. Whatever your decal need, we can produce it." },
  { q: "Are your decals weatherproof and UV resistant?", a: "Yes! All our outdoor decals use premium cast or calendered vinyl with UV-resistant inks and protective overlaminate. They're designed to withstand rain, snow, sun, and temperature extremes — lasting 3–7 years outdoors depending on material and conditions." },
  { q: "Can decals be applied to vehicles and equipment?", a: "Absolutely. Our vehicle and equipment decals use conformable cast vinyl that molds to curves, rivets, and corrugations. We produce everything from simple door lettering to full truck-side graphics and heavy machinery branding." },
  { q: "Do you make reflective safety decals?", a: "Yes! We produce engineer-grade and high-intensity prismatic reflective decals for hard hats, vehicles, equipment, and job sites. These meet OSHA and DOT visibility standards and are essential for construction, trucking, and industrial applications." },
  { q: "Can I order custom American flag decals?", a: "Yes! We offer American flag decals in every style — full color, vintage/distressed, black-and-white, thin blue line, thin red line, and more. Available in sizes from 2\" to 48\"+ for trucks, buildings, toolboxes, and promotional use." },
  { q: "What sizes are available?", a: "We produce decals from as small as 1\" die-cut stickers to large-format wall and machinery graphics over 10 feet wide. DOT numbers typically range from 2\" to 4\" tall. There's no standard size — we custom-produce to your exact specifications." },
  { q: "Are decals removable?", a: "It depends on the type. Window clings and static decals are fully repositionable and removable. Standard vinyl decals can be removed with heat but may leave residue. We also offer removable-adhesive vinyl for temporary promotions and events." },
  { q: "Do you offer design help?", a: "Yes! Our design team can create custom decal artwork, lay out DOT lettering to compliance specs, and design patriotic or anniversary graphics. Design services include unlimited revisions until you're completely satisfied." },
  { q: "How fast can decals be produced?", a: "Standard turnaround is 3–5 business days. Rush production (1–2 days) is available for most decal types. DOT numbers and simple vinyl lettering can often ship within 24–48 hours. We're always transparent about timelines and costs upfront." },
  { q: "What file formats do you accept?", a: "We accept vector files (AI, EPS, SVG) for the sharpest results, plus high-resolution PDF, PNG, and JPEG files. For DOT numbers, just provide your information and we'll set the type. Need design help? Our team can create artwork from scratch." },
];

const Decals = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Decals & Stickers — Vehicle Decals, DOT Numbers, Safety & Patriotic Decals",
    description: "Custom vehicle decals, DOT number decals, reflective safety stickers, equipment branding, window clings, floor graphics, American flag decals, and 250th USA anniversary decals for Ohio businesses. 24-hour quotes.",
    url: "https://buckeye-brand-boost.lovable.app/decals",
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
          <img src={heroImg} alt="Custom decals including vehicle graphics, DOT numbers, reflective safety decals, and American flag decals in Columbus Ohio" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Custom Decals & Stickers <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Custom Decals & Stickers That Make Your Brand{" "}
              <span className="text-primary">Stand Out</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Vehicle decals, equipment numbering, DOT decals, reflective safety stickers, window clings, floor graphics, and custom American flag & 250th USA anniversary decals — all printed with 24-hour quotes and full transparency.
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
                  Get Your Custom Decals Quoted in 24 Hours
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

      {/* Why Custom Decals */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-8 text-center">
              Why Custom Decals Are a Smart Branding Tool for <span className="text-primary">Ohio Businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Custom decals are one of the most versatile and cost-effective branding investments you can make. From DOT-compliant truck lettering and reflective safety markings to eye-catching storefront window graphics and promotional stickers, decals work around the clock to build your brand, meet compliance requirements, and drive customer engagement — all at a fraction of the cost of traditional advertising.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For Ohio businesses, decals are especially powerful. They brand your vehicles as they drive through Columbus, Cleveland, Cincinnati, and every community in between. They keep your equipment identifiable and compliant on job sites. And with the 250th anniversary of the United States approaching in 2026, patriotic decals are in high demand for businesses, schools, and community organizations looking to celebrate this historic milestone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3x3 Service Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Our Options
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Our Decal & <span className="text-primary">Sticker Options</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From vehicle graphics and DOT compliance to patriotic commemorative decals — we produce everything your business needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group bg-card overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={card.image} alt={`${card.title} for Ohio businesses`} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-7 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{card.desc}</p>
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

      {/* Commercial & Industrial Decals */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-7 h-7 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">
                Commercial & Industrial Decals
              </h2>
            </div>
            <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Ohio businesses in trucking, construction, landscaping, and industrial services rely on professional decals every day. USDOT numbers, MC numbers, GVW ratings, and company information must be displayed on commercial vehicles to meet federal and state regulations — and we make compliance easy with precision-cut vinyl lettering that lasts for years.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For construction companies and industrial operations, our heavy-duty equipment decals brand your excavators, bulldozers, and machinery with logos and ID numbers that withstand mud, grease, UV exposure, and extreme temperatures. Reflective safety decals add critical visibility for nighttime operations and OSHA compliance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {["USDOT & MC Number Compliance", "Equipment ID & Asset Tags", "Reflective Safety Markings", "Heavy-Duty UV-Resistant Vinyl"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patriotic & 250th Anniversary */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-8">
              <Flag className="w-7 h-7 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">
                Patriotic & 250th USA Anniversary Decals
              </h2>
            </div>
            <div className="bg-card rounded-2xl border-l-4 border-primary p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Show your American pride with custom flag decals available in every style — from classic full-color and vintage distressed to thin blue line, thin red line, and black-and-white variations. Our American flag decals are a top seller for trucks, toolboxes, storefronts, and personal vehicles across Ohio.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With the United States celebrating its 250th anniversary in 2026, we're producing special commemorative decals featuring patriotic 1776–2026 designs, stars and stripes motifs, and custom anniversary branding. Perfect for businesses, schools, community organizations, and anyone who wants to mark this historic milestone with pride.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {["Full-Color & Distressed Flag Styles", "250th Anniversary Custom Designs", "Thin Line Variations Available", "Sizes from 2\" to 48\"+"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Materials & Finishes */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Materials & <span className="text-primary">Finishes Explained</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We use only commercial-grade materials to ensure your decals look great and last — whether applied to a truck door, a storefront window, or a warehouse floor.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialsInfo.map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="bg-card rounded-2xl border border-border/50 p-6 h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tips from David */}
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
                "The best decals are simple and bold. For vehicle lettering, stick to your company name, phone number, and website — that's all someone needs to see at a stoplight. For DOT numbers, compliance is key: make sure your lettering meets the minimum 2-inch height requirement and contrasts with your vehicle color."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "For promotional stickers and patriotic decals, quality matters more than you think. A cheap sticker that peels or fades reflects poorly on your brand. We use premium vinyl with UV lamination on everything — because your decal is a direct reflection of your business. And with the 250th anniversary coming up, now is the perfect time to show your American pride with decals that actually last."
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
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Decals & Stickers <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions about custom decals, DOT numbers, safety stickers, and patriotic decals for Ohio businesses.
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
            Ready for custom decals that protect, promote, and celebrate your Ohio{" "}
            <span className="text-primary-foreground/90 underline decoration-primary-foreground/30 underline-offset-4">business</span>?
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
                <Phone className="w-6 h-6" />
                Get Your Custom Decals Quote in 24 Hours
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
            {["24-Hour Quotes", "Full Pricing Transparency", "Ohio Owned & Operated"].map((item, i) => (
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

export default Decals;
