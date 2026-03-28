import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star, Clock, Tag, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PHOTO_VEHICLE_1, PHOTO_VEHICLE_3, PHOTO_VEHICLE_5,
  PHOTO_PRINT_2, PHOTO_PRINT_6,
  PHOTO_APPAREL_1, PHOTO_APPAREL_2,
  PHOTO_SIGNAGE_1,
} from "@/lib/photos";

const categories = ["All", "Printing", "Promotional Products", "Vehicle Branding", "Business Tips"] as const;
type Cat = typeof categories[number];

const posts = [
  {
    image: PHOTO_APPAREL_2,
    title: "5 Must-Have Promo Items for Ohio Bars & Breweries in 2026",
    excerpt: "From branded bar rail mats to custom pint glasses, discover the top promotional products that Columbus bars and Ohio breweries are using to boost brand loyalty and drive repeat customers in 2026.",
    category: "Promotional Products" as Cat,
    date: "March 15, 2026",
    readTime: "6 min read",
    tags: ["Bar Rails", "Columbus Bars", "Ohio Promotional Products"],
  },
  {
    image: PHOTO_VEHICLE_1,
    title: "How Vehicle Wraps Can Boost Your Auto Dealership Sales by 40%",
    excerpt: "Ohio auto dealerships are discovering that branded vehicle wraps on service shuttles and delivery trucks generate thousands of daily impressions. Learn how Columbus dealerships are turning their fleet into a sales machine.",
    category: "Vehicle Branding" as Cat,
    date: "March 8, 2026",
    readTime: "8 min read",
    tags: ["Columbus Vehicle Wraps", "Auto Dealerships", "Fleet Branding"],
  },
  {
    image: PHOTO_PRINT_2,
    title: "Best Business Card Designs for Dentists & Medical Offices",
    excerpt: "First impressions matter in healthcare. Explore premium business card designs, paper stocks, and finishes that Ohio dentists and medical offices are using to stand out and build patient trust.",
    category: "Printing" as Cat,
    date: "February 28, 2026",
    readTime: "5 min read",
    tags: ["Columbus Business Cards", "Dentist Printing", "Medical Office Branding"],
  },
  {
    image: PHOTO_SIGNAGE_1,
    title: "Trade Show Checklist: Everything Your Ohio Business Needs",
    excerpt: "Planning for a Columbus trade show or Ohio expo? Here's your complete checklist — from custom pop-up tents and retractable banners to branded tablecloths, giveaways, and business cards.",
    category: "Business Tips" as Cat,
    date: "February 20, 2026",
    readTime: "7 min read",
    tags: ["Trade Show Displays", "Columbus Events", "Event Marketing"],
  },
  {
    image: PHOTO_VEHICLE_5,
    title: "Fleet Branding 101: A Guide for Ohio Contractors & Service Companies",
    excerpt: "HVAC, plumbing, electrical, and landscaping companies across Ohio are branding their fleets to generate leads on every job. Learn the ROI of fleet wraps and how to get started with your Columbus business.",
    category: "Vehicle Branding" as Cat,
    date: "February 12, 2026",
    readTime: "9 min read",
    tags: ["Ohio Fleet Branding", "Contractor Marketing", "Vehicle Graphics"],
  },
  {
    image: PHOTO_APPAREL_1,
    title: "Custom Uniforms That Build Team Pride & Brand Recognition",
    excerpt: "Branded uniforms do more than look professional — they build team culture and make your business instantly recognizable. Discover the best apparel options for Ohio restaurants, retail, and service teams.",
    category: "Promotional Products" as Cat,
    date: "February 5, 2026",
    readTime: "5 min read",
    tags: ["Custom Apparel Ohio", "Team Uniforms", "Brand Identity"],
  },
  {
    image: PHOTO_PRINT_6,
    title: "Yard Signs That Win Elections & Sell Homes in Ohio",
    excerpt: "Corrugated yard signs remain one of the most cost-effective marketing tools for Ohio real estate agents, political campaigns, and local businesses. Here's how to design signs that actually get noticed.",
    category: "Printing" as Cat,
    date: "January 28, 2026",
    readTime: "6 min read",
    tags: ["Ohio Yard Signs", "Real Estate Signs", "Campaign Printing"],
  },
  {
    image: PHOTO_VEHICLE_3,
    title: "Magnetic Signs vs. Decals: Which Is Right for Your Business?",
    excerpt: "Not sure whether to go with magnetic vehicle signs or permanent decals? We break down the pros, cons, costs, and best use cases for Columbus small businesses and Ohio service professionals.",
    category: "Business Tips" as Cat,
    date: "January 20, 2026",
    readTime: "4 min read",
    tags: ["Magnetic Signs", "Vehicle Decals", "Small Business Marketing"],
  },
];

const Blog = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Buckeye Biz Hub – Resources & Insights",
    description: "Ohio business tips, printing guides, promotional product ideas, and vehicle branding strategies from Buckeye Biz Hub.",
    url: "https://buckeye-brand-boost.lovable.app/blog",
    publisher: { "@type": "Organization", name: "Buckeye Biz Hub" },
  };

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
            <BookOpen className="w-4 h-4" /> Resources & Insights <BookOpen className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}>
            Ohio Business Tips,{" "}
            <br className="hidden md:block" />
            <span className="text-primary text-glow-red">Printing Guides</span>{" "}
            <br className="hidden md:block" />
            & Branding Strategies
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-3xl mx-auto font-semibold tracking-wide leading-relaxed">
            Expert insights to help Columbus and Ohio businesses grow through smart printing, branding, and promotional strategies.
          </motion.p>
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

      {/* Blog Grid */}
      <section className="py-24 lg:py-32 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />

        <div className="container relative">
          {/* Featured Post */}
          {filtered.length > 0 && (
            <motion.div
              key={`featured-${active}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-card rounded-3xl border-2 border-border hover:border-primary/40 overflow-hidden card-lift shadow-sm hover:shadow-[0_35px_90px_-15px_hsl(0_85%_40%/0.22)] mb-12"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-72 md:h-full min-h-[320px] overflow-hidden">
                  <img src={filtered[0].image} alt={filtered[0].title} loading="lazy" width={800} height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card/30" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-extrabold text-primary-foreground tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_4px_20px_hsl(0_80%_42%/0.4)]">
                      <Star className="w-3 h-3 fill-primary-foreground" /> Featured
                    </span>
                  </div>
                </div>
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">{filtered[0].category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{filtered[0].readTime}</span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-black text-card-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                    {filtered[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-[1.8] mb-6">{filtered[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filtered[0].tags.map((t) => (
                      <span key={t} className="text-[0.7rem] font-bold text-muted-foreground bg-muted border border-border rounded-full px-3 py-1.5">
                        <Tag className="w-3 h-3 inline mr-1 text-primary/60" />{t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{filtered[0].date}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(1).map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-card rounded-3xl border-2 border-border hover:border-primary/40 overflow-hidden card-lift shadow-sm hover:shadow-[0_25px_70px_-15px_hsl(0_85%_40%/0.18)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" width={600} height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[0.6rem] font-extrabold text-primary-foreground tracking-[0.15em] uppercase bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl font-black text-card-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-[1.8] mb-5 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[0.65rem] font-bold text-muted-foreground bg-muted border border-border rounded-full px-2.5 py-1 group-hover:border-primary/20 transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="container relative text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-10 leading-[0.88]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready to Grow{" "}<br className="hidden md:block" />Your Ohio Brand?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Put these strategies into action. Get a free quote for printing, promotional products, or vehicle branding today.
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

export default Blog;
