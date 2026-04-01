import { motion } from "framer-motion";
import { Clock, MapPin, DollarSign, ShieldCheck } from "lucide-react";

const props = [
  {
    icon: Clock,
    title: "24-Hour Quotes",
    subtitle: "Full Transparency",
    desc: "Detailed, honest quotes within 24 hours — no hidden fees, no surprises.",
  },
  {
    icon: MapPin,
    title: "Local Ohio Expertise",
    subtitle: "Personalized Service",
    desc: "Proudly Ohio-owned. We know your market and treat every client like a neighbor.",
  },
  {
    icon: DollarSign,
    title: "Wholesale Pricing",
    subtitle: "Premium Quality",
    desc: "Competitive wholesale rates backed by 4,300+ vetted suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "100% Satisfaction",
    subtitle: "Guaranteed",
    desc: "We stand behind every order. If you're not thrilled, we'll make it right.",
  },
];

const ValuePropsStrip = () => (
  <section className="relative py-16 lg:py-20 bg-gradient-to-b from-[hsl(220,30%,4%)] via-background to-background overflow-hidden">
    {/* Fade-in from dark hero */}
    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-ohio-grey-dark to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

    <div className="container max-w-7xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          Why Choose <span className="text-primary">Buckeye Biz Hub</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {props.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group text-center p-6 rounded-2xl bg-gradient-to-b from-card to-card/80 border border-border/50 hover:border-primary/25 hover:shadow-[0_8px_30px_-8px_hsl(0_85%_40%/0.12)] transition-all duration-500"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-base font-black text-foreground mb-0.5 leading-snug">
              {p.title}
            </h3>
            <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{p.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuePropsStrip;
