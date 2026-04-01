import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, MessageSquareQuote, Search, MapPin, Star, FileText, BarChart3, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroImg from "@/assets/local-seo-hero.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const seoServices = [
  { title: "Google Business Profile Optimization & Management", icon: MapPin, desc: "We fully optimize and actively manage your Google Business Profile — photos, posts, categories, Q&A, and attributes — so you appear at the top of the Map Pack when customers search locally." },
  { title: "Local Citation Building & NAP Consistency", icon: FileText, desc: "We build and clean up your business listings across 50+ directories ensuring your Name, Address, and Phone number are perfectly consistent — a critical ranking factor for local search." },
  { title: "Review Management & Reputation Boosting", icon: Star, desc: "We implement review generation strategies and help you respond professionally to every review — building the social proof that Google rewards with higher rankings." },
  { title: "Local Content Creation & On-Page SEO", icon: Search, desc: "We create locally-focused content and optimize your website pages with the keywords your local customers actually search for — whether you're in Columbus, Cincinnati, Cleveland, Toledo, or anywhere in Ohio and beyond." },
  { title: "Local Rank Tracking & Competitive Heatmaps", icon: BarChart3, desc: "See exactly where you rank across every zip code in your service area with visual heatmaps and monthly reporting that shows real progress." },
  { title: "Schema Markup & Technical Local SEO", icon: Code, desc: "We implement LocalBusiness schema markup, optimize site speed, mobile usability, and technical SEO factors that help Google understand and rank your business locally." },
];

const processSteps = [
  "In-depth local audit of your current online presence",
  "Google Business Profile optimization with photos, posts, and categories",
  "Citation building across 50+ major directories",
  "Review generation and professional response management",
  "Local content strategy targeting your service area keywords",
  "Ongoing rank tracking, heatmaps, and monthly adjustments",
];

const faqItems = [
  { q: "What is Local SEO and why does it matter?", a: "Local SEO is the process of optimizing your online presence to attract more business from local searches on Google. When someone searches 'plumber near me' or 'best dentist in Columbus,' Local SEO determines which businesses appear in the top results and the Google Map Pack. For Ohio service businesses, it's the #1 way to get found by ready-to-buy customers." },
  { q: "How long does it take to see results?", a: "Most businesses start seeing measurable improvements within 60–90 days, with significant ranking gains by month 4–6. Local SEO is an ongoing process — the longer you invest, the stronger your position becomes. We provide monthly reports so you can see progress from day one." },
  { q: "Do you guarantee rankings?", a: "No ethical SEO provider can guarantee specific rankings because Google's algorithm is proprietary and constantly evolving. What we do guarantee is proven, best-practice strategies executed consistently — which have delivered strong results for every client we've worked with." },
  { q: "What is the Google Map Pack?", a: "The Google Map Pack (also called the Local 3-Pack) is the map and three business listings that appear at the top of Google search results for local queries. Appearing in the Map Pack is the most valuable position for local businesses because it gets the most clicks and calls." },
  { q: "How important are reviews for local SEO?", a: "Extremely important. Reviews are one of the top 3 ranking factors for the Google Map Pack. Businesses with more positive reviews rank higher, get more clicks, and convert more searchers into customers. We help you systematically generate and manage reviews." },
  { q: "Do you handle Google Business Profile for me?", a: "Yes! We fully manage your Google Business Profile including weekly posts, photo uploads, Q&A management, category optimization, and responding to reviews. You don't need to touch it — we handle everything." },
  { q: "Can I cancel my plan anytime?", a: "Yes — we believe in earning your business every month, not locking you into long contracts. Our plans are month-to-month with no cancellation fees. We're confident you'll stay because you'll see real results." },
  { q: "What is a citation and why do I need them?", a: "A citation is any online mention of your business name, address, and phone number (NAP). Citations on directories like Yelp, BBB, Yellow Pages, and industry-specific sites tell Google your business is legitimate and established — boosting your local rankings." },
  { q: "Do you create local content for my business?", a: "Yes! We create locally-focused blog posts, service area pages, and optimized website content targeting the specific keywords your Columbus and Central Ohio customers are searching for." },
  { q: "How much does local SEO cost?", a: "We offer simple flat-fee monthly plans that vary based on your market competitiveness and service area size. Every plan includes full transparency — you'll know exactly what you're paying for and what work is being done each month. Contact us for a custom quote." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services Columbus Ohio",
  description: "Local SEO services for Columbus and Central Ohio businesses. Google Map Pack optimization, citation building, review management, and flat-fee monthly plans.",
  url: "https://buckeye-brand-boost.lovable.app/local-seo",
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
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const LocalSeo = () => (
  <div className="min-h-screen">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Tablet showing Google Maps local business rankings in Columbus Ohio" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
      </div>
      <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />Local SEO Services<Sparkles className="w-3.5 h-3.5" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
            Local SEO Services in Columbus & Central Ohio – Get Found When Customers Search "Near Me"
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            We help Ohio businesses dominate local search, appear in the Google Map Pack, and drive more calls, visits, and customers with simple flat-fee monthly plans.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: ShieldCheck, label: "No Long-Term Contracts" },
              { icon: BadgeCheck, label: "Flat-Fee Monthly Plans" },
              { icon: ThumbsUp, label: "Full Transparency" },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                <b.icon className="w-4 h-4 text-primary" />{b.label}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                Get Your Local SEO Quote in 24 Hours
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why Local SEO Matters for Ohio Businesses</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Today, 97% of consumers search online to find local businesses, and 46% of all Google searches have local intent. When someone in Columbus searches "HVAC repair near me" or "best dentist in Dublin Ohio," the businesses that appear at the top of Google — especially in the Map Pack — get the vast majority of clicks, calls, and customers. If your business isn't showing up there, you're invisible to the people who are ready to buy right now.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Local SEO is the most cost-effective marketing investment any Ohio service business can make. Unlike paid ads that stop generating leads the moment you stop paying, strong local SEO builds a compounding asset — the longer you invest, the stronger your position becomes, and the harder it is for competitors to catch up. It's not optional anymore; it's the foundation of how local businesses get found and chosen.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section 3: Services Grid */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
            <Search className="w-4 h-4" /> Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Our Flat-Fee Local SEO Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to dominate local search in Columbus and Central Ohio — managed for you monthly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    Learn More <ArrowRight className="w-4 h-4" />
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Our Simple Flat-Fee Approach</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            We offer straightforward flat-fee monthly plans so you always know exactly what you're paying. No hidden costs, no long-term contracts, and full transparency at every step. Our team handles everything from optimization to tracking — you just watch your local visibility grow.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { label: "No Hidden Costs", desc: "Your monthly fee covers everything — no surprise charges." },
              { label: "No Long-Term Contracts", desc: "Month-to-month plans. Stay because you see results." },
              { label: "Full Monthly Reports", desc: "See exactly what was done and how your rankings improved." },
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

    {/* Section 5: How We Help You Dominate */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">How We Help You Dominate Local Search</h2>
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
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
      <div className="container relative text-center max-w-3xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
          Ready to dominate local search and get more customers from Columbus and Central Ohio?
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
              <Phone className="w-6 h-6" />
              Get Your Flat-Fee Local SEO Quote in 24 Hours
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
              <Clock className="w-4 h-4 text-primary" />{item}
            </span>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default LocalSeo;
