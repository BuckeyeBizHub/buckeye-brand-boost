"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

export default function MobileCTABar() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-paper/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href="tel:+16145613358"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-ink/25 text-sm font-semibold text-ink"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call David
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand text-sm font-semibold text-white"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
