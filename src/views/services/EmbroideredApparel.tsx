"use client";
import SimpleServicePage from "@/components/services/SimpleServicePage";
const g1 = "/assets/apparel-polos-golf.jpg";
const g2 = "/assets/custom-apparel-polos-hoodies.jpg";
const g3 = "/assets/apparel-jackets-outerwear.jpg";
const EmbroideredApparel = () => (
  <SimpleServicePage
    service="Embroidered Apparel"
    metaTitle="Embroidered Apparel in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Custom embroidered apparel in Columbus, Ohio. Polos, hats, jackets and uniforms with crisp embroidery that lasts, from a trusted Central Ohio team."
    slug="/embroidered-apparel"
    description={`Embroidered apparel is the easiest way to make a Columbus, Ohio team look sharp and like one crew. A clean logo on a polo, jacket or hat tells customers you take pride in your work before anyone says a word. Buckeye Biz Hub handles custom embroidered apparel for roofing crews, dental and medical offices, restaurants, real estate teams, churches, breweries, schools and companies across Central Ohio.

We embroider on garments from brands you know: Carhartt, Nike, Under Armour, Cutter & Buck, Port Authority, Richardson and dozens more. Polos, button-downs, fleece, vests, hoodies, sweatshirts, jackets, performance tees, hats, beanies, scrubs, aprons and bags. Every logo is digitized by a trained operator who checks stitch direction, color and density before production starts. Done right, embroidery lasts as long as the shirt. A printed logo can wash off. Stitching doesn't.

Digitizing is built into the per-piece price, so there are no surprise setup fees. Minimums are low: 1 piece for personalized names, 12 for crew orders. Most orders ship within 5–10 business days, with rush available. New hire mid-season? Popular blanks are kept in stock so small reorders turn fast. Wholesale cost plus a management fee means you always see what you're paying for.`}
    gallery={[
      { src: g1, alt: "Embroidered polos for a Columbus, Ohio team" },
      { src: g2, alt: "Custom embroidered hoodies and polos for a Central Ohio company" },
      { src: g3, alt: "Embroidered branded jackets and outerwear for an Ohio crew" },
    ]}
    startingFrom="$24"
    pricingNote="per embroidered polo at quantity 12+"
    benefits={[
      "Garments from Carhartt, Nike, Port Authority and dozens more",
      "Logo digitizing included. No surprise setup fees",
      "Small runs are fine. Ask and we'll tell you the minimum for your item.",
      "Most orders ship in 5–10 business days",
      "Wholesale pricing plus one flat management fee, all shown up front",
    ]}
  />
);

export default EmbroideredApparel;
