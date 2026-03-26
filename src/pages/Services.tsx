import { motion } from "framer-motion";
import { Printer, Gift, Truck, ArrowRight, Phone } from "lucide-react";
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
  },
  {
    icon: Gift,
    title: "Promotional Products",
    description:
      "Custom shirts, hats, drinkware, bar rails, tents, giveaways, and promotional items that get your brand noticed every day.",
    items: ["Custom Apparel", "Drinkware", "Bar Rails", "Tents & Canopies", "Giveaways", "Branded Merch"],
    cta: "Get a Quote",
  },
  {
    icon: Truck,
    title: "Vehicle Branding",
    description:
      "Full vehicle wraps, decals, magnetic signs, fleet graphics, and vehicle branding that turns every mile into powerful mobile advertising.",
    items: ["Full Wraps", "Partial Wraps", "Decals", "Magnetic Signs", "Fleet Graphics", "Custom Design"],
    cta: "Get a Quote",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,5%)] via-[hsl(0,35%,7%)] to-[hsl(220,25%,4%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[900px] h-[900px] rounded-full bg-primary/[0.1] blur-[180px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-5 bg-primary/[0.1] px-5 py-2 rounded-full border border-primary/20"
          >
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-6 text-glow-white"
          >
            Our{" "}
            <span className="text-primary text-glow-red">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto font-medium"
          >
            Premium printing, branded merch, and vehicle branding — everything Ohio businesses need to stand out.
          </motion.p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 lg:py-36 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />

        <div className="container relative space-y-16 lg:space-y-24">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              {/* Visual / Icon Panel */}
              <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <div className="relative bg-card rounded-3xl p-12 lg:p-16 border border-border group-hover:border-primary/25 card-lift overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-28 h-28 mb-8 rounded-3xl bg-primary/[0.08] group-hover:bg-primary/[0.15] flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_40px_hsl(0_80%_42%/0.2)]">
                      <s.icon className="w-14 h-14 text-primary transition-transform duration-400 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-bold text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""} space-y-6`}>
                <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase bg-primary/[0.08] px-4 py-1.5 rounded-full">
                  0{i + 1}
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-black text-foreground leading-tight">
                  {s.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base px-8 py-6 rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.3)] hover:shadow-[0_0_35px_hsl(0_80%_42%/0.5)] transition-all duration-300 group/btn"
                  >
                    <Phone className="w-4 h-4" />
                    {s.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-bold text-base px-8 py-6 rounded-xl border-border hover:border-primary/40 hover:text-primary transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,85%,38%)] via-primary to-[hsl(0,70%,35%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

        <div className="container relative text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[0.95] text-glow-white"
          >
            Let's Build Your Brand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/70 mb-12 font-medium"
          >
            Rooted in Ohio. Built to Grow Your Business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-lg px-12 py-8 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_60px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-wider"
            >
              <Phone className="w-5 h-5" />
              Get a Free Quote Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
