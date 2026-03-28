import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "What business printing services does Buckeye Biz Hub offer in Columbus, Ohio?",
    a: "We offer a full range of professional printing services including business cards, brochures, flyers, banners, yard signs, letterhead, envelopes, large format prints, trade show displays, and custom apparel printing. We deliver wholesale pricing with fast turnaround across Columbus, Cleveland, Cincinnati, Dayton, and all of Ohio.",
  },
  {
    q: "How fast is your turnaround time for printing and promotional products?",
    a: "Most standard print orders ship within 2–5 business days. Rush options are available for 24–48 hour turnaround on select products like business cards, flyers, and banners. Promotional products typically take 7–14 business days depending on the item and customization method. Vehicle wraps are scheduled within 1–2 weeks of design approval. We always provide a delivery estimate with your quote.",
  },
  {
    q: "Do you have minimum order requirements?",
    a: "Minimums vary by product. Business cards start at just 100 units, banners and signs have no minimum, and most promotional products start at 12–25 pieces. Custom apparel orders typically start at 12 pieces for screen printing and 1 piece for embroidery. We work with businesses of all sizes — from solo entrepreneurs to large corporations across Ohio.",
  },
  {
    q: "What are your pricing and wholesale rates?",
    a: "We offer competitive wholesale pricing on all products through our trusted supplier network and top promotional product partners. Volume discounts are available on bulk orders of business cards (500+), apparel (24+), and promotional items (50+). Every quote is custom — contact us for a free, no-obligation price estimate tailored to your project and quantity.",
  },
  {
    q: "Do you ship across Ohio or only serve Columbus?",
    a: "We serve all of Ohio! While our primary service area is Columbus and Central Ohio, we ship printed materials, promotional products, and custom merchandise to every city in the state — including Cleveland, Cincinnati, Dayton, Toledo, Akron, and Youngstown. Vehicle wrap installations are performed at our Columbus-area facility or at your location for fleet jobs.",
  },
  {
    q: "What types of promotional products can you customize?",
    a: "We offer over 5,000 customizable promotional products including custom t-shirts, embroidered polos, branded hoodies, hats, drinkware (tumblers, mugs, water bottles), tote bags, pens, notebooks, USB drives, lanyards, bar rail mats, coasters, pop-up tents, table throws, retractable banners, and much more. If you can put a logo on it, we can do it.",
  },
  {
    q: "How does vehicle wrapping work and how long does it last?",
    a: "Vehicle wrapping involves applying premium vinyl graphics over your vehicle's existing paint. We use 3M and Avery cast vinyl with professional installation by certified technicians. Full wraps typically last 5–7+ years with proper care, and they actually protect your vehicle's factory paint underneath. The process takes 3–5 days from design approval to completion for a single vehicle.",
  },
  {
    q: "Can you help with graphic design or do I need to provide my own artwork?",
    a: "Both! We offer professional graphic design services to create your business cards, banners, vehicle wraps, and promotional product layouts from scratch. If you already have artwork, we accept print-ready files in PDF, AI, EPS, and high-resolution PNG/JPG formats. Our design team ensures every file is optimized for the best print quality.",
  },
  {
    q: "Do you offer fleet branding for multiple vehicles?",
    a: "Absolutely. We specialize in fleet branding programs for Ohio businesses with 2 to 200+ vehicles. Fleet clients receive volume pricing, consistent branding across all vehicle types (cars, vans, trucks, trailers), project management, and ongoing maintenance and replacement tracking. On-site installation is available for Columbus-area fleets.",
  },
  {
    q: "What industries do you serve in Ohio?",
    a: "We work with businesses across every industry including HVAC contractors, auto dealerships, dental and medical offices, restaurants and bars, real estate agencies, lawn care and landscaping companies, construction firms, and more. Any Ohio business that needs professional printing, branded merchandise, or vehicle branding — we've got you covered.",
  },
  {
    q: "How do I get a quote for my project?",
    a: "Getting a quote is easy and free! Simply visit our Contact page and fill out the form with your project details, or call us directly. We respond to all quote requests within 24 hours. Include details like the product type, quantity, colors, and any design preferences to get the most accurate estimate. There's never any obligation.",
  },
  {
    q: "Do you offer reorder programs or ongoing partnerships?",
    a: "Yes! Many of our Ohio business clients set up reorder programs for items they need regularly — like business cards, uniforms, promotional giveaways, and yard signs. We store your artwork and specs on file so reorders are fast and hassle-free. We also offer dedicated account management for larger clients with ongoing branding needs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-36 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1000px] h-[1000px] rounded-full bg-primary/[0.15] blur-[200px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]">
            <Sparkles className="w-4 h-4" /> FAQ <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}>
            Frequently Asked{" "}
            <span className="text-primary text-glow-red">Questions</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-3xl mx-auto font-semibold tracking-wide leading-relaxed">
            Everything you need to know about our printing, promotional products, and vehicle branding services for Ohio businesses.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 lg:py-32 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />

        <div className="container relative max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="bg-card border-2 border-border hover:border-primary/30 rounded-2xl px-8 py-2 shadow-sm hover:shadow-[0_10px_40px_-10px_hsl(0_85%_40%/0.12)] transition-all duration-300 data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_15px_50px_-10px_hsl(0_85%_40%/0.18)]"
                >
                  <AccordionTrigger className="text-left font-display text-lg md:text-xl font-black text-card-foreground hover:text-primary transition-colors duration-300 py-5 [&[data-state=open]]:text-primary">
                    <span className="flex items-start gap-4">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[0.95rem] leading-[1.85] pl-9 pb-6">
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
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center gap-3 mb-10">
            {[Star, Star, Star].map((Icon, i) => (
              <Icon key={i} className="w-6 h-6 text-primary-foreground/70 fill-primary-foreground/50" />
            ))}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-10 leading-[0.88]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Still Have{" "}<br className="hidden md:block" />Questions?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            We're here to help. Get a free, no-obligation quote and let's talk about your project.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-2xl px-16 py-10 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-widest"
                style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <Phone className="w-7 h-7" />
                Get Your Free Quote Today
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2.5 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
