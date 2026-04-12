import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, UtensilsCrossed, Layers, FileText, Lightbulb, Quote, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import heroImg from "@/assets/menus-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const menuStyles = [
  { style: "Single-Page Laminated", desc: "One sheet, front and back, sealed in heavy-duty lamination. Waterproof, wipeable, and virtually indestructible for daily restaurant use.", best: "Quick-service restaurants, diners, cafes, food trucks" },
  { style: "Bi-Fold Menu", desc: "Two panels (4 pages) with a center fold. The most popular format for sit-down restaurants with a moderate-sized menu.", best: "Family restaurants, bistros, pubs, casual dining" },
  { style: "Tri-Fold Menu", desc: "Three panels (6 pages) with plenty of room for appetizers, entrees, desserts, and drink menus all in one piece.", best: "Full-service restaurants, bars with food, catering menus" },
  { style: "Booklet Menu", desc: "Multi-page saddle-stitched booklet for extensive menus. Perfect for wine lists, tasting menus, and restaurants with large offerings.", best: "Fine dining, wine bars, breweries with extensive drink lists" },
  { style: "Table Tents", desc: "Free-standing tent-fold displays that sit on tables, counters, and bar tops. Perfect for promoting specials, happy hours, and seasonal items.", best: "Drink specials, dessert features, QR code ordering" },
  { style: "Disposable Menus", desc: "Cost-effective single-use menus on lighter paper stocks. Ideal for high-turnover establishments or situations requiring fresh menus for each guest.", best: "High-volume restaurants, events, catering, room service" },
];

const paperOptions = [
  { stock: "100lb Gloss Text", lamination: "Optional", best: "Disposable menus, seasonal inserts", durability: "Light use" },
  { stock: "100lb Gloss Cover", lamination: "Recommended", best: "Bi-fold and tri-fold menus", durability: "Moderate use" },
  { stock: "14pt Card Stock", lamination: "Heavy-duty", best: "Single-page laminated menus", durability: "Heavy daily use" },
  { stock: "16pt Card Stock", lamination: "Heavy-duty", best: "Premium laminated menus, table tents", durability: "Maximum durability" },
];

const tableTentSizes = [
  { size: '4" × 6"', use: "Compact — bar tops, small tables, counter displays" },
  { size: '5" × 7"', use: "Standard — most popular for restaurant table tents" },
  { size: '4" × 9"', use: "Tall format — drink specials, dessert features" },
  { size: '6" × 8"', use: "Large — detailed promotions, QR code menus" },
];

const useCases = [
  { icon: UtensilsCrossed, title: "Restaurant Menus", desc: "From casual diners to fine dining — we create menus that are both beautiful and durable enough to survive daily use, spills, and constant handling." },
  { icon: Lightbulb, title: "Seasonal Specials & Inserts", desc: "Swap out seasonal items without reprinting your entire menu. We print matching inserts and clip-in pages that integrate seamlessly." },
  { icon: FileText, title: "Catering & Event Menus", desc: "Elegant menus for weddings, corporate events, and private parties. From simple cards to multi-course tasting menus on premium stock." },
  { icon: Layers, title: "Bar & Drink Menus", desc: "Cocktail menus, wine lists, and beer menus designed to match your establishment's atmosphere. Laminated for bartop durability." },
];

const faqItems = [
  { q: "What lamination should I choose for restaurant menus?", a: "For menus that see daily use, we recommend heavy-duty lamination (10 mil or thicker) on 14pt or 16pt card stock. This creates a waterproof, wipeable menu that can withstand spills, grease, and constant handling for months." },
  { q: "How often should we reprint our menus?", a: "Most restaurants reprint menus every 6–12 months to refresh pricing and seasonal items. With our seasonal insert system, you can keep your core menu and swap out specials pages quarterly without reprinting everything." },
  { q: "Can you add QR codes to our menus?", a: "Absolutely! We can integrate QR codes that link to your online ordering system, digital menu, social media, or review pages. QR codes on table tents are especially effective for driving online orders." },
  { q: "What size menus do you recommend?", a: "For most restaurants, 8.5×11 or 8.5×14 bi-fold menus are the sweet spot. They're large enough to showcase your offerings but compact enough for comfortable table use. For bars, a single laminated page or tall table tent works great." },
  { q: "Do you offer menu design services?", a: "Yes — our design team specializes in menu layouts that drive higher average order values. We use strategic placement, photography integration, and typography to highlight your most profitable items." },
  { q: "Can you match our restaurant's branding?", a: "Absolutely. We match your existing brand colors, fonts, and style. If you're starting fresh, we'll design a complete menu system that reflects your restaurant's personality and atmosphere." },
  { q: "What about food photography?", a: "While we don't provide photography services directly, we can recommend trusted food photographers in Ohio. We do handle all photo retouching, color correction, and layout to make your dishes look irresistible on the printed menu." },
];

const jsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Restaurant Menu & Table Tent Printing",
  description: "Custom restaurant menu printing and table tents. Laminated, waterproof menus and promotional table displays for Ohio hospitality businesses.",
  url: "https://www.buckeyebizhub.com/menus-and-table-tents",
  provider: { "@type": "LocalBusiness", name: "Buckeye Biz Hub", areaServed: { "@type": "State", name: "Ohio" } },
};

const MenusAndTableTents = () => {
  usePageSEO({ title: "Menu Printing & Table Tents Columbus OH", description: "Custom restaurant menu printing and table tents for Ohio restaurants, bars, and hospitality businesses. Durable, laminated, and beautifully designed." });

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Custom restaurant menus and table tents" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" />Menus & Table Tents<Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Custom Menu Printing & Table Tents That Make Customers Hungry
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold">
              Durable, vibrant, and professionally designed menus for restaurants, bars, cafes, and hospitality businesses across Ohio.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[{ icon: ShieldCheck, label: "Waterproof Options" }, { icon: BadgeCheck, label: "Wholesale Pricing" }, { icon: ThumbsUp, label: "100% Satisfaction" }].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />{b.label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact"><Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] group uppercase tracking-wider">Get Your Menu Quote<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Menus Matter */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Your Menu Is Your Most Important Sales Tool</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Your menu is the one piece of marketing that every single customer reads. It's not just a list of food — it's a sales tool that directly influences what people order and how much they spend. Studies show that strategic menu design can boost average order value by 10–15% through smart placement, photography, and highlighting profitable items.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">A well-designed, professionally printed menu also communicates quality. Customers subconsciously judge food quality by the menu that presents it. A laminated, full-color menu with beautiful typography tells diners they're in for a great experience — before the first course even arrives.</p>
          </motion.div>
        </div>
      </section>

      {/* Menu Styles */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">Menu Styles We Offer</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuStyles.map((m, i) => (
              <motion.div key={m.style} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-none shadow-lg"><CardContent className="p-6">
                  <h3 className="font-display text-lg font-black text-foreground mb-3">{m.style}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{m.desc}</p>
                  <p className="text-muted-foreground text-xs"><strong className="text-foreground">Best for:</strong> {m.best}</p>
                </CardContent></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paper & Lamination */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-10 text-center">Paper Stocks & Lamination Options</h2>
            <div className="overflow-x-auto rounded-2xl border shadow-lg bg-card">
              <Table>
                <TableHeader><TableRow className="bg-ohio-navy">
                  <TableHead className="text-primary-foreground font-bold">Stock</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Lamination</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Best For</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Durability</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                  {paperOptions.map((p) => (
                    <TableRow key={p.stock}>
                      <TableCell className="font-bold text-foreground">{p.stock}</TableCell>
                      <TableCell className="text-muted-foreground">{p.lamination}</TableCell>
                      <TableCell className="text-muted-foreground">{p.best}</TableCell>
                      <TableCell className="text-muted-foreground">{p.durability}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table Tent Sizes */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4"><Ruler className="w-8 h-8 text-primary" /></div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Table Tent Size Guide</h2>
            <div className="overflow-x-auto rounded-2xl border shadow-lg bg-card">
              <Table>
                <TableHeader><TableRow className="bg-ohio-navy">
                  <TableHead className="text-primary-foreground font-bold">Size</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Best For</TableHead>
                </TableRow></TableHeader>
                <TableBody>
                  {tableTentSizes.map((s) => (
                    <TableRow key={s.size}>
                      <TableCell className="font-bold text-foreground">{s.size}</TableCell>
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
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">What We Print for Hospitality</motion.h2>
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">"The number one thing I tell restaurant owners: don't list prices in a column. When prices are aligned vertically, customers scan down to find the cheapest item. Instead, place the price right after the description in the same font — it makes people choose based on what sounds delicious, not what's cheapest. Also, always laminate your menus. The cost difference is minimal, but laminated menus last 10x longer and always look clean."</p>
              <p className="font-bold text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">Menus & Table Tents FAQ</motion.h2>
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
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Ready for menus that make mouths water?</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact"><Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] group uppercase tracking-widest"><Phone className="w-6 h-6" />Get Your Menu Quote in 24 Hours<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-ohio-navy"><div className="container"><div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
        {["24-Hour Quotes", "Laminated & Waterproof Options", "Ohio Owned & Operated"].map((item, i) => (<span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide"><Clock className="w-4 h-4 text-primary" />{item}</span>))}
      </div></div></section>

      <RelatedServices />
      <Footer />
    </div>
  );
};

export default MenusAndTableTents;
