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

const rows = [
  { size: '12" x 18"', material: "Corrugated Plastic", prices: ["$8.45", "$3.90", "—", "$3.19", "$2.93"] },
  { size: '12" x 24"', material: "Corrugated Plastic", prices: ["—", "$4.88", "$3.99", "$3.68", "—"] },
  { size: '16" x 24"', material: "Corrugated Plastic", prices: ["$6.50", "$6.50", "$5.30", "$5.30", "$4.88"] },
  { size: '18" x 24"', material: "Corrugated Plastic", prices: ["$9.75", "$7.97", "$5.53", "$5.20", "$5.20"] },
  { size: '24" x 24"', material: "Corrugated Plastic", prices: ["$8.94", "$7.15", "$5.76", "$5.76", "—"] },
  { size: '16" x 32"', material: "Corrugated Plastic", prices: ["$7.94", "$6.34", "$6.34", "$6.34", "$6.34"] },
];

const quantities = ["10–49", "50–99", "100–249", "250+", "500+"];

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl border-2 border-border shadow-lg overflow-hidden"
      >
        {/* Desktop table */}
        <div className="hidden md:block">
          <Table>
            <TableHeader>
              <TableRow className="bg-foreground">
                <TableHead className="text-primary-foreground font-bold text-sm">Size</TableHead>
                <TableHead className="text-primary-foreground font-bold text-sm">Material</TableHead>
                {quantities.map((q) => (
                  <TableHead key={q} className="text-primary-foreground font-bold text-sm text-center">
                    {q} qty
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/40"}>
                  <TableCell className="font-bold text-foreground whitespace-nowrap">{row.size}</TableCell>
                  <TableCell className="text-muted-foreground text-sm whitespace-nowrap">{row.material}</TableCell>
                  {row.prices.map((price, j) => (
                    <TableCell
                      key={j}
                      className={`text-center font-semibold ${price === "—" ? "text-muted-foreground" : "text-foreground"}`}
                    >
                      {price}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden divide-y divide-border">
          {rows.map((row, i) => (
            <div key={i} className="p-5">
              <h3 className="font-display text-lg font-black text-foreground">{row.size}</h3>
              <p className="text-sm text-muted-foreground mb-3">{row.material}</p>
              <div className="grid grid-cols-3 gap-2">
                {row.prices.map((price, j) => (
                  <div key={j} className="text-center bg-secondary/50 rounded-lg py-2 px-1">
                    <span className="block text-[11px] text-muted-foreground">{quantities[j]}</span>
                    <span className={`block text-sm font-bold ${price === "—" ? "text-muted-foreground" : "text-foreground"}`}>
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Step Stakes */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 bg-card border-2 border-border rounded-2xl p-6 shadow-lg"
      >
        <h3 className="font-display text-lg font-black text-foreground mb-4">Step Stakes (if required)</h3>
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
          Basic design and simple file setup are included at no extra charge. Premium graphic design or complex custom artwork may incur an additional design fee. Up to 10% quantity discount is available on orders of $1,500 or more. Shipping costs are additional and calculated per delivery location.
        </p>
      </motion.div>
    </div>
  </section>
);

export default YardSignsPricing;
