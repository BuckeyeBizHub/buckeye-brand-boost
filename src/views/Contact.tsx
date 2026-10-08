"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, ShieldCheck, BadgeCheck, ThumbsUp, Clock, Star, CheckCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const pricingHero = "/assets/pricing-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const heroBadges = [
  { icon: ShieldCheck, label: "No Hidden Fees" },
  { icon: BadgeCheck, label: "No Setup Fees on Most Orders" },
  { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
];

const Contact = () => {
  usePageSEO({ title: "Contact", description: "Contact Buckeye Biz Hub for a custom quote within 24 hours on printing, vehicle wraps, banners, decals and branding." });

  const [submitted, setSubmitted] = useState(false);

  // Load Tally embed script
  useEffect(() => {
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.head.appendChild(script);
    } else {
      if ((window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }
    }
  }, []);

  // Listen for Tally form submission via postMessage
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      if (event.data.includes("Tally.FormSubmitted") || event.data.includes("tally-form-submitted")) {
        setSubmitted(true);
        document.getElementById("quote-success")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero: short. The form is the point of this page. */}
      <section className="border-b border-seam">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
          <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold text-stock">
            Get a quote.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stock/80 sm:text-xl">
            Tell me what you need and I&apos;ll have a price back to you within 24 hours. Every fee up front. Nothing
            hidden.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-ohio-red-light"
            >
              Fill out the form
            </a>
            <a
              href="tel:+16145613358"
              className="inline-flex items-center justify-center rounded-md border border-seam px-7 py-4 text-base font-semibold text-stock transition-colors hover:border-fog"
            >
              Or call (614) 561-3358
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 lg:py-28 bg-ohio-cream relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] bg-primary/[0.04] rounded-full hidden" />

        <div className="container relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start">
            {/* Left sidebar: contact info & guarantees */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Phone prominent */}
              <a
                href="tel:+16145613358"
                className="group flex items-center gap-4 bg-card border-2 border-primary/20 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground mb-0.5">Call David Directly</p>
                  <p className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">(614) 561-3358</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:david@buckeyebizhub.com"
                className="group flex items-center gap-4 bg-card border-2 border-border hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground mb-0.5">Email Us</p>
                  <p className="text-base font-black text-foreground group-hover:text-primary transition-colors">david@buckeyebizhub.com</p>
                </div>
              </a>

              {/* 24-hour guarantee */}
              <div className="bg-primary/[0.08] border border-primary/20 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <h3 className="font-display text-lg font-black text-foreground">We Respond Within 24 Hours</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  David answers every quote request himself, usually the same business day. No bots. No runaround.
                </p>
              </div>

              {/* Trust points */}
              <div className="space-y-3 pt-2">
                {[
                  { icon: CheckCircle, text: "Free quotes, no obligation" },
                  { icon: ShieldCheck, text: "Every fee up front" },
                  { icon: Star, text: "4,300+ vetted suppliers for the best value" },
                  { icon: BadgeCheck, text: "Ohio owned & operated" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Tally form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="paper rounded-lg p-6 sm:p-8 md:p-10 overflow-hidden"
            >
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-2">Tell us about your project</h2>
              <p className="text-muted-foreground mb-8">Fill out the form and you'll have a custom quote within 24 hours.</p>

              {submitted && (
                <div
                  id="quote-success"
                  role="status"
                  aria-live="polite"
                  className="mb-6 flex items-start gap-3 bg-primary/10 border-2 border-primary/40 rounded-2xl p-5"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-primary font-bold text-base leading-relaxed">
                    Thanks. We got your quote request. You'll hear from us within 24 hours.
                  </p>
                </div>
              )}

              <div className="w-full max-w-full overflow-x-hidden">
                <iframe
                  data-tally-src="https://tally.so/embed/QKYlz8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="500"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  title="Buckeye Biz Hub Quote Request"
                  className="w-full max-w-full block min-h-[600px]"
                />
              </div>

              <p className="mt-6 pt-6 border-t border-border text-center text-sm sm:text-base font-semibold text-muted-foreground">
                Prefer to call?{" "}
                <a
                  href="tel:+16145613358"
                  className="text-primary font-black hover:underline whitespace-nowrap"
                >
                  Reach us at (614) 561-3358
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="font-display text-2xl md:text-3xl font-black text-foreground">
              Based in Columbus, Ohio
            </h3>
            <p className="mt-3 text-muted-foreground">
              No walk-in showroom. David meets you on site, in person or by phone.
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto">
            {/* Contact info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border-2 border-border rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col"
            >
              <h4 className="font-display text-xl md:text-2xl font-black text-foreground mb-6">
                Buckeye Biz Hub
              </h4>

              <ul className="space-y-5 flex-1">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-0.5">Phone</p>
                    <a
                      href="tel:+16145613358"
                      className="text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      (614) 561-3358
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-0.5">Email</p>
                    <a
                      href="mailto:david@buckeyebizhub.com"
                      className="text-base font-bold text-foreground hover:text-primary transition-colors break-all"
                    >
                      david@buckeyebizhub.com
                    </a>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-primary-foreground/60 text-sm font-medium">
            {[
              "Free quotes within 24 hours",
              "4,300+ vetted suppliers",
              "100% Satisfaction Guaranteed",
              "5-star rating on Google",
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
