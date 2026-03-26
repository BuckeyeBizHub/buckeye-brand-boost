import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ohioSilhouette from "@/assets/ohio-silhouette.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-ohio-grey-dark">
      {/* Ohio silhouette background */}
      <img
        src={ohioSilhouette}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ohio-grey-dark/60 via-transparent to-ohio-grey-dark/80" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo text */}
          <h1 className="mb-2">
            <span className="block font-display italic text-7xl md:text-8xl lg:text-9xl font-bold text-primary-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}>
              Buckeye
            </span>
            <span className="block font-display text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" style={{ color: "#1a1a2e", WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
              Biz Hub
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl font-bold text-primary-foreground mt-6 mb-3"
        >
          Rooted in Ohio. Built to Grow Your Business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Ohio's one-stop hub for business printing, promotional products, and vehicle branding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold text-lg px-8 py-6 shadow-lg">
            Get Your Free Quote Today
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-lg px-8 py-6">
            Browse Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
