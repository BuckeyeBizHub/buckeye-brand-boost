import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, Mail, Ruler, Layers, FileText, Lightbulb, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import heroImg from "@/assets/postcards-hero.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const postcardSizes = [
  { size: '4" × 6"', use: "Standard direct mail, promotions, coupons", postage: "First-Class letter rate", popular: true },
  { size: '4.25" × 5.5"', use: "A2 size — invitations, thank-you cards", postage: "First-Class letter rate", popular: false },
  { size: '5" × 7"', use: "Event invitations, premium mailers", postage: "First-Class letter rate", popular: false },
  { size: '6" × 9"', use: "Maximum impact — stands out in the mailbox", postage: "First-Class flat rate", popular: true },
  { size: '6" × 11"', use: "Jumbo mailer — real estate, automotive, HVAC", postage: "First-Class flat rate", popular: false },
  { size: '8.5" × 11"', use: "Full-page mailer — menus, catalogs, detailed offers", postage: "First-Class flat rate", popular: false },
];

const paperOptions = [
  { stock: "14pt Gloss", finish: "High-gloss UV coating", best: "Vibrant colors, photo-heavy designs", durability: "Good" },
  { stock: "14pt Matte", finish: "Smooth matte coating", best: "Elegant, easy-to-write-on surface", durability: "Good" },
  { stock: "16pt Premium", finish: "Gloss, matte, or soft-touch", best: "Thicker feel, premium branding", durability: "Better" },
  { stock: "16pt Uncoated", finish: "Natural, writable surface", best: "Handwritten notes, RSVP cards", durability: "Better" },
];

const useCases = [
  { icon: Mail, title: "Direct Mail Campaigns", desc: "Reach targeted neighborhoods and ZIP codes with EDDM (Every Door Direct Mail) postcards — no mailing list required." },
  { icon: Lightbulb, title: "Grand Openings & Events", desc: "Announce your new location, open house, or special event with eye-catching oversized postcards." },
  { icon: FileText, title: "Seasonal Promotions", desc: "Holiday sales, spring cleaning specials, back-to-school deals — postcards drive immediate action." },
  { icon: Layers, title: "Appointment Reminders", desc: "Dentists, salons, and service businesses use postcards as friendly, tangible appointment reminders." },
];

const faqItems = [
  { q: "What size postcard is best for direct mail?", a: "The 4\" × 6\" is the most popular and cost-effective for USPS mailing. For maximum impact, the 6\" × 9\" jumbo postcard stands out in the mailbox and qualifies for automation rates." },
  { q: "Can you help with mailing?", a: "Yes — we can coordinate EDDM (Every Door Direct Mail) campaigns where you select ZIP codes and carrier routes. No mailing list needed. We handle printing, bundling, and USPS delivery." },
  { q: "What paper stock should I use?", a: "14pt gloss is the industry standard for vibrant, photo-rich postcards. If you want a writable surface for handwritten notes, choose 16pt uncoated. For a luxury feel, go with 16pt soft-touch." },
  { q: "How quickly can I get postcards printed?", a: "Standard turnaround is 3–5 business days after proof approval. Rush options are available for 1–2 day turnaround at an additional cost." },
  { q: "Do you offer design services?", a: "Absolutely — custom design is included in every quote. Our designers create eye-catching, conversion-focused postcard designs with unlimited revisions until you're happy." },
  { q: "What finishes are available?", a: "Gloss UV, matte, soft-touch lamination, spot UV on specific areas, and even foil stamping for premium mailers. We'll recommend the best finish for your goals." },
];

const jsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Custom Postcards & Direct Mail Printing",
  description: "Premium postcard printing for direct mail campaigns, promotions, and events. Multiple sizes, paper stocks, and finishes available with 24-hour quotes.",
  url: "https://www.buckeyebizhub.com/postcards",
  provider: { "@type": "LocalBusiness", name: "Buckeye Biz Hub", areaServed: { "@type": "State", name: "Ohio" } },
};

const Postcards = () => {
  usePageTitle("Custom Postcards & Direct Mail Printing Columbus OH", "Premium postcard printing for direct mail, promotions, and events. Multiple sizes from 4×6 to 8.5×11, premium paper stocks, and EDDM mailing services. 24-hour quotes from Buckeye Biz Hub.");

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Custom printed postcards for Ohio businesses" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" />Custom Postcards & Direct Mail<Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Custom Postcards That Get Opened, Read & Acted On
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold">
              From targeted direct mail campaigns to event invitations — premium postcards printed on thick, vibrant stock with fast turnaround.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[{ icon: ShieldCheck, label: "EDDM Mailing Available" }, { icon: BadgeCheck, label: "Wholesale Pricing" }, { icon: ThumbsUp, label: "100% Satisfaction" }].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />{b.label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact"><Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] group uppercase tracking-wider">Get Your Postcard Quote<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Postcards */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why Postcards Still Dominate Direct Marketing</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Postcards have one massive advantage over digital marketing: they physically land in your customer's hands. Studies show direct mail has a 4.4% response rate compared to email's 0.12% — that's 36x more effective. For Ohio service businesses, HVAC companies, realtors, restaurants, and dental offices, postcards are the proven way to fill your schedule and drive foot traffic.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Unlike emails that get deleted or social media posts that get scrolled past, a postcard sits on the kitchen counter for days. With the right offer and a compelling design, postcards convert browsers into buyers — and they're one of the most affordable print marketing tools available.</p>
          </motion.div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4"><Ruler className="w-8 h-8 text-primary" /></div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Postcard Size Guide</h2>
            <div className="overflow-x-auto rounded-2xl border shadow-lg bg-card">
              <Table>
                <TableHeader><TableRow className="bg-ohio-navy">
                  <TableHead className="text-primary-foreground font-bold">Size</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Best For</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Postage</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                  {postcardSizes.map((s) => (
                    <TableRow key={s.size}>
                      <TableCell className="font-bold text-foreground">{s.size} {s.popular && <span className="ml-2 text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-extrabold uppercase">Popular</span>}</TableCell>
                      <TableCell className="text-muted-foreground">{s.use}</TableCell>
                      <TableCell className="text-muted-foreground">{s.postage}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Paper Options */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-10 text-center">Paper Stocks & Finishes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {paperOptions.map((p) => (
                <Card key={p.stock} className="border-none shadow-lg"><CardContent className="p-6">
                  <h3 className="font-display text-lg font-black text-foreground mb-2">{p.stock}</h3>
                  <p className="text-muted-foreground text-sm mb-1"><strong>Finish:</strong> {p.finish}</p>
                  <p className="text-muted-foreground text-sm mb-1"><strong>Best for:</strong> {p.best}</p>
                  <p className="text-muted-foreground text-sm"><strong>Durability:</strong> {p.durability}</p>
                </CardContent></Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Popular Postcard Use Cases</motion.h2>
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">"The biggest mistake I see with postcards is cramming too much information on them. Your postcard has about 3 seconds to grab attention. Lead with a bold headline, one irresistible offer, and a clear call-to-action. The 6×9 jumbo size is my go-to recommendation — it's the sweet spot between impact and postage cost."</p>
              <p className="font-bold text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Postcards FAQ</motion.h2>
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
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Ready to launch your next direct mail campaign?</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact"><Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] group uppercase tracking-widest"><Phone className="w-6 h-6" />Get Your Postcard Quote in 24 Hours<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-ohio-navy"><div className="container"><div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
        {["24-Hour Quotes", "EDDM Mailing Available", "Ohio Owned & Operated"].map((item, i) => (<span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide"><Clock className="w-4 h-4 text-primary" />{item}</span>))}
      </div></div></section>

      <RelatedServices />
      <Footer />
    </div>
  );
};

export default Postcards;
