import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import { Link } from "react-router-dom";

interface IndustryCardProps {
  industry: {
    image: string;
    title: string;
    description: string;
    bullets: string[];
    quote: string;
    ctaLabel: string;
    hasLearnMore?: boolean;
  };
  index: number;
}

const IndustryCard = ({ industry, index }: IndustryCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 flex flex-col"
  >
    {/* Image */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={industry.image}
        alt={`${industry.title} - Ohio branding and printing services`}
        loading="lazy"
        width={1024}
        height={768}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="p-6 lg:p-8 flex flex-col flex-1">
      <h3 className="font-display text-2xl lg:text-[1.65rem] font-black text-foreground mb-3 leading-tight">
        {industry.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {industry.description}
      </p>

      {/* Bullets */}
      <div className="mb-5">
        <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary mb-3">
          What We Provide
        </h4>
        <ul className="space-y-2">
          {industry.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
              <CheckCircle className="w-4 h-4 text-ohio-forest flex-shrink-0 mt-0.5" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonial quote */}
      <div className="bg-ohio-cream rounded-xl p-4 mb-6 border border-border/50">
        <div className="flex gap-2">
          <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm italic text-muted-foreground leading-relaxed">
            {industry.quote}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <Link to="/contact">
          <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold text-base py-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group/btn">
            {industry.ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default IndustryCard;
