import { motion } from "framer-motion";
import { TrendingDown, CheckCircle } from "lucide-react";

const examples = [
  {
    title: "Local Landscaping Company",
    description:
      "Needed 50 custom t-shirts for their crew. We sourced a high-quality, comfortable tee and printed a full-color logo — all for under $12 per shirt, delivered in 10 days.",
    highlight: "Under $12/shirt",
    savings: "Saved over 30% vs. their previous printer",
  },
  {
    title: "Real Estate Agent",
    description:
      "Ordered 500 premium business cards with a matte finish and spot UV logo. Total cost? Less than $75 — with free design assistance and shipping included.",
    highlight: "Less than $75 total",
    savings: "Free design help included",
  },
  {
    title: "Food Truck Owner",
    description:
      "Wanted a bold, eye-catching partial vehicle wrap. We designed, printed, and coordinated professional installation for under $1,800 — turning their truck into a moving billboard.",
    highlight: "Under $1,800",
    savings: "Design + print + install included",
  },
  {
    title: "Nonprofit Youth Sports League",
    description:
      "Needed 200 custom water bottles with their league logo for a fundraiser. We found a BPA-free option with full-color printing at just $3.50 each — well under their budget.",
    highlight: "$3.50 each",
    savings: "Came in well under budget",
  },
];

const CustomerExamples = () => (
  <section className="py-20 lg:py-28 bg-secondary/30">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
          Real Customer Examples &{" "}
          <span className="text-primary">Savings</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here's what real Ohio businesses have paid working with us. No inflated numbers — just honest pricing and great results.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
        {examples.map((ex, i) => (
          <motion.div
            key={ex.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border-2 border-border p-8 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <h3 className="font-display text-xl font-black text-foreground mb-3">
              {ex.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {ex.description}
            </p>
            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-lg font-black text-primary">
                  {ex.highlight}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-ohio-forest flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground/80">
                  {ex.savings}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerExamples;
