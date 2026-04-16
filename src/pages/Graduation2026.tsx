import { motion } from "framer-motion";
import { ArrowRight, Phone, GraduationCap, Star, Clock, Shield, Heart, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { usePageSEO } from "@/hooks/usePageTitle";

import gradDecorSet from "@/assets/graduation/grad-decor-set.jpg";
import gradYardSign from "@/assets/graduation/grad-yard-sign.jpg";
import gradBanner2026 from "@/assets/graduation/grad-banner-2026.jpg";
import gradFrostedCup from "@/assets/graduation/grad-frosted-cup.jpg";
import gradPersonalizedCups from "@/assets/graduation/grad-personalized-cups.jpg";
import gradCupcakeToppers from "@/assets/graduation/grad-cupcake-toppers.jpg";
import gradCupsFrosted from "@/assets/graduation/grad-cups-frosted.jpg";
import gradCupsPurple from "@/assets/graduation/grad-cups-purple.jpg";
import gradCoasters from "@/assets/graduation/grad-coasters.jpg";
import gradBackdrop from "@/assets/graduation/grad-backdrop-magazine.jpg";

const pricingData = [
  { item: "Large Graduation Banner", details: '4ft × 6ft', regular: "$72", early: "$57.60" },
  { item: "Extra Large Banner", details: '4ft × 8ft', regular: "$95", early: "$76" },
  { item: "Personalized Yard Sign", details: '18" × 24"', regular: "$45", early: "$36" },
  { item: "Graduation Party Package", details: "Banner + 2 Yard Signs + Table Cover", regular: "$249", early: "$199" },
];

const galleryPhotos = [
  { src: gradDecorSet, alt: "Red graduation decoration set with banners, balloons, and table covers" },
  { src: gradBanner2026, alt: "Class of 2026 personalized graduation banner with photo" },
  { src: gradYardSign, alt: "Custom graduation yard sign with graduate photo" },
  { src: gradBackdrop, alt: "Magazine-style graduation backdrop with balloon arch" },
  { src: gradFrostedCup, alt: "Personalized Senior 2026 frosted party cups" },
  { src: gradPersonalizedCups, alt: "Custom congratulations graduation cups and koozies" },
  { src: gradCupsFrosted, alt: "Cheers to the Class frosted graduation cups" },
  { src: gradCupsPurple, alt: "Custom graduation party cups with names" },
  { src: gradCoasters, alt: "Personalized graduation photo coasters - Class of 2026" },
  { src: gradCupcakeToppers, alt: "Custom graduation cupcake toppers with graduate faces" },
];

const Graduation2026 = () => {
  usePageSEO({
    title: "2026 Graduation Banners & Party Printing – Columbus, Ohio",
    description:
      "Custom graduation banners, yard signs, party printing, and more for the Class of 2026. Proudly made in Columbus, Ohio. Save 20% when you order by May 1!",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "2026 Graduation Banners & Party Printing",
    description: "Custom graduation banners, yard signs, cups, cutouts and party printing for the Class of 2026.",
    brand: { "@type": "Brand", name: "Buckeye Biz Hub" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "36",
      highPrice: "199",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      offerCount: "4",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Buckeye Biz Hub",
      areaServed: { "@type": "State", name: "Ohio" },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="2026 Graduation Banners & Party Printing – Columbus, Ohio"
        description="Custom graduation banners, yard signs, party printing, and more for the Class of 2026. Proudly made in Columbus, Ohio. Save 20% when you order by May 1!"
        structuredData={[jsonLd]}
      />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy via-[hsl(0,0%,5%)] to-[hsl(45,60%,8%)]" />
        {/* Gold shimmer accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(45,80%,55%)/0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.08] rounded-full blur-[100px]" />
        {/* Confetti-like dots */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(45,80%,60%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.3em] uppercase mb-6 bg-[hsl(45,70%,50%)/0.15] px-6 py-2.5 rounded-full border border-[hsl(45,70%,50%)/0.3] text-[hsl(45,70%,55%)]">
            <GraduationCap className="w-4 h-4" />
            Class of 2026
            <GraduationCap className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[0.92]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
            2026 Graduation Banners
            <br />
            <span className="text-[hsl(45,70%,55%)]">&</span> Party Printing
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8 font-semibold">
            Make this graduation unforgettable with custom banners, signs, cups, cutouts, and more — proudly made in Columbus.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <Link to="/contact?service=graduation-2026">
              <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base sm:text-lg px-8 sm:px-12 py-7 sm:py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300">
                <GraduationCap className="w-5 h-5" />
                Get Your 2026 Graduation Package – Save 20% by May 1
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-sm text-[hsl(45,70%,55%)]/70 mt-4 font-semibold">
            ⏰ Early Bird Ends May 1, 2026 — Don't Miss Out!
          </motion.p>
        </div>
      </section>

      {/* ── Photo Gallery Grid ───────────────────────────── */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Graduation Banner <span className="text-[hsl(45,70%,50%)]">Gallery</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Every banner is custom-designed and printed right here in Columbus for the Class of 2026.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted border border-border hover:border-primary/40 transition-colors duration-300 shadow-md hover:shadow-xl"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Table ────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.3em] uppercase mb-4 bg-primary/10 px-5 py-2 rounded-full border border-primary/20 text-primary">
              <Sparkles className="w-3.5 h-3.5" /> Early Bird Pricing
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Featured 2026 Graduation Products <span className="text-[hsl(45,70%,50%)]">& Pricing</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-ohio-navy text-primary-foreground">
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Item</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Size / Details</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-right">Regular</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-right">
                      <span className="inline-flex items-center gap-1.5 bg-[hsl(45,70%,50%)/0.2] px-3 py-1 rounded-full text-[hsl(45,70%,55%)]">
                        🎓 2026 Early Bird
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, i) => (
                    <tr key={row.item} className={`border-b border-border ${i % 2 === 0 ? "bg-muted/30" : "bg-background"} hover:bg-primary/5 transition-colors`}>
                      <td className="px-6 py-5 font-bold text-foreground">{row.item}</td>
                      <td className="px-6 py-5 text-muted-foreground">{row.details}</td>
                      <td className="px-6 py-5 text-right text-muted-foreground line-through">{row.regular}</td>
                      <td className="px-6 py-5 text-right">
                        <span className="text-primary font-black text-lg">{row.early}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-4">* Early Bird pricing valid for orders placed by May 1, 2026. Custom designs may vary.</p>
        </div>
      </section>

      {/* ── Hot Trends ───────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Hot 2026 Graduation Trends <span className="text-primary">We Can Custom Print</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {trends.map((trend, i) => (
              <motion.div
                key={trend}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 bg-background rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-[hsl(45,70%,50%)] mt-0.5 shrink-0" />
                <span className="text-foreground font-semibold">{trend}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Families Choose Us ────────────────────────── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
              Why Families Choose <span className="text-primary">Buckeye Biz Hub</span> for Graduation
            </h2>
          </motion.div>

          <div className="space-y-4">
            {whyReasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-muted/40 rounded-xl p-6 border border-border"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-lg">{reason.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(45,80%,55%)/0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-foreground/[0.04] rounded-full blur-[100px]" />

        <div className="container relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <GraduationCap className="w-14 h-14 text-[hsl(45,80%,60%)] mx-auto mb-6" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Ready to celebrate the
            <br />
            <span className="text-[hsl(45,80%,60%)]">Class of 2026</span> in style?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Lock in your 20% early bird savings before May 1. Custom designs, premium materials, and Columbus-local service.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?service=graduation-2026">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-lg sm:text-xl px-10 py-8 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group uppercase tracking-widest">
                <GraduationCap className="w-6 h-6" />
                Reserve Your Graduation Package — Save 20%
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <a href="tel:+16145613358">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-lg px-8 py-8 rounded-2xl">
                <Phone className="w-5 h-5" />
                Call (614) 561-3358
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Graduation2026;
