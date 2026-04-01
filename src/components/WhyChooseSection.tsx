import { motion } from "framer-motion";
import { MapPin, ShoppingBag, DollarSign, Zap, Star, ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";

const benefits = [
  { icon: MapPin, title: "Local Ohio Roots", description: "Proudly based in Ohio, we understand the local market and care about our community.", number: "01", accent: "from-primary to-ohio-red-light" },
  { icon: ShoppingBag, title: "One-Stop Convenience", description: "Print, promo, and vehicle branding — all under one roof. Simplify your brand ordering.", number: "02", accent: "from-ohio-red-light to-ohio-red-glow" },
  { icon: DollarSign, title: "Wholesale Pricing + Expert Service", description: "Get competitive wholesale pricing without sacrificing quality or personalized support.", number: "03", accent: "from-ohio-red-glow to-primary" },
  { icon: Zap, title: "Fast Turnaround", description: "Tight deadline? We've got you. Quick production and reliable delivery every time.", number: "04", accent: "from-primary to-ohio-red-glow" },
];

const stats = [
  { value: "500+", label: "Ohio Businesses" },
  { value: "50+", label: "Years Experience" },
  { value: "24hr", label: "Quote Response" },
  { value: "100%", label: "Satisfaction" },
];

const WhyChooseSection = () => {
  return (
    <section className="py-32 lg:py-44 bg-ohio-grey-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-ohio-grey-dark to-[hsl(0,25%,5%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/[0.08] rounded-full blur-[250px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[130px]" />
      {/* Red accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.15] border border-primary/30 px-7 py-2.5 rounded-full shadow-[0_0_30px_hsl(0_85%_40%/0.18)]">
            <Star className="w-3.5 h-3.5 fill-primary" />
            Why Us
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-black text-primary-foreground leading-[0.88]">
            Why Ohio Businesses Choose{" "}
            <br className="hidden md:block" />
            <span className="text-primary text-glow-red">Buckeye Biz Hub</span>
          </h2>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-red">{s.value}</div>
              <div className="text-[0.65rem] font-bold text-primary-foreground/30 uppercase tracking-[0.2em] mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group relative bg-primary-foreground/[0.04] backdrop-blur-sm border-2 border-primary-foreground/[0.08] hover:border-primary/50 rounded-3xl p-8 lg:p-10 text-center transition-all duration-500 hover:bg-primary-foreground/[0.08] hover:shadow-[0_0_60px_hsl(0_85%_40%/0.18)] hover:-translate-y-3"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${b.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`} />
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.12] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative">
                <span className="block text-[4.5rem] font-black text-primary/[0.08] font-body mb-2 leading-none group-hover:text-primary/[0.18] transition-colors duration-500">{b.number}</span>
                <div className="w-18 h-18 mx-auto mb-6 rounded-2xl bg-primary/[0.12] group-hover:bg-primary/[0.28] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_40px_hsl(0_85%_40%/0.35)] group-hover:scale-110 w-[4.5rem] h-[4.5rem]">
                  <b.icon className="w-9 h-9 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-xl font-black text-primary-foreground mb-3 group-hover:text-primary transition-colors duration-300">{b.title}</h3>
                <p className="text-sm text-primary-foreground/40 leading-relaxed">{b.description}</p>
                {/* Hover arrow */}
                <div className="mt-5 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <TrustBadges variant="light" size="md" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
