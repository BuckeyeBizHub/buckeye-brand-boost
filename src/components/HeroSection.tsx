import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import productCollage from "@/assets/product-collage-hero.jpg";
import davidHeadshot from "@/assets/david-stein-headshot.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-ohio-grey-dark">
      {/* Background: product collage */}
      <div className="absolute inset-0">
        <img
          src={productCollage}
          alt="Buckeye Biz Hub branded products – shirts, hats, business cards, vehicle wraps"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,30%,3%)/0.85] via-[hsl(220,25%,3%)/0.70] to-[hsl(220,30%,3%)/0.95]" />
        {/* Strong dark-red gradient across bottom 40% */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[hsl(0,60%,8%)/0.95] via-[hsl(0,50%,6%)/0.70] to-transparent" />
      </div>

      {/* Subtle red glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[200px]" />

      {/* Red accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-primary/15 border border-primary/25 rounded-full px-5 py-2 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[0.65rem] font-bold text-primary-foreground/70 tracking-[0.18em] uppercase">
              Ohio's #1 Business Branding Partner
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 tracking-tight leading-[0.95]"
            style={{
              textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9)",
            }}
          >
            Buckeye
            <br />
            <span className="text-primary text-glow-red">Biz Hub</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/80 mb-4 font-semibold leading-snug max-w-xl mx-auto lg:mx-0"
            style={{
              textShadow: "0 2px 20px rgba(0,0,0,0.7)",
            }}
          >
            Rooted in Ohio.
            <br />
            Built to Grow Your Business.
          </motion.p>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-base md:text-lg text-primary-foreground/45 mb-10 max-w-lg mx-auto lg:mx-0 font-medium"
          >
            Business printing, promotional products & vehicle branding — all from Columbus, Ohio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_85%_40%/0.4)] hover:shadow-[0_0_60px_hsl(0_85%_40%/0.6)] transition-all duration-500 group uppercase tracking-wider"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/[0.07] hover:border-primary-foreground/40 font-bold text-lg px-10 py-7 rounded-xl backdrop-blur-sm transition-all duration-500 tracking-wider uppercase"
              >
                See Our Work
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right: David headshot */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 hidden lg:block"
        >
          <div className="relative">
            <div className="w-[340px] h-[400px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <img
                src={davidHeadshot}
                alt="David Stein – Co-Founder of Buckeye Biz Hub, Columbus Ohio"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,30%,3%)/0.6] via-transparent to-transparent" />
            </div>
            {/* Name tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 backdrop-blur-sm px-6 py-2.5 rounded-xl border border-primary/50">
              <p className="text-primary-foreground font-bold text-sm tracking-wide uppercase whitespace-nowrap">
                David Stein · Co-Founder
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="grid grid-cols-3 max-w-2xl mx-auto"
        >
          {[
            { value: "500+", label: "Ohio Businesses" },
            { value: "24hr", label: "Quote Turnaround" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-3 ${i !== 2 ? "border-r border-primary-foreground/10" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-black text-primary text-glow-red mb-1">
                {stat.value}
              </div>
              <div className="text-[0.6rem] text-primary-foreground/35 font-bold tracking-[0.15em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
