import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "paper" | "cream" | "ink" | "white";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  cream: "bg-cream text-ink",
  white: "bg-white text-ink",
  ink: "on-ink",
};

export function Section({
  tone = "paper",
  id,
  className,
  children,
  bordered,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section id={id} className={cn(toneClass[tone], bordered && "border-t border-border", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">{children}</div>
    </section>
  );
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow mb-4", className)}>{children}</p>;
}

/** Section heading with optional intro, two columns on desktop like the sister site. */
export function SectionHead({
  eyebrow,
  title,
  intro,
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  const H = as;
  return (
    <div className={cn("mb-10 grid gap-6 md:mb-14 md:grid-cols-[1.25fr_1fr] md:items-end md:gap-12", className)}>
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <H className="text-[clamp(2rem,4.2vw,3.25rem)]">{title}</H>
      </div>
      {intro && <div className="text-[1.0625rem] leading-relaxed text-muted-foreground md:pb-1.5">{intro}</div>}
    </div>
  );
}

type BtnVariant = "primary" | "ink" | "outline" | "light" | "ghost-light";

const btnClass: Record<BtnVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-deep",
  ink: "bg-ink text-paper hover:bg-ink-2",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-white",
  light: "bg-white text-ink hover:bg-paper",
  "ghost-light": "border border-white/35 text-white hover:border-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  className?: string;
  external?: boolean;
}) {
  const cls = cn(
    "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-6 py-3 text-center text-[0.975rem] font-semibold transition-colors",
    btnClass[variant],
    className,
  );
  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("sms:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Splits copy on blank lines into paragraphs. */
export function Paragraphs({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} className={cn("mb-4 last:mb-0", className)}>
            {p}
          </p>
        ))}
    </>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const PHONE_DISPLAY = "(614) 561-3358";
export const PHONE_HREF = "tel:+16145613358";
export const EMAIL = "david@buckeyebizhub.com";
