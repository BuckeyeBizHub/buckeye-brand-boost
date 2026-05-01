import SimpleServicePage from "@/components/services/SimpleServicePage";
import g1 from "@/assets/banner-vinyl-product.jpg";
import g2 from "@/assets/banner-feather-flags.jpg";
import g3 from "@/assets/banner-event-grandopening.jpg";

const BannersAndFlagsSimple = () => (
  <SimpleServicePage
    service="Banners & Flags"
    metaTitle="Banners & Flags in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Vinyl banners, mesh banners, and feather flags in Columbus, Ohio. Built for Ohio weather with bold print, fast turnaround, and honest wholesale pricing."
    slug="/banners-and-flags"
    description={`When a Columbus, Ohio business needs to make a statement at a grand opening, job site, festival, or trade show, banners and flags do the heavy lifting. They're affordable, weatherproof, easy to install, and they put your brand at eye level exactly where your customers are walking. Buckeye Biz Hub prints custom banners and flags for businesses across Central Ohio — from small storefronts in Clintonville to construction crews working highway projects to nonprofits hosting fundraisers in Westerville and Dublin.

We offer the full lineup: heavy-duty 13oz vinyl banners with hemmed edges and grommets, mesh banners for construction fences that resist Ohio wind, retractable banner stands for trade shows, fabric banners for indoor events, and feather flags that catch attention from across the parking lot. Every banner ships ready to hang — reinforced corners, hemmed edges, and grommets pre-installed.

Our banners and flags in Columbus Ohio are printed on commercial-grade equipment with UV-stable inks, so the colors stay vibrant through summer sun and winter slush. Need it fast? We turn most banner orders around in 3–5 business days, with rush options available for last-minute events. Pricing is fully transparent — you'll see exact wholesale material cost plus our flat management fee on every quote, with no hidden setup or "art" charges. Send us your logo or final artwork and we'll have a proof in your inbox the same business day.`}
    gallery={[
      { src: g1, alt: "Custom vinyl banner printed for a Columbus Ohio business" },
      { src: g2, alt: "Feather flags lined up at a Central Ohio grand opening" },
      { src: g3, alt: "Grand opening event banner in Columbus, Ohio" },
    ]}
    startingFrom="$89"
    pricingNote="for a 3' x 6' full-color vinyl banner"
    benefits={[
      "Heavy-duty 13oz vinyl with hemmed edges and grommets, ready to hang",
      "UV-stable inks built to survive Columbus, Ohio summers and winters",
      "Vinyl, mesh, fabric, retractable, and feather flag options in stock",
      "Most orders ship in 3–5 business days, with rush options available",
      "Honest pricing — wholesale materials plus a flat management fee",
    ]}
  />
);

export default BannersAndFlagsSimple;
