import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
  "/business-cards": "Business Cards & Stationery",
  "/brochures-and-business-printing": "Brochures & Business Printing",
  "/promotional-products": "Promotional Products & Giveaways",
  "/branded-apparel-and-uniforms": "Branded Apparel & Uniforms",
  "/yard-signs-and-signage": "Yard Signs & Custom Signage",
  "/vehicle-wraps-and-fleet-branding": "Vehicle Wraps & Fleet Branding",
  "/full-rebrand-kits": "Full Rebrand Kits",
  "/website-design": "Website Design & Development",
  "/local-seo": "Local SEO & Google Ranking",
};

const servicePages = [
  "/business-cards", "/brochures-and-business-printing", "/promotional-products",
  "/branded-apparel-and-uniforms", "/yard-signs-and-signage",
  "/vehicle-wraps-and-fleet-branding", "/full-rebrand-kits",
  "/website-design", "/local-seo",
];

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const label = routeLabels[pathname] || pathname.replace(/^\//, "").replace(/-/g, " ");
  const isService = servicePages.includes(pathname);

  const crumbs = [
    { label: "Home", href: "/" },
    ...(isService ? [{ label: "Services", href: "/services" }] : []),
    { label, href: pathname },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `https://buckeye-brand-boost.lovable.app${c.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="fixed top-[60px] left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="container py-2.5 px-6">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm flex-wrap">
            {crumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />}
                {i === 0 && <Home className="w-3.5 h-3.5 text-muted-foreground/70" />}
                {i === crumbs.length - 1 ? (
                  <span className="font-semibold text-foreground">{crumb.label}</span>
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
