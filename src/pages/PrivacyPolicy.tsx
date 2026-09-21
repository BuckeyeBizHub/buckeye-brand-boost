import { motion } from "framer-motion";
import { Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";

const intro =
  'Buckeye Biz Hub ("we," "us") respects your privacy. This policy explains what we collect and how we use it, including for our SMS text programs.';

const sections: { title: string; content: ReactNode[] }[] = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you voluntarily provide when you contact us, request a quote, place an order, or subscribe to our communications. This may include your name, email address, phone number, business name, mailing address, and project details.",
      "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This data is collected through cookies and similar tracking technologies.",
      "When you register for or participate in our calendar and Prize Day text program, we may also collect your name, firm or business, email address, mailing address, mobile phone number, and any photo or message you send us.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to respond to your inquiries and quote requests, process and fulfill your orders for printing, promotional products, and vehicle branding services, communicate with you about your projects and orders, send you marketing communications (with your consent), improve our website and services, and comply with legal obligations.",
      "We do not sell your personal information to third parties. Your data is used solely to provide and improve our services to Ohio businesses.",
      "For our calendar and Prize Day text program, we use your information to operate the program: to confirm entries, run prize drawings, deliver prizes, and communicate with you about the program. Photos you text in may be used in our marketing or on social media only where you have agreed to that use.",
    ],
  },
  {
    title: "Sharing of Information",
    content: [
      "We do not sell your information.",
      <strong key="mobile" className="text-card-foreground font-black">
        No mobile information (including your phone number and SMS opt-in) will be shared with or sold to third parties or affiliates for their marketing or promotional purposes.
      </strong>,
      "We share information only with service providers who help us operate our business and programs — such as payment processors, shipping and print fulfillment partners, and our text-messaging and mailing vendors — and only as needed to provide those services. These parties are obligated to keep your information confidential. We may also disclose information when required by law, to enforce our site policies, or to protect our or others' rights, property, or safety.",
    ],
  },
  {
    title: "Opting Out of Text Messages",
    content: [
      <>
        Text STOP to any message to stop receiving texts. Text HELP for help. You may
        also contact us at{" "}
        <a href="mailto:david@buckeyebizhub.com" className="text-primary font-bold hover:underline">
          david@buckeyebizhub.com
        </a>{" "}
        or{" "}
        <a href="tel:+16145613358" className="text-primary font-bold hover:underline">
          (614) 561-3358
        </a>
        . See our{" "}
        <Link to="/sms-terms" className="text-primary font-bold hover:underline">
          SMS Terms &amp; Conditions
        </Link>{" "}
        for full program terms.
      </>,
    ],
  },
  {
    title: "Cookies & Tracking Technologies",
    content: [
      "Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. Cookies are small text files stored on your device that help us recognize your browser and capture certain information.",
      "You can choose to disable cookies through your browser settings. However, disabling cookies may affect the functionality of certain features on our website. We use third-party analytics services, including SearchAtlas, to help us understand website usage patterns.",
    ],
  },
  {
    title: "Data Security & Protection",
    content: [
      "We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.",
    ],
  },
  {
    title: "Your Rights & Choices",
    content: [
      "You may opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails or by contacting us directly. You may also request access to, correction of, or deletion of your personal information by contacting us at the email address below.",
      "If you are a resident of Ohio or another state with applicable privacy laws, you may have additional rights regarding your personal data. Please contact us to exercise these rights.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post the updated policy on this page with a revised \"Last Updated\" date. We encourage you to review this page periodically to stay informed about how we protect your information.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
      <strong key="name" className="text-card-foreground font-black">Buckeye Biz Hub</strong>,
      <>
        Email:{" "}
        <a href="mailto:david@buckeyebizhub.com" className="text-primary font-bold hover:underline">
          david@buckeyebizhub.com
        </a>
      </>,
      <>
        Phone:{" "}
        <a href="tel:+16145613358" className="text-primary font-bold hover:underline">
          (614) 561-3358
        </a>
      </>,
    ],
  },
];

const PrivacyPolicy = () => {
  usePageSEO({ title: "Privacy Policy", description: "Buckeye Biz Hub privacy policy. Learn how we collect, use, and protect your personal information when you use our printing and branding services." });

  return (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-ohio-grey-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/[0.1] blur-[200px]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_hsl(0_80%_42%/0.4)]" />

      <div className="container relative text-center">
        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-8 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35">
          <Shield className="w-4 h-4" /> Your Privacy Matters <Shield className="w-4 h-4" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.88] mb-6"
          style={{ textShadow: '0 0 60px rgba(255,255,255,0.25), 0 4px 20px rgba(0,0,0,0.8)' }}>
          Privacy <span className="text-primary text-glow-red">Policy</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-primary-foreground/40 font-bold text-sm uppercase tracking-[0.2em]">
          Last Updated: September 21, 2026
        </motion.p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 lg:py-28 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="container relative max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground leading-[1.85] text-base mb-12"
        >
          {intro}
        </motion.p>
        <div className="space-y-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="bg-card border-2 border-border rounded-2xl p-8 lg:p-10 hover:border-primary/20 transition-colors duration-300"
            >
              <h2 className="font-display text-2xl md:text-3xl font-black text-card-foreground mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-black text-primary">{i + 1}</span>
                {s.title}
              </h2>
              <div className="space-y-4">
                {s.content.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-[1.85] text-[0.95rem]">{p}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

};

export default PrivacyPolicy;
