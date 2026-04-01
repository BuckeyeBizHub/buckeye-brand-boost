import google5StarBadge from "@/assets/google-5-star-badge.png";
import bbbBadge from "@/assets/bbb-a-plus-badge.png";

interface TrustBadgesProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const TrustBadges = ({ variant = "light", size = "md", className = "" }: TrustBadgesProps) => {
  const sizeMap = {
    sm: "h-20 sm:h-24",
    md: "h-24 sm:h-28",
    lg: "h-28 sm:h-32",
  };

  return (
    <div className={`flex items-center justify-center gap-6 sm:gap-10 ${className}`}>
      <img
        src={google5StarBadge}
        alt="Google 5-Star Rated Business – Buckeye Biz Hub"
        className={`${sizeMap[size]} w-auto object-contain ${variant === "dark" ? "drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]"}`}
        loading="lazy"
      />
      <img
        src={bbbBadge}
        alt="BBB Accredited Business A+ Rating – Buckeye Biz Hub"
        className={`${sizeMap[size]} w-auto object-contain ${variant === "dark" ? "drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]"}`}
        loading="lazy"
      />
    </div>
  );
};

export default TrustBadges;
