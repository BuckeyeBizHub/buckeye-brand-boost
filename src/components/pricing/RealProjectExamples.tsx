import { motion } from "framer-motion";
import { Home, Truck, UtensilsCrossed, Clock, DollarSign, CheckCircle2 } from "lucide-react";

const projects = [
  {
    icon: Home,
    client: "Local Real Estate Agent",
    need: "Needed 30 yard signs for open house listings.",
    solution:
      'We delivered custom 24"×24" signs with directional arrows in 6 days.',
    price: "$225 total",
    timeline: "6 days",
    outcomes: [
      "New design created 42% more traffic than previous weeks in the same location",
    ],
  },
  {
    icon: Truck,
    client: "Columbus Contractor",
    need: "Needed 3 new Ford F-150 trucks wrapped with MC/DOT numbers plus partial company branding.",
    solution:
      "We checked with 3 A+ local wrap companies to compare schedules and costs, then used our leverage to get the best combination of quality and pricing.",
    price: "3 branded trucks",
    timeline: "10 days",
    outcomes: [
      "Turned his trucks into 24/7 rolling billboards",
      "Got him a 12% fleet discount on pricing",
    ],
  },
  {
    icon: UtensilsCrossed,
    client: "Restaurant Owner",
    need: "Needed 1,000 custom door hangers with tear-off coupons for a new store opening.",
    solution:
      "We helped design the coupon, printed them, and delivered them ready to distribute.",
    price: "1,000 hangers",
    timeline: "6 days",
    outcomes: [
      "Largest new store opening to date",
      "Saved $103.40 vs. big-box online printers",
    ],
  },
];

const RealProjectExamples = () => (
  <section className="py-20 lg:py-28 bg-secondary/30">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="text-center mb-14 max-w-3xl mx-auto"
      >
        <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
          Real Stories
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
          Real Project <span className="text-primary">Examples</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Real Ohio businesses. Real projects. Real results.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border-2 border-border p-7 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg lg:text-xl font-black text-foreground mb-3 leading-tight">
                {p.client}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                <span className="font-bold text-foreground">The need: </span>
                {p.need}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                <span className="font-bold text-foreground">What we did: </span>
                {p.solution}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-black text-primary">{p.price}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-semibold">Delivered in {p.timeline}</span>
                </div>
                {p.outcomes.map((o) => (
                  <div
                    key={o}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default RealProjectExamples;
