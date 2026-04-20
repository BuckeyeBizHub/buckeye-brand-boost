import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Heart,
  Award,
  Gift,
  Shirt,
  FileText,
  Building2,
  Users,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageTitle";

import industryDentist from "@/assets/industry-dentist.jpg";
import industryMedical from "@/assets/industry-medical.jpg";

const products = [
  {
    icon: Shirt,
    title: "Branded Staff Scrubs, Polos & Uniforms",
    description:
      "Consistent, professional appearance across single or multi-location offices — embroidered scrubs, polos, lab coats, and outerwear in your practice colors.",
  },
  {
    icon: Gift,
    title: "Patient Referral Thank-You Gift Packages",
    description:
      "Premium local Ohio products curated into memorable referral gifts — Jeni's Ice Cream, Cheryl's Cookies, Velvet Ice Cream, Al's Popcorn, and more.",
  },
  {
    icon: FileText,
    title: "Professional Printed Materials",
    description:
      "Business cards, appointment & recall cards, magnets, letterhead, envelopes, and brochures — all on-brand and built for your daily workflow.",
  },
  {
    icon: Building2,
    title: "Office Signage & Branding",
    description:
      "Window decals, office hours signs, mailbox graphics, wall art, and lobby displays that build trust the moment patients walk in.",
  },
  {
    icon: Sparkles,
    title: "Rebranding Support",
    description:
      "Full rebrand kits for growing or newly named practices — from logo refresh through every printed and worn touchpoint.",
  },
  {
    icon: Users,
    title: "Trade Show & Community Event Displays",
    description:
      "Retractable banners, table throws, branded giveaways, and signage for school visits, health fairs, and community events.",
  },
];

const audiences = [
  "General Dental Practices",
  "Endodontists",
  "Periodontists",
  "Orthodontists",
  "Pediatric Dentists",
  "Oral Surgeons",
  "Multi-Location DSO-Backed Groups",
];

const Dental = () => {
  usePageSEO({
    title: "Branded Solutions for Ohio Dental Practices | Buckeye Biz Hub",
    description:
      "Professional branding and procurement for Ohio dental practices — scrubs, patient referral gifts, signage, and printed materials. Backed by 15+ years inside a real Ohio endodontic practice.",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Dental Practice Branding",
    description:
      "Branded scrubs, patient referral gift packages, signage, and printed materials for Ohio dental practices including endodontists, periodontists, orthodontists, pediatric dentists, oral surgeons, and DSOs.",
    url: "https://www.buckeyebizhub.com/dental",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={industryDentist}
            alt="Modern dental office interior with smiling staff in matching branded scrubs"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%/0.7)] via-[hsl(0,0%,4%/0.8)] to-[hsl(0,0%,4%/0.95)]" />
        </div>
        <div className="container relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30 backdrop-blur-sm"
          >
            <Stethoscope className="w-4 h-4" /> Ohio Dental Practices
          </motion.div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
          >
            Professional Branding & Procurement for{" "}
            <span className="text-primary text-glow-red">Ohio Dental Practices</span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/85 font-medium leading-relaxed max-w-3xl mx-auto mb-10"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            From staff scrubs and patient referral gifts to signage and printed materials — we help your office look as polished as the care you provide.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
            >
              Get Your Free Dental Branding Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 1 — Why Dental Offices Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
                <Heart className="w-4 h-4" /> Why Dental Offices Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                You Focus on Patients.{" "}
                <span className="text-primary">We Handle the Rest.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Running a busy dental practice means juggling patient care, staff coordination, referrals, and maintaining a professional image at every touchpoint.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We take the stress out of sourcing so you can focus on what matters most — your patients. One trusted point of contact for scrubs, signage, gifts, print, and everything in between.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border-2 border-border shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
            >
              <img
                src={industryMedical}
                alt="Neatly organized dental reception area with visible branded materials"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Our Story */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
                <Award className="w-4 h-4" /> Our Story
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                15+ Years Inside a Real{" "}
                <span className="text-primary">Ohio Dental Practice</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                My wife, <span className="font-bold text-foreground">Dr. Kerry Stein</span>, is a practicing endodontist and owner of <span className="font-bold text-foreground">Marion Endodontics</span> in Marion, Ohio. For over 15 years I've been by her side handling procurement and branding: sourcing quality scrubs, creating thoughtful referral thank-you packages with local Ohio brands (Jeni's Ice Cream, Cheryl's Cookies, Velvet Ice Cream, Al's Popcorn), designing business cards, appointment cards, magnets, letterhead, window decals, office hours signs, and more.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                That real hands-on experience inside an actual dental practice is why Buckeye Biz Hub exists. We don't guess at what works — we've lived it, refined it, and now we bring it to dental practices across Ohio.
              </p>
              <p className="mt-6 text-sm font-bold text-primary uppercase tracking-wider">
                — David Stein, Your Buckeye Branding Concierge
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1 relative rounded-2xl overflow-hidden border-2 border-border shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
            >
              <img
                src={industryDentist}
                alt="Dr. Kerry Stein, practicing endodontist and owner of Marion Endodontics"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(0,0%,4%/0.95)] to-transparent">
                <p className="text-primary-foreground font-bold text-lg">Dr. Kerry Stein, DDS</p>
                <p className="text-primary-foreground/70 text-sm">Endodontist & Owner, Marion Endodontics</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Products & Solutions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-4 h-4" /> Products & Solutions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight">
              Everything Your Practice Needs to{" "}
              <span className="text-primary">Look and Feel Professional</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-card border-2 border-border hover:border-primary/40 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Who We Serve */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Users className="w-4 h-4" /> Who We Serve
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
              Trusted by Dental Specialists{" "}
              <span className="text-primary">Across Ohio</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From solo practitioners to multi-location DSO-backed groups, we tailor every solution to your specialty and the patients you serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {audiences.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] border-2 border-primary/40 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
          >
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Ready to make your dental practice look as professional as the{" "}
              <span className="text-primary">care you deliver?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's talk about your practice — scrubs, signage, referral gifts, printed materials, or a full rebrand. Free consultation, honest pricing, no pressure.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
              >
                Start Your Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-6">
              Or browse{" "}
              <Link to="/industries" className="text-primary font-bold hover:underline">
                all industries we serve
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dental;
