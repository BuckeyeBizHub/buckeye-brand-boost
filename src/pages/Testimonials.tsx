import { motion } from "framer-motion";
import { Sparkles, Star, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "David and the team made the entire process effortless. Our new door hangers brought in 47 new customers in the first week alone.",
    name: "Mike Reynolds",
    company: "Reynolds Pizza",
    location: "Lewis Center, OH",
  },
  {
    quote: "The vehicle wraps look incredible and have already generated multiple calls. Their concierge approach saved us so much time.",
    name: "Sarah Thompson",
    company: "Thompson HVAC Services",
    location: "Powell, OH",
  },
  {
    quote: "Premium quality at fair prices. The yard signs and banners for our open houses were perfect — and they delivered exactly when promised.",
    name: "Jennifer Patel",
    company: "Patel Real Estate Group",
    location: "Columbus, OH",
  },
  {
    quote: "Velvet business cards and tri-fold brochures turned our brand from basic to professional overnight. Highly recommend!",
    name: "Robert Kline",
    company: "Kline Construction",
    location: "Dublin, OH",
  },
  {
    quote: "From concept to delivery, they handled everything. Our trade show booth was a huge success thanks to their promotional products.",
    name: "Lisa Chen",
    company: "Chen Insurance Agency",
    location: "Westerville, OH",
  },
  {
    quote: "Fast quotes, great pricing, and they truly care about helping small businesses like ours succeed. Best printing partner we've ever had.",
    name: "Mark Davidson",
    company: "Davidson Auto Repair",
    location: "Hilliard, OH",
  },
];

const Testimonials = () => {
  usePageSEO({
    title: "What Our Clients Say",
    description:
      "Read real reviews from Columbus and Central Ohio business owners about working with Buckeye Biz Hub. Printing, promotional products, vehicle wraps, and more.",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-36 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1000px] h-[1000px] rounded-full bg-primary/[0.15] blur-[200px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]"
          >
            <Sparkles className="w-4 h-4" /> Client Reviews <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}
          >
            Don't Just Take{" "}
            <span className="text-primary text-glow-red relative">
              Our Word For It
              <motion.span
                className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-3xl mx-auto font-semibold tracking-wide leading-relaxed"
          >
            Here's what Columbus and Central Ohio business owners are saying about working with Buckeye Biz Hub.
          </motion.p>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow relative"
              >
                <MessageCircle className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="border-t border-border pt-5">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-primary font-semibold">{t.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ohio-grey-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="container relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-primary-foreground mb-6"
          >
            Ready to Create Your Own{" "}
            <span className="text-primary">Success Story?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/50 text-lg max-w-2xl mx-auto mb-10"
          >
            Let's talk about how we can help your business stand out with professional printing, promotional products, and concierge-level care.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-10 py-6 font-bold">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-10 py-6 font-bold border-primary/30 text-primary-foreground hover:bg-primary/10">
              <Link to="/research">Try the Research Assistant</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
