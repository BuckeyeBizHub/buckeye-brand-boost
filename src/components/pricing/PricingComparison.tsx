import { motion } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const rows = [
  {
    feature: "Personalized Service",
    buckeye: "Dedicated concierge for every order",
    others: "Self-service or generic reps",
    buckeyeGood: true,
    othersBad: true,
  },
  {
    feature: "Pricing Transparency",
    buckeye: "Every cost shown upfront — no hidden fees, ever",
    others: "Hidden fees, setup charges, surprise surcharges",
    buckeyeGood: true,
    othersBad: true,
  },
  {
    feature: "Supplier Access",
    buckeye: "4,300+ vetted suppliers — we shop for the best deal",
    others: "Limited catalog or single-source markup",
    buckeyeGood: true,
    othersBad: true,
  },
  {
    feature: "Quote Speed",
    buckeye: "Most quotes in 24 hours",
    others: "Days or weeks to hear back",
    buckeyeGood: true,
    othersBad: false,
  },
  {
    feature: "Design Help",
    buckeye: "Free design assistance included",
    others: "Extra charges for design or revisions",
    buckeyeGood: true,
    othersBad: true,
  },
  {
    feature: "Quality Guarantee",
    buckeye: "100% satisfaction — we make it right",
    others: "Limited or no guarantees",
    buckeyeGood: true,
    othersBad: true,
  },
  {
    feature: "Local Ohio Support",
    buckeye: "Ohio-based, always available by phone or email",
    others: "Out-of-state call centers or chatbots",
    buckeyeGood: true,
    othersBad: true,
  },
];

const PricingComparison = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
          Why Clients Choose{" "}
          <span className="text-primary">Buckeye Biz Hub</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          When you compare us to the alternatives, the choice is clear. Here's how we stack up.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border-2 border-primary/20 overflow-hidden shadow-xl bg-card"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[540px]">
            <thead>
              <tr>
                <th className="px-6 py-5 bg-foreground text-background font-black text-sm uppercase tracking-wider w-1/4">
                  Feature
                </th>
                <th className="px-6 py-5 bg-primary text-primary-foreground font-black text-sm uppercase tracking-wider w-[37.5%]">
                  Buckeye Biz Hub
                </th>
                <th className="px-6 py-5 bg-foreground text-background font-black text-sm uppercase tracking-wider w-[37.5%]">
                  Typical Alternatives
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border/50 ${
                    i % 2 === 0 ? "bg-card" : "bg-secondary/30"
                  }`}
                >
                  <td className="px-6 py-5 font-bold text-foreground text-sm">
                    {row.feature}
                  </td>
                  <td className="px-6 py-5 bg-primary/5">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-ohio-forest flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-foreground">
                        {row.buckeye}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-start gap-2">
                      {row.othersBad ? (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-ohio-gold flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {row.others}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingComparison;
