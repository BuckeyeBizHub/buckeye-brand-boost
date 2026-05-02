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
  PHOTO_CUSTOM_ENVELOPE, PHOTO_GIFT_CERTIFICATE, PHOTO_GIFT_CERTIFICATE_HOLDER,
  PHOTO_TRADESHOW_TENT_WALLS, PHOTO_TRADESHOW_TENT_BACKWALL,
  PHOTO_DESK_CALENDAR, PHOTO_TEAR_OFF_CALENDAR,
  PHOTO_AMERICA_250_DECAL, PHOTO_BANNER_POSTER_MUSIC,
  PHOTO_GRAD_PARTY_SIGN_IN, PHOTO_SPORTS_YARD_SIGN_TRACK, PHOTO_SPORTS_YARD_SIGN_FOOTBALL,
  PHOTO_GRADUATION_YARD_SIGN, PHOTO_GRADUATION_INVITATION, PHOTO_GRADUATION_BANNER,
  PHOTO_LAWN_CARE_TRUCK_WRAP, PHOTO_LAWN_CARE_VAN_WRAP, PHOTO_LANDSCAPE_TRAILER_WRAP,
  PHOTO_LAWN_CARE_YARD_SIGN, PHOTO_LANDSCAPING_MAILER,
  PHOTO_GRAD_BANNER_STFRANCIS, PHOTO_GRAD_INVITE_PHOTO, PHOTO_GRAD_ACRYLIC_SIGN,
  PHOTO_DM_THANK_YOU, PHOTO_DM_DELI, PHOTO_DM_ANATOMY,
  PHOTO_SAFETY_UNIFORMS, PHOTO_SAFETY_DECALS, PHOTO_CONSTRUCTION_APPAREL,
} from "@/lib/photos";

const categories = ["All", "Business Printing", "Promotional Products", "Vehicle Wraps", "Door Hangers", "Yard Signs & Signage", "Banners & Large Format", "Branded Apparel", "Decals & Stickers", "Graduation 2026", "Direct Mail"] as const;
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
  {
    image: PHOTO_CUSTOM_ENVELOPE,
    title: "Custom Designed Business Envelopes",
    category: "Business Printing" as Category,
    description: "Full-color custom envelopes with matching brand artwork — turning everyday mail into a branded touchpoint for a Central Ohio studio.",
    results: ["Custom #10 envelopes printed full-color", "Coordinated with letterhead & business cards", "Premium 70lb bright white stock"],
    tags: ["Envelopes", "Stationery", "Columbus"],
  },
  {
    image: PHOTO_GIFT_CERTIFICATE,
    title: "Custom Gift Certificates for Local Salon",
    category: "Business Printing" as Category,
    description: "Premium printed gift certificates that drove holiday revenue and made a memorable in-hand impression for a Columbus salon.",
    results: ["Full-color premium card stock", "Sequential numbering available", "Boosted holiday gift sales"],
    tags: ["Gift Certificates", "Salon", "Columbus"],
  },
  {
    image: PHOTO_GIFT_CERTIFICATE_HOLDER,
    title: "Branded Gift Certificate Holders",
    category: "Business Printing" as Category,
    description: "Custom folded gift certificate holders with thank-you messaging that elevated the gifting experience for a local coffee brand.",
    results: ["Tri-fold custom holder", "Coordinated with gift certificate", "Premium soft-touch finish"],
    tags: ["Print", "Gifting", "Central Ohio"],
  },
  {
    image: PHOTO_TRADESHOW_TENT_WALLS,
    title: "Full-Wrap Trade Show Tent with Side Walls",
    category: "Promotional Products" as Category,
    description: "10x10 custom-printed trade show tent with full canopy and side walls — turning a booth into an unmissable brand statement at Ohio expos.",
    results: ["10x10 dye-sublimated canopy", "Branded side & back walls", "One-person setup in under 15 min"],
    tags: ["Trade Show", "Tents", "Columbus"],
  },
  {
    image: PHOTO_TRADESHOW_TENT_BACKWALL,
    title: "Trade Show Tent with Custom Backwall",
    category: "Promotional Products" as Category,
    description: "Branded 10x10 tent paired with a full-color tension-frame backwall for an Ohio brand activation event.",
    results: ["Coordinated canopy + backwall", "Vibrant full-color print", "Portable, single-case packing"],
    tags: ["Trade Show", "Backwall", "Ohio"],
  },
  {
    image: PHOTO_DESK_CALENDAR,
    title: "Custom Branded Desk Calendar",
    category: "Promotional Products" as Category,
    description: "Spiral-bound desk calendars with QR codes and branded messaging — a year-long touchpoint sitting on every client's desk.",
    results: ["365 days of brand visibility", "QR code 'scan to connect'", "Premium spiral binding"],
    tags: ["Calendars", "Promo", "Columbus"],
  },
  {
    image: PHOTO_TEAR_OFF_CALENDAR,
    title: "Custom Tear-Off Daily Calendar",
    category: "Promotional Products" as Category,
    description: "365-page tear-off calendars with daily affirmations and branding — a unique, daily-engagement promo product for a Central Ohio brand.",
    results: ["365 daily tear-off pages", "Custom messaging per day", "Stand-up easel back design"],
    tags: ["Calendars", "Promo", "Ohio"],
  },
  {
    image: PHOTO_AMERICA_250_DECAL,
    title: "America 250 Commemorative Custom Decal",
    category: "Decals & Stickers" as Category,
    description: "Premium die-cut vinyl decal celebrating America's 250th anniversary (1776–2026) — printed for Central Ohio civic groups, veterans organizations, and patriotic events.",
    results: ["Premium die-cut vinyl decal", "UV-stable inks for outdoor use", "America 250 (1776–2026) commemorative"],
    tags: ["Decals", "Commemorative", "Ohio"],
  },
  {
    image: PHOTO_BANNER_POSTER_MUSIC,
    title: "Custom Retirement Celebration Banner Poster",
    category: "Banners & Large Format" as Category,
    description: "Vintage-style 'Making Music for 30 Years' celebration banner printed for a beloved Central Ohio music teacher's retirement event.",
    results: ["Vintage-style large-format poster", "Heavyweight matte finish", "Personalized retirement messaging"],
    tags: ["Banners", "Celebration", "Columbus"],
  },
  {
    image: PHOTO_GRAD_PARTY_SIGN_IN,
    title: "Graduation Party Sign-In Sign",
    category: "Graduation 2026" as Category,
    description: "Elegant 8x10 framed graduation sign-in sign helping busy graduates collect addresses for thank-you notes — a Class of 2026 favorite.",
    results: ["8x10 print, frame-ready", "Premium matte stock", "Custom graduate styling"],
    tags: ["Graduation", "Sign-In", "Class of 2026"],
  },
  {
    image: PHOTO_SPORTS_YARD_SIGN_TRACK,
    title: "Track & Field Senior Athlete Yard Sign",
    category: "Yard Signs & Signage" as Category,
    description: "Bold 18x24 photo yard sign for a Class of 2025 track-and-field senior — printed on weatherproof corrugated plastic with H-stake.",
    results: ["Full-color photo sign", "Weatherproof corrugated plastic", "Custom team mascot styling"],
    tags: ["Yard Signs", "Senior Sports", "Ohio"],
  },
  {
    image: PHOTO_SPORTS_YARD_SIGN_FOOTBALL,
    title: "Football Senior Athlete Yard Sign",
    category: "Yard Signs & Signage" as Category,
    description: "Custom senior-night football yard sign with player photo, jersey number, and team mascot — printed for Central Ohio football families.",
    results: ["Player photo + jersey number", "Team mascot color-matched", "Double-sided option available"],
    tags: ["Yard Signs", "Football", "Senior Night"],
  },
  {
    image: PHOTO_GRADUATION_YARD_SIGN,
    title: "Class of 2024 Graduation Yard Sign",
    category: "Graduation 2026" as Category,
    description: "Elegant blue-and-gold graduation yard sign with cap-and-gown photo — a celebratory front-yard staple for proud Columbus families.",
    results: ["Photo-quality full-color print", "Weatherproof corrugated plastic", "H-stake included"],
    tags: ["Graduation", "Yard Signs", "Columbus"],
  },
  {
    image: PHOTO_GRADUATION_INVITATION,
    title: "Custom Graduation Party Invitation",
    category: "Graduation 2026" as Category,
    description: "Premium double-sided graduation party invitations with custom photos and full event details — printed on luxury cardstock for Class of 2026 grads.",
    results: ["Double-sided full-color print", "Premium 110lb cardstock", "Matching envelopes available"],
    tags: ["Invitations", "Graduation", "Class of 2026"],
  },
  {
    image: PHOTO_GRADUATION_BANNER,
    title: "Outdoor 'Congrats Grad' Photo Banner",
    category: "Graduation 2026" as Category,
    description: "Large-format outdoor 'Congrats Grad' photo banner with multiple grad photos — perfect for driveway and front-yard celebrations across Central Ohio.",
    results: ["Large-format vinyl banner", "Reinforced grommets for outdoor hanging", "Multi-photo personalized layout"],
    tags: ["Banners", "Graduation", "Ohio"],
  },
  {
    image: PHOTO_LAWN_CARE_TRUCK_WRAP,
    title: "Lawn & Tree Care Box Truck Wrap",
    category: "Vehicle Wraps" as Category,
    description: "Full-color box truck wrap for a Central Ohio lawn and tree care company — turning a service vehicle into a high-impact rolling billboard.",
    results: ["Full box truck + cab wrap", "Photo-realistic lawn imagery", "Premium 3M cast vinyl"],
    tags: ["Vehicle Wraps", "Lawn Care", "Columbus"],
  },
  {
    image: PHOTO_LAWN_CARE_VAN_WRAP,
    title: "Lawn Care Service Van Wrap",
    category: "Vehicle Wraps" as Category,
    description: "Bright, character-driven van wrap for a Columbus lawn care company — designed to stand out in every neighborhood it visits.",
    results: ["Full van wrap with mascot artwork", "High-visibility color palette", "5–7 year durability rating"],
    tags: ["Vehicle Wraps", "Lawn Care", "Central Ohio"],
  },
  {
    image: PHOTO_LANDSCAPE_TRAILER_WRAP,
    title: "Landscaping Company Trailer Wrap",
    category: "Vehicle Wraps" as Category,
    description: "Full-coverage enclosed trailer wrap with service list and contact info — a moving billboard that books jobs from the driveway.",
    results: ["Both sides + rear fully wrapped", "Service list + phone prominently featured", "Weatherproof laminate finish"],
    tags: ["Trailer Wrap", "Landscaping", "Ohio"],
  },
  {
    image: PHOTO_LAWN_CARE_YARD_SIGN,
    title: "Lawn Care Fall Clean-Up Yard Sign",
    category: "Yard Signs & Signage" as Category,
    description: "Bold seasonal lawn care yard sign promoting fall clean-up services — printed on weatherproof corrugated plastic with H-stake.",
    results: ["Double-sided full-color print", "Weatherproof 4mm corrugated plastic", "Strong call-to-action layout"],
    tags: ["Yard Signs", "Lawn Care", "Columbus"],
  },
  {
    image: PHOTO_LANDSCAPING_MAILER,
    title: "Spring Landscaping Promotional Mailer",
    category: "Business Printing" as Category,
    description: "Oversized 6x9 EDDM-ready landscaping mailer with seasonal offers and clean photography — designed to drive spring sign-ups across Central Ohio neighborhoods.",
    results: ["EDDM-compliant 6x9 layout", "Full-color both sides on 14pt coated stock", "Seasonal promo offer hierarchy"],
    tags: ["Mailers", "Landscaping", "EDDM"],
  },
  {
    image: PHOTO_GRAD_BANNER_STFRANCIS,
    title: "St. Francis DeSales Graduation Celebration Banner",
    category: "Graduation 2026" as Category,
    description: "Custom 2x4 vinyl celebration banner for a Columbus St. Francis DeSales graduate — featuring photo, event details, and personalized design.",
    results: ["Premium 13oz vinyl banner", "Reinforced grommets", "Photo-quality full-color print"],
    tags: ["Graduation", "Banners", "Columbus"],
  },
  {
    image: PHOTO_GRAD_INVITE_PHOTO,
    title: "Class of 2026 Photo Graduation Invitation",
    category: "Graduation 2026" as Category,
    description: "Premium double-sided photo graduation invitation for a St. Francis DeSales senior — printed on luxe 110lb cardstock with matching envelopes.",
    results: ["Double-sided full-color print", "110lb premium cardstock", "Coordinated envelopes available"],
    tags: ["Invitations", "Graduation", "Class of 2026"],
  },
  {
    image: PHOTO_GRAD_ACRYLIC_SIGN,
    title: "Custom College Commitment Acrylic Sign",
    category: "Graduation 2026" as Category,
    description: "Premium 12x24 acrylic sign celebrating a senior's college commitment — perfect for graduation parties and lifelong keepsakes.",
    results: ["1/4\" cast acrylic with UV print", "Frosted-edge premium finish", "Wall-mount or easel display"],
    tags: ["Acrylic Signs", "Graduation", "Keepsake"],
  },
  {
    image: PHOTO_DM_THANK_YOU,
    title: "EDDM Thank-You Postcard Campaign",
    category: "Direct Mail" as Category,
    description: "Personalized thank-you direct mail postcards with QR-code follow-up — printed and mailed for a Central Ohio service business referral program.",
    results: ["EDDM-ready 6x9 layout", "QR code referral tracking", "Heavy 14pt coated stock"],
    tags: ["Direct Mail", "Postcards", "EDDM"],
  },
  {
    image: PHOTO_DM_DELI,
    title: "Restaurant Direct Mail Promo Postcard",
    category: "Direct Mail" as Category,
    description: "Bold full-color direct mail postcard for a local deli — driving foot traffic with a 'Free Sandwich' offer and QR-code redemption.",
    results: ["Full-color photo postcard", "Trackable QR offer code", "EDDM-ready bulk pricing"],
    tags: ["Direct Mail", "Restaurants", "Promo"],
  },
  {
    image: PHOTO_DM_ANATOMY,
    title: "High-Conversion Restaurant Postcard Design",
    category: "Direct Mail" as Category,
    description: "Strategically designed restaurant direct mail postcard balancing headline, image, offer, and CTA — built to convert mailbox impressions into reservations.",
    results: ["Headline + offer + CTA structure", "Premium food photography", "Clear booking call-to-action"],
    tags: ["Direct Mail", "Design", "Hospitality"],
  },
  {
    image: PHOTO_SAFETY_UNIFORMS,
    title: "Hi-Visibility Safety Uniform Program",
    category: "Branded Apparel" as Category,
    description: "ANSI-rated hi-visibility safety jackets, vests, and outerwear with custom logos — outfitting Central Ohio construction and utility crews.",
    results: ["ANSI Class 2 & 3 hi-vis garments", "Heat-transfer or embroidered logos", "Reflective tape for low-light visibility"],
    tags: ["Safety Apparel", "Hi-Vis", "Construction"],
  },
  {
    image: PHOTO_SAFETY_DECALS,
    title: "Reflective Safety Compliance Decals",
    category: "Decals & Stickers" as Category,
    description: "First-Aid, CPR-Trained, and Safety Officer reflective hard-hat decals — durable, weatherproof, and OSHA-friendly compliance markers.",
    results: ["3M reflective vinyl", "Die-cut shapes for hard hats", "Weatherproof + chemical-resistant"],
    tags: ["Decals", "Safety", "Compliance"],
  },
  {
    image: PHOTO_CONSTRUCTION_APPAREL,
    title: "Custom Construction Team Branded Apparel",
    category: "Branded Apparel" as Category,
    description: "Coordinated branded hi-vis safety vests and gear for a Central Ohio construction crew — turning every job site into a brand impression.",
    results: ["Coordinated crew look", "Embroidered company logos", "ANSI-compliant safety colors"],
    tags: ["Construction", "Apparel", "Crew Uniforms"],
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
                      alt={`${project.title} by Buckeye Biz Hub in Columbus Ohio`}
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
