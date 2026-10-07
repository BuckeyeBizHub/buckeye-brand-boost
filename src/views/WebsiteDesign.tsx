"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, MessageSquareQuote, Monitor, RefreshCw, Smartphone, Target, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

const heroImg = "/assets/website-design-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const designServices = [
  { title: "Custom Website Design & Development", icon: Monitor, desc: "Built from scratch to match your brand, tell your story and turn visitors into paying customers." },
  { title: "Website Redesign & Refresh", icon: RefreshCw, desc: "Site looks dated? We give it a fresh design, faster load times and more leads." },
  { title: "Mobile-First Responsive Websites", icon: Smartphone, desc: "Every site we build works on phones, tablets and desktops. Over 60% of your visitors are on a phone." },
  { title: "Lead-Generating Landing Pages", icon: Target, desc: "One page, one message, one job: catch the leads from your ads, social posts and emails." },
  { title: "E-commerce Websites", icon: ShoppingCart, desc: "Online stores that make it easy to browse, buy and come back. Secure payments and inventory tracking included." },
  { title: "SEO-Optimized Business Websites", icon: Search, desc: "Built with local SEO from the start, so Columbus and Ohio customers find you on Google on day one." },
];

const inclusions = [
  "Clean, modern design built around your brand",
  "Fast load times, which help visitors and Google",
  "Works on every phone and screen size",
  "Clear calls to action and lead forms",
  "Google Analytics setup",
  "Basic on-page SEO optimization",
  "A content system you can update yourself",
  "Training session and 30 days of post-launch support",
];

const faqItems = [
  { q: "How long does it take to build a new website?", a: "Most business sites take 3–6 weeks from kickoff to launch. A simple landing page takes 1–2 weeks. You get a timeline with your quote and updates along the way." },
  { q: "Do you redesign existing websites?", a: "Yes. We update dated sites with a modern design, faster load times, mobile support and better lead capture. We can use your current content or write new copy and find new images." },
  { q: "Will my website be mobile-friendly?", a: "Yes. Every site we build is tested on phones, tablets, laptops and desktops. We design for the phone first on every project." },
  { q: "Can you help with copywriting and images?", a: "Yes. We write copy and source quality images. Good words and good pictures are what get people to call." },
  { q: "Do you offer ongoing website maintenance?", a: "Yes. Our monthly plans cover security updates, backups, content changes and performance checks, so your site stays fast, safe and current." },
  { q: "Is SEO included?", a: "Basic on-page SEO comes with every site: title tags, meta descriptions, header structure, image optimization and local schema markup. Ongoing local SEO is a separate monthly plan." },
  { q: "Can I update the website myself?", a: "Yes. We build on platforms with a content management system (CMS), so you can change text, images and blog posts without tech skills. We train you at launch." },
  { q: "Do you build e-commerce websites?", a: "Yes. Product catalogs, shopping carts, secure checkout and inventory tracking. Whether you sell 10 products or 1,000, we make buying easy." },
  { q: "What is your website design process?", a: "1) A call to learn your goals. 2) Strategy and sitemap. 3) Design mockups for your approval. 4) Build and load content. 5) Test on every device. 6) Launch and training. You know where things stand at every step." },
  { q: "Do you provide hosting?", a: "We can recommend reliable, affordable hosting and set it up for you. Or we can manage hosting for you, including security, backups and updates." },
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

const WebsiteDesign = () => {
  usePageSEO({ title: "Website Design & Development Columbus Ohio", description: "Website design for Columbus and Ohio businesses. Fast, mobile-friendly sites built to bring in leads and work for you around the clock." });

  return (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional website displayed on monitor and laptop in a Columbus Ohio office" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
      </div>
      <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />Website design and development<Sparkles className="w-3.5 h-3.5" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
            Websites that bring Ohio businesses more calls
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            Fast, modern, built for phones. A site that brings in customers and makes you look like a pro around the clock.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: ShieldCheck, label: "No hidden fees" },
              { icon: BadgeCheck, label: "Built for phones first" },
              { icon: ThumbsUp, label: "100% satisfaction guarantee" },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                <b.icon className="w-4 h-4 text-primary" />{b.label}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                Get your website quote in 24 hours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 2: Why Your Website Matters */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Your website is your best salesperson</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Your website is usually the first thing a new customer sees. They decide in under 3 seconds. A clean, modern site earns trust. A slow, dated one sends them to your competitor. Your site works every hour of every day. Make sure it's selling.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A good site also catches leads with clear calls to action, contact forms and click-to-call buttons. It works with your local SEO, Google Business Profile and social media. For Ohio service businesses, everything else in your marketing points back to it.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section 3: Services Grid */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
            <Monitor className="w-4 h-4" /> Our services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            What we build
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Custom builds, redesigns and online stores. Sites that work as hard as you do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designServices.map((svc, i) => (
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

    {/* Section 4: What You Get */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">What comes with every site</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {inclusions.map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3 bg-muted/50 rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 5: Design Tips from David */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-8 text-center">Design tips from David</h2>
          <div className="bg-card rounded-2xl p-8 md:p-10 border-l-4 border-primary shadow-lg">
            <MessageSquareQuote className="w-8 h-8 text-primary mb-4" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">
              "I've seen too many Ohio businesses spend thousands on a pretty website that never brings in a lead. Skip the fancy animations and stock photos. Make it dead simple for a visitor to see what you do, trust you and act. Every page needs a clear headline, a reason to pick you and an obvious next step: call, fill out a form or ask for a quote. If your site isn't bringing in leads every week, it isn't doing its job."
            </p>
            <p className="font-bold text-foreground">David Stein, Your Buckeye Branding Concierge</p>
            <p className="text-muted-foreground text-sm">Buckeye Biz Hub</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 6: FAQ */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">
          Website Design FAQ
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
          Ready for a website that brings in work?
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
              <Phone className="w-6 h-6" />
              Get your website quote in 24 hours
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
          {["24-hour quotes", "Every cost shown", "Ohio owned and operated"].map((item, i) => (
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

export default WebsiteDesign;
