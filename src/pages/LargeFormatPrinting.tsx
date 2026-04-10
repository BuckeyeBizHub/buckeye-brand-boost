import { usePageTitle } from "@/hooks/usePageTitle";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import heroImg from "@/assets/large-format-hero.jpg";

const LargeFormatPrinting = () => {
  usePageTitle("Large Format Printing Columbus OH", "Large format printing for posters, wall graphics, floor graphics, retractable banners, and trade show displays. Premium quality for Ohio businesses.");

  return (
    <ServicePageLayout
      title="Large Format Printing"
      headline="Large Format Printing That Commands Attention From Across the Room"
      subheadline="Posters, wall graphics, floor graphics, retractable banners, trade show displays, and more — printed big, bold, and beautiful."
      image={heroImg}
      slug="large-format-printing"
      description={[
        "When you need to make a big impression — literally — large format printing delivers. From towering retractable banner stands at trade shows to vivid wall murals in your office lobby, large format printing transforms any space into a branded experience.",
        "We print on a wide range of substrates: vinyl, fabric, canvas, foam board, corrugated plastic (Coroplast), PVC, aluminum composite, and adhesive-backed materials for wall wraps and floor graphics. Our large format printers produce photo-quality output up to 120 inches wide with UV-resistant, fade-proof inks.",
        "Popular products include retractable banner stands (33×80 and 36×92), step-and-repeat backdrops for events, window clings and perforated window films, custom wallpaper and wall murals, floor decals with anti-slip lamination, and mounted poster displays. We handle everything from design to installation.",
      ]}
      benefits={[
        { text: "Retractable banner stands — portable, reusable, professional" },
        { text: "Custom wall murals and wallpaper for offices and retail" },
        { text: "Anti-slip floor graphics for retail, events, and wayfinding" },
        { text: "Trade show displays — backdrops, tabletop displays, pop-ups" },
        { text: "Posters and mounted prints up to 120 inches wide" },
        { text: "Window clings and perforated window films" },
        { text: "UV-resistant, weatherproof printing for indoor and outdoor use" },
        { text: "Installation services available throughout Ohio" },
      ]}
      whyOhio="From the Columbus Convention Center to Ohio State tailgate events to retail storefronts across the state — Ohio businesses need large format printing that looks professional and lasts. We serve trade show exhibitors, retail stores, restaurants, corporate offices, and event planners with fast turnaround and competitive pricing."
    />
  );
};

export default LargeFormatPrinting;
