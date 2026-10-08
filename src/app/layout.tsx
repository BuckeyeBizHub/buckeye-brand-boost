import type { Metadata } from "next";
import Script from "next/script";
import { Archivo } from "next/font/google";
import Providers from "./providers";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollToTop from "@/components/ScrollToTop";
import GA4PageTracker from "@/components/GA4PageTracker";
import BackToTop from "@/components/BackToTop";
import MobileCTABar from "@/components/MobileCTABar";
import { SITE_URL } from "@/lib/structured-data";
import "@/index.css";

// One family, two widths: wide and heavy for headlines (truck-door lettering),
// normal width for reading.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });

const GA4_ID = "G-WY6SCF05ZZ";

// Pages set their own title, description and canonical. Only site-wide
// defaults live here, so no page inherits the homepage's canonical.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: "Buckeye Biz Hub" }],
  verification: { google: "GlfdZ2a56ajoxopx3uMFjqsApqB1sliewFOTh4LmI-c" },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
};

// One LocalBusiness record for the whole site. The old site also claimed a
// 5.0 rating from 500 reviews and three unnamed reviews; those are gone until
// there are real reviews to point at.
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Buckeye Biz Hub",
  description:
    "Columbus Ohio's branding concierge specializing in printing, vehicle wraps, promotional products, banners, decals, and embroidered apparel.",
  url: `${SITE_URL}/`,
  telephone: "+1-614-561-3358",
  email: "david@buckeyebizhub.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1193 Virginia Ave",
    addressLocality: "Columbus",
    addressRegion: "OH",
    postalCode: "43212",
    addressCountry: "US",
  },
  areaServed: ["Columbus", "Dublin", "Westerville", "Gahanna", "Hilliard", "Grove City", "Canal Winchester"].map(
    (name) => ({ "@type": "City", name }),
  ),
  sameAs: [
    "https://www.facebook.com/BuckeyeBizHub",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Providers>
          <ScrollToTop />
          <GA4PageTracker />
          <Breadcrumbs />
          <main id="main-content">{children}</main>
          <BackToTop />
          <MobileCTABar />
        </Providers>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}',{send_page_view:false});`}
        </Script>
      </body>
    </html>
  );
}
