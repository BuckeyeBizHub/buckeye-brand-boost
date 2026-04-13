import { motion } from "framer-motion";
import { CreditCard, Info } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const rows = [
  { type: "Standard", style: "Good quality, full color", prices: ["$25", "$40", "$45", "$63", "$135"] },
  { type: "Square", style: '3" x 3" Premium', prices: ["$43", "$76", "$115", "$152", "$198"] },
  { type: "Velvet", style: "Ultra soft touch lamination", prices: ["$88", "$98", "$105", "$137", "$270"] },
  { type: "Metallic Print", style: "Ultra metallic finish", prices: ["—", "—", "$141", "$196", "$334"] },
  { type: "Stainless Steel", style: "Ultra Plus premium metal", prices: ["$410", "$836", "$1,618", "$3,021", "$7,282"] },
];

const quantities = ["100", "250", "500", "1,000", "2,500"];

const BusinessCardsPricing = () => (
  <section className="py-20 lg:py-28 bg-secondary/30">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-bold mb-6">
          <CreditCard className="w-4 h-4" />
          Pricing Guide
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
          Business Cards{" "}
          <span className="text-primary">Pricing Guide</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From classic cards to premium metal — find the perfect option for your brand and budget.
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
                <TableHead className="text-primary-foreground font-bold text-sm">Card Type</TableHead>
                <TableHead className="text-primary-foreground font-bold text-sm">Style / Finish</TableHead>
                {quantities.map((q) => (
                  <TableHead key={q} className="text-primary-foreground font-bold text-sm text-center">
                    {q} qty
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={row.type}
                  className={i % 2 === 0 ? "bg-card" : "bg-secondary/40"}
                >
                  <TableCell className="font-bold text-foreground whitespace-nowrap">
                    {row.type}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {row.style}
                  </TableCell>
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
          {rows.map((row) => (
            <div key={row.type} className="p-5">
              <h3 className="font-display text-lg font-black text-foreground">{row.type}</h3>
              <p className="text-sm text-muted-foreground mb-3">{row.style}</p>
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

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 shadow-sm"
      >
        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Up to 10% quantity discount available on orders of $1,500 or more. Exact pricing may vary based on design complexity and turnaround time. We provide a clear, customized quote within 24 hours. Pricing includes basic card design; custom designs incur a design fee.
        </p>
      </motion.div>
    </div>
  </section>
);

export default BusinessCardsPricing;
