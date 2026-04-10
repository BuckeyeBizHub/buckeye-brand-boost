import { usePageTitle } from "@/hooks/usePageTitle";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import heroImg from "@/assets/presentation-folders-hero.jpg";

const PresentationFolders = () => {
  usePageTitle("Presentation Folders Printing Columbus OH", "Custom presentation folders and pocket folders for Ohio businesses. Premium stocks, foil stamping, spot UV, and custom pockets. 24-hour quotes from Buckeye Biz Hub.");

  return (
    <ServicePageLayout
      title="Presentation Folders"
      headline="Custom Presentation Folders That Make Your Brand Look Polished & Professional"
      subheadline="Premium pocket folders with custom pockets, foil stamping, and spot UV — designed to impress clients and close deals."
      image={heroImg}
      slug="presentation-folders"
      description={[
        "A presentation folder is often the first physical touchpoint a prospect has with your brand. When they open a folder filled with your proposals, contracts, or product sheets — the quality of that folder says everything about your business.",
        "We offer standard 9×12 folders with one or two pockets, capacity folders that hold up to 1 inch of materials, and custom die-cut folders with unique shapes and window cutouts. Every folder is printed on heavy 14pt or 16pt card stock with your choice of gloss, matte, or soft-touch lamination.",
        "Add premium touches like gold or silver foil stamping on your logo, spot UV coating for a raised glossy effect, embossing for dimensional texture, or custom business card slits inside. These details transform a simple folder into a powerful sales tool.",
      ]}
      benefits={[
        { text: "Standard 9×12 and legal-size folders available" },
        { text: "Single or double pocket configurations" },
        { text: "Capacity folders hold up to 1 inch of documents" },
        { text: "Foil stamping, spot UV, and embossing options" },
        { text: "Business card slits on inside pockets" },
        { text: "Heavy 14pt–16pt premium card stock" },
        { text: "Full-color printing inside and out" },
      ]}
      whyOhio="From law firms in downtown Columbus to construction companies in Akron — Ohio businesses need professional presentation folders that build trust and close deals. We design folders that match your existing brand identity and deliver them fast so you're always ready for your next big meeting."
    />
  );
};

export default PresentationFolders;
