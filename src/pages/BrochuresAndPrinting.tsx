import ServicePageLayout from "@/components/services/ServicePageLayout";
import brochuresImg from "@/assets/service-brochures-printing.jpg";

const BrochuresAndPrinting = () => (
  <ServicePageLayout
    title="Brochures & Business Printing"
    headline="Brochures & Business Printing for Ohio Businesses"
    subheadline="Communicate your message with clarity, impact, and professional polish"
    image={brochuresImg}
    slug="brochures-and-business-printing"
    description={[
      "Communicate your message with clarity and impact. We produce vibrant, high-quality brochures, flyers, menus, and printed materials that capture attention, build trust, and help you stand out in the Columbus market.",
      "From tri-fold brochures and sell sheets to postcards, door hangers, and restaurant menus — every piece is printed on premium stock with rich, full-color quality that reflects your brand's professionalism.",
      "We handle everything from design consultation to final delivery, ensuring your printed materials look stunning and arrive on time. With wholesale pricing and no hidden fees, you get top-tier results without the top-tier price tag.",
    ]}
    benefits={[
      { text: "Full-color printing on premium paper stocks" },
      { text: "Brochures, flyers, postcards, menus, and sell sheets" },
      { text: "Bulk pricing that saves you 30–50% vs. competitors" },
      { text: "Design assistance available for a polished, professional look" },
      { text: "Fast turnaround with 24-hour quotes guaranteed" },
    ]}
    whyOhio="Central Ohio businesses choose Buckeye Biz Hub for brochures and printing because we deliver premium quality at wholesale prices, with the personal service and fast turnaround that big-box printers simply can't match."
  />
);

export default BrochuresAndPrinting;
