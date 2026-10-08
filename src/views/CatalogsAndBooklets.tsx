"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, BookOpen, Layers, FileText, Lightbulb, Quote, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
const heroImg = "/assets/catalogs-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const bindingTypes = [
  { type: "Saddle-stitched", pages: "8–64 pages", desc: "Stapled on the spine. The cheapest and most popular binding for slim catalogs, programs and newsletters. Lies fairly flat when open.", best: "Product lookbooks, event programs, newsletters, small catalogs" },
  { type: "Perfect-bound", pages: "28–200+ pages", desc: "Pages glued to a flat spine, like a paperback. You can print your title on the spine so it reads on a shelf.", best: "Thick product catalogs, annual reports, company capabilities booklets" },
  { type: "Wire-O (Spiral)", pages: "Any page count", desc: "Metal wire binding. Pages lie flat or fold all the way back. Very durable.", best: "Training manuals, recipe books, reference guides, presentations" },
  { type: "Coil binding", pages: "Any page count", desc: "Plastic coil, like wire-o but cheaper. Comes in colors to match your brand.", best: "Workbooks, planners, instructional guides, internal documents" },
];

const paperOptions = [
  { stock: "70lb Text", finish: "Gloss or Matte", best: "Inside pages for catalogs and booklets. Light and affordable", feel: "Smooth, easy to flip through" },
  { stock: "80lb Text", finish: "Gloss, Matte, or Satin", best: "Inside pages with more heft", feel: "Substantial without being stiff" },
  { stock: "100lb Text", finish: "Gloss or Matte", best: "High-end catalogs where photos matter most", feel: "Thick, magazine-quality pages" },
  { stock: "80lb Cover", finish: "Gloss, Matte, or Soft-Touch", best: "Covers that feel solid and protect the pages", feel: "Rigid cover with a professional look" },
  { stock: "100lb Cover", finish: "Gloss, Matte, Soft-Touch, Spot UV", best: "Top covers for perfect-bound catalogs and annual reports", feel: "Heavy, book-quality cover" },
];

const popularSizes = [
  { size: '5.5" × 8.5"', name: "Half Letter", use: "Compact catalogs, pocket guides, programs" },
  { size: '6" × 9"', name: "Digest", use: "Booklets, literary publications, product guides" },
  { size: '8.5" × 11"', name: "Full Letter", use: "Standard product catalogs, annual reports, manuals" },
  { size: '8.5" × 5.5"', name: "Landscape", use: "Photography portfolios, real estate booklets" },
  { size: '9" × 12"', name: "Oversized", use: "Premium lookbooks, coffee table style catalogs" },
];

const useCases = [
  { icon: BookOpen, title: "Product catalogs", desc: "Your whole product line with photos, specs and pricing. A catalog puts your products in the customer's hands. Literally." },
  { icon: FileText, title: "Annual reports", desc: "Your year, your numbers and your plan in a report people keep on the desk." },
  { icon: Layers, title: "Capabilities booklets", desc: "Show prospects everything you can do. Good for B2B companies, contractors and professional firms." },
  { icon: Lightbulb, title: "Training manuals", desc: "Wire-o manuals that lie flat. Good for onboarding, safety procedures and technical training." },
];

const faqItems = [
  { q: "What binding style should I choose?", a: "Under 64 pages, saddle-stitch. It's the best value and looks professional. For thicker books (28+ pages), perfect binding gives you a printed spine. For manuals and reference guides, wire-o lets pages lie flat." },
  { q: "What's the minimum page count?", a: "Saddle-stitched starts at 8 pages (2 sheets folded), and the page count has to be a multiple of 4. Perfect-bound usually needs at least 28 pages to make a real spine." },
  { q: "Can you design our catalog from scratch?", a: "Yes. We can build the whole thing: photo retouching, page layouts, type and cover. We revise until you're happy." },
  { q: "What paper stock should I use for interior pages?", a: "For catalogs with photos, 80lb gloss text. Colors come out great and it feels premium. For text-heavy books like manuals, 70lb matte text cuts glare and reads easier." },
  { q: "How quickly can you print catalogs?", a: "Saddle-stitched takes 5–7 business days after you approve the proof. Perfect-bound takes 7–10. Rush is available." },
  { q: "What file format should I submit?", a: "Print-ready PDF at 300 DPI with 0.125\" bleed is best. We also take InDesign, Illustrator and Photoshop files. Need design help? Send us your content and images." },
  { q: "Do you offer short-run printing?", a: "Yes. Digital printing makes runs as small as 25 copies affordable. At 500+, offset gets you a better price per copy and very consistent color." },
];

const CatalogsAndBooklets = () => {
  usePageSEO({ title: "Catalogs & Booklets Printing Columbus OH", description: "Custom catalog and booklet printing for Ohio businesses. Saddle-stitched, perfect-bound and wire-o. We source from top printers for the best price." });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional catalogs and booklets for Ohio businesses" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" />Catalogs & Booklets<Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Catalogs & Booklets That Sell Your Products
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold">
              Saddle-stitched, perfect-bound or wire-o. Good paper, full color.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[{ icon: ShieldCheck, label: "No Hidden Fees" }, { icon: BadgeCheck, label: "Wholesale Pricing" }, { icon: ThumbsUp, label: "100% Satisfaction" }].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />{b.label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact"><Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl group ">Get Your Catalog Quote<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Catalogs */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why Printed Catalogs Still Drive Sales</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Websites are great. A printed catalog still sells. A catalog puts your whole line in the customer's hands. A website can't do that.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Manufacturer with industrial parts, retailer with seasonal lines, distributor with thousands of SKUs: a good catalog sits on desks, workbenches and coffee tables for months.</p>
          </motion.div>
        </div>
      </section>

      {/* Binding Types */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">Binding Options Explained</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Pick your binding by page count, budget and how people will use it.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bindingTypes.map((b, i) => (
              <motion.div key={b.type} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-none shadow-lg"><CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-display text-xl font-black text-foreground">{b.type}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">{b.pages}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">{b.desc}</p>
                  <p className="text-muted-foreground text-sm"><strong className="text-foreground">Best for:</strong> {b.best}</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-10 text-center">Paper Stocks & Cover Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paperOptions.map((p) => (
                <Card key={p.stock} className="border-none shadow-lg"><CardContent className="p-6">
                  <h3 className="font-display text-lg font-black text-foreground mb-2">{p.stock}</h3>
                  <p className="text-muted-foreground text-sm mb-1"><strong>Finish:</strong> {p.finish}</p>
                  <p className="text-muted-foreground text-sm mb-1"><strong>Best for:</strong> {p.best}</p>
                  <p className="text-muted-foreground text-sm"><strong>Feel:</strong> {p.feel}</p>
                </CardContent></Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4"><Ruler className="w-8 h-8 text-primary" /></div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Popular Catalog Sizes</h2>
            <div className="overflow-x-auto rounded-2xl border shadow-lg bg-card">
              <Table>
                <TableHeader><TableRow className="bg-ohio-navy">
                  <TableHead className="text-primary-foreground font-bold">Size</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Name</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Best For</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                  {popularSizes.map((s) => (
                    <TableRow key={s.size}>
                      <TableCell className="font-bold text-foreground">{s.size}</TableCell>
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

      {/* Use Cases */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Popular Use Cases</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">"The most common catalog mistake I see is thin paper to save a few bucks. Customers notice, and it makes you look cheap. I recommend 80lb gloss text inside and 100lb cover outside. Doing perfect binding? Spend the money on a spot UV or soft-touch cover. It's the first thing people touch, and it sets the tone for everything inside."</p>
              <p className="font-bold text-foreground">David Stein, co-founder, Buckeye Biz Hub</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Catalogs & Booklets FAQ</motion.h2>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,14%,12%)] via-primary to-[hsl(216,14%,12%)]" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Ready to create a catalog that sells for you?</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact"><Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] group "><Phone className="w-6 h-6" />Get Your Catalog Quote in 24 Hours<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-ohio-navy"><div className="container"><div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
        {["24-Hour Quotes", "Short-Run & Offset Printing", "Ohio Owned & Operated"].map((item, i) => (<span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide"><Clock className="w-4 h-4 text-primary" />{item}</span>))}
      </div></div></section>

      <RelatedServices />
      <Footer />
    </div>
  );
};

export default CatalogsAndBooklets;
