import Link from "next/link";
import type { ReactNode } from "react";
import { Crumbs } from "@/components/site/blocks";
import { Container, EMAIL, Eyebrow, PHONE_DISPLAY, PHONE_HREF, Section } from "@/components/site/ui";

const linkClass = "font-semibold text-brand underline-offset-4 hover:underline";

const sections: { title: string; content: ReactNode[] }[] = [
  {
    title: "Program description",
    content: [
      'Recipients of the calendar may text a photo of the day\'s page on designated "Prize Day" dates to be entered for a small prize, or opt in at our registration page. We reply to confirm entry and to notify prize recipients. No purchase is necessary, and opting in is not required to receive or use the calendar.',
    ],
  },
  {
    title: "Message frequency",
    content: [
      "Message frequency varies. You will generally receive messages only in response to a text you send us, plus occasional prize and program updates.",
    ],
  },
  {
    title: "Cost",
    content: ["Message and data rates may apply, according to your mobile carrier plan."],
  },
  {
    title: "Opt out and help",
    content: [
      <>
        Text STOP at any time to stop receiving messages. You will receive one final message confirming you have been
        unsubscribed. Text HELP for help, or contact us at{" "}
        <a href={`mailto:${EMAIL}`} className={linkClass}>
          {EMAIL}
        </a>{" "}
        or{" "}
        <a href={PHONE_HREF} className={linkClass}>
          {PHONE_DISPLAY}
        </a>
        .
      </>,
    ],
  },
  {
    title: "Carriers",
    content: ["Carriers are not liable for delayed or undelivered messages."],
  },
  {
    title: "Privacy",
    content: [
      <>
        We do not sell, rent, or share your mobile phone number or your text messaging opt-in consent with third
        parties for their marketing purposes. Your information is otherwise handled according to our{" "}
        <Link href="/privacy-policy" className={linkClass}>
          Privacy Policy
        </Link>
        .
      </>,
    ],
  },
];

export default function SmsTerms() {
  return (
    <>
      <section className="bg-paper">
        <Container className="pb-12 pt-8 md:pb-16 md:pt-12">
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "SMS terms" }]} />
          <Eyebrow>Prize Day text program</Eyebrow>
          <h1 className="text-[clamp(2.5rem,5.6vw,4.5rem)]">SMS terms and conditions</h1>
          <p className="mt-6 text-sm text-muted-foreground">Last updated: September 21, 2026</p>
        </Container>
      </section>

      <Section tone="white" bordered>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-body">
            Buckeye Biz Hub operates the &quot;My Family. Your Lawyer.&quot; desk calendar Prize Day text program (the
            &quot;Program&quot;). By opting in, you agree to these terms.
          </p>
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
