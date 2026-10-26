import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { breadcrumbLd } from "@/lib/schema";
import { Crumbs, HowItWorks } from "@/components/site/blocks";
import { ButtonLink, Container, EMAIL, Eyebrow, JsonLd, PHONE_DISPLAY, PHONE_HREF, Section } from "@/components/site/ui";
import ContactQuoteForm from "./ContactQuoteForm";

const trustPoints = [
  "Free quotes, no obligation",
  "Every fee up front",
  "4,300+ vetted suppliers for promo products",
  "If you're not happy with the result, we make it right",
  "5-star rating on Google",
];

const AREA = "Columbus, Dublin, Westerville, Gahanna, Hilliard, Grove City, Delaware, Newark and Mount Vernon";

export default function Contact() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      {/* Hero: copy on the left, David on the right. The form is the point of this page. */}
      <section className="bg-paper">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
            <div>
              <Eyebrow>Free quote within 24 hours</Eyebrow>
              <h1 className="max-w-4xl text-[clamp(2.5rem,5.6vw,4.5rem)]">Get a quote.</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
                Tell me what you need and I&apos;ll have a price back to you within 24 hours. Every fee up front.
                Nothing hidden.
              </p>
              <p className="mt-4 max-w-xl text-lg font-semibold text-ink">First order? Design and setup are free.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#quote-form" external>
                  Fill out the form
                </ButtonLink>
                <ButtonLink href={PHONE_HREF} variant="outline">
                  <Phone className="h-4 w-4" aria-hidden />
                  Or call {PHONE_DISPLAY}
                </ButtonLink>
              </div>
            </div>

            <figure className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-cream">
                <img
                  src="/assets/david-stein-hero.jpg"
                  alt="David Stein behind the bar at a brewery, with a stack of branded glasses"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover object-[50%_20%]"
                />
              </div>
              <figcaption className="relative mx-4 -mt-8 rounded-xl border border-border bg-white p-4 shadow-[0_18px_40px_-24px_hsl(var(--ink)/0.45)] sm:mx-6 sm:p-5">
                <p className="flex items-center gap-2 font-semibold text-ink">
                  <Clock className="h-5 w-5 shrink-0 text-brand" aria-hidden />
                  David answers every quote request himself.
                </p>
                <p className="mt-1 text-[0.95rem] text-body">No bots. No runaround. Reply within 24 hours.</p>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Form and contact details */}
      <Section tone="cream" id="quote-form" bordered>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-12">
          <aside className="space-y-4">
            <a
              href={PHONE_HREF}
              className="card-lift flex items-center gap-4 rounded-xl border border-ink bg-ink p-5 text-white"
            >
              <Phone className="h-5 w-5 shrink-0 text-white" aria-hidden />
              <span className="min-w-0">
                <span className="block text-sm text-white/75">Call David directly</span>
                <span className="block font-display text-[1.6rem] leading-tight text-white">{PHONE_DISPLAY}</span>
              </span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="card-lift flex items-center gap-4 rounded-xl border border-border bg-white p-5"
            >
              <Mail className="h-5 w-5 shrink-0 text-brand" aria-hidden />
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">Email</span>
                <span className="block break-all font-semibold text-ink">{EMAIL}</span>
              </span>
            </a>

            <ul className="space-y-3 pt-2">
              {trustPoints.map((t) => (
                <li key={t} className="flex gap-3 text-[0.95rem] text-body">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-white p-5 sm:p-8 md:p-10">
            <h2 className="text-[clamp(1.85rem,3.6vw,2.5rem)]">Tell me about your project</h2>
            <p className="mb-8 mt-3 text-body">
              Fill out the form and you&apos;ll have a custom quote within 24 hours. A photo of what you have now helps.
            </p>

            <ContactQuoteForm />

            <p className="mt-6 border-t border-border pt-6 text-center text-[0.95rem] text-muted-foreground">
              Prefer to call?{" "}
              <a href={PHONE_HREF} className="whitespace-nowrap font-semibold text-brand hover:underline">
                Reach David at {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </Section>

      <HowItWorks title="What happens after you send it." />

      {/* Where */}
      <Section tone="white" bordered>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow>Where</Eyebrow>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)]">Based in Columbus, Ohio</h2>
          </div>
          <div className="space-y-4 text-[1.0625rem] leading-relaxed text-body">
            <p>
              No walk-in showroom. David comes to you, or works with you by phone and email. Print ships to you, and
              vehicle and window work gets installed.
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
              <span>Serving {AREA}, and the rest of Central Ohio.</span>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
