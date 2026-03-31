import { motion } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const rows = [
  {
    feature: "Quote Speed",
    buckeye: "24 hours",
    local: "5–7 days",
    national: "2–3 weeks",
    buckeyeGood: true,
    localBad: false,
    nationalBad: false,
  },
  {
    feature: "Pricing Transparency",
    buckeye: "Full transparency up front – all fees known at quote, nothing ever hidden",
    local: "Often hidden fees",
    national: "Hidden fees & surcharges",
    buckeyeGood: true,
    localBad: true,
    nationalBad: true,
  },
  {
    feature: "Setup Fees",
    buckeye: "Zero on most orders",
    local: "$50–200",
    national: "Frequent hidden fees",
    buckeyeGood: true,
    localBad: true,
    nationalBad: true,
  },
  {
    feature: "Local Ohio Support",
    buckeye: "Yes – we're here when you need us",
    local: "Varies",
    national: "None",
    buckeyeGood: true,
    localBad: false,
    nationalBad: true,
  },
  {
    feature: "Materials & Quality Guarantee",
    buckeye: "Premium guaranteed",
    local: "Varies",
    national: "Lower quality",
    buckeyeGood: true,
    localBad: false,
    nationalBad: true,
  },
];

const PricingComparison = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
          Why Ohio Businesses Choose{" "}
          <span className="text-primary">Buckeye Pricing</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how we stack up against the competition — transparency wins every
          time.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border-2 border-primary/20 overflow-hidden shadow-xl bg-card"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[640px]">
            <thead>
              <tr>
                <th className="px-6 py-5 bg-foreground text-background font-black text-sm uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-5 bg-primary text-primary-foreground font-black text-sm uppercase tracking-wider">
                  Buckeye Biz Hub
                </th>
                <th className="px-6 py-5 bg-foreground text-background font-black text-sm uppercase tracking-wider">
                  Typical Local Printer
                </th>
                <th className="px-6 py-5 bg-foreground text-background font-black text-sm uppercase tracking-wider">
                  Big National Chain
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
                      {row.localBad ? (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-ohio-gold flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {row.local}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-start gap-2">
                      {row.nationalBad ? (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-ohio-gold flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {row.national}
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
