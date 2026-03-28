import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Zap, Star, CheckCircle, Award, Truck, Shield, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PHOTO_VEHICLE_1, PHOTO_VEHICLE_2, PHOTO_VEHICLE_3,
  PHOTO_VEHICLE_4, PHOTO_VEHICLE_5, PHOTO_VEHICLE_6, PHOTO_VEHICLE_7,
} from "@/lib/photos";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

interface ServiceSectionProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  useCases: string[];
  reversed?: boolean;
  dark?: boolean;
  index: number;
}

const ServiceSection = ({ image, title, subtitle, description, benefits, useCases, reversed, dark, index }: ServiceSectionProps) => (
  <section className={`relative py-24 lg:py-32 overflow-hidden ${dark ? "bg-ohio-grey-dark" : "bg-ohio-grey-light"}`}>
    {dark && <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,5%)] via-[hsl(0,30%,6%)] to-[hsl(220,25%,5%)]" />}
    <div className={`absolute top-[-100px] ${reversed ? "left-[-80px]" : "right-[-80px]"} w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px]`} />
    <div className="container relative">
      <motion.div {...fadeUp} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "md:[direction:rtl]" : ""}`}>
        <div className={reversed ? "md:[direction:ltr]" : ""}>
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="relative group">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-primary/15 group-hover:border-primary/40 transition-all duration-500 shadow-[0_25px_70px_rgba(0,0,0,0.35)] group-hover:shadow-[0_30px_90px_hsl(0_80%_42%/0.3)]">
              <img src={image} alt={title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-extrabold text-primary-foreground tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_4px_20px_hsl(0_80%_42%/0.4)]">
                  <Zap className="w-3 h-3" />{subtitle}
                </span>
              </div>
              <div className="absolute bottom-5 right-6 font-display text-8xl font-black text-primary-foreground/[0.08] leading-none select-none">0{index + 1}</div>
            </div>
          </motion.div>
        </div>
        <div className={`${reversed ? "md:[direction:ltr]" : ""} space-y-7`}>
          <motion.div initial={{ opacity: 0, x: reversed ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            <span className={`inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.25em] uppercase px-5 py-2 rounded-full ${dark ? "text-primary bg-primary/[0.15] border border-primary/25 shadow-[0_0_20px_hsl(0_80%_42%/0.1)]" : "text-primary bg-primary/[0.08] border border-primary/15"}`}>
              <Star className="w-3.5 h-3.5 fill-primary" />Service 0{index + 1}
            </span>
            <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[0.92] ${dark ? "text-primary-foreground" : "text-foreground"}`} style={dark ? { textShadow: '0 0 50px rgba(255,255,255,0.15)' } : {}}>
              {title}
            </h2>
            <div className="w-28 h-[5px] rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light shadow-[0_0_15px_hsl(0_80%_42%/0.3)]" />
            <p className={`text-lg leading-[1.85] max-w-lg font-medium ${dark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{description}</p>
          </motion.div>
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold tracking-[0.2em] uppercase text-primary">Why Businesses Choose This</h3>
            <ul className="space-y-2">
              {benefits.map((b) => (
                <li key={b} className={`flex items-start gap-3 text-sm font-medium ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{b}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {useCases.map((u, j) => (
              <motion.span key={u} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + j * 0.06 }}
                className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${dark ? "text-primary-foreground/55 bg-primary-foreground/[0.06] border-primary-foreground/10 hover:border-primary/40 hover:text-primary hover:bg-primary/[0.08]" : "text-muted-foreground bg-muted border-border hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04]"}`}>
                {u}
              </motion.span>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap gap-4 pt-3">
            <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-xl shadow-[0_0_30px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_55px_hsl(0_80%_42%/0.6)] transition-all duration-300 group/btn uppercase tracking-wider">
              <Car className="w-5 h-5" />Get a Quote<ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const sections: Omit<ServiceSectionProps, "reversed" | "dark" | "index">[] = [
  {
    image: PHOTO_VEHICLE_1,
    title: "Full Vehicle Wraps",
    subtitle: "Maximum Impact",
    description: "Transform any car, van, truck, or SUV into a full rolling advertisement with our premium Columbus vehicle wraps. Full wraps cover every panel with stunning, high-resolution graphics that generate up to 70,000 daily impressions — making them the most cost-effective advertising medium for Ohio businesses.",
    benefits: [
      "Premium 3M and Avery cast vinyl with 7+ year outdoor durability",
      "Professional installation by certified wrap technicians in Columbus",
      "Custom design services — we bring your brand vision to life",
      "Paint protection included — wraps shield your vehicle's factory finish",
    ],
    useCases: ["Columbus Vehicle Wraps", "Ohio Full Wraps", "Commercial Van Wraps", "Box Truck Wraps", "SUV Branding"],
  },
  {
    image: PHOTO_VEHICLE_2,
    title: "Decals & Cut Vinyl Graphics",
    subtitle: "Precision Branding",
    description: "Custom truck decals, window graphics, door lettering, and cut vinyl logos for Ohio businesses that want professional branding without a full wrap. Perfect for adding your logo, phone number, website, and services to any vehicle in your Columbus fleet.",
    benefits: [
      "Die-cut and printed vinyl options for any design complexity",
      "Easy to apply and remove without damaging vehicle paint",
      "UV-resistant inks that won't fade in Ohio's sun and weather",
      "Affordable branding starting under $200 per vehicle",
    ],
    useCases: ["Custom Truck Decals", "Ohio Window Graphics", "Door Lettering", "Logo Decals", "Columbus Vehicle Graphics"],
  },
  {
    image: PHOTO_VEHICLE_3,
    title: "Magnetic Signs & Removable Branding",
    subtitle: "Flexible Marketing",
    description: "Heavy-duty magnetic vehicle signs that let you brand your personal vehicle for business during work hours and remove them when you're off the clock. Ideal for Columbus contractors, realtors, and service professionals who use personal vehicles.",
    benefits: [
      "Thick 30-mil magnetic material that stays put at highway speeds",
      "Full-color digital printing with laminate for weather protection",
      "Reusable — move between vehicles or store when not needed",
      "Perfect for Ohio businesses that use personal vehicles for work",
    ],
    useCases: ["Magnetic Car Signs", "Columbus Contractor Signs", "Removable Vehicle Branding", "Realtor Car Magnets", "Ohio Service Vehicles"],
  },
  {
    image: PHOTO_VEHICLE_5,
    title: "Fleet Branding & Multi-Vehicle Programs",
    subtitle: "Scale Your Brand",
    description: "Consistent, professional fleet branding for Ohio businesses with multiple vehicles. From 2 vans to 200 trucks, we design, produce, and install cohesive fleet graphics that turn your entire operation into a mobile marketing force across Columbus and statewide.",
    benefits: [
      "Volume pricing — significant discounts for multi-vehicle fleets",
      "Consistent branding across cars, vans, trucks, and trailers",
      "Fleet management program with replacement and maintenance tracking",
      "On-site installation available for Columbus-area fleets",
    ],
    useCases: ["Ohio Fleet Branding", "Columbus Fleet Wraps", "Multi-Vehicle Graphics", "Delivery Van Branding", "Service Fleet Identity"],
  },
  {
    image: PHOTO_VEHICLE_6,
    title: "Truck Lettering & Commercial Graphics",
    subtitle: "Classic & Professional",
    description: "Professional truck lettering, DOT number compliance graphics, and commercial vehicle identification for Ohio trucking companies, contractors, and service businesses. Clean, bold typography that meets FMCSA requirements while showcasing your brand across Columbus highways.",
    benefits: [
      "DOT number and USDOT compliance lettering included",
      "Reflective vinyl options for enhanced nighttime visibility",
      "Professional layout and typography design services",
      "Fast turnaround — most jobs completed within 3-5 business days",
    ],
    useCases: ["Truck Lettering Ohio", "DOT Number Graphics", "Columbus Commercial Vehicles", "Contractor Truck Signs", "Semi Truck Lettering"],
  },
];

const VehicleBranding = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Vehicle Branding & Wraps",
    description: "Professional vehicle wraps, fleet branding, truck lettering, and custom decals for Ohio businesses. Serving Columbus and all of Ohio.",
    url: "https://buckeye-brand-boost.lovable.app/vehicle-branding",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vehicle Branding Services",
      itemListElement: sections.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
    },
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
            <Sparkles className="w-4 h-4" /> Vehicle Branding & Wraps <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}>
            Turn Your Vehicles Into{" "}
            <span className="text-primary text-glow-red relative">
              Moving Billboards
              <motion.span className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} />
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-4xl mx-auto font-semibold tracking-wide leading-relaxed">
            Professional vehicle wraps, fleet branding, truck lettering, and custom decals for Columbus and Ohio businesses — turning every mile driven into powerful brand exposure.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-14 flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { num: "70K+", label: "Daily Impressions Per Wrap" },
              { num: "7+ Yr", label: "Vinyl Durability" },
              { num: "500+", label: "Vehicles Wrapped" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-black text-primary" style={{ textShadow: '0 0 25px hsl(0 80% 42% / 0.4)' }}>{stat.num}</div>
                <div className="text-xs font-bold text-primary-foreground/35 tracking-[0.2em] uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-16">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2 }}
              className="w-9 h-16 mx-auto border-2 border-primary-foreground/15 rounded-full flex items-start justify-center pt-2.5">
              <div className="w-1.5 h-4 bg-primary rounded-full shadow-[0_0_10px_hsl(0_80%_42%/0.5)]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative py-16 bg-ohio-grey-light border-b border-border/50">
        <div className="container">
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Certified Installers", desc: "3M & Avery trained professionals" },
              { icon: Truck, title: "Fleet Programs", desc: "Volume pricing for multi-vehicle jobs" },
              { icon: Shield, title: "7-Year Warranty", desc: "Premium materials built to last" },
              { icon: Star, title: "500+ Vehicles", desc: "Trusted across Columbus & Ohio" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground font-medium">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {sections.map((s, i) => (
        <ServiceSection key={s.title} {...s} index={i} reversed={i % 2 === 1} dark={i % 2 === 1} />
      ))}

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
            Ready to Brand{" "}<br className="hidden md:block" />Your Fleet?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Professional vehicle wraps, fleet graphics, and truck lettering for Ohio businesses. Every mile is a marketing opportunity.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Button size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-2xl px-16 py-10 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-widest"
              style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
              <Phone className="w-7 h-7" />
              Get Your Free Quote Today
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2.5 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleBranding;
