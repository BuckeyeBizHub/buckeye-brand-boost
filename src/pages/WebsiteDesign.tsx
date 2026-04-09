import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShieldCheck, BadgeCheck, ThumbsUp, Clock, CheckCircle, MessageSquareQuote, Monitor, RefreshCw, Smartphone, Target, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

import heroImg from "@/assets/website-design-hero.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const designServices = [
  { title: "Custom Website Design & Development", icon: Monitor, desc: "Fully custom websites designed from scratch to match your brand, tell your story, and convert visitors into paying customers." },
  { title: "Website Redesign & Refresh", icon: RefreshCw, desc: "Already have a website that looks outdated? We modernize your site with fresh design, faster speeds, and better lead generation." },
  { title: "Mobile-First Responsive Websites", icon: Smartphone, desc: "Every site we build looks and works perfectly on phones, tablets, and desktops — because over 60% of your visitors are on mobile." },
  { title: "Lead-Generating Landing Pages", icon: Target, desc: "High-converting single-page designs built to capture leads from ads, social media, or email campaigns with laser-focused messaging." },
  { title: "E-commerce Websites", icon: ShoppingCart, desc: "Online stores that make it easy for customers to browse, buy, and come back — with secure payments and inventory management." },
  { title: "SEO-Optimized Business Websites", icon: Search, desc: "Built from the ground up with local SEO best practices so your Columbus and Ohio customers find you on Google from day one." },
];

const inclusions = [
  "Modern, clean, professional design tailored to your brand",
  "Fast loading speeds for better user experience and SEO",
  "Fully mobile responsive design",
  "Clear calls-to-action and lead capture forms",
  "Google Analytics setup",
  "Basic on-page SEO optimization",
  "Easy-to-use content management system",
  "Training session and 30 days of post-launch support",
];

const faqItems = [
  { q: "How long does it take to build a new website?", a: "Most business websites take 3–6 weeks from kickoff to launch, depending on complexity. Simple landing pages can be completed in 1–2 weeks. We provide a detailed timeline with your quote and keep you updated throughout the process." },
  { q: "Do you redesign existing websites?", a: "Yes! We specialize in refreshing outdated websites with modern design, faster load times, mobile responsiveness, and improved lead generation. We can work with your existing content or create new copy and imagery." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website we build is fully responsive and tested across all devices — phones, tablets, laptops, and desktops. Mobile-first design is not optional; it's how we build every project." },
  { q: "Can you help with copywriting and images?", a: "Yes! We offer professional copywriting services and can source high-quality images for your site. Strong copy and visuals are critical for conversions, and we make sure your website tells your story effectively." },
  { q: "Do you offer ongoing website maintenance?", a: "Yes — we offer affordable monthly maintenance plans that include security updates, backups, content updates, and performance monitoring so your site stays fast, secure, and up-to-date." },
  { q: "Is SEO included?", a: "Basic on-page SEO is included with every website — title tags, meta descriptions, header structure, image optimization, and local schema markup. For ongoing local SEO services, we offer separate monthly plans." },
  { q: "Can I update the website myself?", a: "Yes! We build on easy-to-use platforms with a content management system (CMS) so you can update text, images, and blog posts without any technical skills. We also include a training session at launch." },
  { q: "Do you build e-commerce websites?", a: "Yes — we build online stores with product catalogs, shopping carts, secure checkout, and inventory management. Whether you're selling 10 products or 1,000, we create a seamless shopping experience." },
  { q: "What is your website design process?", a: "Our process: 1) Discovery call to understand your goals, 2) Strategy and sitemap planning, 3) Design mockups for your approval, 4) Development and content integration, 5) Testing across all devices, 6) Launch and training. You're involved and informed at every step." },
  { q: "Do you provide hosting?", a: "We can recommend reliable, affordable hosting solutions and handle the setup for you. We also offer managed hosting packages if you prefer us to handle everything — including security, backups, and updates." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design & Development Columbus Ohio",
  description: "Professional website design and development for Ohio businesses. Modern, mobile-friendly, SEO-optimized websites with 24-hour quotes.",
  url: "https://buckeye-brand-boost.lovable.app/website-design",
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

const WebsiteDesign = () => {
  usePageTitle("Website Design & Development Columbus Ohio", "Modern, mobile-friendly website design for Ohio businesses. Fast-loading, lead-generating websites that attract customers and build trust 24/7.");

  return (
  <div className="min-h-screen">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
            <Sparkles className="w-3.5 h-3.5" />Website Design & Development<Sparkles className="w-3.5 h-3.5" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
            Professional Website Design & Development for Ohio Businesses
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            Modern, fast-loading, mobile-friendly websites built to attract customers, generate leads, and represent your brand professionally 24/7.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: ShieldCheck, label: "No Hidden Fees" },
              { icon: BadgeCheck, label: "Mobile-First Design" },
              { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground">
                <b.icon className="w-4 h-4 text-primary" />{b.label}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                Get Your Website Design Quote in 24 Hours
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 text-center">Why Your Website is Your Most Important Sales Tool</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Your website is often the very first interaction a potential customer has with your business — and first impressions happen in less than 3 seconds. A modern, professional website instantly builds trust and credibility, while an outdated or slow site sends customers straight to your competitor. In today's market, your website isn't just a digital brochure — it's your 24/7 salesperson that never takes a day off.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Beyond first impressions, a well-designed website captures leads through strategic calls-to-action, contact forms, and click-to-call buttons. It works alongside your local SEO, Google Business Profile, and social media to create a complete online presence that drives real business. For Ohio service businesses, a great website is the foundation that every other marketing effort builds upon.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section 3: Services Grid */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
            <Monitor className="w-4 h-4" /> Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Our Website Design Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From custom builds to redesigns and e-commerce — we create websites that work as hard as you do.
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
                    Learn More <ArrowRight className="w-4 h-4" />
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-10 text-center">What You Get With Every Website Project</h2>
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
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-8 text-center">Design Tips from David</h2>
          <div className="bg-card rounded-2xl p-8 md:p-10 border-l-4 border-primary shadow-lg">
            <MessageSquareQuote className="w-8 h-8 text-primary mb-4" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 italic font-serif">
              "I've seen too many Ohio businesses spend thousands on a beautiful website that doesn't actually generate a single lead. A great website isn't about fancy animations or stock photos — it's about making it dead simple for a visitor to understand what you do, trust you, and take action. Every page needs a clear headline, a compelling reason to choose you, and an obvious next step — whether that's a phone call, a form, or a quote request. If your website isn't generating leads every week, it's not doing its job."
            </p>
            <p className="font-bold text-foreground">— David Stein, Your Buckeye Branding Concierge</p>
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
          Ready to get a professional website that actually works hard for your Ohio business?
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
              <Phone className="w-6 h-6" />
              Get Your Website Design Quote in 24 Hours
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

    <RelatedServices />
    <Footer />
  </div>
);

};

export default WebsiteDesign;
