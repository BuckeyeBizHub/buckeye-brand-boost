"use client";
import { Phone } from "lucide-react";
import { Link, useLocation } from "@/lib/compat/router";

const MobileCTABar = () => {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-seam bg-asphalt/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href="tel:+16145613358"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-seam py-2.5 text-sm font-semibold text-stock"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call David
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
};

export default MobileCTABar;
