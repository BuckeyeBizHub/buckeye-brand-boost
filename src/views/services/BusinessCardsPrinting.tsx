"use client";
import SimpleServicePage from "@/components/services/SimpleServicePage";
const g1 = "/assets/business-cards-product.jpg";
const g2 = "/assets/business-cards-letterhead-stack.jpg";
const g3 = "/assets/business-card-american-roofing.jpg";
const BusinessCardsPrinting = () => (
  <SimpleServicePage
    service="Business Cards & Printing"
    metaTitle="Business Cards & Printing in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Business cards and business printing in Columbus, Ohio. Letterhead, envelopes, brochures and stationery printed on commercial presses with fast turnaround."
    slug="/business-cards-printing"
    description={`A business card is still the most personal piece of marketing you'll ever hand someone. LinkedIn requests get ignored. Emails get buried. A thick, well-printed card gets remembered, and it gets called back. Buckeye Biz Hub handles business cards and full stationery sets for Central Ohio realtors, contractors, law firms, dental practices and bigger companies too.

We don't do cheap cards. We do real ones. Standard 16pt on matte or gloss. Thick 32pt with painted edges. Soft-touch, foil, spot UV, even die-cut shapes if your brand calls for it. Because we run business printing in Columbus, Ohio for hundreds of local companies, we can batch your cards with letterhead, envelopes, folders, brochures, postcards and notepads. Your brand stays tight and your costs stay low.

A real person checks every proof. David reviews your file before it goes to press and catches resolution problems, color shifts and bleed issues that would cost you a reprint. Most card orders ship in 3–5 business days, with same-day digital proofs and rush options. Pricing is out in the open: you see the wholesale press cost and our flat management fee side by side, every time.`}
    gallery={[
      { src: g1, alt: "Stack of premium business cards printed in Columbus Ohio" },
      { src: g2, alt: "Branded business cards with matching letterhead" },
      { src: g3, alt: "Custom business card design for a Central Ohio company" },
    ]}
    startingFrom="$49"
    pricingNote="for 250 full-color premium business cards"
    benefits={[
      "Standard 16pt up to thick 32pt stock with painted edges and foil",
      "Bundle with letterhead, envelopes, brochures and folders so it all matches",
      "David checks every file before it goes to press",
      "Most orders ship within 3–5 business days",
      "Every quote shows wholesale press cost plus our management fee",
    ]}
  />
);

export default BusinessCardsPrinting;
