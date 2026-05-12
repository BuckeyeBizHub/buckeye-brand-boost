import { motion } from "framer-motion";
import { Search, Handshake, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: 1,
    icon: Search,
    title: "Tell Us What You Need",
    text: "Vehicle wraps, banners, business cards, uniforms, promotional products — or all of the above. One conversation, one contact.",
  },
  {
    num: 2,
    icon: Handshake,
    title: "We Shop Our Network",
    text: "We leverage our relationships across Central Ohio's top vendors to get you the right quality at the right price. No single-shop markup. No limited options.",
  },
  {
    num: 3,
    icon: CheckCircle2,
    title: "You Get the Best Outcome",
    text: "Coordinated, consistent branding across every touchpoint — delivered by a partner who's accountable to you, not to any single supplier.",
  },
];

const ConciergeModelSection = () => (
  <section className="relative py-24 lg:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-ohio-grey-light/20 to-background" />
    <div className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[200px]" />
    <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-ohio-navy/[0.06] rounded-full blur-[200px]" />

    <div className="container relative max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <span className="inline-flex items-center gap-2 text-[0.7rem] font-extrabold text-primary tracking-[0.4em] uppercase mb-6 bg-primary/[0.08] px-5 py-2 rounded-full border border-primary/15">
          How Our Branding Concierge Model Works
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] mb-6 tracking-tight">
          We're Not Just a Print Shop.{" "}
          <span className="text-primary">We're Your Branding Concierge.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-[1.7] font-light">
          We shop Central Ohio's best vendors, installers, and specialists on your behalf — so you get better quality, better pricing, and one accountable partner for everything.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl mx-auto space-y-5 text-base md:text-lg text-muted-foreground leading-[1.8] mb-16"
      >
        <p>
          Most print and wrap shops can only offer you what they do in-house. If their price is too high, or their specialty doesn't match your project — that's your problem to solve.
        </p>
        <p>
          We work differently. Buckeye Biz Hub operates as your full-service branding concierge, meaning we draw on relationships with a vetted network of Central Ohio's top wrap installers, printers, embroiderers, and promotional product specialists to build the right solution for your project — at the best available price.
        </p>
        <p>
          One call to us replaces hours of research, multiple quotes from multiple vendors, and the headache of coordinating different suppliers who don't talk to each other.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative bg-card rounded-2xl border border-border/50 p-8 shadow-[0_4px_30px_-8px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_60px_-15px_hsl(0_85%_40%/0.25)] hover:-translate-y-1 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-lg shrink-0">
                {s.num}
              </span>
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl lg:text-2xl font-black text-foreground mb-3 leading-tight">
              Step {s.num} — {s.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-black px-10 py-5 rounded-2xl hover:bg-ohio-red-light transition-all duration-300 shadow-[0_0_50px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_70px_hsl(0_85%_40%/0.55)] uppercase tracking-[0.15em] text-sm group"
        >
          Get a Free Concierge Consultation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ConciergeModelSection;
