import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Heart, Clock, Shield, DollarSign, Users, MapPin, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import davidHero from "@/assets/david-stein-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const About = () => {
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
                Meet the Team Behind{" "}
                <span className="text-primary">Buckeye Biz Hub</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/60 leading-relaxed max-w-lg">
                Ohio-owned. Locally rooted. Here to help small businesses thrive.
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
                  alt="David Stein, Co-Founder of Buckeye Biz Hub"
                  className="w-full h-[350px] md:h-[450px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl px-6 py-3 shadow-lg">
                <p className="text-sm font-bold">David Stein</p>
                <p className="text-xs text-primary-foreground/80">The Buckeye Branding Czar</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Letter */}
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
              An Open Letter from{" "}
              <span className="text-primary">David Stein</span>{" "}
              & the Buckeye Biz Hub Team
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

            <div className="prose prose-lg max-w-none text-muted-foreground leading-[1.9] space-y-6">
              <p className="text-xl font-medium text-foreground italic">Dear fellow Ohio business owners,</p>

              <p>My name is David Stein, and together with my team here at Buckeye Biz Hub, I want to personally welcome you.</p>

              <p>I'm a third-generation entrepreneur. I grew up watching my family build and run businesses right here in Ohio, so I know exactly how hard it is to make every single dollar count. Every expense matters. Every decision can mean the difference between just surviving and actually thriving.</p>

              <p>For years I worked as a business consultant, helping over 35 different local Ohio companies with everything from branding and marketing to signage, business printing, SEO, promotional products, vehicle wraps, and full rebrand strategies. Along the way I've helped those businesses save more than <span className="text-primary font-bold">$1.3 million</span> in unnecessary spending — not by cutting corners, but by guiding them to the best options with complete honesty and transparency.</p>

              <p>That experience showed me something important: too many hardworking small businesses in Columbus and across Ohio are being held back by slow turnaround times, hidden fees, and generic service from big out-of-state companies.</p>

              <p className="text-xl font-bold text-foreground">So we started Buckeye Biz Hub.</p>

              <p>We're a 100% Ohio-owned and operated company built on one simple promise: help small businesses not just survive, but thrive. Whether you run a dental practice, HVAC company, restaurant, landscaping crew, auto dealership, real estate agency, construction firm, or any other local business, we want to be the partner that makes your brand stand out — without wasting a single dollar.</p>

              <p>We believe every Ohio business deserves to look as professional as the big guys — without the big-guy prices or wait times. That's why we offer 24-hour quotes, full pricing transparency up front (nothing ever hidden), and a genuine commitment to your success.</p>

              <p>If you're reading this, thank you for being part of the Ohio small-business community. We're here for you — not just as vendors, but as fellow Ohioans who want to see you win.</p>

              <p className="text-xl font-semibold text-foreground mt-8">Let's build something great together.</p>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="mb-0 italic text-foreground">With gratitude,</p>
                <p className="text-2xl font-display font-black text-primary mb-1">David Stein</p>
                <p className="text-sm text-muted-foreground font-medium">Co-Founder & Owner</p>
                <p className="text-sm text-muted-foreground font-medium">Buckeye Biz Hub</p>
                <p className="text-sm text-muted-foreground font-medium">Columbus, Ohio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* David's Consulting Impact */}
      <section className="py-20 lg:py-28 bg-ohio-cream">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-ohio-forest/10 border border-ohio-forest/30 text-ohio-forest text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              Consulting Impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-foreground leading-tight">
              Business Consultant &{" "}
              <span className="text-primary">Local Partner</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              In addition to running Buckeye Biz Hub, David has personally consulted with and helped over{" "}
              <span className="text-primary font-bold">35 different local Ohio companies</span> — saving them more than{" "}
              <span className="text-primary font-bold">$1.3 million</span> in unnecessary spending through honest guidance on branding, marketing, signage, business printing, SEO, promotional products, vehicle wraps, and complete rebrand strategies.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  className="bg-background border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.number}</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Why */}
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
              Our Why
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Why We Do <span className="text-primary">What We Do</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Help Ohio Businesses Thrive",
                desc: "A deep desire to help local small businesses not just survive — but truly thrive and grow.",
              },
              {
                icon: Clock,
                title: "24-Hour Quotes",
                desc: "Fast turnaround with full pricing transparency on every single project, every time.",
              },
              {
                icon: MapPin,
                title: "Real Local Support",
                desc: "We're real Ohioans right here in Columbus — not a faceless, out-of-state call center.",
              },
              {
                icon: Shield,
                title: "Premium Without the Markup",
                desc: "Big-brand quality at honest prices. No hidden fees, no surprises, no games.",
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                custom={idx + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-ohio-cream border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black mb-3 text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
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
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-foreground mb-6 leading-tight max-w-4xl mx-auto">
              Ready to Partner with a Company That Truly{" "}
              <span className="text-primary">Cares About Your Success?</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/50 mb-10 max-w-2xl mx-auto">
              Let's have a real conversation about how we can help your business grow.
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

      {/* Trust Bar */}
      <section className="py-6 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-primary-foreground/60 text-sm font-medium">
            {[
              "35+ Ohio Companies Helped",
              "$1.3 Million+ Saved",
              "100% Satisfaction Guaranteed",
              "Columbus, Ohio",
            ].map((item, idx) => (
              <span key={item} className="flex items-center gap-2">
                {idx > 0 && <span className="hidden sm:inline text-primary-foreground/20">•</span>}
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
