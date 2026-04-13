import { motion } from "framer-motion";
import { Search, ShieldCheck, Heart, Zap, Eye, Handshake } from "lucide-react";

const steps = [
  {
    icon: Heart,
    title: "We Listen First",
    description:
      "Every project starts with understanding your goals, your budget, and what matters most to your business. No pressure — just a real conversation.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "We Shop for the Best Value",
    description:
      "With access to thousands of suppliers, we compare options and negotiate on your behalf to find the best quality at the lowest possible price.",
    color: "bg-ohio-forest/10 text-ohio-forest",
  },
  {
    icon: Eye,
    title: "Full Transparency, Always",
    description:
      "You see every cost upfront — product, printing, shipping, and our service fee. No hidden charges, no surprises. What we quote is what you pay.",
    color: "bg-ohio-navy/10 text-ohio-navy",
  },
  {
    icon: Zap,
    title: "Fast Turnaround on Quotes",
    description:
      "Most quotes are delivered within 24 hours. We respect your time and know that fast answers help you make better decisions for your business.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Count On",
    description:
      "We never cut corners. Every product is vetted for durability, print quality, and brand consistency — because your reputation is on the line.",
    color: "bg-ohio-forest/10 text-ohio-forest",
  },
  {
    icon: Handshake,
    title: "A True Partner, Not a Vendor",
    description:
      "We treat every client like a neighbor. Your success is our success — and we're here to help you grow, not just sell you a product.",
    color: "bg-ohio-navy/10 text-ohio-navy",
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
          How Our Pricing{" "}
          <span className="text-primary">Works</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We believe great branding shouldn't break the bank. Here's how we keep things simple, fair, and affordable for Ohio businesses.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl border-2 border-border p-7 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div
              className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-5`}
            >
              <step.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-lg font-black text-foreground mb-3 leading-tight">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWePrice;
