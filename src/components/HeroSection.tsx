import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import productCollage from "@/assets/product-collage-hero.jpg";
import davidHeadshot from "@/assets/david-stein-headshot.jpg";
import luxuryCards from "@/assets/luxury-gold-foil-cards.jpg";
import trifoldBrochure from "@/assets/trifold-brochure-sample.png";
import customDecals from "@/assets/usa-250th-anniversary-decal.jpeg";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import TrustBadges from "@/components/TrustBadges";

const showcaseItems = [
  { img: luxuryCards, alt: "Luxury gold foil raised business cards", label: "Gold Foil Cards" },
  { img: trifoldBrochure, alt: "Premium tri-fold brochure printing", label: "Tri-Fold Brochures" },
  { img: customDecals, alt: "USA 250th Anniversary custom decal", label: "Custom Decals" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full flex flex-col overflow-hidden bg-ohio-grey-dark pt-20 sm:pt-24 pb-10 sm:pb-12 lg:min-h-[88vh]">
      {/* Background: product collage */}
      <div className="absolute inset-0">
        <img
          src={productCollage}
          alt="Buckeye Biz Hub branded products – shirts, hats, business cards, vehicle wraps"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[hsl(220,30%,2%)/0.88]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[hsl(0,40%,5%)] via-[hsl(0,30%,4%)/0.80] to-transparent" />
      </div>

      {/* Red accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Main content area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 flex-1 flex flex-col lg:flex-row items-center gap-6 lg:gap-14">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Concierge badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-extrabold text-primary tracking-[0.2em] uppercase bg-primary/[0.08] border border-primary/15 px-4 py-2 rounded-full">
              Your Buckeye Branding Concierge
            </span>
          </motion.div>

          <h1
            className="text-[clamp(2.75rem,8vw,5rem)] lg:text-[clamp(4rem,5.5vw,6rem)] font-black text-primary-foreground mb-3 tracking-tighter leading-[0.9]"
            style={{
              textShadow: "0 6px 40px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,1)",
            }}
          >
            Buckeye
            <br />
            <span className="text-primary text-glow-red">Biz Hub</span>
          </h1>

          <p
            className="text-[clamp(1.15rem,3.5vw,1.875rem)] text-primary-foreground font-bold mb-2 leading-tight max-w-2xl mx-auto lg:mx-0"
            style={{
              textShadow: "0 3px 25px rgba(0,0,0,0.8)",
            }}
          >
            Rooted in Ohio.
            <br />
            Built to Grow Your Business.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-primary-foreground/60 mb-2 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Your dedicated Ohio branding concierge — we handle every detail from premium business cards and vehicle wraps to custom apparel and signage, so you can focus on what you do best: growing your business.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs sm:text-sm text-primary-foreground/40 mb-6 max-w-lg mx-auto lg:mx-0 italic"
          >
            "Think of us as your personal branding department — without the overhead." — David Stein
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-2xl shadow-[0_0_50px_hsl(0_85%_40%/0.5)] hover:shadow-[0_0_80px_hsl(0_85%_40%/0.7)] transition-all duration-500 group uppercase tracking-wider"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>
              <a href="tel:+16145613358">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 font-bold text-sm px-6 py-5 rounded-2xl gap-2"
                >
                  <Phone className="w-4 h-4" />
                  (614) 561-3358
                </Button>
              </a>
            </div>
            <Link to="/graduation-2026" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary via-ohio-red-light to-primary text-primary-foreground font-black text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-2xl shadow-[0_0_50px_hsl(0_85%_40%/0.55)] hover:shadow-[0_0_80px_hsl(0_85%_40%/0.75)] transition-all duration-500 group tracking-wide border-2 border-[hsl(45,70%,55%)] hover:scale-[1.02]"
              >
                <span className="text-lg sm:text-xl">🎓</span>
                <span className="text-center leading-tight">2026 Graduation Special – Save 20% on Banners & Party Printing</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-5"
          >
            <TrustBadges variant="dark" size="sm" className="[&_img]:h-12 [&_img]:sm:h-14 gap-4 sm:gap-6" />
          </motion.div>
        </div>

        {/* Right: David headshot + Premium printing showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-shrink-0 hidden lg:flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="w-64 xl:w-72 aspect-[3/3.7] rounded-3xl overflow-hidden border-2 border-primary/25 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
              <img
                src={davidHeadshot}
                alt="David Stein – Your Buckeye Branding Concierge, Buckeye Biz Hub, Columbus Ohio"
                width={300}
                height={370}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,30%,3%)/0.5] to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary px-5 xl:px-7 py-2 xl:py-2.5 rounded-xl shadow-lg">
              <p className="text-primary-foreground font-bold text-xs xl:text-sm tracking-wide uppercase whitespace-nowrap">
                David Stein · Branding Concierge
              </p>
            </div>
          </div>

          {/* Premium printing showcase strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-3 mt-4"
          >
            {showcaseItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.12, duration: 0.5 }}
                className="group relative w-[5.5rem] xl:w-24"
              >
                <div className="aspect-square rounded-xl overflow-hidden border border-primary-foreground/15 shadow-lg group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <p className="text-[0.5rem] xl:text-[0.55rem] text-primary-foreground/50 font-bold text-center mt-1.5 uppercase tracking-wider leading-tight">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats – in normal flow, not absolute */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="relative z-10 grid grid-cols-3 max-w-md sm:max-w-xl mx-auto px-4 pb-6 sm:pb-8"
      >
        {[
          { value: "500+", label: "Ohio Businesses" },
          { value: "24hr", label: "Quote Turnaround" },
          { value: "100%", label: "Satisfaction" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center py-2 ${i !== 2 ? "border-r border-primary-foreground/10" : ""}`}
          >
            <div className="text-2xl sm:text-3xl font-black text-primary text-glow-red mb-1">{stat.value}</div>
            <div className="text-[0.55rem] sm:text-[0.6rem] text-primary-foreground/40 font-bold tracking-[0.15em] uppercase">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
