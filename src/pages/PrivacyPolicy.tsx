import { motion } from "framer-motion";
import { Sparkles, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you voluntarily provide when you contact us, request a quote, place an order, or subscribe to our communications. This may include your name, email address, phone number, business name, mailing address, and project details.",
      "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This data is collected through cookies and similar tracking technologies.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to respond to your inquiries and quote requests, process and fulfill your orders for printing, promotional products, and vehicle branding services, communicate with you about your projects and orders, send you marketing communications (with your consent), improve our website and services, and comply with legal obligations.",
      "We do not sell your personal information to third parties. Your data is used solely to provide and improve our services to Ohio businesses.",
    ],
  },
  {
    title: "Sharing of Information",
    content: [
      "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you — including payment processors, shipping partners, and print fulfillment providers such as NextDayFlyers.com. These parties are obligated to keep your information confidential.",
      "We may also disclose your information when required by law, to enforce our site policies, or to protect our or others' rights, property, or safety.",
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
    title: "Data Security",
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
      "Email: david@buckeyebizhub.com",
      "Buckeye Biz Hub — Proudly serving Columbus, Ohio and businesses across the state.",
    ],
  },
];

const PrivacyPolicy = () => (
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
          Last Updated: March 28, 2026
        </motion.p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 lg:py-28 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="container relative max-w-4xl">
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

export default PrivacyPolicy;
