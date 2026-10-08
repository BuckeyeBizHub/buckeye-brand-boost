import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { ButtonLink, Container, EMAIL, Eyebrow, PHONE_DISPLAY, PHONE_HREF, Section } from "@/components/site/ui";
import NotFoundTracker from "./NotFoundTracker";

const popularPages = [
  { label: "Everything we make", href: "/services", description: "Labels, signs, printing, vehicle graphics, apparel and promo." },
  { label: "Pricing", href: "/pricing", description: "Starting prices for the most common jobs." },
  { label: "Business cards", href: "/business-cards-printing", description: "Business cards with foil, raised print and custom finishes." },
  { label: "Vehicle wraps", href: "/vehicle-wraps", description: "Full and partial wraps for commercial fleets." },
  { label: "Get a quote", href: "/contact", description: "Free quote within 24 hours. No obligation." },
  { label: "Blog", href: "/blog", description: "Guides and branding tips for Ohio businesses." },
];

export default function NotFound() {
  return (
    <>
      <NotFoundTracker />

      <section className="bg-paper">
        <Container className="pb-14 pt-12 md:pb-20 md:pt-20">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="max-w-3xl text-[clamp(2.5rem,5.6vw,4.5rem)]">That page isn&apos;t here.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
            It may have moved, been renamed or been taken down. Try one of these pages or head back home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Back to the homepage</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact David
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section tone="white" bordered>
        <h2 className="mb-8 text-[clamp(1.85rem,3.6vw,2.5rem)]">Popular pages</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popularPages.map((p) => (
            <Link key={p.href} href={p.href} className="card-lift group flex flex-col rounded-xl border border-border bg-white p-5">
              <h3 className="font-display text-[1.45rem] leading-tight text-ink">{p.label}</h3>
              <p className="mt-2 flex-1 text-[0.95rem] text-muted-foreground">{p.description}</p>
              <ArrowRight className="mt-4 h-4 w-4 text-ink transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-cream p-6 md:p-8">
          <h2 className="text-[1.75rem]">Think this page should be here?</h2>
          <p className="mt-2 text-body">Let me know and I&apos;ll fix it.</p>
          <div className="mt-4 flex flex-col gap-3 text-[0.975rem] sm:flex-row sm:gap-6">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-semibold text-ink hover:text-brand">
              <Phone className="h-4 w-4" aria-hidden /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 break-all font-semibold text-ink hover:text-brand">
              <Mail className="h-4 w-4 shrink-0" aria-hidden /> {EMAIL}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
