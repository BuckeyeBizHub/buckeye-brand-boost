import { motion } from "framer-motion";
import { MapPin, ShoppingBag, DollarSign, Zap } from "lucide-react";

const benefits = [
  { icon: MapPin, title: "Local Ohio Roots", description: "Proudly based in Ohio, we understand the local market and care about our community.", number: "01" },
  { icon: ShoppingBag, title: "One-Stop Convenience", description: "Print, promo, and vehicle branding — all under one roof. Simplify your brand ordering.", number: "02" },
  { icon: DollarSign, title: "Wholesale Pricing + Expert Service", description: "Get competitive wholesale pricing without sacrificing quality or personalized support.", number: "03" },
  { icon: Zap, title: "Fast Turnaround", description: "Tight deadline? We've got you. Quick production and reliable delivery every time.", number: "04" },
];

const WhyChooseSection = () => {
  return (
    <section className="py-32 lg:py-44 bg-ohio-grey-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,3%)] via-ohio-grey-dark to-[hsl(0,20%,6%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.07] rounded-full blur-[220px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.15] border border-primary/30 px-6 py-2 rounded-full shadow-[0_0_25px_hsl(0_85%_40%/0.15)]">
            Why Us
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.9]">
            Why Ohio Businesses Choose{" "}
            <br className="hidden md:block" />
            <span className="text-primary text-glow-red">Buckeye Biz Hub</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group relative bg-primary-foreground/[0.04] backdrop-blur-sm border-2 border-primary-foreground/[0.08] hover:border-primary/50 rounded-3xl p-8 lg:p-10 text-center transition-all duration-500 hover:bg-primary-foreground/[0.07] hover:shadow-[0_0_50px_hsl(0_85%_40%/0.15)] hover:-translate-y-2"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ohio-red-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
              <div className="relative">
                <span className="block text-[4rem] font-black text-primary/[0.1] font-body mb-3 leading-none group-hover:text-primary/[0.2] transition-colors duration-400">{b.number}</span>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/[0.12] group-hover:bg-primary/[0.25] flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_35px_hsl(0_85%_40%/0.3)] group-hover:scale-110">
                  <b.icon className="w-8 h-8 text-primary transition-transform duration-400 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-xl font-black text-primary-foreground mb-3">{b.title}</h3>
                <p className="text-sm text-primary-foreground/45 leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
