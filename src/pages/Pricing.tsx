import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Eye, TrendingDown, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productCollage from "@/assets/product-collage-hero.jpg";
import businessCards from "@/assets/business-cards-letterhead-stack.jpg";
import vehicleFleet from "@/assets/branded-vehicle-fleet.jpg";

const savingsData = [
  { order: "$500", traditional: "$750 – $1,000", buckeye: "$590", save: "$160–$410" },
  { order: "$1,000", traditional: "$1,500 – $2,000", buckeye: "$1,180", save: "$320–$820" },
  { order: "$2,500", traditional: "$3,750 – $5,000", buckeye: "$2,875", save: "$875–$2,125" },
];

const feeData = [
  { size: "Under $500", fee: "25%", example: "+ $250", total: "$1,250" },
  { size: "$500 – $2,000", fee: "18%", example: "+ $180", total: "$1,180" },
  { size: "Over $2,000", fee: "15%", example: "+ $150", total: "$1,150" },
];

const trustPoints = [
  { icon: Eye, text: "You always see the actual supplier cost" },
  { icon: TrendingDown, text: "You pay true wholesale pricing" },
  { icon: Shield, text: "Bigger orders = even lower percentage" },
  { icon: Handshake, text: "Full transparency builds real trust" },
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
          Pricing – True Wholesale Cost + Our Small Transparent Fee
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
          <p>
            At Buckeye Biz Hub we do things differently. We are on the side of helping small businesses grow and thrive.
          </p>
          <p>
            We have wholesale accounts with over 4,300 printing and item suppliers, giving us true wholesale pricing. Instead of marking up the product like most printers, we simply add a small, transparent fee for sourcing, paying the supplier upfront, fulfillment, delivery, and handling everything for you.
          </p>
          <p className="font-semibold text-foreground">
            We offer full transparency and are happy to show you the full supplier costs at every step — no hidden markups, no games, no surprises.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Savings Comparison */}
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            See How Much You <span className="text-primary">Save</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border-2 border-primary/20 overflow-hidden shadow-xl bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Order Size</th>
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Traditional Printer<br /><span className="font-normal text-primary-foreground/70 text-xs">(Typical 50–100% Markup)</span></th>
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Buckeye Biz Hub<br /><span className="font-normal text-primary-foreground/70 text-xs">(Transparent Cost + Fee)</span></th>
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">You Save</th>
                </tr>
              </thead>
              <tbody>
                {savingsData.map((row, i) => (
                  <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card" : "bg-secondary/30"}`}>
                    <td className="px-6 py-5 font-bold text-foreground text-lg">{row.order}</td>
                    <td className="px-6 py-5 text-muted-foreground line-through opacity-60">{row.traditional}</td>
                    <td className="px-6 py-5 font-bold text-primary text-lg">{row.buckeye}</td>
                    <td className="px-6 py-5 font-black text-primary text-lg">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Fee Structure */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Our <span className="text-primary">Transparent</span> Pricing
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border-2 border-primary/20 overflow-hidden shadow-xl bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-foreground text-primary-foreground">
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Order Size<br /><span className="font-normal text-primary-foreground/70 text-xs">(Actual Supplier Cost)</span></th>
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Our Fee %</th>
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Example:<br /><span className="font-normal text-primary-foreground/70 text-xs">Supplier Cost = $1,000</span></th>
                  <th className="px-6 py-5 font-black text-sm uppercase tracking-wider">Your Total</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((row, i) => (
                  <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card" : "bg-secondary/30"}`}>
                    <td className="px-6 py-5 font-bold text-foreground">{row.size}</td>
                    <td className="px-6 py-5 font-black text-primary text-2xl">{row.fee}</td>
                    <td className="px-6 py-5 text-muted-foreground">{row.example}</td>
                    <td className="px-6 py-5 font-bold text-foreground text-lg">{row.total}</td>
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
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={businessCards} alt="Business printing" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-bg))] via-[hsl(var(--hero-bg))/0.95] to-[hsl(var(--hero-bg))]" />
      </div>
      <div className="container relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-primary-foreground text-center mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Why Ohio Businesses <span className="text-primary text-glow-red">Love This Model</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {trustPoints.map((point, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-primary-foreground/[0.04] border border-primary/10"
            >
              <point.icon className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-primary-foreground/80 text-lg font-semibold">{point.text}</span>
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
