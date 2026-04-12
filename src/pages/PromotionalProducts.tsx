import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShoppingBag, Star, CheckCircle, Award, Eye, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Footer from "@/components/Footer";

import customApparel from "@/assets/custom-apparel-polos-hoodies.jpg";
import brandedDrinkware from "@/assets/branded-drinkware-tumblers.jpg";
import tentsBarRails from "@/assets/tents-table-throws-bar-rails.jpg";
import barCoastersInUse from "@/assets/bar-coasters-in-use.jpg";
import promoOffice from "@/assets/promo-office.jpg";
import printingTradeshow from "@/assets/printing-tradeshow.jpg";
import promoGiveaways from "@/assets/promo-giveaways-pens-keychains.jpg";
import customHats from "@/assets/custom-hats-headwear.jpg";
import customBagsTotes from "@/assets/custom-bags-totes.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const categories = [
  {
    image: customApparel,
    title: "Custom Apparel & Uniforms",
    benefit: "Turn your team into walking brand ambassadors",
    bullets: [
      "Screen printing, embroidery, and DTG on premium brands",
      "Bella+Canvas, Gildan, Nike, Under Armour and more",
      "Polos, hoodies, jackets, and full team uniforms",
      "Bulk wholesale pricing with no inflated markups",
    ],
  },
  {
    image: brandedDrinkware,
    title: "Drinkware & Bar Items",
    benefit: "Your logo in their hands every single day",
    bullets: [
      "Full-color UV printing and laser engraving available",
      "Insulated stainless steel, ceramic, and BPA-free options",
      "Tumblers, coffee mugs, water bottles, and pint glasses",
      "Perfect for corporate gifts and employee appreciation",
    ],
  },
  {
    image: tentsBarRails,
    title: "Tents, Table Throws & Outdoor Displays",
    benefit: "Own every event, festival, and trade show",
    bullets: [
      "Dye-sublimation printing for vibrant, weather-resistant graphics",
      "10x10, 10x15, and 10x20 custom canopy tent sizes",
      "Full backwalls, half walls, and matching table covers",
      "Built for Ohio's outdoor event season — durable and reusable",
    ],
  },
  {
    image: barCoastersInUse,
    title: "On-Premise Point-of-Sale Items",
    benefit: "Elevate your bar, brewery, or restaurant identity",
    bullets: [
      "Full-color custom bar rail mats with your logo",
      "Custom printed coasters in cork, cardboard, and rubber",
      "Branded menus, table tents, and POS displays",
      "Durable construction built for heavy daily use",
    ],
  },
  {
    image: promoGiveaways,
    title: "Promotional Giveaways & Business Essentials",
    benefit: "Memorable items your customers actually keep and use",
    bullets: [
      "Branded pens, keychains, lanyards, and stress balls",
      "Custom packaging and kitting for events and mailers",
      "Thousands of options across every price point",
      "We compare suppliers so you get the best value",
    ],
  },
  {
    image: customHats,
    title: "Hats & Headwear",
    benefit: "High-retention items your customers actually wear",
    bullets: [
      "Embroidery, screen print, and custom patch options",
      "Richardson, Flexfit, New Era, and Yupoong brands",
      "Snapbacks, truckers, beanies, and structured caps",
      "Wholesale pricing on bulk orders",
    ],
  },
  {
    image: customBagsTotes,
    title: "Bags & Totes",
    benefit: "Walking billboards your customers carry everywhere",
    bullets: [
      "Custom tote bags, drawstring bags, and backpacks",
      "Full-color printing, embroidery, and screen print",
      "Eco-friendly and reusable options available",
      "Perfect for trade shows, retail, and corporate gifts",
    ],
  },
  {
    image: printingTradeshow,
    title: "Trade Show & Event Products",
    benefit: "Make your booth impossible to walk past",
    bullets: [
      "Retractable banners, backdrop walls, and floor graphics",
      "Branded lanyards, badge holders, and wristbands",
      "Kitting and fulfillment services for large orders",
      "Fast shipping across Ohio — Columbus, Cleveland, Cincinnati",
    ],
  },
  {
    image: promoOffice,
    title: "Office & Desk Accessories",
    benefit: "Stay on their desk and in their mind",
    bullets: [
      "Branded notebooks, pens, sticky pads, and mouse pads",
      "USB drives, phone stands, and tech accessories",
      "Full-color imprinting, debossing, and laser engraving",
      "Thousands of options to fit any budget",
    ],
  },
];

const trustPoints = [
  { icon: Star, title: "1 Million+ Products", desc: "Access to over 1 million products through SAGE and PPAI — the industry's largest networks" },
  { icon: Eye, title: "Full Cost Transparency", desc: "True wholesale pricing with full cost transparency — we show you exactly what we pay" },
  { icon: Award, title: "Best Solution Guaranteed", desc: "We compare options across thousands of suppliers so you always get the best solution" },
  { icon: Heart, title: "Led by Your Buckeye Branding Concierge", desc: "David Stein, Your Buckeye Branding Concierge, personally helps you grow with the right products" },
];

const PromotionalProducts = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Promotional Products",
    description: "Over 1 million promotional products at true wholesale pricing. SAGE and PPAI members serving Columbus and all of Ohio.",
    url: "https://buckeye-brand-boost.lovable.app/promotional-products",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

    usePageSEO({ title: "Promotional Products & Giveaways Columbus Ohio", description: "Custom promotional products and branded giveaways for Ohio businesses. Drinkware, apparel, tech gadgets, and more with your logo. Fast quotes and wholesale pricing." });

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-48 pb-36 lg:pt-60 lg:pb-52 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0">
          <img src={barCoastersInUse} alt="Buckeye Biz Hub branded coasters and pint glasses on a bar" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,30%,3%/0.45)] via-[hsl(0,40%,5%/0.55)] to-[hsl(0,60%,8%/0.92)]" />
          <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-[hsl(0,50%,6%)] via-[hsl(0,50%,6%/0.85)] to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-12 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]">
            <Sparkles className="w-4 h-4" /> SAGE & PPAI Members <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-black text-primary-foreground leading-[0.88] mb-12"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.7), 0 8px 30px rgba(0,0,0,0.9)' }}>
            Over 1 Million Promotional Products at{" "}
            <span className="text-primary text-glow-red">True Wholesale Pricing</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/85 max-w-3xl mx-auto font-semibold leading-snug px-6"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
            As proud members of SAGE and PPAI, we have access to over one million high-quality promotional items and always find you the best options at the best price.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16">
            {[
              { num: "1M+", label: "Products Available" },
              { num: "4,300+", label: "Supplier Partners" },
              { num: "100%", label: "Cost Transparency" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-5xl font-black text-primary" style={{ textShadow: '0 0 25px hsl(0 80% 42% / 0.4)' }}>{stat.num}</div>
                <div className="text-xs font-bold text-primary-foreground/45 tracking-[0.2em] uppercase mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Body Copy */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Promotional Products <span className="text-primary">Done Differently</span>
            </h2>
            <div className="w-24 h-[4px] mx-auto rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light" />
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-medium">
              At Buckeye Biz Hub we do promotional products differently. We are active members of SAGE and PPAI, giving us direct access to over 1 million products from the nation's top suppliers.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-medium">
              Instead of limiting you to a small catalog, we compare thousands of options for every order so you always get the highest quality items at the lowest possible price. We focus on real value — premium products that actually help your brand stand out and grow — without the inflated markups most companies charge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Category Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <ShoppingBag className="w-4 h-4" /> Our Product Categories
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
              Everything Your Brand <span className="text-primary">Needs to Stand Out</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-2xl border-2 border-border hover:border-primary/40 overflow-hidden shadow-lg hover:shadow-[0_20px_60px_hsl(0_80%_42%/0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={cat.image} alt={cat.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-1 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-sm font-semibold text-primary mb-4">{cat.benefit}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {cat.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground font-medium">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold text-base py-6 rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.3)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.5)] transition-all duration-300 group/btn uppercase tracking-wider">
                      Get a Quote
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Why Smart Ohio Businesses Choose{" "}
              <span className="text-primary">Buckeye Biz Hub</span> for Promo
            </h2>
            <div className="w-24 h-[4px] mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((tp, i) => (
              <motion.div
                key={tp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl border-2 border-border p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <tp.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-3">{tp.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{tp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />

        <div className="container relative text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-10 leading-[0.9]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready to Stand Out with the Perfect{" "}<br className="hidden md:block" />
            <span className="text-glow-white">Promotional Products?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Over 1 million products. True wholesale pricing. Full transparency. Let's find the perfect items for your brand.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl md:text-2xl px-14 py-9 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-widest"
                style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <Phone className="w-6 h-6" />
                Get Your Custom Quote Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <RelatedBlogPosts heading="Promotional Product Tips & Guides" searchTerm="promotional products" />
      <Footer />
    </div>
  );
};

export default PromotionalProducts;
