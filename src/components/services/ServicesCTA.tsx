"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";

const ServicesCTA = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,14%,12%)] via-primary to-[hsl(216,14%,12%)]" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/[0.05] rounded-full hidden" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-foreground/[0.05] rounded-full hidden" />

    <div className="container relative text-center max-w-3xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight"
        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
      >
        Not sure where to start?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-xl md:text-2xl text-primary-foreground/80 mb-12 font-semibold"
      >
        Tell us what you're working on. We'll tell you what makes sense, and what doesn't.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/contact">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_70px_rgba(255,255,255,0.2)] transition-all duration-300 group "
          >
            <Phone className="w-6 h-6" />
            Get your free quote in 24 hours
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesCTA;
