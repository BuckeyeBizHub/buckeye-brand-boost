import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  eyebrow: string;
  heading: string;
  items: FAQItem[];
}

const PLACEHOLDER_Q = "[Placeholder question — to be filled in]";
const PLACEHOLDER_A = "[Placeholder answer — to be filled in]";
const placeholder = (n: number): FAQItem[] =>
  Array.from({ length: n }, () => ({ q: PLACEHOLDER_Q, a: PLACEHOLDER_A }));

const categories: FAQCategory[] = [
  {
    eyebrow: "Start Here",
    heading: "Getting Started & The Concierge Model",
    items: [
      {
        q: "What business printing services does Buckeye Biz Hub offer in Columbus, Ohio?",
        a: "We offer a full range of professional printing services including business cards, brochures, flyers, banners, yard signs, letterhead, envelopes, large format prints, trade show displays, and custom apparel printing. We deliver wholesale pricing with fast turnaround across Columbus, Cleveland, Cincinnati, Dayton, and all of Ohio.",
      },
      {
        q: "Can you help with graphic design or do I need to provide my own artwork?",
        a: "Both! We offer professional graphic design services to create your business cards, banners, vehicle wraps, and promotional product layouts from scratch. If you already have artwork, we accept print-ready files in PDF, AI, EPS, and high-resolution PNG/JPG formats. Our design team ensures every file is optimized for the best print quality.",
      },
      {
        q: "What industries do you serve in Ohio?",
        a: "We work with businesses across every industry including HVAC contractors, auto dealerships, dental and medical offices, restaurants and bars, real estate agencies, lawn care and landscaping companies, construction firms, and more. Any Ohio business that needs professional printing, branded merchandise, or vehicle branding — we've got you covered.",
      },
      ...placeholder(3),
    ],
  },
  {
    eyebrow: "Investment",
    heading: "Pricing & Quotes",
    items: [
      {
        q: "Do you have minimum order requirements?",
        a: "Minimums vary by product. Business cards start at just 100 units, banners and signs have no minimum, and most promotional products start at 12–25 pieces. Custom apparel orders typically start at 12 pieces for screen printing and 1 piece for embroidery. We work with businesses of all sizes — from solo entrepreneurs to large corporations across Ohio.",
      },
      {
        q: "What are your pricing and wholesale rates?",
        a: "We offer competitive wholesale pricing on all products through our trusted supplier network and top promotional product partners. Volume discounts are available on bulk orders of business cards (500+), apparel (24+), and promotional items (50+). Every quote is custom — contact us for a free, no-obligation price estimate tailored to your project and quantity.",
      },
      {
        q: "How do I get a quote for my project?",
        a: "Getting a quote is easy and free! Simply visit our Contact page and fill out the form with your project details, or call us directly. We respond to all quote requests within 24 hours. Include details like the product type, quantity, colors, and any design preferences to get the most accurate estimate. There's never any obligation.",
      },
      ...placeholder(3),
    ],
  },
  {
    eyebrow: "When It Arrives",
    heading: "Timeline & Turnaround",
    items: [
      {
        q: "How fast is your turnaround time for printing and promotional products?",
        a: "Most standard print orders ship within 2–5 business days. Rush options are available for 24–48 hour turnaround on select products like business cards, flyers, and banners. Promotional products typically take 7–14 business days depending on the item and customization method. Vehicle wraps are scheduled within 1–2 weeks of design approval. We always provide a delivery estimate with your quote.",
      },
      ...placeholder(3),
    ],
  },
  {
    eyebrow: "On The Road",
    heading: "Fleet & Vehicle Branding",
    items: [
      {
        q: "How does vehicle wrapping work and how long does it last?",
        a: "Vehicle wrapping involves applying premium vinyl graphics over your vehicle's existing paint. We use 3M and Avery cast vinyl with professional installation by certified technicians. Full wraps typically last 5–7+ years with proper care, and they actually protect your vehicle's factory paint underneath. The process takes 3–5 days from design approval to completion for a single vehicle.",
      },
      {
        q: "Do you offer fleet branding for multiple vehicles?",
        a: "Absolutely. We specialize in fleet branding programs for Ohio businesses with 2 to 200+ vehicles. Fleet clients receive volume pricing, consistent branding across all vehicle types (cars, vans, trucks, trailers), project management, and ongoing maintenance and replacement tracking. On-site installation is available for Columbus-area fleets.",
      },
      ...placeholder(5),
    ],
  },
  {
    eyebrow: "On Paper",
    heading: "Printing & Business Cards",
    items: placeholder(4),
  },
  {
    eyebrow: "On Your Team",
    heading: "Embroidered Apparel & Uniforms",
    items: placeholder(4),
  },
  {
    eyebrow: "Beyond Print",
    heading: "Marketing & Business Consulting",
    items: placeholder(5),
  },
  {
    eyebrow: "Signage & Swag",
    heading: "Banners, Signs & Promotional Products",
    items: [
      {
        q: "What types of promotional products can you customize?",
        a: "We offer over 5,000 customizable promotional products including custom t-shirts, embroidered polos, branded hoodies, hats, drinkware (tumblers, mugs, water bottles), tote bags, pens, notebooks, USB drives, lanyards, bar rail mats, coasters, pop-up tents, table throws, retractable banners, and much more. If you can put a logo on it, we can do it.",
      },
      ...placeholder(3),
    ],
  },
  {
    eyebrow: "How We Operate",
    heading: "Working With Us",
    items: [
      {
        q: "Do you ship across Ohio or only serve Columbus?",
        a: "We serve all of Ohio! While our primary service area is Columbus and Central Ohio, we ship printed materials, promotional products, and custom merchandise to every city in the state — including Cleveland, Cincinnati, Dayton, Toledo, Akron, and Youngstown. Vehicle wrap installations are performed at our Columbus-area facility or at your location for fleet jobs.",
      },
      {
        q: "Do you offer reorder programs or ongoing partnerships?",
        a: "Yes! Many of our Ohio business clients set up reorder programs for items they need regularly — like business cards, uniforms, promotional giveaways, and yard signs. We store your artwork and specs on file so reorders are fast and hassle-free. We also offer dedicated account management for larger clients with ongoing branding needs.",
      },
      ...placeholder(3),
    ],
  },
];

const FAQ = () => {
  usePageSEO({
    title: "FAQ | Buckeye Biz Hub | Columbus Ohio Branding & Marketing Questions",
    description:
      "Frequently asked questions about Buckeye Biz Hub branding services in Columbus Ohio. Pricing, turnaround times, fleet branding, printing, consulting, and how our concierge model works.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/90 via-ohio-grey-dark to-ohio-navy/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              Frequently Asked Questions
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] xl:text-6xl font-black leading-[1.05] mb-6 text-primary-foreground">
              Common Questions About{" "}
              <span className="text-primary text-glow-red">Working With Buckeye Biz Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto mb-8">
              Real answers from a real Columbus Ohio business operator. If you don't see your question here, just ask — David personally responds to every inquiry within 24 hours.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.45)] hover:shadow-[0_0_70px_hsl(0_80%_42%/0.65)] transition-all duration-300 group uppercase tracking-wider"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category, idx) => (
        <section
          key={category.heading}
          className={`py-20 lg:py-24 ${idx % 2 === 0 ? "bg-background" : "bg-ohio-cream"}`}
        >
          <div className="container max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
              variants={fadeUp}
              className="mb-10"
            >
              <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
                {category.eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.1]">
                {category.heading}
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={1}
              variants={fadeUp}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {category.items.map((item, i) => (
                  <AccordionItem
                    key={`${category.heading}-${i}`}
                    value={`${category.heading}-${i}`}
                    className="bg-background border-2 border-border hover:border-primary/30 rounded-2xl px-6 py-1 shadow-sm transition-all duration-300 data-[state=open]:border-primary/40"
                  >
                    <AccordionTrigger className="text-left font-display text-base md:text-lg font-black text-foreground hover:text-primary transition-colors duration-300 py-5 [&[data-state=open]]:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-[0.95rem] leading-[1.85] pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
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
              Have a Question{" "}
              <span className="text-primary text-glow-red">We Didn't Answer?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
              Every project is different. If your question isn't covered above, just ask — David personally responds to every inquiry within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.45)] hover:shadow-[0_0_70px_hsl(0_80%_42%/0.65)] transition-all duration-300 group uppercase tracking-wider"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <a href="tel:+16145613358">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary-foreground hover:bg-primary/10 font-bold text-base md:text-lg px-9 py-7 rounded-2xl gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call 614-561-3358
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
