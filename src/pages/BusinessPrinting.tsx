import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Printer, Star, Zap, Clock, Shield, CheckCircle2, Users, Award, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  PHOTO_PRINT_7, PHOTO_PRINT_8, PHOTO_PRINT_9, PHOTO_PRINT_10,
  PHOTO_SIGNAGE_4,
  PHOTO_APPAREL_1, PHOTO_APPAREL_2, PHOTO_APPAREL_3,
} from "@/lib/photos";

import businessCardsStack from "@/assets/business-cards-letterhead-stack.jpg";
import yardSignInstall from "@/assets/yard-sign-installation.jpg";
import brochuresFlyers from "@/assets/brochures-flyers-layou.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const trustBadges = [
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Shield, label: "Quality Guaranteed" },
  { icon: Clock, label: "24hr Quote Response" },
  { icon: Truck, label: "Wholesale Pricing" },
];

interface ServiceSectionProps {
  title: string;
  seoTitle: string;
  description: string;
  benefits: string[];
  useCases: string[];
  seoText: string;
  images: string[];
  reversed?: boolean;
  index: number;
}

const ServiceSection = ({ title, seoTitle, description, benefits, useCases, seoText, images, reversed, index }: ServiceSectionProps) => (
  <section className={`py-24 lg:py-32 relative overflow-hidden ${index % 2 === 0 ? "bg-ohio-grey-dark" : "bg-[hsl(0,0%,7%)]"}`}>
    <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[150px]" />
    <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
    <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-1.5 h-full bg-gradient-to-b from-transparent via-primary/60 to-transparent`} />

    <div className="container relative">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        custom={0} variants={fadeUp} className="text-center mb-16"
      >
        <span className="inline-block bg-primary/25 border-2 border-primary/40 text-primary text-xs font-black uppercase tracking-[0.25em] px-6 py-2 rounded-full mb-6 shadow-[0_0_20px_hsl(0_80%_42%/0.15)]">
          0{index + 1} — {title}
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-5 text-glow-white leading-[0.9]">
          {seoTitle}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/50 max-w-3xl mx-auto font-medium">
          {description}
        </p>
      </motion.div>

      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Images Grid */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          custom={1} variants={fadeUp}
          className={`grid grid-cols-2 gap-4 ${reversed ? 'lg:order-2' : ''}`}
        >
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group ${i === 0 ? 'col-span-2 h-64' : 'h-48'}`}>
              <img src={img} alt={`${title} - ${i + 1}`} loading="lazy" width={800} height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ohio-grey-dark/60 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          custom={2} variants={fadeUp}
          className={reversed ? 'lg:order-1' : ''}
        >
          <h3 className="font-display text-2xl md:text-3xl font-black mb-6 text-primary">Why Choose Our {title}?</h3>

          <div className="space-y-3 mb-8">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 font-medium">{b}</span>
              </div>
            ))}
          </div>

          <h4 className="font-display text-xl font-black mb-4 text-primary-foreground/80">Common Use Cases</h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {useCases.map((uc) => (
              <span key={uc} className="bg-primary/15 border border-primary/30 text-primary-foreground/70 text-sm font-bold px-4 py-1.5 rounded-full">
                {uc}
              </span>
            ))}
          </div>

          <p className="text-primary-foreground/40 text-sm leading-relaxed mb-8">{seoText}</p>

          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.6)] transition-all duration-300 group uppercase tracking-wider">
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

const services: Omit<ServiceSectionProps, 'index'>[] = [
  {
    title: "Business Cards",
    seoTitle: "Columbus Business Cards – Premium & Custom Printed",
    description: "Make a powerful first impression with professionally designed and printed business cards from Buckeye Biz Hub.",
    benefits: [
      "Multiple premium paper stocks: 16pt, 32pt ultra-thick, silk laminate, and more",
      "Full-color printing with spot UV, foil stamping, and embossing options",
      "Fast turnaround — order today, receive within days across Ohio",
      "Wholesale pricing for bulk orders of 500, 1,000, 5,000+ cards",
      "Free design assistance to match your brand identity",
    ],
    useCases: ["Networking Events", "Sales Teams", "Grand Openings", "Trade Shows", "Corporate Gifting"],
    seoText: "Looking for affordable Columbus business cards or custom business card printing in Ohio? Buckeye Biz Hub delivers premium quality business cards with wholesale pricing and fast turnaround. Whether you need standard business cards, luxury thick cards, or specialty finishes like spot UV and foil stamping, we serve Columbus, Cleveland, Cincinnati, Dayton, and all of Ohio with professional business card printing services.",
    images: [businessCardsStack, businessCardsStack, businessCardsStack],
  },
  {
    title: "Banners & Yard Signs",
    seoTitle: "Ohio Yard Signs & Vinyl Banners – Custom Printed",
    description: "High-visibility outdoor signage built to withstand Ohio weather. Perfect for campaigns, events, real estate, and business promotions.",
    benefits: [
      "Durable vinyl banners rated for outdoor use — wind, rain, and UV resistant",
      "Corrugated plastic yard signs with optional H-wire stakes included",
      "Custom sizes from small directional signs to massive building banners",
      "Vibrant full-color printing with fade-resistant inks",
      "Bulk discounts for political campaigns, real estate agents, and event planners",
    ],
    useCases: ["Political Campaigns", "Real Estate Open Houses", "Grand Openings", "Church Events", "Construction Sites"],
    seoText: "Need custom Ohio yard signs or wholesale vinyl banners in Columbus? Buckeye Biz Hub provides high-quality corrugated yard signs, retractable banners, and large vinyl banners for businesses across Ohio. From political campaign signs to real estate yard signs, our Columbus banner printing services deliver fast with competitive wholesale pricing throughout Ohio.",
    images: [yardSignInstall, yardSignInstall, yardSignInstall],
    reversed: true,
  },
  {
    title: "Brochures & Flyers",
    seoTitle: "Brochure & Flyer Printing – Columbus, Ohio",
    description: "Professional marketing collateral that tells your story. Tri-fold brochures, rack cards, flyers, and sell sheets printed on premium stock.",
    benefits: [
      "Tri-fold, bi-fold, z-fold, and gate-fold brochure options",
      "Glossy, matte, and silk finishes for a premium look and feel",
      "Flyers available in multiple sizes: 4×6, 5×7, 8.5×11, and custom",
      "Rack cards perfect for hotel lobbies, restaurants, and trade shows",
      "Affordable pricing on runs from 250 to 100,000+ pieces",
    ],
    useCases: ["Direct Mail Campaigns", "Trade Show Handouts", "Restaurant Menus", "Hotel Information", "Medical Offices"],
    seoText: "Searching for professional brochure printing in Columbus Ohio or affordable flyer printing services? Buckeye Biz Hub offers high-quality tri-fold brochures, rack cards, flyers, and marketing materials with wholesale pricing. Our Ohio printing services include design support, premium paper options, and fast delivery throughout Columbus, Cleveland, and all of Ohio.",
    images: [brochuresFlyers, brochuresFlyers, brochuresFlyers],
  },
  {
    title: "Letterhead & Stationery",
    seoTitle: "Custom Letterhead & Business Stationery – Ohio",
    description: "Establish brand authority with professionally printed letterhead, envelopes, notepads, and complete stationery packages.",
    benefits: [
      "Matching sets: letterhead, envelopes, business cards, and notepads",
      "Premium paper stocks including linen, cotton, and recycled options",
      "Full-color or Pantone-matched printing for exact brand colors",
      "Custom sizes and die-cut options for unique branding",
      "Ideal for law firms, medical offices, and corporate headquarters",
    ],
    useCases: ["Law Firms", "Medical Practices", "Corporate Offices", "Financial Advisors", "Real Estate Agencies"],
    seoText: "Professional custom letterhead printing and business stationery in Columbus Ohio. Buckeye Biz Hub delivers complete stationery packages including printed envelopes, letterhead, and matching business cards with premium paper options. Our wholesale printing Ohio services help businesses across the state present a polished, professional image.",
    images: [PHOTO_PRINT_9, PHOTO_PRINT_10, PHOTO_PRINT_2],
    reversed: true,
  },
  {
    title: "Large Format Printing",
    seoTitle: "Large Format Printing Services – Columbus & Ohio",
    description: "Go big with posters, wall murals, trade show displays, and vehicle wraps printed in stunning detail on wide-format equipment.",
    benefits: [
      "Posters up to 60\" wide in any custom length — perfect for storefronts",
      "Trade show displays: pop-up banners, booth backdrops, and table throws",
      "Wall murals and window graphics for interior branding and retail spaces",
      "High-resolution printing at 720–1440 DPI for photo-quality output",
      "Mounting, lamination, and finishing options for durability",
    ],
    useCases: ["Trade Show Booths", "Retail Window Displays", "Office Branding", "Event Backdrops", "Restaurant Decor"],
    seoText: "Need large format printing in Columbus Ohio? Buckeye Biz Hub offers wide-format poster printing, trade show display printing, wall murals, and custom signage for businesses across Ohio. Our large format printing services deliver stunning quality at wholesale prices with fast turnaround for Columbus, Dayton, Cincinnati, and Cleveland businesses.",
    images: [PHOTO_PRINT_7, PHOTO_SIGNAGE_4, PHOTO_PRINT_8],
  },
  {
    title: "Custom Apparel Printing",
    seoTitle: "Custom Apparel Printing Ohio – Shirts, Hoodies & More",
    description: "Branded apparel for teams, events, and promotions. Screen printing, DTG, and embroidery on premium garments.",
    benefits: [
      "Screen printing for bulk orders — vibrant colors that last hundreds of washes",
      "Direct-to-garment (DTG) for small runs and complex full-color designs",
      "Embroidery for polos, caps, and corporate uniforms with a premium feel",
      "Wide garment selection: t-shirts, hoodies, tank tops, hats, and more",
      "No minimum orders on DTG — perfect for prototypes and one-offs",
    ],
    useCases: ["Company Uniforms", "Team Sports", "Event Merchandise", "Promotional Giveaways", "Brand Ambassadors"],
    seoText: "Looking for custom t-shirt printing in Columbus Ohio or wholesale apparel printing? Buckeye Biz Hub provides screen printing, DTG printing, and embroidery services on premium garments. From custom team shirts to branded corporate uniforms, our Ohio apparel printing delivers fast with competitive wholesale pricing.",
    images: [PHOTO_APPAREL_1, PHOTO_APPAREL_2, PHOTO_APPAREL_3],
    reversed: true,
  },
];

const BusinessPrinting = () => {
  return (
    <div className="min-h-screen bg-ohio-grey-dark text-primary-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,6%)] via-ohio-grey-dark to-[hsl(0,0%,8%)]" />
        <div className="absolute top-[-200px] right-[-200px] w-[900px] h-[900px] bg-primary/[0.12] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[700px] h-[700px] bg-primary/[0.08] rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-b from-primary/[0.06] to-transparent skew-x-[-12deg] translate-x-20" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 bg-primary/25 border-2 border-primary/40 rounded-full px-7 py-3 mb-10 shadow-[0_0_30px_hsl(0_80%_42%/0.2)]">
              <Printer className="w-5 h-5 text-primary" />
              <span className="text-sm font-black text-primary tracking-[0.15em] uppercase">Professional Printing Services</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] mb-10 text-glow-white"
          >
            Professional Business Printing
            <br />
            <span className="text-primary text-glow-red">That Makes Your Brand</span>
            <br />
            <span className="text-primary text-glow-red">Stand Out</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/55 max-w-4xl mx-auto mb-14 font-medium"
          >
            From business cards to vehicle wraps, Buckeye Biz Hub delivers <span className="text-primary font-bold">premium printing</span> with wholesale pricing and fast turnaround across Columbus, Cleveland, Cincinnati, and all of Ohio.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-6 mb-14">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5 bg-primary-foreground/[0.05] border border-primary-foreground/10 rounded-full px-5 py-2.5">
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-primary-foreground/70 uppercase tracking-wider">{badge.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-xl px-14 py-8 rounded-xl shadow-[0_0_50px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                <Phone className="w-6 h-6" />
                Get a Free Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro SEO Block */}
      <section className="py-20 bg-[hsl(0,0%,7%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-glow-white">
              Your Complete <span className="text-primary">Business Printing Partner</span> in Ohio
            </h2>
            <p className="text-lg text-primary-foreground/50 leading-relaxed mb-6">
              Buckeye Biz Hub is your one-stop shop for all commercial and business printing services in Columbus, Ohio and beyond. We combine wholesale pricing with local service to deliver everything from custom business cards and vinyl banners to large format trade show displays and branded apparel.
            </p>
            <p className="text-lg text-primary-foreground/50 leading-relaxed">
              Whether you're a startup needing your first batch of business cards, a real estate agency ordering yard signs, or a corporation outfitting your team with branded uniforms, our printing experts deliver exceptional quality at prices that make sense for your budget.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Award, stat: "10,000+", label: "Products Available" },
              { icon: Users, stat: "500+", label: "Ohio Businesses Served" },
              { icon: Clock, stat: "24-48hr", label: "Average Turnaround" },
              { icon: Star, stat: "4.9/5", label: "Customer Rating" },
            ].map((item) => (
              <div key={item.label} className="text-center bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="font-display text-3xl md:text-4xl font-black text-primary mb-2">{item.stat}</div>
                <div className="text-primary-foreground/50 font-bold uppercase tracking-wider text-sm">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, idx) => (
        <ServiceSection key={service.title} {...service} index={idx} />
      ))}

      {/* Why Buckeye Biz Hub SEO Section */}
      <section className="py-24 lg:py-32 bg-[hsl(0,0%,6%)] relative overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.06] rounded-full blur-[200px]" />
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-glow-white">
              Why Ohio Businesses Choose <span className="text-primary text-glow-red">Buckeye Biz Hub</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Wholesale Pricing", desc: "Get commercial printing at wholesale rates. No middleman markup — direct savings passed to your Ohio business." },
              { title: "Fast Ohio Delivery", desc: "Most orders ship within 24-48 hours. Columbus, Cleveland, Cincinnati, Dayton — we cover all of Ohio with fast delivery." },
              { title: "Premium Quality", desc: "We use top-tier printing equipment and premium materials to deliver professional results every time." },
              { title: "Local Service", desc: "Ohio-based business support. Talk to real people who understand local business needs and Ohio market dynamics." },
              { title: "Design Assistance", desc: "Need help with your print design? Our team provides free design support to ensure your materials look professional." },
              { title: "No Order Too Big or Small", desc: "From 100 business cards to 100,000 flyers — we handle orders of any size with consistent quality and pricing." },
            ].map((item) => (
              <div key={item.title} className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(0_80%_42%/0.1)] transition-all duration-300">
                <h3 className="font-display text-xl font-black text-primary mb-3">{item.title}</h3>
                <p className="text-primary-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,8%)] to-[hsl(0,0%,4%)]" />
        <div className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] bg-primary/[0.1] rounded-full blur-[200px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[180px]" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-10">
              <Star className="w-6 h-6 text-primary fill-primary" />
              <Star className="w-8 h-8 text-primary fill-primary" />
              <Star className="w-6 h-6 text-primary fill-primary" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-8 leading-[0.85] text-glow-white">
              Ready to Print
              <br />
              <span className="text-primary text-glow-red">Your Success?</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-primary-foreground/50 mb-16 font-medium max-w-3xl mx-auto">
            From custom Columbus business cards to wholesale Ohio banner printing, Buckeye Biz Hub is your trusted partner for every printing need. Contact our team today to discuss your next project and get a free, no-obligation quote.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-xl sm:text-2xl px-16 py-9 rounded-xl shadow-[0_0_60px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_100px_hsl(0_80%_42%/0.7)] transition-all duration-400 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                <Phone className="w-6 h-6" />
                Get Your Free Quote Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Buckeye Biz Hub - Business Printing Services",
        "description": "Professional business printing services in Columbus, Ohio. Business cards, banners, brochures, large format printing, and custom apparel at wholesale prices.",
        "url": "https://buckeye-brand-boost.lovable.app/business-printing",
        "areaServed": { "@type": "State", "name": "Ohio" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Business Printing Services",
          "itemListElement": services.map((s, i) => ({
            "@type": "Offer", "itemOffered": { "@type": "Service", "name": s.title, "description": s.description }, "position": i + 1
          }))
        }
      }) }} />

      <Footer />
    </div>
  );
};

export default BusinessPrinting;
