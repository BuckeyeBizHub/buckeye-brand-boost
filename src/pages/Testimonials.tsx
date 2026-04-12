import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { usePageSEO } from "@/hooks/usePageTitle";

const Testimonials = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub",
    description: "Client testimonials and reviews for Buckeye Biz Hub's printing, promotional products, and vehicle branding services in Columbus, Ohio.",
    url: "https://buckeye-brand-boost.lovable.app/testimonials",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

    usePageSEO({ title: "Client Reviews & Testimonials Columbus Ohio", description: "Read real reviews from 500+ Ohio businesses who trust Buckeye Biz Hub for printing, promotional products, vehicle wraps, and branding. 4.9/5 average rating." });

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
            <Sparkles className="w-4 h-4" /> Client Reviews <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}>
            Trusted by{" "}
            <span className="text-primary text-glow-red relative">
              500+ Ohio Businesses
              <motion.span className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} />
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-3xl mx-auto font-semibold tracking-wide leading-relaxed">
            Real reviews from real Ohio businesses we've helped grow with professional printing, branded merchandise, and vehicle wraps.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-14 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 text-primary fill-primary" style={{ filter: 'drop-shadow(0 0 8px hsl(0 80% 42% / 0.5))' }} />
            ))}
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-primary-foreground/35 font-bold text-sm uppercase tracking-[0.2em] mt-3">
            4.9/5 Average Rating
          </motion.p>
        </div>
      </section>

      <TestimonialsSection showAll />

      <Footer />
    </div>
  );
};

export default Testimonials;
