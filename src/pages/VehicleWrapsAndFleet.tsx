import ServicePageLayout from "@/components/services/ServicePageLayout";
import vehicleWrapImg from "@/assets/vehicle-wrap-product.jpg";

const VehicleWrapsAndFleet = () => (
  <ServicePageLayout
    title="Vehicle Wraps & Fleet Branding"
    headline="Vehicle Wraps & Fleet Branding for Ohio Businesses"
    subheadline="Transform your fleet into powerful 24/7 mobile advertisements"
    image={vehicleWrapImg}
    slug="vehicle-wraps-and-fleet-branding"
    description={[
      "Transform your fleet into powerful 24/7 mobile advertisements. Our custom vehicle wraps create thousands of daily impressions while making your brand unforgettable on every Ohio road.",
      "We design stunning full and partial wraps, magnetic signs, and fleet graphics — then connect you with top-rated local installers in our network, saving you significant money while ensuring professional results every time.",
      "From single trucks to entire fleets of service vans, our vehicle branding solutions are designed to maximize visibility, generate inbound calls, and build brand recognition across Central Ohio and beyond.",
    ]}
    benefits={[
      { text: "Full and partial vehicle wraps with bold, eye-catching designs" },
      { text: "70,000+ daily impressions per wrapped vehicle" },
      { text: "Connected to top-rated Ohio installers — save $1,500+ per vehicle" },
      { text: "Magnetic signs and fleet graphics for flexible branding" },
      { text: "Design, print, and installation coordination handled for you" },
    ]}
    whyOhio="Ohio businesses choose us for vehicle branding because we handle the entire process — design, production, and installer coordination — saving you thousands while delivering wraps that turn heads and generate real business on every mile driven."
  />
);

export default VehicleWrapsAndFleet;
