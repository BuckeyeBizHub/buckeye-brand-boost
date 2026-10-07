"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "@/lib/compat/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const davidHero = "/assets/david-stein-hero.jpg";
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
  { value: "3", label: "Industries operated in" },
  { value: "$4.5M", label: "BeerTubes sales, up from $79K" },
  { value: "20+", label: "Years operating" },
  { value: "4", label: "Current consulting clients" },
];

const bestFitBullets = [
  "Owner-operators who spend their own money and make their own calls",
  "Established Central Ohio businesses doing $500K-$10M that have outgrown DIY but don't need a full agency",
  "Service businesses with fleets: roofing, HVAC, plumbing, moving, landscaping. You need every vehicle branded without blowing the budget.",
  "Owners at a turning point: scaling up, adding a service, getting ready to sell, or figuring out why marketing isn't working",
  "Owners who want straight advice from someone who has built businesses, not theory from someone who has only advised them",
];

const serviceCards = [
  {
    title: "Branding concierge",
    body: "Printing, promo products, vehicle graphics, signs and embroidered apparel, all handled for you. We shop our Central Ohio vendor network for the best quality and price. You skip the markup of a single shop.",
    linkText: "See our services",
    href: "/services",
  },
  {
    title: "Fleet branding",
    body: "Most service businesses don't need full wraps. They need every vehicle branded at a price that makes sense. David focuses on fleet spot graphics, starting at $150 per vehicle.",
    linkText: "See fleet branding",
    href: "/fleet-wraps",
  },
  {
    title: "Marketing and business advisor",
    body: "Advice from someone who built a company and sold it. David's current advisory work covers Central Ohio businesses in moving, roofing, health and wellness, and legal services. Operator strategy, no agency fluff.",
    linkText: "Learn about consulting",
    href: "/business-consulting",
  },
];

const About = () => {
  usePageSEO({
    title: "About David Stein | Co-founder of Buckeye Biz Hub, Columbus Ohio",
    description:
      "David Stein co-founded and runs Buckeye Biz Hub. He co-founded BeerTubes and grew it from $79K to $4.5M before selling it in 2017, then built SBC Hospitality Group. Branding advice from someone who has built businesses.",
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
              <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-5 py-2 rounded-full mb-6">
                About Buckeye Biz Hub
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] xl:text-6xl font-black leading-[1.05] mb-6 text-primary-foreground">
                Branding advice from someone who's{" "}
                <span className="text-primary text-glow-red">built businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                David Stein co-founded Buckeye Biz Hub and runs it day to day. He has managed a family repair shop, co-founded a patented product company and built a hospitality group. He's lived the problems you're dealing with. That's what he brings to Central Ohio owners.
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
                  alt="David Stein, co-founder of Buckeye Biz Hub in Central Ohio"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(220,30%,3%)/0.95] via-[hsl(220,30%,3%)/0.7] to-transparent pt-16 pb-4 px-5">
                  <p className="text-base font-black text-primary-foreground leading-tight">
                    David Stein
                  </p>
                  <p className="text-xs text-primary-foreground/75 font-semibold">
                    Co-founder, Buckeye Biz Hub · Columbus, Ohio
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Three companies */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              The operator behind Buckeye Biz Hub
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Three companies. Three industries.{" "}
              <span className="text-primary">20+ years of operating.</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most marketing consultants have never run a business. They've worked at agencies and taken courses. David has helped run three.
              </p>
              <p>
                Clintonville Automotive Repair Service, 2001–2006. David was service manager at his family's independent repair shop, a third-generation business. That's where he learned the basics: take care of the customer, keep the schedule moving, and run a trades business in Central Ohio.
              </p>
              <p>
                BeerTubes, 2005–2017. David co-founded the company, served as president and is a named inventor on its patents. He grew sales from $79K in year one to $4.5M. Customers included Anheuser-Busch InBev, MillerCoors, Constellation Brands and more than 100 distributors. He sold the company in 2017.
              </p>
              <p>
                SBC Hospitality Group, 2017–2023. David founded the group and served as president. It included Stein Brewing Co. in Mount Vernon, a Newark brewery and The Joint diner. He also co-owned a Dave's Cosmic Subs franchise. More than 100 employees.
              </p>
              <p>
                He holds a psychology degree from The Ohio State University.
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
                  "I've spent over 20 years building businesses in Central Ohio. I've failed, succeeded, scaled, sold and started again. Most owners don't need more marketing theory. They need someone who's been where they are and will tell them what works."
                </p>
                <footer className="mt-5">
                  <p className="font-bold text-primary text-base">David Stein, co-founder</p>
                </footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Why this matters */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Advice from an operator
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Why this matters{" "}
              <span className="text-primary">for your business</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most consultants who tell you to spend on branding have never made Friday payroll with their own money. David has.
              </p>
              <p>
                Most agencies pitching a plan have never been up at 3 AM wondering if next month's revenue will land. David has been there too.
              </p>
              <p>
                That changes the advice. Sometimes the answer is spend less, on the one thing that moves your business. Sometimes the problem is operations, and marketing won't fix it. Sometimes you don't need a $4,000 wrap. You need eight $400 spot graphics packages. You get that kind of straight answer from someone who has built businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Three ways David helps (cards) */}
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
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              How it works
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.1]">
              Three ways David helps{" "}
              <span className="text-primary">Central Ohio businesses</span>
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

      {/* Section 4: Who we work with best */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Best-fit clients
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Who we work with{" "}
              <span className="text-primary">best</span>
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
              Sound like your business? <span className="text-primary">Let's talk.</span>
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
              Ready to work with{" "}
              <span className="text-primary text-glow-red">an operator?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
              Branding, fleet graphics or strategy, it starts the same way. We talk about what you're trying to do. No pressure. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl transition-all duration-300 group "
                >
                  <Phone className="w-5 h-5" />
                  Get a free quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/business-consulting">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary-foreground hover:bg-primary/10 font-bold text-base md:text-lg px-9 py-7 rounded-2xl"
                >
                  See consulting services
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
                <div className="text-[0.7rem] md:text-xs text-primary-foreground/60 font-bold leading-snug">
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
