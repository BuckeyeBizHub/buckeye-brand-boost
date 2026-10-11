import Link from "next/link";
import { ArrowRight, ChevronRight, Phone, Plus } from "lucide-react";
import { PRICES, formatPrice, type PriceKey } from "@/content/prices";
import type { Faq, Img } from "@/content/types";
import { cn } from "@/lib/utils";
import { OrderFlow } from "./OrderFlow";
import { ButtonLink, Container, Eyebrow, PHONE_DISPLAY, PHONE_HREF } from "./ui";

/** Starting-price cards. */
export function PriceCards({ keys, className, compact }: { keys: PriceKey[]; className?: string; compact?: boolean }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2",
        keys.length >= 3 && "lg:grid-cols-3",
        className,
      )}
    >
      {keys.map((k) => {
        const p = PRICES[k];
        return (
          <div key={k} className="flex flex-col justify-between gap-4 bg-white p-6">
            <div>
              <p className="font-semibold text-ink">{p.item}</p>
              {!compact && <p className="mt-1 text-sm text-muted-foreground">{p.spec}</p>}
            </div>
            <p className="flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground">from</span>
              <span className="font-display text-[2rem] leading-none text-ink">{formatPrice(p)}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function PriceFootnote({ className }: { className?: string }) {
  return (
    <p className={cn("mt-4 text-sm text-muted-foreground", className)}>
      Starting prices for the spec shown. Your quote comes back within 24 hours with your exact size, quantity and
      finish. Bigger runs cost less per piece.
    </p>
  );
}

/** FAQ list using native disclosure, so answers are in the HTML for search engines. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
            <h3 className="font-sans text-[1.0625rem] font-semibold leading-snug text-ink">{f.q}</h3>
            <Plus className="faq-plus mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform" aria-hidden />
          </summary>
          <p className="mt-3 max-w-3xl text-body">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export interface CardItem {
  href: string;
  title: string;
  blurb: string;
  image?: Img;
  price?: PriceKey;
}

export function LinkCards({ items, className }: { items: CardItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((it) => (
        <Link
          key={it.href}
          href={it.href}
          className="card-lift group flex flex-col overflow-hidden rounded-xl border border-border bg-white"
        >
          {it.image && (
            <div className="aspect-[16/10] overflow-hidden bg-cream">
              <img
                src={it.image.src}
                alt={it.image.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          )}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-[1.45rem] leading-tight text-ink">{it.title}</h3>
            <p className="mt-2 flex-1 text-[0.95rem] text-muted-foreground">{it.blurb}</p>
            <div className="mt-4 flex items-center justify-between text-sm font-semibold text-ink">
              {it.price ? (
                <span>
                  from <span className="text-brand">{formatPrice(PRICES[it.price])}</span>
                </span>
              ) : (
                <span>See options</span>
              )}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Crumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={c.name} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
            {c.href ? (
              <Link href={c.href} className="hover:text-ink">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function HowItWorks({ title = "How ordering works" }: { title?: string }) {
  return (
    <section className="on-ink">
      <Container className="py-16 md:py-24">
        <Eyebrow>One call, start to finish</Eyebrow>
        <h2 className="mb-12 max-w-2xl text-[clamp(2rem,4.2vw,3.25rem)]">{title}</h2>
        <OrderFlow />
      </Container>
    </section>
  );
}

/** Closing call to action. */
export function CtaBand({
  title = "Tell me what you need.",
  body = "Free quote within 24 hours. Small first orders are welcome. If you're not happy with the result, we make it right.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-border bg-cream">
      <Container className="grid grid-cols-1 gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:items-end md:py-24">
        <div>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)]">{title}</h2>
          <p className="mt-5 max-w-xl text-lg text-body">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <ButtonLink href="/contact">Get a free quote</ButtonLink>
          <ButtonLink href={PHONE_HREF} variant="outline">
            <Phone className="h-4 w-4" aria-hidden />
            {PHONE_DISPLAY}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/** The "start small" promise, with an optional real story. */
export function StartSmall({ heading, body }: { heading?: string; body?: string }) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-white p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
      <div>
        <Eyebrow>Start small</Eyebrow>
        <h2 className="text-[clamp(1.85rem,3.6vw,2.75rem)]">{heading ?? "Your first order can be a small one."}</h2>
      </div>
      <div className="text-body">
        <p>
          {body ??
            "Everything here is custom, so try a short run first. See how it looks on the product, the truck or the wall. When it works, reorder bigger and the price per piece drops."}
        </p>
      </div>
    </div>
  );
}
