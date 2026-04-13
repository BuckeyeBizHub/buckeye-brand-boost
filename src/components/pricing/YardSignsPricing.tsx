import { motion } from "framer-motion";
import { MapPin, Info } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const sizes = [
  {
    size: '12" x 18"',
    tiers: [
      { qty: "10+", price: "$8.45" },
      { qty: "50+", price: "$3.90" },
      { qty: "200+", price: "$3.19" },
      { qty: "1,200+", price: "$2.93" },
    ],
  },
  {
    size: '12" x 24"',
    tiers: [
      { qty: "16+", price: "$4.88" },
      { qty: "160+", price: "$3.99" },
      { qty: "960+", price: "$3.67" },
    ],
  },
  {
    size: '16" x 24"',
    tiers: [
      { qty: "12+", price: "$6.50" },
      { qty: "50+", price: "$6.50" },
      { qty: "120+", price: "$5.30" },
      { qty: "250+", price: "$5.30" },
      { qty: "720+", price: "$4.88" },
    ],
  },
  {
    size: '18" x 24"',
    tiers: [
      { qty: "10+", price: "$9.75" },
      { qty: "80+", price: "$7.97" },
      { qty: "250+", price: "$5.53" },
      { qty: "600+", price: "$5.20" },
    ],
  },
  {
    size: '24" x 24"',
    tiers: [
      { qty: "8+", price: "$8.94" },
      { qty: "80+", price: "$7.15" },
      { qty: "480+", price: "$5.76" },
    ],
  },
  {
    size: '16" x 32"',
    tiers: [
      { qty: "5+", price: "$7.94" },
      { qty: "50+", price: "$6.34" },
      { qty: "100+", price: "$6.34" },
      { qty: "250+", price: "$6.34" },
      { qty: "500+", price: "$6.34" },
    ],
  },
];

const stakes = [
  { type: "Standard", price: "$1.63 each" },
  { type: "Spider", price: "$2.33 each" },
  { type: "Heavy Duty", price: "$3.76 each" },
];

const YardSignsPricing = () => (
  <section className="py-20 lg:py-28 bg-secondary/30">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-bold mb-6">
          <MapPin className="w-4 h-4" />
          Pricing Guide
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
          Yard Signs{" "}
          <span className="text-primary">Pricing Guide</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Per-sign pricing that gets better the more you order — simple, transparent, no surprises.
        </p>
      </motion.div>

      {/* Grouped by size */}
      <div className="space-y-6">
        {sizes.map((group, gi) => (
          <motion.div
            key={group.size}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 }}
            className="bg-card rounded-2xl border-2 border-border shadow-lg overflow-hidden"
          >
            <div className="bg-foreground px-6 py-3">
              <h3 className="font-display text-lg font-black text-primary-foreground">
                {group.size} <span className="font-normal text-primary-foreground/70 text-sm ml-2">Corrugated Plastic</span>
              </h3>
            </div>

            {/* Desktop */}
            <div className="hidden sm:block">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/40">
                    <TableHead className="font-bold text-sm text-foreground">Quantity</TableHead>
                    <TableHead className="font-bold text-sm text-foreground text-right">Price per Sign</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {group.tiers.map((tier, ti) => (
                    <TableRow key={ti} className={ti % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <TableCell className="text-muted-foreground font-medium">{tier.qty}</TableCell>
                      <TableCell className="text-right font-bold text-foreground">{tier.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile */}
            <div className="sm:hidden p-5">
              <div className="grid grid-cols-2 gap-2">
                {group.tiers.map((tier, ti) => (
                  <div key={ti} className="text-center bg-secondary/50 rounded-lg py-2.5 px-2">
                    <span className="block text-[11px] text-muted-foreground">{tier.qty}</span>
                    <span className="block text-sm font-bold text-foreground">{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Step Stakes */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 bg-card border-2 border-border rounded-2xl p-6 shadow-lg"
      >
        <h3 className="font-display text-lg font-black text-foreground mb-4">Yard Sign Step Stakes (sold separately)</h3>
        <div className="grid grid-cols-3 gap-4">
          {stakes.map((s) => (
            <div key={s.type} className="text-center bg-secondary/50 rounded-xl py-4 px-3">
              <span className="block text-sm text-muted-foreground mb-1">{s.type}</span>
              <span className="block text-lg font-black text-foreground">{s.price}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 shadow-sm"
      >
        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Basic design and simple file setup are included at no extra charge. Premium graphic design or complex custom artwork may incur an additional design fee. Up to 10% quantity discount available on orders of $1,500 or more. Shipping costs are additional and calculated per delivery location.
        </p>
      </motion.div>
    </div>
  </section>
);

export default YardSignsPricing;
