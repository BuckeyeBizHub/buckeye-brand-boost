import SimpleServicePage from "@/components/services/SimpleServicePage";
import g1 from "@/assets/business-cards-product.jpg";
import g2 from "@/assets/business-cards-letterhead-stack.jpg";
import g3 from "@/assets/business-card-american-roofing.jpg";

const BusinessCardsPrinting = () => (
  <SimpleServicePage
    service="Business Cards & Printing"
    metaTitle="Business Cards & Printing in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Premium business cards and business printing in Columbus, Ohio — letterhead, envelopes, brochures, and stationery printed on commercial presses with fast turnaround."
    slug="/business-cards-printing"
    description={`A business card is still the single most personal piece of marketing you'll ever hand someone. In a world of LinkedIn requests and forgotten emails, a thick, well-printed card from a Columbus, Ohio professional gets remembered — and gets called back. Buckeye Biz Hub prints business cards and full stationery suites for everyone from solo realtors and contractors to law firms, dental practices, and Fortune-listed companies headquartered right here in Central Ohio.

We don't do "cheap" business cards. We do real ones. Standard 16pt cards on matte or gloss stock, premium 32pt thick cards with painted edges, soft-touch laminate cards, foil-stamped cards, spot UV cards, and even die-cut shapes if your brand calls for it. And because we run business printing in Columbus Ohio for hundreds of local companies, we batch your business cards with letterhead, envelopes, presentation folders, brochures, postcards, and notepads to keep your branding tight and your costs low.

Every order goes through a real human proof — David personally reviews your file before it hits the press to catch resolution problems, color shifts, or bleed issues that would otherwise cost you a reprint. Most business card orders ship in 3–5 business days from our Columbus office, with same-day digital proofs and rush options available. Pricing is fully transparent: you see the wholesale press cost and our flat management fee, side by side, every single time.`}
    gallery={[
      { src: g1, alt: "Stack of premium business cards printed in Columbus Ohio" },
      { src: g2, alt: "Branded business cards with matching letterhead" },
      { src: g3, alt: "Custom business card design for a Central Ohio company" },
    ]}
    startingFrom="$49"
    pricingNote="for 250 full-color premium business cards"
    benefits={[
      "Standard 16pt to luxury 32pt thick stock with painted edges and foil options",
      "Bundle with letterhead, envelopes, brochures, and folders for matching brand",
      "Personal proof review — David checks every file before it hits the press",
      "Most orders ship within 3–5 business days from Columbus, Ohio",
      "Transparent pricing on every quote — wholesale press cost plus management fee",
    ]}
  />
);

export default BusinessCardsPrinting;
