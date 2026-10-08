import type { Metadata } from "next";
import Script from "next/script";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import Providers from "./providers";
import Navbar, { type NavGroup } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GROUP_LABEL, GROUP_ORDER, productsInGroup } from "@/content/catalog";
import ScrollToTop from "@/components/ScrollToTop";
import GA4PageTracker from "@/components/GA4PageTracker";
import BackToTop from "@/components/BackToTop";
import MobileCTABar from "@/components/MobileCTABar";
import { SITE_URL } from "@/lib/structured-data";
import "@/index.css";

// Sister look to referralens.com: Newsreader for headlines, Hanken Grotesk for reading.
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap", weight: ["400", "500"] });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

// Product menu, built on the server so the browser only gets labels and links.
const navGroups: NavGroup[] = GROUP_ORDER.filter((g) => g !== "more").map((g) => ({
  title: GROUP_LABEL[g],
  links: productsInGroup(g).map((p) => ({ label: p.navLabel, href: `/${p.slug}` })),
}));

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
    "Custom labels, decals, vehicle lettering, signs, business printing and fleet wraps for Columbus and Central Ohio businesses.",
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
  image: `${SITE_URL}/assets/product-collage-hero.jpg`,
  logo: `${SITE_URL}/assets/buckeye-logo.png`,
  areaServed: ["Columbus", "Dublin", "Westerville", "Gahanna", "Hilliard", "Grove City", "Delaware", "Newark", "Mount Vernon"].map(
    (name) => ({ "@type": "City", name }),
  ),
  sameAs: [
    "https://www.facebook.com/BuckeyeBizHub",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Providers>
          <ScrollToTop />
          <GA4PageTracker />
          <Navbar groups={navGroups} />
          <main id="main-content">{children}</main>
          <Footer />
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
