"use client";
import { motion } from "framer-motion";
import PromoProductDeepDives from "@/components/promo/PromoProductDeepDives";
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
  ExternalLink,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  ThumbsUp,
  Lightbulb,
  Gift,
  ShoppingBag,
  Shirt,
  PenTool,
  Smartphone,
  Award,
  TreePine,
  Sun,
  Coffee,
  Printer,
  Megaphone,
  Zap,
  CreditCard,
  FolderOpen,
  FileText,
} from "lucide-react";
import { Link } from "@/lib/compat/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

const brandedDrinkware = "/assets/branded-drinkware-tumblers.jpg";
const customApparel = "/assets/custom-apparel-polos-hoodies.jpg";
const promoOffice = "/assets/promo-office.jpg";
const promoTechGadgets = "/assets/promo-tech-gadgets.jpg";
const customBagsTotes = "/assets/custom-bags-totes.jpg";
const promoGiveaways = "/assets/promo-giveaways-pens-keychains.jpg";
const promoAwards = "/assets/promo-awards-recognition.jpg";
const promoOutdoor = "/assets/promo-outdoor.jpg";
const promoHolidayGifts = "/assets/promo-holiday-gifts.jpg";
const servicePromoGiveaways = "/assets/service-promo-giveaways.jpg";
import { PHOTO_SIGNAGE_1, PHOTO_SIGNAGE_3, PHOTO_PRINT_1, PHOTO_PRINT_3, PHOTO_PRINT_6 } from "@/lib/photos";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const productCategories = [
  {
    title: "Branded Drinkware",
    desc: "Tumblers, mugs and water bottles your customers use every day. Your name in their hand, every morning.",
    image: brandedDrinkware,
    icon: Coffee,
    id: "drinkware",
  },
  {
    title: "Custom Apparel & Uniforms",
    desc: "Polos, hoodies, hats and jackets that put your logo everywhere your team goes.",
    image: customApparel,
    icon: Shirt,
    id: "apparel",
  },
  {
    title: "Office & Desk Items",
    desc: "Notebooks, pens and mousepads that sit on desks and keep your name in front of people all day.",
    image: promoOffice,
    icon: PenTool,
    id: "office",
  },
  {
    title: "Tech Gadgets",
    desc: "Phone stands, wireless chargers and earbud cases. They feel valuable and get used daily.",
    image: promoTechGadgets,
    icon: Smartphone,
    id: "tech",
  },
  {
    title: "Tote Bags & Bags",
    desc: "Totes, drawstring bags and backpacks that carry your logo around events, trade shows and town.",
    image: customBagsTotes,
    icon: ShoppingBag,
    id: "bags",
  },
  {
    title: "Stress Balls & Fun Giveaways",
    desc: "Pens, keychains, stress balls and fidget items people actually keep.",
    image: promoGiveaways,
    icon: Gift,
    id: "giveaways",
  },
  {
    title: "Awards & Recognition Items",
    desc: "Crystal awards, engraved plaques and trophies that recognize your people and build your culture.",
    image: promoAwards,
    icon: Award,
    id: "awards",
  },
  {
    title: "Outdoor & Event Products",
    desc: "Coolers, blankets, stadium cushions and outdoor gear that show up at every tailgate and cookout.",
    image: promoOutdoor,
    icon: Sun,
    id: "outdoor",
  },
  {
    title: "Holiday & Seasonal Gifts",
    desc: "Gift sets and seasonal packages that thank your clients and your team.",
    image: promoHolidayGifts,
    icon: TreePine,
    id: "holiday",
  },
];

const customizationMethods = [
  {
    name: "Embroidery",
    best: "Apparel, hats, bags, towels",
    pros: "High-end look, very durable, won't fade or crack",
    cons: "Limited color gradients, higher cost for complex designs",
    when: "You want a high-end look on fabric that lasts for years.",
  },
  {
    name: "Screen Printing",
    best: "T-shirts, tote bags, posters",
    pros: "Bright colors, cheap at high volume, bold designs",
    cons: "Not ideal for small quantities or photo-realistic images",
    when: "You're ordering 25+ pieces and want bold, consistent branding at the best price per piece.",
  },
  {
    name: "Direct-to-Garment (DTG)",
    best: "Apparel with complex or full-color artwork",
    pros: "Photo-quality prints, no color limits, great for small runs",
    cons: "Slightly less durable than screen print, higher per-unit cost at volume",
    when: "Your design has lots of colors, gradients or photos, especially on orders under 25 pieces.",
  },
  {
    name: "Laser Engraving",
    best: "Drinkware, pens, awards, tech accessories",
    pros: "Very precise, permanent, clean finish",
    cons: "Single color (material-dependent), no full-color option",
    when: "You want a clean, permanent mark on metal, glass, wood or leather.",
  },
  {
    name: "Full-Color Digital Printing",
    best: "Drinkware, bags, mousepads, phone accessories",
    pros: "Unlimited colors, photo-quality, no minimum quantities",
    cons: "Varies by material; not available on all products",
    when: "You need a full-color logo or photo on hard goods.",
  },
  {
    name: "Debossing / Embossing",
    best: "Notebooks, leather goods, portfolios, packaging",
    pros: "You can feel it. Subtle and high-end",
    cons: "Best for simple logos; no color fill on debossed areas",
    when: "You want a quiet, high-end look. Great for executive gifts.",
  },
  {
    name: "UV Printing",
    best: "Hard goods, awards, tech items, drinkware",
    pros: "Full color on almost any surface, durable, bright",
    cons: "Surface must be flat or slightly curved",
    when: "You need bright, detailed full-color printing right on a hard surface.",
  },
];

const faqItems = [
  { q: "What is the minimum order quantity?", a: "It depends on the product. Some start at 25 pieces. Others need 50 or 100. We find the best fit for your budget and quantity, and you'll know the minimum before you commit." },
  { q: "How long does production take?", a: "Standard production is usually 10–14 business days after you approve the proof, depending on the product and decoration. Many popular items go faster. We confirm your timeline with the quote." },
  { q: "Can I get a proof before printing?", a: "Yes. Every order includes a free digital proof showing exactly how your logo will look. Nothing goes to production until you approve it." },
  { q: "What file formats do you accept?", a: "Vector files (AI, EPS, PDF) work best. High-res PNG and JPEG (300+ DPI) work too. Only have a low-res file? We can help you recreate it." },
  { q: "Do you offer rush options?", a: "Yes. Many products can be rushed. Depending on the item, we can often deliver in 5–7 business days. Rush fees may apply, and you'll see them up front." },
  { q: "Can I order different items in one order?", a: "Yes. Lots of clients bundle drinkware, apparel and office items in one order. We coordinate it all and look for volume discounts across the whole package." },
  { q: "How do I choose the right product for my audience?", a: "That's our job. Tell us about your event, your audience and your goals. We'll recommend products based on our experience with hundreds of Ohio businesses. We pick items that get used, not tossed in a drawer." },
  { q: "Do you help with design?", a: "Yes. Design advice is free, and we'll get your logo and artwork ready for any product. Need a brand-new design? Our design team can do it." },
  { q: "What is the best way to maximize ROI with promo products?", a: "Pick items your audience will use every day (drinkware, tech, apparel). Keep your logo clean and easy to see. Match the product to the occasion. A well-chosen $5 item can get more eyeballs than a $500 digital ad." },
  { q: "Can I get samples before placing a large order?", a: "Yes. We can get unbranded samples of most products so you can feel the quality before a big run. For some items, we can get a branded sample before production too." },
];

const PromotionalProductsPage = () => {

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

    usePageSEO({ title: "Promotional Products Columbus Ohio", description: "Promotional products and branded merchandise for Columbus Ohio businesses. Corporate gifts and trade show giveaways at wholesale pricing." });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicePromoGiveaways} alt="Custom promotional products and branded giveaways for Ohio businesses" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Promotional products and giveaways <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Promo products that keep your name{" "}
              <span className="text-primary">in front of customers</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Drinkware, apparel, tech gadgets, office items and more. Picked to bring you referrals and repeat customers.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: ShieldCheck, label: "No hidden fees" },
                { icon: BadgeCheck, label: "Wholesale pricing" },
                { icon: ThumbsUp, label: "24-hour quotes" },
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-10 py-8 rounded-2xl group transition-all duration-300">
                  Get your promo products quote in 24 hours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop Ready-Made Products */}
      <section className="py-16 lg:py-20 bg-muted/40 border-y border-border/50">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <ShoppingBag className="w-4 h-4" /> Quick online ordering
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Shop <span className="text-primary">ready-made products</span> online
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Need branded swag fast? Our online store has ready-made products you can order right now: pens, tumblers, tote bags and more.
            </p>
            <a
              href="http://www.buckeyebizhub.store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-2xl group transition-all duration-300 border-2 border-primary-foreground/10">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop ready-made products
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>
            <div className="mt-6 bg-card border border-border/60 rounded-xl px-6 py-4 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">Note:</span> The online store is for ready-made promo products and swag only. For custom printing, vehicle wraps, signage, branded apparel or full-service branding,{" "}
                <Link to="/contact" className="text-primary font-bold hover:underline">contact us for a personalized quote</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Why Promotional Products Work */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-8 text-center">
              Why promo products work for <span className="text-primary">Ohio businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Promo products are one of the cheapest ways for a local business to stay in front of people. A digital ad is gone in seconds. A branded tumbler, pen or tote stays with your customer for months, sometimes years. Studies show 85% of people remember the company that gave them a promo product, and nearly 50% use promo items daily.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Use them at trade shows, as client thank-yous, in new-hire kits, in mailers, at open houses and at community events. A Columbus HVAC company handing out pens at a home show. A Cleveland law firm sending tumblers to referral partners. The right item turns one meeting into a relationship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Popular Promotional Products, 3x3 Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <ShoppingBag className="w-4 h-4" /> Product categories
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Our most popular <span className="text-primary">promo products</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everyday items to high-end executive gifts. We buy at wholesale through our SAGE and PPAI memberships.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat, i) => (
              <motion.div key={cat.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group bg-card overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={cat.image} alt={`${cat.title} promotional products for Ohio businesses`} loading="lazy" width={1024} height={768} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center">
                        <cat.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-7">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{cat.desc}</p>
                    <Link to="/contact">
                      <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold rounded-xl transition-all duration-300 group/btn ">
                        Get a Quote
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Printed Promotional Products */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-primary/[0.03] rounded-full hidden" />
        <div className="container relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <Printer className="w-4 h-4" /> Custom printed products
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Custom printed <span className="text-primary">promo products</span>
            </h2>
            <div className="w-24 h-[4px] mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light" />
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-medium max-w-3xl mx-auto mt-6">
              The best promo items are useful every day and printed in full color.
              Your customers reach for them again and again. Each one is a small billboard for you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: "Custom Printed Tote Bags",
                description: "Reusable totes with your full-color logo. Good for trade shows, retail giveaways and farmers markets. Cotton canvas, non-woven or recycled, in dozens of colors and sizes.",
                detail: "From $1.50/unit at volume",
              },
              {
                icon: PenTool,
                title: "Branded Notebooks & Journals",
                description: "Notebooks with printed covers, debossed logos or full-wrap designs. Good for client gifts, conferences and new-hire kits. Softcover, hardcover or spiral-bound.",
                detail: "Hardcover from $4/unit",
              },
              {
                icon: Smartphone,
                title: "Custom Mousepads & Desk Accessories",
                description: "Full-color mousepads, desk mats and coasters that sit in front of your clients all day. Soft fabric top, non-slip rubber base, built to last.",
                detail: "From $2/unit at volume",
              },
              {
                icon: Megaphone,
                title: "Printed Banners & Table Throws",
                description: "Full-color table throws, pull-up banners and backdrops that make your booth look sharp. Wrinkle-resistant, machine-washable fabrics available.",
                detail: "Table throws from $99",
              },
              {
                icon: Gift,
                title: "Branded Giveaway Kits",
                description: "Gift bundles of printed items: a branded tote with a notebook, pen and logo tumbler inside. We pack them. You hand them out.",
                detail: "Custom bundles from $15/kit",
              },
              {
                icon: Award,
                title: "Printed Drinkware & Bottles",
                description: "Full-color wrap printing on tumblers, water bottles and mugs. UV-printed logos that won't fade, peel or wash off. Day 500 looks like day one.",
                detail: "From $5/unit at volume",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-2xl border-2 border-border hover:border-primary/40 overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="p-7 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-[1.8] mb-4 flex-1">
                    {item.description}
                  </p>
                  <p className="text-xs font-bold text-primary mb-5">
                    {item.detail}
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold rounded-xl transition-all duration-300 group/btn ">
                      Get a Quote
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Concierge tip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl border-l-4 border-primary bg-primary/[0.04] px-6 py-5"
          >
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-black text-primary">💡 David's tip:</span>{" "}
              Want the most impact? Put a branded notebook and tumbler inside a custom tote. Your customer walks away with the whole package.
              We price these as a bundle, so it costs less than ordering each item on its own.{" "}
              <Link to="/contact" className="text-primary font-bold hover:underline">Let us build a kit for you →</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deep-dive educational sections for each promo product type */}
      <PromoProductDeepDives />

      {/* Printed Marketing Materials */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full hidden" />
        <div className="container relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <Printer className="w-4 h-4" /> Custom printed materials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Printed pieces that{" "}
              <span className="text-primary">round out your brand</span>
            </h2>
            <div className="w-24 h-[4px] mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light" />
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-medium max-w-3xl mx-auto mt-6">
              Promo products are one piece. Pair them with good printed materials
              so everything with your name on it looks like it came from the same company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Megaphone,
                title: "Custom Banners & Retractable Displays",
                image: PHOTO_SIGNAGE_1,
                description: "Full-color banners for trade shows, storefronts and events. Light pull-ups to large-format vinyl. Easy to haul, quick to set up.",
                link: "/banners-and-flags",
                linkLabel: "See banners and flags",
              },
              {
                icon: Zap,
                title: "Yard Signs & Outdoor Signage",
                image: PHOTO_SIGNAGE_3,
                description: "Weather-tough yard signs, A-frames and outdoor signs built for Ohio. For grand openings, real estate, political campaigns and job sites people see from the street.",
                link: "/yard-signs-and-signage",
                linkLabel: "See yard signs",
              },
              {
                icon: CreditCard,
                title: "Business Cards & Stationery",
                image: PHOTO_PRINT_1,
                description: "First impressions start in the hand. Thick stocks, foil, spot UV and soft-touch finishes make yours the card they keep. Every detail matches your brand.",
                link: "/business-cards-printing",
                linkLabel: "See business cards",
              },
              {
                icon: FolderOpen,
                title: "Presentation Folders & Marketing Kits",
                image: PHOTO_PRINT_3,
                description: "Custom folders, inserts and marketing kits for proposals and client meetings. Sturdy stock, custom pockets and foil that tell prospects you mean business.",
                link: "/presentation-folders",
                linkLabel: "See presentation folders",
              },
              {
                icon: FileText,
                title: "Brochures, Flyers & Printed Collateral",
                image: PHOTO_PRINT_6,
                description: "Tri-folds, sell sheets, catalogs and booklets. Every printed piece your business needs. Quality stock, strong color and fast turnaround.",
                link: "/brochures-and-printing",
                linkLabel: "See brochures and printing",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-2xl border-2 border-border hover:border-primary/40 overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={`${item.title} promotional products by Buckeye Biz Hub in Columbus Ohio`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center ">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-[1.8] mb-6 flex-1">
                    {item.description}
                  </p>
                  <Link to={item.link}>
                    <Button variant="outline" className="w-full font-bold text-sm py-5 rounded-xl border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn">
                      {item.linkLabel}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Decoration options <span className="text-primary">explained</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not sure how to put your logo on it? Here's every option we offer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {customizationMethods.map((method, i) => (
              <motion.div key={method.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300 bg-card">
                  <CardContent className="p-8">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">{method.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-bold text-foreground">Best for: </span>
                        <span className="text-muted-foreground">{method.best}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><span className="font-semibold text-foreground">Pros:</span> {method.pros}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground text-center font-bold">–</span>
                        <span className="text-muted-foreground"><span className="font-semibold text-foreground">Cons:</span> {method.cons}</span>
                      </div>
                      <div className="pt-2 border-t border-border/50">
                        <span className="font-bold text-primary text-xs ">When to choose: </span>
                        <span className="text-muted-foreground">{method.when}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Design Tips from David */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">
                Design tips from David
              </h2>
            </div>
            <div className="bg-card rounded-2xl border-l-4 border-primary p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "After helping hundreds of Ohio businesses with promo products, here's what I know. The best items are the ones people use. A good tumbler your client grabs every morning beats a thousand novelty items in a junk drawer."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "My advice? Focus on three things: useful, quality and relevant. Pick items your audience will actually want. A tech company's clients love wireless chargers. A dental office's patients love toothbrush kits. Match the product to the person and you get referrals and repeat business."
              </p>
              <div className="mt-6">
                <p className="font-display font-black text-foreground">David Stein, Your Buckeye Branding Concierge</p>
                <p className="text-sm text-muted-foreground font-semibold">Buckeye Biz Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Promotional Products FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Promo products <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The questions Ohio businesses ask us most.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <AccordionItem value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary transition-colors py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Built by an Operator: credibility insert above final CTA */}
      <section className="py-16 lg:py-20 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Built by an operator
            </span>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-foreground leading-[1.15]">
              Run by someone who's{" "}
              <span className="text-primary">been in your seat.</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              David Stein co-founded Buckeye Biz Hub and runs it day to day. Before that, he co-founded BeerTubes, was named inventor on its patents, grew it from $79K in year one to $4.5M and sold it in 2017. Then he built SBC Hospitality Group to 100+ employees. He's spent his own money on marketing. He knows what works and what doesn't.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2 transition-all"
            >
              Learn more about David
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full hidden" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full hidden" />

        <div className="container relative text-center max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-10 leading-[0.9]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready for promo products that{" "}
            <span className="text-glow-white">get used?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Over 1 million products. Wholesale pricing. Every cost shown. Let's find the right items to keep your name in front of customers.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl md:text-2xl px-14 py-9 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group "
                style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <Phone className="w-6 h-6" />
                Get your quote in 24 hours
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-muted/50 border-t border-border/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-bold text-muted-foreground tracking-wide">
            {["24-hour quotes", "Every cost shown", "SAGE and PPAI members", "Ohio owned and operated"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices />
      <Footer />
    </div>
  );
};

export default PromotionalProductsPage;
