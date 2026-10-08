"use client";
import { Link } from "@/lib/compat/router";
import { serviceGroups } from "@/components/Navbar";

const logo = "/assets/buckeye-logo-256.png";

const companyLinks = [
  { label: "About David", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Examples", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-seam bg-[hsl(var(--ohio-grey-dark))] pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:gap-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="" width={48} height={48} className="h-12 w-12" />
              <span className="font-display text-lg font-extrabold text-stock">Buckeye Biz Hub</span>
            </Link>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-fog">
              Fleet wraps, printing and branded gear for Central Ohio businesses. One person to call, start to finish.
            </p>
            <div className="mt-6 space-y-1.5 text-[0.95rem]">
              <a href="tel:+16145613358" className="block font-semibold text-stock hover:text-primary">
                (614) 561-3358
              </a>
              <a href="mailto:david@buckeyebizhub.com" className="block text-stock hover:text-primary">
                david@buckeyebizhub.com
              </a>
              <p className="text-fog">Columbus, Ohio. We come to you.</p>
            </div>
          </div>

          {[serviceGroups[0], serviceGroups[1], serviceGroups[2]].map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-sm font-semibold text-fog">{group.title}</p>
              <ul className="space-y-2.5">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-[0.95rem] text-stock/85 hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mb-4 text-sm font-semibold text-fog">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-[0.95rem] text-stock/85 hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-4 mt-8 text-sm font-semibold text-fog">{serviceGroups[3].title}</p>
            <ul className="space-y-2.5">
              {serviceGroups[3].links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-[0.95rem] text-stock/85 hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-seam pt-6 text-sm text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Buckeye Biz Hub, LLC</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="https://www.facebook.com/BuckeyeBizHub/" target="_blank" rel="noopener noreferrer" className="hover:text-stock">
              Facebook
            </a>
            <Link to="/privacy-policy" className="hover:text-stock">
              Privacy policy
            </Link>
            <Link to="/sms-terms" className="hover:text-stock">
              SMS terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
