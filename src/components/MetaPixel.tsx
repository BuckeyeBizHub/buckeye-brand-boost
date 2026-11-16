"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { META_PIXEL_ID, trackPageView, trackPhoneContact } from "@/lib/tracking";

/**
 * Loads the Meta Pixel and sends PageView on every page, including
 * client-side route changes. Also sends Contact when any tel: link is
 * tapped anywhere on the site. The base snippet sends the first PageView;
 * the effect sends one for each route change after that, so each page
 * counts once.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    trackPageView();
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (link) trackPhoneContact();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
