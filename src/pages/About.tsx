import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star, Users, Target, Award, TrendingUp, Briefcase, Building2, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
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
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,7%)] to-[hsl(0,0%,5%)]" />
        <div className="absolute top-[-250px] right-[-250px] w-[1000px] h-[1000px] bg-primary/[0.15] rounded-full blur-[200px]" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[800px] h-[800px] bg-primary/[0.1] rounded-full blur-[180px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[250px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-b from-primary/[0.08] to-transparent skew-x-[-12deg] translate-x-24" />
        <div className="absolute bottom-0 left-0 w-[200px] h-1/2 bg-gradient-to-t from-primary/[0.05] to-transparent skew-x-[12deg] -translate-x-10" />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
            <div className="inline-flex items-center gap-3 bg-primary/30 border-2 border-primary/50 rounded-full px-8 py-3.5 mb-12 shadow-[0_0_40px_hsl(0_80%_42%/0.25)]">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-black text-primary tracking-[0.2em] uppercase">Our Story</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="font-display text-7xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black leading-[0.8] mb-12 text-glow-white"
          >
            About
            <br />
            <span className="text-primary text-glow-red relative inline-block">
              Buckeye Biz Hub
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ delay: 0.9, duration: 0.9 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground/50 max-w-4xl mx-auto font-bold tracking-wide"
          >
            Rooted in Ohio. Built to Grow Your Business.
          </motion.p>
        </div>
      </section>

      {/* 50+ Years Experience */}
      <section className="py-28 lg:py-36 relative overflow-hidden bg-[hsl(0,0%,6%)]">
        <div className="absolute top-[-150px] right-[-150px] w-[700px] h-[700px] bg-primary/[0.08] rounded-full blur-[170px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[140px]" />
        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-transparent via-primary/70 to-transparent" />

        <div className="container relative">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
            >
              <span className="inline-block bg-primary/30 border-2 border-primary/50 text-primary text-xs font-black uppercase tracking-[0.3em] px-7 py-2.5 rounded-full mb-8 shadow-[0_0_25px_hsl(0_80%_42%/0.2)]">
                01 — Our Mission
              </span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-glow-white leading-[0.85]">
                50+ Years of <span className="text-primary text-glow-red">Combined Experience</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/50 leading-[1.8]">
                We bring over 50 years of combined experience in printing, branding, and business development directly to your project. Our mission is simple: we provide the tools, strategy, and high-quality materials you need to grow your brand and succeed.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              variants={fadeUp}
              className="grid grid-cols-2 gap-7"
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
                  className="group bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_50px_hsl(0_80%_42%/0.2)] hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ohio-red-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center group-hover:bg-primary/30 group-hover:shadow-[0_0_25px_hsl(0_80%_42%/0.3)] transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="font-display text-4xl md:text-5xl font-black text-primary text-glow-red mb-2">{stat.number}</div>
                  <div className="text-xs font-bold text-primary-foreground/40 uppercase tracking-[0.15em]">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Network */}
      <section className="py-28 lg:py-36 relative overflow-hidden bg-ohio-grey-dark">
        <div className="absolute bottom-[-150px] left-[-150px] w-[600px] h-[600px] bg-primary/[0.07] rounded-full blur-[160px]" />
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[120px]" />
        <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-transparent via-primary/70 to-transparent" />

        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-5xl mx-auto text-center mb-20"
          >
            <span className="inline-block bg-primary/30 border-2 border-primary/50 text-primary text-xs font-black uppercase tracking-[0.3em] px-7 py-2.5 rounded-full mb-8 shadow-[0_0_25px_hsl(0_80%_42%/0.2)]">
              02 — Our Network
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-10 text-glow-white leading-[0.85]">
              A Team Built for <span className="text-primary text-glow-red">Your Success</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/50 leading-relaxed max-w-3xl mx-auto">
              Building a business takes more than just a great idea. It requires a dedicated team and a comprehensive strategy. That is why we have cultivated a vast network of industry professionals to support your growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            variants={fadeUp}
            className="max-w-5xl mx-auto relative"
          >
            <div className="bg-primary-foreground/[0.04] border-2 border-primary/20 rounded-3xl p-12 md:p-16 relative overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_60px_hsl(0_80%_42%/0.12)]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-ohio-red-light to-primary" />
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-ohio-red-light to-primary opacity-30" />
              <p className="text-xl md:text-2xl text-primary-foreground/55 leading-[1.8] text-center">
                When you work with us, you gain access to top-tier experts in <span className="text-primary font-black">advertising</span>, <span className="text-primary font-black">business printing</span>, <span className="text-primary font-black">small business building</span>, and <span className="text-primary font-black">search engine optimization (SEO)</span>. We pool our knowledge to solve your unique challenges, create exceptional printed materials, and put your brand in front of the right audience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* David Stein – Leadership */}
      <section className="py-28 lg:py-36 relative overflow-hidden bg-[hsl(0,0%,5%)]">
        <div className="absolute top-[-150px] left-[-150px] w-[700px] h-[700px] bg-primary/[0.08] rounded-full blur-[170px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px]" />
        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-transparent via-primary/70 to-transparent" />

        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="inline-block bg-primary/30 border-2 border-primary/50 text-primary text-xs font-black uppercase tracking-[0.3em] px-7 py-2.5 rounded-full mb-8 shadow-[0_0_25px_hsl(0_80%_42%/0.2)]">
              03 — Leadership
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 text-glow-white leading-[0.85]">
              Meet <span className="text-primary text-glow-red">David Stein</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-primary-foreground/50 font-bold uppercase tracking-wider">
              Head of Business Development
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              variants={fadeUp}
            >
              {/* Featured quote card */}
              <div className="bg-primary-foreground/[0.04] border-2 border-primary/20 rounded-3xl p-10 md:p-14 relative overflow-hidden mb-8 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_50px_hsl(0_80%_42%/0.12)]">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-ohio-red-light to-primary" />
                <div className="absolute top-6 left-10 text-primary/20 font-display text-[6rem] leading-none font-black">"</div>
                <p className="text-lg md:text-xl text-primary-foreground/55 leading-[1.8] relative z-10 mb-8">
                  David Stein knows exactly what it takes to build a company from the ground up. David has successfully started and sold three different businesses across the <span className="text-primary font-black">hospitality</span>, <span className="text-primary font-black">restaurant</span>, and <span className="text-primary font-black">business printing</span> sectors.
                </p>
                <p className="text-lg md:text-xl text-primary-foreground/55 leading-[1.8] relative z-10">
                  He understands the daily hurdles business owners face and uses his firsthand experience to guide our clients toward sustainable, long-term growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={2}
              variants={fadeUp}
              className="flex flex-col gap-6"
            >
              <div className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-2">Businesses Founded & Sold</div>
              {[
                { icon: Building2, title: "Hospitality", desc: "Built and sold a successful hospitality business" },
                { icon: Briefcase, title: "Restaurant", desc: "Founded and exited a thriving restaurant venture" },
                { icon: Award, title: "Business Printing", desc: "Created and sold a profitable printing company" },
              ].map((biz, idx) => (
                <motion.div
                  key={biz.title}
                  custom={idx + 3}
                  variants={fadeUp}
                  className="group flex items-center gap-6 bg-primary-foreground/[0.04] border-2 border-primary-foreground/10 rounded-2xl p-7 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_50px_hsl(0_80%_42%/0.2)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ohio-red-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center group-hover:bg-primary/30 group-hover:shadow-[0_0_20px_hsl(0_80%_42%/0.25)] transition-all duration-300">
                    <biz.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-2xl font-black mb-1 group-hover:text-primary transition-colors duration-300">{biz.title}</h4>
                    <p className="text-sm text-primary-foreground/40 font-medium">{biz.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-primary-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Goals = Our Goals */}
      <section className="py-28 lg:py-36 relative overflow-hidden bg-ohio-grey-dark">
        <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-primary/[0.07] rounded-full blur-[160px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-transparent via-primary/70 to-transparent" />

        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-5xl mx-auto text-center"
          >
            <span className="inline-block bg-primary/30 border-2 border-primary/50 text-primary text-xs font-black uppercase tracking-[0.3em] px-7 py-2.5 rounded-full mb-8 shadow-[0_0_25px_hsl(0_80%_42%/0.2)]">
              04 — Our Promise
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-10 text-glow-white leading-[0.85]">
              Your Goals Are <span className="text-primary text-glow-red">Our Goals</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/50 leading-[1.8] max-w-3xl mx-auto mb-14">
              Whether you need a complete branding overhaul, high-volume commercial printing, or a localized SEO strategy, our team has the background to make it happen. We treat your business goals as our own.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              {["Branding Overhaul", "Commercial Printing", "SEO Strategy", "Business Growth"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-6 py-3 shadow-[0_0_15px_hsl(0_80%_42%/0.1)]">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(0_80%_42%/0.5)]" />
                  <span className="text-sm font-bold text-primary-foreground/60 uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(0,0%,4%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,3%)] via-[hsl(0,0%,6%)] to-[hsl(0,0%,3%)]" />
        <div className="absolute top-[-250px] right-[-150px] w-[900px] h-[900px] bg-primary/[0.12] rounded-full blur-[220px]" />
        <div className="absolute bottom-[-250px] left-[-150px] w-[700px] h-[700px] bg-primary/[0.1] rounded-full blur-[200px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <div className="inline-flex items-center gap-3 mb-12">
              <Star className="w-7 h-7 text-primary fill-primary" />
              <Star className="w-9 h-9 text-primary fill-primary" />
              <Star className="w-7 h-7 text-primary fill-primary" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground mb-10 leading-[0.82] text-glow-white max-w-5xl mx-auto">
              Let Us Turn Your Vision Into a{" "}
              <span className="text-primary text-glow-red">Thriving Brand</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/45 mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
            Contact our team today to discuss your next project.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-xl sm:text-2xl px-16 py-10 rounded-2xl shadow-[0_0_80px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_120px_hsl(0_80%_42%/0.7)] transition-all duration-400 group uppercase tracking-[0.15em]" style={{ animation: 'pulse-glow 3s infinite' }}>
                <Phone className="w-7 h-7" />
                Get Your Free Quote Today
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
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
