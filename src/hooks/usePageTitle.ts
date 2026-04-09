import { useEffect } from "react";

const SITE_NAME = "Buckeye Biz Hub";

export function usePageTitle(pageTitle?: string, metaDescription?: string) {
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} | ${SITE_NAME}`
      : "Buckeye Biz Hub | Your Columbus Branding Concierge";

    if (metaDescription) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", metaDescription);
    }
  }, [pageTitle, metaDescription]);
}
