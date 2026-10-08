"use client";
// Client component: rendered by app/error.tsx, and the retry button needs a click handler.
import { Mail, Phone, RefreshCw } from "lucide-react";
import { ButtonLink, Container, EMAIL, Eyebrow, PHONE_DISPLAY, PHONE_HREF } from "@/components/site/ui";

export default function ServerError() {
  return (
    <section className="bg-paper">
      <Container className="py-16 md:py-24">
        <Eyebrow>Error 500</Eyebrow>
        <h1 className="max-w-3xl text-[clamp(2.5rem,5.6vw,4.5rem)]">Something went wrong.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
          Something broke on our end. It&apos;s temporary. Try again in a minute. Still not working? Call or email.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-[0.975rem] font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            <RefreshCw className="h-4 w-4" aria-hidden />
            Try again
          </button>
          <ButtonLink href="/" variant="outline">
            Back to the homepage
          </ButtonLink>
        </div>

        <div className="mt-14 max-w-2xl rounded-xl border border-border bg-white p-6 md:p-8">
          <h2 className="text-[1.75rem]">Need help now?</h2>
          <p className="mt-2 text-body">Reach out and you&apos;ll hear back within 24 hours.</p>
          <div className="mt-4 flex flex-col gap-3 text-[0.975rem] sm:flex-row sm:gap-6">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-semibold text-ink hover:text-brand">
              <Phone className="h-4 w-4" aria-hidden /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 break-all font-semibold text-ink hover:text-brand">
              <Mail className="h-4 w-4 shrink-0" aria-hidden /> {EMAIL}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
