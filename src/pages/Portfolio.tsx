import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star, TrendingUp, Eye, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";
import fleetWrapHvac from "@/assets/fleet-wrap-hvac.jpg";
import premiumBusinessCards from "@/assets/premium-business-cards.jpg";
import {
  PHOTO_VEHICLE_1, PHOTO_VEHICLE_5,
  PHOTO_PRINT_1, PHOTO_PRINT_2,
  PHOTO_APPAREL_1, PHOTO_APPAREL_2,
  PHOTO_SIGNAGE_1, PHOTO_SIGNAGE_3,
} from "@/lib/photos";

const categories = ["All", "Business Printing", "Promotional Products", "Vehicle Wraps", "Door Hangers", "Yard Signs & Signage", "Banners & Large Format", "Branded Apparel"] as const;
type Category = (typeof categories)[number];

const projects = [
  {
    image: PHOTO_SIGNAGE_1,
    title: "Custom Trade Show Kit for Ohio Roofing Company",
    category: "Promotional Products" as Category,
    description: "Branded pop-up banners, table covers, and 500 premium giveaways that helped them stand out at the 2025 Columbus Home Show.",
    results: ["Complete trade show presence", "500 branded giveaways produced", "Memorable booth that drew consistent traffic"],
    tags: ["Trade Show", "Giveaways", "Columbus"],
  },
  {
    image: fleetWrapHvac,
    title: "Full Fleet Wraps for Central Ohio HVAC Company",
    category: "Vehicle Wraps" as Category,
    description: "Professional full-color wraps on 8 vans that turned their fleet into rolling billboards.",
    results: ["8 vehicles fully wrapped", "70K+ daily impressions per van", "35% increase in inbound calls"],
    tags: ["Fleet Wraps", "HVAC", "Central Ohio"],
  },
  {
    image: PHOTO_PRINT_1,
    title: "Door Hanger Campaign for Local Pizza Chain",
    category: "Door Hangers" as Category,
    description: "5,000 custom 4×11\" door hangers with tear-off coupons that drove measurable weekend traffic.",
    results: ["5,000 door hangers printed & delivered", "Tear-off coupon redemption tracked", "Measurable weekend traffic boost"],
    tags: ["Door Hangers", "Restaurant", "Columbus"],
  },
  {
    image: PHOTO_SIGNAGE_3,
    title: "Yard Signs for Real Estate Agent Launch",
    category: "Yard Signs & Signage" as Category,
    description: "200 double-sided corrugated signs that helped sell 14 homes in the first month.",
    results: ["200 double-sided signs produced", "14 homes sold in first month", "Neighborhood brand recognition"],
    tags: ["Yard Signs", "Real Estate", "Columbus"],
  },
  {
    image: premiumBusinessCards,
    title: "Business Card & Brochure Refresh for Powell Law Firm",
    category: "Business Printing" as Category,
    description: "Premium velvet soft-touch cards and tri-fold brochures that elevated their professional image.",
    results: ["Soft-touch velvet finish cards", "Tri-fold brochures on 100lb gloss", "Professional image elevated"],
    tags: ["Business Cards", "Brochures", "Powell"],
  },
  {
    image: PHOTO_PRINT_2,
    title: "Large Format Banner Package for Lewis Center Festival",
    category: "Banners & Large Format" as Category,
    description: "Six 4×8 vinyl banners and two retractable displays for a weekend festival that drew over 3,000 attendees.",
    results: ["6 large vinyl banners produced", "2 retractable displays", "3,000+ event attendees reached"],
    tags: ["Banners", "Events", "Lewis Center"],
  },
  {
    image: PHOTO_APPAREL_1,
    title: "Custom Polos & Hats for Westerville Landscaping Crew",
    category: "Branded Apparel" as Category,
    description: "Embroidered polos, hats, and hi-vis vests for a 15-person landscaping crew — reinforcing professionalism on every job site.",
    results: ["15+ staff outfitted", "Embroidered polos & hats", "Job site professionalism elevated"],
    tags: ["Apparel", "Embroidery", "Westerville"],
  },
  {
    image: PHOTO_APPAREL_2,
    title: "Branded Promo Kit for Columbus Brewery Launch",
    category: "Promotional Products" as Category,
    description: "Custom t-shirts, branded pint glasses, coasters, and bar mats that created a cohesive brand experience for a new craft brewery's grand opening.",
    results: ["Full branded merch line created", "Taproom identity established", "Revenue stream from merch sales"],
    tags: ["Brewery", "Merch", "Columbus"],
  },
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  usePageSEO({
    title: "Our Work & Portfolio",
    description: "Browse real examples of printing, promotional products, vehicle wraps, signage, and branding projects completed for Columbus and Ohio businesses by Buckeye Biz Hub.",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Portfolio",
    description: "Real work examples and case studies from Buckeye Biz Hub. Business printing, promotional products, and vehicle branding for Ohio businesses.",
    url: "https://www.buckeyebizhub.com/portfolio",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-44 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1200px] h-[1200px] rounded-full bg-primary/[0.18] blur-[220px]" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[700px] h-[500px] rounded-full bg-ohio-red-glow/[0.12] blur-[140px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]">
            <Sparkles className="w-4 h-4" /> Our Work & Portfolio <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}>
            Real Results for Real{" "}
            <span className="text-primary text-glow-red relative">
              Columbus Businesses
              <motion.span className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} />
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-4xl mx-auto font-semibold tracking-wide leading-relaxed">
            Here's a look at some of the printing, promotional, signage, and branding projects we've helped local Ohio businesses bring to life with concierge-level care.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-14 flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { icon: Eye, num: "1M+", label: "Brand Impressions Generated" },
              { icon: Users, num: "500+", label: "Ohio Businesses Served" },
              { icon: TrendingUp, num: "35%", label: "Avg. Client Growth" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-black text-primary" style={{ textShadow: '0 0 25px hsl(0 80% 42% / 0.4)' }}>{stat.num}</div>
                <div className="text-xs font-bold text-primary-foreground/35 tracking-[0.2em] uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative py-10 bg-ohio-grey-light border-b border-border/50 sticky top-[72px] z-30 backdrop-blur-xl bg-ohio-grey-light/95">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm font-black uppercase tracking-[0.12em] px-5 py-2.5 rounded-full border-2 transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_25px_hsl(0_80%_42%/0.4)]"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 lg:py-32 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px]" />

        <div className="container relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group bg-card rounded-2xl border-2 border-border hover:border-primary/40 overflow-hidden shadow-sm hover:shadow-[0_20px_60px_-15px_hsl(0_85%_40%/0.18)] transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={400}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 text-[0.55rem] font-extrabold text-primary-foreground tracking-[0.15em] uppercase bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-[0_4px_15px_hsl(0_80%_42%/0.4)]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-base font-black text-card-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-1.5 mb-4">
                      {project.results.slice(0, 2).map((r) => (
                        <div key={r} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="text-xs font-bold text-card-foreground/80">{r}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[0.6rem] font-bold text-muted-foreground bg-muted border border-border rounded-full px-2.5 py-1 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors duration-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center gap-3 mb-10">
            {[Star, Star, Star, Star, Star].map((Icon, i) => (
              <Icon key={i} className="w-6 h-6 text-primary-foreground/70 fill-primary-foreground/50" />
            ))}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-10 leading-[0.88]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready to See Results{" "}<br className="hidden md:block" />
            <span className="text-primary-foreground/90">for Your Business?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Join 500+ Ohio businesses that trust Buckeye Biz Hub for printing, branding, and promotional products that drive real growth.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl sm:text-2xl px-16 py-10 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.4)] transition-all duration-500 group uppercase tracking-[0.2em]">
                <Phone className="w-6 h-6" />
                Get Your Free Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
