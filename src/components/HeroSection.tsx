import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ohioSilhouette from "@/assets/ohio-silhouette.png";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-ohio-grey-dark">
      {/* Ultra-deep layered base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,35%,2%)] via-[hsl(0,45%,4%)] to-[hsl(220,35%,1%)]" />

      {/* Primary red radial — intense center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1400px] h-[1400px] rounded-full bg-primary/[0.18] blur-[250px]" />
      </div>
      {/* Secondary upper glow */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[700px] h-[500px] rounded-full bg-ohio-red-glow/[0.14] blur-[140px]" />
      </div>
      {/* Lower warm glow */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2">
        <div className="w-[800px] h-[400px] rounded-full bg-primary/[0.08] blur-[160px]" />
      </div>

      {/* Ohio silhouette — glossy and prominent */}
      <motion.img
        src={ohioSilhouette}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{
          filter: "drop-shadow(0 0 120px hsl(0 85% 40% / 0.5)) drop-shadow(0 0 250px hsl(0 85% 40% / 0.25)) saturate(1.6) brightness(1.2) contrast(1.1)",
        }}
      />

      {/* Red gradient overlay for dramatic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,60%,3%)] via-[hsl(0,50%,8%)/0.3] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,35%,2%)/0.7] via-transparent to-[hsl(0,40%,3%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,35%,1%)/0.55] via-transparent to-[hsl(220,35%,1%)/0.55]" />
      {/* Red wash overlay — cinematic */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-primary/[0.04]" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />

      {/* Red accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_40px_hsl(0_85%_40%/0.5)]" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 bg-primary/30 border-2 border-primary/45 rounded-full px-8 py-3.5 mb-14 backdrop-blur-xl shadow-[0_0_50px_hsl(0_85%_40%/0.25)]"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[0.7rem] font-black text-primary-foreground/90 tracking-[0.25em] uppercase">Ohio's #1 Business Branding Partner</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.93 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <h1 className="mb-6">
            <span
              className="block font-display italic text-[7rem] md:text-[10rem] lg:text-[13rem] xl:text-[16rem] font-black text-primary-foreground leading-[0.78]"
              style={{
                WebkitTextStroke: "3.5px rgba(0,0,0,0.75)",
                textShadow: "0 0 80px rgba(255,255,255,0.6), 0 0 160px rgba(255,255,255,0.25), 0 10px 25px rgba(0,0,0,0.95), 0 20px 60px rgba(0,0,0,0.5)",
                filter: "drop-shadow(0 0 40px rgba(255,255,255,0.18))",
              }}
            >
              Buckeye
            </span>
            <span
              className="block font-display text-[4.5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-black leading-[0.82] mt-2"
              style={{
                color: "#060614",
                WebkitTextStroke: "2px rgba(255,255,255,0.1)",
                textShadow: "0 0 50px rgba(0,0,0,0.98), 0 10px 35px rgba(0,0,0,0.8), 0 0 100px hsl(0 85% 40% / 0.35)",
              }}
            >
              Biz Hub
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-60 h-1.5 mx-auto my-10 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, hsl(0 85% 38%), hsl(0 90% 52%), hsl(0 85% 38%), transparent)", boxShadow: "0 0 30px hsl(0 85% 40% / 0.4)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mt-2 mb-6 tracking-tight leading-[0.95]"
          style={{ textShadow: "0 0 50px rgba(255,255,255,0.4), 0 0 100px rgba(255,255,255,0.15), 0 6px 20px rgba(0,0,0,0.8)" }}
        >
          Rooted in Ohio. Built to Grow Your Business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/40 mb-16 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Ohio's one-stop hub for business printing, promotional products, and vehicle branding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-xl sm:text-2xl px-16 py-10 rounded-2xl shadow-[0_0_60px_hsl(0_85%_40%/0.6),0_0_120px_hsl(0_85%_40%/0.2)] hover:shadow-[0_0_90px_hsl(0_85%_40%/0.8),0_0_160px_hsl(0_85%_40%/0.3)] transition-all duration-500 group uppercase tracking-widest"
              style={{ animation: 'pulse-glow 3s infinite' }}
            >
              Get Your Free Quote Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
          <Link to="/promotional-products">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60 font-bold text-xl sm:text-2xl px-16 py-10 rounded-2xl backdrop-blur-md transition-all duration-500 tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              Browse Products
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-28 flex flex-wrap items-center justify-center gap-16 md:gap-28"
        >
          {[
            { value: "500+", label: "Ohio Businesses Served" },
            { value: "24hr", label: "Quote Turnaround" },
            { value: "100%", label: "Satisfaction Guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-7xl font-black text-primary text-glow-red">{stat.value}</div>
              <div className="text-[0.65rem] md:text-xs text-primary-foreground/30 font-bold tracking-[0.25em] uppercase mt-3">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="w-8 h-14 rounded-full border-2 border-primary-foreground/15 flex items-start justify-center p-2.5"
        >
          <div className="w-1.5 h-3.5 bg-primary rounded-full shadow-[0_0_15px_hsl(0_85%_40%/0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
