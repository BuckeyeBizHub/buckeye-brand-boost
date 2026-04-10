import { usePageTitle } from "@/hooks/usePageTitle";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import heroImg from "@/assets/letterhead-hero.jpg";

const LetterheadAndEnvelopes = () => {
  usePageTitle("Letterhead & Envelope Printing Columbus OH", "Custom letterhead and matching envelope printing for Ohio businesses. Premium paper, full-color, and coordinated stationery sets. 24-hour quotes.");

  return (
    <ServicePageLayout
      title="Letterhead & Envelopes"
      headline="Professional Letterhead & Matching Envelopes That Elevate Every Correspondence"
      subheadline="Custom-printed stationery sets that make every letter, invoice, and proposal look polished and professional."
      image={heroImg}
      slug="letterhead-and-envelopes"
      description={[
        "Every letter you send is a brand impression. Whether it's a proposal, an invoice, a thank-you note, or a formal contract — professional letterhead tells the recipient that you take your business seriously. Paired with matching printed envelopes, your correspondence arrives looking cohesive and credible.",
        "We print letterhead on premium 70lb and 80lb text stocks in both bright white and natural linen finishes. Full-color printing ensures your logo, brand colors, and contact information look sharp and vibrant. Matching envelopes are available in #10 business, A7 invitation, 6×9, 9×12, and custom sizes.",
        "Complete your stationery suite with matching notepads, memo pads, and compliment slips. We can also add premium touches like foil stamping, embossing, and custom watermarks for luxury stationery sets.",
      ]}
      benefits={[
        { text: "Full-color letterhead on 70lb or 80lb premium text stock" },
        { text: "Matching printed envelopes in #10, A7, 6×9, and 9×12 sizes" },
        { text: "Coordinated stationery sets — letterhead + envelopes + business cards" },
        { text: "Bright white and natural linen paper options" },
        { text: "Foil stamping and embossing available for luxury sets" },
        { text: "Digital and offset printing for any quantity" },
        { text: "Custom notepad and memo pad printing included" },
      ]}
      whyOhio="Ohio law firms, accounting firms, medical practices, and professional service companies rely on branded stationery to maintain a polished image. We create coordinated stationery suites that match your business cards and presentation folders — so every touchpoint reinforces your brand."
    />
  );
};

export default LetterheadAndEnvelopes;
