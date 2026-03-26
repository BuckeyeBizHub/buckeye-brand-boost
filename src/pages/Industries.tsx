import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Stethoscope, Wrench, Car, TreePine, Home, UtensilsCrossed, HardHat, SmilePlus, Sparkles, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 0.68, 0, 1.2] } }),
};

const industries = [
  {
    icon: SmilePlus,
    title: "Dentists & Dental Practices",
    description: "Appointment cards, branded merch for patients, window graphics, and vehicle wraps that keep your practice top-of-mind across Ohio neighborhoods.",
    num: "01",
  },
  {
    icon: Stethoscope,
    title: "Medical Offices & Doctors",
    description: "Professional brochures, prescription pads, lobby signage, branded scrubs, and fleet branding that builds trust before patients walk through the door.",
    num: "02",
  },
  {
    icon: Wrench,
    title: "HVAC & Plumbing Services",
    description: "Truck wraps, door hangers, yard signs, branded uniforms, and promo magnets that turn every service call into a neighborhood billboard.",
    num: "03",
  },
  {
    icon: Car,
    title: "Auto Dealerships & Automotive",
    description: "Showroom banners, key tags, license plate frames, branded apparel for staff, and lot signage that drives foot traffic and brand recognition.",
    num: "04",
  },
  {
    icon: TreePine,
    title: "Lawn Care & Landscaping",
    description: "Trailer wraps, yard signs, door hangers, branded hats & tees, and business cards that grow your client base season after season.",
    num: "05",
  },
  {
    icon: Home,
    title: "Real Estate Agents & Agencies",
    description: "For Sale signs, open house flyers, branded closing gifts, vehicle magnets, and premium business cards that close deals and build referrals.",
    num: "06",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Bars",
    description: "Menus, table tents, branded merchandise, window decals, loyalty cards, and delivery vehicle wraps that keep customers coming back hungry.",
    num: "07",
  },
  {
    icon: HardHat,
    title: "Construction & Contractors",
    description: "Truck & trailer wraps, hard hat stickers, yard signs, branded workwear, and job-site banners that build credibility on every project.",
    num: "08",
  },
];

const trustBadges = [
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Shield, label: "Quality Guaranteed" },
  { icon: Sparkles, label: "Ohio Owned" },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-ohio-grey-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,3%)] via-ohio-grey-dark to-[hsl(0,0%,8%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.1] rounded-full blur-[180px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

        {/* Large decorative number */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18rem] md:text-[28rem] font-black text-primary/[0.03] select-none pointer-events-none leading-none">
          8
        </div>

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] border border-primary/25 px-6 py-2.5 rounded-full shadow-[0_0_30px_hsl(var(--ohio-red)/0.15)]">
            <Star className="w-3.5 h-3.5 fill-primary" /> 8 Industries — Tailored Solutions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-primary-foreground leading-[0.9] mb-4">
            Industries We
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8">
            <span className="text-primary text-glow-red">Serve</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 rounded-full" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/75 max-w-4xl mx-auto font-medium leading-relaxed">
            Tailored printing, promotional products, and vehicle branding for Ohio's key businesses.
          </motion.p>

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-6 mt-12">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-primary-foreground/50 text-sm font-bold tracking-wide uppercase">
                <b.icon className="w-4 h-4 text-primary" />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ohio-grey-light via-background to-ohio-grey-light" />
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px]" />

        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4 bg-primary/[0.08] px-4 py-1.5 rounded-full">Specialized Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              Your Industry,{" "}
              <span className="text-primary relative">
                Our Expertise
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full" />
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-2xl p-8 lg:p-9 border border-border hover:border-primary/40 card-lift relative overflow-hidden shadow-sm hover:shadow-[0_20px_60px_-12px_hsl(var(--ohio-red)/0.15),0_8px_24px_-8px_rgba(0,0,0,0.12)]"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-ohio-red-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Corner number */}
                <span className="absolute top-4 right-4 font-display text-4xl font-black text-primary/[0.07] group-hover:text-primary/[0.15] transition-colors duration-500 select-none">{ind.num}</span>

                <div className="relative">
                  <div className="w-16 h-16 mb-7 rounded-2xl bg-primary/[0.1] group-hover:bg-primary/[0.2] flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_30px_hsl(var(--ohio-red)/0.25)] group-hover:scale-110">
                    <ind.icon className="w-8 h-8 text-primary transition-transform duration-400 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-xl font-black text-card-foreground mb-3 leading-tight tracking-tight">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm leading-[1.7] mb-7">{ind.description}</p>
                  <Link to="/contact">
                    <Button size="sm" className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold text-xs shadow-[0_4px_15px_hsl(var(--ohio-red)/0.25)] hover:shadow-[0_4px_25px_hsl(var(--ohio-red)/0.45)] transition-all duration-300 group/btn">
                      Get a Quote for My Industry
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-ohio-grey-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-ohio-grey-dark to-[hsl(0,0%,8%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

        {/* Decorative star */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20rem] font-black text-primary/[0.03] select-none pointer-events-none leading-none">★</div>

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center gap-3 mb-8">
            {[Star, Sparkles, Star].map((Icon, i) => (
              <Icon key={i} className="w-5 h-5 text-primary/60 fill-primary/40" />
            ))}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-4 leading-[0.9] text-glow-white">
            Ready to Grow Your Business
          </motion.h2>
          <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8">
            <span className="text-primary text-glow-red">in Your Industry?</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 rounded-full" />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-primary-foreground/70 mb-14 font-medium">
            Let's build your brand together.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-xl px-16 py-9 rounded-xl shadow-[0_0_60px_hsl(var(--ohio-red)/0.45)] hover:shadow-[0_0_90px_hsl(var(--ohio-red)/0.65)] transition-all duration-400 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                Get Your Free Quote Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
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
