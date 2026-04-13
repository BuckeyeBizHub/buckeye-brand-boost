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
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

import brandedDrinkware from "@/assets/branded-drinkware-tumblers.jpg";
import customApparel from "@/assets/custom-apparel-polos-hoodies.jpg";
import promoOffice from "@/assets/promo-office.jpg";
import promoTechGadgets from "@/assets/promo-tech-gadgets.jpg";
import customBagsTotes from "@/assets/custom-bags-totes.jpg";
import promoGiveaways from "@/assets/promo-giveaways-pens-keychains.jpg";
import promoAwards from "@/assets/promo-awards-recognition.jpg";
import promoOutdoor from "@/assets/promo-outdoor.jpg";
import promoHolidayGifts from "@/assets/promo-holiday-gifts.jpg";
import servicePromoGiveaways from "@/assets/service-promo-giveaways.jpg";
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
    desc: "Tumblers, mugs, and water bottles your customers use every single day — keeping your brand in their hands and on their minds.",
    image: brandedDrinkware,
    icon: Coffee,
    id: "drinkware",
  },
  {
    title: "Custom Apparel & Uniforms",
    desc: "Premium polos, hoodies, hats, and jackets that turn your team into walking brand ambassadors everywhere they go.",
    image: customApparel,
    icon: Shirt,
    id: "apparel",
  },
  {
    title: "Office & Desk Items",
    desc: "Branded notebooks, pens, and mousepads that sit on desks and keep your name front and center during every workday.",
    image: promoOffice,
    icon: PenTool,
    id: "office",
  },
  {
    title: "Tech Gadgets",
    desc: "Phone stands, wireless chargers, and earbud cases that deliver high-perceived value and daily brand exposure.",
    image: promoTechGadgets,
    icon: Smartphone,
    id: "tech",
  },
  {
    title: "Tote Bags & Bags",
    desc: "Custom tote bags, drawstring bags, and backpacks that become walking billboards at events, trade shows, and on the street.",
    image: customBagsTotes,
    icon: ShoppingBag,
    id: "bags",
  },
  {
    title: "Stress Balls & Fun Giveaways",
    desc: "Memorable branded pens, keychains, stress balls, and fidget items your customers actually keep and use.",
    image: promoGiveaways,
    icon: Gift,
    id: "giveaways",
  },
  {
    title: "Awards & Recognition Items",
    desc: "Custom crystal awards, engraved plaques, and trophies that celebrate achievements and reinforce company culture.",
    image: promoAwards,
    icon: Award,
    id: "awards",
  },
  {
    title: "Outdoor & Event Products",
    desc: "Branded coolers, blankets, stadium cushions, and outdoor gear that make your brand the life of every event.",
    image: promoOutdoor,
    icon: Sun,
    id: "outdoor",
  },
  {
    title: "Holiday & Seasonal Gifts",
    desc: "Curated gift sets and seasonal packages that show appreciation and strengthen client and employee relationships year-round.",
    image: promoHolidayGifts,
    icon: TreePine,
    id: "holiday",
  },
];

const customizationMethods = [
  {
    name: "Embroidery",
    best: "Apparel, hats, bags, towels",
    pros: "Premium look, extremely durable, doesn't fade or crack",
    cons: "Limited color gradients, higher cost for complex designs",
    when: "When you want a professional, high-end look on fabric items that will last for years.",
  },
  {
    name: "Screen Printing",
    best: "T-shirts, tote bags, posters",
    pros: "Vibrant colors, cost-effective at high volumes, bold designs",
    cons: "Not ideal for small quantities or photo-realistic images",
    when: "When you're ordering 25+ items and want bold, consistent branding at the best per-unit price.",
  },
  {
    name: "Direct-to-Garment (DTG)",
    best: "Apparel with complex or full-color artwork",
    pros: "Photo-quality prints, no color limits, great for small runs",
    cons: "Slightly less durable than screen print, higher per-unit cost at volume",
    when: "When your design has many colors, gradients, or photographic elements — especially for orders under 25 pieces.",
  },
  {
    name: "Laser Engraving",
    best: "Drinkware, pens, awards, tech accessories",
    pros: "Extremely precise, permanent, elegant finish",
    cons: "Single color (material-dependent), no full-color option",
    when: "When you want a sleek, permanent mark on metal, glass, wood, or leather products.",
  },
  {
    name: "Full-Color Digital Printing",
    best: "Drinkware, bags, mousepads, phone accessories",
    pros: "Unlimited colors, photo-quality, no minimum quantities",
    cons: "Varies by material; not available on all products",
    when: "When you need a full-color logo or photographic image on hard goods.",
  },
  {
    name: "Debossing / Embossing",
    best: "Notebooks, leather goods, portfolios, packaging",
    pros: "Tactile, premium feel; subtle and sophisticated",
    cons: "Best for simple logos; no color fill on debossed areas",
    when: "When you want a luxury, understated brand impression — perfect for executive gifts.",
  },
  {
    name: "UV Printing",
    best: "Hard goods, awards, tech items, drinkware",
    pros: "Full-color on almost any surface, durable, vibrant",
    cons: "Surface must be flat or slightly curved",
    when: "When you need vibrant, detailed full-color printing directly on hard surfaces.",
  },
];

const faqItems = [
  { q: "What is the minimum order quantity?", a: "Minimum order quantities vary by product — some items start as low as 25 pieces, while others may require 50 or 100. We always find the best option for your budget and quantity needs, and we'll let you know upfront before you commit." },
  { q: "How long does production take?", a: "Standard production is typically 10–14 business days from proof approval, depending on the product and customization method. Many popular items can be completed faster. We'll confirm your timeline when you request a quote." },
  { q: "Can I get a proof before printing?", a: "Absolutely! Every order includes a free digital proof showing exactly how your logo and branding will appear on the product. We won't go to production until you approve it." },
  { q: "What file formats do you accept?", a: "We accept vector files (AI, EPS, PDF) for the best results. High-resolution PNG and JPEG files (300+ DPI) also work well. If you only have a low-res file, our team can help you recreate it." },
  { q: "Do you offer rush options?", a: "Yes! Many products are available with rush production and shipping. Depending on the item, we can often deliver in 5–7 business days. Rush fees may apply, and we're always transparent about the costs." },
  { q: "Can I order different items in one order?", a: "Of course! Many of our clients bundle drinkware, apparel, and office items into a single order. We'll coordinate everything and look for volume discounts across your entire package." },
  { q: "How do I choose the right product for my audience?", a: "That's where we shine. Tell us about your event, audience, and goals, and we'll recommend the best products based on our experience with hundreds of Ohio businesses. We focus on items that actually get used — not tossed in a drawer." },
  { q: "Do you help with design?", a: "Yes! We offer free design consultation and can help you optimize your logo and artwork for any product. If you need a brand-new design, we can connect you with our design team." },
  { q: "What is the best way to maximize ROI with promo products?", a: "Choose items your audience will use daily (drinkware, tech, apparel), ensure your branding is clean and visible, and match the product to the occasion. A well-chosen $5 item can deliver more impressions than a $500 digital ad." },
  { q: "Can I get samples before placing a large order?", a: "Yes — we can provide unbranded samples of most products so you can feel the quality before committing to a large run. For some items, we can also arrange a branded pre-production sample." },
];

const PromotionalProductsPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Promotional Products & Custom Giveaways",
    description: "Over 1 million custom promotional products at true wholesale pricing. Branded drinkware, apparel, tech gadgets, and more for Ohio businesses.",
    url: "https://buckeye-brand-boost.lovable.app/promotional-products",
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

    usePageSEO({ title: "Promotional Products Columbus Ohio", description: "Browse custom promotional products for your Ohio business. Branded merchandise, corporate gifts, and trade show giveaways with fast turnaround." });

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicePromoGiveaways} alt="Custom promotional products and branded giveaways for Ohio businesses" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Promotional Products & Giveaways <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Promotional Products & Custom Giveaways That Keep Your Brand{" "}
              <span className="text-primary">Top-of-Mind</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Custom drinkware, apparel, tech gadgets, office items, and more — all designed to drive referrals, build loyalty, and deliver real ROI for Ohio businesses.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: ShieldCheck, label: "No Hidden Fees" },
                { icon: BadgeCheck, label: "Wholesale Pricing" },
                { icon: ThumbsUp, label: "24-Hour Quotes" },
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                  <b.icon className="w-4 h-4 text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-10 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                  Get Your Custom Promotional Products Quoted in 24 Hours
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
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <ShoppingBag className="w-4 h-4" /> Quick & Easy Online Shopping
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Shop <span className="text-primary">Ready-Made Products</span> Online
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Need branded swag fast? Browse our online store for ready-made promotional products and giveaways — pens, tumblers, tote bags, and more — available to order right now.
            </p>
            <a
              href="http://www.buckeyebizhub.store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.35)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.5)] group uppercase tracking-wider transition-all duration-300 border-2 border-primary-foreground/10">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Ready-Made Products
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>
            <div className="mt-6 bg-card border border-border/60 rounded-xl px-6 py-4 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">Please note:</span> Our online store is for ready-made promotional products and giveaways only. For custom printing, vehicle wraps, signage, or full branding projects, please{" "}
                <Link to="/contact" className="text-primary font-bold hover:underline">get a custom quote</Link>.
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
              Why Promotional Products Work for <span className="text-primary">Ohio Businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Promotional products are one of the most cost-effective marketing tools available to local businesses. Unlike digital ads that disappear in seconds, a branded tumbler, pen, or tote bag stays with your customer for months — sometimes years — delivering impressions every single day. Studies show that 85% of consumers remember the advertiser who gave them a promotional product, and nearly 50% use promo items daily.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For Ohio businesses, promo products are perfect for trade shows and expos, client appreciation gifts, employee onboarding kits, direct mail campaigns, open houses, community events, and everyday brand awareness. Whether you're a Columbus HVAC company handing out branded pens at a home show or a Cleveland law firm sending premium tumblers to referral partners, the right promotional product turns a one-time interaction into a lasting relationship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Popular Promotional Products – 3x3 Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <ShoppingBag className="w-4 h-4" /> Our Product Categories
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Our Most Popular <span className="text-primary">Promotional Products</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From everyday essentials to premium executive gifts, we source the best products at true wholesale pricing through our SAGE and PPAI memberships.
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
                      <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.2)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.4)] transition-all duration-300 group/btn uppercase tracking-wider">
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
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[180px]" />
        <div className="container relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Printer className="w-4 h-4" /> Custom Printed Products
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Custom Printed <span className="text-primary">Promotional Products</span>
            </h2>
            <div className="w-24 h-[4px] mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light" />
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-medium max-w-3xl mx-auto mt-6">
              Some of the most effective promotional items combine everyday usefulness with full-color custom printing.
              These are the products your customers reach for again and again — each one a mini billboard for your brand.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: "Custom Printed Tote Bags",
                description: "Eco-friendly, reusable tote bags with your full-color logo — perfect for trade shows, retail giveaways, and farmers markets. Choose from cotton canvas, non-woven, and recycled materials in dozens of colors and sizes.",
                detail: "From $1.50/unit at volume",
              },
              {
                icon: PenTool,
                title: "Branded Notebooks & Journals",
                description: "Professional custom notebooks with printed covers, debossed logos, or full-wrap designs. Perfect for client gifts, conferences, and employee welcome kits. Available in softcover, hardcover, and spiral-bound options.",
                detail: "Hardcover from $4/unit",
              },
              {
                icon: Smartphone,
                title: "Custom Mousepads & Desk Accessories",
                description: "Full-color printed mousepads, desk mats, and coasters that sit in front of your clients all day, every day. Soft fabric top with non-slip rubber base — built to last and impossible to ignore.",
                detail: "From $2/unit at volume",
              },
              {
                icon: Megaphone,
                title: "Printed Banners & Table Throws",
                description: "Full-color dye-sublimated table throws, retractable pull-up banners, and backdrop displays that make your booth or event space look polished and professional. Wrinkle-resistant, machine-washable fabrics available.",
                detail: "Table throws from $99",
              },
              {
                icon: Gift,
                title: "Branded Giveaway Kits",
                description: "Curated gift bundles combining printed items — a branded tote filled with a custom notebook, printed pen, and logo tumbler. We assemble and package everything so you just hand them out and make an impression.",
                detail: "Custom bundles from $15/kit",
              },
              {
                icon: Award,
                title: "Printed Drinkware & Bottles",
                description: "Full-color wrap printing on tumblers, water bottles, and coffee mugs. UV-printed logos that won't fade, peel, or wash off — because your brand should look as good on day 500 as it does on day one.",
                detail: "From $5/unit at volume",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-2xl border-2 border-border hover:border-primary/40 overflow-hidden shadow-sm hover:shadow-[0_20px_60px_hsl(0_80%_42%/0.12)] transition-all duration-500 hover:-translate-y-1 flex flex-col"
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
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-5">
                    {item.detail}
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.2)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.4)] transition-all duration-300 group/btn uppercase tracking-wider">
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
              <span className="font-black text-primary">💡 David's Tip:</span>{" "}
              The highest-impact promo strategy? Pair a custom printed tote with a branded notebook and tumbler inside — it's a complete "brand experience" your customer walks away with.
              We bundle-price these kits so you get a better deal than ordering each item separately.{" "}
              <Link to="/contact" className="text-primary font-bold hover:underline">Let us put together a custom kit for you →</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deep-dive educational sections for each promo product type */}
      <PromoProductDeepDives />

      {/* Printed Marketing Materials */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[180px]" />
        <div className="container relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Printer className="w-4 h-4" /> Custom Printed Materials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Printed Marketing Materials That{" "}
              <span className="text-primary">Complete Your Brand</span>
            </h2>
            <div className="w-24 h-[4px] mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light" />
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-medium max-w-3xl mx-auto mt-6">
              Promotional products are just one piece of the puzzle. Pair them with professional printed materials
              to create a cohesive brand experience that leaves a lasting impression at every touchpoint.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Megaphone,
                title: "Custom Banners & Retractable Displays",
                image: PHOTO_SIGNAGE_1,
                description: "Command attention at trade shows, storefronts, and events with vibrant full-color banners. From lightweight retractable pull-ups to large-format vinyl, we print eye-catching displays that travel easy and set up in seconds.",
                link: "/banners-and-flags",
                linkLabel: "Explore Banners & Flags",
              },
              {
                icon: Zap,
                title: "Yard Signs & Outdoor Signage",
                image: PHOTO_SIGNAGE_3,
                description: "Weather-tough corrugated yard signs, A-frames, and custom outdoor signage built for Ohio's seasons. Perfect for grand openings, real estate, political campaigns, and jobsite branding that gets noticed from the street.",
                link: "/yard-signs-and-signage",
                linkLabel: "Explore Yard Signs",
              },
              {
                icon: CreditCard,
                title: "Business Cards & Stationery",
                image: PHOTO_PRINT_1,
                description: "First impressions start in the hand. Choose from premium stocks, foil stamping, spot UV, and soft-touch finishes that make your card the one they keep. We match every detail to your brand's personality.",
                link: "/business-cards",
                linkLabel: "Explore Business Cards",
              },
              {
                icon: FolderOpen,
                title: "Presentation Folders & Marketing Kits",
                image: PHOTO_PRINT_3,
                description: "Elevate proposals and client meetings with custom presentation folders, inserts, and branded marketing kits. Sturdy stocks, custom pockets, and foil options that tell prospects you mean business.",
                link: "/presentation-folders",
                linkLabel: "Explore Presentation Folders",
              },
              {
                icon: FileText,
                title: "Brochures, Flyers & Printed Collateral",
                image: PHOTO_PRINT_6,
                description: "From tri-folds and sell sheets to full catalogs and booklets, we handle every piece of printed collateral your business needs. High-quality stocks, vivid color, and fast Ohio turnarounds.",
                link: "/brochures-and-printing",
                linkLabel: "Explore Brochures & Printing",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-2xl border-2 border-border hover:border-primary/40 overflow-hidden shadow-sm hover:shadow-[0_20px_60px_hsl(0_80%_42%/0.15)] transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_4px_20px_hsl(0_80%_42%/0.4)]">
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
              Customization Options <span className="text-primary">Explained</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not sure which decoration method is right for your products? Here's a breakdown of every option we offer.
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
                        <span className="font-bold text-primary text-xs uppercase tracking-wider">When to choose: </span>
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
                Design Tips from David
              </h2>
            </div>
            <div className="bg-card rounded-2xl border-l-4 border-primary p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "After helping hundreds of Ohio businesses with promotional products, I've learned that the best promo items aren't the flashiest — they're the ones people actually use. A high-quality tumbler your client reaches for every morning delivers more brand impressions than a thousand novelty items that end up in a junk drawer."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "My advice? Focus on three things: usefulness, quality, and relevance. Choose items your specific audience will genuinely appreciate. A tech company's clients love wireless chargers. A dental office's patients love branded toothbrush kits. Match the product to the person and you'll see real results — not just smiles at a trade show, but actual referrals and repeat business."
              </p>
              <div className="mt-6">
                <p className="font-display font-black text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
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
              Promotional Products <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions we hear from Ohio businesses.
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

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />

        <div className="container relative text-center max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-10 leading-[0.9]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready to Create Promotional Products That Actually{" "}
            <span className="text-glow-white">Get Results?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Over 1 million products. True wholesale pricing. Full transparency. Let's find the perfect items to keep your brand top-of-mind.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl md:text-2xl px-14 py-9 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-widest"
                style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <Phone className="w-6 h-6" />
                Get Your Custom Quote in 24 Hours
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
            {["24-Hour Quotes", "Full Pricing Transparency", "SAGE & PPAI Members", "Ohio Owned & Operated"].map((item) => (
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
