"use client";
import { Clock } from "lucide-react";

const trustItems = [
  "500+ Ohio Businesses Helped",
  "No hidden fees",
  "Free quotes in 24 hours",
  "Ohio owned and operated",
];

const ServicesTrustBar = () => (
  <section className="py-8 bg-ohio-navy">
    <div className="container">
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
        {trustItems.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm font-bold text-primary-foreground/70 tracking-wide">
            <Clock className="w-4 h-4 text-primary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesTrustBar;
