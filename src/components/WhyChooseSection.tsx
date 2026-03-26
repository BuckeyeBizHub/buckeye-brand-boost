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
    <section className="py-28 bg-ohio-grey-dark relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ohio-grey-dark via-[hsl(220,15%,12%)] to-[hsl(0,20%,10%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-bold text-primary tracking-widest uppercase mb-3">Why Us</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Why Ohio Businesses Choose <br className="hidden md:block" /><span className="text-primary text-glow-red">Buckeye Biz Hub</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary/40 rounded-2xl p-7 text-center transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <span className="block text-5xl font-extrabold text-primary/20 font-body mb-3">{b.number}</span>
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/15 group-hover:bg-primary/25 flex items-center justify-center transition-colors duration-300">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-primary-foreground/50 leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
