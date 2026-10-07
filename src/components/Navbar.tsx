"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "@/lib/compat/router";

const logo = "/assets/buckeye-logo-256.png";

type NavLinkItem = { label: string; href: string };
type Group = { title: string; links: NavLinkItem[] };

// Grouped by what people come here to buy. Vehicles first: that's the lead.
export const serviceGroups: Group[] = [
  {
    title: "Vehicles",
    links: [
      { label: "Fleet wraps", href: "/fleet-wraps" },
      { label: "Vehicle wraps", href: "/vehicle-wraps" },
      { label: "Vehicle decals and lettering", href: "/vehicle-decals" },
    ],
  },
  {
    title: "Print",
    links: [
      { label: "Business cards", href: "/business-cards-printing" },
      { label: "Brochures and business printing", href: "/business-printing" },
      { label: "Postcards and direct mail", href: "/postcards" },
      { label: "Door hangers", href: "/door-hangers" },
      { label: "Yard signs and signage", href: "/yard-signs-and-signage" },
      { label: "Banners and flags", href: "/banners-and-flags" },
      { label: "Large format", href: "/large-format-printing" },
      { label: "Decals and stickers", href: "/decals-and-stickers" },
    ],
  },
  {
    title: "Branded gear",
    links: [
      { label: "Promotional products", href: "/promotional-products" },
      { label: "Embroidered apparel", href: "/embroidered-apparel" },
      { label: "Trade show displays", href: "/trade-show-displays" },
      { label: "Full rebrand kits", href: "/full-rebrand-kits" },
    ],
  },
  {
    title: "Web and growth",
    links: [
      { label: "Website design", href: "/website-design" },
      { label: "Local SEO", href: "/local-seo" },
      { label: "Business consulting", href: "/business-consulting" },
    ],
  },
];

const mainLinks: NavLinkItem[] = [
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const allServiceHrefs = serviceGroups.flatMap((g) => g.links.map((l) => l.href));

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [servicesOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : !!pathname?.startsWith(href));
  const servicesActive = allServiceHrefs.some((h) => isActive(h)) || isActive("/services");

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServicesSoon = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  const linkClass = (active: boolean) =>
    `relative px-3 py-2 text-[0.95rem] font-medium transition-colors ${
      active
        ? "text-stock after:absolute after:left-3 after:right-3 after:-bottom-[13px] after:h-[2px] after:bg-primary"
        : "text-fog hover:text-stock"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || mobileOpen ? "border-seam bg-asphalt/95 backdrop-blur" : "border-transparent bg-asphalt/70 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded focus:bg-stock focus:px-3 focus:py-2 focus:text-asphalt"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Buckeye Biz Hub home">
          <img src={logo} alt="" width={44} height={44} className="h-10 w-10 lg:h-11 lg:w-11" />
          <span className="font-display text-[1.05rem] font-extrabold leading-none text-stock">Buckeye Biz Hub</span>
        </Link>

        <div className="hidden flex-1 items-center gap-1 lg:flex">
          <div ref={menuRef} className="relative" onMouseEnter={openServices} onMouseLeave={closeServicesSoon}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((v) => !v)}
              className={`${linkClass(servicesActive)} inline-flex items-center gap-1`}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {servicesOpen && (
              <div
                id="services-menu"
                className="absolute left-0 top-full mt-3 grid w-[min(860px,calc(100vw-4rem))] grid-cols-4 gap-8 rounded-lg border border-seam bg-graphite p-7 shadow-2xl shadow-black/40"
              >
                {serviceGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-3 text-sm font-semibold text-fog">{group.title}</p>
                    <ul className="space-y-2">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            to={l.href}
                            className={`block text-[0.95rem] leading-snug transition-colors ${
                              isActive(l.href) ? "text-primary" : "text-stock hover:text-primary"
                            }`}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-4 flex items-center justify-between border-t border-seam pt-4 text-sm text-fog">
                  <span>Don&apos;t see it? Ask. If it can carry your logo, we can source it.</span>
                  <Link to="/services" className="font-semibold text-stock hover:text-primary">
                    All services
                  </Link>
                </div>
              </div>
            )}
          </div>
          {mainLinks.map((l) => (
            <Link key={l.href} to={l.href} className={linkClass(isActive(l.href))}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <a href="tel:+16145613358" className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-stock hover:text-primary">
            <Phone className="h-4 w-4" aria-hidden />
            (614) 561-3358
          </a>
          <Link
            to="/contact"
            className="rounded-md bg-primary px-5 py-2.5 text-[0.95rem] font-semibold text-primary-foreground transition-colors hover:bg-ohio-red-light"
          >
            Get a quote
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <a
            href="tel:+16145613358"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-stock hover:bg-graphite"
            aria-label="Call (614) 561-3358"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-stock hover:bg-graphite"
          >
            {mobileOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-seam bg-asphalt px-4 pb-28 pt-2 sm:px-6 lg:hidden"
        >
          {serviceGroups.map((group) => (
            <div key={group.title} className="border-b border-seam py-4">
              <p className="mb-1 text-sm font-semibold text-fog">{group.title}</p>
              <ul className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className={`block py-2 text-base ${isActive(l.href) ? "text-primary" : "text-stock"}`}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="py-4">
            {[...mainLinks, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="block py-2.5 font-display text-xl font-bold text-stock">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
