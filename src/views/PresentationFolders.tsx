"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, Briefcase, Gem, Layers, FileText, Quote, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
const heroImg = "/assets/presentation-folders-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const folderTypes = [
  { type: "Standard two-pocket", desc: "The classic. Two inside pockets for proposals, contracts and brochures. 9×12, so letter-size paper fits.", best: "Client proposals, welcome packets, sales kits" },
  { type: "Single pocket", desc: "One inside pocket. Clean and simple when you're only handing over a few pages.", best: "Conference handouts, single-document presentations" },
  { type: "Capacity folder", desc: "An expanding spine holds up to 1 inch of paper. Built for thick proposals and training binders.", best: "Insurance packets, HR onboarding kits, thick proposals" },
  { type: "Tri-panel folder", desc: "Three panels let you split documents into sections. The extra flap keeps everything in.", best: "Real estate presentations, financial planning packets" },
];

const finishOptions = [
  { finish: "Gloss lamination", desc: "High shine. Colors pop, and it holds up to scuffs and moisture." },
  { finish: "Matte lamination", desc: "Smooth, no glare, looks sharp. You can still write on it with a pen." },
  { finish: "Soft-touch lamination", desc: "Feels like suede. People notice it the second they pick it up." },
  { finish: "Spot UV coating", desc: "Raised gloss on just one spot, like your logo. It stands out hard against a matte background." },
  { finish: "Gold/silver foil stamping", desc: "Metallic foil pressed into the folder. Gold, silver, copper or rose gold." },
  { finish: "Embossing/debossing", desc: "Your logo pressed up or down into the stock. You can feel it, and it says quality." },
];

const paperStocks = [
  { stock: "14pt C2S", type: "Standard", feel: "Sturdy and professional. The industry standard for folders" },
  { stock: "16pt C2S", type: "Premium", feel: "Noticeably thicker and stiffer. Good for high-end presentations" },
  { stock: "18pt C2S", type: "Ultra-Premium", feel: "The thickest we offer. Heavy and substantial in the hand" },
];

const useCases = [
  { icon: Briefcase, title: "Sales & proposals", desc: "Put your proposal, pricing and company info in one sharp package. It builds trust before you say a word." },
  { icon: FileText, title: "Welcome & onboarding kits", desc: "HR uses them for new hire packets. Real estate agents use them for buyer and seller packages." },
  { icon: Gem, title: "Trade shows & events", desc: "Fill them with product sheets and business cards and hand them out at the booth." },
  { icon: Layers, title: "Client deliverables", desc: "Attorneys, accountants and consultants hand over reports in a branded folder. It looks professional." },
];

const faqItems = [
  { q: "What size are standard presentation folders?", a: "Standard is 9×12 inches. It holds letter-size (8.5×11) paper with a little room to spare. We also do legal size (9.5×14.5) and custom sizes." },
  { q: "Can I add business card slits?", a: "Yes. We can add slits to one or both pockets. It's one of our most popular add-ons. Your card is right there when they open it." },
  { q: "What's the difference between foil stamping and spot UV?", a: "Foil stamping presses metallic foil (gold, silver and so on) onto the folder. Spot UV puts a clear, raised gloss on one area. Both look and feel premium, and you can use them together." },
  { q: "What's the minimum order quantity?", a: "We can print as few as 100. The best per-folder price starts at 250+. Orders of 1,000 and up get volume discounts." },
  { q: "How long does printing take?", a: "Standard folders take 7–10 business days after you approve the proof. Foil or embossing can take 10–14. Most styles have a rush option." },
  { q: "Do you offer design services?", a: "Yes. We lay out your folder to match your brand: your logo, your colors, your message. Unlimited revisions." },
];

const PresentationFolders = () => {
  usePageSEO({ title: "Presentation Folders Printing Columbus OH", description: "Custom presentation folders for Ohio businesses. Foil stamping, spot UV, custom pockets. We source from top printers for the best quality and price." });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Custom presentation folders for Ohio businesses" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" />Presentation Folders<Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Custom Presentation Folders That Make You Look Sharp
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold">
              Pocket folders with foil, spot UV, embossing and custom pockets. Built to impress clients and help you close.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[{ icon: ShieldCheck, label: "No Hidden Fees" }, { icon: BadgeCheck, label: "Wholesale Pricing" }, { icon: ThumbsUp, label: "100% Satisfaction" }].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />{b.label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact"><Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] group uppercase tracking-wider">Get Your Folder Quote<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Folders Matter */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why a Good Folder Helps You Close</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">A folder is often the first thing a prospect holds from your company. They judge it before they read a word.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Would you trust a $50,000 proposal in a plain manila folder? A branded folder with foil and a soft-touch finish says you care about details. It turns a stack of paper into a real presentation.</p>
          </motion.div>
        </div>
      </section>

      {/* Folder Types */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Folder Styles</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {folderTypes.map((f, i) => (
              <motion.div key={f.type} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-none shadow-lg"><CardContent className="p-8">
                  <h3 className="font-display text-xl font-black text-foreground mb-3">{f.type}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{f.desc}</p>
                  <p className="text-muted-foreground text-sm"><strong className="text-foreground">Best for:</strong> {f.best}</p>
                </CardContent></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paper Stocks */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-10 text-center">Paper Stocks</h2>
            <div className="overflow-x-auto rounded-2xl border shadow-lg bg-card">
              <Table>
                <TableHeader><TableRow className="bg-ohio-navy">
                  <TableHead className="text-primary-foreground font-bold">Stock</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Type</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Feel</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                  {paperStocks.map((s) => (
                    <TableRow key={s.stock}>
                      <TableCell className="font-bold text-foreground">{s.stock}</TableCell>
                      <TableCell className="text-muted-foreground">{s.type}</TableCell>
                      <TableCell className="text-muted-foreground">{s.feel}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Finishes */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Finishes & Upgrades</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finishOptions.map((f, i) => (
              <motion.div key={f.finish} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Card className="h-full border-none shadow-lg"><CardContent className="p-6">
                  <h3 className="font-display text-lg font-black text-foreground mb-2">{f.finish}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </CardContent></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Popular Use Cases</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-none shadow-lg"><CardContent className="p-6 flex gap-4">
                  <uc.icon className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div><h3 className="font-display text-lg font-black text-foreground mb-2">{uc.title}</h3><p className="text-muted-foreground leading-relaxed">{uc.desc}</p></div>
                </CardContent></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* David's Tips */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-8 text-center">Design Tips from David</h2>
            <div className="bg-card rounded-2xl p-8 md:p-10 border-l-4 border-primary shadow-lg">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">"I tell every client the same thing: your folder is the suit your proposal wears to the meeting. Soft-touch with your logo in silver foil makes everything inside look worth more. Always add business card slits so your contact info stays with the paperwork. And print the inside pockets. That's prime space for your tagline or a list of services."</p>
              <p className="font-bold text-foreground">David Stein, co-founder, Buckeye Biz Hub</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Presentation Folders FAQ</motion.h2>
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

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Ready to upgrade your next client presentation?</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact"><Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] group uppercase tracking-widest"><Phone className="w-6 h-6" />Get Your Folder Quote in 24 Hours<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-ohio-navy"><div className="container"><div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
        {["24-Hour Quotes", "Foil & Spot UV Available", "Ohio Owned & Operated"].map((item, i) => (<span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide"><Clock className="w-4 h-4 text-primary" />{item}</span>))}
      </div></div></section>

      <RelatedServices />
      <Footer />
    </div>
  );
};

export default PresentationFolders;
