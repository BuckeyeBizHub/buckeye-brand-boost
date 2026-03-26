import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ohioSilhouette from "@/assets/ohio-silhouette.png";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-ohio-grey-dark">
      {/* Deep base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,3%)] via-[hsl(0,40%,5%)] to-[hsl(220,30%,2%)]" />

      {/* Red radial glow — more intense */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1300px] h-[1300px] rounded-full bg-primary/[0.15] blur-[220px]" />
      </div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[400px] rounded-full bg-ohio-red-glow/[0.1] blur-[120px]" />
      </div>

      {/* Ohio silhouette */}
      <motion.img
        src={ohioSilhouette}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 0 100px hsl(0 85% 40% / 0.45)) drop-shadow(0 0 200px hsl(0 85% 40% / 0.2)) saturate(1.5) brightness(1.15)" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,50%,4%)/0.95] via-[hsl(0,40%,10%)/0.15] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,30%,3%)/0.6] via-transparent to-[hsl(0,35%,4%)/0.97]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,2%)/0.5] via-transparent to-[hsl(220,30%,2%)/0.5]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 bg-primary/25 border-2 border-primary/40 rounded-full px-7 py-3 mb-12 backdrop-blur-lg shadow-[0_0_40px_hsl(0_85%_40%/0.2)]"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-black text-primary-foreground/90 tracking-[0.22em] uppercase">Ohio's #1 Business Branding Partner</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 55, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="mb-4">
            <span
              className="block font-display italic text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] font-black text-primary-foreground leading-[0.82]"
              style={{
                WebkitTextStroke: "3px rgba(0,0,0,0.7)",
                textShadow: "0 0 60px rgba(255,255,255,0.55), 0 0 120px rgba(255,255,255,0.2), 0 8px 20px rgba(0,0,0,0.9), 0 16px 50px rgba(0,0,0,0.5)",
                filter: "drop-shadow(0 0 30px rgba(255,255,255,0.15))",
              }}
            >
              Buckeye
            </span>
            <span
              className="block font-display text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-black leading-[0.85] mt-1"
              style={{
                color: "#080818",
                WebkitTextStroke: "2px rgba(255,255,255,0.12)",
                textShadow: "0 0 40px rgba(0,0,0,0.95), 0 8px 30px rgba(0,0,0,0.7), 0 0 80px hsl(0 85% 40% / 0.3)",
              }}
            >
              Biz Hub
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-52 h-1 mx-auto my-8 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, hsl(0 85% 40%), hsl(0 85% 55%), hsl(0 85% 40%), transparent)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-4xl lg:text-5xl font-black text-primary-foreground mt-2 mb-5 tracking-tight"
          style={{ textShadow: "0 0 40px rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.7)" }}
        >
          Rooted in Ohio. Built to Grow Your Business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/45 mb-16 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Ohio's one-stop hub for business printing, promotional products, and vehicle branding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-14 py-9 rounded-xl shadow-[0_0_50px_hsl(0_85%_40%/0.55)] hover:shadow-[0_0_80px_hsl(0_85%_40%/0.75)] transition-all duration-400 group uppercase tracking-wider"
              style={{ animation: 'pulse-glow 3s infinite' }}
            >
              Get Your Free Quote Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
          <Link to="/promotional-products">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/70 font-bold text-lg sm:text-xl px-14 py-9 rounded-xl backdrop-blur-md transition-all duration-400 tracking-wider uppercase"
            >
              Browse Products
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-14 md:gap-24"
        >
          {[
            { value: "500+", label: "Ohio Businesses Served" },
            { value: "24hr", label: "Quote Turnaround" },
            { value: "100%", label: "Satisfaction Guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-6xl font-black text-primary text-glow-red">{stat.value}</div>
              <div className="text-[0.7rem] md:text-xs text-primary-foreground/35 font-bold tracking-[0.22em] uppercase mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-primary-foreground/20 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full shadow-[0_0_12px_hsl(0_85%_40%/0.7)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
