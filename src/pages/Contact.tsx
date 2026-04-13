import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, ShieldCheck, BadgeCheck, ThumbsUp, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pricingHero from "@/assets/pricing-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const heroBadges = [
  { icon: ShieldCheck, label: "No Hidden Fees" },
  { icon: BadgeCheck, label: "No Setup Fees on Most Orders" },
  { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
];

const Contact = () => {
  usePageSEO({ title: "Contact Us - Get Your Free 24-Hour Quote", description: "Contact Buckeye Biz Hub for a free 24-hour quote on business printing, promotional products, vehicle wraps, banners, and more. Serving Columbus and all of Ohio." });

  // Load Tally embed script
  useEffect(() => {
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.head.appendChild(script);
    } else {
      // If script already loaded, trigger Tally to re-scan for new embeds
      if ((window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero — kept as-is */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pricingHero}
            alt="Branded Ohio vehicles, apparel, signage and promotional products"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(0,0%,0%,0.75)] to-[hsl(0,0%,0%,0.92)]" />
        </div>

        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground mb-8 leading-[0.9]"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.3)" }}
            >
              Let's Bring Your Ohio Business to{" "}
              <span className="text-primary">Life</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
            >
              24-Hour Quotes • Full Pricing Transparency Up Front • All Fees Known at Quote • Nothing Ever Hidden
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {heroBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  <b.icon className="w-4 h-4 text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <a href="#quote-form">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300"
                >
                  Tell Us About Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tally Embedded Form */}
      <section id="quote-form" className="py-20 lg:py-28 bg-ohio-cream relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[170px]" />

        <div className="container relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              data-tally-src="https://tally.so/embed/QKYlz8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Buckeye Biz Hub Quote Request"
              className="w-full min-h-[600px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Prefer to Call or Email */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-8">
              Prefer to Call or Email Instead?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <a
                href="tel:6145613358"
                className="group flex items-center justify-center gap-4 bg-ohio-cream border-2 border-border hover:border-primary/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                  <p className="text-xl font-black text-foreground group-hover:text-primary transition-colors">614-561-3358</p>
                </div>
              </a>
              <a
                href="mailto:david@buckeyebizhub.com"
                className="group flex items-center justify-center gap-4 bg-ohio-cream border-2 border-border hover:border-primary/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                  <p className="text-lg font-black text-foreground group-hover:text-primary transition-colors">david@buckeyebizhub.com</p>
                </div>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-border shadow-lg">
              <iframe
                src="https://maps.google.com/maps?cid=5595316780144329459&output=embed"
                loading="lazy"
                width="100%"
                height="300"
                referrerPolicy="no-referrer-when-downgrade"
                title="Buckeye Biz Hub on Google Maps"
                allowFullScreen
                style={{ border: 0 }}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-primary-foreground/60 text-sm font-medium">
            {[
              "35+ Ohio Companies Helped",
              "$1.3 Million+ Saved",
              "100% Satisfaction Guaranteed",
              "Columbus, Ohio",
            ].map((item, idx) => (
              <span key={item} className="flex items-center gap-2">
                {idx > 0 && <span className="hidden sm:inline text-primary-foreground/20">•</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
