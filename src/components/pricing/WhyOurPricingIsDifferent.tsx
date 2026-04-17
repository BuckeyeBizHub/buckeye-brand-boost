import { motion } from "framer-motion";
import { Scale, TrendingDown, Heart } from "lucide-react";

const points = [
  {
    icon: Scale,
    title: "Smaller items = higher percentage",
    text: "On things like business cards, we apply a higher percentage because of the time, design care, and personal attention involved in every order.",
  },
  {
    icon: TrendingDown,
    title: "Larger projects = lower percentage",
    text: "On big projects like vehicle wraps, we intentionally keep the percentage lower because the dollar amount is already significant — you shouldn't pay double.",
  },
  {
    icon: Heart,
    title: "Personal service big printers can't match",
    text: "You get fair, competitive pricing PLUS a real person who knows your brand — not a faceless checkout page.",
  },
];

const WhyOurPricingIsDifferent = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
          The Honest Truth
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
          Why Our Pricing Is{" "}
          <span className="text-primary">Different</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We don't use the same markup model as big online printers. Here's
          how our approach actually works:
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {points.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-ohio-cream border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-black text-foreground mb-2 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-ohio-grey-dark rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto"
      >
        <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed italic">
          "We keep our pricing fair and transparent because we're building{" "}
          <span className="text-primary font-bold not-italic">
            long-term partnerships
          </span>
          , not chasing one-time transactions. When you work with us, you know
          you're getting honest value every single time."
        </p>
        <p className="mt-5 text-sm font-bold text-primary-foreground/80 uppercase tracking-wider">
          — David Stein, Your Buckeye Branding Concierge
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhyOurPricingIsDifferent;
