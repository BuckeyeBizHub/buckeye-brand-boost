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
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[hsl(220,30%,2%)/0.88]" />
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[hsl(0,40%,5%)] via-[hsl(0,30%,4%)/0.80] to-transparent" />
      </div>

      {/* Red accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-36 pb-28 flex flex-col lg:flex-row items-center gap-20">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary-foreground mb-6 tracking-tighter leading-[0.9]"
            style={{
              textShadow: "0 6px 40px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,1)",
            }}
          >
            Buckeye
            <br />
            <span className="text-primary text-glow-red">Biz Hub</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl text-primary-foreground font-bold mb-5 leading-tight max-w-2xl mx-auto lg:mx-0"
            style={{
              textShadow: "0 3px 25px rgba(0,0,0,0.8)",
            }}
          >
            Rooted in Ohio.
            <br />
            Built to Grow Your Business.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-primary-foreground/50 mb-12 max-w-lg mx-auto lg:mx-0"
          >
            Business printing, promotional products & vehicle branding — Columbus, Ohio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-xl px-14 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_85%_40%/0.5)] hover:shadow-[0_0_80px_hsl(0_85%_40%/0.7)] transition-all duration-500 group uppercase tracking-wider"
              >
                Get Your Free Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right: David headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-shrink-0 hidden lg:block"
        >
          <div className="relative">
            <div className="w-[360px] h-[430px] rounded-3xl overflow-hidden border-2 border-primary/25 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
              <img
                src={davidHeadshot}
                alt="David Stein – The Buckeye Branding Czar, Buckeye Biz Hub, Columbus Ohio"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,30%,3%)/0.5] to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary px-7 py-2.5 rounded-xl">
              <p className="text-primary-foreground font-bold text-sm tracking-wide uppercase whitespace-nowrap">
                David Stein · The Buckeye Branding Czar
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="grid grid-cols-3 max-w-xl mx-auto"
        >
          {[
            { value: "500+", label: "Ohio Businesses" },
            { value: "24hr", label: "Turnaround" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-2 ${i !== 2 ? "border-r border-primary-foreground/10" : ""}`}
            >
              <div className="text-3xl font-black text-primary text-glow-red mb-1">{stat.value}</div>
              <div className="text-[0.6rem] text-primary-foreground/40 font-bold tracking-[0.15em] uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
