import { motion } from "framer-motion";
import { ShieldCheck, Users, DollarSign, Phone, Palette, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "A Real Person, Not a Website",
    text: "When you work with us, you get a dedicated concierge who knows your business, your brand, and your goals — not a faceless checkout page.",
  },
  {
    icon: DollarSign,
    title: "We Shop 4,300+ Suppliers for You",
    text: "Big online printers mark up a single supplier's prices. We compare across thousands of vendors to find the best quality at the lowest cost — and pass those savings to you.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing, Always",
    text: "No hidden setup fees, no surprise shipping charges, no bait-and-switch. You see every cost upfront before you approve anything.",
  },
  {
    icon: Palette,
    title: "Free Design Assistance",
    text: "Need help with your artwork? We include design support at no extra charge — something most online printers charge $50–$150+ for.",
  },
  {
    icon: Phone,
    title: "Fast, Personal Communication",
    text: "Questions? Pick up the phone or send an email. You'll hear back from a real person — usually the same day. No ticket queues, no chatbots.",
  },
  {
    icon: MapPin,
    title: "Local & Invested in Your Success",
    text: "We're Ohio-based and care about the businesses in our community. Your success is our success — and we treat every order like it matters, because it does.",
  },
];

const PricingComparison = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
          Why Choose Us Over{" "}
          <span className="text-primary">Big Online Printers?</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-14 leading-relaxed"
      >
        Big online printers promise low prices — but they make up for it with hidden fees, slow support, and one-size-fits-all service. We take a different approach: personal attention, honest pricing, and real savings you can see.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl border-2 border-border p-7 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <reason.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-black text-foreground mb-2">
              {reason.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {reason.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingComparison;
