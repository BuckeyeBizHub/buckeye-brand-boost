"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, MessageSquareQuote, Search, MapPin, Star, FileText, BarChart3, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

const heroImg = "/assets/local-seo-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const seoServices = [
  { title: "Google Business Profile setup and management", icon: MapPin, desc: "We set up and manage your Google Business Profile: photos, posts, categories, Q&A and attributes. The goal is the top of the Map Pack when locals search." },
  { title: "Local citations and NAP consistency", icon: FileText, desc: "We build and clean up your listings on 50+ directories so your name, address and phone number match everywhere. Google cares about that a lot." },
  { title: "Review management", icon: Star, desc: "We help you get more reviews and answer every one the right way. Google rewards that with better rankings." },
  { title: "Local content and on-page SEO", icon: Search, desc: "We write local content and tune your pages for the words your customers search. Columbus, Cincinnati, Cleveland, Toledo or anywhere else." },
  { title: "Rank tracking and heatmaps", icon: BarChart3, desc: "See where you rank in every zip code you serve. Heatmaps and monthly reports show your progress." },
  { title: "Schema markup and technical SEO", icon: Code, desc: "We add LocalBusiness schema and fix site speed, mobile issues and other technical items that help Google understand and rank you." },
];

const processSteps = [
  "A full local audit of where you stand online today",
  "Google Business Profile setup with photos, posts and categories",
  "Listings built on 50+ major directories",
  "More reviews, and a reply to every one",
  "Local content aimed at the searches in your service area",
  "Rank tracking, heatmaps and monthly adjustments",
];

const faqItems = [
  { q: "What is Local SEO and why does it matter?", a: "Local SEO is how you get found when people nearby search on Google. Someone types 'plumber near me' or 'best dentist in Columbus.' Local SEO decides who shows up at the top and in the Google Map Pack. Columbus, Cleveland, Cincinnati, Dayton, Toledo or outside Ohio, it's the best way to reach customers who are ready to buy." },
  { q: "How long does it take to see results?", a: "Most businesses see measurable gains in 60–90 days and bigger ranking jumps by month 4–6. Local SEO keeps building the longer you stay with it. You get a monthly report from the start so you can see progress." },
  { q: "Do you guarantee rankings?", a: "No. Nobody honest can. Google's algorithm is private and changes all the time. What we promise is proven work, done consistently, every month." },
  { q: "What is the Google Map Pack?", a: "The Map Pack, also called the Local 3-Pack, is the map and three business listings at the top of Google for local searches. It gets the most clicks and calls. That's where you want to be." },
  { q: "How important are reviews for local SEO?", a: "Very. Reviews are one of the top 3 ranking factors for the Map Pack. More good reviews means higher rankings, more clicks and more customers. We help you get them and manage them." },
  { q: "Do you handle Google Business Profile for me?", a: "Yes. We manage your Google Business Profile: weekly posts, photos, Q&A, categories and review replies. You don't have to touch it." },
  { q: "Can I cancel my plan anytime?", a: "Yes. Plans are month-to-month with no cancellation fees. We'd rather earn your business every month than lock you in." },
  { q: "What is a citation and why do I need them?", a: "A citation is any online listing of your business name, address and phone number (NAP). Listings on Yelp, BBB, Yellow Pages and industry sites tell Google you're a real, established business. That helps your rankings." },
  { q: "Do you create local content for my business?", a: "Yes. We write local blog posts, service area pages and website copy aimed at the searches your customers make. It's built for your city, region and service area, in Ohio or anywhere else." },
  { q: "Do you only work with Ohio businesses?", a: "No. We're based in Ohio and work with businesses all over the state: Columbus, Cleveland, Cincinnati, Dayton, Toledo, Akron, Youngstown and the small towns in between. We also help businesses outside Ohio. The same approach works for any service-area business." },
  { q: "How much does local SEO cost?", a: "We charge a flat monthly fee. It depends on how competitive your market is and how big your service area is. You'll know what you pay and what work gets done each month. Contact us for a quote." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const LocalSeo = () => {
  usePageSEO({ title: "Local SEO and Google Ranking Columbus Ohio", description: "Local SEO to help your Columbus Ohio business rank higher on Google and get into the Map Pack. Get found by more customers in Central Ohio." });

  return (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Tablet showing Google Maps local business rankings in Columbus Ohio" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
      </div>
      <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />Local SEO services<Sparkles className="w-3.5 h-3.5" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
            Local SEO for Ohio businesses. Get found when customers search "near me."
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            We help businesses in Ohio and beyond climb local search, get into the Google Map Pack and turn that into more calls, visits and customers. One flat monthly fee.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: ShieldCheck, label: "No long-term contracts" },
              { icon: BadgeCheck, label: "Flat monthly fee" },
              { icon: ThumbsUp, label: "Nothing hidden" },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                <b.icon className="w-4 h-4 text-primary" />{b.label}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl group transition-all duration-300">
                Get a local SEO quote in 24 hours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 2: Why Local SEO Matters */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why local SEO matters for your business</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Most people search online when they need a local business. Someone in Columbus searches "HVAC repair near me." A homeowner in Cleveland looks up "best roofer near me." The businesses at the top of Google get most of the clicks, calls and customers. If you're not there, buyers can't see you.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            For a service business, local SEO is one of the best uses of a marketing dollar. Paid ads stop the day you stop paying. Local SEO keeps building. The longer you stay with it, the stronger your spot and the harder it is for competitors to catch you. It's how local businesses get found now.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We work with businesses all over Ohio: Columbus, Cleveland, Cincinnati, Dayton, Toledo, Akron, Canton, Youngstown and the small towns in between. Outside Ohio? We help businesses nationwide too. This works for any service-area business.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section 3: Services Grid */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
            <Search className="w-4 h-4" /> Our services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Flat-fee local SEO services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What it takes to win local search in your market, in Ohio or anywhere else. Managed for you every month.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seoServices.map((svc, i) => (
            <motion.div key={svc.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <svc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-black text-foreground mb-3 group-hover:text-primary transition-colors">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-primary font-bold hover:underline text-sm">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 4: Flat-Fee Approach */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Simple flat-fee pricing</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            One flat monthly fee, so you always know what you're paying. No hidden costs. No long-term contracts. We handle the work from setup to tracking. You watch your local visibility grow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { label: "No hidden costs", desc: "Your monthly fee covers it all. No surprise charges." },
              { label: "No long-term contracts", desc: "Month to month. Stay because you see results." },
              { label: "Monthly reports", desc: "See what we did and how your rankings moved." },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <span className="font-bold text-foreground mb-2">{item.label}</span>
                <span className="text-muted-foreground text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 5: How we help you win local search */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">How we help you win local search</h2>
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4 bg-card rounded-xl p-5 border shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-black text-sm">{i + 1}</span>
                </div>
                <p className="text-foreground font-medium pt-1.5">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 6: FAQ */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">
          Local SEO FAQ
        </motion.h2>
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

    {/* Bottom CTA */}
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,14%,12%)] via-primary to-[hsl(216,14%,12%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full hidden" />
      <div className="container relative text-center max-w-3xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
          Ready to rank higher and get more customers, in Ohio or anywhere else?
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group ">
              <Phone className="w-6 h-6" />
              Get a flat-fee local SEO quote in 24 hours
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
          {["Quotes within 24 hours", "Clear, upfront pricing", "Ohio owned and operated"].map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide">
              <Clock className="w-4 h-4 text-primary" />{item}
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

export default LocalSeo;
