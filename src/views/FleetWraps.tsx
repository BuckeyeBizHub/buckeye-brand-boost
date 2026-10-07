"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, X, Check, Wrench, Droplet, Zap, Leaf, HardHat, Home, Package, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "@/lib/compat/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";

const trustItems = [
  { term: "Free quote", detail: "within 24 hours" },
  { term: "Commercial vinyl", detail: "3M and Avery Dennison" },
  { term: "Volume pricing", detail: "the more units, the better" },
  { term: "100% guarantee", detail: "not happy, we make it right" },
];

const FleetWraps = () => {
  usePageSEO({
    title: "Fleet Vehicle Wraps Columbus Ohio | Commercial Fleet Branding | Buckeye Biz Hub",
    description:
      "Fleet wraps in Columbus, Ohio. We shop Central Ohio's best installers so you get the right quality at the right price. Free quote in 24 hours.",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero: same build as the homepage. Words left, truck right. */}
      <section className="border-b border-seam">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-14 pt-32 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-40">
          <div>
            <p className="mb-6 text-[0.95rem] font-medium text-fog">Fleet wraps in Columbus and Central Ohio</p>
            <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold text-stock">
              Every truck. Same look. Working all day.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-stock/80 sm:text-xl">
              Every van, truck and work vehicle becomes a rolling billboard. One clean, consistent look across your
              whole fleet, installed by the shop that does your kind of vehicle best.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-ohio-red-light"
              >
                Get my fleet quote
              </Link>
              <a
                href="tel:+16145613358"
                className="inline-flex items-center justify-center rounded-md border border-seam px-7 py-4 text-base font-semibold text-stock transition-colors hover:border-fog"
              >
                (614) 561-3358
              </a>
            </div>
          </div>
          <figure className="mx-5 sm:mx-6 lg:mx-0">
            <div className="crop">
              <img
                src="/assets/vehicle-wrap-hero.jpg"
                alt="Pickup and cargo vans with matching red and green fleet graphics"
                width={1920}
                height={1080}
                fetchPriority="high"
                className="block aspect-[16/10] w-full rounded-sm object-cover"
              />
            </div>
            <figcaption className="mt-8 text-sm text-fog">Example of matching fleet graphics.</figcaption>
          </figure>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-px border-t border-seam bg-seam lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.term} className="bg-background py-6 pr-4 [&:nth-child(even)]:pl-5 lg:[&:not(:first-child)]:pl-6">
                <dt className="font-display text-lg font-bold text-stock">{item.term}</dt>
                <dd className="mt-1 text-[0.95rem] text-fog">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SECTION 1: Why Fleet Wraps */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-14 text-foreground"
          >
            Why Columbus businesses wrap{" "}
            <span className="text-primary">their fleets</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { stat: "30,000–70,000", label: "Daily impressions per wrapped vehicle in the Columbus market" },
              { stat: "$0.04", label: "Estimated cost per thousand impressions. Lower than any other ad you can buy." },
              { stat: "5–7 years", label: "Average lifespan using 3M or Avery Dennison commercial vinyl" },
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
              Digital ads stop the day your budget runs out. A wrap is paid for once and works every day. On the road, at job sites, in driveways, in the neighborhoods where your next customer lives.
            </p>
            <p>
              For a service business, a wrap puts your name in front of the right customer at the right moment. The homeowner watching your HVAC van pull into the neighbor's driveway is already a warm lead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Concierge Network */}
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
              Why use Buckeye Biz Hub instead of going{" "}
              <span className="text-primary">straight to a wrap shop?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-semibold max-w-3xl mx-auto leading-relaxed">
              We shop Central Ohio's best wrap installers for you. Better quality, better price, no runaround.
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
              Most wrap shops won't tell you this. The best price and the best work for your vehicle are often at two different shops. Installers specialize. Fleet pricing swings a lot from shop to shop. And the nicest website doesn't mean the best work on your box truck.
            </p>
            <p>
              So we act as your branding concierge. We coordinate the job and match it to the right shop.
            </p>
            <p>
              We work with trusted partner shops, independent installers and vinyl specialists across Central Ohio. Bring us your fleet project and we shop it, the way a mortgage broker shops lenders. You get:
            </p>
            <ul className="space-y-3 pl-1">
              {[
                "The right specialist for your vehicles and the job",
                "Competitive pricing without one shop's markup",
                "Our 100% satisfaction guarantee. If you're not happy, we make it right.",
                "One point of contact from start to finish",
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
              <div className="p-4 md:p-5 font-bold text-xs md:text-sm border-r border-primary-foreground/10">
                &nbsp;
              </div>
              <div className="p-4 md:p-5 font-bold text-xs md:text-sm text-center border-r border-primary-foreground/10 flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-primary-foreground/50" />
                Going direct to a wrap shop
              </div>
              <div className="p-4 md:p-5 font-bold text-xs md:text-sm text-center bg-primary flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                Working with Buckeye Biz Hub
              </div>
            </div>

            {[
              { label: "Pricing", left: "One shop's price", right: "Shopped across multiple installers" },
              { label: "Options", left: "Limited to that shop's capabilities", right: "Full Central Ohio installer network" },
              { label: "Your time", left: "Multiple consultations at multiple shops", right: "One conversation with us" },
              { label: "Design", left: "Varies by shop", right: "Included and consistent across all pieces" },
              { label: "Your advocate", left: "The shop", right: "Us. We work for you, not the shop." },
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

      {/* SECTION 3: Fleet Options */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-14 text-foreground"
          >
            Fleet branding for{" "}
            <span className="text-primary">every budget</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Full fleet wraps",
                h3: "Full coverage, biggest impact",
                body: "The loudest option you have. A full wrap covers every painted surface in printed commercial vinyl. Your logo, phone number, website and services, on every side.",
                meta: [
                  { k: "Best for", v: "HVAC, plumbing, electrical, landscaping, moving companies, delivery fleets" },
                  { k: "Lifespan", v: "5–7 years" },
                  { k: "Materials", v: "3M Series 1080, Avery Dennison MPI 1005" },
                ],
              },
              {
                title: "Partial fleet wraps",
                h3: "Strong branding for less",
                body: "A partial wrap covers the spots people see most: sides, doors and the rear. Add vinyl lettering and you get most of the impact for a lot less than a full wrap.",
                meta: [
                  { k: "Best for", v: "Smaller fleets, leased vehicles, businesses that want to change their message later" },
                  { k: "Most popular for", v: "Real estate agents, property managers, professional services" },
                ],
              },
              {
                title: "Fleet decals and spot graphics",
                h3: "Branding on a tight budget",
                body: "Door decals, logos, contact info and spot graphics. A plain work truck becomes a branded one, without paying for a full wrap.",
                meta: [
                  { k: "Best for", v: "Single vehicles, company cars, small fleets, vehicles that change hands often" },
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
                <div className="text-xs font-extrabold text-primary mb-3">
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

      {/* SECTION 4: Industries */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-14 text-foreground"
          >
            Fleet wraps for every{" "}
            <span className="text-primary">Central Ohio trade</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Wrench, title: "HVAC and mechanical", body: "Your vans are in neighborhoods all day. A wrapped fleet gets you noticed by homeowners before they ever search online." },
              { icon: Droplet, title: "Plumbing and drain", body: "Emergency calls go to the name people remember. A wrapped fleet builds that name in every suburb you serve." },
              { icon: Zap, title: "Electrical contractors", body: "Stand out on every job site. A wrapped truck says professional before your tech rings the doorbell." },
              { icon: Leaf, title: "Landscaping and lawn care", body: "Be seen when it counts. Branded trucks and trailers in subdivisions all spring and summer do more marketing than anything else you own." },
              { icon: HardHat, title: "Construction and roofing", body: "Your trucks sit at job sites for days. That's a neighborhood billboard you already paid for." },
              { icon: Home, title: "Real estate and property management", body: "A branded car builds your name across your farm area. Buyers and sellers see an established local agent." },
              { icon: Package, title: "Delivery and logistics", body: "Your delivery route becomes an ad route. Every stop is a chance to be seen." },
              { icon: Heart, title: "Healthcare and dental", body: "Mobile health services and dental practices use branded vehicles to reach patients and get known in town." },
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

      {/* SECTION 5: Process */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-14 text-foreground"
          >
            How our <span className="text-primary">fleet wrap process</span> works
          </motion.h2>

          <div className="relative space-y-6">
            {[
              { title: "Free consult and quote (24-hour response)", body: "Tell us how many vehicles, what kind, how much coverage and your budget. You get a detailed quote within 24 hours. No obligation, no pressure." },
              { title: "We shop our network", body: "We go to our vetted Central Ohio installers, compare quality, price and availability, and bring you the best fit for your job." },
              { title: "Design", body: "We build one look for your whole fleet. Same graphics, same colors, same logo placement on every vehicle. You see a full digital proof before any vinyl gets printed." },
              { title: "Proof approval", body: "Review the designs and ask for changes at no cost. Nothing gets printed until you're happy." },
              { title: "Vinyl production", body: "Your approved design is printed on commercial 3M or Avery Dennison vinyl, with UV-resistant inks and a laminate built for Ohio weather." },
              { title: "Installation and delivery", body: "We schedule installs to keep your downtime low. Bigger fleets get done in phases, so you never lose the whole fleet at once. Every vehicle is inspected before it goes back to you." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex gap-5 rounded-2xl p-6 bg-card border border-border hover:border-primary/40 transition-all"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-ohio-red-light text-primary-foreground font-display font-black text-2xl flex items-center justify-center ">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-black text-foreground mb-2 leading-tight">
                    Step {i + 1}: {step.title}
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

      {/* SECTION 6: Pricing */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="container max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-12 text-foreground"
          >
            What fleet wraps cost:{" "}
            <span className="text-primary">Columbus 2026 pricing</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-card"
          >
            <div className="grid grid-cols-12 bg-ohio-navy text-primary-foreground text-xs md:text-sm font-bold ">
              <div className="col-span-5 p-4 md:p-5 border-r border-primary-foreground/10">Service</div>
              <div className="col-span-3 p-4 md:p-5 border-r border-primary-foreground/10">Price range</div>
              <div className="col-span-4 p-4 md:p-5">Best for</div>
            </div>
            {[
              { s: "Spot decals and logo graphics", p: "$150–$400 per vehicle", b: "Single vehicles, budget branding" },
              { s: "Partial wrap", p: "$800–$1,800 per vehicle", b: "Small fleets, leased vehicles" },
              { s: "Full wrap: car or SUV", p: "$2,000–$3,000 per vehicle", b: "Company cars, agent vehicles" },
              { s: "Full wrap: van or truck", p: "$2,800–$4,000 per vehicle", b: "Service fleets, contractor vehicles" },
              { s: "Full wrap: box truck", p: "$3,500–$6,000 per vehicle", b: "Delivery fleets, large commercial" },
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
              Volume discounts
            </h3>
            <ul className="space-y-3">
              {[
                "3–5 vehicles: 10% off total",
                "6–10 vehicles: 15% off total",
                "11+ vehicles: custom fleet pricing. Call us.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-primary-foreground/90 text-base md:text-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <p className="text-xs text-muted-foreground italic text-center mt-6 max-w-3xl mx-auto leading-relaxed">
            Estimates for the Columbus market in 2026. Your free 24-hour quote sets the final price, based on vehicle condition, design and coverage.
          </p>

          <div className="text-center mt-10">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-10 py-7 rounded-2xl transition-all duration-300 group "
              >
                Get my exact fleet quote, free in 24 hours
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-12 text-foreground"
          >
            Fleet wrap questions,{" "}
            <span className="text-primary">answered</span>
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "How much do fleet vehicle wraps cost in Columbus Ohio?", a: "In Columbus, spot decals run $150–$400 per vehicle. Partial wraps run $800–$1,800. Full wraps on vans and trucks run $2,800–$4,000+. Fleets of 3+ vehicles get volume discounts starting at 10%. Your free 24-hour quote gives you the exact number." },
              { q: "How long do commercial fleet wraps last in Ohio?", a: "A properly installed wrap in commercial 3M or Avery Dennison vinyl usually lasts 5–7 years with care. Hand wash it. Skip automatic car washes with brushes. That's how it holds up to Ohio weather." },
              { q: "Will a vehicle wrap damage my fleet vehicle's paint?", a: "No. Installed and removed the right way, vinyl protects your paint from sun, light scratches and road debris. That matters on leased vehicles, where paint condition hits your end-of-lease costs." },
              { q: "How long does fleet wrap installation take?", a: "One vehicle usually takes 1–3 business days, depending on size and coverage. Bigger fleets get done in phases, so you're never without your whole fleet." },
              { q: "Do you offer fleet pricing for multiple vehicles?", a: "Yes. 10% off for 3–5 vehicles, 15% off for 6–10, and custom pricing for 11+. And because we work with several Central Ohio installers, we shop your job for the best fleet price." },
              { q: "Can you match branding across different vehicle types?", a: "Yes. We build one look that carries across vans, trucks, box trucks, trailers and company cars. Same colors, same logo placement, same message, whatever the size or shape." },
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

      {/* Built by an Operator: credibility insert above final CTA */}
      <section className="py-16 lg:py-20 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Built by an operator
            </span>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-foreground leading-[1.15]">
              Advice from someone who{" "}
              <span className="text-primary">has done it.</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              David Stein co-founded and runs Buckeye Biz Hub. Before that he co-founded BeerTubes, was named inventor on its patents, grew it from $79K in year one to $4.5M, and sold it in 2017. Then he built SBC Hospitality Group to 100+ employees. He's spent his own money on marketing. He knows what works.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2 transition-all"
            >
              Learn more about David
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
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
            Ready to brand your fleet?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-primary-foreground/90 font-semibold mb-10 leading-relaxed"
          >
            Get a free fleet wrap quote within 24 hours. No obligation. No pressure. A clear, detailed plan to turn your trucks into your best ad.
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
                className="bg-background text-foreground hover:bg-background/90 font-black text-base md:text-lg px-10 py-7 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] group w-full sm:w-auto"
              >
                Get my free fleet quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:6145613358">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-black text-base md:text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"
              >
                Call 614-561-3358
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FleetWraps;
