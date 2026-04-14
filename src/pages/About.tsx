import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Heart,
  Clock,
  Shield,
  Handshake,
  MapPin,
  Users,
  DollarSign,
  Award,
  TrendingUp,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import davidHero from "@/assets/david-stein-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const whyDifferent = [
  {
    icon: Handshake,
    title: "True Concierge Service",
    desc: "We handle design, sourcing, printing, and delivery so you don't have to.",
  },
  {
    icon: MapPin,
    title: "Local to Columbus, Ohio",
    desc: "We understand the Central Ohio market and what works here.",
  },
  {
    icon: DollarSign,
    title: "Honest, Transparent Pricing",
    desc: "No hidden fees — ever. You see exactly what you're paying for.",
  },
  {
    icon: Clock,
    title: "Fast 24-Hour Quotes",
    desc: "Quick quotes and reliable turnaround times you can count on.",
  },
  {
    icon: TrendingUp,
    title: "Built for Small Business",
    desc: "Focused on helping small businesses compete and shine like the big guys.",
  },
];

const coreValues = [
  { icon: Shield, label: "Honesty and transparency in everything we do" },
  { icon: Clock, label: "Fast, reliable service you can count on" },
  { icon: Heart, label: "Helping small businesses look professional without breaking the bank" },
  { icon: Users, label: "Building long-term relationships with our clients" },
];

const communities = [
  "Columbus",
  "Powell",
  "Lewis Center",
  "Dublin",
  "Westerville",
  "Hilliard",
  "Delaware",
  "Grove City",
];

const About = () => {
  usePageSEO({
    title: "About Buckeye Biz Hub – Your Columbus Branding Concierge",
    description:
      "Meet David Stein, Your Buckeye Branding Concierge. Buckeye Biz Hub is Ohio-owned, locally rooted, and built to help Columbus small businesses look professional and grow — without the stress or high prices.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/90 via-ohio-grey-dark to-ohio-navy/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 text-primary-foreground">
                Meet Your{" "}
                <span className="text-primary">Buckeye Branding Concierge</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-lg">
                Rooted in Ohio. Built to help local businesses look professional
                and grow — without the stress or high prices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={davidHero}
                  alt="David Stein, Your Buckeye Branding Concierge at Buckeye Biz Hub"
                  className="w-full h-[350px] md:h-[450px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl px-6 py-3 shadow-lg">
                <p className="text-sm font-bold">David Stein</p>
                <p className="text-xs text-primary-foreground/80">
                  Your Buckeye Branding Concierge
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 text-foreground leading-tight">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

            <div className="prose prose-lg max-w-none text-muted-foreground leading-[1.9] space-y-6">
              <p>
                Hi, I'm <span className="font-bold text-foreground">David Stein</span>, founder of Buckeye Biz Hub.
                After spending years in the printing and promotional products
                industry, I saw how frustrating it was for small businesses in
                Columbus and Central Ohio to get high-quality work done quickly
                and affordably.
              </p>
              <p>
                So I started Buckeye Biz Hub as a true local concierge service —
                one place where you can get everything from business cards and
                flyers to yard signs, vehicle wraps, and promotional products,
                all handled with care and transparency.
              </p>
              <p>
                I'm a third-generation entrepreneur. I grew up watching my
                family build and run businesses right here in Ohio, so I know
                exactly how hard it is to make every single dollar count. Every
                expense matters. Every decision can mean the difference between
                just surviving and actually thriving.
              </p>
              <p>
                Over the years I've personally consulted with more than{" "}
                <span className="text-primary font-bold">35 local Ohio companies</span>,
                helping them save over{" "}
                <span className="text-primary font-bold">$1.3 million</span>{" "}
                in unnecessary spending — not by cutting corners, but by guiding
                them to the best options with complete honesty and transparency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why We're Different ──────────────────────────── */}
      <section className="py-20 lg:py-28 bg-ohio-cream">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              The Buckeye Difference
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Why We're <span className="text-primary">Different</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyDifferent.map((item, idx) => (
              <motion.div
                key={item.title}
                custom={idx + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-background border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Our <span className="text-primary">Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, number: "35+", label: "Ohio Companies Helped" },
              { icon: DollarSign, number: "$1.3M+", label: "Saved for Clients" },
              { icon: Award, number: "3rd Gen", label: "Entrepreneur" },
              { icon: TrendingUp, number: "100%", label: "Transparent Pricing" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                custom={idx + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-ohio-cream border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-ohio-cream">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block bg-ohio-navy/10 border border-ohio-navy/30 text-ohio-navy text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              What Guides Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Our Core <span className="text-primary">Values</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-5">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.label}
                custom={idx + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex items-start gap-4 bg-background border border-border rounded-xl p-6"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {value.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
                Our Clients
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-foreground leading-tight">
                Who We <span className="text-primary">Proudly Serve</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We proudly partner with businesses and organizations throughout
                Central Ohio and beyond. Whether you're in Columbus or one of
                the surrounding communities within a 50-mile radius, we provide
                concierge-level printing, promotional products, signage, and
                branding solutions tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Cities column */}
              <motion.div
                custom={1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-ohio-cream border border-border rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-black text-foreground">
                    Cities & Communities We Serve
                  </h3>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {[
                    "Columbus", "Powell", "Lewis Center", "Dublin",
                    "Westerville", "Hilliard", "Delaware", "Grove City",
                    "New Albany", "Gahanna", "Reynoldsburg", "Pickerington",
                    "Canal Winchester", "Pataskala", "Marysville", "London",
                    "Circleville", "Lancaster", "Newark",
                  ].map((city) => (
                    <li key={city} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      {city}
                    </li>
                  ))}
                  <li className="col-span-2 flex items-center gap-2 text-sm text-primary font-semibold mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    And throughout Central Ohio (including Dayton &amp; Springfield)
                  </li>
                </ul>
              </motion.div>

              {/* Industries column */}
              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-ohio-cream border border-border rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-black text-foreground">
                    Industries & Business Types
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Real Estate Agents & Property Management",
                    "Restaurants, Cafés & Food Trucks",
                    "Contractors & Construction Companies",
                    "HVAC, Plumbing & Electrical Services",
                    "Auto Repair Shops & Automotive Businesses",
                    "Retail Stores & Boutiques",
                    "Professional Services (Law, Accounting, Consulting)",
                    "Healthcare & Medical Offices",
                    "Non-Profits & Charitable Organizations",
                    "Schools, Colleges & Educational Institutions",
                    "Churches & Religious Organizations",
                    "Hotels, Hospitality & Event Venues",
                    "Manufacturing & Industrial Companies",
                    "Local Events, Festivals & Sports Teams",
                  ].map((industry) => (
                    <li key={industry} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      {industry}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <p className="text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
              No matter your industry or location in Central Ohio, our goal is
              simple: help your business look professional, stand out, and grow —
              all with honest, concierge-level service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-ohio-grey-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/60 via-ohio-grey-dark to-ohio-navy/40" />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-foreground mb-6 leading-tight max-w-4xl mx-auto">
              Ready to Work with Your Local{" "}
              <span className="text-primary">Branding Partner?</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/50 mb-10 max-w-2xl mx-auto">
              Let's have a real conversation about how we can help your business
              grow.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] transition-all duration-300 group uppercase tracking-wider"
              >
                <Phone className="w-6 h-6" />
                Get Your Free Quote Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────── */}
      <section className="py-6 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-primary-foreground/60 text-sm font-medium">
            {[
              "Ohio Owned & Operated",
              "35+ Companies Helped",
              "$1.3M+ Saved",
              "24-Hour Quotes",
              "Columbus, Ohio",
            ].map((item, idx) => (
              <span key={item} className="flex items-center gap-2">
                {idx > 0 && (
                  <span className="hidden sm:inline text-primary-foreground/20">
                    •
                  </span>
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
