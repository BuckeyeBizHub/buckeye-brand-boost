import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Eye,
  CheckCircle2,
  Pencil,
  Package,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "You reach out with an idea or need",
    text: "Send a quick message, email, or call — no pressure, no commitment.",
  },
  {
    icon: FileText,
    title: "I personally review and quote within 24 hours",
    text: "You get a detailed, transparent quote — usually the next business day.",
  },
  {
    icon: Eye,
    title: "We discuss options, materials, and pricing",
    text: "Full transparency on every cost so you can make the best decision for your budget.",
  },
  {
    icon: CheckCircle2,
    title: "You approve the quote and we create a proof",
    text: "Nothing prints until you've seen exactly what you're getting.",
  },
  {
    icon: Pencil,
    title: "Unlimited revisions until you're happy",
    text: "No nickel-and-diming for design tweaks — we keep going until it's right.",
  },
  {
    icon: Package,
    title: "We produce and personally inspect your order",
    text: "Every project is hand-checked before it leaves — no shortcuts.",
  },
  {
    icon: Truck,
    title: "We deliver or install — you only pay when 100% satisfied",
    text: "If it's not right, we make it right. That's the concierge promise.",
  },
];

const HowWeWork = () => (
  <section className="py-20 lg:py-28 bg-ohio-cream">
    <div className="container max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
          The Concierge Process
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
          How We Actually <span className="text-primary">Work</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At Buckeye Biz Hub, we don't just print things — we partner with
          you. Here's exactly how the process works:
        </p>
      </motion.div>

      <ol className="space-y-4 md:space-y-5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex gap-5 bg-background border border-border rounded-2xl p-5 md:p-6 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-black shadow-md">
                  {idx + 1}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-start gap-3 mb-1">
                  <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-display text-base md:text-lg font-black text-foreground leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-8">
                  {step.text}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 bg-background border-l-4 border-primary rounded-r-xl p-6 md:p-7 max-w-3xl mx-auto"
      >
        <p className="text-base md:text-lg text-foreground/90 leading-relaxed italic">
          We intentionally keep our margins fair because we want{" "}
          <span className="font-bold text-foreground not-italic">
            long-term relationships
          </span>
          , not one-time transactions.
        </p>
        <p className="mt-3 text-sm font-bold text-primary">
          — David Stein, Your Buckeye Branding Concierge
        </p>
      </motion.div>
    </div>
  </section>
);

export default HowWeWork;
