import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star, Users, Target, Award, TrendingUp, Briefcase, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const About = () => {
  return (
    <div className="min-h-screen bg-ohio-grey-dark text-primary-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,6%)] via-ohio-grey-dark to-[hsl(0,0%,8%)]" />
        <div className="absolute top-[-200px] right-[-200px] w-[900px] h-[900px] bg-primary/[0.12] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[700px] h-[700px] bg-primary/[0.08] rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[200px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-b from-primary/[0.06] to-transparent skew-x-[-12deg] translate-x-20" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 bg-primary/25 border-2 border-primary/40 rounded-full px-7 py-3 mb-10 shadow-[0_0_30px_hsl(0_80%_42%/0.2)]">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-black text-primary tracking-[0.15em] uppercase">Our Story</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.85] mb-10 text-glow-white"
          >
            About
            <br />
            <span className="text-primary text-glow-red relative">
              Buckeye Biz Hub
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/55 max-w-3xl mx-auto font-medium"
          >
            Rooted in Ohio. Built to Grow Your Business.
          </motion.p>
        </div>
      </section>

      {/* 50+ Years Experience */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-[hsl(0,0%,7%)]">
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[150px]" />
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-transparent via-primary/60 to-transparent" />

        <div className="container relative">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
            >
              <span className="inline-block bg-primary/25 border-2 border-primary/40 text-primary text-xs font-black uppercase tracking-[0.25em] px-6 py-2 rounded-full mb-6 shadow-[0_0_20px_hsl(0_80%_42%/0.15)]">
                Our Mission
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 text-glow-white leading-[0.9]">
                50+ Years of <span className="text-primary text-glow-red">Combined Experience</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/50 leading-relaxed">
                We bring over 50 years of combined experience in printing, branding, and business development directly to your project. Our mission is simple: we provide the tools, strategy, and high-quality materials you need to grow your brand and succeed.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              variants={fadeUp}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, number: "50+", label: "Years Combined Experience" },
                { icon: TrendingUp, number: "3", label: "Businesses Built & Sold" },
                { icon: Target, number: "100%", label: "Client-Focused Approach" },
                { icon: Briefcase, number: "∞", label: "Dedication to Your Growth" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  custom={idx + 2}
                  variants={fadeUp}
                  className="group bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-7 text-center hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(0_80%_42%/0.15)] hover:-translate-y-1"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-red mb-1">{stat.number}</div>
                  <div className="text-xs font-bold text-primary-foreground/40 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Network */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-ohio-grey-dark">
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[140px]" />
        <div className="absolute right-0 top-0 w-1.5 h-full bg-gradient-to-b from-transparent via-primary/60 to-transparent" />

        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block bg-primary/25 border-2 border-primary/40 text-primary text-xs font-black uppercase tracking-[0.25em] px-6 py-2 rounded-full mb-6 shadow-[0_0_20px_hsl(0_80%_42%/0.15)]">
              Our Network
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 text-glow-white leading-[0.9]">
              A Team Built for <span className="text-primary text-glow-red">Your Success</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/50 leading-relaxed">
              Building a business takes more than just a great idea. It requires a dedicated team and a comprehensive strategy. That is why we have cultivated a vast network of industry professionals to support your growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            variants={fadeUp}
            className="max-w-5xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 md:p-14 relative overflow-hidden hover:border-primary/30 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ohio-red-light to-primary" />
            <p className="text-lg md:text-xl text-primary-foreground/55 leading-relaxed text-center">
              When you work with us, you gain access to top-tier experts in <span className="text-primary font-bold">advertising</span>, <span className="text-primary font-bold">business printing</span>, <span className="text-primary font-bold">small business building</span>, and <span className="text-primary font-bold">search engine optimization (SEO)</span>. We pool our knowledge to solve your unique challenges, create exceptional printed materials, and put your brand in front of the right audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* David Stein – Leadership */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-[hsl(0,0%,7%)]">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[150px]" />
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-transparent via-primary/60 to-transparent" />

        <div className="container relative">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
            >
              <span className="inline-block bg-primary/25 border-2 border-primary/40 text-primary text-xs font-black uppercase tracking-[0.25em] px-6 py-2 rounded-full mb-6 shadow-[0_0_20px_hsl(0_80%_42%/0.15)]">
                Leadership
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 text-glow-white leading-[0.9]">
                Meet <span className="text-primary text-glow-red">David Stein</span>
              </h2>
              <h3 className="text-xl md:text-2xl text-primary-foreground/60 font-bold mb-8">
                Head of Business Development
              </h3>
              <p className="text-lg text-primary-foreground/50 leading-relaxed mb-6">
                David Stein knows exactly what it takes to build a company from the ground up. David has successfully started and sold three different businesses across the <span className="text-primary font-bold">hospitality</span>, <span className="text-primary font-bold">restaurant</span>, and <span className="text-primary font-bold">business printing</span> sectors.
              </p>
              <p className="text-lg text-primary-foreground/50 leading-relaxed">
                He understands the daily hurdles business owners face and uses his firsthand experience to guide our clients toward sustainable, long-term growth.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              variants={fadeUp}
              className="flex flex-col gap-5"
            >
              {[
                { icon: Building2, title: "Hospitality", desc: "Built and sold a successful hospitality business" },
                { icon: Briefcase, title: "Restaurant", desc: "Founded and exited a thriving restaurant venture" },
                { icon: Award, title: "Business Printing", desc: "Created and sold a profitable printing company" },
              ].map((biz, idx) => (
                <motion.div
                  key={biz.title}
                  custom={idx + 2}
                  variants={fadeUp}
                  className="group flex items-start gap-5 bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(0_80%_42%/0.15)] hover:-translate-y-1"
                >
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300">
                    <biz.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-black mb-1 group-hover:text-primary transition-colors duration-300">{biz.title}</h4>
                    <p className="text-sm text-primary-foreground/40">{biz.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Goals = Our Goals */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-ohio-grey-dark">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[140px]" />
        <div className="absolute right-0 top-0 w-1.5 h-full bg-gradient-to-b from-transparent via-primary/60 to-transparent" />

        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-primary/25 border-2 border-primary/40 text-primary text-xs font-black uppercase tracking-[0.25em] px-6 py-2 rounded-full mb-6 shadow-[0_0_20px_hsl(0_80%_42%/0.15)]">
              Our Promise
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 text-glow-white leading-[0.9]">
              Your Goals Are <span className="text-primary text-glow-red">Our Goals</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/50 leading-relaxed max-w-3xl mx-auto">
              Whether you need a complete branding overhaul, high-volume commercial printing, or a localized SEO strategy, our team has the background to make it happen. We treat your business goals as our own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(0,0%,5%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,8%)] to-[hsl(0,0%,4%)]" />
        <div className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] bg-primary/[0.1] rounded-full blur-[200px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-10">
              <Star className="w-6 h-6 text-primary fill-primary" />
              <Star className="w-8 h-8 text-primary fill-primary" />
              <Star className="w-6 h-6 text-primary fill-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary-foreground mb-8 leading-[0.85] text-glow-white max-w-5xl mx-auto">
              Let Us Turn Your Vision Into a{" "}
              <span className="text-primary text-glow-red">Thriving Brand</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-primary-foreground/50 mb-16 font-medium max-w-3xl mx-auto">
            Contact our team today to discuss your next project.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-xl sm:text-2xl px-16 py-9 rounded-xl shadow-[0_0_60px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_100px_hsl(0_80%_42%/0.7)] transition-all duration-400 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
                <Phone className="w-6 h-6" />
                Get Your Free Quote Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
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
