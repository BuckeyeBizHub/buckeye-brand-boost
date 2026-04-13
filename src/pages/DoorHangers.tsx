import { motion } from "framer-motion";
import {
  ArrowRight, Phone, CheckCircle, Sparkles, ShieldCheck, BadgeCheck,
  ThumbsUp, Clock, DoorOpen, Info, MapPin, Handshake, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import heroImg from "@/assets/door-hangers-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const pricingRows = [
  { size: '4" x 11"', finish: "14 pt Cardstock Gloss", prices: ["$186", "$200", "$225", "$273", "$436"] },
  { size: '4" x 11"', finish: "14 pt Cardstock Matte", prices: ["$221", "$235", "$259", "$307", "$486"] },
  { size: '4" x 11"', finish: "14 pt Cardstock High Gloss (UV)", prices: ["$353", "$367", "$391", "$439", "$656"] },
  { size: '4" x 14"', finish: "14 pt Cardstock Gloss", prices: ["$251", "$268", "$295", "$349", "$544"] },
  { size: '4" x 14"', finish: "14 pt Cardstock Matte", prices: ["$292", "$308", "$335", "$390", "$606"] },
  { size: '4" x 14"', finish: "14 pt Cardstock High Gloss (UV)", prices: ["$468", "$484", "$511", "$566", "$831"] },
];

const quantities = ["100", "250", "500", "1,000", "2,000"];

const benefits = [
  "Hang them on doorknobs and they can't be missed",
  "Perfect for local promotions, coupons, menus, service reminders, and special offers",
  "Tear-off perforation option turns them into coupons or mini business cards",
  "Premium 14 pt cardstock – durable and professional",
];

const whyUs = [
  { icon: MapPin, title: "Local Columbus/Ohio Business", text: "We understand your market and your customers — because we're right here in Ohio, serving local businesses just like yours." },
  { icon: Handshake, title: "Concierge Service", text: "We handle design, printing, and delivery — one dedicated contact manages your entire project so you don't have to juggle vendors." },
  { icon: Zap, title: "Fast Turnaround & Honest Quotes", text: "You'll receive a clear, customized quote within 24 hours. No hidden fees, no surprises — just straightforward pricing." },
];

const trustItems = ["24-Hour Quotes", "Full Pricing Transparency", "Ohio Owned & Operated"];

const DoorHangers = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Door Hangers",
    description: "Custom door hanger printing on premium 14pt cardstock for Columbus and Ohio businesses.",
    url: "https://www.buckeyebizhub.com/door-hangers",
    provider: {
      "@type": "LocalBusiness",
      name: "Buckeye Biz Hub",
      areaServed: { "@type": "State", name: "Ohio" },
      address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
    },
  };

  usePageSEO({
    title: "Door Hangers | Custom Door Hanger Printing – Buckeye Biz Hub",
    description: "Custom door hanger printing on premium 14pt cardstock. Perfect for local promotions, coupons, menus, and service reminders. Fast turnaround and transparent pricing for Ohio businesses.",
  });

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Custom branded door hanger on a doorknob" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Door Hangers <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Custom Door Hangers — Columbus, Ohio
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Get your message directly on every door handle — impossible to ignore.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: ShieldCheck, label: "No Hidden Fees" },
                { icon: BadgeCheck, label: "Wholesale Pricing" },
                { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" /> {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                  Get Your Free Quote in 24 Hours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WHY DOOR HANGERS WORK ═══ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Why Door Hangers <span className="text-primary">Work So Well</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Door hangers are one of the most effective — and most affordable — ways to reach customers right where they live.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-card rounded-xl border border-border p-5 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING GUIDE ═══ */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-bold mb-6">
              <DoorOpen className="w-4 h-4" />
              Pricing Guide
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
              Door Hangers <span className="text-primary">Pricing Guide</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border-2 border-border shadow-lg overflow-hidden">
            {/* Desktop */}
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow className="bg-foreground">
                    <TableHead className="text-primary-foreground font-bold text-sm">Size</TableHead>
                    <TableHead className="text-primary-foreground font-bold text-sm">Finish</TableHead>
                    {quantities.map((q) => (
                      <TableHead key={q} className="text-primary-foreground font-bold text-sm text-center">{q} qty</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingRows.map((row, i) => (
                    <TableRow key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/40"}>
                      <TableCell className="font-bold text-foreground whitespace-nowrap">{row.size}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">{row.finish}</TableCell>
                      {row.prices.map((price, j) => (
                        <TableCell key={j} className="text-center font-semibold text-foreground">{price}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile */}
            <div className="md:hidden divide-y divide-border">
              {pricingRows.map((row, i) => (
                <div key={i} className="p-5">
                  <h3 className="font-display text-lg font-black text-foreground">{row.size}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{row.finish}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {row.prices.map((price, j) => (
                      <div key={j} className="text-center bg-secondary/50 rounded-lg py-2 px-1">
                        <span className="block text-[11px] text-muted-foreground">{quantities[j]}</span>
                        <span className="block text-sm font-bold text-foreground">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 shadow-sm">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prices are for full color printing on both sides. Free file creation and simple adjustments of your existing file are included. Creative or custom design work may incur an additional design fee. Up to 10% quantity discount available on orders of $1,500 or more. Shipping is additional and calculated per delivery location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Why Choose Buckeye Biz Hub for Your <span className="text-primary">Door Hangers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border-2 border-border p-7 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Ready to get your message on every door in the neighborhood?
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
                <Phone className="w-6 h-6" />
                Get Your 24-Hour Custom Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="py-8 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide">
                <Clock className="w-4 h-4 text-primary" /> {item}
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

export default DoorHangers;
