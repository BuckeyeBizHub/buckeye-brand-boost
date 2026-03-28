import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Stethoscope, Wrench, Car, TreePine, Home, UtensilsCrossed, HardHat, SmilePlus, Sparkles, Zap, Shield, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PHOTO_VEHICLE_1, PHOTO_VEHICLE_2, PHOTO_VEHICLE_3,
  PHOTO_VEHICLE_4, PHOTO_VEHICLE_5, PHOTO_VEHICLE_6, PHOTO_VEHICLE_7,
  PHOTO_PRINT_1, PHOTO_PRINT_2, PHOTO_PRINT_3, PHOTO_PRINT_4,
  PHOTO_SIGNAGE_1, PHOTO_SIGNAGE_2, PHOTO_SIGNAGE_3,
  PHOTO_APPAREL_1, PHOTO_APPAREL_2,
} from "@/lib/photos";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const industries = [
  {
    icon: SmilePlus,
    image: PHOTO_PRINT_1,
    title: "Dentists & Dental Practices",
    num: "01",
    keywords: ["Columbus Dentist Printing", "Ohio Dental Marketing", "Dental Office Signage"],
    description: "From appointment reminder cards and patient welcome kits to branded toothbrush giveaways and window graphics, we help Columbus dental practices build trust and stay top-of-mind. Our custom vehicle wraps turn your office shuttle or mobile dental unit into a neighborhood billboard. We also produce professional lobby signage, branded scrubs and staff polos, and referral program materials that keep your chairs full. Whether you're a solo practice or multi-location group across Ohio, our tailored Columbus dentist printing solutions drive patient retention and new patient acquisition.",
    benefits: ["Appointment & recall cards", "Branded patient giveaways", "Window & lobby graphics", "Vehicle wraps for mobile units"],
  },
  {
    icon: Stethoscope,
    image: PHOTO_PRINT_2,
    title: "Medical Offices & Doctors",
    num: "02",
    keywords: ["Ohio Medical Office Printing", "Columbus Healthcare Marketing", "Doctor Office Branding"],
    description: "Medical offices across Columbus and Ohio trust us for professional brochures, prescription pads, HIPAA-compliant forms, and patient education materials printed to the highest standards. Our branded scrubs, lab coats, and staff apparel create a cohesive, professional image that builds patient confidence. We produce lobby signage, wayfinding displays, and exterior building graphics that make your practice easy to find. Fleet branding for home health vehicles and mobile clinics extends your reach across Ohio communities, turning every drive into a marketing impression.",
    benefits: ["Professional brochures & forms", "Branded staff apparel", "Lobby & wayfinding signage", "Home health vehicle wraps"],
  },
  {
    icon: Wrench,
    image: PHOTO_VEHICLE_1,
    title: "HVAC & Plumbing Services",
    num: "03",
    keywords: ["Columbus HVAC Truck Wraps", "Ohio Plumber Marketing", "Service Vehicle Branding"],
    description: "HVAC and plumbing companies in Columbus know that a professionally wrapped service truck generates thousands of impressions daily — and we make yours impossible to miss. Beyond stunning Columbus HVAC truck wraps, we produce door hangers, yard signs for active job sites, branded uniforms, and refrigerator magnets that keep your phone number in every Ohio kitchen. Our promotional products like branded flashlights, tape measures, and pens make perfect leave-behinds after every service call. Every touchpoint reinforces your brand and drives repeat business across Ohio neighborhoods.",
    benefits: ["Full & partial truck wraps", "Yard signs & door hangers", "Branded uniforms & hats", "Promotional leave-behinds"],
  },
  {
    icon: Car,
    image: PHOTO_VEHICLE_4,
    title: "Auto Dealerships & Automotive",
    num: "04",
    keywords: ["Ohio Auto Dealership Signage", "Columbus Car Dealer Printing", "Automotive Branding"],
    description: "Ohio auto dealerships need bold, attention-grabbing signage that moves inventory — and we deliver. From massive showroom banners and window clings to custom license plate frames, key tags, and branded sales staff apparel, every piece we produce is designed to enhance your dealership's image. Our Ohio auto dealership signage includes lot flags, A-frame signs, and illuminated displays that draw traffic from the road. We also wrap service department vehicles and courtesy shuttles, extending your brand presence well beyond the lot across Columbus and surrounding markets.",
    benefits: ["Showroom banners & window clings", "Key tags & license plate frames", "Lot flags & A-frame signs", "Service shuttle wraps"],
  },
  {
    icon: TreePine,
    image: PHOTO_SIGNAGE_1,
    title: "Lawn Care & Landscaping",
    num: "05",
    keywords: ["Columbus Landscaping Signs", "Ohio Lawn Care Marketing", "Landscaper Truck Wraps"],
    description: "For Columbus lawn care and landscaping businesses, visibility is everything — and our products put your brand in every yard you service. Custom trailer wraps, truck lettering, and magnetics turn your fleet into a mobile marketing machine across Ohio neighborhoods. Our Columbus landscaping yard signs are planted at every job site, generating referrals from neighbors who see your work firsthand. Branded crew t-shirts, embroidered hats, and promotional items like seed packets and koozies round out a professional image that builds trust and wins bids season after season.",
    benefits: ["Trailer & truck wraps", "Job-site yard signs", "Branded crew apparel", "Promotional giveaways"],
  },
  {
    icon: Home,
    image: PHOTO_SIGNAGE_2,
    title: "Real Estate Agents & Agencies",
    num: "06",
    keywords: ["Columbus Real Estate Signs", "Ohio Realtor Printing", "Real Estate Marketing Materials"],
    description: "Columbus real estate agents rely on us for premium For Sale signs, rider signs, open house directional arrows, and A-frame displays that command attention at the curb. Our Columbus real estate printing includes luxury business cards, property brochures, and just-sold postcards that position you as the market expert. Branded closing gifts like custom tumblers, cutting boards, and welcome mats create unforgettable client experiences that drive referrals. Vehicle magnets and partial wraps keep your personal brand visible on every showing drive across Ohio.",
    benefits: ["For Sale & rider signs", "Luxury business cards", "Branded closing gifts", "Vehicle magnets & wraps"],
  },
  {
    icon: UtensilsCrossed,
    image: PHOTO_APPAREL_1,
    title: "Restaurants & Bars",
    num: "07",
    keywords: ["Columbus Restaurant Printing", "Ohio Bar Branding", "Custom Bar Rails Columbus"],
    description: "From custom bar rail mats and branded coasters to professional menus, table tents, and loyalty cards, we help Columbus restaurants and bars create an unforgettable brand experience. Our Ohio bar branding products include branded glassware, staff uniforms, and promotional merchandise that turns loyal regulars into brand ambassadors. Window decals, A-frame sidewalk signs, and patio banners drive foot traffic from the street. For delivery and catering operations, our vehicle wraps and branded packaging ensure your restaurant's identity travels with every order across Columbus.",
    benefits: ["Custom bar rails & coasters", "Menus & table tents", "Staff uniforms & merch", "Delivery vehicle wraps"],
  },
  {
    icon: HardHat,
    image: PHOTO_VEHICLE_5,
    title: "Construction & Contractors",
    num: "08",
    keywords: ["Ohio Construction Signage", "Columbus Contractor Truck Wraps", "Builder Marketing Materials"],
    description: "Ohio construction companies and contractors depend on us for truck and trailer wraps, job-site banners, hard hat stickers, and safety signage that project professionalism and credibility on every project. Our Columbus contractor truck wraps turn your fleet into the most effective advertising tool in the industry. Branded workwear — hi-vis vests, embroidered jackets, and custom hard hats — unifies your crew's appearance. Business cards, project proposal folders, and leave-behind brochures close deals, while yard signs at active sites generate leads from every passing car.",
    benefits: ["Truck & trailer wraps", "Job-site banners & signs", "Branded safety workwear", "Proposal folders & cards"],
  },
];

const Industries = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Industries We Serve",
    description: "Tailored printing, promotional products, and vehicle branding for Ohio's key industries including dental, medical, HVAC, automotive, landscaping, real estate, restaurants, and construction.",
    url: "https://buckeye-brand-boost.lovable.app/industries",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/[0.14] rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] border border-primary/25 px-6 py-2.5 rounded-full shadow-[0_0_30px_hsl(0_80%_42%/0.15)]">
            <Star className="w-3.5 h-3.5 fill-primary" /> 8 Industries — Tailored Solutions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground leading-[0.88] mb-8"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}>
            Industries We{" "}
            <span className="text-primary text-glow-red relative">
              Serve
              <motion.span className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.6 }} />
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-4xl mx-auto font-semibold leading-relaxed">
            Tailored printing, promotional products, and vehicle branding for Ohio's key businesses — from Columbus dentists to Ohio construction crews.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: Zap, label: "Fast Turnaround" },
              { icon: Shield, label: "Quality Guaranteed" },
              { icon: Sparkles, label: "Ohio Owned & Operated" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-primary-foreground/50 text-sm font-bold tracking-wide uppercase">
                <b.icon className="w-4 h-4 text-primary" />{b.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((ind, i) => {
        const isDark = i % 2 === 1;
        const reversed = i % 2 === 1;
        return (
          <section key={ind.title} className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? "bg-ohio-grey-dark" : "bg-ohio-grey-light"}`}>
            {isDark && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,5%)] via-[hsl(0,30%,6%)] to-[hsl(220,25%,5%)]" />}
            <div className={`absolute top-[-100px] ${reversed ? "left-[-80px]" : "right-[-80px]"} w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px]`} />

            <div className="container relative">
              <motion.div {...fadeUp} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "md:[direction:rtl]" : ""}`}>
                {/* Image */}
                <div className={reversed ? "md:[direction:ltr]" : ""}>
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="relative group">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-primary/15 group-hover:border-primary/40 transition-all duration-500 shadow-[0_25px_70px_rgba(0,0,0,0.35)] group-hover:shadow-[0_30px_90px_hsl(0_80%_42%/0.3)]">
                      <img src={ind.image} alt={ind.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-extrabold text-primary-foreground tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_4px_20px_hsl(0_80%_42%/0.4)]">
                          <ind.icon className="w-3 h-3" />{ind.title.split(" ")[0]}
                        </span>
                      </div>
                      <div className="absolute bottom-5 right-6 font-display text-8xl font-black text-primary-foreground/[0.08] leading-none select-none">{ind.num}</div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${reversed ? "md:[direction:ltr]" : ""} space-y-7`}>
                  <motion.div initial={{ opacity: 0, x: reversed ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
                    <span className={`inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.25em] uppercase px-5 py-2 rounded-full ${
                      isDark ? "text-primary bg-primary/[0.15] border border-primary/25" : "text-primary bg-primary/[0.08] border border-primary/15"
                    }`}>
                      <Star className="w-3.5 h-3.5 fill-primary" />Industry {ind.num}
                    </span>
                    <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[0.92] ${isDark ? "text-primary-foreground" : "text-foreground"}`}
                      style={isDark ? { textShadow: '0 0 50px rgba(255,255,255,0.15)' } : {}}>
                      {ind.title}
                    </h2>
                    <div className="w-28 h-[5px] rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light shadow-[0_0_15px_hsl(0_80%_42%/0.3)]" />
                    <p className={`text-base lg:text-lg leading-[1.85] max-w-lg font-medium ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                      {ind.description}
                    </p>
                  </motion.div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-extrabold tracking-[0.2em] uppercase text-primary">What We Provide</h3>
                    <ul className="space-y-2">
                      {ind.benefits.map((b) => (
                        <li key={b} className={`flex items-start gap-3 text-sm font-medium ${isDark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Keyword pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {ind.keywords.map((k, j) => (
                      <motion.span key={k} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + j * 0.06 }}
                        className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                          isDark
                            ? "text-primary-foreground/55 bg-primary-foreground/[0.06] border-primary-foreground/10 hover:border-primary/40 hover:text-primary hover:bg-primary/[0.08]"
                            : "text-muted-foreground bg-muted border-border hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04]"
                        }`}>
                        {k}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="pt-3">
                    <Link to="/contact">
                      <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-xl shadow-[0_0_30px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_55px_hsl(0_80%_42%/0.6)] transition-all duration-300 group/btn uppercase tracking-wider">
                        Get a Quote for My Industry
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

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
            Ready to Grow Your Business{" "}<br className="hidden md:block" />
            <span className="text-primary-foreground/90">in Your Industry?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Tailored printing, promotional products, and vehicle branding solutions for every Ohio industry. Let's build your brand together.
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

export default Industries;
