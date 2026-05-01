import { Helmet } from "react-helmet-async";
import {
  localBusinessSchema,
  BUCKEYE_LOCAL_BUSINESS_OPTS,
} from "@/lib/structured-data";

/**
 * Site-wide LocalBusiness + PrintShop JSON-LD injected into <head> on every page.
 * Mounted once in App.tsx.
 */
const SiteLocalBusinessJsonLd = () => {
  const schema = localBusinessSchema({
    ...BUCKEYE_LOCAL_BUSINESS_OPTS,
    types: ["LocalBusiness", "PrintShop"],
    description:
      "Columbus Ohio's branding concierge specializing in printing, vehicle wraps, promotional products, banners, and embroidered apparel",
    areaServed: [
      { "@type": "City", name: "Columbus", addressRegion: "OH" },
      { "@type": "Place", name: "Central Ohio" },
      { "@type": "City", name: "Dublin", addressRegion: "OH" },
      { "@type": "City", name: "Westerville", addressRegion: "OH" },
      { "@type": "City", name: "Gahanna", addressRegion: "OH" },
    ],
    aggregateRating: { ratingValue: "5.0", reviewCount: "500" },
  });

  return (
    <Helmet>
      <script type="application/ld+json" data-schema="site-local-business">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SiteLocalBusinessJsonLd;
