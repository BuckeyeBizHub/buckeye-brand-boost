import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BackToTop from "@/components/BackToTop";
import MobileCTABar from "@/components/MobileCTABar";

interface PageLayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
}

const PageLayout = ({ children, showBreadcrumbs = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {showBreadcrumbs && <Breadcrumbs />}
      {children}
      <Footer />
      <BackToTop />
      <MobileCTABar />
    </div>
  );
};

export default PageLayout;
