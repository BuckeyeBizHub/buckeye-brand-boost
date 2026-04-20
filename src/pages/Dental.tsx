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
  DollarSign,
  Clock,
  UserCheck,
  Package,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageTitle";

import industryDentist from "@/assets/industry-dentist.jpg";
import industryMedical from "@/assets/industry-medical.jpg";
import dentalTeamGroup from "@/assets/dental-team-group.jpg";
import dentalMarionEndoBuilding from "@/assets/dental-marion-endo-building.jpg";
import dentalStaffScrubs from "@/assets/dental-staff-scrubs.jpg";
import dentalReferralGifts from "@/assets/dental-referral-gifts.jpg";
import dentalPrintedMaterials from "@/assets/dental-printed-materials.jpg";
import dentalOfficeSignage from "@/assets/dental-office-signage.jpg";
import dentalRebranding from "@/assets/dental-rebranding.jpg";
import dentalTradeShow from "@/assets/dental-trade-show.jpg";

const products = [
  {
    icon: Shirt,
    title: "Branded Staff Apparel",
    description:
      "High-quality scrubs, polos, jackets, and uniforms that maintain a consistent, professional look across single or multi-location offices. Embroidered or printed in your practice colors with options for every team member from the front desk to the operatory.",
    image: dentalStaffScrubs,
    imageAlt: "Dental practice team in matching branded navy scrubs with embroidered names and logo",
  },
  {
    icon: Gift,
    title: "Patient & Referral Thank-You Gifts",
    description:
      "Curated gift packages featuring premium local Ohio brands — Jeni's Ice Cream, Cheryl's Cookies, Velvet Ice Cream, Al's Popcorn, and more — that create memorable experiences for referring dentists, treatment-completion patients, and team appreciation.",
    image: dentalReferralGifts,
    imageAlt: "Curated Jeni's Ice Cream referral thank-you gift package with branded insulated tote",
  },
  {
    icon: FileText,
    title: "Professional Printed Materials",
    description:
      "Business cards, appointment and recall cards, refrigerator magnets, letterhead, envelopes, brochures, and patient education materials — all on-brand, professionally designed, and built for the daily flow of a busy dental office.",
    image: dentalPrintedMaterials,
    imageAlt: "Elegant dental practice business card with gold tooth logo and marble accent design",
  },
  {
    icon: Building2,
    title: "Office Signage & Branding",
    description:
      "Window decals, office hours signs, wall graphics, mailbox decals, lobby displays, and directional signage that build trust and recognition the moment a patient walks through your door.",
    image: dentalOfficeSignage,
    imageAlt: "Dental office storefront with full-color branded window decals showing logo, services, and contact info",
  },
  {
    icon: Sparkles,
    title: "Rebranding Support",
    description:
      "Complete rebrand kits for growing practices, newly named offices, or practices joining a group. Logo refresh, color palette, and every printed and worn touchpoint coordinated so nothing feels out of place.",
    image: dentalRebranding,
    imageAlt: "Collection of modern dental clinic logo concepts in various colors and styles",
  },
  {
    icon: Users,
    title: "Trade Show & Community Event Displays",
    description:
      "Professional retractable banners, table throws, branded giveaways, and signage for dental society events, school visits, health fairs, and community outreach where your practice represents itself in person.",
    image: dentalTradeShow,
    imageAlt: "Large illuminated dental trade show booth with branded overhead truss signage and product displays",
  },
];

const audiences = [
  "General dental practices",
  "Endodontists, periodontists, orthodontists & other specialists",
  "Pediatric dental offices",
  "Oral surgeons",
  "Multi-location dental groups & DSO-backed practices",
  "Solo practitioners & small-group offices across Ohio",
];

const differences = [
  {
    icon: DollarSign,
    title: "True Wholesale Pricing",
    description:
      "No middleman markup. You pay our true wholesale cost plus a transparent flat management fee — the same model we use for every client.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most printed items ship in 1–3 business days. Apparel and large signage projects move quickly because we know dental offices can't wait weeks.",
  },
  {
    icon: UserCheck,
    title: "Personal Concierge Service",
    description:
      "One point of contact who actually understands how a dental office runs — not a call center, not a portal, not a guessing game.",
  },
  {
    icon: Package,
    title: "Practical Products That Get Used",
    description:
      "Everything we recommend has been tested inside a real working dental practice. No closet-fillers, no novelty items that end up in a drawer.",
  },
  {
    icon: MapPin,
    title: "Local Ohio Focus",
    description:
      "We live and work in Ohio. We understand your patient base, your community events, and the local brands your patients already love.",
  },
];

const Dental = () => {
  usePageSEO({
    title: "Branded Solutions for Ohio Dental Practices & Specialty Offices | Buckeye Biz Hub",
    description:
      "Professional branding and procurement partner for Ohio dental practices — staff scrubs, patient referral gifts, signage, printed materials, and full rebranding support. Backed by 15+ years inside a real Ohio endodontic practice.",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Dental Practice Branding & Procurement",
    description:
      "Branded staff apparel, patient and referral thank-you gifts, signage, printed materials, and rebranding support for Ohio dental practices including endodontists, periodontists, orthodontists, pediatric dentists, oral surgeons, and DSO-backed groups.",
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
            alt="Modern, welcoming dental office reception area with friendly staff in matching branded scrubs"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Multi-layer overlay for maximum text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%/0.85)] via-[hsl(0,0%,4%/0.88)] to-[hsl(0,0%,4%/0.97)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_0%_4%/0.35)_0%,_hsl(0_0%_4%/0.75)_70%,_hsl(0_0%_4%/0.92)_100%)]" />
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
            style={{
              textShadow:
                "0 2px 4px rgba(0,0,0,0.98), 0 4px 16px rgba(0,0,0,0.95), 0 8px 40px rgba(0,0,0,0.85), 0 0 80px rgba(0,0,0,0.7)",
            }}
          >
            Professional Branding & Procurement Partner for{" "}
            <span
              className="text-primary text-glow-red inline-block"
              style={{
                WebkitTextStroke: "1.5px hsl(0 0% 100%)",
                textShadow:
                  "0 0 2px hsl(0 0% 100% / 0.9), 0 2px 8px rgba(0,0,0,0.95), 0 0 30px hsl(0 85% 40% / 0.7), 0 0 60px hsl(0 85% 40% / 0.4)",
                paintOrder: "stroke fill",
              }}
            >
              Ohio Dental Practices
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground font-semibold leading-relaxed max-w-3xl mx-auto mb-10"
            style={{
              textShadow:
                "0 2px 6px rgba(0,0,0,0.95), 0 4px 18px rgba(0,0,0,0.85), 0 0 40px rgba(0,0,0,0.6)",
            }}
          >
            We help dental offices look as polished and consistent as the exceptional care you provide — from staff scrubs and patient referral gifts to signage, printed materials, and full rebranding support.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
            >
              Get Your Free Dental Branding Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 1 — Why Ohio Dental Practices Choose Us */}
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
                <Heart className="w-4 h-4" /> Why Ohio Dental Practices Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                You Focus on Patients.{" "}
                <span className="text-primary">We Handle the Rest.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Running a successful dental practice means balancing outstanding patient care with the many behind-the-scenes details that keep everything running smoothly.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Staff appearance, patient experience, referral relationships, and office professionalism all matter — and they all add up to how patients feel about your practice.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We remove the frustration of sourcing and coordinating these items so you can focus on what you do best: caring for patients. One trusted point of contact for scrubs, signage, gifts, print, and everything in between.
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
                src={dentalTeamGroup}
                alt="Friendly dental practice team in coordinated navy and light-blue scrubs and dresses"
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
                My wife, <span className="font-bold text-foreground">Dr. Kerry Stein</span>, is a practicing endodontist and the owner of <span className="font-bold text-foreground">Marion Endodontics</span> in Marion, Ohio. For more than 15 years, I've been right beside her handling all the procurement and branding needs of a real working dental practice.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I've sourced high-quality staff scrubs and polos, created thoughtful referral thank-you gift packages using local Ohio favorites — Jeni's Ice Cream, Cheryl's Cookies, Velvet Ice Cream, Al's Popcorn — and designed business cards, appointment cards, magnets, letterhead, envelopes, window decals, office hours signs, mailbox graphics, and helped with rebranding projects as the practice has grown.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                That daily, hands-on experience inside an actual dental office taught me what truly works — and what ends up sitting unused in a cabinet. It's why I founded Buckeye Biz Hub: to be the trusted, knowledgeable partner that Ohio dental practices can count on.
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
              className="lg:order-1 relative rounded-2xl overflow-hidden border-2 border-border shadow-[0_20px_60px_hsl(0_80%_42%/0.15)] bg-ohio-grey-light"
            >
              <img
                src={dentalMarionEndoBuilding}
                alt="Marion Endodontics building exterior in Marion, Ohio — Dr. Kerry R. Stein, DDS, MS and Dr. Kristina J. Danislak, DDS"
                className="w-full h-auto object-contain"
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
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-4 h-4" /> Products & Solutions for Dental Offices
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-5">
              Everything Your Practice Needs to{" "}
              <span className="text-primary">Look and Feel Professional</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We offer a complete range of products specifically chosen for dental environments — practical, on-brand, and ready to support your team and your patients every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-card border-2 border-border hover:border-primary/40 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {p.image && (
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-black text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
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
              Trusted by Dental Practices &{" "}
              <span className="text-primary">Specialty Offices Across Ohio</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From solo practitioners to multi-location DSO-backed groups, we tailor every solution to your specialty, your team size, and the patients you serve.
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

      {/* Section 5 — The Buckeye Biz Hub Difference */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Award className="w-4 h-4" /> The Buckeye Biz Hub Difference
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-5">
              Why Dental Offices Stay With Us{" "}
              <span className="text-primary">Year After Year</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We're not a portal, a call center, or a generic print shop. We're a personal partner built around how dental practices actually work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-card border-2 border-border hover:border-primary/40 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-ohio-grey-light">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] border-2 border-primary/40 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
          >
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Ready to make your dental practice look as professional and welcoming as the{" "}
              <span className="text-primary">care you deliver every day?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's talk about your practice — scrubs, signage, referral gifts, printed materials, or a full rebrand. Free consultation, honest pricing, no pressure.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
              >
                Start Your Free Consultation & Quote
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
