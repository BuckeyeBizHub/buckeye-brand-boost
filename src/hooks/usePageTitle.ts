import { useEffect } from "react";

const SITE_NAME = "Buckeye Biz Hub";

export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} | ${SITE_NAME}`
      : "Buckeye Biz Hub - Ohio Business Branding Partner | Printing, Promos & Vehicle Wraps";
  }, [pageTitle]);
}
