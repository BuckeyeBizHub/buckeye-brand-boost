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
  { value: "500+", label: "Ohio businesses served" },
  { value: "15+ yrs", label: "Inside a real Ohio dental practice" },
  { value: "3", label: "Businesses built from scratch in Central Ohio" },
  { value: "9", label: "Roofing companies served in Central Ohio" },
];

const bestFitBullets = [
  "Have crews, drivers, or staff who represent them in the field every day",
  "Run multiple locations and need consistent branding across all of them",
  "Are heading into a busy season and need materials fast",
  "Have been burned by slow vendors, mediocre quality, or generic results before",
  "Want a real relationship — not a transaction",
];

const About = () => {
  usePageSEO({
    title: "The Story Behind Buckeye Biz Hub | About David Stein",
    description:
      "Buckeye Biz Hub is built by a Central Ohio business owner with 15+ years inside a real dental practice. Concierge branding, fleet wraps, and printed materials for Ohio businesses that want a real partner — not a catalog.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/90 via-ohio-grey-dark to-ohio-navy/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
                About Buckeye Biz Hub
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 text-primary-foreground">
                The Story Behind{" "}
                <span className="text-primary text-glow-red">Buckeye Biz Hub</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl">
                We're not a catalog. We're not a generic vendor. We're a Central Ohio business owner who's been on your side of the table.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="lg:col-span-2 relative max-w-sm mx-auto lg:mx-0 lg:ml-auto"
            >
              <div className="rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={davidHero}
                  alt="David Stein, founder of Buckeye Biz Hub in Central Ohio"
                  className="w-full h-[320px] md:h-[400px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-sm font-bold">David Stein</p>
                <p className="text-xs text-primary-foreground/80">
                  Founder, Buckeye Biz Hub
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1 — The Origin */}
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
              The Origin
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              I didn't start Buckeye Biz Hub because I wanted to{" "}
              <span className="text-primary">sell promotional products.</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                I started it because for 15+ years, I watched my wife{" "}
                <span className="font-bold text-foreground">Dr. Kerry Stein</span>{" "}
                build and run Marion Endodontics in Marion, Ohio — and I handled everything on the operations and procurement side. Branded scrubs. Staff uniforms. Holiday referral gift packages with Jeni's Ice Cream, Cheryl's Cookies, Velvet Ice Cream, and Al's Popcorn. Business cards, appointment cards, window decals, office signage, letterhead, exam room materials — all of it.
              </p>
              <p>
                I learned what Ohio businesses actually need when they're trying to look professional, keep costs reasonable, and find a partner they can trust to get it right without having to explain themselves from scratch every time.
              </p>
              <p className="text-foreground font-semibold">
                That experience is what Buckeye Biz Hub is built on.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — What I've Built */}
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
              What I've Built
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Three businesses built from scratch.{" "}
              <span className="text-primary">Right here in Central Ohio.</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Before launching Buckeye Biz Hub, I built{" "}
                <span className="font-bold text-foreground">3 businesses from the ground up</span>{" "}
                here in Central Ohio. I know what it's like to be the person who has to figure out the branding, the materials, the uniforms, and the marketing — while also running everything else.
              </p>
              <p>
                In the last 20 months, I worked alongside a local vehicle wrap company and helped them{" "}
                <span className="font-bold text-foreground">double their fleet branding division's revenue</span>. I learned how fleet graphics, vehicle wraps, and branded driver gear work at scale — and what separates the jobs that generate leads from the ones that don't.
              </p>
              <p>
                Today, we've worked with{" "}
                <span className="font-bold text-foreground">9 Central Ohio roofing companies</span>, dozens of dental and medical practices, construction GCs, logistics companies, and local Ohio businesses across many sectors. In every case, we bring the same thing: real industry knowledge, wholesale pricing through our supplier network, and a concierge approach that means you don't have to babysit the process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Why This Is Different */}
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
              Why This Is Different
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Most vendors are glorified{" "}
              <span className="text-primary">online storefronts.</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                You pick from a catalog, upload a logo, and hope it turns out okay. There's no one on the other end who knows what a fleet wrap needs to hold up through an Ohio winter, or what kind of referral gifts actually get used at a dental office versus what ends up in a drawer.
              </p>
              <p>
                We're different because we've been{" "}
                <span className="font-bold text-foreground">inside the businesses we serve.</span>{" "}
                We know the difference between what sounds good and what actually works.
              </p>
              <p>
                That's why we call it{" "}
                <span className="text-primary font-bold">concierge service</span> — not because it sounds nice, but because it's literally what we do. We source, we design, we coordinate, and we deliver. You get one reliable partner instead of three different vendors and a project you have to manage yourself.
              </p>
            </div>
          </motion.div>
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
              Who We Work With Best
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              We do our best work for{" "}
              <span className="text-primary">Ohio businesses that:</span>
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
              If that's you, <span className="text-primary">we should talk.</span>
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
              Ready to work with someone who{" "}
              <span className="text-primary text-glow-red">actually gets it?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
              We offer free 24-hour quotes and a no-obligation cost comparison showing exactly what our wholesale network can provide versus what you're currently paying.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.45)] hover:shadow-[0_0_70px_hsl(0_80%_42%/0.65)] transition-all duration-300 group uppercase tracking-wider"
                >
                  <Phone className="w-5 h-5" />
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/industries">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary-foreground hover:bg-primary/10 font-bold text-base md:text-lg px-9 py-7 rounded-2xl"
                >
                  See the Industries We Serve
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
