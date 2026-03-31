import { motion } from "framer-motion";
import { Zap, TrendingDown, Eye, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Lightning-Fast 24-Hour Quotes",
    description:
      "Send us your project details and get a complete, itemized quote within 24 hours — no waiting days or weeks.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingDown,
    title: "Volume Discounts That Actually Save You Money",
    description:
      "The bigger your order, the lower your fee. Our tiered pricing rewards growth — from 25% down to just 15%.",
    color: "bg-ohio-forest/10 text-ohio-forest",
  },
  {
    icon: Eye,
    title: "FULL PRICING TRANSPARENCY UP FRONT",
    description:
      "All fees known at time of quote, nothing ever hidden. You see every cost before you commit — no surprises, ever.",
    color: "bg-ohio-navy/10 text-ohio-navy",
  },
  {
    icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    description:
      "We stand behind every order. If it's not right, we make it right — period. Your trust is our top priority.",
    color: "bg-primary/10 text-primary",
  },
];

const HowWePrice = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
          How We Price –{" "}
          <span className="text-primary">Simple, Fair & Fast</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          No gimmicks. No fine print. Just a straightforward model built for
          Ohio businesses who want results without overpaying.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border-2 border-border p-7 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col text-center"
          >
            <div
              className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mx-auto mb-5`}
            >
              <card.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-lg font-black text-foreground mb-3 leading-tight">
              {card.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWePrice;
