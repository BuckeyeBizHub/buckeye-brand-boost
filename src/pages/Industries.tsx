import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Stethoscope, Wrench, Car, TreePine, Home, UtensilsCrossed, HardHat, SmilePlus } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const industries = [
  {
    icon: SmilePlus,
    title: "Dentists & Dental Practices",
    description: "Appointment cards, branded merch for patients, window graphics, and vehicle wraps that keep your practice top-of-mind across Ohio neighborhoods.",
  },
  {
    icon: Stethoscope,
    title: "Medical Offices & Doctors",
    description: "Professional brochures, prescription pads, lobby signage, branded scrubs, and fleet branding that builds trust before patients walk through the door.",
  },
  {
    icon: Wrench,
    title: "HVAC & Plumbing Services",
    description: "Truck wraps, door hangers, yard signs, branded uniforms, and promo magnets that turn every service call into a neighborhood billboard.",
  },
  {
    icon: Car,
    title: "Auto Dealerships & Automotive",
    description: "Showroom banners, key tags, license plate frames, branded apparel for staff, and lot signage that drives foot traffic and brand recognition.",
  },
  {
    icon: TreePine,
    title: "Lawn Care & Landscaping",
    description: "Trailer wraps, yard signs, door hangers, branded hats & tees, and business cards that grow your client base season after season.",
  },
  {
    icon: Home,
    title: "Real Estate Agents & Agencies",
    description: "For Sale signs, open house flyers, branded closing gifts, vehicle magnets, and premium business cards that close deals and build referrals.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Bars",
    description: "Menus, table tents, branded merchandise, window decals, loyalty cards, and delivery vehicle wraps that keep customers coming back hungry.",
  },
  {
    icon: HardHat,
    title: "Construction & Contractors",
    description: "Truck & trailer wraps, hard hat stickers, yard signs, branded workwear, and job-site banners that build credibility on every project.",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-ohio-grey-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,5%)] via-ohio-grey-dark to-[hsl(0,0%,10%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.07] rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.1] border border-primary/20 px-5 py-2 rounded-full">
            <Star className="w-3.5 h-3.5 fill-primary" /> Tailored Solutions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-6">
            Industries We{" "}
            <span className="text-primary text-glow-red">Serve</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-2xl text-primary-foreground/70 max-w-3xl mx-auto font-medium">
            Tailored printing, promotional products, and vehicle branding for Ohio's key businesses.
          </motion.p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24 lg:py-32 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="container relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 card-lift relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-primary/[0.08] group-hover:bg-primary/[0.18] flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_25px_hsl(var(--ohio-red)/0.2)]">
                    <ind.icon className="w-7 h-7 text-primary transition-transform duration-400 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-lg font-black text-card-foreground mb-3 leading-tight">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{ind.description}</p>
                  <Link to="/contact">
                    <Button size="sm" className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold text-xs shadow-sm hover:shadow-[0_0_20px_hsl(var(--ohio-red)/0.3)] transition-all duration-300 group/btn">
                      Get a Quote
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
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-ohio-grey-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,6%)] via-ohio-grey-dark to-[hsl(0,0%,10%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

        <div className="container relative text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[0.95] text-glow-white">
            Ready to Grow Your Business
            <br className="hidden md:block" />
            <span className="text-primary text-glow-red"> in Your Industry?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-primary-foreground/70 mb-12 font-medium">
            Let's build your brand together.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-lg px-14 py-8 rounded-xl shadow-[0_0_40px_hsl(var(--ohio-red)/0.4)] hover:shadow-[0_0_60px_hsl(var(--ohio-red)/0.6)] transition-all duration-400 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                Get Your Free Quote Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
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
