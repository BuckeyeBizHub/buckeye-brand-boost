import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import { usePageSEO } from "@/hooks/usePageTitle";
import { SITE_URL } from "@/lib/structured-data";

export interface SimpleServicePageProps {
  /** Service name shown in H1 ("[Service] in Columbus, Ohio"). */
  service: string;
  /** Browser tab title (without site name suffix). */
  metaTitle: string;
  /** Meta description. */
  metaDescription: string;
  /** Path beginning with "/" (used for canonical + JSON-LD). */
  slug: string;
  /** ~250 words; will render as paragraphs (split on blank lines). */
  description: string;
  /** Exactly 3 image URLs. */
  gallery: { src: string; alt: string }[];
  /** "Starting from" price string, e.g. "$199". */
  startingFrom: string;
  /** Short qualifier for pricing callout, e.g. "for a single-vehicle wrap". */
  pricingNote?: string;
  /** 4-5 short benefits. */
  benefits: string[];
}

const SimpleServicePage = ({
  service,
  metaTitle,
  metaDescription,
  slug,
  description,
  gallery,
  startingFrom,
  pricingNote,
  benefits,
}: SimpleServicePageProps) => {
  usePageSEO({ title: metaTitle, description: metaDescription });

  const url = `${SITE_URL}${slug}`;
  const paragraphs = description
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service} in Columbus, Ohio`,
    description: metaDescription,
    url,
    areaServed: { "@type": "City", name: "Columbus", addressRegion: "OH" },
    provider: {
      "@type": "LocalBusiness",
      name: "Buckeye Biz Hub",
      url: SITE_URL,
      telephone: "+16145613358",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1193 Virginia Ave",
        addressLocality: "Columbus",
        addressRegion: "OH",
        postalCode: "43212",
        addressCountry: "US",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: startingFrom.replace(/[^0-9.]/g, "") || undefined,
      url: `${SITE_URL}/contact`,
    },
  };

  return (
    <article className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with H1 */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-ohio-navy via-ohio-navy/95 to-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="container relative max-w-5xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/10 px-5 py-2 rounded-full border border-primary/30"
          >
            Buckeye Biz Hub Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.95] mb-6"
          >
            {service} in <span className="text-primary">Columbus, Ohio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/75 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            {metaDescription}
          </motion.p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-6">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-foreground/80 text-lg leading-relaxed mb-5">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Gallery (3 images) */}
      <section className="pb-16 lg:pb-20">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground text-center mb-10">
            Real Work for Real Columbus Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gallery.slice(0, 3).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl border border-border shadow-md aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + Benefits */}
      <section className="pb-16 lg:pb-24">
        <div className="container max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Starting From */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-ohio-red-light rounded-3xl p-8 md:p-10 text-primary-foreground shadow-xl flex flex-col justify-center"
          >
            <Tag className="w-8 h-8 mb-4 opacity-80" />
            <p className="text-sm font-black uppercase tracking-[0.25em] opacity-80 mb-2">
              Starting From
            </p>
            <p className="font-display text-5xl md:text-6xl font-black mb-2">{startingFrom}</p>
            {pricingNote && (
              <p className="text-base font-semibold opacity-90 mb-6">{pricingNote}</p>
            )}
            <p className="text-sm opacity-80 leading-relaxed">
              True wholesale cost + a transparent management fee. No setup fees on most orders, no hidden surprises.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-border rounded-3xl p-8 md:p-10 shadow-md"
          >
            <h3 className="font-display text-2xl font-black text-foreground mb-6">Key Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80 font-medium leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="container max-w-3xl mx-auto px-6 mt-12 text-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg px-12 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_85%_40%/0.4)] uppercase tracking-wider group"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="mt-4 text-sm font-semibold text-muted-foreground">
            Prefer to call?{" "}
            <a href="tel:+16145613358" className="text-primary font-black hover:underline">
              <Phone className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
              (614) 561-3358
            </a>
          </p>
        </div>
      </section>

      <RelatedServices />
      <Footer />
    </article>
  );
};

export default SimpleServicePage;
