import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "compact" | "icon";
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  variant = "full",
  inverted = false,
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-brand-aqua rounded-md p-1",
        className
      )}
      aria-label="Georgia Dental Center Home"
    >
      {/* Authentic Georgia Crest Icon */}
      <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-[#164A3A] border border-[#164A3A]/80 flex items-center justify-center shadow-sm overflow-hidden p-1.5 transition-transform group-hover:scale-105 duration-300">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white fill-current"
          aria-hidden="true"
        >
          {/* Georgia State Contour */}
          <path
            d="M 28 20 L 75 22 L 78 40 L 72 65 L 75 82 L 58 84 L 48 83 L 34 82 L 32 60 L 28 20 Z"
            fill="currentColor"
            opacity="0.9"
          />
          {/* Stylized Floral Blossom Arc */}
          <circle cx="40" cy="18" r="3" fill="#FFFFFF" />
          <circle cx="50" cy="15" r="3.5" fill="#FFFFFF" />
          <circle cx="62" cy="17" r="3" fill="#FFFFFF" />
          <circle cx="72" cy="22" r="2.5" fill="#FFFFFF" />
          {/* Subtle Tooth Geometry Highlight */}
          <path
            d="M 46 45 C 46 40, 56 40, 56 45 C 56 52, 54 57, 54 62 C 54 64, 52 65, 51 63 C 50 61, 48 61, 47 63 C 46 65, 44 64, 44 62 C 44 57, 42 52, 46 45 Z"
            fill="#6F9B86"
          />
        </svg>
      </div>

      {variant !== "icon" && (
        <div className="flex flex-col text-left leading-tight">
          <span
            className={cn(
              "font-display text-xl sm:text-2xl font-semibold tracking-tight transition-colors",
              inverted ? "text-white" : "text-[#164A3A]"
            )}
          >
            Georgia
          </span>
          <span
            className={cn(
              "text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase transition-colors",
              inverted ? "text-[#D8E4D7]" : "text-[#59655E]"
            )}
          >
            Dental Center
          </span>
        </div>
      )}
    </Link>
  );
};
