import Link from "next/link";
import { GROUP_LABEL, GROUP_ORDER, INDUSTRIES, productsInGroup } from "@/content/catalog";

const logo = "/assets/buckeye-logo-256.png";

const company = [
  { label: "About David", href: "/about" },
  { label: "All products", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Server component: the full link list lives in the HTML for search engines,
// not in the browser bundle.
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-ink pb-24 lg:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 border-b border-border pb-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="" width={44} height={44} className="h-11 w-11" />
              <span className="font-display text-[1.6rem] leading-none">Buckeye Biz Hub</span>
            </Link>
            <p className="mt-5 max-w-md text-muted-foreground">
              Labels, decals, lettering, signs, printing and fleet wraps for Central Ohio businesses. One person to call,
              start to finish.
            </p>
          </div>
          <div className="space-y-1.5 md:text-right">
            <a href="tel:+16145613358" className="block font-display text-[1.75rem] leading-tight hover:text-brand-bright">
              (614) 561-3358
            </a>
            <a href="mailto:david@buckeyebizhub.com" className="block hover:text-brand-bright">
              david@buckeyebizhub.com
            </a>
            <p className="text-muted-foreground">Columbus, Ohio. I come to you.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-12 sm:grid-cols-3 lg:grid-cols-6">
          {GROUP_ORDER.filter((g) => g !== "more").map((g) => (
            <div key={g}>
              <p className="eyebrow mb-4 text-[0.68rem]">{GROUP_LABEL[g]}</p>
              <ul className="space-y-2">
                {productsInGroup(g).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}`} className="text-[0.92rem] text-paper/85 hover:text-paper">
                      {p.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="eyebrow mb-4 text-[0.68rem]">Industries</p>
            <ul className="space-y-2">
              {INDUSTRIES.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="text-[0.92rem] text-paper/85 hover:text-paper">
                    {p.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mb-4 mt-8 text-[0.68rem]">Company</p>
            <ul className="space-y-2">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[0.92rem] text-paper/85 hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Buckeye Biz Hub, LLC</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Also from David:</span>
            {productsInGroup("more").map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="hover:text-paper">
                {p.navLabel}
              </Link>
            ))}
            <a href="https://www.facebook.com/BuckeyeBizHub/" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              Facebook
            </a>
            <Link href="/privacy-policy" className="hover:text-paper">
              Privacy
            </Link>
            <Link href="/sms-terms" className="hover:text-paper">
              SMS terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
