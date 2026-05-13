import { Home, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useHeadingHierarchy } from "@/hooks/useHeadingHierarchy";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/industries": "Industries",
  "/services": "Services",
  "/pricing": "Pricing",
  "/contact": "Contact",
  "/portfolio": "Portfolio",
  "/faq": "FAQ",
  "/blog": "Blog",
  "/testimonials": "Testimonials",
  "/privacy-policy": "Privacy Policy",
  "/research": "Research Assistant",
  "/business-cards-printing": "Business Cards & Stationery",
  "/business-printing": "Business Printing",
  "/promotional-products": "Promotional Products & Giveaways",
  "/embroidered-apparel": "Branded Apparel & Uniforms",
  "/yard-signs-and-signage": "Yard Signs & Custom Signage",
  "/vehicle-wraps": "Vehicle Wraps & Fleet Branding",
  "/full-rebrand-kits": "Full Rebrand Kits",
  "/website-design": "Website Design & Development",
  "/local-seo": "Local SEO & Google Ranking",
  "/banners-and-flags": "Banners & Flags",
  "/decals-and-stickers": "Custom Decals",
  "/postcards": "Postcards & Direct Mail",
  "/catalogs-and-booklets": "Catalogs & Booklets",
  "/presentation-folders": "Presentation Folders",
  "/menus-and-table-tents": "Menus & Table Tents",
  "/letterhead-and-envelopes": "Letterhead & Envelopes",
  "/large-format-printing": "Large Format Printing",
};

const servicePages = [
  "/business-cards-printing", "/business-printing", "/promotional-products",
  "/embroidered-apparel", "/yard-signs-and-signage",
  "/vehicle-wraps", "/full-rebrand-kits",
  "/website-design", "/local-seo", "/banners-and-flags", "/decals-and-stickers",
  "/postcards", "/catalogs-and-booklets", "/presentation-folders",
  "/menus-and-table-tents", "/letterhead-and-envelopes", "/large-format-printing",
];

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  // Dev-only heading hierarchy check runs on every navigation
  useHeadingHierarchy();

  if (pathname === "/") return null;

  const label = routeLabels[pathname] || pathname.replace(/^\//, "").replace(/-/g, " ");
  const isService = servicePages.includes(pathname);

  const crumbs = [
    { label: "Home", href: "/" },
    ...(isService ? [{ label: "Services", href: "/services" }] : []),
    { label, href: pathname },
  ];

  // Use structured-data library for JSON-LD (consistent with SEOHead)

  return (
    <>
      <nav aria-label="Breadcrumb" className="fixed top-[60px] left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="container py-2.5 px-6">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm flex-wrap">
            {crumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" aria-hidden="true" />}
                {i === 0 && <Home className="w-3.5 h-3.5 text-muted-foreground/70" aria-hidden="true" />}
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="font-semibold text-foreground">{crumb.label}</span>
                ) : (
                  <Link to={crumb.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
