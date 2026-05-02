import SimpleServicePage from "@/components/services/SimpleServicePage";
import g1 from "@/assets/apparel-polos-golf.jpg";
import g2 from "@/assets/custom-apparel-polos-hoodies.jpg";
import g3 from "@/assets/apparel-jackets-outerwear.jpg";

const EmbroideredApparel = () => (
  <SimpleServicePage
    service="Embroidered Apparel"
    metaTitle="Embroidered Apparel in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Custom embroidered apparel in Columbus, Ohio — polos, hats, jackets, and uniforms with crisp, durable embroidery from a trusted local Central Ohio supplier."
    slug="/embroidered-apparel"
    description={`Embroidered apparel is the easiest way to make any Columbus, Ohio team look professional, unified, and ready to work. A clean, embroidered logo on a polo, jacket, or hat tells your customers — before anyone says a word — that you take pride in what you do. Buckeye Biz Hub provides custom embroidered apparel in Columbus Ohio for everyone: roofing crews, dental and medical offices, restaurants, real estate teams, churches, breweries, schools, and corporate teams across Central Ohio.

We embroider on premium garments from brands you actually recognize — Carhartt, Nike, Under Armour, Cutter & Buck, Port Authority, Richardson, and dozens more. Polos, button-downs, fleece, vests, hoodies, sweatshirts, jackets, performance tees, hats, beanies, scrubs, aprons, and bags. Every logo is digitized in-house by a trained operator who proofs every stitch direction, color, and density before production starts. Embroidery isn't just a sticker that gets washed off — done right, it lasts the life of the garment.

Our embroidery setup fee is included in the per-piece price (no surprise digitizing fees), with low minimums starting at just 1 piece for personalized names and 12 pieces for full crew orders. Most embroidered apparel in Columbus Ohio ships within 5–10 business days, with rush production available. Need uniforms for a new hire mid-season? We keep popular blanks in stock so we can turn small reorders fast. Wholesale-plus-management-fee pricing means you always see exactly what you're paying for.`}
    gallery={[
      { src: g1, alt: "Embroidered polos for a Columbus, Ohio team" },
      { src: g2, alt: "Custom embroidered hoodies and polos for a Central Ohio company" },
      { src: g3, alt: "Embroidered branded jackets and outerwear for an Ohio crew" },
    ]}
    startingFrom="$24"
    pricingNote="per embroidered polo at quantity 12+"
    benefits={[
      "Premium garments from Carhartt, Nike, Port Authority, and dozens more",
      "Logo digitizing included — no surprise setup fees",
      "Low minimums: 1 piece for names, 12 pieces for crew orders",
      "Most orders ship in 5–10 business days from Columbus, Ohio",
      "Wholesale pricing with one flat management fee — fully transparent",
    ]}
  />
);

export default EmbroideredApparel;
