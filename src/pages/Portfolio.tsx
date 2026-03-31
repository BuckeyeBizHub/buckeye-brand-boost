import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star, TrendingUp, Eye, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fleetWrapHvac from "@/assets/fleet-wrap-hvac.jpg";
import premiumBusinessCards from "@/assets/premium-business-cards.jpg";
import {
  PHOTO_VEHICLE_1, PHOTO_VEHICLE_2, PHOTO_VEHICLE_3, PHOTO_VEHICLE_5, PHOTO_VEHICLE_6,
  PHOTO_PRINT_1, PHOTO_PRINT_2, PHOTO_PRINT_6, PHOTO_PRINT_8,
  PHOTO_APPAREL_1, PHOTO_APPAREL_2,
  PHOTO_SIGNAGE_1, PHOTO_SIGNAGE_2, PHOTO_SIGNAGE_3, PHOTO_SIGNAGE_4,
} from "@/lib/photos";

const categories = ["All", "Business Printing", "Promotional Products", "Vehicle Branding"] as const;
type Category = typeof categories[number];

const projects = [
  {
    image: fleetWrapHvac,
    title: "Full Fleet Wrap – Columbus HVAC Company",
    category: "Vehicle Branding" as Category,
    description: "Designed and installed full wraps on 12 service vans for a growing Columbus HVAC contractor. Bold red and white branding with contact info visible from 100+ feet away.",
    results: ["Branded 12 vehicles in just 3 weeks", "70K+ daily impressions per van", "35% increase in inbound calls", "Saved the customer over $1,500 per vehicle by connecting them to a well-known installer in our network"],
    tags: ["Fleet Wraps", "Columbus", "HVAC"],
  },
  {
    image: premiumBusinessCards,
    title: "Premium Business Cards – Downtown Law Firm",
    category: "Business Printing" as Category,
    description: "Created 32pt ultra-thick business cards with spot UV and gold foil stamping for a prestigious Columbus law firm. The premium feel matched their brand identity perfectly.",
    results: ["Delivered 10,000 premium business cards", "Spot UV + gold foil stamping finish", "Saved the client $640 while upgrading from standard business cards to premium 32pt stock"],
    tags: ["Business Cards", "Premium Print", "Columbus"],
  },
  {
    image: PHOTO_APPAREL_1,
    title: "Custom Uniforms – Ohio Restaurant Chain",
    category: "Promotional Products" as Category,
    description: "Outfitted 150+ staff across 8 locations with embroidered polos, branded aprons, and custom hats. Consistent branding across every touchpoint.",
    results: ["150+ uniforms across 8 locations", "Brand consistency achieved", "Reorder program established"],
    tags: ["Custom Apparel", "Restaurants", "Ohio"],
  },
  {
    image: PHOTO_SIGNAGE_1,
    title: "Trade Show Display – Tech Startup Launch",
    category: "Business Printing" as Category,
    description: "Built a complete trade show presence including a 10x20 custom tent, retractable banners, table throws, and branded giveaway kits for a Columbus tech startup's first major expo.",
    results: ["400+ leads captured at expo", "Complete booth setup delivered", "40% increase in foot traffic"],
    tags: ["Trade Show", "Tents & Banners", "Columbus"],
  },
  {
    image: PHOTO_VEHICLE_5,
    title: "Box Truck Branding – Landscaping Company",
    category: "Vehicle Branding" as Category,
    description: "Wrapped 4 box trucks and 6 pickup trucks with bold, nature-inspired graphics for an Ohio landscaping company. The fleet now generates thousands of impressions daily across Central Ohio.",
    results: ["10 vehicles branded", "Consistent fleet identity", "25% more quote requests"],
    tags: ["Fleet Branding", "Landscaping", "Ohio"],
  },
  {
    image: PHOTO_SIGNAGE_3,
    title: "Yard Sign Campaign – Real Estate Agency",
    category: "Business Printing" as Category,
    description: "Produced 500+ corrugated yard signs, open house riders, and directional signs for a top-performing Columbus real estate team. Fast turnaround kept pace with their listing volume.",
    results: ["500+ signs delivered monthly", "48-hour rush turnaround", "Neighborhood brand recognition"],
    tags: ["Yard Signs", "Real Estate", "Columbus"],
  },
  {
    image: PHOTO_APPAREL_2,
    title: "Branded Merch Program – Columbus Brewery",
    category: "Promotional Products" as Category,
    description: "Created a full merchandise line including custom t-shirts, embroidered hats, branded pint glasses, bar rail mats, and coasters for a popular Columbus craft brewery's taproom and online store.",
    results: ["Revenue stream from merch sales", "Bar rail + coaster branding", "Taproom identity elevated"],
    tags: ["Bar Rails", "Brewery", "Merch Program"],
  },
  {
    image: PHOTO_VEHICLE_3,
    title: "Magnetic Signs – Mobile Dog Grooming",
    category: "Vehicle Branding" as Category,
    description: "Designed eye-catching magnetic vehicle signs for a Columbus mobile dog grooming service. The owner switches between personal and business branding effortlessly.",
    results: ["Removable branding solution", "Bookings doubled in 60 days", "Professional street presence"],
    tags: ["Magnetic Signs", "Small Business", "Columbus"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Portfolio",
    description: "Real work examples and case studies from Buckeye Biz Hub. Business printing, promotional products, and vehicle branding for Ohio businesses.",
    url: "https://buckeye-brand-boost.lovable.app/portfolio",
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
            Real Results for{" "}
            <span className="text-primary text-glow-red relative">
              Ohio Businesses
              <motion.span className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} />
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-4xl mx-auto font-semibold tracking-wide leading-relaxed">
            From fleet wraps to premium business cards, see how Buckeye Biz Hub helps Columbus and Ohio businesses build powerful brands that drive real growth.
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
                className={`text-sm font-black uppercase tracking-[0.15em] px-6 py-3 rounded-full border-2 transition-all duration-300 ${
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
              className="grid md:grid-cols-2 gap-10 lg:gap-12"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group bg-card rounded-3xl border-2 border-border hover:border-primary/40 overflow-hidden card-lift shadow-sm hover:shadow-[0_35px_90px_-15px_hsl(0_85%_40%/0.22)]"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    {/* Category badge */}
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-extrabold text-primary-foreground tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_4px_20px_hsl(0_80%_42%/0.4)]">
                        <Star className="w-3 h-3 fill-primary-foreground" />
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <h3 className="font-display text-2xl lg:text-3xl font-black text-card-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.8] text-[0.95rem] mb-6">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2.5 mb-6">
                      <h4 className="text-xs font-extrabold tracking-[0.2em] uppercase text-primary">Results</h4>
                      {project.results.map((r) => (
                        <div key={r} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm font-bold text-card-foreground/80">{r}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[0.7rem] font-bold text-muted-foreground bg-muted border border-border rounded-full px-3 py-1.5 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors duration-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black transition-all duration-300 group/btn shadow-[0_4px_25px_hsl(0_85%_40%/0.3)] hover:shadow-[0_4px_40px_hsl(0_85%_40%/0.5)] text-sm px-8 py-5 uppercase tracking-wider w-full justify-center">
                        Start a Project Like This
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                      </Button>
                    </Link>
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

export default Portfolio;
