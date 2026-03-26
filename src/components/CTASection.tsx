import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      {/* Vibrant layered background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,85%,38%)] via-primary to-[hsl(0,70%,35%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-foreground/[0.04] rounded-full blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="container relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary-foreground mb-6 leading-[0.95] text-glow-white">
            Ready to Grow Your{" "}
            <br className="hidden md:block" />
            Ohio Business?
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-primary-foreground/75 mb-14 font-medium"
        >
          Let's build your brand together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-lg sm:text-xl px-12 py-8 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_60px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-wider">
            <Phone className="w-5 h-5" />
            Get a Free Quote in 24 Hours
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
