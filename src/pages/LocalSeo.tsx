import ServicePageLayout from "@/components/services/ServicePageLayout";
import seoImg from "@/assets/service-local-seo.jpg";

const LocalSeo = () => (
  <ServicePageLayout
    title="Local SEO & Google Ranking"
    headline="Local SEO & Google Ranking for Ohio Businesses"
    subheadline="Get discovered by more local customers when they search online"
    image={seoImg}
    slug="local-seo"
    description={[
      "Get discovered by more local customers when they search online. Our local SEO strategies help you rank higher on Google, dominate the Map Pack, and appear exactly when potential customers are looking for you in Columbus and beyond.",
      "We optimize your Google Business Profile, build local citations, improve your on-page SEO, and implement proven strategies that push your business to the top of local search results — where the real customers are searching.",
      "Whether you're an HVAC contractor, dentist, auto shop, or restaurant, local SEO is the single most cost-effective way to drive new customers. We make sure your business shows up first when it matters most.",
    ]}
    benefits={[
      { text: "Google Business Profile optimization for maximum local visibility" },
      { text: "Dominate the Google Map Pack in your service area" },
      { text: "Local citation building and directory management" },
      { text: "On-page SEO optimization for your website" },
      { text: "Monthly reporting so you see exactly what's working" },
    ]}
    whyOhio="Columbus and Central Ohio businesses trust us for local SEO because we live and work here too. We understand the local search landscape and know exactly what it takes to get your business ranking above the competition in your specific market."
  />
);

export default LocalSeo;
