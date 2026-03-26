import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ohioSilhouette from "@/assets/ohio-silhouette.png";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-ohio-grey-dark">
      {/* Deep dramatic base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,20%,6%)] via-[hsl(0,40%,8%)] to-[hsl(220,20%,4%)]" />

      {/* Red radial glow behind Ohio shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1000px] h-[1000px] rounded-full bg-primary/15 blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />
      </div>
      {/* Secondary warm glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[400px] rounded-full bg-ohio-red-glow/10 blur-[120px]" />
      </div>

      {/* Ohio silhouette — large, glossy, prominent */}
      <motion.img
        src={ohioSilhouette}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 0 80px hsl(0 78% 45% / 0.4)) drop-shadow(0 0 160px hsl(0 78% 45% / 0.2)) saturate(1.3) brightness(1.1)" }}
      />

      {/* Red gradient overlay for energy */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,60%,8%)/0.9] via-[hsl(0,50%,15%)/0.25] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,4%)/0.5] via-transparent to-[hsl(0,40%,6%)/0.95]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,4%)/0.4] via-transparent to-[hsl(220,20%,4%)/0.4]" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-primary/25 border border-primary/40 rounded-full px-6 py-2.5 mb-10 backdrop-blur-md shadow-[0_0_30px_hsl(0_78%_45%/0.2)]"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-extrabold text-primary-foreground tracking-widest uppercase">Ohio's #1 Business Branding Partner</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="mb-4">
            {/* BUCKEYE — dramatic white script with heavy glow and outline */}
            <span
              className="block font-display italic text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-bold text-primary-foreground leading-[0.85] tracking-tight"
              style={{
                WebkitTextStroke: "2px rgba(0,0,0,0.6)",
                textShadow: "0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.2), 0 4px 12px rgba(0,0,0,0.8), 0 8px 30px rgba(0,0,0,0.5)",
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.15))",
              }}
            >
              Buckeye
            </span>
            {/* BIZ HUB — bold black script with depth */}
            <span
              className="block font-display text-6xl md:text-7xl lg:text-[8rem] xl:text-[9.5rem] font-bold leading-[0.9] mt-1"
              style={{
                color: "#0d0d1a",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.12)",
                textShadow: "0 0 30px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6), 0 0 60px hsl(0 78% 45% / 0.3)",
              }}
            >
              Biz Hub
            </span>
          </h1>
        </motion.div>

        {/* Animated red accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-40 h-1.5 mx-auto my-8 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, hsl(0 78% 45%), hsl(0 78% 60%), hsl(0 78% 45%), transparent)" }}
        />

        {/* Tagline — bigger, bolder, glowing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mt-4 mb-4 tracking-tight"
          style={{ textShadow: "0 0 30px rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.6)" }}
        >
          Rooted in Ohio. Built to Grow Your Business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/55 mb-14 max-w-3xl mx-auto font-medium"
        >
          Ohio's one-stop hub for business printing, promotional products, and vehicle branding.
        </motion.p>

        {/* Commanding buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-xl px-14 py-8 rounded-xl shadow-[0_0_40px_hsl(0_78%_45%/0.5),0_0_80px_hsl(0_78%_45%/0.2)] hover:shadow-[0_0_60px_hsl(0_78%_45%/0.7),0_0_120px_hsl(0_78%_45%/0.3)] transition-all duration-400 group uppercase tracking-wider"
            style={{ animationName: 'pulse-glow', animationDuration: '3s', animationIterationCount: 'infinite' }}
          >
            Get Your Free Quote Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/80 font-bold text-xl px-14 py-8 rounded-xl backdrop-blur-md transition-all duration-400 tracking-wider uppercase"
          >
            Browse Products
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-10 md:gap-20"
        >
          {[
            { value: "500+", label: "Ohio Businesses Served" },
            { value: "24hr", label: "Quote Turnaround" },
            { value: "100%", label: "Satisfaction Guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary tracking-tight" style={{ textShadow: "0 0 25px hsl(0 78% 45% / 0.6), 0 0 50px hsl(0 78% 45% / 0.3)" }}>{stat.value}</div>
              <div className="text-xs md:text-sm text-primary-foreground/45 font-bold tracking-widest uppercase mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-7 h-11 rounded-full border-2 border-primary-foreground/25 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full shadow-[0_0_8px_hsl(0_78%_45%/0.6)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
