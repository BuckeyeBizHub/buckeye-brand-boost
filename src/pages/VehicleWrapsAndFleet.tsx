import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, Car, Truck, Ship, Bike, Star, Handshake, DollarSign, Paintbrush, Eye, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

import heroImg from "@/assets/vehicle-wrap-hero.jpg";
import fullWrapImg from "@/assets/vehicle-wrap-full-real.jpg";
import partialWrapImg from "@/assets/vehicle-wrap-partial-real.jpg";
import decalsImg from "@/assets/vehicle-wrap-decals-real.jpg";
import magneticImg from "@/assets/vehicle-wrap-magnetic-real.jpg";
import windowImg from "@/assets/vehicle-wrap-window-real.jpg";
import fleetImg from "@/assets/vehicle-wrap-fleet-real.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const wrapOptions = [
  { title: "Full Vehicle Wraps", image: fullWrapImg, desc: "Complete coverage that transforms your entire vehicle into a bold, head-turning mobile billboard with maximum brand impact." },
  { title: "Partial Vehicle Wraps & Graphics", image: partialWrapImg, desc: "Strategic partial coverage that delivers big visual impact at a fraction of the cost of a full wrap." },
  { title: "Custom Decals & Lettering", image: decalsImg, desc: "Professional vinyl lettering and custom decals for a clean, polished look — perfect for doors, tailgates, and windows." },
  { title: "Magnetic Signs & Removable Graphics", image: magneticImg, desc: "Flexible branding you can add or remove in seconds — ideal for personal vehicles used for business." },
  { title: "Window Perforated Graphics", image: windowImg, desc: "See-through window graphics that advertise your brand from the outside while maintaining full visibility from inside." },
  { title: "Fleet Consistency Packages", image: fleetImg, desc: "Uniform branding across your entire fleet so every vehicle reinforces your professional image on every route." },
];

const vehicleTypes = [
  "Cars & SUVs", "Service Vans & Trucks", "Box Trucks & Trailers", "Boats & Marine",
  "RVs & Campers", "ATVs & UTVs", "Golf Carts", "And More",
];

const faqItems = [
  { q: "What is the difference between full and partial wraps?", a: "A full wrap covers the entire vehicle surface with printed vinyl, providing maximum visual impact. A partial wrap covers specific sections (doors, hood, tailgate) and is more budget-friendly while still delivering strong brand visibility." },
  { q: "How long do vehicle wraps last?", a: "High-quality vehicle wraps typically last 5–7 years with proper care. Factors like sun exposure, weather, and maintenance can affect longevity. We use only premium 3M and Avery Dennison materials for maximum durability." },
  { q: "Can I remove the wrap later?", a: "Yes! Professional-grade wraps are designed to be removable without damaging your vehicle's original paint. Our installers use heat-release adhesives that come off cleanly when it's time for a change." },
  { q: "Do you offer design help?", a: "Absolutely. Our design team creates custom wrap concepts tailored to your brand, including mockups so you can see exactly how your vehicle will look before production begins." },
  { q: "What materials do you use?", a: "We use premium cast vinyl from industry leaders like 3M, Avery Dennison, and Oracal. These materials are specifically engineered for vehicle applications and come with manufacturer warranties." },
  { q: "How long does installation take?", a: "A full wrap typically takes 3–5 business days for installation. Partial wraps and decals can often be completed in 1–2 days. Our installers will provide a specific timeline based on your project." },
  { q: "Can I wrap different types of vehicles?", a: "Yes — we wrap cars, trucks, vans, SUVs, box trucks, trailers, boats, RVs, ATVs, golf carts, and more. If it has a surface, we can likely wrap it." },
  { q: "Do you offer fleet discounts?", a: "Yes! We offer volume pricing for fleet projects. The more vehicles you wrap, the better the per-vehicle rate. Contact us for a custom fleet quote." },
  { q: "What file formats do you accept?", a: "We accept AI, EPS, PDF, PSD, and high-resolution PNG/JPEG files (300 DPI minimum). If you don't have print-ready files, our design team can create everything from scratch." },
  { q: "Can I get a proof before printing?", a: "Yes — every project includes a digital proof with vehicle mockups for your approval before we print. You'll see exactly how the finished wrap will look on your specific vehicle." },
];

const pricingData = [
  { value: "$5,000", fee: "$250 – $500", market: "$5,750 – $6,500", savings: "$500 – $1,000+" },
  { value: "$10,000", fee: "$500 – $1,000", market: "$11,500 – $13,000", savings: "$1,000 – $2,000+" },
  { value: "$20,000+", fee: "$1,000 – $2,000", market: "$23,000 – $26,000", savings: "$2,000 – $4,000+" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vehicle Wraps & Fleet Branding",
  description: "Full wraps, partial wraps, and custom graphics for cars, trucks, vans, boats, RVs, ATVs, golf carts and more — with 24-hour quotes and full transparency.",
  url: "https://buckeye-brand-boost.lovable.app/vehicle-wraps-and-fleet-branding",
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

const VehicleWrapsAndFleet = () => (
  <div className="min-h-screen">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <Navbar />

    {/* ── Hero ── */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Fleet of wrapped vehicles on a Columbus Ohio street" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
      </div>
      <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />Vehicle Wraps & Fleet Branding<Sparkles className="w-3.5 h-3.5" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
            Vehicle Wraps & Fleet Branding That Turn Your Vehicles Into Powerful Moving Billboards
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            Full wraps, partial wraps, and custom graphics for cars, trucks, vans, boats, RVs, ATVs, golf carts and more — with 24-hour quotes and full transparency.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: ShieldCheck, label: "No Hidden Fees" },
              { icon: BadgeCheck, label: "Top Ohio Installers" },
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
                Get Your Custom Vehicle Wrap Quote in 24 Hours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── Section 2: Why Vehicle Wraps ── */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why Vehicle Wraps Are One of the Smartest Marketing Investments for Ohio Businesses</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A single wrapped vehicle generates between 30,000 and 70,000 impressions per day — that's 24/7 advertising that works while you drive, park, and make deliveries. Unlike billboards or digital ads that stop the moment you stop paying, a vehicle wrap keeps working for years at a fraction of the cost-per-impression.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For Ohio service businesses — HVAC, plumbing, landscaping, cleaning, construction, and more — wrapped vehicles build instant credibility in every neighborhood you serve. Customers trust businesses that look professional, and a well-designed wrap signals quality before you even knock on the door. It's brand protection and lead generation rolled into one.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Section 3: Wrap Options Grid ── */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">
          Our Vehicle Wrapping Options
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wrapOptions.map((opt, i) => (
            <motion.div key={opt.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
              <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={opt.image} alt={opt.title + " for Ohio businesses"} loading="lazy" width={800} height={600} className="w-full h-52 object-cover" />
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-black text-foreground mb-3">{opt.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{opt.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-primary font-bold hover:underline text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Section 4: Why Choose Us ── */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center">Why Choose Buckeye Biz Hub for Your Wraps</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We've built strong relationships with some of the top independent contractors and wrap companies in Central Ohio. This allows us to broker the best possible deal for you — matching your specific needs with the best installer and materials so you not only look great, but save the most money while getting the highest quality job possible.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Star, label: "Top-Rated Ohio Installers" },
              { icon: DollarSign, label: "Best Possible Pricing" },
              { icon: Paintbrush, label: "Custom Design Included" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50">
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <span className="font-bold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Section 5: Transparent Fee ── */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 text-center">Our Transparent 5–10% Management Fee</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-3xl mx-auto text-center">
            We charge a straightforward 5–10% job management fee on vehicle wrap and fleet branding projects. This fee allows us to coordinate the entire job through our trusted network so you get the best price and quality.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center font-semibold">
            Even after the fee, you still save significantly compared to going direct. Here's how it works:
          </p>

          <div className="overflow-x-auto rounded-2xl border shadow-lg bg-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-ohio-navy">
                  <TableHead className="text-primary-foreground font-bold">Project Value</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Management Fee (5–10%)</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Typical Direct Market Cost</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-primary">Your Net Savings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.map((row) => (
                  <TableRow key={row.value}>
                    <TableCell className="font-bold text-foreground">{row.value}</TableCell>
                    <TableCell className="text-muted-foreground">{row.fee}</TableCell>
                    <TableCell className="text-muted-foreground">{row.market}</TableCell>
                    <TableCell className="font-bold text-primary">{row.savings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Section 6: Vehicles We Wrap ── */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Vehicles We Professionally Wrap</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {vehicleTypes.map((v) => (
              <div key={v} className="flex items-center gap-3 bg-muted/50 rounded-xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="font-semibold text-foreground text-sm">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Section 7: Design Tips from David ── */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-8 text-center">Design Tips from David</h2>
          <div className="bg-card rounded-2xl p-8 md:p-10 border-l-4 border-primary shadow-lg">
            <MessageSquareQuote className="w-8 h-8 text-primary mb-4" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">
              "The best vehicle wraps follow three simple rules: keep the message short enough to read in 3 seconds, use bold contrast colors that pop from 100+ feet away, and always include a clear call-to-action — your phone number or website. I've seen businesses add $50,000+ in annual revenue from a single wrapped van. The key is professional design and quality materials. A cheap wrap looks cheap, and that's worse than no wrap at all."
            </p>
            <p className="font-bold text-foreground">— David Stein, The Buckeye Branding Czar</p>
            <p className="text-muted-foreground text-sm">Buckeye Biz Hub</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Section 8: FAQ ── */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">
          Vehicle Wraps FAQ
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

    {/* ── Bottom CTA ── */}
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
      <div className="container relative text-center max-w-3xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
          Ready to turn your fleet into powerful, money-saving moving advertisements?
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
              <Phone className="w-6 h-6" />
              Get Your Custom Vehicle Wrap Quote in 24 Hours
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ── Trust Bar ── */}
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

    <Footer />
  </div>
);

export default VehicleWrapsAndFleet;
