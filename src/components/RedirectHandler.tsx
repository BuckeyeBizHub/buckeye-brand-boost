import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getRedirect } from "@/lib/error-tracking";

/**
 * Client-side redirect handler.
 * Checks the redirect map on every navigation and redirects if a match is found.
 * Place this inside <BrowserRouter> alongside <ScrollToTop>.
 */
const RedirectHandler = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = getRedirect(pathname);
    if (redirect) {
      // Use replace so the old URL doesn't stay in browser history
      navigate(redirect.to, { replace: true });
    }
  }, [pathname, navigate]);

  return null;
};

export default RedirectHandler;
