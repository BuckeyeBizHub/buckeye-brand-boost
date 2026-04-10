import { usePageTitle } from "@/hooks/usePageTitle";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import heroImg from "@/assets/menus-hero.jpg";

const MenusAndTableTents = () => {
  usePageTitle("Menu Printing & Table Tents Columbus OH", "Custom restaurant menu printing and table tents for Ohio restaurants, bars, and hospitality businesses. Durable, laminated, and beautifully designed.");

  return (
    <ServicePageLayout
      title="Menus & Table Tents"
      headline="Custom Menu Printing & Table Tents That Make Customers Hungry"
      subheadline="Durable, vibrant, and professionally designed menus and table tents for restaurants, bars, cafes, and hospitality businesses across Ohio."
      image={heroImg}
      slug="menus-and-table-tents"
      description={[
        "Your menu is your most important sales tool. It's the one piece of marketing that every single customer reads — and a well-designed, professionally printed menu directly increases average order value. Studies show that strategic menu design can boost sales by 10–15%.",
        "We print every style of menu: single-page laminated menus that withstand daily use, tri-fold and bi-fold menus for full drink and food listings, multi-page saddle-stitched booklet menus for extensive offerings, and table tents that promote specials, happy hours, and seasonal items.",
        "All menus are printed on durable, food-safe stocks with options for heavy lamination (waterproof and wipeable), soft-touch coating, and UV-resistant inks that won't fade under restaurant lighting. We also offer disposable single-use menus on lighter stocks for high-turnover establishments.",
      ]}
      benefits={[
        { text: "Laminated menus — waterproof, wipeable, durable" },
        { text: "Tri-fold, bi-fold, and booklet-style menus" },
        { text: "Table tents in 4×6, 5×7, and custom sizes" },
        { text: "QR code integration for digital ordering" },
        { text: "Seasonal inserts and specials cards" },
        { text: "Disposable single-use menus available" },
        { text: "Full design services — we make your food look irresistible" },
      ]}
      whyOhio="From Columbus gastropubs to Cleveland diners to Cincinnati fine dining — Ohio's hospitality industry deserves menus that look as good as the food tastes. We work with restaurants, bars, breweries, cafes, food trucks, and catering companies across the state to create menus that drive orders and build brand loyalty."
    />
  );
};

export default MenusAndTableTents;
