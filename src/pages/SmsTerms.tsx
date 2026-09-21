import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";

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
    content: [
      "Message and data rates may apply, according to your mobile carrier plan.",
    ],
  },
  {
    title: "Opt out and help",
    content: [
      <>
        Text STOP at any time to stop receiving messages. You will receive one final
        message confirming you have been unsubscribed. Text HELP for help, or contact
        us at{" "}
        <a href="mailto:david@buckeyebizhub.com" className="text-primary font-bold hover:underline">
          david@buckeyebizhub.com
        </a>{" "}
        or{" "}
        <a href="tel:+16145613358" className="text-primary font-bold hover:underline">
          (614) 561-3358
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
        We do not sell, rent, or share your mobile phone number or your text
        messaging opt-in consent with third parties for their marketing purposes.
        Your information is otherwise handled according to our{" "}
        <Link to="/privacy-policy" className="text-primary font-bold hover:underline">
          Privacy Policy
        </Link>
        .
      </>,
    ],
  },
];

const SmsTerms = () => {
  usePageSEO({
    title: "SMS Terms & Conditions",
    description:
      "Terms for the Buckeye Biz Hub Prize Day text program: message frequency, rates, STOP and HELP instructions, and privacy.",
    canonical: "https://www.buckeyebizhub.com/sms-terms",
  });

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
            <MessageSquare className="w-4 h-4" /> Prize Day Text Program <MessageSquare className="w-4 h-4" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.88] mb-6"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.25), 0 4px 20px rgba(0,0,0,0.8)' }}>
            SMS Terms <span className="text-primary text-glow-red">&amp; Conditions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-primary-foreground/40 font-bold text-sm uppercase tracking-[0.2em]">
            Last updated: September 21, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
        <div className="container relative max-w-4xl">
          <p className="text-muted-foreground leading-[1.85] text-[0.95rem] mb-12">
            Buckeye Biz Hub operates the "My Family. Your Lawyer." desk calendar Prize Day
            text program (the "Program"). By opting in, you agree to these terms.
          </p>
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

export default SmsTerms;
