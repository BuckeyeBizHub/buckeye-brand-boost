import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ohioSilhouette from "@/assets/ohio-silhouette.png";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-ohio-grey-dark">
      {/* Deep base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,5%)] via-[hsl(0,35%,7%)] to-[hsl(220,25%,4%)]" />

      {/* Red radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1100px] h-[1100px] rounded-full bg-primary/[0.12] blur-[180px]" />
      </div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[500px] h-[350px] rounded-full bg-ohio-red-glow/[0.08] blur-[100px]" />
      </div>

      {/* Ohio silhouette */}
      <motion.img
        src={ohioSilhouette}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 0 90px hsl(0 80% 42% / 0.4)) drop-shadow(0 0 180px hsl(0 80% 42% / 0.15)) saturate(1.4) brightness(1.1)" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,50%,6%)/0.92] via-[hsl(0,40%,12%)/0.2] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,4%)/0.55] via-transparent to-[hsl(0,35%,5%)/0.95]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,3%)/0.45] via-transparent to-[hsl(220,25%,3%)/0.45]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 bg-primary/20 border border-primary/35 rounded-full px-6 py-2.5 mb-10 backdrop-blur-lg shadow-[0_0_30px_hsl(0_80%_42%/0.15)]"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-extrabold text-primary-foreground/85 tracking-[0.2em] uppercase">Ohio's #1 Business Branding Partner</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="mb-4">
            <span
              className="block font-display italic text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-black text-primary-foreground leading-[0.82]"
              style={{
                WebkitTextStroke: "2.5px rgba(0,0,0,0.65)",
                textShadow: "0 0 50px rgba(255,255,255,0.5), 0 0 100px rgba(255,255,255,0.15), 0 6px 16px rgba(0,0,0,0.85), 0 12px 40px rgba(0,0,0,0.4)",
                filter: "drop-shadow(0 0 25px rgba(255,255,255,0.12))",
              }}
            >
              Buckeye
            </span>
            <span
              className="block font-display text-6xl md:text-7xl lg:text-[8rem] xl:text-[9.5rem] font-black leading-[0.85] mt-1"
              style={{
                color: "#0a0a18",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.1)",
                textShadow: "0 0 35px rgba(0,0,0,0.9), 0 6px 24px rgba(0,0,0,0.6), 0 0 70px hsl(0 80% 42% / 0.25)",
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
          className="w-44 h-[3px] mx-auto my-8 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, hsl(0 80% 42%), hsl(0 80% 58%), hsl(0 80% 42%), transparent)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-4xl lg:text-5xl font-black text-primary-foreground mt-2 mb-4 tracking-tight"
          style={{ textShadow: "0 0 35px rgba(255,255,255,0.3), 0 4px 14px rgba(0,0,0,0.65)" }}
        >
          Rooted in Ohio. Built to Grow Your Business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/50 mb-14 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Ohio's one-stop hub for business printing, promotional products, and vehicle branding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-400 group uppercase tracking-wider"
            style={{ animation: 'pulse-glow 3s infinite' }}
          >
            Get Your Free Quote Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/70 font-bold text-lg sm:text-xl px-12 py-8 rounded-xl backdrop-blur-md transition-all duration-400 tracking-wider uppercase"
          >
            Browse Products
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {[
            { value: "500+", label: "Ohio Businesses Served" },
            { value: "24hr", label: "Quote Turnaround" },
            { value: "100%", label: "Satisfaction Guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary" style={{ textShadow: "0 0 30px hsl(0 80% 42% / 0.55), 0 0 60px hsl(0 80% 42% / 0.25)" }}>{stat.value}</div>
              <div className="text-[0.7rem] md:text-xs text-primary-foreground/40 font-bold tracking-[0.2em] uppercase mt-2">{stat.label}</div>
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
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-7 h-11 rounded-full border-2 border-primary-foreground/20 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full shadow-[0_0_10px_hsl(0_80%_42%/0.7)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
