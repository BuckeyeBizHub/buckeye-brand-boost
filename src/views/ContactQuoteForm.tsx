"use client";
import { useCallback, useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { FilloutStandardEmbed } from "@fillout/react";
import { FILLOUT_QUOTE_FORM_ID, TALLY_QUOTE_FORM_ID } from "@/content/forms";

type TallyWindow = Window & { Tally?: { loadEmbeds: () => void } };

/**
 * The quote form. Uses the Fillout form when FILLOUT_QUOTE_FORM_ID is set,
 * otherwise the old Tally form. Shows a thank-you note on submit.
 */
export default function ContactQuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmitted = useCallback(() => {
    setSubmitted(true);
    // Wait a tick so the note is rendered before scrolling to it
    setTimeout(() => {
      document.getElementById("quote-success")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  }, []);

  return (
    <>
      {submitted && (
        <div
          id="quote-success"
          role="status"
          aria-live="polite"
          className="mb-6 flex items-start gap-3 rounded-xl border border-border bg-cream p-5"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
          <p className="font-semibold text-ink">
            Thanks. I got your quote request. You&apos;ll hear back within 24 hours.
          </p>
        </div>
      )}

      {FILLOUT_QUOTE_FORM_ID ? (
        <div className="w-full max-w-full overflow-x-hidden">
          <FilloutStandardEmbed
            filloutId={FILLOUT_QUOTE_FORM_ID}
            inheritParameters
            dynamicResize
            onSubmit={onSubmitted}
          />
        </div>
      ) : (
        <TallyEmbed onSubmitted={onSubmitted} />
      )}
    </>
  );
}

/** The old Tally embed (form QKYlz8). Remove once Fillout is live and checked. */
function TallyEmbed({ onSubmitted }: { onSubmitted: () => void }) {
  // Load Tally embed script
  useEffect(() => {
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.head.appendChild(script);
    } else {
      (window as TallyWindow).Tally?.loadEmbeds();
    }
  }, []);

  // Listen for Tally form submission via postMessage
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      if (event.data.includes("Tally.FormSubmitted") || event.data.includes("tally-form-submitted")) {
        onSubmitted();
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [onSubmitted]);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <iframe
        data-tally-src={`https://tally.so/embed/${TALLY_QUOTE_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="500"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Buckeye Biz Hub Quote Request"
        className="block min-h-[600px] w-full max-w-full"
      />
    </div>
  );
}
