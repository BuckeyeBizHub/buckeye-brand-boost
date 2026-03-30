import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Eye, TrendingDown, Shield, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productCollage from "@/assets/product-collage-hero.jpg";

const savingsBoxes = [
  {
    label: "Small Order",
    cost: "$400",
    traditional: "$600–$800",
    buckeye: "$500",
    feeLabel: "25% fee",
    save: "$100–$300",
  },
  {
    label: "Medium Order",
    cost: "$1,200",
    traditional: "$1,800–$2,400",
    buckeye: "$1,416",
    feeLabel: "18% fee",
    save: "$384–$984",
    featured: true,
  },
  {
    label: "Large Order",
    cost: "$3,000",
    traditional: "$4,500–$6,000",
    buckeye: "$3,450",
    feeLabel: "15% fee",
    save: "$1,050–$2,550",
  },
];

const tiers = [
  { size: "Under $500", fee: "25%", example: "Cost + 25%" },
  { size: "$500 – $2,000", fee: "18%", example: "Cost + 18%" },
  { size: "Over $2,000", fee: "15%", example: "Cost + 15%" },
];

const trustPoints = [
  { icon: Eye, text: "You see the actual supplier cost on every invoice — complete transparency with zero surprises" },
  { icon: TrendingDown, text: "You pay true wholesale pricing instead of the inflated markups most printers charge" },
  { icon: Shield, text: "Bigger orders automatically unlock even lower fees — the more you grow, the more you save" },
  { icon: Handshake, text: "Full transparency builds real trust and turns us into your long-term business partner" },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={productCollage} alt="Buckeye Biz Hub products" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-bg))] via-[hsl(var(--hero-bg))/0.95] to-[hsl(var(--hero-bg))]" />
      </div>
      <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block text-primary font-black text-sm tracking-[0.2em] uppercase mb-6"
        >
          Transparent Pricing
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-primary-foreground mb-6"
          style={{ fontFamily: "var(--font-display)", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
        >
          We Do Things<br /><span className="text-primary text-glow-red">Differently Here</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed"
        >
          True Wholesale Cost + Our Small Transparent Fee — Helping small businesses grow and thrive without paying an arm and a leg for branding and printed items.
        </motion.p>
      </div>
    </section>

    {/* Body Copy */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>At Buckeye Biz Hub we do things differently. We are on the side of helping small businesses grow and thrive.</p>
          <p>We have wholesale accounts with over 4,300 printing and item suppliers, giving us true wholesale pricing. Instead of marking up the product like most printers, we simply add a small, transparent fee for sourcing, paying the supplier upfront, fulfillment, delivery, and handling everything for you.</p>
          <p className="font-semibold text-foreground">We offer full transparency and are happy to show you the full supplier costs at every step — no hidden markups, no games, no surprises.</p>
        </motion.div>
      </div>
    </section>

    {/* Savings Boxes */}
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            See Exactly How Much You <span className="text-primary">Save</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {savingsBoxes.map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border-2 transition-shadow ${
                box.featured
                  ? "border-primary bg-card shadow-2xl scale-[1.03]"
                  : "border-border bg-card shadow-lg"
              }`}
            >
              {box.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-6">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{box.label}</span>
                <p className="text-3xl font-black text-foreground mt-1">{box.cost}</p>
                <p className="text-xs text-muted-foreground">Supplier Cost</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">Traditional Printer</span>
                  <span className="text-sm line-through opacity-50 text-muted-foreground">{box.traditional}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-sm font-semibold text-foreground">Buckeye Biz Hub</span>
                  <span className="text-lg font-black text-primary">{box.buckeye}</span>
                </div>
                <p className="text-center text-xs text-muted-foreground">({box.feeLabel})</p>
                <div className="bg-primary/10 rounded-xl p-4 text-center mt-2">
                  <span className="text-sm font-bold text-foreground">You Save</span>
                  <p className="text-2xl font-black text-primary">{box.save}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Fee Tiers Table */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Our <span className="text-primary">Transparent</span> Pricing
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border-2 border-primary/20 overflow-hidden shadow-xl bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-foreground text-background">
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Order Size<br /><span className="font-normal opacity-70 text-xs">(Actual Supplier Cost)</span></th>
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Our Fee %</th>
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Your Total</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((row, i) => (
                  <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card" : "bg-secondary/30"}`}>
                    <td className="px-6 py-5 font-bold text-foreground">{row.size}</td>
                    <td className="px-6 py-5 font-black text-primary text-2xl">{row.fee}</td>
                    <td className="px-6 py-5 text-muted-foreground font-semibold">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-primary/5 border-t border-primary/10 text-center">
            <p className="text-sm font-bold text-muted-foreground">Small-order minimum fee: <span className="text-primary font-black">$45 flat</span></p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Ohio Businesses Love This */}
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-foreground text-center mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Why Ohio Businesses <span className="text-primary">Love Our Pricing</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {trustPoints.map((point, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-start gap-5 p-7 rounded-2xl bg-card border-2 border-primary/15 shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-foreground text-lg md:text-xl font-bold leading-snug">{point.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container text-center max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Get Your Transparent Quote Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for Ohio businesses.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-lg px-14 py-7 rounded-xl shadow-2xl group uppercase tracking-wider">
              Request Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Pricing;
