"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

const logo = "/assets/buckeye-logo-256.png";

export type NavGroup = { title: string; links: { label: string; href: string }[] };

const mainLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar({ groups }: { groups: NavGroup[] }) {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const open = () => {
    clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setMenuOpen(false), 120);
  };

  const productHrefs = groups.flatMap((g) => g.links.map((l) => l.href));
  const onProduct = productHrefs.includes(pathname) || pathname === "/services";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || mobileOpen ? "border-border bg-paper/95 backdrop-blur" : "border-transparent bg-paper"
      }`}
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Buckeye Biz Hub home">
          <img src={logo} alt="" width={40} height={40} className="h-10 w-10" />
          <span className="font-display text-[1.35rem] leading-none text-ink">Buckeye Biz Hub</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <div className="relative" onMouseEnter={open} onMouseLeave={close}>
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors hover:text-ink ${
                onProduct ? "text-ink" : "text-body"
              }`}
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={() => setMenuOpen((v) => !v)}
            >
              Products
              <ChevronDown className={`h-4 w-4 transition-transform ${menuOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {menuOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[min(92vw,1040px)] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-5 gap-6 rounded-xl border border-border bg-white p-6 shadow-[0_24px_60px_-30px_hsl(var(--ink)/0.45)]">
                  {groups.map((g) => (
                    <div key={g.title}>
                      <p className="eyebrow mb-3 text-[0.68rem]">{g.title}</p>
                      <ul className="space-y-1.5">
                        {g.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              className={`block text-[0.92rem] leading-snug hover:text-brand ${
                                pathname === l.href ? "font-semibold text-brand" : "text-ink"
                              }`}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                    <span className="text-muted-foreground">Not sure what you need? Call and describe the job.</span>
                    <Link href="/services" className="font-semibold text-ink hover:text-brand">
                      See every product
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors hover:text-ink ${
                pathname.startsWith(l.href) ? "text-ink" : "text-body"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+16145613358" className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-ink hover:text-brand">
            <Phone className="h-4 w-4" aria-hidden />
            (614) 561-3358
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-ink px-4 py-2.5 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-brand"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-border bg-paper px-4 pb-28 pt-4 lg:hidden">
          {groups.map((g) => (
            <div key={g.title} className="border-b border-border py-4">
              <p className="eyebrow mb-2 text-[0.68rem]">{g.title}</p>
              <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-1.5 text-[1.0625rem] text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="py-4">
            {[{ label: "All products", href: "/services" }, ...mainLinks, { label: "Contact", href: "/contact" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-2 font-display text-[1.5rem] text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
