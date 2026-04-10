import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, Briefcase, Gem, Layers, FileText, Quote, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import heroImg from "@/assets/presentation-folders-hero.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const folderTypes = [
  { type: "Standard Two-Pocket", desc: "The classic presentation folder with two interior pockets for holding documents, contracts, and brochures. Available in 9×12 to fit standard letter-size papers.", best: "Client proposals, welcome packets, sales kits" },
  { type: "Single Pocket", desc: "One interior pocket — ideal when you need a sleek, streamlined look with minimal materials inside. Often used for event handouts.", best: "Conference handouts, single-document presentations" },
  { type: "Capacity Folder", desc: "Features an expandable spine that holds up to 1 inch of documents. Perfect for thick proposals, training materials, or multi-document packages.", best: "Insurance packets, HR onboarding kits, thick proposals" },
  { type: "Tri-Panel Folder", desc: "Three panels create additional space for organizing documents into sections. The extra flap keeps materials secure and organized.", best: "Real estate presentations, financial planning packets" },
];

const finishOptions = [
  { finish: "Gloss Lamination", desc: "High-shine coating that makes colors pop and adds a layer of protection against scuffing and moisture." },
  { finish: "Matte Lamination", desc: "Smooth, non-reflective finish that looks elegant and sophisticated. Easy to write on with a pen." },
  { finish: "Soft-Touch Lamination", desc: "A velvety, luxurious coating that feels like suede. The ultimate in premium tactile experience." },
  { finish: "Spot UV Coating", desc: "Selective glossy coating applied to specific areas — like your logo — creating a dramatic raised contrast against matte backgrounds." },
  { finish: "Gold/Silver Foil Stamping", desc: "Metallic foil pressed onto the folder for brilliant, reflective accents. Available in gold, silver, copper, and rose gold." },
  { finish: "Embossing/Debossing", desc: "Raised or recessed impressions pressed into the card stock create a dimensional, tactile effect that communicates quality." },
];

const paperStocks = [
  { stock: "14pt C2S", type: "Standard", feel: "Professional and sturdy — the industry standard for presentation folders" },
  { stock: "16pt C2S", type: "Premium", feel: "Noticeably thicker and more rigid — ideal for high-end presentations" },
  { stock: "18pt C2S", type: "Ultra-Premium", feel: "Maximum thickness for the most luxurious, substantial folder" },
];

const useCases = [
  { icon: Briefcase, title: "Sales & Proposals", desc: "Package your proposals, pricing sheets, and company information into a polished presentation that builds trust before you even start talking." },
  { icon: FileText, title: "Welcome & Onboarding Kits", desc: "HR departments use branded folders for new employee welcome packets. Real estate agents use them for buyer and seller packages." },
  { icon: Gem, title: "Trade Shows & Events", desc: "Hand out branded folders filled with product sheets, business cards, and promotional materials at trade shows and conferences." },
  { icon: Layers, title: "Client Deliverables", desc: "Attorneys, accountants, and consultants present reports and documents in branded folders that reinforce professionalism." },
];

const faqItems = [
  { q: "What size are standard presentation folders?", a: "The standard size is 9×12 inches, which holds letter-size (8.5×11) documents with a slight border. We also offer legal-size folders (9.5×14.5) and custom sizes for non-standard applications." },
  { q: "Can I add business card slits?", a: "Yes! We can add business card slits to one or both interior pockets. This is one of our most popular add-ons — it turns every folder into a complete sales kit with your card right inside." },
  { q: "What's the difference between foil stamping and spot UV?", a: "Foil stamping presses metallic foil (gold, silver, etc.) onto the folder for a brilliant reflective accent. Spot UV applies a clear, raised glossy coating to specific areas. Both add a premium tactile element, and they can be combined for maximum impact." },
  { q: "What's the minimum order quantity?", a: "We can print as few as 100 folders for short runs, though the best per-unit pricing starts at 250+. For large corporate orders, we offer volume discounts on quantities of 1,000 and above." },
  { q: "How long does printing take?", a: "Standard presentation folders take 7–10 business days from proof approval. Folders with foil stamping or embossing may take 10–14 business days. Rush options are available for most styles." },
  { q: "Do you offer design services?", a: "Absolutely! Our designers create folder layouts that match your existing brand identity. We'll incorporate your logo, colors, and messaging into a cohesive design with unlimited revisions." },
];

const jsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Custom Presentation Folders",
  description: "Custom presentation folders and pocket folders with foil stamping, spot UV, and premium finishes for Ohio businesses.",
  url: "https://www.buckeyebizhub.com/presentation-folders",
  provider: { "@type": "LocalBusiness", name: "Buckeye Biz Hub", areaServed: { "@type": "State", name: "Ohio" } },
};

const PresentationFolders = () => {
  usePageTitle("Presentation Folders Printing Columbus OH", "Custom presentation folders and pocket folders for Ohio businesses. Premium stocks, foil stamping, spot UV, and custom pockets. 24-hour quotes from Buckeye Biz Hub.");

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              Custom Presentation Folders That Make Your Brand Look Polished & Professional
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold">
              Premium pocket folders with foil stamping, spot UV, embossing, and custom pockets — designed to impress clients and close deals.
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why Presentation Folders Are Your Secret Sales Weapon</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">A presentation folder is often the very first physical touchpoint a prospect has with your brand. When a client opens a folder filled with your proposals, contracts, or product sheets — the quality of that folder says everything about your business before they read a single word.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Think about it: would you trust a $50,000 proposal handed to you in a plain manila folder? A custom-branded folder with foil stamping and a soft-touch finish communicates professionalism, attention to detail, and pride in your work. It transforms a stack of papers into a polished sales presentation.</p>
          </motion.div>
        </div>
      </section>

      {/* Folder Types */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Folder Styles & Configurations</motion.h2>
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
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Premium Finishes & Enhancements</motion.h2>
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">"I tell every client the same thing: your presentation folder is the suit your proposal wears to the meeting. A soft-touch folder with your logo in silver foil instantly elevates the perceived value of everything inside. Always add business card slits — it keeps your contact information right where the client can find it. And don't skip printing on the inside pockets — that's prime real estate for your tagline or a list of services."</p>
              <p className="font-bold text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
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
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Ready to elevate your next client presentation?</motion.h2>
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
