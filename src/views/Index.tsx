import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Link } from "@/lib/compat/router";
import type { BlogPostSummary } from "@/lib/blog-utils";

const img = {
  fleet: "/assets/branded-vehicle-fleet.jpg",
  boxTruck: "/assets/lawncare-truck-wrap.jpg",
  doorHanger: "/assets/door-hangers-hero.jpg",
  gear: "/assets/product-collage-hero.jpg",
  david: "/assets/david-stein-headshot.jpg",
};

// The four claims David confirmed. Nothing else gets stated as fact.
const promises = [
  { term: "Free quotes", detail: "within 24 hours" },
  { term: "Wholesale pricing", detail: "through 4,300+ vetted suppliers" },
  { term: "100% guarantee", detail: "not happy, we make it right" },
  { term: "5-star", detail: "rating on Google" },
];

const steps = [
  {
    title: "Tell me what you need.",
    body: "Call, text or send the quote form. Logo files, a vehicle list, quantities, a deadline. Whatever you have is enough to start.",
  },
  {
    title: "I match it to the right shop.",
    body: "I work with a short list of trusted wrap shops, independent installers and print vendors. Each job goes to the one that does that work best.",
  },
  {
    title: "You get a clear quote in 24 hours.",
    body: "Wholesale rates, one price, no surprises. Say yes and I schedule it.",
  },
  {
    title: "I check it before you see it.",
    body: "Proofs, install dates, delivery. I stay on it until it's done right.",
  },
];

const vehicleLinks = [
  { label: "Fleet wraps", href: "/fleet-wraps", note: "Matching graphics across every truck, van and trailer." },
  { label: "Vehicle wraps", href: "/vehicle-wraps", note: "Full and partial wraps for work vehicles." },
  { label: "Decals and lettering", href: "/vehicle-decals", note: "Door logos, phone numbers, DOT numbers." },
];

const printLinks = [
  { label: "Business cards", href: "/business-cards-printing", note: "Hand one out at every estimate." },
  { label: "Door hangers", href: "/door-hangers", note: "Work the street after a job." },
  { label: "Yard signs", href: "/yard-signs-and-signage", note: "Put your name in front of the job site." },
  { label: "Postcards and direct mail", href: "/postcards", note: "Reach every house on the route." },
  { label: "Brochures and folders", href: "/business-printing", note: "Leave something behind after the pitch." },
  { label: "Banners and flags", href: "/banners-and-flags", note: "Grand openings, events, the shop front." },
  { label: "Large format", href: "/large-format-printing", note: "Wall graphics, window graphics, backdrops." },
  { label: "Decals and stickers", href: "/decals-and-stickers", note: "Hard hats, toolboxes, windows, products." },
];

const gearLinks = [
  { label: "Embroidered apparel", href: "/embroidered-apparel" },
  { label: "Promotional products", href: "/promotional-products" },
  { label: "Trade show displays", href: "/trade-show-displays" },
  { label: "Full rebrand kits", href: "/full-rebrand-kits" },
];

const industries = [
  { label: "Roofing contractors", href: "/roofing", note: "Truck wraps, yard signs, door hangers and crew shirts for storm season." },
  { label: "Construction and GCs", href: "/construction", note: "Jobsite banners, vehicle graphics and workwear that holds up." },
  { label: "Lawn care and landscaping", href: "/lawn-care-landscaping", note: "Trailer wraps, crew shirts and door hangers for the spring rush." },
  { label: "Dental practices", href: "/dental", note: "Scrubs, referral gifts, office signage and printed materials." },
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

/** A ruled list row: name on the left, what it's for on the right. */
const IndexRow = ({ label, href, note }: { label: string; href: string; note: string }) => (
  <li className="border-t border-border">
    <Link
      to={href}
      className="group grid grid-cols-1 gap-1 py-4 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6"
    >
      <span className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
        {label}
      </span>
      <span className="text-[0.975rem] text-muted-foreground">{note}</span>
    </Link>
  </li>
);

const Index = ({ latestPosts = [] }: { latestPosts?: BlogPostSummary[] }) => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero: the claim, the phone, the picture. */}
    <section className="relative overflow-hidden border-b border-seam">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-14 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-36">
        <div>
          <p className="mb-6 text-[0.95rem] font-medium text-fog">Columbus and Central Ohio</p>
          <h1 className="font-display text-[clamp(2.4rem,4.9vw,4.6rem)] font-extrabold text-stock">
            <span className="block whitespace-nowrap">Wrap the fleet.</span>
            <span className="block whitespace-nowrap">Print the rest.</span>
            <span className="block whitespace-nowrap">One call.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-stock/80 sm:text-xl">
            Buckeye Biz Hub handles fleet wraps, printing and branded gear for Central Ohio businesses. You tell David what
            you need. He finds the right shop, gets you wholesale pricing and stays on it until it&apos;s done right.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-ohio-red-light"
            >
              Get a free quote
            </Link>
            <a
              href="tel:+16145613358"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-seam px-7 py-4 text-base font-semibold text-stock transition-colors hover:border-fog"
            >
              <Phone className="h-4 w-4" aria-hidden />
              (614) 561-3358
            </a>
          </div>
        </div>

        <figure className="mx-5 sm:mx-6 lg:mx-0">
          <div className="crop">
            <img
              src={img.fleet}
              alt="Three white work vans with matching Buckeye Biz Hub logos on the doors"
              width={1168}
              height={784}
              fetchPriority="high"
              className="block aspect-[3/2] w-full rounded-sm object-cover"
            />
          </div>
          <figcaption className="mt-8 text-sm text-fog">One logo. Every van. Matching.</figcaption>
        </figure>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-px border-t border-seam bg-seam lg:grid-cols-4">
          {promises.map((p) => (
            <div key={p.term} className="bg-background py-6 pr-4 [&:nth-child(even)]:pl-5 lg:[&:not(:first-child)]:pl-6">
              <dt className="font-display text-lg font-bold text-stock">{p.term}</dt>
              <dd className="mt-1 text-[0.95rem] text-fog">{p.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* How it works: a real sequence, so it gets numbers. */}
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-stock">
            You make one call. I handle the rest.
          </h2>
          <p className="mt-5 max-w-md text-lg text-fog">
            No showroom, no runaround. I come to you, on site or by phone, and run the job from quote to install.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-seam pt-5">
              <span className="font-display text-sm font-bold text-primary" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-stock">{s.title}</h3>
              <p className="mt-2 text-[0.975rem] leading-relaxed text-fog">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Vehicles: asphalt. */}
    <section className="border-t border-seam bg-graphite/60">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
        <figure className="order-last mx-5 sm:mx-6 lg:order-first lg:mx-0">
          <div className="crop">
            <img
              src={img.boxTruck}
              alt="Box truck wrapped with a lawn and tree company's graphics"
              width={1200}
              height={630}
              loading="lazy"
              className="block aspect-[1200/630] w-full rounded-sm object-cover"
            />
          </div>
          <figcaption className="mt-8 text-sm text-fog">Example of a full box truck wrap.</figcaption>
        </figure>
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-stock">
            Your trucks are the best ad you already pay for.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-stock/80">
            <p>
              They&apos;re out all day. Parked at job sites, stuck in traffic, sitting in driveways on every street you
              work. A clean, matching wrap turns each one into a sign people remember.
            </p>
            <p>
              We focus on commercial fleets: work trucks, cargo vans, box trucks and trailers. One vehicle or twenty,
              they come out matching.
            </p>
          </div>
          <ul className="mt-8">
            {vehicleLinks.map((l) => (
              <IndexRow key={l.href} {...l} />
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-ohio-red-light"
          >
            Quote my fleet
          </Link>
        </div>
      </div>
    </section>

    {/* Print: paper stock. */}
    <section className="paper">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold">
              The printing that keeps the phone ringing.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Cards, door hangers, yard signs, postcards. The stuff you reorder all year. Send your file or let us design
              it. You pay wholesale.
            </p>
            <figure className="mx-5 mt-14 sm:mx-6 lg:mx-0">
          <div className="crop">
            <img
                  src={img.doorHanger}
                  alt="Printed door hanger on a front door handle"
                  width={1920}
                  height={800}
                  loading="lazy"
                  className="block aspect-[12/5] w-full rounded-sm object-cover"
                />
          </div>
        </figure>
          </div>
          <ul className="self-start border-b border-border">
            {printLinks.map((l) => (
              <IndexRow key={l.href} {...l} />
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Branded gear. */}
    <section className="border-b border-seam">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8 lg:py-28">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-stock">
            Shirts, hats and giveaways people keep.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stock/80">
            Crew shirts that survive the wash. Hats your customers actually wear. Trade show booths that pull people in.
            If it can carry your logo, we can source it.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {gearLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="inline-block rounded-md border border-seam px-4 py-2.5 text-[0.975rem] font-medium text-stock transition-colors hover:border-primary hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <figure className="mx-5 sm:mx-6 lg:mx-0">
          <div className="crop">
            <img
              src={img.gear}
              alt="Red polos, hats, t-shirts and business cards with the Buckeye Biz Hub logo"
              width={1168}
              height={784}
              loading="lazy"
              className="block aspect-[3/2] w-full rounded-sm object-cover"
            />
          </div>
        </figure>
      </div>
    </section>

    {/* Industries. */}
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-stock">
            We know your busy season.
          </h2>
          <p className="mt-5 max-w-md text-lg text-fog">
            Most of our work is for the trades and for practices. Here&apos;s what each one usually needs.
          </p>
          <Link to="/industries" className="mt-6 inline-block font-semibold text-stock underline decoration-seam underline-offset-4 hover:text-primary">
            All industries
          </Link>
        </div>
        <ul className="border-b border-seam">
          {industries.map((l) => (
            <IndexRow key={l.href} {...l} />
          ))}
        </ul>
      </div>
    </section>

    {/* David. */}
    <section className="border-y border-seam bg-graphite/60">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8 lg:py-28">
        <img
          src={img.david}
          alt="David Stein"
          width={1920}
          height={1081}
          loading="lazy"
          className="block aspect-[4/3] w-full rounded-sm object-cover object-[60%_center]"
        />
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-stock">You deal with me.</h2>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-stock/80">
            <p>
              I&apos;m David Stein. I co-founded Buckeye Biz Hub and I run it day to day. Before this I co-founded
              BeerTubes and grew it from $79K in year one to $4.5M before we sold it. Then I built a brewery and
              restaurant group in Mount Vernon and Newark to more than 100 employees.
            </p>
            <p>
              I&apos;ve bought a lot of printing and branding with my own money. I know what it costs you when it shows
              up late or looks cheap. I run every job the way I&apos;d want mine run.
            </p>
          </div>
          <Link to="/about" className="mt-8 inline-block font-semibold text-stock underline decoration-seam underline-offset-4 hover:text-primary">
            Read my story
          </Link>
        </div>
      </div>
    </section>

    {/* Blog. */}
    {latestPosts.length > 0 && (
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-stock">From the blog</h2>
          <Link to="/blog" className="shrink-0 font-semibold text-stock underline decoration-seam underline-offset-4 hover:text-primary">
            All posts
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {latestPosts.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="group block">
                {post.featuredImage && (
                  <img
                    src={post.featuredImage}
                    alt={post.featuredAlt || ""}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="block aspect-[3/2] w-full rounded-sm object-cover"
                  />
                )}
                <p className="mt-4 text-sm text-fog">{formatDate(post.date)}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-stock transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )}

    <CTASection />
    <Footer />
  </div>
);

export default Index;
