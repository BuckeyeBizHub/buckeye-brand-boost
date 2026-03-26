import { motion } from "framer-motion";
import { MapPin, ShoppingBag, DollarSign, Zap } from "lucide-react";

const benefits = [
  { icon: MapPin, title: "Local Ohio Roots", description: "Proudly based in Ohio, we understand the local market and care about our community." },
  { icon: ShoppingBag, title: "One-Stop Convenience", description: "Print, promo, and vehicle branding — all under one roof. Simplify your brand ordering." },
  { icon: DollarSign, title: "Wholesale Pricing + Expert Service", description: "Get competitive wholesale pricing without sacrificing quality or personalized support." },
  { icon: Zap, title: "Fast Turnaround", description: "Tight deadline? We've got you. Quick production and reliable delivery every time." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
        >
          Why Ohio Businesses Choose Buckeye Biz Hub
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
