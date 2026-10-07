import { Phone } from "lucide-react";
import { Link } from "@/lib/compat/router";

interface CTASectionProps {
  heading?: string;
  body?: string;
}

/** Closing call to action. Asphalt band, one red button, the phone number. */
const CTASection = ({
  heading = "Tell me what you need.",
  body = "Free quote within 24 hours. If you're not happy with the result, we make it right.",
}: CTASectionProps) => (
  <section className="border-t border-seam bg-asphalt">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:px-8 lg:py-28">
      <div>
        <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold text-stock">{heading}</h2>
        <p className="mt-5 max-w-xl text-lg text-fog">{body}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-ohio-red-light"
        >
          Get a free quote
        </Link>
        <a
          href="tel:+16145613358"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-seam px-7 py-4 text-base font-semibold text-stock transition-colors hover:border-fog"
        >
          <Phone className="h-4 w-4" aria-hidden />
          (614) 561-3358
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
