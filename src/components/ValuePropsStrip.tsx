import { motion } from "framer-motion";
import { Clock, MapPin, DollarSign, ShieldCheck } from "lucide-react";

const props = [
  {
    icon: Clock,
    title: "24-Hour Quotes with Full Transparency",
    desc: "Get a detailed, honest quote within 24 hours — no hidden fees, no surprises.",
  },
  {
    icon: MapPin,
    title: "Local Ohio Expertise & Personalized Service",
    desc: "Proudly Ohio-owned. We know your market and treat every client like a neighbor.",
  },
  {
    icon: DollarSign,
    title: "Wholesale Pricing Without Sacrificing Quality",
    desc: "Access competitive wholesale rates backed by 4,300+ vetted suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    desc: "We stand behind every order. If you're not thrilled, we'll make it right.",
  },
];

const ValuePropsStrip = () => (
  <section className="py-20 lg:py-28 bg-background relative">
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="container max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          Why Choose <span className="text-primary">Buckeye Biz Hub</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {props.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
              <p.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-base font-bold text-foreground mb-2 leading-snug">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuePropsStrip;
