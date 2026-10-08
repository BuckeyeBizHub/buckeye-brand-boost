"use client";
import { motion } from "framer-motion";
import { Link } from "@/lib/compat/router";
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
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageTitle";

const industryDentist = "/assets/industry-dentist.jpg";
const industryMedical = "/assets/industry-medical.jpg";
const dentalTeamGroup = "/assets/dental-team-group.jpg";
const dentalMarionEndoBuilding = "/assets/dental-marion-endo-building.jpg";
const dentalStaffScrubs = "/assets/dental-staff-scrubs.jpg";
const dentalReferralGifts = "/assets/dental-referral-gifts.jpg";
const dentalPrintedMaterials = "/assets/dental-printed-materials.jpg";
const dentalOfficeSignage = "/assets/dental-office-signage.jpg";
const dentalRebranding = "/assets/dental-rebranding.jpg";
const dentalTradeShow = "/assets/dental-trade-show.jpg";
const products = [
  {
    icon: Shirt,
    title: "Branded staff apparel",
    description:
      "Scrubs, polos, jackets and uniforms that keep your team looking sharp at one office or ten. Embroidered or printed in your practice colors, for everyone from the front desk to the operatory.",
    image: dentalStaffScrubs,
    imageAlt: "Dental practice team in matching branded navy scrubs with embroidered names and logo",
  },
  {
    icon: Gift,
    title: "Patient and referral thank-you gifts",
    description:
      "Gift packages built around Ohio favorites like Jeni's Ice Cream, Cheryl's Cookies, Velvet Ice Cream and Al's Popcorn. Use them to thank referring dentists, patients who finish treatment and your own team.",
    image: dentalReferralGifts,
    imageAlt: "Curated Jeni's Ice Cream referral thank-you gift package with branded insulated tote",
  },
  {
    icon: FileText,
    title: "Printed materials",
    description:
      "Business cards, appointment and recall cards, fridge magnets, letterhead, envelopes, brochures and patient education pieces. All on-brand and built for a busy front desk.",
    image: dentalPrintedMaterials,
    imageAlt: "Elegant dental practice business card with gold tooth logo and marble accent design",
  },
  {
    icon: Building2,
    title: "Office signs and branding",
    description:
      "Window decals, office hours signs, wall graphics, mailbox decals, lobby displays and directional signs. Patients should trust you before they reach the front desk.",
    image: dentalOfficeSignage,
    imageAlt: "Dental office storefront with full-color branded window decals showing logo, services, and contact info",
  },
  {
    icon: Sparkles,
    title: "Rebranding support",
    description:
      "Rebrand kits for growing practices, renamed offices and practices joining a group. Logo refresh, colors, and every printed and worn piece lined up so nothing looks out of place.",
    image: dentalRebranding,
    imageAlt: "Collection of modern dental clinic logo concepts in various colors and styles",
  },
  {
    icon: Users,
    title: "Trade show and community event displays",
    description:
      "Retractable banners, table throws, giveaways and signs for dental society events, school visits, health fairs and community outreach.",
    image: dentalTradeShow,
    imageAlt: "Large illuminated dental trade show booth with branded overhead truss signage and product displays",
  },
];

const audiences = [
  "General dental practices",
  "Endodontists, periodontists, orthodontists and other specialists",
  "Pediatric dental offices",
  "Oral surgeons",
  "Multi-location dental groups and DSO-backed practices",
  "Solo and small-group offices across Ohio",
];

const differences = [
  {
    icon: DollarSign,
    title: "Wholesale pricing",
    description:
      "No middleman markup. You pay our wholesale cost plus a flat management fee you can see. Same deal for every client.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    description:
      "Most printed items ship in 1–3 business days. Apparel and big sign jobs move fast too. A dental office can't wait weeks.",
  },
  {
    icon: UserCheck,
    title: "One person to call",
    description:
      "You get one contact who knows how a dental office runs. No call center. No portal. No guessing.",
  },
  {
    icon: Package,
    title: "Products that get used",
    description:
      "We recommend what has worked inside a real dental practice. No closet-fillers. No novelty junk that ends up in a drawer.",
  },
  {
    icon: MapPin,
    title: "Ohio based",
    description:
      "We live and work in Ohio. We know your patients, your community events and the local brands they already love.",
  },
];

const faqs = [
  {
    q: "Do you work with multi-location dental groups?",
    a: "Yes. We keep your branding consistent across every office and still let one office customize when it needs to. One contact, one set of brand standards, and orders shipped straight to each location.",
  },
  {
    q: "How long does it take to get orders?",
    a: "Most printed materials and apparel ship in 1–3 business days. Custom signs and larger orders usually take 5–7 business days. Got a hard deadline, like a new hire Monday or an open house this weekend? Tell us and we'll work back from your date.",
  },
  {
    q: "Can you help with referral thank-you gifts?",
    a: "Yes. We build gift packages around Ohio brands like Jeni's Ice Cream, Cheryl's Cookies, Velvet Ice Cream and Al's Popcorn. Referring doctors and patients remember them. We handle one-off thank-yous, holiday batches or a year-round program.",
  },
  {
    q: "Do you offer volume discounts for larger practices?",
    a: "Yes. Practices ordering 10+ staff uniforms or larger print runs get real discounts. We charge wholesale cost plus a management fee you can see, so the savings go straight to you. No hidden markups.",
  },
  {
    q: "What if we're not sure exactly what we need?",
    a: "That's where most practices start. We do a free, no-pressure consult. We look at what you have now, ask about your team, patients and goals, and recommend what fits your size and budget.",
  },
];

const Dental = () => {
  usePageSEO({
    title: "Branded Apparel, Gifts and Print for Ohio Dental Practices",
    description:
      "Branded apparel, patient gifts, signs and print for Ohio dental practices. We shop top vendors and know how a dental office runs. Free quotes within 24 hours.",
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={industryDentist}
            alt="Dental office reception area with staff in matching branded scrubs"
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
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30 backdrop-blur-sm"
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
            Make your practice look as good as the{" "}
            <span
              className="text-primary text-glow-red inline-block"
              style={{
                WebkitTextStroke: "1.5px hsl(0 0% 100%)",
                textShadow:
                  "0 0 2px hsl(0 0% 100% / 0.9), 0 2px 8px rgba(0,0,0,0.95), 0 0 30px hsl(0 85% 40% / 0.7), 0 0 60px hsl(0 85% 40% / 0.4)",
                paintOrder: "stroke fill",
              }}
            >
              care you provide
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground font-semibold leading-relaxed max-w-3xl mx-auto mb-10"
            style={{
              textShadow:
                "0 2px 6px rgba(0,0,0,0.95), 0 4px 18px rgba(0,0,0,0.85), 0 0 40px rgba(0,0,0,0.6)",
            }}
          >
            Staff apparel, referral gifts, signs and printed materials for Ohio dental offices. Sourced by someone who has spent years inside one.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl transition-all duration-300 group "
            >
              Get a free dental branding consult
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 1: Why Ohio dental practices choose us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
                <Heart className="w-4 h-4" /> Why dental practices trust Buckeye Biz Hub
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                You focus on patients.{" "}
                <span className="text-primary">We handle the rest.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Great clinical work is half the job. Patients and referring doctors also notice how your office looks and feels.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We source the uniforms, patient gifts, signs and printed materials. You stop chasing vendors and get back to patients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border-2 border-border "
            >
              <img
                src={dentalTeamGroup}
                alt="Dental practice team in coordinated navy and light-blue scrubs and dresses"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our story */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
                <Award className="w-4 h-4" /> Our story
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                15+ years inside a real{" "}
                <span className="text-primary">Ohio dental practice</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                My wife, <span className="font-bold text-foreground">Dr. Kerry Stein</span>, is an endodontist and owns <span className="font-bold text-foreground">Marion Endodontics</span> in Marion, Ohio. For more than 15 years I've helped her run it, handling procurement and branding for a busy specialty practice.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I've sourced scrubs and polos that hold up. I've built referral thank-you packages with Ohio favorites like <span className="font-semibold text-foreground">Jeni's Ice Cream, Cheryl's Cookies, Velvet Ice Cream and Al's Popcorn</span>. I've designed business cards, appointment cards, magnets, letterhead, window decals and office hours signs, and helped rebrand as the practice grew.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                That taught me what gets used and what sits in a drawer. It's a big reason I co-founded Buckeye Biz Hub: to be the partner Ohio dental practices can count on.
              </p>
              <p className="mt-6 text-sm font-bold text-primary ">
                David Stein, co-founder, Buckeye Biz Hub
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1 relative rounded-2xl overflow-hidden border-2 border-border bg-ohio-grey-light"
            >
              <img
                src={dentalMarionEndoBuilding}
                alt="Marion Endodontics building exterior in Marion, Ohio, sign for Dr. Kerry R. Stein, DDS, MS and Dr. Kristina J. Danislak, DDS"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(0,0%,4%/0.95)] to-transparent">
                <p className="text-primary-foreground font-bold text-lg">Dr. Kerry Stein, DDS</p>
                <p className="text-primary-foreground/70 text-sm">Endodontist and owner, Marion Endodontics</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Products and solutions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <Sparkles className="w-4 h-4" /> Products for dental offices
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-5">
              What your practice needs to{" "}
              <span className="text-primary">look and feel professional</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Products picked for dental offices. Practical, on-brand and ready for your team and patients every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Section 4: Who we serve */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <Users className="w-4 h-4" /> Who we serve
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
              Built for dental practices and{" "}
              <span className="text-primary">specialty offices across Ohio</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Solo practitioner or multi-location DSO group, we fit the work to your specialty, your team size and your patients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
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

      {/* Section 5: The Buckeye Biz Hub difference */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <Award className="w-4 h-4" /> The Buckeye Biz Hub difference
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-5">
              Why dental offices{" "}
              <span className="text-primary">work with us</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              No portal, no call center, no generic print shop. You get one person who knows how a dental practice works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-background border-t border-border">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-4">
              <HelpCircle className="w-4 h-4" /> Frequently asked questions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-5">
              Straight answers to the{" "}
              <span className="text-primary">questions dental offices ask most</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              No fine print. No pressure. The answers you'd get from a neighbor who does this for a living.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="bg-card border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-bold text-foreground hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            Have a question we didn't cover?{" "}
            <Link to="/contact" className="text-primary font-bold hover:underline">
              Ask David directly
            </Link>
            . He answers every message himself.
          </p>
        </div>
      </section>

      {/* Free Cost Comparison */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Free cost comparison. No commitment.
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us what you spend now on branded materials, uniforms, signs or print. We'll show you what we can do for less.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-2xl hover:bg-ohio-red-light transition-colors"
            >
              Get your free comparison
            </a>
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
            className="bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] border-2 border-primary/40 rounded-3xl p-10 md:p-14 text-center "
          >
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Ready for your practice to look as good as the{" "}
              <span className="text-primary">care you deliver?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Scrubs, signs, referral gifts, print or a full rebrand. Let's talk. Free consult, honest pricing, no pressure.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl transition-all duration-300 group "
              >
                Get a free consult and quote
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
