import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, Mail, Layers, FileText, Gem, Quote, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import heroImg from "@/assets/letterhead-hero.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const stationeryProducts = [
  { product: "Letterhead", desc: "Full-color branded letterhead printed on premium paper stocks. Used for proposals, cover letters, invoices, and formal correspondence. Available in 8.5×11 and custom sizes.", best: "Professional correspondence, proposals, contracts, invoices" },
  { product: "Business Envelopes (#10)", desc: "The standard 4.125×9.5 business envelope used for everyday correspondence. Printed with your logo, return address, and brand colors.", best: "Invoices, statements, general business mail" },
  { product: "A7 Invitation Envelopes", desc: "5.25×7.25 envelopes perfect for invitations, thank-you cards, and special announcements. Available in white, cream, and colored stocks.", best: "Event invitations, holiday cards, thank-you notes" },
  { product: "6×9 Booklet Envelopes", desc: "Mid-size envelopes for catalogs, booklets, and multi-page documents. Open on the short side for easy insertion.", best: "Catalogs, booklets, multi-page documents" },
  { product: "9×12 Catalog Envelopes", desc: "Large envelopes for full-size documents, contracts, and presentation materials. Available with clasp or self-seal closure.", best: "Contracts, presentations, legal documents" },
  { product: "Custom Notepads", desc: "Branded notepads with your logo and contact information. Available in various sizes from 4×6 memo pads to full 8.5×11 writing pads.", best: "Client gifts, office use, trade show giveaways" },
];

const paperOptions = [
  { stock: "24lb Bond (Bright White)", finish: "Smooth", best: "Standard letterhead — crisp, clean, and professional", writability: "Excellent" },
  { stock: "24lb Bond (Natural/Cream)", finish: "Smooth", best: "Elegant letterhead for law firms, financial services", writability: "Excellent" },
  { stock: "70lb Text (White)", finish: "Smooth or Linen", best: "Premium letterhead with a slightly heavier feel", writability: "Very Good" },
  { stock: "80lb Text (White)", finish: "Smooth, Linen, or Laid", best: "Luxury letterhead — substantial and impressive", writability: "Very Good" },
  { stock: "24lb Linen", finish: "Textured Linen", best: "Prestige stationery — a classic, textured surface", writability: "Good" },
];

const envelopeSizes = [
  { size: "#10 (4.125×9.5)", name: "Business Standard", use: "Everyday business mail, invoices, letters", popular: true },
  { size: "A2 (4.375×5.75)", name: "Note Card", use: "Thank-you notes, small announcements" },
  { size: "A7 (5.25×7.25)", name: "Invitation", use: "Event invitations, greeting cards", popular: true },
  { size: "6×9", name: "Booklet", use: "Booklets, catalogs, multi-page inserts" },
  { size: "9×12", name: "Catalog", use: "Full-size documents, contracts, presentations" },
  { size: "10×13", name: "Large Catalog", use: "Oversized documents, thick packet mailings" },
];

const premiumAddOns = [
  { icon: Gem, title: "Foil Stamping", desc: "Gold, silver, or copper foil on your logo or monogram creates a brilliant, reflective accent that screams premium quality." },
  { icon: Layers, title: "Embossing / Debossing", desc: "Raised or recessed impressions create a dimensional, tactile effect that can be felt when running your fingers across the letterhead." },
  { icon: FileText, title: "Watermark Printing", desc: "A subtle watermark visible when held to light adds an exclusive, prestigious touch typically associated with luxury stationery." },
  { icon: Mail, title: "Matching Stationery Sets", desc: "Letterhead + #10 envelopes + business cards + notepads — all designed to match for a cohesive, professional brand identity." },
];

const faqItems = [
  { q: "What paper should I use for letterhead?", a: "For most businesses, 24lb bond in bright white is the standard — it looks professional, works with laser and inkjet printers, and is cost-effective. For a premium feel, upgrade to 70lb or 80lb text stock. Law firms and financial services often prefer linen or laid textures." },
  { q: "Can I print on my letterhead with a regular printer?", a: "Yes! All our letterhead is compatible with standard laser and inkjet printers. We leave appropriate margins for your printer and can customize the layout to work with your specific printing setup." },
  { q: "What information should be on my letterhead?", a: "At minimum: your logo, company name, address, phone number, email, and website. Many businesses also include their tagline, social media handles, license numbers, or professional certifications." },
  { q: "Do you print inside the envelopes?", a: "Yes — we offer full-color printing inside envelopes for a premium branded experience. Security tint patterns are also available to prevent contents from being read through the envelope." },
  { q: "Can I order matching stationery sets?", a: "Absolutely! Our most popular package includes matching letterhead, #10 envelopes, and business cards. We also offer notepads, memo pads, and compliment slips to complete your stationery suite." },
  { q: "What's the minimum order quantity?", a: "Letterhead starts at 250 sheets and envelopes start at 250 pieces. For the best per-unit pricing, we recommend ordering 500+ of each. Volume discounts are available for large corporate orders." },
  { q: "How fast can you print stationery?", a: "Standard turnaround is 3–5 business days for letterhead and envelopes. Foil stamping and embossing may add 2–3 additional business days. Rush options are available." },
];

const jsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Letterhead & Envelope Printing",
  description: "Custom letterhead and matching envelope printing for Ohio businesses. Premium paper stocks, foil stamping, and coordinated stationery sets.",
  url: "https://www.buckeyebizhub.com/letterhead-and-envelopes",
  provider: { "@type": "LocalBusiness", name: "Buckeye Biz Hub", areaServed: { "@type": "State", name: "Ohio" } },
};

const LetterheadAndEnvelopes = () => {
  usePageTitle("Letterhead & Envelope Printing Columbus OH", "Custom letterhead and matching envelope printing for Ohio businesses. Premium paper, full-color, and coordinated stationery sets. 24-hour quotes.");

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional letterhead and envelopes" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" />Letterhead & Envelopes<Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Professional Letterhead & Matching Envelopes That Elevate Every Correspondence
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold">
              Custom-printed stationery sets that make every letter, invoice, and proposal look polished and professional.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[{ icon: ShieldCheck, label: "No Hidden Fees" }, { icon: BadgeCheck, label: "Wholesale Pricing" }, { icon: ThumbsUp, label: "100% Satisfaction" }].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />{b.label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact"><Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] group uppercase tracking-wider">Get Your Stationery Quote<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Stationery */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why Professional Stationery Still Matters</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Every letter you send is a brand impression. Whether it's a proposal to a potential client, an invoice to a customer, or a thank-you note after a meeting — professional letterhead tells the recipient that you take your business seriously. It's the difference between looking established and looking like you just started yesterday.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Paired with matching printed envelopes, your correspondence arrives looking cohesive and credible from the moment it's pulled from the mailbox. In professional services — law, accounting, real estate, insurance — branded stationery isn't optional. It's expected.</p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Our Stationery Products</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stationeryProducts.map((p, i) => (
              <motion.div key={p.product} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-none shadow-lg"><CardContent className="p-6">
                  <h3 className="font-display text-lg font-black text-foreground mb-3">{p.product}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{p.desc}</p>
                  <p className="text-muted-foreground text-xs"><strong className="text-foreground">Best for:</strong> {p.best}</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-10 text-center">Letterhead Paper Stocks</h2>
            <div className="overflow-x-auto rounded-2xl border shadow-lg bg-card">
              <Table>
                <TableHeader><TableRow className="bg-ohio-navy">
                  <TableHead className="text-primary-foreground font-bold">Stock</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Finish</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Best For</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Writability</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                  {paperOptions.map((p) => (
                    <TableRow key={p.stock}>
                      <TableCell className="font-bold text-foreground">{p.stock}</TableCell>
                      <TableCell className="text-muted-foreground">{p.finish}</TableCell>
                      <TableCell className="text-muted-foreground">{p.best}</TableCell>
                      <TableCell className="text-muted-foreground">{p.writability}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Envelope Sizes */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4"><Ruler className="w-8 h-8 text-primary" /></div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Envelope Size Guide</h2>
            <div className="overflow-x-auto rounded-2xl border shadow-lg bg-card">
              <Table>
                <TableHeader><TableRow className="bg-ohio-navy">
                  <TableHead className="text-primary-foreground font-bold">Size</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Name</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Best For</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                  {envelopeSizes.map((s) => (
                    <TableRow key={s.size}>
                      <TableCell className="font-bold text-foreground">{s.size} {s.popular && <span className="ml-2 text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-extrabold uppercase">Popular</span>}</TableCell>
                      <TableCell className="text-muted-foreground">{s.name}</TableCell>
                      <TableCell className="text-muted-foreground">{s.use}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Add-Ons */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Premium Enhancements</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {premiumAddOns.map((a, i) => (
              <motion.div key={a.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-none shadow-lg"><CardContent className="p-6 flex gap-4">
                  <a.icon className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div><h3 className="font-display text-lg font-black text-foreground mb-2">{a.title}</h3><p className="text-muted-foreground leading-relaxed">{a.desc}</p></div>
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">"I can't tell you how many professionals I meet who have beautiful business cards but send letters on plain white paper. Your letterhead is an extension of your business card — they should match perfectly. I recommend ordering letterhead, envelopes, and business cards together as a set. And if you really want to impress, add a subtle emboss of your logo watermark in the background. Clients notice these details, even subconsciously."</p>
              <p className="font-bold text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Letterhead & Envelopes FAQ</motion.h2>
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
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Ready for stationery that matches your professionalism?</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact"><Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] group uppercase tracking-widest"><Phone className="w-6 h-6" />Get Your Stationery Quote in 24 Hours<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-ohio-navy"><div className="container"><div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
        {["24-Hour Quotes", "Matching Stationery Sets", "Ohio Owned & Operated"].map((item, i) => (<span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide"><Clock className="w-4 h-4 text-primary" />{item}</span>))}
      </div></div></section>

      <RelatedServices />
      <Footer />
    </div>
  );
};

export default LetterheadAndEnvelopes;
