"use client";
// Small stand-ins for the react-router-dom pieces the Lovable pages used,
// so the page components could move to Next.js with their markup unchanged.
import NextLink from "next/link";
import {
  useParams as useNextParams,
  usePathname,
  useRouter,
} from "next/navigation";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type To = string | { pathname?: string; search?: string; hash?: string };

function toHref(to: To): string {
  if (typeof to === "string") return to;
  return `${to.pathname ?? ""}${to.search ?? ""}${to.hash ?? ""}`;
}

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: To;
  replace?: boolean;
  state?: unknown;
  children?: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, replace, state: _state, ...rest }, ref) => (
    <NextLink ref={ref} href={toHref(to)} replace={replace} {...rest} />
  ),
);
Link.displayName = "Link";

export interface NavLinkProps extends Omit<LinkProps, "className"> {
  className?: string | ((s: { isActive: boolean; isPending: boolean }) => string);
  end?: boolean;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, end, to, ...rest }, ref) => {
    const pathname = usePathname() ?? "/";
    const href = toHref(to);
    const isActive = end ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
    const cls = typeof className === "function" ? className({ isActive, isPending: false }) : className;
    return <Link ref={ref} to={to} className={cls} {...rest} />;
  },
);
NavLink.displayName = "NavLink";

// No search string: nothing on the site reads it, and useSearchParams would
// force every page out of static rendering.
export function useLocation() {
  const pathname = usePathname() ?? "/";
  return { pathname, search: "", hash: "", state: null, key: pathname };
}

export function useNavigate() {
  const router = useRouter();
  return (to: To | number, opts?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (to < 0) router.back();
      else router.forward();
      return;
    }
    if (opts?.replace) router.replace(toHref(to));
    else router.push(toHref(to));
  };
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string>>() {
  return (useNextParams() ?? {}) as unknown as T;
}
