import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, BookOpen, Layers, FileText, Lightbulb, Quote, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import heroImg from "@/assets/catalogs-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const bindingTypes = [
  { type: "Saddle-Stitched", pages: "8–64 pages", desc: "Stapled along the spine — the most affordable and popular binding for slim catalogs, programs, and newsletters. Lays relatively flat when open.", best: "Product lookbooks, event programs, newsletters, small catalogs" },
  { type: "Perfect-Bound", pages: "28–200+ pages", desc: "Pages are glued to a flat spine, creating a professional book-like appearance. The spine can be printed with your title and branding — perfect for shelf display.", best: "Thick product catalogs, annual reports, company capabilities booklets" },
  { type: "Wire-O (Spiral)", pages: "Any page count", desc: "Metal wire binding that allows pages to lay completely flat or fold back on themselves. Extremely durable and functional.", best: "Training manuals, recipe books, reference guides, presentations" },
  { type: "Coil Binding", pages: "Any page count", desc: "Plastic coil binding similar to wire-o but more affordable. Available in multiple colors to match your brand.", best: "Workbooks, planners, instructional guides, internal documents" },
];

const paperOptions = [
  { stock: "70lb Text", finish: "Gloss or Matte", best: "Interior pages for catalogs and booklets — lightweight and cost-effective", feel: "Smooth, easy to flip through" },
  { stock: "80lb Text", finish: "Gloss, Matte, or Satin", best: "Premium interior pages with extra heft and durability", feel: "Substantial without being stiff" },
  { stock: "100lb Text", finish: "Gloss or Matte", best: "High-end catalogs where photo quality is paramount", feel: "Thick, magazine-quality pages" },
  { stock: "80lb Cover", finish: "Gloss, Matte, or Soft-Touch", best: "Catalog covers that need to feel substantial and protective", feel: "Rigid cover with a professional look" },
  { stock: "100lb Cover", finish: "Gloss, Matte, Soft-Touch, Spot UV", best: "Premium covers for perfect-bound catalogs and annual reports", feel: "Heavy, luxurious, book-quality cover" },
];

const popularSizes = [
  { size: '5.5" × 8.5"', name: "Half Letter", use: "Compact catalogs, pocket guides, programs" },
  { size: '6" × 9"', name: "Digest", use: "Booklets, literary publications, product guides" },
  { size: '8.5" × 11"', name: "Full Letter", use: "Standard product catalogs, annual reports, manuals" },
  { size: '8.5" × 5.5"', name: "Landscape", use: "Photography portfolios, real estate booklets" },
  { size: '9" × 12"', name: "Oversized", use: "Premium lookbooks, coffee table style catalogs" },
];

const useCases = [
  { icon: BookOpen, title: "Product Catalogs", desc: "Showcase your entire product line with professional photography, detailed specifications, and pricing. A catalog puts your products in your customer's hands — literally." },
  { icon: FileText, title: "Annual Reports", desc: "Present your company's achievements, financials, and vision with a polished, professional publication that stakeholders will keep and reference." },
  { icon: Layers, title: "Capabilities Booklets", desc: "Show prospective clients everything your company can do. Perfect for B2B companies, contractors, and professional service firms." },
  { icon: Lightbulb, title: "Training Manuals", desc: "Wire-o bound manuals that lay flat for easy reference. Ideal for employee onboarding, safety procedures, and technical training." },
];

const faqItems = [
  { q: "What binding style should I choose?", a: "For catalogs under 64 pages, saddle-stitching is the most cost-effective and professional option. For thicker publications (28+ pages), perfect binding gives you a book-like spine that can be printed with your title. For manuals and reference guides, wire-o binding allows pages to lay completely flat." },
  { q: "What's the minimum page count?", a: "Saddle-stitched booklets start at 8 pages (2 sheets folded). Perfect-bound catalogs typically need a minimum of 28 pages to create a proper spine. Page counts must be in multiples of 4 for saddle-stitching." },
  { q: "Can you design our catalog from scratch?", a: "Absolutely! Our design team can create your entire catalog layout from scratch — including product photography retouching, page layouts, typography, and cover design. We'll work with you on revisions until it's perfect." },
  { q: "What paper stock should I use for interior pages?", a: "For most product catalogs with photos, 80lb gloss text provides excellent color reproduction and a premium feel. If your catalog is text-heavy (like a manual), 70lb matte text reduces glare and is easier to read." },
  { q: "How quickly can you print catalogs?", a: "Standard turnaround is 5–7 business days after proof approval for saddle-stitched catalogs, and 7–10 business days for perfect-bound. Rush options are available for tight deadlines." },
  { q: "What file format should I submit?", a: "We prefer print-ready PDFs with 300 DPI resolution and 0.125\" bleed. We also accept InDesign, Illustrator, and Photoshop files. If you need design help, just send us your content and images." },
  { q: "Do you offer short-run printing?", a: "Yes! Digital printing allows cost-effective runs starting at just 25 copies. For larger quantities (500+), offset printing provides even better per-unit pricing with exceptional color consistency." },
];

const jsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Catalog & Booklet Printing",
  description: "Professional catalog and booklet printing with saddle-stitching, perfect binding, and wire-o options. Premium paper stocks and full-color printing for Ohio businesses.",
  url: "https://www.buckeyebizhub.com/catalogs-and-booklets",
  provider: { "@type": "LocalBusiness", name: "Buckeye Biz Hub", areaServed: { "@type": "State", name: "Ohio" } },
};

const CatalogsAndBooklets = () => {
  usePageSEO({ title: "Catalogs & Booklets Printing Columbus OH", description: "Professional catalog and booklet printing — saddle-stitched, perfect-bound, and wire-o binding. Full-color, premium paper stocks, and fast turnaround for Ohio businesses." });

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional catalogs and booklets for Ohio businesses" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" />Catalogs & Booklets<Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Professional Catalogs & Booklets That Showcase Your Products Beautifully
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold">
              Saddle-stitched, perfect-bound, and wire-o binding options with premium paper stocks and vibrant full-color printing.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[{ icon: ShieldCheck, label: "No Hidden Fees" }, { icon: BadgeCheck, label: "Wholesale Pricing" }, { icon: ThumbsUp, label: "100% Satisfaction" }].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />{b.label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact"><Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] group uppercase tracking-wider">Get Your Catalog Quote<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Catalogs */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why Printed Catalogs Still Drive Sales</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">In the age of websites and social media, printed catalogs remain one of the most effective sales tools available. Research shows that customers who receive a printed catalog spend 28% more than those who only browse online. A catalog puts your entire product line in your customer's hands — something a website simply can't replicate.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Whether you're a manufacturer showcasing industrial parts, a retailer presenting seasonal collections, or a distributor listing thousands of SKUs — a professionally printed catalog gives your products the presentation they deserve and keeps your brand on desks, in workshops, and on coffee tables for months.</p>
          </motion.div>
        </div>
      </section>

      {/* Binding Types */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">Binding Options Explained</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Choose the right binding style for your page count, budget, and how your catalog will be used.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">"The most common mistake I see with catalogs is using thin paper to save money. Your customers will notice — and it cheapens your brand. I always recommend 80lb gloss text for interiors and 100lb cover for the outside. And if you're doing perfect binding, invest in a spot UV or soft-touch cover — it's the first thing people touch, and that tactile impression sets the tone for everything inside."</p>
              <p className="font-bold text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Ready to create a catalog that sells for you?</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact"><Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] group uppercase tracking-widest"><Phone className="w-6 h-6" />Get Your Catalog Quote in 24 Hours<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></Button></Link>
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
