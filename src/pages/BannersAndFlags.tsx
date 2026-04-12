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
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import TrustBadges from "@/components/TrustBadges";

import heroImg from "@/assets/banners-hero.jpg";
import vinylMeshImg from "@/assets/banner-vinyl-mesh.jpg";
import featherBladeImg from "@/assets/banner-feather-blade.jpg";
import retractableImg from "@/assets/banner-retractable-standup.jpg";
import graduationImg from "@/assets/banner-graduation.jpg";
import jobsiteImg from "@/assets/banner-jobsite-construction.jpg";
import eventImg from "@/assets/banner-event-grandopening.jpg";
import customFlagsImg from "@/assets/banner-custom-flags.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

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
    highlight: false,
  },
  {
    image: featherBladeImg,
    title: "Feather Flags & Blade Flags",
    desc: "Tall, eye-catching feather and blade flags that flutter in the breeze and grab roadside attention. Available in heights from 7ft to 17ft with ground stakes, cross bases, or water-filled bases.",
    highlight: false,
  },
  {
    image: retractableImg,
    title: "Retractable Banners & Stand-Up Signs",
    desc: "Professional roll-up banner stands that set up in seconds. Portable, reusable, and perfect for trade shows, lobbies, open houses, and presentations. Includes carrying case.",
    highlight: false,
  },
  {
    image: graduationImg,
    title: "Graduation Banners & School Event Banners",
    desc: "Celebrate achievements in style with custom graduation banners, school event banners, and senior banners. Perfect for high schools, colleges, and graduation parties across Ohio.",
    highlight: true,
  },
  {
    image: jobsiteImg,
    title: "Job-Site & Construction Banners",
    desc: "Large-format fence banners and construction site signage that turns your job site into a billboard. Durable mesh and vinyl options designed to withstand weather and promote your brand 24/7.",
    highlight: false,
  },
  {
    image: eventImg,
    title: "Event & Grand Opening Banners",
    desc: "Make your grand opening, sale, or special event impossible to miss with vibrant, full-color event banners. Custom sizes, fast turnaround, and bold designs that drive foot traffic and excitement.",
    highlight: false,
  },
  {
    image: customFlagsImg,
    title: "Custom Flags & Small Event Flags",
    desc: "Branded custom flags, table flags, pennant flags, and spirit flags for events, campuses, and business displays. Great for team pride, community celebrations, and promotional setups.",
    highlight: false,
  },
];

const materialsInfo = [
  { title: "Heavy-Duty 13oz Vinyl", desc: "The industry standard for outdoor banners — waterproof, tear-resistant, and UV-protected for years of use." },
  { title: "Mesh Banners", desc: "Micro-perforated material that allows wind to pass through, preventing tearing in high-wind locations like fences and elevated installations." },
  { title: "Full-Color Printing", desc: "Vibrant, high-resolution printing on one or both sides using UV-resistant inks that won't fade in Ohio weather." },
  { title: "Grommets & Pole Pockets", desc: "Metal grommets in all corners (and every 2 feet on large banners) for secure hanging. Pole pockets available for rod-mounted displays." },
  { title: "H-Wire Stakes & Stands", desc: "Sturdy H-wire stakes for yard signs, cross bases for indoor flags, and water-filled bases for outdoor stability on any surface." },
  { title: "Custom Sizes & Shapes", desc: "No standard sizes here — we produce banners, flags, and graduation banners in any custom dimensions your project requires." },
];

const faqItems = [
  { q: "What sizes are most popular for banners?", a: "The most popular banner sizes are 3' × 6', 4' × 8', and 3' × 10' for outdoor use. Graduation banners are commonly 2' × 6' or 3' × 5' for porch displays. For retractable stands, 33\" × 80\" is the standard. We produce banners in any custom size — just tell us your dimensions and we'll quote it within 24 hours." },
  { q: "What material is best for outdoor use?", a: "For most outdoor applications, 13oz vinyl is the gold standard — it's waterproof, UV-resistant, and incredibly durable. For windy locations like fences or elevated installations, mesh banners are the better choice because they allow wind to pass through without tearing." },
  { q: "Do you offer wind-resistant options?", a: "Absolutely. Our mesh banners are specifically designed for high-wind environments. For flags, blade flags maintain their shape better in strong winds compared to feather flags. We always recommend bringing flags indoors during severe weather." },
  { q: "Can banners be printed on both sides?", a: "Yes! We offer single-sided and double-sided printing on vinyl banners. Double-sided banners use a block-out layer in the middle to prevent show-through, ensuring your message is clear and vibrant from both directions." },
  { q: "Do you make custom graduation banners?", a: "Yes! Graduation banners are one of our most popular seasonal items. We create personalized senior banners, school celebration banners, and porch banners featuring the graduate's name, photo, school colors, and graduation year. Perfect for high schools, colleges, and grad parties across Ohio." },
  { q: "How long do outdoor banners last?", a: "With proper care, vinyl banners typically last 2-5 years outdoors. Mesh banners last 1-3 years. Graduation banners used seasonally can last for multiple celebrations. All our banners use UV-resistant inks to prevent fading." },
  { q: "Do you provide stands or stakes?", a: "Yes! We offer a full range of mounting hardware including H-wire stakes for yard signs, ground stakes for feather flags, cross bases for indoor use, water-filled bases for outdoor stability, and retractable stands with carrying cases." },
  { q: "Can I get rush production?", a: "Yes! Many banner and flag orders can be completed in 2-3 business days with rush production. Standard turnaround is 5-7 business days. Rush fees may apply and we're always transparent about costs upfront." },
  { q: "What file formats do you accept?", a: "We accept print-ready PDFs (preferred), Adobe Illustrator (.ai), Photoshop (.psd), and high-resolution JPEG/PNG files. For graduation banners with photos, we recommend high-quality images at 300 DPI for the best results." },
  { q: "Do you offer design help?", a: "Yes! If you don't have print-ready artwork, our design team can create custom banner, flag, or graduation banner designs that match your brand or school colors. Design services are available at competitive rates and include unlimited revisions until you're satisfied." },
];

const BannersAndFlags = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Banners & Flags — Including Graduation Banners",
    description: "Custom vinyl banners, mesh banners, feather flags, blade flags, retractable banners, graduation banners, and custom flags for Ohio businesses and schools. 24-hour quotes, wholesale pricing, fast turnaround.",
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

    usePageSEO({ title: "Custom Banners & Flags Columbus Ohio", description: "Custom vinyl banners, feather flags, retractable banners, and graduation banners in Columbus Ohio. Perfect for events, grand openings, job sites, and celebrations." });

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Custom banners, feather flags, retractable banners, and graduation banners displayed at an outdoor event in Columbus Ohio" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Banners & Flags <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Custom Banners & Flags That Get Noticed — Including{" "}
              <span className="text-primary">Graduation Banners</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              High-quality vinyl banners, feather flags, retractable banners, and special graduation banners — printed fast with 24-hour quotes and full transparency to help your Ohio business or school celebration stand out.
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
              Why Banners & Flags Work for <span className="text-primary">Ohio Businesses & Schools</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Custom banners and flags are among the most versatile and cost-effective marketing tools available. Whether you're promoting a grand opening, marking a job site, attracting foot traffic to your retail store, celebrating a graduate's achievements, or branding a trade show booth — banners and flags deliver immediate, high-visibility impact at a fraction of the cost of digital advertising.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For Ohio businesses and families, outdoor banners and feather flags are especially powerful. They're visible from the road, they work 24/7, and they create thousands of daily impressions. Graduation banners have become a beloved tradition across Central Ohio — celebrating students' milestones with personalized, full-color displays that make every porch, yard, and school feel festive and proud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7-Card Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Our Options
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Our Banners & <span className="text-primary">Flags Options</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From heavy-duty outdoor vinyl to portable retractable stands and custom graduation banners — we produce everything your business or celebration needs to get noticed.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={card.highlight ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Card className={`h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group bg-card overflow-hidden ${card.highlight ? "border-2 border-primary ring-2 ring-primary/20 shadow-[0_0_30px_hsl(0_80%_42%/0.15)]" : "border-border/50 hover:border-primary/40"}`}>
                  {card.highlight && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      Most Popular This Season
                    </div>
                  )}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={card.image} alt={`${card.title} for Ohio businesses`} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-7 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{card.desc}</p>
                    <Link to="/contact">
                      <Button className={`w-full font-bold rounded-xl transition-all duration-300 group/btn uppercase tracking-wider ${card.highlight ? "bg-primary hover:bg-ohio-red-light text-primary-foreground shadow-[0_0_25px_hsl(0_80%_42%/0.3)] hover:shadow-[0_0_45px_hsl(0_80%_42%/0.5)]" : "bg-primary hover:bg-ohio-red-light text-primary-foreground shadow-[0_0_20px_hsl(0_80%_42%/0.2)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.4)]"}`}>
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

      {/* Materials & Add-Ons */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Materials & <span className="text-primary">Add-Ons Explained</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We use only commercial-grade materials to ensure your banners, flags, and graduation banners look great and last — even in Ohio weather.
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
                "For graduation banners, keep it personal and proud — the graduate's name, school, year, and a great photo. Use school colors for maximum impact. These banners become keepsakes, so quality matters. For business banners, use high-contrast colors (white text on dark backgrounds works great from a distance) and make your call-to-action the largest element."
              </p>
              <div className="mt-6">
                <p className="font-display font-black text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
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
              Banners & Flags <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions about custom banners, flags, and graduation banners for Ohio businesses and families.
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
            Ready for custom banners and graduation banners that make your event{" "}
            <span className="text-primary-foreground/90 underline decoration-primary-foreground/30 underline-offset-4">unforgettable</span>?
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
