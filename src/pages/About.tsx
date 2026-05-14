import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import davidHero from "@/assets/david-stein-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "3", label: "Companies Founded" },
  { value: "28", label: "Patents (BeerTubes)" },
  { value: "20+", label: "Years Operating" },
  { value: "4", label: "Current Consulting Clients" },
];

const bestFitBullets = [
  "Owner-operators making real decisions with real money — not just marketing managers chasing KPIs",
  "Established Central Ohio businesses doing $500K-$10M who've outgrown DIY but aren't ready for a full agency",
  "Service businesses with fleets — roofing, HVAC, plumbing, moving, landscaping — that need affordable branding across multiple vehicles",
  "Businesses at a transition point — scaling up, launching a new service, preparing for a sale, or trying to figure out why marketing isn't working",
  "Owners who want honest advice from someone who's actually built businesses — not theory from someone who's only ever advised them",
];

const serviceCards = [
  {
    title: "Branding Concierge",
    body: "For businesses that need printing, promotional products, vehicle graphics, signage, embroidered apparel, and coordinated branding execution. We shop our Central Ohio vendor network to get you the best quality and pricing — without the markup of going to a single shop.",
    linkText: "See Our Services",
    href: "/services",
  },
  {
    title: "Fleet Branding Specialist",
    body: "For service businesses with vehicles, David specializes in fleet spot graphics and vehicle branding. Most businesses don't need full wraps — they need every vehicle in their fleet branded affordably. Starting at $150 per vehicle.",
    linkText: "See Fleet Branding",
    href: "/fleet-wraps",
  },
  {
    title: "Marketing & Business Advisor",
    body: "For business owners who want strategic guidance from someone who's built and sold a company. Current advisory work includes Central Ohio businesses in moving, roofing, health & wellness, and legal services. Strategy from an operator, not an agency.",
    linkText: "Learn About Consulting",
    href: "/business-consulting",
  },
];

const About = () => {
  usePageSEO({
    title: "About David Stein — 3-Time Founder & Columbus Ohio Business Operator",
    description:
      "Buckeye Biz Hub is led by David Stein — third-generation Ohio operator, three-time business founder including BeerTubes (28 patents, sold 2017), SBC Hospitality Group, and Clintonville Automotive Repair. Strategic branding from someone who's actually built businesses.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/90 via-ohio-grey-dark to-ohio-navy/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
                About Buckeye Biz Hub
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] xl:text-6xl font-black leading-[1.05] mb-6 text-primary-foreground">
                Strategic Branding From Someone Who's{" "}
                <span className="text-primary text-glow-red">Actually Built Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                David Stein is a third-generation Ohio operator and three-time business founder. He built Buckeye Biz Hub to give Central Ohio business owners what most agencies can't: branding and marketing guidance from someone who's lived their problems firsthand — from running a family service business to inventing a patented product line to opening multiple restaurants.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="lg:col-span-5 relative w-full max-w-[340px] mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl aspect-[4/5]">
                <img
                  src={davidHero}
                  alt="David Stein, founder of Buckeye Biz Hub in Central Ohio"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(220,30%,3%)/0.95] via-[hsl(220,30%,3%)/0.7] to-transparent pt-16 pb-4 px-5">
                  <p className="text-base font-black text-primary-foreground leading-tight">
                    David Stein
                  </p>
                  <p className="text-xs text-primary-foreground/75 font-semibold">
                    Founder · 3-Time Business Founder · Columbus Ohio
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1 — Three Companies */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              The Operator Behind Buckeye Biz Hub
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Three Companies. Three Industries.{" "}
              <span className="text-primary">Decades of Operating Experience.</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most marketing consultants have never built a business. They've worked at agencies. They've studied case studies. They've taken courses. David Stein has built three.
              </p>
              <p>
                Clintonville Automotive Repair Service (2001-2006) — Third-generation family operations. David ran one of Central Ohio's largest independent automotive repair facilities — a third-generation family business serving Columbus customers across decades. This is where the operating fundamentals were learned: service delivery, customer relationships, scheduling under pressure, and the realities of running a trades business in Central Ohio.
              </p>
              <p>
                BeerTubes (2005-2017) — Patented product company sold to industry. While still running Clintonville Automotive, David started BeerTubes from his basement and built it into a category-defining product company. By exit in 2017, BeerTubes held 28 patents, displaced the traditional beverage pitcher in on-premise hospitality, and sold B2B into InBev, Anheuser-Busch, MillerCoors, and Constellation Brands — appearing in their official on-premise catalogs nationally.
              </p>
              <p>
                SBC Hospitality Group (2018-2024) — Multi-concept restaurant operations. After exiting BeerTubes, David founded SBC Hospitality Group and opened three restaurants in a single year: The Joint (a throwback classic diner specializing in milkshakes and smash burgers), Dave's Cosmic Subs (a franchise operation in Mount Vernon, Ohio), and Stein Brewing Company (an upscale brewery). Three concepts, three buyer profiles, three operating models — all running simultaneously.
              </p>
            </div>

            {/* Pull Quote Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-10 relative bg-ohio-navy rounded-2xl p-8 md:p-10 border border-primary/20"
            >
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-primary via-ohio-red-light to-primary rounded-full" />
              <blockquote className="relative">
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed italic font-display">
                  "I've spent over 20 years building businesses in Central Ohio. I've failed, succeeded, scaled, sold, and started again. What I've learned is that most business owners don't need more marketing theory — they need a partner who's been where they are and can tell them what actually works."
                </p>
                <footer className="mt-5">
                  <p className="font-bold text-primary text-base">— David Stein, Founder</p>
                </footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Why This Matters */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              Operator-Level Guidance
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Why This Matters{" "}
              <span className="text-primary">For Your Business</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                When a marketing consultant tells you to invest in branding, they've usually never had to make payroll the next Friday with their own money. David has.
              </p>
              <p>
                When an agency tells you their plan will work, they've usually never been the one waking up at 3 AM wondering if next month's revenue is going to land. David has been there too.
              </p>
              <p>
                That experience changes everything about how branding and marketing decisions get made at Buckeye Biz Hub. Sometimes the recommendation isn't spend more — it's spend less, but spend it on the thing that will actually move your business. Sometimes the real problem isn't marketing — it's operations. Sometimes you don't need a $4,000 vehicle wrap, you need eight $400 spot graphics packages. That's the kind of honest, operator-level guidance you only get from someone who's actually built businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Three Ways David Helps (cards) */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-3xl mb-12"
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.1]">
              Three Ways David Helps{" "}
              <span className="text-primary">Central Ohio Businesses Today</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceCards.map((card, idx) => (
              <motion.div
                key={card.title}
                custom={idx + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                <Link
                  to={card.href}
                  className="group block h-full bg-background border border-border rounded-2xl p-6 md:p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    {card.body}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    {card.linkText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Who We Work With Best */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              Best-Fit Clients
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Who We Work With{" "}
              <span className="text-primary">Best</span>
            </h2>

            <ul className="space-y-3 mb-8">
              {bestFitBullets.map((item, idx) => (
                <motion.li
                  key={idx}
                  custom={idx + 1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="flex items-start gap-4 bg-background border border-border rounded-xl p-5 text-base md:text-lg text-foreground"
                >
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-xl md:text-2xl font-display font-black text-foreground">
              If that sounds like your business — <span className="text-primary">let's talk.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-20 lg:py-28 bg-ohio-grey-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/60 via-ohio-grey-dark to-ohio-navy/40" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-5 leading-tight">
              Ready to Work With{" "}
              <span className="text-primary text-glow-red">an Operator?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
              Whether you need branding execution, fleet vehicle graphics, or strategic guidance — every conversation starts the same way. A real conversation about what you're trying to do. No pressure. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.45)] hover:shadow-[0_0_70px_hsl(0_80%_42%/0.65)] transition-all duration-300 group uppercase tracking-wider"
                >
                  <Phone className="w-5 h-5" />
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/business-consulting">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary-foreground hover:bg-primary/10 font-bold text-base md:text-lg px-9 py-7 rounded-2xl"
                >
                  Explore Consulting Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-2xl p-5"
              >
                <div className="font-display text-2xl md:text-3xl font-black text-primary text-glow-red leading-none mb-2">
                  {s.value}
                </div>
                <div className="text-[0.7rem] md:text-xs text-primary-foreground/60 font-bold uppercase tracking-wider leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
