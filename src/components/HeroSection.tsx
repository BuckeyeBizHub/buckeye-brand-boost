import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import buckeyeLogo from "@/assets/buckeye-logo.png";
import { ArrowRight, Printer, Gift, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-ohio-grey-dark">
      {/* Deep cinematic base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0,40%,8%)_0%,hsl(220,30%,3%)_50%,hsl(220,35%,1%)_100%)]" />

      {/* Dramatic red spotlights */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/[0.12] blur-[200px]" />
      <div className="absolute bottom-[15%] left-[30%] w-[500px] h-[500px] rounded-full bg-ohio-red-glow/[0.06] blur-[180px]" />
      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] rounded-full bg-primary/[0.08] blur-[120px]" />

      {/* Subtle diagonal lines texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.08) 40px,
            rgba(255,255,255,0.08) 41px
          )`,
        }}
      />

      {/* Vignette overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(220,35%,1%)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,35%,2%)/0.6] via-transparent to-[hsl(0,40%,3%)]" />

      {/* Red accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_50px_hsl(0_85%_40%/0.6)]" />

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 bg-primary/20 border border-primary/30 rounded-full px-6 py-2.5 mb-10 backdrop-blur-xl"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[0.65rem] font-bold text-primary-foreground/80 tracking-[0.2em] uppercase">
            Ohio's #1 Business Branding Partner
          </span>
        </motion.div>

        {/* Logo — the hero centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <motion.img
            src={buckeyeLogo}
            alt="Buckeye Biz Hub"
            className="w-[300px] md:w-[400px] lg:w-[480px] xl:w-[540px] mx-auto relative z-10"
            style={{
              filter:
                "drop-shadow(0 0 80px hsl(0 85% 40% / 0.55)) drop-shadow(0 0 160px hsl(0 85% 40% / 0.2)) drop-shadow(0 30px 50px rgba(0,0,0,0.9))",
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
          {/* Glow ring behind logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[550px] lg:w-[650px] h-[400px] md:h-[550px] lg:h-[650px] rounded-full bg-primary/[0.06] blur-[100px]" />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-foreground mb-5 tracking-tight leading-[1]"
          style={{
            textShadow:
              "0 0 60px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.9)",
          }}
        >
          Rooted in Ohio.
          <br />
          <span className="text-primary text-glow-red">Built to Grow</span> Your Business.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-primary-foreground/45 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Ohio's one-stop hub for business printing, promotional products, and vehicle branding.
        </motion.p>

        {/* Service pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {[
            { icon: Printer, label: "Business Printing" },
            { icon: Gift, label: "Promotional Products" },
            { icon: Truck, label: "Vehicle Branding" },
          ].map((svc) => (
            <div
              key={svc.label}
              className="flex items-center gap-2.5 bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-full px-5 py-2.5 backdrop-blur-md"
            >
              <svc.icon className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary-foreground/70 tracking-wide uppercase">
                {svc.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_85%_40%/0.5),0_0_100px_hsl(0_85%_40%/0.15)] hover:shadow-[0_0_80px_hsl(0_85%_40%/0.7),0_0_140px_hsl(0_85%_40%/0.25)] transition-all duration-500 group uppercase tracking-wider"
              style={{ animation: "pulse-glow 3s infinite" }}
            >
              Get Your Free Quote Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
          <Link to="/promotional-products">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/[0.07] hover:border-primary-foreground/50 font-bold text-lg sm:text-xl px-12 py-8 rounded-2xl backdrop-blur-md transition-all duration-500 tracking-wider uppercase"
            >
              Browse Products
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 md:mt-28 grid grid-cols-3 max-w-3xl mx-auto"
        >
          {[
            { value: "500+", label: "Ohio Businesses Served" },
            { value: "24hr", label: "Quote Turnaround" },
            { value: "100%", label: "Satisfaction Guarantee" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-4 ${i !== 2 ? "border-r border-primary-foreground/10" : ""}`}
            >
              <div className="text-4xl md:text-6xl font-black text-primary text-glow-red mb-2">
                {stat.value}
              </div>
              <div className="text-[0.6rem] md:text-[0.7rem] text-primary-foreground/35 font-bold tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-primary-foreground/15 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full shadow-[0_0_12px_hsl(0_85%_40%/0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
