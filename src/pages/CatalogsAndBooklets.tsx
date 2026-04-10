import { usePageTitle } from "@/hooks/usePageTitle";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import heroImg from "@/assets/catalogs-hero.jpg";

const CatalogsAndBooklets = () => {
  usePageTitle("Catalogs & Booklets Printing Columbus OH", "Professional catalog and booklet printing — saddle-stitched, perfect-bound, and wire-o binding. Full-color, premium paper stocks, and fast turnaround for Ohio businesses.");

  return (
    <ServicePageLayout
      title="Catalogs & Booklets"
      headline="Professional Catalogs & Booklets That Showcase Your Products Beautifully"
      subheadline="Saddle-stitched, perfect-bound, and wire-o binding options with premium paper stocks and vibrant full-color printing."
      image={heroImg}
      slug="catalogs-and-booklets"
      description={[
        "Whether you need a 12-page product catalog, a 48-page capabilities booklet, or a full-color lookbook — we produce professional bound publications that present your business at its absolute best.",
        "Our catalog and booklet printing covers every binding style: saddle-stitched (stapled) for slim publications up to 64 pages, perfect-bound (glued spine) for thicker catalogs with a professional book-like feel, and wire-o (spiral) binding for lay-flat manuals and presentations.",
        "We print on premium paper stocks from 70lb text to 100lb gloss cover, with options for UV coating, soft-touch lamination, and spot UV accents on covers. Every catalog is printed in full CMYK color with rich, photo-quality output.",
      ]}
      benefits={[
        { text: "Saddle-stitched, perfect-bound, and wire-o binding available" },
        { text: "Page counts from 8 to 200+ pages" },
        { text: "Premium cover stocks with gloss, matte, or soft-touch finish" },
        { text: "Full-color interior printing on 70lb, 80lb, or 100lb paper" },
        { text: "Custom sizes including 5.5×8.5, 8.5×11, and 6×9" },
        { text: "Design services included — we create your layout from scratch" },
        { text: "Short-run digital or high-volume offset printing available" },
      ]}
      whyOhio="Ohio businesses need catalogs that do the selling for them. Whether you're a manufacturer in Cleveland, a retailer in Columbus, or a distributor in Cincinnati — a well-designed catalog puts your entire product line in your customer's hands. We handle everything from design to delivery so you can focus on running your business."
    />
  );
};

export default CatalogsAndBooklets;
