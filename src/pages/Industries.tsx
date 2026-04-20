import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Building2, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageTitle";

import industryDentist from "@/assets/industry-dentist.jpg";
import industryConstruction from "@/assets/industry-construction.jpg";

const featured = [
  {
    image: industryDentist,
    alt: "Smiling dental team in matching branded scrubs",
    title: "Dental Practices & Specialty Offices",
    description:
      "We help Ohio dental practices maintain a polished, consistent image with branded scrubs, patient referral gifts featuring local Ohio brands, professional signage, and printed materials. Backed by 15+ years of hands-on experience inside a real dental office.",
    href: "/dental",
  },
  {
    image: industryConstruction,
    alt: "Professional roofing crew with branded truck on a job site",
    title: "Roofing & Exterior Contractors",
    description:
      "We deliver fleet wraps, durable crew apparel, door hangers, yard signs, carbonless forms, and full marketing materials for Central Ohio roofing companies. Informed by direct experience helping 9 local roofing operations and doubling sales for a vehicle wrap company.",
    href: "/roofing",
  },
];

const additional = [
  "Lawn Care & Landscaping Services",
  "Construction & General Contractors",
  "Real Estate Agents & Realtors",
  "Hospitality & Restaurants",
  "Politicians & Political Campaigns",
  "HVAC & Home Services",
  "Automotive & Fleet Operators",
  "Manufacturing & Industrial Companies",
];

const Industries = () => {
  usePageSEO({
    title: "Industries We Serve | Buckeye Biz Hub",
    description:
      "Specialized branding, fleet graphics, crew apparel, printed materials, and promotional solutions for Ohio dental practices, roofing contractors, real estate, hospitality, HVAC, and more.",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Industries We Serve",
    description:
      "Specialized branding & procurement solutions for Ohio dental practices, roofing contractors, real estate, hospitality, HVAC, automotive, and more.",
    url: "https://www.buckeyebizhub.com/industries",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-gradient-to-br from-ohio-grey-dark via-[hsl(0,40%,8%)] to-ohio-grey-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[160px]" />
        </div>
        <div className="container relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30"
          >
            <Sparkles className="w-4 h-4" /> Industries We Serve
          </motion.div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.7)" }}
          >
            Specialized Branding & Procurement Solutions for{" "}
            <span className="text-primary text-glow-red">Ohio Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-medium leading-relaxed max-w-3xl mx-auto">
            At Buckeye Biz Hub, we provide tailored branding, fleet graphics, crew apparel, printed materials, and promotional solutions for industries that need to look professional every single day — on the job site, on the road, and in front of customers. We combine real-world experience with wholesale pricing and personal service.
          </p>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Briefcase className="w-4 h-4" /> Featured Industries
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
              Deep Expertise in <span className="text-primary">High-Trust Industries</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {featured.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card rounded-2xl border-2 border-border hover:border-primary/40 overflow-hidden shadow-lg hover:shadow-[0_20px_60px_hsl(0_80%_42%/0.15)] transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                </div>
                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-1">
                    {ind.description}
                  </p>
                  <Link to={ind.href}>
                    <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold text-base py-6 rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.3)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.5)] transition-all duration-300 group/btn uppercase tracking-wider">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Building2 className="w-4 h-4" /> Additional Industries We Serve
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">
              Tailored Solutions Across <span className="text-primary">Central Ohio</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each industry gets dedicated support with products and strategies that match their unique needs — from crew uniforms and fleet branding to client gifts, signage, and marketing materials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {additional.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] border-2 border-primary/40 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
          >
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Looking for solutions tailored to <span className="text-primary">your industry?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us about your business and we'll put together a free consultation with the right products, pricing, and strategy.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
              >
                Tell Us About Your Business – Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground/80 mt-8 italic">
              New industry pages coming soon. Contact us if you'd like us to prioritize lawn care, real estate, hospitality, or another sector.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
