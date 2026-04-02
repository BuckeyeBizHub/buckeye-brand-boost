import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ElevateCtaSection = () => (
  <section className="relative py-14 lg:py-20 overflow-hidden">
    {/* Rich gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,75%,30%)] via-primary to-[hsl(0,85%,35%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0_85%_45%/0.4),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(0_85%_25%/0.5),transparent_60%)]" />
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.3) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

    <div className="container relative text-center max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-5">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Get started with a 24-hour quote — no obligation, no hidden fees.
        </p>
        <Link to="/contact">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-lg px-12 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group uppercase tracking-wider"
          >
            <Phone className="w-5 h-5" />
            Get Your Free Quote in 24 Hours
            <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ElevateCtaSection;
