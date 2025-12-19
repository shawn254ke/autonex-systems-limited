import React from "react";
import { cn } from "../lib/utils";

interface PartnerLogoProps {
  name: string;
  logo: string;
  className?: string;
  size?: number; // optional prop to control height dynamically
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({
  name,
  logo,
  className,
  size = 48, // default height of 48px
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all filter grayscale hover:grayscale-0",
        className
      )}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-w-full object-contain"
        style={{ height: `${size}px` }}
        loading="lazy" // lazy load for performance
        decoding="async"
      />
    </div>
  );
};

export default PartnerLogo;
