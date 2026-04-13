import { motion } from "framer-motion";
import { FileText, Info } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const rows = [
  { product: "Flyers", size: '8.5" x 11"', stock: "80 lb Gloss", prices: ["$60", "$165", "$173", "$190", "$275", "$494"] },
  { product: "Flyers", size: '8.5" x 11"', stock: "100 lb Gloss", prices: ["$63", "$174", "$183", "$200", "$288", "$518"] },
  { product: "Flyers", size: '8.5" x 11"', stock: "10 pt Cardstock", prices: ["$64", "$250", "$263", "$289", "$464", "$740"] },
  { product: "Flyers", size: '8.5" x 11"', stock: "14 pt Cardstock", prices: ["$68", "$292", "$310", "$348", "$504", "$949"] },
];

const quantities = ["100", "250", "500", "1,000", "2,000", "5,000"];

const BrochuresPricing = () => (
  <section className="py-20 lg:py-28 bg-secondary/30">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-bold mb-6">
          <FileText className="w-4 h-4" />
          Pricing Guide
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
          Brochures & Business Printing{" "}
          <span className="text-primary">Pricing Guide</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Straightforward pricing for flyers and brochures — no surprises, just honest numbers.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl border-2 border-border shadow-lg overflow-hidden"
      >
        {/* Desktop table */}
        <div className="hidden lg:block">
          <Table>
            <TableHeader>
              <TableRow className="bg-foreground">
                <TableHead className="text-primary-foreground font-bold text-sm">Product</TableHead>
                <TableHead className="text-primary-foreground font-bold text-sm">Size</TableHead>
                <TableHead className="text-primary-foreground font-bold text-sm">Paper Stock</TableHead>
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
                  key={i}
                  className={i % 2 === 0 ? "bg-card" : "bg-secondary/40"}
                >
                  <TableCell className="font-bold text-foreground whitespace-nowrap">
                    {row.product}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                    {row.size}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                    {row.stock}
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
        <div className="lg:hidden divide-y divide-border">
          {rows.map((row, i) => (
            <div key={i} className="p-5">
              <h3 className="font-display text-lg font-black text-foreground">{row.product}</h3>
              <p className="text-sm text-muted-foreground mb-1">{row.size} · {row.stock}</p>
              <div className="grid grid-cols-3 gap-2 mt-3">
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
          Prices are for full color printing on both sides. Basic file setup and simple design adjustments are included. Design time fee may apply for complex custom work. Up to 10% quantity discount available on orders of $1,500 or more. Exact pricing depends on quantity, paper choice, coating, and turnaround time. We'll provide a clear, customized quote within 24 hours — no obligation.
        </p>
      </motion.div>
    </div>
  </section>
);

export default BrochuresPricing;
