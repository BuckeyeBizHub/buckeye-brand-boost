import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ohioSilhouette from "@/assets/ohio-silhouette.png";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-ohio-grey-dark">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ohio-grey-dark via-[hsl(220,15%,8%)] to-[hsl(0,30%,12%)]" />

      {/* Radial glow behind Ohio shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Ohio silhouette background */}
      <motion.img
        src={ohioSilhouette}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 0 60px hsl(0 78% 45% / 0.3))" }}
      />

      {/* Overlay with dramatic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ohio-grey-dark/40 via-transparent to-ohio-grey-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-ohio-grey-dark/60 via-transparent to-ohio-grey-dark/60" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-primary-foreground/90 tracking-wide uppercase">Ohio's #1 Business Branding Partner</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo text */}
          <h1 className="mb-2">
            <span className="block font-display italic text-7xl md:text-8xl lg:text-[10rem] font-bold text-primary-foreground text-glow-white leading-none" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}>
              Buckeye
            </span>
            <span className="block font-display text-5xl md:text-6xl lg:text-8xl font-bold leading-none" style={{ color: "#1a1a2e", WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
              Biz Hub
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-foreground mt-4 mb-3 text-glow-white tracking-tight"
        >
          Rooted in Ohio. Built to Grow Your Business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/60 mb-12 max-w-2xl mx-auto font-medium"
        >
          Ohio's one-stop hub for business printing, promotional products, and vehicle branding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-extrabold text-lg px-10 py-7 shadow-[0_0_30px_hsl(0_78%_45%/0.4)] hover:shadow-[0_0_50px_hsl(0_78%_45%/0.6)] transition-all duration-300 group">
            Get Your Free Quote Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/70 font-bold text-lg px-10 py-7 backdrop-blur-sm transition-all duration-300">
            Browse Products
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "500+", label: "Ohio Businesses Served" },
            { value: "24hr", label: "Quote Turnaround" },
            { value: "100%", label: "Satisfaction Guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary text-glow-red">{stat.value}</div>
              <div className="text-xs md:text-sm text-primary-foreground/50 font-medium tracking-wide uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
