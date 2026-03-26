import { motion } from "framer-motion";
import { Printer, Gift, Truck, ArrowRight, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Printer,
    title: "Business Printing",
    description:
      "High-quality business cards, banners, yard signs, brochures, letterhead, and custom printing that makes your business look professional and stand out.",
    items: ["Business Cards", "Banners & Signs", "Brochures", "Letterhead", "Yard Signs", "Custom Print"],
    cta: "Get a Quote",
    accent: "from-primary via-ohio-red-light to-ohio-red-glow",
  },
  {
    icon: Gift,
    title: "Promotional Products",
    description:
      "Custom shirts, hats, drinkware, bar rails, tents, giveaways, and promotional items that get your brand noticed every day.",
    items: ["Custom Apparel", "Drinkware", "Bar Rails", "Tents & Canopies", "Giveaways", "Branded Merch"],
    cta: "Get a Quote",
    accent: "from-ohio-red-glow via-primary to-ohio-red-light",
  },
  {
    icon: Truck,
    title: "Vehicle Branding",
    description:
      "Full vehicle wraps, decals, magnetic signs, fleet graphics, and vehicle branding that turns every mile into powerful mobile advertising.",
    items: ["Full Wraps", "Partial Wraps", "Decals", "Magnetic Signs", "Fleet Graphics", "Custom Design"],
    cta: "Get a Quote",
    accent: "from-primary via-ohio-red-glow to-ohio-red-light",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner — massive & dramatic */}
      <section className="relative pt-36 pb-28 lg:pt-48 lg:pb-40 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,3%)] via-[hsl(0,40%,8%)] to-[hsl(220,25%,3%)]" />
        {/* Intense red glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1100px] h-[1100px] rounded-full bg-primary/[0.15] blur-[200px]" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[400px] rounded-full bg-ohio-red-glow/[0.1] blur-[120px]" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        {/* Red accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30 shadow-[0_0_30px_hsl(0_80%_42%/0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            What We Do
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-primary-foreground leading-[0.9] mb-8"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.8)' }}
          >
            Our{" "}
            <span className="text-primary text-glow-red">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-primary-foreground/55 max-w-3xl mx-auto font-semibold tracking-wide"
          >
            Premium printing, branded merch, and vehicle branding — everything Ohio businesses need to{" "}
            <span className="text-primary font-black">dominate</span>.
          </motion.p>

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-8 h-14 mx-auto border-2 border-primary-foreground/20 rounded-full flex items-start justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Sections — bold alternating layout */}
      <section className="relative overflow-hidden">
        {services.map((s, i) => {
          const isDark = i % 2 === 1;
          return (
            <div
              key={s.title}
              className={`relative py-24 lg:py-36 overflow-hidden ${isDark ? "bg-ohio-grey-dark" : "bg-ohio-grey-light"}`}
            >
              {/* Background accents */}
              <div className={`absolute top-[-150px] ${i % 2 === 0 ? "right-[-100px]" : "left-[-100px]"} w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px]`} />
              {isDark && (
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,5%)] via-[hsl(0,30%,6%)] to-[hsl(220,25%,5%)]" />
              )}

              <div className="container relative">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
                >
                  {/* Icon Panel */}
                  <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`relative rounded-3xl p-14 lg:p-20 overflow-hidden ${isDark ? "bg-primary-foreground/[0.04] border border-primary-foreground/[0.08]" : "bg-card border border-border"} group`}
                    >
                      {/* Top gradient bar */}
                      <div className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${s.accent}`} />
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="relative flex flex-col items-center text-center">
                        {/* Large icon */}
                        <div className="w-36 h-36 mb-10 rounded-[2rem] bg-primary/[0.1] group-hover:bg-primary/[0.2] flex items-center justify-center transition-all duration-500 shadow-[0_0_0_hsl(0_80%_42%/0)] group-hover:shadow-[0_0_60px_hsl(0_80%_42%/0.25)]">
                          <s.icon className={`w-20 h-20 ${isDark ? "text-primary" : "text-primary"} transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_hsl(0_80%_42%/0.5)]`} />
                        </div>
                        {/* Item tags */}
                        <div className="flex flex-wrap justify-center gap-2.5">
                          {s.items.map((item, j) => (
                            <motion.span
                              key={item}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + j * 0.06 }}
                              className={`text-xs font-bold px-4 py-2 rounded-full border transition-colors duration-300 ${
                                isDark
                                  ? "text-primary-foreground/60 bg-primary-foreground/[0.06] border-primary-foreground/10 hover:border-primary/40 hover:text-primary"
                                  : "text-muted-foreground bg-muted border-border hover:border-primary/40 hover:text-primary"
                              }`}
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""} space-y-7`}>
                    <motion.div
                      initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <span className={`inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-5 ${
                        isDark
                          ? "text-primary bg-primary/[0.12] border border-primary/20"
                          : "text-primary bg-primary/[0.08]"
                      }`}>
                        <Star className="w-3 h-3 fill-primary" />
                        0{i + 1}
                      </span>
                      <h2 className={`font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-4 ${
                        isDark ? "text-primary-foreground" : "text-foreground"
                      }`}
                        style={isDark ? { textShadow: '0 0 40px rgba(255,255,255,0.15)' } : {}}
                      >
                        {s.title}
                      </h2>
                      <div className={`w-24 h-[4px] rounded-full bg-gradient-to-r ${s.accent} mb-6`} />
                      <p className={`text-lg lg:text-xl leading-relaxed max-w-lg font-medium ${
                        isDark ? "text-primary-foreground/55" : "text-muted-foreground"
                      }`}>
                        {s.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex flex-wrap gap-4 pt-3"
                    >
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-10 py-7 rounded-xl shadow-[0_0_30px_hsl(0_80%_42%/0.35)] hover:shadow-[0_0_50px_hsl(0_80%_42%/0.55)] transition-all duration-300 group/btn uppercase tracking-wider"
                      >
                        <Phone className="w-5 h-5" />
                        {s.cta}
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className={`font-bold text-lg px-10 py-7 rounded-xl transition-all duration-300 ${
                          isDark
                            ? "border-primary-foreground/15 text-primary-foreground/70 hover:border-primary/50 hover:text-primary hover:bg-primary/[0.08]"
                            : "border-border hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04]"
                        }`}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA — massive and commanding */}
      <section className="py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container relative text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground mb-8 leading-[0.9]"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.5)' }}
          >
            Let's Build Your{" "}
            <br className="hidden md:block" />
            Brand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/65 mb-14 font-semibold italic font-display"
          >
            Rooted in Ohio. Built to Grow Your Business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_70px_rgba(255,255,255,0.2)] transition-all duration-400 group uppercase tracking-widest"
              style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
            >
              <Phone className="w-6 h-6" />
              Get a Free Quote Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
