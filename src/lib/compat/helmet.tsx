// React 19 hoists <title>, <meta> and <link> into <head> during server
// rendering, so the old react-helmet-async wrapper can just pass children
// through. Each page now ships its own title and canonical in the HTML.
import type { ReactNode } from "react";

export const Helmet = ({ children }: { children?: ReactNode }) => <>{children}</>;
export const HelmetProvider = ({ children }: { children?: ReactNode }) => <>{children}</>;
