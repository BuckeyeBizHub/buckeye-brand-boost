import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  ThumbsUp,
  Clock,
  BookOpen,
  FileText,
  Layers,
  Mail,
  Lightbulb,
  LayoutGrid,
  Columns2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import brochuresHero from "@/assets/brochures-hero.jpg";
import halfFoldImg from "@/assets/folds/half-fold.png";
import trifoldImg from "@/assets/folds/trifold.png";
import zFoldImg from "@/assets/folds/z-fold.png";
import gateFoldImg from "@/assets/folds/gate-fold.png";
import accordionFoldImg from "@/assets/folds/accordion-fold.png";
import doubleParallelFoldImg from "@/assets/folds/double-parallel-fold.png";
import frenchFoldImg from "@/assets/folds/french-fold.png";
import parallelMapFoldImg from "@/assets/folds/parallel-map-fold.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const foldTypes = [
  { title: "Half-Fold", panels: "2-Panel", image: halfFoldImg, desc: "Popularly known as bifold brochures, this type is made up of two panels, folding the total space in half. This style works best for simple business presentations. The large space can introduce one or two products or services." },
  { title: "Tri-Fold", panels: "3-Panel", image: trifoldImg, desc: "The trifold divides your brochure into three vertical panels, allowing your customer to take in information in a specific sequence. This is one of the most popular options because it's compact, holds a lot of information, and fits in most rack card slots. Take advantage of the trifold by creating engaging content divided per panel." },
  { title: "Z-Fold", panels: "3-Panel", image: zFoldImg, desc: "This fold divides your brochure into three vertical panels into its distinctive \"Z\" shape. Each panel folds on top of one another and efficiently presents different features of a product or service. Z-fold brochures are also commonly used for content with multiple language translations. When unfolded, all panels create one whole unified page." },
  { title: "Gate Fold", panels: "3-Panel", image: gateFoldImg, desc: "This brochure has a three-panel design where the two front panels fold inward to form the \"gate.\" The front panels can reveal an image or infographic that unveils a new offer from your business. We recommend gate fold brochures for presentations that focus on design or a \"big reveal\" — they typically catch more attention." },
  { title: "Accordion Fold", panels: "4-Panel", image: accordionFoldImg, desc: "The accordion fold divides your brochure into four panels that fold on top of one another. This option unfolds information in an organized and sequential manner — like the Z-fold, but with four panels. It's simpler to design because of its chronological presentation. Use accordion folds for event brochures with day-to-day schedules or maps." },
  { title: "Double Parallel Fold", panels: "4-Panel", image: doubleParallelFoldImg, desc: "The double parallel fold divides your brochure into four panels that are parallel and stand in the same direction. Usually printed on larger paper for extra design space. Use these to give customers a detailed company overview, categorize different product offers, or add a fillable form." },
  { title: "French Fold", panels: "4-Panel", image: frenchFoldImg, desc: "This fold divides your brochure into four panels. The paper is folded in half, then folded again perpendicular to the first fold. The total space is large enough to show photographs of your products. Popular for programs and promotional pieces, especially when a full-size image on the inside is needed." },
  { title: "Parallel Map Fold", panels: "4-Panel", image: parallelMapFoldImg, desc: "This fold divides the brochure into four vertical panels directly adjacent to one another when fully opened. A parallel map brochure opens like a folder, then unfolds further. Use the long height per panel to showcase your services in detail." },
];

const printingServices = [
  {
    title: "Brochures & Booklets",
    desc: "Full-color multi-page brochures and saddle-stitched booklets that tell your brand story with impact.",
  },
  {
    title: "Flyers & Postcards",
    desc: "Eye-catching flyers and postcards for promotions, events, and direct mail campaigns that get results.",
  },
  {
    title: "Menus & Table Tents",
    desc: "Durable, vibrant menus and table tents designed to look beautiful and withstand daily restaurant use.",
  },
  {
    title: "Door Hangers & Rack Cards",
    desc: "High-impact door hangers and rack cards perfect for service businesses, real estate, and local marketing.",
  },
  {
    title: "Letterhead & Envelopes",
    desc: "Professional branded letterhead and matching envelopes that reinforce credibility with every correspondence.",
  },
  {
    title: "Notepads & Custom Forms",
    desc: "Custom-printed notepads, carbonless forms, and invoices that keep your brand front and center.",
  },
];

const paperStocks = [
  { name: "70lb Uncoated Text", best: "Flyers, inserts, and internal documents where writability matters." },
  { name: "80lb Gloss Text", best: "Standard brochures and flyers with vivid photo reproduction." },
  { name: "100lb Gloss Text", best: "Premium brochures and catalogs with a substantial, high-quality feel." },
  { name: "100lb Gloss Cover (10pt)", best: "Postcards, rack cards, and door hangers that need stiffness and durability." },
  { name: "14pt Cardstock", best: "Premium postcards, table tents, and thick marketing collateral." },
  { name: "Linen & Cotton", best: "Letterhead and stationery with a sophisticated, textured feel." },
];

const finishes = [
  { name: "Matte Finish", desc: "Smooth, non-reflective coating for an elegant, understated look. Great for text-heavy pieces." },
  { name: "Gloss Finish", desc: "High-shine coating that makes colors pop and photos look vibrant. Ideal for product brochures." },
  { name: "High-Gloss UV", desc: "Ultra-shiny protective coating that resists fingerprints and adds a premium look." },
  { name: "Soft-Touch Lamination", desc: "Velvety, luxurious texture that feels incredible in hand — perfect for high-end brands." },
  { name: "Foil Stamping", desc: "Metallic gold, silver, or copper accents that add a striking, premium detail to any printed piece." },
  { name: "Embossing / Debossing", desc: "Raised or pressed lettering and logos that add a tactile, three-dimensional element." },
  { name: "Spot UV", desc: "Selective glossy coating on specific areas (like logos) for dramatic contrast against a matte background." },
  { name: "Edge Painting", desc: "Colorful painted edges for an eye-catching detail that makes thick cards truly stand out." },
];

const faqItems = [
  { q: "What paper stock is best for brochures?", a: "For most brochures, we recommend 80lb or 100lb gloss text — it provides excellent color reproduction and a professional feel. If you want something more substantial for trade shows or rack displays, 100lb gloss cover (10pt) gives extra stiffness and durability." },
  { q: "What is spot UV and foil stamping?", a: "Spot UV is a selective glossy coating applied to specific areas of your design (like a logo) to create dramatic contrast against a matte background. Foil stamping presses metallic foil onto your piece for an eye-catching gold, silver, or copper accent that screams premium quality." },
  { q: "How many brochures should I order?", a: "We recommend ordering at least 500 for the best per-unit pricing. However, we can accommodate runs from 250 to 100,000+. The more you order, the lower the cost per piece — and with our wholesale pricing, you're already saving 30–50% compared to most competitors." },
  { q: "Do you offer design help?", a: "Absolutely! We offer professional design consultation and can create your brochure layout from scratch or refine your existing design. Our team ensures your printed materials look polished and professional before they go to press." },
  { q: "What file formats do you accept?", a: "We accept print-ready PDFs (preferred), Adobe Illustrator (.ai), Photoshop (.psd), and high-resolution JPEG/PNG files. For best results, all files should be 300 DPI with 0.125\" bleed on all sides." },
  { q: "Can I get samples first?", a: "Yes! We can provide paper samples so you can feel the weight and texture before committing. For large orders, we can also arrange a printed proof for your approval before the full run." },
  { q: "How fast can you print?", a: "Standard turnaround is 5–7 business days from proof approval. Many products can be completed faster — just let us know your deadline when you request a quote." },
  { q: "Do you offer rush options?", a: "Yes, we offer rush printing for tight deadlines. Depending on the product and quantity, we can often deliver in 2–3 business days. Rush fees may apply, but we're always transparent about costs upfront." },
  { q: "What is scoring and why is it important?", a: "Scoring creates a precise crease line in the paper that allows it to fold cleanly without cracking. This is essential for any printed piece on heavier stocks — it ensures your brochures fold perfectly and look professional every time." },
  { q: "Can I order different quantities for different pieces?", a: "Absolutely! You can mix and match quantities across different products. Need 1,000 brochures and 500 postcards? No problem. We'll quote each item individually and look for ways to bundle for savings." },
];

const BrochuresAndPrinting = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brochures & Professional Business Printing",
    description: "Premium brochure printing, flyers, postcards, menus, and custom business printing services in Columbus, Ohio.",
    url: "https://buckeye-brand-boost.lovable.app/brochures-and-business-printing",
    provider: {
      "@type": "LocalBusiness",
      name: "Buckeye Biz Hub",
      areaServed: { "@type": "State", name: "Ohio" },
      address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={brochuresHero} alt="Premium full-color brochures printed for Columbus Ohio businesses" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Brochures & Business Printing <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Brochures & Professional Business Printing in Columbus, Ohio
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              High-impact printed materials that clearly communicate your message, build trust, and help your Ohio business stand out — with 24-hour quotes and full transparency.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: ShieldCheck, label: "No Hidden Fees" },
                { icon: BadgeCheck, label: "Wholesale Pricing" },
                { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                  Get Your Custom Brochure Quote in 24 Hours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Brochures Still Drive Results */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-8 text-center">
              Why Professional Brochures Still Drive Results
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              In a world overflowing with digital noise, a beautifully printed brochure cuts through the clutter. Whether it's displayed in a waiting room, handed out at a Columbus trade show, tucked into a direct mail campaign, or placed in a brochure rack at a local business — printed materials create a tangible connection that emails and social media simply can't replicate.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For Ohio businesses, brochures remain one of the most cost-effective marketing tools available. They educate your customers, showcase your services, and leave behind something physical that stays on desks, in cars, and on countertops long after a digital ad disappears. When printed with premium stocks and vivid full-color quality, they instantly communicate professionalism and trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Choose the Best Brochure Fold */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Choose the Best Brochure Fold
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The right fold style depends on your content, audience, and how you plan to distribute your brochures. Here's a guide to every popular option.
            </p>
          </motion.div>

          {/* 2-Panel */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Columns2 className="w-5 h-5" /> How to Use a 2-Panel Option
            </h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {foldTypes.filter(f => f.panels === "2-Panel").map((fold, i) => (
              <motion.div key={fold.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300 bg-card overflow-hidden">
                  <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center p-4">
                    <img src={fold.image} alt={`${fold.title} brochure example`} className="max-h-full max-w-full object-contain" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{fold.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{fold.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 3-Panel */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <LayoutGrid className="w-5 h-5" /> How to Use the 3-Panel Format
            </h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {foldTypes.filter(f => f.panels === "3-Panel").map((fold, i) => (
              <motion.div key={fold.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300 bg-card overflow-hidden">
                  <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center p-4">
                    <img src={fold.image} alt={`${fold.title} brochure example`} className="max-h-full max-w-full object-contain" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{fold.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{fold.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 4-Panel */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" /> Best Uses for 4-Panel Brochures
            </h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foldTypes.filter(f => f.panels === "4-Panel").map((fold, i) => (
              <motion.div key={fold.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300 bg-card overflow-hidden">
                  <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center p-4">
                    <img src={fold.image} alt={`${fold.title} brochure example`} className="max-h-full max-w-full object-contain" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{fold.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{fold.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Business Printing Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Our Business Printing Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From tri-fold brochures to custom notepads, we print everything your Ohio business needs — all at true wholesale pricing.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {printingServices.map((svc, i) => (
              <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-xl transition-all duration-300 group bg-card">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{svc.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{svc.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Paper Stocks & Finishes */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Paper Stocks & Finishes Explained
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The right paper and finish can transform a good printed piece into a great one. Here's what to know.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Paper Stocks */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="font-display text-2xl font-black text-foreground mb-6 flex items-center gap-3">
                <Layers className="w-6 h-6 text-primary" /> Popular Paper Stocks
              </h3>
              <div className="space-y-4">
                {paperStocks.map((stock) => (
                  <div key={stock.name} className="bg-card rounded-xl p-5 border border-border/50">
                    <p className="font-bold text-foreground mb-1">{stock.name}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{stock.best}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Finishes */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="font-display text-2xl font-black text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-primary" /> Finishes & Enhancements
              </h3>
              <div className="space-y-4">
                {finishes.map((f) => (
                  <div key={f.name} className="bg-card rounded-xl p-5 border border-border/50">
                    <p className="font-bold text-foreground mb-1">{f.name}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Design Tips from David */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-8 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary" /> Design Tips from David
            </h2>
            <blockquote className="border-l-4 border-primary pl-8 md:pl-10">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic font-serif mb-6">
                "The biggest mistake I see Ohio businesses make with brochures? Trying to cram too much information onto one page. Your brochure isn't a textbook — it's a conversation starter. Lead with your strongest benefit, use clean visuals, and always include a clear call to action. Let the design breathe, and your message will land ten times harder."
              </p>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic font-serif">
                "And don't skimp on paper quality. Handing someone a thin, flimsy brochure sends the wrong message about your business. Go with at least 80lb gloss text or 100lb for trade shows — the weight and feel of the piece says as much about your brand as the words on it."
              </p>
              <footer className="mt-6">
                <p className="font-bold text-foreground text-base md:text-lg">— David Stein</p>
                <p className="text-muted-foreground text-sm font-semibold">Founder & Owner, Buckeye Biz Hub</p>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Business Printing FAQ
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about brochure and business printing.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow">
                  <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5 text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Ready for professional brochures and business printing that actually get results?
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

      {/* Trust Bar */}
      <section className="py-8 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {["24-Hour Quotes", "Full Pricing Transparency", "Ohio Owned & Operated"].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide">
                <Clock className="w-4 h-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrochuresAndPrinting;
