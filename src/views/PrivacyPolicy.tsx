import Link from "next/link";
import type { ReactNode } from "react";
import { Crumbs } from "@/components/site/blocks";
import { Container, EMAIL, Eyebrow, PHONE_DISPLAY, PHONE_HREF, Section } from "@/components/site/ui";

const intro =
  'Buckeye Biz Hub ("we," "us") respects your privacy. This policy explains what we collect and how we use it, including for our SMS text programs.';

const linkClass = "font-semibold text-brand underline-offset-4 hover:underline";

const sections: { title: string; content: ReactNode[] }[] = [
  {
    title: "Information we collect",
    content: [
      "We collect information you voluntarily provide when you contact us, request a quote, place an order, or subscribe to our communications. This may include your name, email address, phone number, business name, mailing address, and project details.",
      "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This data is collected through cookies and similar tracking technologies.",
      "When you register for or participate in our calendar and Prize Day text program, we may also collect your name, firm or business, email address, mailing address, mobile phone number, and any photo or message you send us.",
    ],
  },
  {
    title: "How we use your information",
    content: [
      "We use the information we collect to respond to your inquiries and quote requests, process and fulfill your orders for printing, promotional products, and vehicle branding services, communicate with you about your projects and orders, send you marketing communications (with your consent), improve our website and services, and comply with legal obligations.",
      "We do not sell your personal information to third parties. Your data is used solely to provide and improve our services to Ohio businesses.",
      "For our calendar and Prize Day text program, we use your information to operate the program: to confirm entries, run prize drawings, deliver prizes, and communicate with you about the program. Photos you text in may be used in our marketing or on social media only where you have agreed to that use.",
    ],
  },
  {
    title: "Sharing of information",
    content: [
      "We do not sell your information.",
      <strong key="mobile" className="font-semibold text-ink">
        No mobile information (including your phone number and SMS opt-in) will be shared with or sold to third parties or
        affiliates for their marketing or promotional purposes.
      </strong>,
      "We share information only with service providers who help us operate our business and programs, such as payment processors, shipping and print fulfillment partners, and our text-messaging and mailing vendors, and only as needed to provide those services. These parties are obligated to keep your information confidential. We may also disclose information when required by law, to enforce our site policies, or to protect our or others' rights, property, or safety.",
    ],
  },
  {
    title: "Opting out of text messages",
    content: [
      <>
        Text STOP to any message to stop receiving texts. Text HELP for help. You may also contact us at{" "}
        <a href={`mailto:${EMAIL}`} className={linkClass}>
          {EMAIL}
        </a>{" "}
        or{" "}
        <a href={PHONE_HREF} className={linkClass}>
          {PHONE_DISPLAY}
        </a>
        . See our{" "}
        <Link href="/sms-terms" className={linkClass}>
          SMS Terms &amp; Conditions
        </Link>{" "}
        for full program terms.
      </>,
    ],
  },
  {
    title: "Cookies and tracking technologies",
    content: [
      "Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. Cookies are small text files stored on your device that help us recognize your browser and capture certain information.",
      "You can choose to disable cookies through your browser settings. However, disabling cookies may affect the functionality of certain features on our website. We use third-party analytics services, including SearchAtlas, to help us understand website usage patterns.",
    ],
  },
  {
    title: "Data security and protection",
    content: [
      "We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.",
    ],
  },
  {
    title: "Your rights and choices",
    content: [
      "You may opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails or by contacting us directly. You may also request access to, correction of, or deletion of your personal information by contacting us at the email address below.",
      "If you are a resident of Ohio or another state with applicable privacy laws, you may have additional rights regarding your personal data. Please contact us to exercise these rights.",
    ],
  },
  {
    title: "Changes to this policy",
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post the updated policy on this page with a revised "Last Updated" date. We encourage you to review this page periodically to stay informed about how we protect your information.',
    ],
  },
  {
    title: "Contact us",
    content: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
      <strong key="name" className="font-semibold text-ink">
        Buckeye Biz Hub
      </strong>,
      <>
        Email:{" "}
        <a href={`mailto:${EMAIL}`} className={linkClass}>
          {EMAIL}
        </a>
      </>,
      <>
        Phone:{" "}
        <a href={PHONE_HREF} className={linkClass}>
          {PHONE_DISPLAY}
        </a>
      </>,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-paper">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "Privacy policy" }]} />
          <Eyebrow>Your privacy</Eyebrow>
          <h1 className="text-[clamp(2.5rem,5.6vw,4.5rem)]">Privacy policy</h1>
          <p className="mt-6 text-sm text-muted-foreground">Last updated: September 21, 2026</p>
        </Container>
      </section>

      <Section tone="white" bordered>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-body">{intro}</p>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {sections.map((s, i) => (
              <div key={s.title} className="py-8">
                <h2 className="flex items-baseline gap-3 text-[clamp(1.6rem,3vw,2.1rem)]">
                  <span className="text-[0.85em] text-muted-foreground">{i + 1}.</span>
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.content.map((p, j) => (
                    <p key={j} className="leading-relaxed text-body">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
