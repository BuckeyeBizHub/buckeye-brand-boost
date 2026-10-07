"use client";
import { motion } from "framer-motion";
import { Helmet } from "@/lib/compat/helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "@/lib/compat/router";
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

const categories: FAQCategory[] = [
  {
    eyebrow: "Start here",
    heading: "Getting started and how we work",
    items: [
      {
        q: "What business printing services does Buckeye Biz Hub offer in Columbus, Ohio?",
        a: "Business cards, brochures, flyers, banners, yard signs, letterhead, envelopes, large format prints, trade show displays and custom apparel. Wholesale pricing and fast turnaround across Columbus, Cleveland, Cincinnati, Dayton and the rest of Ohio.",
      },
      {
        q: "Can you help with graphic design or do I need to provide my own artwork?",
        a: "Either way works. We can design your business cards, banners, vehicle wraps and promo layouts from scratch. If you already have artwork, send print-ready PDF, AI, EPS or high-resolution PNG/JPG files. We check every file so it prints right.",
      },
      {
        q: "What industries do you serve in Ohio?",
        a: "HVAC contractors, auto dealers, dental and medical offices, restaurants and bars, real estate agencies, lawn care and landscaping companies, construction firms and more. If your Ohio business needs printing, branded gear or vehicle branding, we can help.",
      },
      {
        q: "How is a branding concierge different from a regular print shop?",
        a: "A print shop sells you what's in its catalog at its prices. We work for you, not for any one vendor. Need business cards? We shop the printers. Fleet decals? We shop the installers. Promo products? We shop the suppliers. You deal with one person, and the whole Central Ohio vendor market works for you.",
      },
      {
        q: "Who is David Stein and why does that matter?",
        a: "David co-founded and runs Buckeye Biz Hub. He was service manager at Clintonville Automotive Repair Service, his family's third-generation independent repair shop. He co-founded BeerTubes, was named inventor on its patents, and grew it from $79K in year one to $4.5M, selling to Anheuser-Busch InBev, MillerCoors, Constellation Brands and 100+ distributors. He sold the company in 2017. Then he founded SBC Hospitality Group: Stein Brewing Co. in Mount Vernon, a Newark brewery, The Joint diner, plus co-ownership of a Dave's Cosmic Subs franchise, with 100+ employees. Why it matters: every recommendation comes from someone who has spent his own money on marketing and made payroll.",
      },
      {
        q: "Do you work with small businesses or only large companies?",
        a: "Both. Most of our clients are Central Ohio service businesses between $500K and $10M in annual revenue. Owners who make their own calls and want a partner, not a vendor. We also work with solo contractors, professional practices and multi-location companies. Most services have no minimum order.",
      },
    ],
  },
  {
    eyebrow: "Investment",
    heading: "Pricing and quotes",
    items: [
      {
        q: "Do you have minimum order requirements?",
        a: "It depends on the product. Business cards start at 100. Banners and signs have no minimum. Most promo products start at 12–25 pieces. Screen-printed apparel usually starts at 12 pieces, and embroidery can start at 1. We work with solo owners and big companies alike.",
      },
      {
        q: "What are your pricing and wholesale rates?",
        a: "We get wholesale pricing through our network of 4,300+ vetted suppliers. Volume discounts kick in on business cards (500+), apparel (24+) and promo items (50+). Every quote is custom. Ask for a free, no-obligation estimate for your project.",
      },
      {
        q: "How do I get a quote for my project?",
        a: "Fill out the form on our Contact page or call us. We answer every quote request within 24 hours. Tell us the product, quantity, colors and any design ideas, and the estimate will be tighter. No obligation.",
      },
      {
        q: "Do you charge for quotes or consultations?",
        a: "No. Every first quote and consultation is free, with no obligation. Most quotes come back within 24 hours.",
      },
      {
        q: "How is your pricing competitive if you're not the actual vendor?",
        a: "We buy at wholesale through our vendor network and pass most of the savings to you. We're often cheaper than going to the same vendor yourself, because we buy for a lot of clients at once. The concierge part is built into the price you'd pay anyway.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Credit card, ACH bank transfer, business check and Zelle. Net 30 terms for established clients with approved credit.",
      },
    ],
  },
  {
    eyebrow: "When it arrives",
    heading: "Timeline and turnaround",
    items: [
      {
        q: "How fast is your turnaround time for printing and promotional products?",
        a: "Most standard print orders ship in 2–5 business days. Rush is available, 24–48 hours on select items like business cards, flyers and banners. Promo products usually take 7–14 business days, depending on the item and decoration. Vehicle wraps get scheduled within 1–2 weeks of design approval. Your quote always includes a delivery estimate.",
      },
      {
        q: "How long does a custom vehicle wrap take?",
        a: "A full wrap usually takes 2-3 weeks from design approval. About 1 week to produce, 2-3 days to install. Fleet spot graphics are faster, 5-7 business days per vehicle. We can phase fleet installs so you always have trucks on the road.",
      },
      {
        q: "How long do banners and signs take?",
        a: "Standard banners take 3-5 business days. Yard signs take 3-4. Large format work (trade show banners, building wraps, vehicle wraps) takes 5-10. Rush is available for events.",
      },
      {
        q: "What about embroidered apparel turnaround?",
        a: "Embroidered apparel usually takes 7-10 business days from order. Logo digitizing is included on first orders and takes 1-2 days. Rush is available for events and trade shows.",
      },
    ],
  },
  {
    eyebrow: "On the road",
    heading: "Fleet and vehicle branding",
    items: [
      {
        q: "How does vehicle wrapping work and how long does it last?",
        a: "A wrap is printed vinyl applied over your vehicle's paint. Our partner shops use 3M and Avery cast vinyl, installed by certified technicians. Full wraps usually last 5–7+ years with care, and they protect the factory paint underneath. One vehicle takes 3–5 days from design approval to done.",
      },
      {
        q: "Do you offer fleet branding for multiple vehicles?",
        a: "Yes. Commercial fleet work is our focus, for Ohio businesses with 2 to 200+ vehicles. Fleet clients get volume pricing, one look across cars, vans, trucks and trailers, project management, and tracking for maintenance and replacements. On-site installation is available for Columbus-area fleets.",
      },
      {
        q: "What's the difference between vehicle wraps and spot graphics?",
        a: "A full wrap covers the whole vehicle in printed vinyl, usually $2,800-$5,500 per vehicle. Spot graphics cover the spots people see most (doors, rear, accent panels) with decals, logos and contact info, usually $150-$650 per vehicle. Spot graphics get you about 80% of the visibility for 10-20% of the cost.",
      },
      {
        q: "Which is right for my business: wraps or spot graphics?",
        a: "Depends on your fleet size and goals. Most service businesses get more from spot graphics on every truck than full wraps on a few. One full wrap costs about the same as spot graphics on 8-10 vehicles. That's 8x more trucks on the road with your name on them. We'll tell you what fits, not what costs the most.",
      },
      {
        q: "Will vehicle graphics damage my paint?",
        a: "No. That matters most on leased vehicles. Commercial vinyl, installed and removed the right way, protects your paint from sun and light scratches. It comes off clean at end of lease.",
      },
      {
        q: "Do you do single-vehicle decals or only fleets?",
        a: "Both. Single-vehicle decals for solo contractors, real estate agents and other professionals. Full fleet projects for multi-vehicle service businesses. Volume pricing starts at 3+ vehicles.",
      },
      {
        q: "Can you install on location?",
        a: "Yes, for spot graphics and decals. Door decals and rear graphics can go on at your business. Full wraps usually need a controlled shop.",
      },
    ],
  },
  {
    eyebrow: "On paper",
    heading: "Printing and business cards",
    items: [
      {
        q: "What kind of business cards do you offer?",
        a: "Every kind. Standard 14pt stock up to 32pt ultra-thick. Gold and silver foil, spot UV, embossing and debossing, soft-touch and silk finishes, custom die-cuts and edge painting. Pricing starts at $39 and goes up with quality and quantity.",
      },
      {
        q: "Can you do small print runs or only bulk?",
        a: "As few as 25 business cards or as many as 100,000+. Digital printing makes sense for small runs. Offset makes sense around 1,000+ pieces.",
      },
      {
        q: "What's the difference between digital and offset printing?",
        a: "Digital is cheaper for runs under 1,000 pieces and turns around fast. Offset gives sharper detail and richer color on bigger runs. For foil or embossing, we use offset.",
      },
      {
        q: "What file formats do you need for printing?",
        a: "Print-ready PDFs are best. We also take high-resolution JPEGs, PNGs, AI files, PSDs and INDD files. No print-ready file? Send what you have. On most jobs we'll prep it for free.",
      },
    ],
  },
  {
    eyebrow: "On your team",
    heading: "Embroidered apparel and uniforms",
    items: [
      {
        q: "What's the difference between embroidery and screen printing?",
        a: "Embroidery stitches your logo in thread. It looks sharp and lasts, best for polos, hats, jackets and uniforms. Screen printing uses ink. Better for t-shirts, bigger designs and lower prices. We do both and will tell you which fits.",
      },
      {
        q: "Do you have minimum quantities for embroidered apparel?",
        a: "Most embroidery orders have a 12-piece minimum so setup makes sense. Below 12, the price per piece goes up a lot.",
      },
      {
        q: "Can I see my logo before you embroider 50 shirts?",
        a: "Yes. Every embroidery job comes with a digital proof before production. On big orders we can make one sample piece for you to approve first.",
      },
      {
        q: "What apparel brands do you offer?",
        a: "All the major commercial brands: Port Authority, Nike, Carhartt, Under Armour, Eddie Bauer, Sport-Tek, Adidas, Champion, Hanes and more. Tell us your preference and budget and we'll match it.",
      },
    ],
  },
  {
    eyebrow: "Beyond print",
    heading: "Marketing and business consulting",
    items: [
      {
        q: "What kind of consulting does David offer?",
        a: "Marketing strategy and business consulting for Central Ohio businesses, three ways. Strategy sessions: one focused conversation about one problem. Marketing and business audits: a full review of your marketing, brand and go-to-market plan, with a ranked list of what to fix. Ongoing advisory: monthly check-ins and help making decisions.",
      },
      {
        q: "How is David's consulting different from other marketing consultants?",
        a: "Most marketing consultants have never built a business. David has. He co-founded BeerTubes, grew it to $4.5M and sold it, then built a hospitality group with 100+ employees. His advice comes from spending his own money on marketing and making payroll.",
      },
      {
        q: "What industries do you consult for?",
        a: "Right now, Central Ohio businesses in moving and relocation, roofing and home services, health and wellness, and legal services. The principles carry across industries.",
      },
      {
        q: "How much does consulting cost?",
        a: "It depends on scope. Strategy sessions, audits and ongoing advisory are each priced differently. Every engagement starts with a free conversation to see if it's a fit. We talk price then.",
      },
      {
        q: "Do consulting clients also use your branding services?",
        a: "Some do, some don't. You can hire David for strategy only and get branding done elsewhere. You can use the branding concierge without consulting. Or use both, strategy and execution from one person who sees the whole picture. Neither is required.",
      },
    ],
  },
  {
    eyebrow: "Signage and swag",
    heading: "Banners, signs and promotional products",
    items: [
      {
        q: "What types of promotional products can you customize?",
        a: "Over 5,000 products. T-shirts, embroidered polos, hoodies, hats, drinkware (tumblers, mugs, water bottles), tote bags, pens, notebooks, USB drives, lanyards, bar rail mats, coasters, pop-up tents, table throws, retractable banners and a lot more. If a logo fits on it, we can do it.",
      },
      {
        q: "What banner materials do you offer?",
        a: "13oz vinyl for indoor or short-term outdoor use. 18oz vinyl for long-term outdoor use. Mesh for windy spots. Tension fabric for trade show displays. We'll match the material to the job and your budget.",
      },
      {
        q: "What yard sign options do you have?",
        a: "Standard 24x18 inch corrugated plastic (the go-to for real estate and contractors), heavy-duty 4mm corrugated for long-term use, aluminum for permanent signs, custom shapes and sizes, single or double-sided. H-frame wire stakes come with most orders.",
      },
      {
        q: "What promotional products work best for trade shows?",
        a: "Things people keep and use: drinkware, good pens, USB drives, tote bags, tech accessories. Skip the cheap stuff that ends up in the hotel trash. Better items cost more per piece but stay in use for months or years.",
      },
    ],
  },
  {
    eyebrow: "How we operate",
    heading: "Working with us",
    items: [
      {
        q: "Do you ship across Ohio or only serve Columbus?",
        a: "All of Ohio. Our home base is Columbus and Central Ohio, but we ship printing, promo products and merch to every city in the state, including Cleveland, Cincinnati, Dayton, Toledo, Akron and Youngstown. Wrap installs happen at a partner shop or at your location for fleet jobs.",
      },
      {
        q: "Do you offer reorder programs or ongoing partnerships?",
        a: "Yes. A lot of our Ohio clients set up reorders for things they buy often, like business cards, uniforms, giveaways and yard signs. We keep your artwork and specs on file, so reorders are quick. Larger clients can get dedicated account management.",
      },
      {
        q: "How do I get a quote?",
        a: "Three ways. Fill out the contact form, call 614-561-3358, or email david@buckeyebizhub.com. We answer every inquiry within 24 hours with a quote or the questions we need answered.",
      },
      {
        q: "Do you have a showroom I can visit?",
        a: "No. Buckeye Biz Hub is home-based, with no walk-in showroom. David works with you on site at your business, by phone or in person. Set up a time through the contact form or call 614-561-3358.",
      },
      {
        q: "What's your satisfaction guarantee?",
        a: "100% satisfaction guarantee. If you're not happy, we make it right. That can mean a reprint, a redo or a refund. We stand behind the work.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((c) => c.items).map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const FAQ = () => {
  usePageSEO({
    title: "FAQ | Buckeye Biz Hub | Columbus Ohio Branding and Marketing Questions",
    description:
      "Answers about Buckeye Biz Hub in Columbus, Ohio. Pricing, turnaround, fleet branding, printing, consulting and how our concierge model works.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
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
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-5 py-2 rounded-full mb-6">
              Frequently asked questions
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] xl:text-6xl font-black leading-[1.05] mb-6 text-primary-foreground">
              Common questions about{" "}
              <span className="text-primary text-glow-red">working with Buckeye Biz Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto mb-8">
              Straight answers from someone who has run Ohio businesses. Don't see your question? Ask. David answers every inquiry himself within 24 hours.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl transition-all duration-300 group "
                >
                  Get a free quote
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
              <span className="inline-block text-xs font-extrabold text-primary mb-3">
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
              Have a question{" "}
              <span className="text-primary text-glow-red">we didn't answer?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
              Every project is different. If it's not covered above, ask. David answers every inquiry himself within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl transition-all duration-300 group "
                >
                  Get a free quote
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
