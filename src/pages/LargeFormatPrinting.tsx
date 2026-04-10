import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, Monitor, Layers, FileText, Lightbulb, Quote, Ruler, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import heroImg from "@/assets/large-format-hero.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const productCategories = [
  { title: "Retractable Banner Stands", desc: "Portable, reusable displays that set up in 60 seconds. The #1 choice for trade shows, lobbies, and events. Includes carrying case for easy transport.", sizes: '33×80", 36×92", 48×92"' },
  { title: "Posters & Mounted Prints", desc: "Photo-quality poster printing on premium paper, canvas, or mounted to foam board, Gator board, or aluminum composite for rigid display.", sizes: "Up to 120\" wide, any length" },
  { title: "Wall Murals & Wallpaper", desc: "Transform any wall into a branded experience. Custom wallpaper and adhesive wall graphics printed on repositionable or permanent vinyl.", sizes: "Custom to any wall dimension" },
  { title: "Floor Graphics & Decals", desc: "Anti-slip laminated floor graphics for retail wayfinding, event branding, and promotional displays. Indoor and outdoor options available.", sizes: "Custom sizes and shapes" },
  { title: "Window Clings & Films", desc: "Static cling and adhesive window graphics, including perforated window film that allows one-way visibility from the inside.", sizes: "Custom cut to any window" },
  { title: "Step-and-Repeat Backdrops", desc: "Custom photo backdrops with repeating logos for events, red carpets, press conferences, and social media photo opportunities.", sizes: '8×8\', 8×10\', 10×10\', custom' },
  { title: "Trade Show Displays", desc: "Complete trade show solutions including pop-up displays, tabletop displays, hanging banners, and custom booth graphics.", sizes: "10×10, 10×20, custom" },
  { title: "Yard Signs & A-Frames", desc: "Corrugated plastic yard signs and A-frame sidewalk signs for real estate, political campaigns, events, and directional signage.", sizes: '18×24", 24×36", custom' },
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
  { icon: Monitor, title: "Trade Shows & Conferences", desc: "Stand out on the show floor with professional displays that attract foot traffic and communicate your brand at a glance. We handle everything from retractable banners to full booth graphics." },
  { icon: Lightbulb, title: "Retail & Point-of-Purchase", desc: "Window displays, floor graphics, wall murals, and hanging signs that drive foot traffic and promote products directly at the point of sale." },
  { icon: FileText, title: "Corporate Offices & Lobbies", desc: "Transform your workspace with branded wall murals, lobby displays, mission statement walls, and directional signage that reflects your company culture." },
  { icon: Layers, title: "Events & Celebrations", desc: "Step-and-repeat backdrops, welcome banners, directional signage, and photo opportunities that make any event look professional and Instagram-worthy." },
];

const faqItems = [
  { q: "What resolution do I need for large format printing?", a: "For most large format prints, 150 DPI at the final print size produces excellent results. For prints viewed from a distance (like banners and wall murals), 100 DPI is sufficient. For close-up viewing (posters, trade show graphics), 300 DPI is ideal." },
  { q: "What's the maximum size you can print?", a: "Our large format printers handle widths up to 120 inches (10 feet) with virtually unlimited length. For larger installations, we tile and seamlessly join panels. Custom sizes and shapes are our specialty." },
  { q: "Are your prints weatherproof?", a: "Yes — we use UV-resistant, fade-proof inks and can print on weatherproof substrates like vinyl, Coroplast, and aluminum composite. Outdoor prints include UV lamination for maximum lifespan." },
  { q: "Do you offer installation?", a: "Yes! We provide professional installation services throughout Ohio for wall murals, window graphics, floor decals, and large displays. Our installers ensure bubble-free, perfectly aligned results." },
  { q: "How long do large format prints last?", a: "Lifespan varies by material and environment. Indoor prints on vinyl or canvas last 5–10+ years. Outdoor prints with UV lamination typically last 3–5 years. Aluminum composite signage can last 10+ years." },
  { q: "What file formats do you accept?", a: "We accept AI, PSD, PDF, EPS, and high-resolution TIFF/JPEG files. For best results, submit vector files when possible. We provide free file checks and can help prepare your artwork for large format output." },
  { q: "Can I get a sample or proof?", a: "Yes — we offer printed proofs for color-critical projects and can provide material samples so you can see and feel the substrate before committing to a large order." },
];

const jsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Large Format Printing",
  description: "Large format printing for posters, banners, wall murals, trade show displays, and custom signage. UV-resistant, weatherproof printing for Ohio businesses.",
  url: "https://www.buckeyebizhub.com/large-format-printing",
  provider: { "@type": "LocalBusiness", name: "Buckeye Biz Hub", areaServed: { "@type": "State", name: "Ohio" } },
};

const LargeFormatPrinting = () => {
  usePageTitle("Large Format Printing Columbus OH", "Large format printing for posters, wall graphics, floor graphics, retractable banners, and trade show displays. Premium quality for Ohio businesses.");

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Large format printing and trade show displays" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" />Large Format Printing<Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Large Format Printing That Commands Attention From Across the Room
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold">
              Posters, wall graphics, floor graphics, retractable banners, trade show displays, and more — printed big, bold, and beautiful.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[{ icon: ShieldCheck, label: "UV-Resistant Inks" }, { icon: BadgeCheck, label: "Wholesale Pricing" }, { icon: ThumbsUp, label: "100% Satisfaction" }].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />{b.label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact"><Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] group uppercase tracking-wider">Get Your Large Format Quote<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Large Format */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">When You Need to Make a Big Impression</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Large format printing transforms spaces, attracts attention, and communicates your brand message at scale. From a towering retractable banner at a trade show to a vivid wall mural in your office lobby — oversized printing creates experiences that small-format simply can't match.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">We print on every substrate imaginable — vinyl, fabric, canvas, foam board, corrugated plastic, aluminum composite, and more. Our large format printers produce photo-quality output up to 120 inches wide with UV-resistant, fade-proof inks that maintain their vibrancy for years, indoors and out.</p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">What We Print</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Materials & Substrates Guide</h2>
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
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-8 text-center">Design Tips from David</h2>
            <div className="bg-card rounded-2xl p-8 md:p-10 border-l-4 border-primary shadow-lg">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">"The biggest mistake I see at trade shows is tiny text on banners. Remember — people are viewing your banner from 10 to 20 feet away. Your headline should be readable from across the aisle. Stick to your company name, one key message, and a clear call to action. And always invest in a retractable banner stand — they look 10x more professional than a banner draped over a table, and they last for years of shows."</p>
              <p className="font-bold text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Ready to think big with your next project?</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact"><Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] group uppercase tracking-widest"><Phone className="w-6 h-6" />Get Your Large Format Quote in 24 Hours<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></Button></Link>
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
