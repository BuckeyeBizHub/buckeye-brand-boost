import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { GROUP_LABEL, GROUP_ORDER, INDUSTRIES, getProduct, productsInGroup } from "@/content/catalog";
import type { ProductPage } from "@/content/types";
import type { BlogPostSummary } from "@/lib/blog-utils";
import { CtaBand, HowItWorks, LinkCards, PriceCards, PriceFootnote, StartSmall } from "@/components/site/blocks";
import { ButtonLink, Container, Eyebrow, PHONE_DISPLAY, PHONE_HREF, Section, SectionHead } from "@/components/site/ui";
import LatestBlogSection from "@/components/LatestBlogSection";

const PROMISES = [
  "Free quote within 24 hours",
  "Real starting prices on the site",
  "Small first orders welcome",
  "If you're not happy, we make it right",
];

const LEAD = ["custom-labels", "decals-and-stickers", "vehicle-lettering"];

export default function Index({ latestPosts = [] }: { latestPosts?: BlogPostSummary[] }) {
  const lead = LEAD.map((s) => getProduct(s))
    .filter((p): p is ProductPage => Boolean(p))
    .map((p) => ({ href: `/${p.slug}`, title: p.navLabel, blurb: p.blurb, image: p.hero, price: p.prices?.[0] }));

  return (
    <>
      {/* Hero: full-bleed photo, like the sister site */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <img
          src="/assets/branded-vehicle-fleet.jpg"
          alt="White work vans lettered with the Buckeye Biz Hub logo"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" aria-hidden />
        <Container className="flex min-h-[78svh] flex-col justify-center py-20 md:min-h-[640px]">
          <p className="eyebrow mb-5 text-paper/70">Columbus and Central Ohio</p>
          <h1 className="max-w-3xl text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02]">
            Labels, decals and truck lettering in Columbus. One call.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
            Custom labels for what you sell, lettering for what you drive, and signs and printing for everything else.
            Real starting prices. Small first orders welcome. You deal with me, start to finish.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="light">
              Get a free quote
            </ButtonLink>
            <ButtonLink href="/pricing" variant="ghost-light">
              See starting prices
            </ButtonLink>
          </div>
          <p className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-brand-bright" aria-hidden />
            First order? Design and setup are free.
          </p>
        </Container>
      </section>

      {/* Promises */}
      <section className="border-b border-border bg-white">
        <Container>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 py-6 text-[0.95rem] text-ink sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Lead products */}
      <Section>
        <SectionHead
          eyebrow="Start here"
          title="Most people call about one of these."
          intro="Labels for the product, decals for the gear, lettering for the truck. Each one starts small and gets cheaper per piece when you reorder."
        />
        <LinkCards items={lead} />
      </Section>

      {/* Prices */}
      <Section tone="white" bordered>
        <SectionHead
          eyebrow="Starting prices"
          title="Know the number before you call."
          intro={
            <>
              Most shops make you ask. Here&apos;s where the common jobs start.{" "}
              <Link href="/pricing" className="font-semibold text-ink underline decoration-border underline-offset-4 hover:text-brand">
                See every starting price
              </Link>
              .
            </>
          }
        />
        <PriceCards keys={["roll-labels", "vinyl-decals", "door-lettering", "car-magnets", "yard-signs", "business-cards"]} />
        <PriceFootnote />
      </Section>

      {/* Start small story */}
      <Section tone="cream">
        <StartSmall
          heading="500 labels turned into 5,000."
          body="A Columbus bagel shop started with a 500-label order to try it out. The labels worked, the product sold, and the next order was 5,000. That's how most of my customers start: small, then bigger once they know it works."
        />
      </Section>

      {/* Everything we make */}
      <Section bordered>
        <SectionHead eyebrow="Everything we make" title="One person for all of it." />
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {GROUP_ORDER.filter((g) => g !== "more").map((g) => (
            <div key={g} className="border-t border-border pt-5">
              <h3 className="font-display text-[1.6rem] leading-tight">{GROUP_LABEL[g]}</h3>
              <ul className="mt-4 space-y-2">
                {productsInGroup(g).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}`} className="group inline-flex items-center gap-1.5 text-body hover:text-brand">
                      {p.navLabel}
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="border-t border-border pt-5">
            <h3 className="font-display text-[1.6rem] leading-tight">By industry</h3>
            <ul className="mt-4 space-y-2">
              {INDUSTRIES.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="text-body hover:text-brand">
                    {p.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <HowItWorks title="Tell me the job. I handle the rest." />

      {/* You deal with me */}
      <Section tone="cream">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-white">
            <img
              src="/assets/david-stein-headshot.jpg"
              alt="David Stein, who runs Buckeye Biz Hub"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>Who you&apos;re working with</Eyebrow>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)]">You deal with me.</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-body">
              <p>
                I&apos;m David Stein. I co-founded Buckeye Biz Hub and I run it day to day. Before this I co-founded
                BeerTubes and grew it from $79K in year one to $4.5M before we sold it. Then I built a brewery and
                restaurant group in Mount Vernon and Newark to more than 100 employees.
              </p>
              <p>
                I&apos;ve bought a lot of printing and branding with my own money. I know what it costs you when it shows
                up late or looks cheap. I run every job the way I&apos;d want mine run.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/about" variant="outline">
                Read my story
              </ButtonLink>
              <ButtonLink href={PHONE_HREF} variant="ink">
                <Phone className="h-4 w-4" aria-hidden />
                {PHONE_DISPLAY}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <LatestBlogSection posts={latestPosts.slice(0, 3)} />

      <CtaBand />
    </>
  );
}
