import { Helmet } from "react-helmet-async";

/**
 * Site-wide LocalBusiness JSON-LD injected into <head> on every page.
 * Mounted once in App.tsx.
 */
const SITE_LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buckeye Biz Hub",
  description:
    "Columbus Ohio's branding concierge specializing in printing, vehicle wraps, promotional products, banners, decals, and embroidered apparel.",
  url: "https://www.buckeyebizhub.com",
  telephone: "+1-614-561-3358",
  address: {
    "@type": "PostalAddress",
    streetAddress: "YOUR STREET ADDRESS",
    addressLocality: "Columbus",
    addressRegion: "OH",
    postalCode: "YOUR ZIP",
    addressCountry: "US",
  },
  areaServed: [
    "Columbus, OH",
    "Dublin, OH",
    "Westerville, OH",
    "Gahanna, OH",
    "Hilliard, OH",
    "Grove City, OH",
    "Canal Winchester, OH",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Mike T." },
      reviewBody:
        "Buckeye Biz Hub did an incredible job on our fleet vehicle wraps. Professional, fast, and the quality exceeded our expectations.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sarah M." },
      reviewBody:
        "Outstanding printing quality for our trade show banners. Quick turnaround and incredibly helpful throughout.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "James R." },
      reviewBody:
        "Best promotional products company in Columbus. Every order has been perfect.",
    },
  ],
  sameAs: [
    "https://www.facebook.com/buckeyebizhub",
    "https://www.instagram.com/buckeyebizhub",
    "https://www.linkedin.com/company/buckeyebizhub",
  ],
};

const SiteLocalBusinessJsonLd = () => {
  return (
    <Helmet>
      <script type="application/ld+json" data-schema="site-local-business">
        {JSON.stringify(SITE_LOCAL_BUSINESS_SCHEMA)}
      </script>
    </Helmet>
  );
};

export default SiteLocalBusinessJsonLd;
