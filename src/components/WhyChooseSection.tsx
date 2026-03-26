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
    <section className="py-28 lg:py-36 bg-ohio-grey-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ohio-grey-dark via-[hsl(220,20%,9%)] to-[hsl(0,15%,8%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[180px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4 bg-primary/[0.12] px-4 py-1.5 rounded-full">Why Us</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-black text-primary-foreground leading-tight">
            Why Ohio Businesses Choose{" "}
            <br className="hidden md:block" />
            <span className="text-primary text-glow-red">Buckeye Biz Hub</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-primary-foreground/[0.04] backdrop-blur-sm border border-primary-foreground/[0.08] hover:border-primary/35 rounded-2xl p-7 lg:p-8 text-center transition-all duration-500 hover:bg-primary-foreground/[0.06]"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <span className="block text-[3.5rem] font-black text-primary/[0.12] font-body mb-2 leading-none group-hover:text-primary/[0.2] transition-colors duration-400">{b.number}</span>
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/[0.1] group-hover:bg-primary/[0.2] flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_25px_hsl(0_80%_42%/0.2)]">
                  <b.icon className="w-7 h-7 text-primary transition-transform duration-400 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-2.5">{b.title}</h3>
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
