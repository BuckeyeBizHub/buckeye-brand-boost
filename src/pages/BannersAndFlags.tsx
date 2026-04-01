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
  Lightbulb,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import TrustBadges from "@/components/TrustBadges";

import heroImg from "@/assets/banners-flags-hero-v2.jpg";
import vinylMeshImg from "@/assets/banner-vinyl-mesh.jpg";
import featherBladeImg from "@/assets/banner-feather-blade.jpg";
import retractableImg from "@/assets/banner-retractable-standup.jpg";
import jobsiteImg from "@/assets/banner-jobsite-construction.jpg";
import eventImg from "@/assets/banner-event-grandopening.jpg";
import decalsImg from "@/assets/banner-decals-stickers.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const serviceCards = [
  {
    image: vinylMeshImg,
    title: "Vinyl Banners & Mesh Banners",
    desc: "Heavy-duty 13oz vinyl and wind-resistant mesh banners built for outdoor durability. Waterproof, UV-resistant, and available in any custom size with reinforced grommets for easy hanging.",
  },
  {
    image: featherBladeImg,
    title: "Feather Flags & Blade Flags",
    desc: "Tall, eye-catching feather and blade flags that flutter in the breeze and grab roadside attention. Available in heights from 7ft to 17ft with ground stakes, cross bases, or water-filled bases.",
  },
  {
    image: retractableImg,
    title: "Retractable Banners & Stand-Up Signs",
    desc: "Professional roll-up banner stands that set up in seconds. Portable, reusable, and perfect for trade shows, lobbies, open houses, and presentations. Includes carrying case.",
  },
  {
    image: jobsiteImg,
    title: "Job-Site & Construction Banners",
    desc: "Large-format fence banners and construction site signage that turns your job site into a billboard. Durable mesh and vinyl options designed to withstand weather and promote your brand 24/7.",
  },
  {
    image: eventImg,
    title: "Event & Grand Opening Banners",
    desc: "Make your grand opening, sale, or special event impossible to miss with vibrant, full-color event banners. Custom sizes, fast turnaround, and bold designs that drive foot traffic and excitement.",
  },
  {
    image: decalsImg,
    title: "Small Decals & Stickers",
    desc: "Custom die-cut logo stickers, window decals, bumper stickers, and floor graphics printed on premium vinyl with UV-protective lamination. Perfect for packaging, vehicles, storefronts, and giveaways.",
  },
];

const materialsInfo = [
  { title: "Heavy-Duty 13oz Vinyl", desc: "The industry standard for outdoor banners — waterproof, tear-resistant, and UV-protected for years of use." },
  { title: "Mesh Banners", desc: "Micro-perforated material that allows wind to pass through, preventing tearing in high-wind locations like fences and elevated installations." },
  { title: "Full-Color Printing", desc: "Vibrant, high-resolution printing on one or both sides using UV-resistant inks that won't fade in Ohio weather." },
  { title: "Grommets & Pole Pockets", desc: "Metal grommets in all corners (and every 2 feet on large banners) for secure hanging. Pole pockets available for rod-mounted displays." },
  { title: "H-Wire Stakes & Stands", desc: "Sturdy H-wire stakes for yard signs, cross bases for indoor flags, and water-filled bases for outdoor stability on any surface." },
  { title: "Custom Sizes & Shapes", desc: "No standard sizes here — we produce banners, flags, and decals in any custom dimensions your project requires." },
];

const faqItems = [
  { q: "What sizes are most popular for banners?", a: "The most popular banner sizes are 3' × 6', 4' × 8', and 3' × 10' for outdoor use. For retractable stands, 33\" × 80\" is the standard. However, we produce banners in any custom size — just tell us your dimensions and we'll quote it within 24 hours." },
  { q: "What material is best for outdoor use?", a: "For most outdoor applications, 13oz vinyl is the gold standard — it's waterproof, UV-resistant, and incredibly durable. For windy locations like fences or elevated installations, mesh banners are the better choice because they allow wind to pass through without tearing." },
  { q: "Do you offer wind-resistant options?", a: "Absolutely. Our mesh banners are specifically designed for high-wind environments. For flags, blade flags maintain their shape better in strong winds compared to feather flags. We always recommend bringing flags indoors during severe weather." },
  { q: "Can banners be printed on both sides?", a: "Yes! We offer single-sided and double-sided printing on vinyl banners. Double-sided banners use a block-out layer in the middle to prevent show-through, ensuring your message is clear and vibrant from both directions." },
  { q: "How long do outdoor banners last?", a: "With proper care, vinyl banners typically last 2-5 years outdoors. Mesh banners last 1-3 years. All our banners use UV-resistant inks to prevent fading. For maximum lifespan, we recommend taking banners down during severe storms." },
  { q: "Do you provide stands or stakes?", a: "Yes! We offer a full range of mounting hardware including H-wire stakes for yard signs, ground stakes for feather flags, cross bases for indoor use, water-filled bases for outdoor stability, and retractable stands with carrying cases." },
  { q: "Can I get rush production?", a: "Yes! Many banner and flag orders can be completed in 2-3 business days with rush production. Standard turnaround is 5-7 business days. Rush fees may apply and we're always transparent about costs upfront." },
  { q: "What file formats do you accept?", a: "We accept print-ready PDFs (preferred), Adobe Illustrator (.ai), Photoshop (.psd), and high-resolution JPEG/PNG files. For best results, files should be 150-300 DPI depending on banner size, with 0.5\" bleed on all sides." },
  { q: "Do you offer design help?", a: "Yes! If you don't have print-ready artwork, our design team can create custom banner, flag, or decal designs that match your brand. Design services are available at competitive rates and include unlimited revisions until you're satisfied." },
  { q: "Can I order small decals and large banners in one order?", a: "Absolutely! We handle projects of any size and complexity. Many Ohio businesses order banners, flags, and decals together as a coordinated package — and we offer package pricing to save you money." },
];

const BannersAndFlags = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Banners, Flags & Decals",
    description: "Custom vinyl banners, mesh banners, feather flags, blade flags, retractable banners, and decals for Ohio businesses. 24-hour quotes, wholesale pricing, fast turnaround.",
    url: "https://buckeye-brand-boost.lovable.app/banners-and-flags",
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
          <img src={heroImg} alt="Custom banners, feather flags, retractable banners, and decals displayed at an outdoor event in Columbus Ohio" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Banners, Flags & Decals <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Custom Banners, Flags & Decals That Grab Attention and Drive{" "}
              <span className="text-primary">Results</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              High-quality event banners, feather flags, retractable banners, job-site signs, and small decals — printed fast with 24-hour quotes and full transparency to help your Ohio business get noticed.
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
                  Get Your Custom Banners & Flags Quoted in 24 Hours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8">
              <TrustBadges variant="dark" size="sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Banners & Flags Work */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-8 text-center">
              Why Banners, Flags & Decals Work for <span className="text-primary">Ohio Businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Custom banners and flags are among the most versatile and cost-effective marketing tools available. Whether you're promoting a grand opening, marking a job site, attracting foot traffic to your retail store, or branding a trade show booth — banners and flags deliver immediate, high-visibility impact at a fraction of the cost of digital advertising.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For Ohio businesses, outdoor banners and feather flags are especially powerful. They're visible from the road, they work 24/7, and they create thousands of daily impressions in your local market. Pair them with custom decals and stickers for packaging, vehicles, and giveaways — and you've got a complete, low-cost brand awareness strategy that keeps working long after the initial investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3x2 Service Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Our Options
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Our Banners, Flags & <span className="text-primary">Decals Options</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From heavy-duty outdoor vinyl to portable retractable stands and custom stickers — we produce everything your business needs to get noticed.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group bg-card overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={card.image} alt={`${card.title} for Ohio businesses`} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-7">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{card.desc}</p>
                    <Link to="/contact">
                      <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.2)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.4)] transition-all duration-300 group/btn uppercase tracking-wider">
                        Learn More
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

      {/* Materials & Add-Ons */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Materials & <span className="text-primary">Add-Ons Explained</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We use only commercial-grade materials to ensure your banners, flags, and decals look great and last — even in Ohio weather.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialsInfo.map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="bg-card rounded-2xl border border-border/50 p-6 h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tips from David */}
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
                "Banners and flags need to communicate one thing instantly: who you are and what you want people to do. Don't overcrowd them with text. Your company name, one strong benefit statement, and a phone number or website — that's it."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "For feather flags, stick to bold colors and minimal text — they're moving, so people only get 2-3 seconds to read them. For vinyl banners, use high-contrast colors (white text on dark backgrounds works great from a distance) and make your call-to-action the largest element. Design for visibility at 100+ feet, not readability at 3 feet."
              </p>
              <div className="mt-6">
                <p className="font-display font-black text-foreground">— David Stein, The Buckeye Branding Czar</p>
                <p className="text-sm text-muted-foreground font-semibold">Buckeye Biz Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Banners, Flags & Decals <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions about custom banners, flags, and decals for Ohio businesses.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <AccordionItem value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-6 overflow-hidden hover:shadow-md transition-shadow">
                  <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary py-5 text-base">
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
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Ready for custom banners, flags, and decals that actually drive traffic and get your message{" "}
            <span className="text-primary-foreground/90 underline decoration-primary-foreground/30 underline-offset-4">noticed</span>?
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
                <Phone className="w-6 h-6" />
                Get Your Custom Banners & Flags Quote in 24 Hours
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8">
            <TrustBadges variant="dark" size="sm" />
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

      <RelatedServices />
      <Footer />
    </div>
  );
};

export default BannersAndFlags;
