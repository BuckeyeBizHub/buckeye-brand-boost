"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, Monitor, Layers, FileText, Lightbulb, Quote, Ruler, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
const heroImg = "/assets/large-format-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const productCategories = [
  { title: "Retractable banner stands", desc: "Portable, reusable, sets up in 60 seconds. The go-to for trade shows, lobbies and events. Comes with a carrying case.", sizes: '33×80", 36×92", 48×92"' },
  { title: "Posters & mounted prints", desc: "Photo-quality posters on paper or canvas, or mounted to foam board, Gator board or aluminum composite.", sizes: "Up to 120\" wide, any length" },
  { title: "Wall murals & wallpaper", desc: "Put your brand on any wall. Custom wallpaper and wall graphics on repositionable or permanent vinyl.", sizes: "Custom to any wall dimension" },
  { title: "Floor graphics & decals", desc: "Anti-slip laminated floor graphics for wayfinding, events and promotions. Indoor and outdoor.", sizes: "Custom sizes and shapes" },
  { title: "Window clings & films", desc: "Static cling and adhesive window graphics, plus perforated film you can see out of from inside.", sizes: "Custom cut to any window" },
  { title: "Step-and-repeat backdrops", desc: "Photo backdrops with your logo repeated. For events, press conferences and photo ops.", sizes: '8×8\', 8×10\', 10×10\', custom' },
  { title: "Trade show displays", desc: "Pop-ups, tabletop displays, hanging banners and custom booth graphics.", sizes: "10×10, 10×20, custom" },
  { title: "Yard signs & A-frames", desc: "Corrugated plastic yard signs and A-frame sidewalk signs for real estate, campaigns, events and directions.", sizes: '18×24", 24×36", custom' },
];

const substrates = [
  { material: "Vinyl (Adhesive)", indoor: "✓", outdoor: "✓", best: "Wall graphics, window decals, vehicle graphics", durability: "3–7 years" },
  { material: "Vinyl (Banner)", indoor: "✓", outdoor: "✓", best: "Hanging banners, fence banners, event displays", durability: "3–5 years" },
  { material: "Fabric / Dye-Sub", indoor: "✓", outdoor: "Limited", best: "Trade show displays, backdrops, flags", durability: "Indoor: 5+ years" },
  { material: "Canvas", indoor: "✓", outdoor: "No", best: "Art prints, photo reproductions, wall decor", durability: "Indoor: 10+ years" },
  { material: "Foam Board (3/16\" & 1/2\")", indoor: "✓", outdoor: "No", best: "Point-of-purchase displays, presentations", durability: "Temporary / indoor" },
  { material: "Gator Board", indoor: "✓", outdoor: "Limited", best: "Long-lasting displays, signage, photo mounts", durability: "1–3 years" },
  { material: "Coroplast (Corrugated Plastic)", indoor: "✓", outdoor: "✓", best: "Yard signs, temporary outdoor signage", durability: "1–2 years outdoor" },
  { material: "Aluminum Composite", indoor: "✓", outdoor: "✓", best: "Permanent signage, architectural displays", durability: "5–10+ years" },
];

const useCases = [
  { icon: Monitor, title: "Trade shows & conferences", desc: "Stand out on the show floor and pull people into your booth. Retractable banners up to full booth graphics." },
  { icon: Lightbulb, title: "Retail & point-of-purchase", desc: "Window displays, floor graphics, murals and hanging signs that sell right where people buy." },
  { icon: FileText, title: "Offices & lobbies", desc: "Wall murals, lobby displays, mission statement walls and directional signs that show who you are." },
  { icon: Layers, title: "Events & celebrations", desc: "Step-and-repeats, welcome banners, directional signs and photo spots. Your event looks good in person and online." },
];

const faqItems = [
  { q: "What resolution do I need for large format printing?", a: "Most large prints look great at 150 DPI at final size. Banners and murals seen from a distance are fine at 100 DPI. For close-up pieces like posters and trade show graphics, go 300 DPI." },
  { q: "What's the maximum size you can print?", a: "Up to 120 inches (10 feet) wide, and nearly any length. Bigger than that, we tile panels and join them clean. Custom sizes and shapes are our specialty." },
  { q: "Are your prints weatherproof?", a: "Yes. We use UV-resistant, fade-proof inks on weatherproof materials like vinyl, Coroplast and aluminum composite. Outdoor prints get UV lamination so they last." },
  { q: "Do you offer installation?", a: "Yes. Our installer partners handle murals, window graphics, floor decals and large displays across Ohio. No bubbles, lined up right." },
  { q: "How long do large format prints last?", a: "Depends on the material and where it lives. Indoor vinyl or canvas: 5–10+ years. Outdoor with UV lamination: usually 3–5 years. Aluminum composite signs: 10+ years." },
  { q: "What file formats do you accept?", a: "AI, PSD, PDF, EPS and high-res TIFF or JPEG. Vector files work best. We check your files for free and can help prep your artwork." },
  { q: "Can I get a sample or proof?", a: "Yes. We do printed proofs when color matters, and we can get you material samples to see and feel before a big order." },
];

const LargeFormatPrinting = () => {
  usePageSEO({ title: "Large Format Printing Columbus OH", description: "Large format printing for posters, wall graphics, banners and trade show displays. We source from top Ohio print shops for the best quality and price." });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Large format printing and trade show displays" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" />Large Format Printing<Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Large Format Printing People See From Across the Room
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold">
              Posters, wall and floor graphics, retractable banners, trade show displays and more. Printed big.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[{ icon: ShieldCheck, label: "UV-Resistant Inks" }, { icon: BadgeCheck, label: "Wholesale Pricing" }, { icon: ThumbsUp, label: "100% Satisfaction" }].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />{b.label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact"><Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl group ">Get Your Large Format Quote<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Large Format */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">When You Need to Make a Big Impression</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Big prints change a room and get noticed. A tall banner at a trade show. A mural in your lobby. Small print can't do that.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Vinyl, fabric, canvas, foam board, corrugated plastic, aluminum composite and more. Our print partners run photo-quality output up to 120 inches wide with UV-resistant inks that hold color for years, inside and out.</p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">What We Print</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((p, i) => (
              <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Card className="h-full border-none shadow-lg"><CardContent className="p-6">
                  <h3 className="font-display text-lg font-black text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{p.desc}</p>
                  <p className="text-muted-foreground text-xs"><strong className="text-foreground">Available sizes:</strong> {p.sizes}</p>
                </CardContent></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Guide */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4"><Maximize className="w-8 h-8 text-primary" /></div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Materials Guide</h2>
            <div className="overflow-x-auto rounded-2xl border shadow-lg bg-card">
              <Table>
                <TableHeader><TableRow className="bg-ohio-navy">
                  <TableHead className="text-primary-foreground font-bold">Material</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Indoor</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Outdoor</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Best For</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Durability</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                  {substrates.map((s) => (
                    <TableRow key={s.material}>
                      <TableCell className="font-bold text-foreground">{s.material}</TableCell>
                      <TableCell className="text-muted-foreground">{s.indoor}</TableCell>
                      <TableCell className="text-muted-foreground">{s.outdoor}</TableCell>
                      <TableCell className="text-muted-foreground">{s.best}</TableCell>
                      <TableCell className="text-muted-foreground">{s.durability}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Popular Applications</motion.h2>
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
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-8 text-center">Design Tips from David</h2>
            <div className="bg-card rounded-2xl p-8 md:p-10 border-l-4 border-primary shadow-lg">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">"The biggest mistake I see at trade shows is tiny text on banners. People read your banner from 10 to 20 feet away. Your headline needs to read from across the aisle. Stick to your company name, one message and a clear call to action. And buy a retractable stand. It looks 10x better than a banner draped over a table, and it lasts for years of shows."</p>
              <p className="font-bold text-foreground">David Stein, co-founder, Buckeye Biz Hub</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Large Format Printing FAQ</motion.h2>
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
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Ready to think big with your next project?</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact"><Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] group "><Phone className="w-6 h-6" />Get Your Large Format Quote in 24 Hours<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-ohio-navy"><div className="container"><div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
        {["24-Hour Quotes", "Installation Available", "Ohio Owned & Operated"].map((item, i) => (<span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide"><Clock className="w-4 h-4 text-primary" />{item}</span>))}
      </div></div></section>

      <RelatedServices />
      <Footer />
    </div>
  );
};

export default LargeFormatPrinting;
