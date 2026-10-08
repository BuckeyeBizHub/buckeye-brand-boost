import { Phone } from "lucide-react";
import type { Faq } from "@/content/types";
import { breadcrumbLd, faqLd } from "@/lib/schema";
import { CtaBand, Crumbs, FaqList } from "@/components/site/blocks";
import { ButtonLink, Container, Eyebrow, JsonLd, PHONE_DISPLAY, PHONE_HREF, Section } from "@/components/site/ui";

interface FAQCategory {
  id: string;
  eyebrow: string;
  heading: string;
  items: Faq[];
}

const categories: FAQCategory[] = [
  {
    id: "getting-started",
    eyebrow: "Start here",
    heading: "Getting started and how we work",
    items: [
      {
        q: "What business printing services does Buckeye Biz Hub offer in Columbus, Ohio?",
        a: "Business cards, brochures, flyers, banners, yard signs, letterhead, envelopes, large format prints, trade show displays and custom apparel. Wholesale pricing for Columbus and Central Ohio businesses, with starting prices on the pricing page.",
      },
      {
        q: "Can you help with graphic design or do I need to provide my own artwork?",
        a: "Either way works. I can design your business cards, banners, vehicle graphics and promo layouts from scratch. First order? Design and setup are free. If you already have artwork, send print-ready PDF, AI, EPS or high-resolution PNG/JPG files. Every file gets checked, and you approve a proof before anything prints.",
      },
      {
        q: "What industries do you serve in Ohio?",
        a: "HVAC contractors, auto dealers, dental and medical offices, restaurants and bars, real estate agencies, lawn care and landscaping companies, construction firms and more. If your business needs printing, branded gear or vehicle branding, I can help.",
      },
      {
        q: "How is a branding concierge different from a regular print shop?",
        a: "A print shop sells you what's in its catalog at its prices. I work for you, not for any one vendor. Need business cards? I shop the printers. Fleet decals? I shop the installers. Promo products? I shop the suppliers. You deal with one person, and the whole Central Ohio vendor market works for you.",
      },
      {
        q: "Who is David Stein and why does that matter?",
        a: "David co-founded and runs Buckeye Biz Hub. He was service manager at his family's third-generation repair shop in Clintonville. He co-founded BeerTubes, is a named inventor on its patents, and grew it from $79K in year one to $4.5M before selling it in 2017. Then he founded SBC Hospitality Group, with Stein Brewing Co. in Mount Vernon, a Newark brewery and The Joint diner, and more than 100 employees. Why it matters: every recommendation comes from someone who has spent his own money on marketing and made payroll.",
      },
      {
        q: "Do you work with small businesses or only large companies?",
        a: "Both. Solo contractors, professional practices, growing service businesses and multi-location companies. Small first orders are welcome. Everything is custom, so try a short run first, and when it works, reorder bigger at a lower price per piece.",
      },
    ],
  },
  {
    id: "pricing",
    eyebrow: "Investment",
    heading: "Pricing and quotes",
    items: [
      {
        q: "Do you have minimum order requirements?",
        a: "It depends on the item. Small first orders are welcome, and banners and signs can be a single piece. For embroidery and apparel, small runs are fine. Ask and I'll tell you the minimum for your item. Bigger runs cost less per piece.",
      },
      {
        q: "What are your pricing and wholesale rates?",
        a: "Starting prices for the most common jobs are on the pricing page. Your exact quote depends on size, quantity and finish, and bigger runs cost less per piece. Promo products come through 4,300+ vetted suppliers at wholesale pricing. Ask for a free quote on your project.",
      },
      {
        q: "How do I get a quote for my project?",
        a: "Fill out the form on the contact page or call. You'll have a free quote within 24 hours. Tell me the product, quantity, colors and any design ideas, and the quote will be tighter. No obligation.",
      },
      {
        q: "Do you charge for quotes or consultations?",
        a: "No. Every first quote and consultation is free, with no obligation. Your quote comes back within 24 hours.",
      },
      {
        q: "How is your pricing competitive if you're not the actual vendor?",
        a: "I buy at wholesale through my print partners and suppliers and pass most of the savings to you. The concierge part is built into the price you'd pay anyway, not added on top.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Credit card, ACH bank transfer, business check and Zelle. Net 30 terms for established clients with approved credit.",
      },
    ],
  },
  {
    id: "turnaround",
    eyebrow: "When it arrives",
    heading: "Timeline and turnaround",
    items: [
      {
        q: "How fast is your turnaround time for printing and promotional products?",
        a: "It depends on the item, the quantity and the decoration. Your quote comes back within 24 hours with a delivery date you can plan around. If you have a hard deadline, say so up front and I'll tell you what's possible.",
      },
      {
        q: "How long does a custom vehicle wrap take?",
        a: "Design comes first, then printing, then installation. You'll get a schedule with the quote. Fleet installs can be phased so you always have trucks on the road.",
      },
      {
        q: "How long do banners and signs take?",
        a: "Banners and yard signs are some of the quicker jobs. Your quote includes a date. If it's for an event, give me the event date and I'll work back from it.",
      },
      {
        q: "What about embroidered apparel turnaround?",
        a: "Your quote includes a delivery date. Your logo gets digitized for stitching before the first run, and you approve a proof first. If the apparel is for an event or trade show, tell me the date up front.",
      },
    ],
  },
  {
    id: "fleet",
    eyebrow: "On the road",
    heading: "Fleet and vehicle branding",
    items: [
      {
        q: "How does vehicle wrapping work and how long does it last?",
        a: "A wrap is printed vinyl applied over your vehicle's paint by trusted installers. How long it lasts depends on the material, how much sun it sees and how it's washed. A laminated wrap holds up for years and protects the factory paint underneath.",
      },
      {
        q: "Do you offer fleet branding for multiple vehicles?",
        a: "Yes. Commercial fleet work is the focus. You get one look across cars, vans, trucks and trailers, pricing that drops as the fleet grows, and one person managing it. On-site installation is available for Columbus-area fleets.",
      },
      {
        q: "What's the difference between vehicle wraps and spot graphics?",
        a: "A full wrap covers the whole vehicle in printed vinyl. A full commercial van wrap starts at $2,800, installed. Spot graphics cover the spots people see most, like doors, the rear and accent panels, with your logo and contact info. Truck or van door lettering starts at $249, installed. A partial wrap, from $1,200, sits in between.",
      },
      {
        q: "Which is right for my business: wraps or spot graphics?",
        a: "It depends on your fleet size and goals. Most service businesses get more from lettering on every truck than from full wraps on a few. I'll tell you what fits, not what costs the most.",
      },
      {
        q: "Will vehicle graphics damage my paint?",
        a: "No. That matters most on leased vehicles. Commercial vinyl, installed and removed the right way, protects your paint from sun and light scratches. It comes off clean at the end of the lease.",
      },
      {
        q: "Do you do single-vehicle decals or only fleets?",
        a: "Both. Single-vehicle decals for solo contractors, real estate agents and other professionals. Full fleet projects for multi-vehicle service businesses, with pricing per vehicle that drops as the fleet grows.",
      },
      {
        q: "Can you install on location?",
        a: "Yes, for spot graphics and decals. Door decals and rear graphics can go on at your business. Full wraps usually need a controlled shop.",
      },
    ],
  },
  {
    id: "printing",
    eyebrow: "On paper",
    heading: "Printing and business cards",
    items: [
      {
        q: "What kind of business cards do you offer?",
        a: "Standard 14pt stock up to ultra-thick. Gold and silver foil, spot UV, embossing and debossing, soft-touch and silk finishes, custom die-cuts and edge painting. 500 business cards start at $29, and the price goes up with paper and finish.",
      },
      {
        q: "Can you do small print runs or only bulk?",
        a: "Small runs are fine. Digital printing makes sense for short runs. Offset starts to pay off on bigger runs, and the price per piece drops as quantity goes up.",
      },
      {
        q: "What's the difference between digital and offset printing?",
        a: "Digital is cheaper on short runs and turns around fast. Offset gives sharper detail and richer color on bigger runs. Foil and embossing usually go offset.",
      },
      {
        q: "What file formats do you need for printing?",
        a: "Print-ready PDFs are best. I also take high-resolution JPEGs, PNGs, AI files, PSDs and INDD files. No print-ready file? Send what you have and I'll get it ready.",
      },
    ],
  },
  {
    id: "apparel",
    eyebrow: "On your team",
    heading: "Embroidered apparel and uniforms",
    items: [
      {
        q: "What's the difference between embroidery and screen printing?",
        a: "Embroidery stitches your logo in thread. It looks sharp and lasts, best for polos, hats, jackets and uniforms. Screen printing uses ink. Better for T-shirts, bigger designs and lower prices. I do both and will tell you which fits.",
      },
      {
        q: "Do you have minimum quantities for embroidered apparel?",
        a: "Small runs are fine. Ask and I'll tell you the minimum for your item.",
      },
      {
        q: "Can I see my logo before you embroider 50 shirts?",
        a: "Yes. Every embroidery job comes with a digital proof before production. On big orders I can have one sample piece made for you to approve first.",
      },
      {
        q: "What apparel brands do you offer?",
        a: "The major commercial apparel brands, from everyday tees to premium polos and jackets. Tell me your preference and budget and I'll match it.",
      },
    ],
  },
  {
    id: "consulting",
    eyebrow: "Beyond print",
    heading: "Marketing and business consulting",
    items: [
      {
        q: "What kind of consulting does David offer?",
        a: "Marketing strategy and business consulting for Central Ohio businesses, three ways. Strategy sessions: one focused conversation about one problem. Marketing and business audits: a full review of your marketing, brand and go-to-market plan, with a ranked list of what to fix. Ongoing advisory: monthly check-ins and help making decisions.",
      },
      {
        q: "How is David's consulting different from other marketing consultants?",
        a: "Most marketing consultants have never built a business. David has. He co-founded BeerTubes, grew it to $4.5M and sold it, then built a hospitality group with more than 100 employees. His advice comes from spending his own money on marketing and making payroll.",
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
        a: "Some do, some don't. You can hire David for strategy only and get branding done elsewhere. You can use the branding concierge without consulting. Or use both, strategy and execution from one person who sees the whole picture.",
      },
    ],
  },
  {
    id: "signs-promo",
    eyebrow: "Signage and swag",
    heading: "Banners, signs and promotional products",
    items: [
      {
        q: "What types of promotional products can you customize?",
        a: "Thousands of products through 4,300+ vetted suppliers. T-shirts, embroidered polos, hoodies, hats, drinkware, tote bags, pens, notebooks, lanyards, bar rail mats, coasters, pop-up tents, table throws, retractable banners and a lot more. If a logo fits on it, I can get it done.",
      },
      {
        q: "What banner materials do you offer?",
        a: "13oz vinyl for indoor or short-term outdoor use. 18oz vinyl for long-term outdoor use. Mesh for windy spots. Tension fabric for trade show displays. I'll match the material to the job and your budget.",
      },
      {
        q: "What yard sign options do you have?",
        a: "The standard is an 18 x 24 inch sign on 4mm corrugated plastic, the go-to for real estate and contractors. 10 yard signs start at $95, printed both sides with H-stakes. Aluminum works for permanent signs, and custom shapes and sizes are available.",
      },
      {
        q: "What promotional products work best for trade shows?",
        a: "Things people keep and use: drinkware, good pens, tote bags, tech accessories. Skip the cheap stuff that ends up in the hotel trash. Better items cost more per piece but stay in use for months or years.",
      },
    ],
  },
  {
    id: "working-with-us",
    eyebrow: "How we operate",
    heading: "Working with us",
    items: [
      {
        q: "Do you ship across Ohio or only serve Columbus?",
        a: "Home base is Columbus and Central Ohio, and that's where on-site visits and installs happen. Printing, promo products and apparel can ship to you anywhere in Ohio.",
      },
      {
        q: "Do you offer reorder programs or ongoing partnerships?",
        a: "Yes. A lot of clients set up reorders for things they buy often, like business cards, uniforms, giveaways and yard signs. Your artwork and specs stay on file, so reorders are quick, and bigger reorders cost less per piece.",
      },
      {
        q: "How do I get a quote?",
        a: "Three ways. Fill out the contact form, call 614-561-3358, or email david@buckeyebizhub.com. You'll get a free quote within 24 hours, or the questions I need answered to build one.",
      },
      {
        q: "Do you have a showroom I can visit?",
        a: "No. Buckeye Biz Hub is home-based, with no walk-in showroom. David comes to your business, or works with you by phone and email. Set up a time through the contact form or call 614-561-3358.",
      },
      {
        q: "What's your satisfaction guarantee?",
        a: "If you're not happy with the result, we make it right. You also see and approve a proof before anything prints, so nothing comes as a surprise.",
      },
    ],
  },
];

const allFaqs = categories.flatMap((c) => c.items);

export default function FAQ() {
  return (
    <>
      <JsonLd
        data={[
          faqLd(allFaqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-paper">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h1 className="max-w-4xl text-[clamp(2.5rem,5.6vw,4.5rem)]">Common questions about working with Buckeye Biz Hub</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
            Straight answers from someone who has run Ohio businesses. Don&apos;t see your question? Ask. David answers
            every inquiry himself within 24 hours.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Get a free quote</ButtonLink>
            <ButtonLink href={PHONE_HREF} variant="outline">
              <Phone className="h-4 w-4" aria-hidden />
              {PHONE_DISPLAY}
            </ButtonLink>
          </div>

          <nav aria-label="FAQ topics" className="mt-10 border-t border-border pt-6">
            <ul className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    className="inline-flex min-h-[40px] items-center rounded-md border border-border bg-white px-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
                  >
                    {c.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {categories.map((c, i) => (
        <Section key={c.id} id={c.id} tone={i % 2 === 0 ? "white" : "paper"} bordered>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <div>
              <Eyebrow>{c.eyebrow}</Eyebrow>
              <h2 className="text-[clamp(2rem,4vw,3rem)]">{c.heading}</h2>
            </div>
            <FaqList faqs={c.items} />
          </div>
        </Section>
      ))}

      <CtaBand
        title="Have a question I didn't answer?"
        body="Every project is different. If it's not covered here, ask. Free quote within 24 hours, and small first orders are welcome."
      />
    </>
  );
}
