import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageTitle";

type Industry = {
  emoji: string;
  title: string;
  description: string;
  segments: string;
  cta: string;
  href: string;
};

const industries: Industry[] = [
  {
    emoji: "🦷",
    title: "Dental Practices",
    description:
      "Branded scrubs and staff uniforms, patient referral gift packages using local Ohio brands, office signage and printed materials, rebranding kits, and more — from a team that's been running a dental practice from the inside for 15+ years.",
    segments:
      "General dentists · Endodontists · Orthodontists · Periodontists · Pediatric · Oral Surgery · Multi-location DSO groups",
    cta: "See Dental Solutions",
    href: "/dental",
  },
  {
    emoji: "🏠",
    title: "Roofing Contractors",
    description:
      "Fleet wraps and vehicle graphics, crew apparel (polos, t-shirts, hoodies, high-vis safety vests), logo design, door hangers, yard signs, carbonless contract forms, trade show booths, postcards, and full marketing campaigns — for the busy season and everything after.",
    segments:
      "Residential · Commercial · Industrial · Storm restoration · Multi-location operations",
    cta: "See Roofing Solutions",
    href: "/roofing",
  },
  {
    emoji: "🏗️",
    title: "Construction & General Contractors",
    description:
      "Branded workwear and crew polos, vehicle graphics and fleet wraps, hard hat wraps, jobsite banners, trade show displays, and safety gear — for the field teams and fleets that represent your company on every job.",
    segments:
      "General contractors · Commercial builders · Specialty contractors · Industrial",
    cta: "See Construction Solutions",
    href: "/construction",
  },
  {
    emoji: "🚛",
    title: "Fleet & Logistics",
    description:
      "Fleet wraps, magnetic signs, driver uniforms and safety vests, branded employee gear, and materials that keep a growing fleet looking consistent from truck to truck across multiple locations and markets.",
    segments: "3PLs · Trucking · Warehousing · Distribution · Fleet management",
    cta: "Get a Quote",
    href: "/contact",
  },
  {
    emoji: "🏡",
    title: "Real Estate",
    description:
      "Business cards, yard signs, branded notepads and folders, closing gift packages, postcards, direct mail campaigns, and signage — everything a real estate professional needs to look sharp and stay top of mind.",
    segments:
      "Individual agents · Teams · Brokerages · Property management companies",
    cta: "Get a Quote",
    href: "/contact",
  },
  {
    emoji: "🌿",
    title: "Lawn Care & Landscaping",
    description:
      "Fleet graphics and truck wraps, crew t-shirts and polos, door hangers, yard signs, and seasonal marketing materials — built for companies where every truck on the road is a rolling billboard.",
    segments:
      "Residential lawn care · Commercial landscaping · Snow removal · Tree service",
    cta: "Get a Quote",
    href: "/contact",
  },
  {
    emoji: "🏥",
    title: "Medical & Specialty Practices",
    description:
      "Branded scrubs and staff apparel, patient gift packages, office signage, printed materials, and rebranding kits — for practices where professionalism and patient experience are everything.",
    segments:
      "Physicians · Chiropractors · Physical therapists · Veterinary · Specialty practices",
    cta: "Get a Quote",
    href: "/contact",
  },
  {
    emoji: "🚗",
    title: "Auto Dealers",
    description:
      "Fleet graphics and lot signage, employee polos and branded apparel, showroom displays, trade show materials, and branded customer gifts — for dealers where every detail of the customer experience matters.",
    segments:
      "Franchise dealers · Independent dealers · Buy-here-pay-here · Auto groups",
    cta: "Get a Quote",
    href: "/contact",
  },
];

const Industries = () => {
  usePageSEO({
    title: "Industries We Serve | Buckeye Biz Hub",
    description:
      "Dedicated branding programs for Ohio dental practices, roofing contractors, construction GCs, fleet & logistics, real estate, lawn care, medical, and auto dealers. Free 24-hour quotes from a partner who actually knows your industry.",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Industries We Serve",
    description:
      "Industry-specific branding, fleet graphics, crew apparel, and printed materials for Ohio businesses across dental, roofing, construction, fleet, real estate, lawn care, medical, and auto dealer sectors.",
    url: "https://www.buckeyebizhub.com/industries",
    areaServed: { "@type": "State", name: "Ohio" },
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 bg-gradient-to-br from-ohio-grey-dark via-[hsl(0,40%,8%)] to-ohio-grey-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[160px]" />
        </div>
        <div className="container relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30"
          >
            Industries We Serve
          </motion.div>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.7)" }}
          >
            Industries We{" "}
            <span className="text-primary text-glow-red">Serve</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 font-semibold leading-relaxed max-w-3xl mx-auto mb-4">
            We don't do generic. Every industry we serve gets a dedicated approach — built around how that business actually operates, what their team needs in the field, and what their clients expect.
          </p>
          <p className="text-base md:text-lg text-primary-foreground/65 leading-relaxed max-w-3xl mx-auto">
            We've worked inside dental practices, roofing companies, construction operations, logistics fleets, and more. When you work with us, you're not starting from scratch — we already speak your language.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              >
                <Link to={ind.href} className="block h-full">
                  <div className="group relative h-full bg-card border-2 border-border rounded-2xl p-6 lg:p-7 flex flex-col transition-all duration-300 hover:border-primary/60 hover:shadow-[0_15px_45px_-15px_hsl(0_85%_40%/0.35)] hover:-translate-y-1">
                    <div className="text-4xl mb-3" aria-hidden="true">
                      {ind.emoji}
                    </div>
                    <h3 className="font-display text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {ind.description}
                    </p>
                    <p className="text-xs text-foreground/70 font-semibold leading-relaxed mb-5 pt-4 border-t border-border">
                      {ind.segments}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all">
                      {ind.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] border-2 border-primary/40 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-5">
              Don't see your{" "}
              <span className="text-primary">industry here?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We work with Ohio businesses across dozens of sectors. If you have a team in the field, a fleet on the road, or clients who walk through your door — we can help. Every quote is free and takes less than 24 hours.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
              >
                Get Your Free 24-Hour Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
