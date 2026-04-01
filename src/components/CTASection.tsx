import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-32 lg:py-44 relative overflow-hidden">
      {/* Deep black layered background */}
      <div className="absolute inset-0 bg-[hsl(0,0%,4%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,3%)] via-[hsl(0,0%,7%)] to-[hsl(0,0%,3%)]" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/[0.08] rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[180px]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Decorative star */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22rem] font-black text-primary/[0.03] select-none pointer-events-none leading-none">★</div>

      <div className="container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-10"
        >
          {[Star, Star, Star, Star, Star].map((Icon, i) => (
            <Icon key={i} className="w-6 h-6 text-primary/70 fill-primary/50" />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground mb-8 leading-[0.88] text-glow-white">
            Ready to Grow Your{" "}
            <br className="hidden md:block" />
            <span className="text-primary text-glow-red">Ohio Business?</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/50 mb-16 font-semibold italic font-display"
        >
          Let's build your brand together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-xl sm:text-2xl px-16 py-10 rounded-2xl shadow-[0_0_60px_hsl(0_85%_40%/0.5)] hover:shadow-[0_0_100px_hsl(0_85%_40%/0.7)] transition-all duration-400 group uppercase tracking-widest" style={{ animation: 'pulse-glow 3s infinite' }}>
              <Phone className="w-6 h-6" />
              Get a Free Quote in 24 Hours
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
