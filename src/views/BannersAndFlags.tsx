"use client";
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
import { Link } from "@/lib/compat/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import TrustBadges from "@/components/TrustBadges";

const heroImg = "/assets/banners-hero.jpg";
const vinylMeshImg = "/assets/banner-vinyl-mesh.jpg";
const featherBladeImg = "/assets/banner-feather-blade.jpg";
const retractableImg = "/assets/banner-retractable-standup.jpg";
const graduationImg = "/assets/banner-graduation.jpg";
const jobsiteImg = "/assets/banner-jobsite-construction.jpg";
const eventImg = "/assets/banner-event-grandopening.jpg";
const customFlagsImg = "/assets/banner-custom-flags.jpg";
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
    desc: "Heavy-duty 13oz vinyl and wind-resistant mesh, built to live outside. Waterproof, UV-resistant, any size, with reinforced grommets for easy hanging.",
    highlight: false,
  },
  {
    image: featherBladeImg,
    title: "Feather Flags & Blade Flags",
    desc: "Tall feather and blade flags that move in the wind and catch eyes from the road. 7ft to 17ft, with ground stakes, cross bases or water-filled bases.",
    highlight: false,
  },
  {
    image: retractableImg,
    title: "Retractable Banners & Stand-Up Signs",
    desc: "Roll-up banner stands that set up in seconds. Portable and reusable for trade shows, lobbies, open houses and presentations. Carrying case included.",
    highlight: false,
  },
  {
    image: graduationImg,
    title: "Graduation Banners & School Event Banners",
    desc: "Custom graduation, senior and school event banners. For high schools, colleges and grad parties across Ohio.",
    highlight: true,
  },
  {
    image: jobsiteImg,
    title: "Job-Site & Construction Banners",
    desc: "Big fence banners and site signs that turn your job site into a billboard. Mesh or vinyl, built for weather, working around the clock.",
    highlight: false,
  },
  {
    image: eventImg,
    title: "Event & Grand Opening Banners",
    desc: "Full-color banners that make your grand opening, sale or event hard to miss. Custom sizes, fast turnaround and designs that bring people in.",
    highlight: false,
  },
  {
    image: customFlagsImg,
    title: "Custom Flags & Small Event Flags",
    desc: "Custom, table, pennant and spirit flags for events, campuses and business displays. Good for team pride, community events and promotions.",
    highlight: false,
  },
];

const materialsInfo = [
  { title: "Heavy-Duty 13oz Vinyl", desc: "The standard for outdoor banners. Waterproof, tear-resistant and UV-protected for years of use." },
  { title: "Mesh Banners", desc: "Tiny holes let wind pass through, so it won't tear on fences or up high." },
  { title: "Full-Color Printing", desc: "Sharp, high-res printing on one or both sides. UV-resistant inks hold up to Ohio weather." },
  { title: "Grommets & Pole Pockets", desc: "Metal grommets in every corner, and every 2 feet on large banners. Pole pockets available for rod mounting." },
  { title: "H-Wire Stakes & Stands", desc: "H-wire stakes for yard signs, cross bases for indoor flags and water-filled bases to keep flags steady outside on any surface." },
  { title: "Custom Sizes & Shapes", desc: "Banners, flags and graduation banners in whatever size your project needs." },
];

const faqItems = [
  { q: "What sizes are most popular for banners?", a: "Outdoors, the most popular sizes are 3' × 6', 4' × 8' and 3' × 10'. Graduation banners are usually 2' × 6' or 3' × 5' for the porch. Retractable stands are 33\" × 80\". Need another size? Send your dimensions and we'll quote it within 24 hours." },
  { q: "What material is best for outdoor use?", a: "For most outdoor use, 13oz vinyl. It's waterproof, UV-resistant and tough. On fences or anywhere up high and windy, go mesh. Wind passes through and it won't tear." },
  { q: "Do you offer wind-resistant options?", a: "Yes. Mesh banners are made for high wind. For flags, blade flags hold their shape better than feather flags in strong wind. Bring flags inside during severe weather." },
  { q: "Can banners be printed on both sides?", a: "Yes. Single or double-sided on vinyl. Double-sided banners have a block-out layer in the middle so nothing shows through. Both sides read clean." },
  { q: "Do you make custom graduation banners?", a: "Yes. They're one of our most popular seasonal items. Senior banners, school banners and porch banners with the graduate's name, photo, school colors and year. For high schools, colleges and grad parties across Ohio." },
  { q: "How long do outdoor banners last?", a: "Taken care of, vinyl banners usually last 2-5 years outside. Mesh lasts 1-3 years. A graduation banner used once a season can last for more than one grad. All our banners use UV-resistant inks so they don't fade." },
  { q: "Do you provide stands or stakes?", a: "Yes. H-wire stakes for yard signs, ground stakes for feather flags, cross bases for indoors, water-filled bases for outside and retractable stands with carrying cases." },
  { q: "Can I get rush production?", a: "Yes. With rush production, many banner and flag orders are done in 2-3 business days. Standard is 5-7 business days. Rush fees may apply, and you'll see them up front." },
  { q: "What file formats do you accept?", a: "Print-ready PDF (preferred), Adobe Illustrator (.ai), Photoshop (.psd) and high-res JPEG or PNG. For graduation banners with photos, send images at 300 DPI." },
  { q: "Do you offer design help?", a: "Yes. No artwork? Our design team will build a banner, flag or graduation banner in your brand or school colors. Design is priced fairly, and we revise until you're happy." },
];

const BannersAndFlags = () => {

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

    usePageSEO({ title: "Custom Banners & Flags Columbus Ohio", description: "Custom banners, flags and signs for Columbus Ohio businesses, schools and events. Made through our local print partners. Fast turnaround, free quote." });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Custom banners, feather flags, retractable banners, and graduation banners displayed at an outdoor event in Columbus Ohio" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>
        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Banners and flags <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              Banners and flags people notice. Graduation banners{" "}
              <span className="text-primary">included.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Vinyl banners, feather flags, retractable stands and graduation banners. Printed fast. Quotes in 24 hours. Every cost shown. For Ohio businesses, schools and families.
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
                  Get your banner quote in 24 hours
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
              Why banners and flags work for <span className="text-primary">Ohio businesses and schools</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Banners and flags are cheap and they do a lot. Grand opening, job site, store traffic, a graduate, a trade show booth. They get seen right away, for a fraction of what digital ads cost.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Outdoor banners and feather flags work especially well here. People see them from the road, day and night. And graduation banners are now a tradition across Central Ohio. Put the grad's name and photo on the porch and let the whole street celebrate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7-Card Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4 bg-primary/[0.08] px-6 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Our options
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Banner and <span className="text-primary">flag options</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Heavy-duty outdoor vinyl, portable retractable stands, custom graduation banners. Whatever your business or celebration needs to get noticed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={card.highlight ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Card className={`h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group bg-card overflow-hidden ${card.highlight ? "border-2 border-primary ring-2 ring-primary/20 " : "border-border/50 hover:border-primary/40"}`}>
                  {card.highlight && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-black flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      Most popular this season
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
                      <Button className={`w-full font-bold rounded-xl transition-all duration-300 group/btn ${card.highlight ? "bg-primary hover:bg-ohio-red-light text-primary-foreground " : "bg-primary hover:bg-ohio-red-light text-primary-foreground "}`}>
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
              Materials and <span className="text-primary">add-ons explained</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Commercial-grade materials only, so your banners and flags look good and last through Ohio weather.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Design tips from David
              </h2>
            </div>
            <div className="bg-card rounded-2xl border-l-4 border-primary p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "A banner has to say one thing fast: who you are and what you want people to do. Don't pile on text. Your company name, one strong reason to call, and a phone number or website. That's it."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic font-serif">
                "For graduation banners, keep it personal: the grad's name, school, year and a great photo. Use school colors. These become keepsakes, so quality matters. For business banners, use high contrast (white text on a dark background reads well from a distance) and make your call to action the biggest thing on it."
              </p>
              <div className="mt-6">
                <p className="font-display font-black text-foreground">David Stein, Your Buckeye Branding Concierge</p>
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
              Banners and flags <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The questions Ohio businesses and families ask us most about banners, flags and graduation banners.
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,14%,12%)] via-primary to-[hsl(216,14%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full hidden" />
        <div className="container relative text-center max-w-3xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Ready for banners people{" "}
            <span className="text-primary-foreground/90 underline decoration-primary-foreground/30 underline-offset-4">remember</span>?
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group ">
                <Phone className="w-6 h-6" />
                Get your banner quote in 24 hours
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
            {["24-hour quotes", "Every cost shown", "Ohio owned and operated"].map((item, i) => (
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
