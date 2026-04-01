import ServicePageLayout from "@/components/services/ServicePageLayout";
import yardSignsImg from "@/assets/yard-signs-product.jpg";

const YardSignsAndSignage = () => (
  <ServicePageLayout
    title="Yard Signs & Custom Signage"
    headline="Yard Signs & Custom Signage for Ohio Businesses"
    subheadline="Get noticed where it matters most with bold, durable signage"
    image={yardSignsImg}
    slug="yard-signs-and-signage"
    description={[
      "Get noticed where it matters most. Our bold yard signs, banners, and job-site signage generate immediate attention, phone calls, and new customers for local businesses throughout Central Ohio.",
      "From corrugated yard signs and retractable banners to large-format vinyl displays and job-site boards, we produce durable, full-color signage that withstands Ohio weather and grabs attention from the street.",
      "Whether you're a real estate agent, contractor, landscaper, or running a political campaign, our signage solutions are designed to drive results fast. Bold colors, sharp graphics, and premium materials — all at wholesale pricing.",
    ]}
    benefits={[
      { text: "Durable corrugated yard signs that withstand Ohio weather" },
      { text: "Full-color banners, retractable displays, and large-format prints" },
      { text: "Perfect for real estate, contractors, landscaping, and events" },
      { text: "Wholesale pricing with no setup fees on most orders" },
      { text: "Fast production and 24-hour quotes guaranteed" },
    ]}
    whyOhio="Central Ohio businesses rely on Buckeye Biz Hub for signage because we deliver bold, professional results at prices that make sense. From a single yard sign to hundreds for a campaign, we handle it all with speed and precision."
  />
);

export default YardSignsAndSignage;
