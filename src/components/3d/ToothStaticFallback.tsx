import React from "react";

export const ToothStaticFallback: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      aria-label="Artistic 3D tooth visualization"
    >
      {/* Turquoise Glow Field */}
      <div className="absolute w-72 h-72 rounded-full bg-brand-aqua/20 blur-3xl pointer-events-none transform -translate-y-4" />

      {/* Ceramic Pearl Tooth Silhouette Artwork */}
      <div className="relative z-10 w-64 h-80 flex items-center justify-center">
        <svg
          viewBox="0 0 200 240"
          className="w-full h-full drop-shadow-[0_20px_40px_rgba(23,174,171,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ceramic Pearl Gradient */}
            <linearGradient id="pearlGrad" x1="20" y1="20" x2="180" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#F4FBFC" />
              <stop offset="85%" stopColor="#D5E8EA" />
              <stop offset="100%" stopColor="#A8C8CC" />
            </linearGradient>

            {/* Turquoise Rim Lighting Gradient */}
            <linearGradient id="rimGlow" x1="160" y1="30" x2="190" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#35D0CD" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#17AEAB" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0D727C" stopOpacity="0" />
            </linearGradient>

            {/* Inner Enamel Highlight */}
            <linearGradient id="highlight" x1="50" y1="20" x2="120" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Main Anatomical Tooth Geometry (Crown & Dual Roots) */}
          <path
            d="M 60 25 
               C 80 18, 120 18, 140 25 
               C 165 32, 175 65, 172 105 
               C 170 135, 155 155, 145 175 
               C 138 190, 134 215, 130 230 
               C 127 236, 120 235, 117 225 
               C 112 205, 107 175, 100 160 
               C 93 175, 88 205, 83 225 
               C 80 235, 73 236, 70 230 
               C 66 215, 62 190, 55 175 
               C 45 155, 30 135, 28 105 
               C 25 65, 35 32, 60 25 Z"
            fill="url(#pearlGrad)"
          />

          {/* Occlusal Cusp Contours & Groove */}
          <path
            d="M 65 35 
               C 85 45, 115 45, 135 35 
               M 100 42 
               C 100 65, 100 90, 100 115"
            stroke="rgba(10, 81, 87, 0.25)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Turquoise Right Rim Light */}
          <path
            d="M 140 25 
               C 165 32, 175 65, 172 105 
               C 170 135, 155 155, 145 175 
               C 138 190, 134 215, 130 230"
            stroke="url(#rimGlow)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Enamel Light Sheen */}
          <path
            d="M 45 50 
               C 48 35, 65 28, 75 32 
               C 65 55, 55 85, 52 110"
            fill="url(#highlight)"
          />
        </svg>
      </div>

      {/* Ground Shadow & Reflection */}
      <div className="absolute bottom-6 w-48 h-6 bg-brand-aqua/10 blur-md rounded-[100%] transform scale-y-50" />
    </div>
  );
};
