import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
      {
        q: "How is a branding concierge different from a regular print shop?",
        a: "A typical print shop sells you what they have. Whatever's in their catalog at their pricing. A branding concierge works differently — we represent you, not any single vendor. When you need business cards, we shop the best printers. When you need fleet decals, we shop the best installers. When you need promotional products, we shop the best suppliers. You get one accountable partner, but you get the entire Central Ohio vendor market working for you.",
      },
      {
        q: "Who is David Stein and why does that matter?",
        a: "David Stein is a three-time Ohio business founder who started Buckeye Biz Hub after building, scaling, and selling other companies. He ran Clintonville Automotive Repair Service (third-generation family business). He founded BeerTubes — a patented product company with 28 patents that sold B2B to InBev, Anheuser-Busch, MillerCoors, and Constellation Brands before selling in 2017. He then founded SBC Hospitality Group with three restaurants. That operating experience matters because every marketing recommendation comes from someone who has spent his own money on marketing, made payroll, and built brands from scratch.",
      },
      {
        q: "Do you work with small businesses or only large companies?",
        a: "Both. Most of our clients are Central Ohio service businesses between $500K and $10M in annual revenue — owner-operators who make their own decisions and want a real partner, not a vendor. We also work with solo contractors, professional practices, and larger multi-location companies. There's no minimum order size for most services.",
      },
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
      {
        q: "Do you charge for quotes or consultations?",
        a: "No. Every initial quote and consultation is free with no obligation. We typically turn around quotes within 24 hours of your request.",
      },
      {
        q: "How is your pricing competitive if you're not the actual vendor?",
        a: "Because we buy at wholesale rates through our vendor network and pass most of that savings to you. We're often less expensive than going directly to the same vendors yourself because we buy in volume across hundreds of clients. The concierge service is essentially free — built into the same pricing you'd pay anyway.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Credit card, ACH bank transfer, business check, and Zelle. Net 30 terms available for established clients with approved credit.",
      },
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
      {
        q: "How long does a custom vehicle wrap take?",
        a: "Full vehicle wrap timeline is typically 2-3 weeks from design approval — about 1 week for production and 2-3 days for installation. Fleet spot graphics are much faster at 5-7 business days per vehicle. We can often phase fleet installations so you're never without operational vehicles.",
      },
      {
        q: "How long do banners and signs take?",
        a: "Standard banner production is 3-5 business days. Yard signs are typically 3-4 business days. Large format printing (trade show banners, building wraps, vehicle wraps) takes 5-10 business days. Rush turnaround available for urgent events.",
      },
      {
        q: "What about embroidered apparel turnaround?",
        a: "Custom embroidered apparel typically takes 7-10 business days from order placement. Logo digitizing is included on first orders and takes 1-2 days. Rush turnaround available for events and trade shows.",
      },
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
      {
        q: "What's the difference between vehicle wraps and spot graphics?",
        a: "A full vehicle wrap covers the entire vehicle surface with custom-printed vinyl — typically $2,800-$5,500 per vehicle. Spot graphics focus on the highest-visibility zones (doors, rear, accent panels) with door decals, logo graphics, and contact info — typically $150-$650 per vehicle. Spot graphics deliver about 80% of full-wrap brand visibility for 10-20% of the cost.",
      },
      {
        q: "Which is right for my business — wraps or spot graphics?",
        a: "It depends on your fleet size and goals. Most service businesses get better ROI from spot graphics across their entire fleet than from full wraps on a few vehicles. For example, the cost of one full wrap can brand 8-10 vehicles with professional spot graphics — meaning 8x more brand visibility on the road. We'll honestly recommend what's best for your specific situation, not what's most expensive.",
      },
      {
        q: "Will vehicle graphics damage my paint?",
        a: "No — and this is especially important for leased fleet vehicles. Properly installed and removed commercial vinyl actually protects your paint from UV damage and minor scratches. We use professional installation techniques that allow clean removal without paint damage at end-of-lease.",
      },
      {
        q: "Do you do single-vehicle decals or only fleets?",
        a: "Both. We do single-vehicle decals for solo contractors, real estate agents, and individual professionals, plus full fleet projects for multi-vehicle service businesses. Volume pricing kicks in at 3+ vehicles.",
      },
      {
        q: "Can you install on location?",
        a: "Yes — we offer mobile installation for spot graphics and decal work. Full wraps typically need a controlled shop environment but for spot graphics, door decals, and rear graphics, we can come to your business location to install.",
      },
    ],
  },
  {
    eyebrow: "On Paper",
    heading: "Printing & Business Cards",
    items: [
      {
        q: "What kind of business cards do you offer?",
        a: "We offer every type from standard 14pt card stock to premium options including 32pt ultra-thick cards, gold and silver foil stamping, spot UV gloss accents, embossing and debossing, soft-touch and silk finishes, custom die-cuts and unique shapes, and edge painting. Pricing starts at $39 and scales by quality and quantity.",
      },
      {
        q: "Can you do small print runs or only bulk?",
        a: "We can produce as few as 25 business cards or as many as 100,000+. Digital printing is cost-effective for small runs; offset printing kicks in around 1,000+ pieces.",
      },
      {
        q: "What's the difference between digital and offset printing?",
        a: "Digital printing is cost-effective for small runs under 1,000 pieces with quick turnaround. Offset printing produces sharper detail and richer colors for larger runs. For premium finishes like foil stamping or embossing, we use offset for the best results.",
      },
      {
        q: "What file formats do you need for printing?",
        a: "Print-ready PDFs are preferred. We also accept high-resolution JPEGs, PNGs, AI files, PSDs, and INDD files. Don't have print-ready files? Send us what you have — we'll prepare them for production at no extra charge on most jobs.",
      },
    ],
  },
  {
    eyebrow: "On Your Team",
    heading: "Embroidered Apparel & Uniforms",
    items: [
      {
        q: "What's the difference between embroidery and screen printing?",
        a: "Embroidery uses thread to create your logo design — premium look, extremely durable, best for polos, hats, jackets, and uniforms. Screen printing uses ink — better for t-shirts, larger designs, and lower price points. We offer both and recommend based on your specific use case.",
      },
      {
        q: "Do you have minimum quantities for embroidered apparel?",
        a: "Most embroidered orders have a 12-piece minimum to make digitizing and setup cost-effective. Below 12 pieces, per-unit pricing increases significantly.",
      },
      {
        q: "Can I see my logo before you embroider 50 shirts?",
        a: "Yes — every embroidery project includes a digital proof of the embroidered logo before production begins. For very large orders, we can produce a single sample piece for approval before committing to the full run.",
      },
      {
        q: "What apparel brands do you offer?",
        a: "We work with all major commercial apparel brands including Port Authority, Nike, Carhartt, Under Armour, Eddie Bauer, Sport-Tek, Adidas, Champion, Hanes, and many more. Tell us your preference and budget and we'll match the right product.",
      },
    ],
  },
  {
    eyebrow: "Beyond Print",
    heading: "Marketing & Business Consulting",
    items: [
      {
        q: "What kind of consulting does David offer?",
        a: "Marketing strategy and business consulting for Central Ohio businesses. Three engagement formats: Strategy Sessions (single focused conversations about a specific challenge), Marketing & Business Audits (comprehensive review of your marketing, brand, and go-to-market strategy with prioritized recommendations), and Ongoing Advisory Relationships (monthly engagement with regular check-ins and decision support).",
      },
      {
        q: "How is David's consulting different from other marketing consultants?",
        a: "Most marketing consultants have never built a business. David has built three — including a patented product company sold to industry leaders. That operating experience changes everything. Strategic recommendations come from someone who's spent his own money on marketing, made payroll, and lived the problems most consultants only read about.",
      },
      {
        q: "What industries do you consult for?",
        a: "Currently advising Central Ohio businesses across multiple industries including moving and relocation, roofing and home services, health and wellness, and legal services. The strategic principles transfer across industries.",
      },
      {
        q: "How much does consulting cost?",
        a: "Pricing varies by engagement scope and depth. Single strategy sessions, marketing audits, and ongoing advisory relationships each have different pricing structures. Every consulting engagement starts with a free conversation to determine fit and approach — at that point we'll discuss specific pricing for your situation.",
      },
      {
        q: "Do consulting clients also use your branding services?",
        a: "Some do, some don't. You can engage David for strategy only and execute branding elsewhere. You can use the branding concierge service for execution only without consulting. Or you can use both — strategy and execution from one partner who understands the whole picture. We don't bundle or require either.",
      },
    ],
  },
  {
    eyebrow: "Signage & Swag",
    heading: "Banners, Signs & Promotional Products",
    items: [
      {
        q: "What types of promotional products can you customize?",
        a: "We offer over 5,000 customizable promotional products including custom t-shirts, embroidered polos, branded hoodies, hats, drinkware (tumblers, mugs, water bottles), tote bags, pens, notebooks, USB drives, lanyards, bar rail mats, coasters, pop-up tents, table throws, retractable banners, and much more. If you can put a logo on it, we can do it.",
      },
      {
        q: "What banner materials do you offer?",
        a: "Standard 13oz vinyl for indoor or short-term outdoor use, premium 18oz vinyl for long-term outdoor durability, mesh banners for high-wind locations, and tension fabric for trade show displays. We help you match the right material to your specific use case and budget.",
      },
      {
        q: "What yard sign options do you have?",
        a: "Standard 24x18 inch corrugated plastic (most popular for real estate and contractors), heavy-duty 4mm corrugated for long-term use, aluminum signs for permanent installations, custom shapes and sizes, and single or double-sided printing. H-frame wire stakes included with most orders.",
      },
      {
        q: "What promotional products work best for trade shows?",
        a: "Items that get kept and used regularly — branded drinkware, quality pens, USB drives, tote bags, and tech accessories. Avoid cheap throwaways that end up in hotel room trash cans. Higher per-piece cost on quality items but dramatically better return because they stay in use for months or years.",
      },
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
      {
        q: "How do I get a quote?",
        a: "Three options — fill out the contact form on our website with your project details, call 614-561-3358, or email david@buckeyebizhub.com directly. We respond to every inquiry within 24 hours with a detailed quote and any clarifying questions.",
      },
      {
        q: "Do you have a showroom I can visit?",
        a: "Our operations are based at 1193 Virginia Ave, Columbus OH 43212. Visits are by appointment so we can give you focused time. Schedule via the contact form or by calling 614-561-3358.",
      },
      {
        q: "What's your satisfaction guarantee?",
        a: "100% satisfaction guaranteed. If anything in your project doesn't meet expectations, we make it right — whether that means reprinting, reproducing, or refunding. We've built our reputation on standing behind the work.",
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
    title: "FAQ | Buckeye Biz Hub | Columbus Ohio Branding & Marketing Questions",
    description:
      "Frequently asked questions about Buckeye Biz Hub branding services in Columbus Ohio. Pricing, turnaround times, fleet branding, printing, consulting, and how our concierge model works.",
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
