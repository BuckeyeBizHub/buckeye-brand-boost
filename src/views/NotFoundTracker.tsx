"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track404 } from "@/lib/error-tracking";

/** Logs the missing path. Renders nothing. */
export default function NotFoundTracker() {
  const pathname = usePathname();

  useEffect(() => {
    track404(pathname ?? "", document.referrer);
  }, [pathname]);

  return null;
}
