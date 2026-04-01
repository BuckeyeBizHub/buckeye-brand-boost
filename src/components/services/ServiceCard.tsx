import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  href: string;
  index: number;
}

const ServiceCard = ({ image, title, description, price, href, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: index * 0.06, duration: 0.5 }}
    className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        width={600}
        height={450}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6 lg:p-8">
      <h3 className="font-display text-xl font-black text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      {price && (
        <p className="text-2xl font-black text-primary mb-5">{price}</p>
      )}
      <Link to={href}>
        <Button
          variant="outline"
          className="font-bold border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

export default ServiceCard;
