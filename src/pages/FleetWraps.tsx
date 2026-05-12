import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Clock, Award, MapPin, TrendingUp, X, Check, Wrench, Droplet, Zap, Leaf, HardHat, Home, Package, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";

const trustItems = [
  { icon: Clock, label: "Free 24-Hour Quote" },
  { icon: Award, label: "3M and Avery Dennison Vinyl" },
  { icon: MapPin, label: "Serving Central Ohio Since 2018" },
  { icon: TrendingUp, label: "Volume Fleet Pricing Available" },
];

const FleetWraps = () => {
  usePageSEO({
    title: "Fleet Vehicle Wraps Columbus Ohio | Commercial Fleet Branding | Buckeye Biz Hub",
    description:
      "Columbus Ohio's fleet wrap specialists. Full-fleet and partial-fleet vehicle branding for HVAC, plumbing, landscaping, construction and service businesses. Free 24-hour quote. Serving Central Ohio.",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero — matches /portfolio styling */}
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-44 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1200px] h-[1200px] rounded-full bg-primary/[0.18] blur-[220px]" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[700px] h-[500px] rounded-full bg-ohio-red-glow/[0.12] blur-[140px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]"
          >
            <Sparkles className="w-4 h-4" /> Fleet Wraps <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary-foreground leading-[0.95] mb-10"
            style={{ textShadow: "0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)" }}
          >
            Fleet Vehicle Wraps for{" "}
            <span className="text-primary text-glow-red relative">
              Columbus Ohio Businesses
              <motion.span
                className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/60 max-w-4xl mx-auto font-semibold tracking-wide leading-relaxed"
          >
            Turn Every Van, Truck and Work Vehicle Into a Rolling Billboard — Consistent, Professional Branding Across Your Entire Fleet
          </motion.p>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-xl p-4 text-left"
              >
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs md:text-sm font-bold text-primary-foreground/85 leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-10 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.45)] hover:shadow-[0_0_70px_hsl(0_80%_42%/0.65)] transition-all duration-300 group uppercase tracking-wider"
              >
                <CheckCircle2 className="w-5 h-5" />
                Get My Fleet Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 — Why Fleet Wraps */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-14 text-foreground"
          >
            Why Columbus Businesses Invest in{" "}
            <span className="text-primary">Fleet Wraps</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { stat: "30,000–70,000", label: "Daily impressions per wrapped vehicle in the Columbus market" },
              { stat: "$0.04", label: "Estimated cost per thousand impressions — lower than any other advertising medium" },
              { stat: "5–7 Years", label: "Average lifespan using 3M or Avery Dennison commercial vinyl" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 bg-gradient-to-br from-ohio-navy to-ohio-grey-dark border border-primary/20 text-center shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="font-display text-4xl md:text-5xl font-black text-primary mb-4 text-glow-red">
                  {card.stat}
                </div>
                <p className="text-sm md:text-base text-primary-foreground/75 font-semibold leading-relaxed">
                  {card.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Unlike digital ads that disappear when your budget runs out, a fleet wrap is a one-time investment that works every day — on the road, parked at job sites, sitting in driveways, and driving through neighborhoods where your next customer lives.
            </p>
            <p>
              For service businesses in Columbus, fleet branding does something digital advertising cannot: it puts your brand physically in front of your ideal customer at the exact moment they need you. A homeowner watching your wrapped HVAC van pull up to their neighbor's house is already a warm lead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Concierge Network */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl font-black mb-6 text-foreground leading-tight">
              Why Work With Buckeye Biz Hub Instead of Going{" "}
              <span className="text-primary">Directly to a Wrap Shop?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-semibold max-w-3xl mx-auto leading-relaxed">
              We Shop Central Ohio's Best Wrap Installers on Your Behalf — So You Get Better Quality, Better Pricing, and Zero Runaround.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
          >
            <p>
              Here's something most wrap shops won't tell you: the best price and the best quality for your specific vehicle and budget aren't always at the same place. Different installers specialize in different vehicle types. Fleet pricing varies significantly between shops. And the shop with the nicest website isn't always the one that will do the best work on your box truck.
            </p>
            <p>
              That's exactly why Buckeye Biz Hub operates as your branding concierge rather than a single-shop installer.
            </p>
            <p>
              We've built working relationships with a curated network of Central Ohio's top-rated wrap installers, specialty graphic shops, and independent vinyl specialists. When you bring us a fleet wrap project, we go to work on your behalf — just like a mortgage broker shops lenders to get you the best rate, we shop our installer network to get you:
            </p>
            <ul className="space-y-3 pl-1">
              {[
                "The right specialist for your vehicle type and scope",
                "Competitive pricing without single-shop markups",
                "Quality guarantees backed by our concierge oversight",
                "A single point of contact throughout the entire project",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-foreground text-lg md:text-xl pt-2">
              You deal with us. We deal with the shops. You get the best outcome.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-card"
          >
            <div className="grid grid-cols-3 bg-ohio-navy text-primary-foreground">
              <div className="p-4 md:p-5 font-bold text-xs md:text-sm uppercase tracking-wider border-r border-primary-foreground/10">
                &nbsp;
              </div>
              <div className="p-4 md:p-5 font-bold text-xs md:text-sm uppercase tracking-wider text-center border-r border-primary-foreground/10 flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-primary-foreground/50" />
                Going Direct to a Wrap Shop
              </div>
              <div className="p-4 md:p-5 font-bold text-xs md:text-sm uppercase tracking-wider text-center bg-primary flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                Working with Buckeye Biz Hub
              </div>
            </div>

            {[
              { label: "Pricing", left: "One shop's price", right: "Shopped across multiple installers" },
              { label: "Options", left: "Limited to that shop's capabilities", right: "Full Central Ohio installer network" },
              { label: "Your time", left: "Multiple consultations at multiple shops", right: "One conversation with us" },
              { label: "Design", left: "Varies by shop", right: "Included and consistent across all pieces" },
              { label: "Your advocate", left: "The shop", right: "Us — always working for your best outcome" },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-background" : "bg-muted/40"} border-t border-border`}
              >
                <div className="p-4 md:p-5 font-bold text-sm md:text-base text-foreground border-r border-border">
                  {row.label}
                </div>
                <div className="p-4 md:p-5 text-sm md:text-base text-muted-foreground border-r border-border">
                  {row.left}
                </div>
                <div className="p-4 md:p-5 text-sm md:text-base text-foreground font-semibold bg-primary/[0.04]">
                  {row.right}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — Fleet Options */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-14 text-foreground"
          >
            Fleet Branding Options for{" "}
            <span className="text-primary">Every Budget</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Full Fleet Wraps",
                h3: "Maximum Impact — Full Vehicle Coverage",
                body: "The most powerful branding statement available. Full wraps cover the entire painted surface in custom-printed commercial vinyl. Bold graphics, your logo, phone number, website, and service list wrap every visible surface.",
                meta: [
                  { k: "Best for", v: "HVAC, plumbing, electrical, landscaping, moving companies, delivery fleets" },
                  { k: "Lifespan", v: "5–7 years" },
                  { k: "Materials", v: "3M Series 1080, Avery Dennison MPI 1005" },
                ],
              },
              {
                title: "Partial Fleet Wraps",
                h3: "High-Impact Branding at a Lower Investment",
                body: "Partial wraps focus on your vehicle's highest-visibility zones — sides, doors, and rear panel. Combined with professional vinyl lettering, partial wraps deliver exceptional results at significantly lower cost than full coverage.",
                meta: [
                  { k: "Best for", v: "Smaller fleets, leased vehicles, businesses wanting flexibility to update messaging" },
                  { k: "Most popular for", v: "Real estate agents, property managers, professional services" },
                ],
              },
              {
                title: "Fleet Decals and Spot Graphics",
                h3: "Professional Branding for Every Budget",
                body: "Door decals, logo graphics, contact information vinyl, and spot graphics that transform plain work vehicles into branded assets — without the full-wrap investment.",
                meta: [
                  { k: "Best for", v: "Single vehicles, company cars, small fleets, vehicles that change hands frequently" },
                  { k: "Starting at", v: "$150–$400 per vehicle" },
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-7 bg-card border border-border hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all flex flex-col"
              >
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary mb-3">
                  {card.title}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-4 leading-tight">
                  {card.h3}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {card.body}
                </p>
                <div className="mt-auto space-y-2 pt-4 border-t border-border">
                  {card.meta.map((m) => (
                    <div key={m.k} className="text-sm">
                      <span className="font-bold text-foreground">{m.k}:</span>{" "}
                      <span className="text-muted-foreground">{m.v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Industries */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-14 text-foreground"
          >
            Fleet Wraps for Every{" "}
            <span className="text-primary">Central Ohio Industry</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Wrench, title: "HVAC and Mechanical", body: "Your service vans are in neighborhoods all day. A professionally wrapped fleet gets you noticed by homeowners who need you — before they ever search online." },
              { icon: Droplet, title: "Plumbing and Drain Services", body: "Emergency calls come from reputation and visibility. Fleet wraps build both simultaneously across every Columbus suburb you service." },
              { icon: Zap, title: "Electrical Contractors", body: "Stand out on every job site and in every neighborhood. Your wrapped vehicles signal professionalism before your technician rings the doorbell." },
              { icon: Leaf, title: "Landscaping and Lawn Care", body: "Seasonal visibility when it counts most. Your branded trucks and trailers in subdivisions during spring and summer are your most powerful marketing tool." },
              { icon: HardHat, title: "Construction and Roofing", body: "Parked at job sites for days at a time — your fleet is a neighborhood billboard with zero additional cost per impression." },
              { icon: Home, title: "Real Estate and Property Management", body: "Professional vehicle branding builds name recognition across your farm area and signals to buyers and sellers that you're an established local expert." },
              { icon: Package, title: "Delivery and Logistics", body: "Turn your delivery route into a branding route. Every stop is a marketing moment for the businesses watching your van arrive." },
              { icon: Heart, title: "Healthcare and Dental", body: "Mobile health services and dental practices use fleet branding to reach patients and build community presence." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="rounded-2xl p-6 bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Process */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-14 text-foreground"
          >
            How Our <span className="text-primary">Fleet Wrap Process</span> Works
          </motion.h2>

          <div className="relative space-y-6">
            {[
              { title: "Free Consultation and Quote (24-hour response)", body: "Tell us your fleet count, vehicle types, coverage goals, and budget. We respond with a detailed quote within 24 hours. No obligation, no pressure." },
              { title: "We Shop Our Network", body: "We reach out to our vetted Central Ohio installer network, compare options on quality, pricing, and availability, and bring you the best match for your specific project." },
              { title: "Custom Design Development", body: "Our design team creates a unified fleet branding system — consistent graphics, color matching, and logo placement across every vehicle. You receive a full digital proof before any vinyl is produced." },
              { title: "Proof Approval", body: "Review your designs and request changes at no cost. We don't go to production until you're 100% satisfied." },
              { title: "Premium Vinyl Production", body: "Your approved designs are printed on commercial-grade 3M or Avery Dennison vinyl with UV-resistant inks and protective laminates built for Ohio's seasonal conditions." },
              { title: "Professional Installation and Delivery", body: "We coordinate installation scheduling to minimize downtime. For larger fleets, we phase installations so you're never without your full fleet. Every vehicle is inspected before delivery." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex gap-5 rounded-2xl p-6 bg-card border border-border hover:border-primary/40 transition-all"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-ohio-red-light text-primary-foreground font-display font-black text-2xl flex items-center justify-center shadow-[0_8px_25px_hsl(0_80%_42%/0.35)]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-black text-foreground mb-2 leading-tight">
                    Step {i + 1} — {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Pricing */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="container max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-12 text-foreground"
          >
            Fleet Wrap Investment —{" "}
            <span className="text-primary">Columbus Ohio 2026 Pricing</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-card"
          >
            <div className="grid grid-cols-12 bg-ohio-navy text-primary-foreground text-xs md:text-sm font-bold uppercase tracking-wider">
              <div className="col-span-5 p-4 md:p-5 border-r border-primary-foreground/10">Service</div>
              <div className="col-span-3 p-4 md:p-5 border-r border-primary-foreground/10">Price Range</div>
              <div className="col-span-4 p-4 md:p-5">Best For</div>
            </div>
            {[
              { s: "Spot Decals and Logo Graphics", p: "$150–$400 per vehicle", b: "Single vehicles, budget branding" },
              { s: "Partial Wrap", p: "$800–$1,800 per vehicle", b: "Small fleets, leased vehicles" },
              { s: "Full Wrap — Car or SUV", p: "$2,000–$3,000 per vehicle", b: "Company cars, agent vehicles" },
              { s: "Full Wrap — Van or Truck", p: "$2,800–$4,000 per vehicle", b: "Service fleets, contractor vehicles" },
              { s: "Full Wrap — Box Truck", p: "$3,500–$6,000 per vehicle", b: "Delivery fleets, large commercial" },
            ].map((row, i) => (
              <div
                key={row.s}
                className={`grid grid-cols-12 ${i % 2 === 0 ? "bg-background" : "bg-muted/40"} border-t border-border text-sm md:text-base`}
              >
                <div className="col-span-5 p-4 md:p-5 font-bold text-foreground border-r border-border">{row.s}</div>
                <div className="col-span-3 p-4 md:p-5 text-primary font-bold border-r border-border">{row.p}</div>
                <div className="col-span-4 p-4 md:p-5 text-muted-foreground">{row.b}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 rounded-2xl p-7 bg-gradient-to-br from-ohio-navy to-ohio-grey-dark border border-primary/25"
          >
            <h3 className="font-display text-xl md:text-2xl font-black text-primary-foreground mb-5">
              Volume Discounts
            </h3>
            <ul className="space-y-3">
              {[
                "3–5 vehicles: 10% off total",
                "6–10 vehicles: 15% off total",
                "11+ vehicles: Custom fleet pricing — contact us",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-primary-foreground/90 text-base md:text-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <p className="text-xs text-muted-foreground italic text-center mt-6 max-w-3xl mx-auto leading-relaxed">
            Pricing estimates for Columbus Ohio market 2026. Final pricing confirmed in your free 24-hour quote based on vehicle condition, design complexity, and coverage.
          </p>

          <div className="text-center mt-10">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-10 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.35)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.55)] transition-all duration-300 group uppercase tracking-wider"
              >
                Get My Exact Fleet Quote — Free in 24 Hours
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-12 text-foreground"
          >
            Fleet Wrap FAQs —{" "}
            <span className="text-primary">Columbus Ohio</span>
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "How much do fleet vehicle wraps cost in Columbus Ohio?", a: "Fleet wrap pricing in Columbus ranges from $150–$400 per vehicle for spot decals, $800–$1,800 for partial wraps, and $2,800–$4,000+ for full wraps on vans and trucks. Multi-vehicle fleets receive volume discounts starting at 10% for 3+ vehicles. We provide exact pricing in your free 24-hour quote." },
              { q: "How long do commercial fleet wraps last in Ohio?", a: "A professionally installed fleet wrap using commercial-grade 3M or Avery Dennison vinyl typically lasts 5–7 years with proper care. Hand washing is recommended — avoid automated car washes with abrasive brushes to maximize lifespan in Ohio's weather conditions." },
              { q: "Will a vehicle wrap damage my fleet vehicle's paint?", a: "No — when installed and removed properly, commercial vinyl wraps protect your paint from UV damage, minor scratches, and road debris. This is especially valuable for leased fleet vehicles where paint condition affects end-of-lease costs." },
              { q: "How long does fleet wrap installation take?", a: "Individual vehicles typically take 1–3 business days depending on size and coverage. For larger fleets, we schedule installations in phases so you're never without your full operational fleet." },
              { q: "Do you offer fleet pricing for multiple vehicles?", a: "Yes. Volume discounts start at 10% for 3–5 vehicles, 15% for 6–10 vehicles, and custom pricing for 11+ vehicles. Because we work with a network of Central Ohio installers, we can also shop for the most competitive fleet pricing available for your specific project." },
              { q: "Can you match branding across different vehicle types?", a: "Absolutely. We create unified fleet branding systems that maintain consistent colors, logo placement, and messaging across every vehicle type — vans, trucks, box trucks, trailers, and company cars — regardless of size or shape differences." },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="font-display text-base md:text-lg font-black text-foreground text-left hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-ohio-red-light to-primary opacity-90" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="container relative text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
          >
            Ready to Brand Your Columbus Ohio Fleet?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-primary-foreground/90 font-semibold mb-10 leading-relaxed"
          >
            Get a free fleet wrap quote within 24 hours. No obligation. No pressure. Just a clear, detailed proposal for turning your vehicles into your best marketing asset.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 font-black text-base md:text-lg px-10 py-7 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] group uppercase tracking-wider w-full sm:w-auto"
              >
                Get My Free Fleet Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:6145613358">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-black text-base md:text-lg px-10 py-7 rounded-2xl uppercase tracking-wider w-full sm:w-auto"
              >
                Call 614-561-3358
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
  );
};

export default FleetWraps;
