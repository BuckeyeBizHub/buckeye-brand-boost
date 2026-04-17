import { motion } from "framer-motion";
import { TrendingDown, CheckCircle, ShieldCheck } from "lucide-react";
import businessCardsImg from "@/assets/pricing-example-business-cards.jpg";
import promoPensImg from "@/assets/pricing-example-promo-pens.jpg";
import vehicleWrapImg from "@/assets/pricing-example-vehicle-wrap.jpg";
import yardSignsImg from "@/assets/pricing-example-yard-signs.jpg";

const examples = [
  {
    title: "Business Cards",
    image: businessCardsImg,
    imageAlt: "Premium red and black business cards stacked on a dark surface",
    description:
      "We sourced premium business cards through our supplier network — comparing options across multiple vendors to lock in the best quality at the lowest price for your brand.",
    ourPrice: "$420",
    typicalPrice: "$580–$750",
    savings: "$160–$330 saved",
  },
  {
    title: "Promotional Products",
    image: promoPensImg,
    imageAlt: "Custom branded navy promotional pens with personalized engraving",
    description:
      "From custom pens to branded tote bags, we shopped across our 4,300+ supplier network to find the perfect mix of quality and value for your next event or campaign.",
    ourPrice: "$4,650",
    typicalPrice: "$5,800–$6,900",
    savings: "$1,150–$2,250 saved",
  },
  {
    title: "Vehicle Wraps",
    image: vehicleWrapImg,
    imageAlt: "Full vehicle wrap on a blue roofing company truck with bold branding",
    description:
      "We coordinated design, high-quality print materials, and professional installation — all sourced competitively so your fleet looks incredible without the premium price tag.",
    ourPrice: "$5,250",
    typicalPrice: "$6,800–$8,500",
    savings: "$1,550–$3,250 saved",
  },
  {
    title: "Outdoor Yard Signs",
    image: yardSignsImg,
    imageAlt: "Two custom 18x24 and 24x36 yard signs for Farmers Insurance staked in grass",
    description:
      "Whether it's a handful of signs or a large batch for an event, we compare pricing across trusted suppliers to deliver durable, eye-catching signs at a price that fits your budget.",
    ourPrice: "$1,350",
    typicalPrice: "$1,750–$2,200",
    savings: "$400–$850 saved",
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
          Real Savings for{" "}
          <span className="text-primary">Real Businesses</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We shop our network of 4,300+ suppliers so you don't have to. Here's what Ohio businesses are saving when they work with us.
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
            className="bg-card rounded-2xl border-2 border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={ex.image}
                alt={ex.imageAlt}
                loading="lazy"
                width={800}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
            <h3 className="font-display text-xl font-black text-foreground mb-3">
              {ex.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {ex.description}
            </p>
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">With us:</span>
                <span className="text-2xl font-black text-primary">
                  {ex.ourPrice}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Typical market price:</span>
                <span className="text-sm font-semibold text-foreground/60 line-through">
                  {ex.typicalPrice}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <TrendingDown className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base font-black text-primary">
                  {ex.savings}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
          <span className="text-sm font-semibold text-foreground/80">
            Every quote is transparent — you see our wholesale cost and management fee upfront.
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CustomerExamples;
