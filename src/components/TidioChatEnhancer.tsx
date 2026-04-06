import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HIGHLIGHT_PATHS = ["/contact", "/services", "/business-cards", "/brochures-and-business-printing", "/promotional-products", "/branded-apparel-and-uniforms", "/yard-signs-and-signage", "/vehicle-wraps-and-fleet-branding", "/full-rebrand-kits", "/website-design", "/local-seo", "/banners-and-flags", "/decals"];

const TidioChatEnhancer = () => {
  const { pathname } = useLocation();
  const isHighlight = HIGHLIGHT_PATHS.includes(pathname);
  const isContact = pathname === "/contact";

  useEffect(() => {
    const win = window as any;

    const enhance = () => {
      if (!win.tidioChatApi) return;
      win.tidioChatApi.display(true);
      if (isContact) {
        win.tidioChatApi.open();
      }
    };

    if (win.tidioChatApi) {
      enhance();
    } else {
      document.addEventListener("tidioChat-ready", enhance);
    }

    // Add/remove body class for CSS targeting
    if (isHighlight) {
      document.body.classList.add("tidio-highlight");
    }
    if (isContact) {
      document.body.classList.add("tidio-contact");
    }

    return () => {
      document.removeEventListener("tidioChat-ready", enhance);
      document.body.classList.remove("tidio-highlight", "tidio-contact");
      if (isContact && win.tidioChatApi) {
        win.tidioChatApi.close();
      }
    };
  }, [pathname, isHighlight, isContact]);

  return null;
};

export default TidioChatEnhancer;
