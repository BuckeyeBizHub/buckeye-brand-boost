import { motion } from "framer-motion";
import { Paintbrush, Zap, ShieldCheck, Heart, Eye, CheckCircle } from "lucide-react";

const included = [
  { icon: Paintbrush, text: "Expert design guidance and unlimited revisions" },
  { icon: Zap, text: "Fast, honest quotes — usually within one business day" },
  { icon: ShieldCheck, text: "High-quality materials and craftsmanship" },
  { icon: Heart, text: "100% satisfaction guarantee" },
  { icon: Eye, text: "No hidden fees or surprise upcharges" },
];

const HowWePrice = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container max-w-5xl mx-auto px-6">
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
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We use a concierge-style model where{" "}
            <span className="font-bold text-foreground">one dedicated contact</span>{" "}
            handles your entire project from design through delivery.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our goal is simple:{" "}
            <span className="font-bold text-foreground">
              remove the stress of branding and printing
            </span>{" "}
            so you can focus on growing your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl border-2 border-border p-8 shadow-lg"
        >
          <h3 className="font-display text-xl font-black text-foreground mb-6">
            What's Always Included
          </h3>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground/90 leading-snug">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowWePrice;
