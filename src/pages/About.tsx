import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  MapPin,
  Users,
  Heart,
  Shield,
  Clock,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import davidHero from "@/assets/david-stein-hero.jpg";
import beerTubeProduct from "@/assets/beer-tube-product.jpg";
import daveJasonPhoto from "@/assets/dave-jason-beer-tubes.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const differentiators = [
  "We give you fast, honest quotes — usually within 24 hours",
  "We offer clear, transparent pricing with no hidden fees or surprise charges",
  "We personally manage every project from design to delivery",
  "We prioritize USA-made materials whenever possible",
  "We treat every client like a neighbor, not just another transaction",
];

const coreValues = [
  { icon: Shield, text: "Honesty and transparency in every interaction" },
  { icon: Clock, text: "Fast, reliable service you can actually count on" },
  { icon: Heart, text: "Helping small and medium businesses compete and shine without breaking the bank" },
  { icon: Handshake, text: "Building long-term relationships based on trust and results" },
];

const cities = [
  "Columbus", "Powell", "Lewis Center", "Dublin", "Westerville", "Hilliard",
  "Delaware", "Grove City", "New Albany", "Gahanna", "Reynoldsburg",
  "Pickerington", "Canal Winchester", "Pataskala", "Marysville", "London",
  "Circleville", "Lancaster", "Newark",
];

const industries = [
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

      {/* Hero */}
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
                Local. Personal. Built to help Columbus and Central Ohio
                businesses look professional and grow — without the stress or
                high prices.
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

      {/* Our Story — narrative */}
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
                Hi, I'm{" "}
                <span className="font-bold text-foreground">David Stein</span>,
                founder of Buckeye Biz Hub.
              </p>
              <p>
                My entrepreneurial journey spans more than 30 years. I've
                started three different companies completely from scratch —
                first in the hospitality industry, then in the beverage
                industry, and later in the gasoline industry. Along the way
                I've learned every facet of business: from product development
                and manufacturing to sales, marketing, operations, and scaling
                a company.
              </p>
              <p>
                One of the highlights I'm most known for is{" "}
                <span className="font-bold text-foreground">
                  co-inventing the beer tube
                </span>{" "}
                — that popular beer dispenser you see in bars and restaurants
                all across the country. I took the idea from a simple basement
                prototype all the way to a{" "}
                <span className="text-primary font-bold">
                  $5 million-a-year business
                </span>
                . That experience taught me how to turn a good idea into a
                successful, scalable company while keeping quality high and
                customers happy.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-sm mx-auto my-2"
              >
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={daveJasonPhoto}
                    alt="David Stein and Jason with their beer tube inventions"
                    className="w-full h-auto object-cover rounded-xl"
                    loading="lazy"
                    width={600}
                    height={900}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center italic mt-2">
                  David &amp; Jason with their beer tube invention
                </p>
              </motion.div>
              <p>
                After three decades of building, running, and growing
                businesses, I decided to create something different — a{" "}
                <span className="text-primary font-bold">
                  true local concierge service
                </span>{" "}
                for businesses in Columbus and Central Ohio. That's how Buckeye
                Biz Hub was born.
              </p>
              <p>
                Today, I bring all of that hard-earned knowledge — along with
                our team's combined{" "}
                <span className="font-bold text-foreground">
                  50+ years of real-world business building experience
                </span>{" "}
                — to help small and medium-sized Ohio businesses get the
                professional branding materials they need at fair prices. From
                premium business cards and promotional products to yard signs,
                vehicle wraps, door hangers, banners, and branded apparel, we
                handle it all with honesty, speed, and genuine care.
              </p>
              <p className="text-foreground font-semibold text-xl">
                Our goal is simple: use everything we've learned over the years
                to help you save money, save time, and make your business stand
                out — so you can focus on what you do best.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-sm mx-auto mt-2"
              >
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={beerTubeProduct}
                    alt="The beer tube dispenser co-invented by David Stein"
                    className="w-full h-auto object-cover rounded-xl"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center italic mt-2">
                  The beer tube — co-invented by David Stein
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 lg:py-28 bg-ohio-cream">
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
              What Makes Us{" "}
              <span className="text-primary">Different</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

            <p className="text-center text-lg text-muted-foreground mb-10">
              What makes us different is simple:
            </p>

            <div className="space-y-4">
              {differentiators.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx + 1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="flex items-start gap-4 bg-background border border-border rounded-xl p-5"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
                key={idx}
                custom={idx + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex items-start gap-4 bg-ohio-cream border border-border rounded-xl p-6"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 lg:py-28 bg-ohio-cream">
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
              <motion.div
                custom={1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-background border border-border rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-black text-foreground">
                    Cities & Communities
                  </h3>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {cities.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      {city}
                    </li>
                  ))}
                  <li className="col-span-2 flex items-center gap-2 text-sm text-primary font-semibold mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    And throughout Central Ohio (including Dayton &amp;
                    Springfield)
                  </li>
                </ul>
              </motion.div>

              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-background border border-border rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-black text-foreground">
                    Industries We Serve
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {industries.map((industry) => (
                    <li
                      key={industry}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
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

      {/* Social Proof */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We've already helped{" "}
              <span className="text-primary font-bold">
                hundreds of local Ohio businesses
              </span>{" "}
              get the professional materials they need to stand out and grow.
              Many of our clients tell us the biggest difference is finally
              having a partner who{" "}
              <span className="font-semibold text-foreground">
                truly cares about their success
              </span>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-ohio-grey-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/60 via-ohio-grey-dark to-ohio-navy/40" />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-6 leading-relaxed">
              Ready to work with a local team that makes branding simple,
              affordable, and even enjoyable?
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-foreground mb-4 leading-tight">
              Let's <span className="text-primary">Talk.</span>
            </h2>
            <p className="text-primary-foreground/50 text-lg mb-10">
              Get your free quote today — no pressure, just honest advice and
              great work.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] transition-all duration-300 group uppercase tracking-wider"
              >
                <Phone className="w-6 h-6" />
                Get Your Free Quote in 24 Hours
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
