import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { breadcrumbLd } from "@/lib/schema";
import { CtaBand, Crumbs } from "@/components/site/blocks";
import { ButtonLink, Container, Eyebrow, JsonLd, PHONE_DISPLAY, PHONE_HREF, Section, SectionHead } from "@/components/site/ui";

const davidHero = "/assets/david-stein-hero.jpg";

const stats = [
  { value: "20+", label: "Years running Central Ohio businesses" },
  { value: "3", label: "Companies built or run before this one" },
  { value: "$79K to $4.5M", label: "BeerTubes sales, year one to peak" },
  { value: "100+", label: "Employees at SBC Hospitality Group" },
];

const timeline = [
  {
    years: "2001 to 2006",
    title: "Clintonville Automotive Repair Service",
    body: "Service manager at his family's independent repair shop, a third-generation business. That's where he learned the basics: take care of the customer, keep the schedule moving, and run a trades business in Central Ohio.",
  },
  {
    years: "2005 to 2017",
    title: "BeerTubes",
    body: "Co-founder, president and a named inventor on its patents. He grew sales from $79K in year one to $4.5M. Customers included Anheuser-Busch InBev, MillerCoors, Constellation Brands and more than 100 distributors. He sold the company in 2017.",
  },
  {
    years: "2017 to 2023",
    title: "SBC Hospitality Group",
    body: "Founder and president. Stein Brewing Co. in Mount Vernon, a Newark brewery and The Joint diner, plus a Dave's Cosmic Subs franchise he co-owned. More than 100 employees.",
  },
  {
    years: "Today",
    title: "Buckeye Biz Hub",
    body: "Co-founder, and the person who runs it day to day. He lines up your printing, signs and fleet graphics through trusted print partners and installers, and you deal with him start to finish.",
  },
];

const serviceCards = [
  {
    title: "Branding concierge",
    body: "Printing, promo products, vehicle graphics, signs and embroidered apparel, handled for you. David shops his print partners and installers for the right quality and price. You skip the markup of a single shop.",
    linkText: "See what we make",
    href: "/services",
  },
  {
    title: "Fleet branding",
    body: "Most service businesses don't need full wraps. They need every vehicle branded at a price that makes sense. Truck or van door lettering starts at $249, installed.",
    linkText: "See fleet branding",
    href: "/fleet-wraps",
  },
  {
    title: "Marketing and business advisor",
    body: "Advice from someone who built a company and sold it. David's advisory work covers Central Ohio businesses in moving, roofing, health and wellness, and legal services. Operator strategy, no agency fluff.",
    linkText: "Learn about consulting",
    href: "/business-consulting",
  },
];

const bestFit = [
  "Owner-operators who spend their own money and make their own calls",
  "Established Central Ohio businesses that have outgrown DIY but don't need a full agency",
  "Service businesses with fleets: roofing, HVAC, plumbing, moving, landscaping. Every vehicle branded without blowing the budget.",
  "Owners at a turning point: scaling up, adding a service, getting ready to sell, or figuring out why marketing isn't working",
  "Owners who want straight advice from someone who has built businesses, not theory from someone who has only advised them",
];

export default function About() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />

      {/* Hero */}
      <section className="bg-paper">
        <Container className="grid grid-cols-1 gap-10 pb-14 pt-8 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-14 md:pb-20 md:pt-12">
          <div>
            <Crumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
            <Eyebrow>About Buckeye Biz Hub</Eyebrow>
            <h1 className="text-[clamp(2.5rem,5.6vw,4.5rem)]">Branding advice from someone who&apos;s built businesses</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
              David Stein co-founded Buckeye Biz Hub and runs it day to day. He has managed a family repair shop,
              co-founded a patented product company and built a hospitality group. He&apos;s lived the problems
              you&apos;re dealing with, and that&apos;s what he brings to Central Ohio owners.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get a free quote</ButtonLink>
              <ButtonLink href={PHONE_HREF} variant="outline">
                <Phone className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </ButtonLink>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-[380px] overflow-hidden rounded-2xl border border-border bg-cream md:max-w-none">
            <img
              src={davidHero}
              alt="David Stein, co-founder of Buckeye Biz Hub in Central Ohio"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="border-t border-border bg-white px-5 py-4">
              <p className="font-semibold text-ink">David Stein</p>
              <p className="text-sm text-muted-foreground">Co-founder, Buckeye Biz Hub. Columbus, Ohio.</p>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Numbers */}
      <section className="border-t border-border bg-white">
        <Container className="py-12 md:py-16">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2 bg-white p-6">
                <dt className="order-2 text-sm text-muted-foreground">{s.label}</dt>
                <dd className="order-1 font-display text-[2rem] leading-none text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Track record */}
      <Section bordered>
        <SectionHead
          eyebrow="The operator behind Buckeye Biz Hub"
          title="Three companies. Three industries. 20+ years of operating."
          intro="Most marketing consultants have never run a business. They've worked at agencies and taken courses. David has helped run three."
        />
        <ol className="divide-y divide-border border-y border-border">
          {timeline.map((t) => (
            <li key={t.title} className="grid grid-cols-1 gap-2 py-7 md:grid-cols-[180px_1fr] md:gap-10">
              <p className="eyebrow pt-1.5">{t.years}</p>
              <div>
                <h3 className="font-display text-[1.6rem] leading-tight">{t.title}</h3>
                <p className="mt-2 max-w-3xl text-body">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground">He holds a psychology degree from The Ohio State University.</p>
      </Section>

      {/* Quote */}
      <Section tone="cream">
        <figure className="mx-auto max-w-4xl">
          <blockquote className="font-display text-[clamp(1.6rem,3.2vw,2.4rem)] leading-snug text-ink">
            &ldquo;I&apos;ve spent over 20 years building businesses in Central Ohio. I&apos;ve failed, succeeded,
            scaled, sold and started again. Most owners don&apos;t need more marketing theory. They need someone
            who&apos;s been where they are and will tell them what works.&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold text-muted-foreground">David Stein, co-founder</figcaption>
        </figure>
      </Section>

      {/* Why it matters */}
      <Section tone="white" bordered>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow>Advice from an operator</Eyebrow>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)]">Why this matters for your business</h2>
          </div>
          <div className="space-y-4 text-[1.0625rem] leading-relaxed text-body">
            <p>
              Most consultants who tell you to spend on branding have never made Friday payroll with their own money.
              David has. He&apos;s also been up at 3 AM wondering if next month&apos;s revenue will land.
            </p>
            <p>
              That changes the advice. Sometimes the answer is spend less, on the one thing that moves your business.
              Sometimes the problem is operations, and marketing won&apos;t fix it. Sometimes you don&apos;t need a
              full wrap on one truck. You need door lettering on every truck you own.
            </p>
          </div>
        </div>
      </Section>

      {/* Three ways */}
      <Section bordered>
        <SectionHead eyebrow="How David helps" title="Three ways to work with David" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="card-lift group flex flex-col rounded-xl border border-border bg-white p-6 md:p-7"
            >
              <h3 className="font-display text-[1.6rem] leading-tight text-ink">{card.title}</h3>
              <p className="mt-3 flex-1 text-[0.975rem] text-body">{card.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                {card.linkText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Best fit */}
      <Section tone="white" bordered>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow>Best-fit clients</Eyebrow>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)]">Who David works with best</h2>
          </div>
          <ul className="space-y-4">
            {bestFit.map((item) => (
              <li key={item} className="flex gap-3 text-body">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        title="Ready to work with an operator?"
        body="Branding, fleet graphics or strategy, it starts the same way. We talk about what you're trying to do. No pressure, no obligation."
      />
    </>
  );
}
