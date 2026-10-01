import React from "react";

export const Marquee: React.FC = () => {
  const items = [
    "WEB DESIGN",
    "GRAPHIC DESIGN",
    "ADVERTISING",
    "MARKETING",
    "AI-ASSISTED CREATIVE",
  ];

  return (
    <div
      className="relative w-full border-y border-[#1F1F1F] bg-[#0E0E0E] py-4 overflow-hidden select-none"
      aria-label="Studio Disciplines Marquee"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Render twice for continuous loop */}
        {[...Array(2)].map((_, arrayIdx) => (
          <div key={arrayIdx} className="flex items-center shrink-0">
            {items.map((item, itemIdx) => (
              <div key={`${arrayIdx}-${itemIdx}`} className="flex items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-warm-white/90 px-6">
                  {item}
                </span>
                <span className="text-lime text-2xl font-black select-none px-2">
                  —
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
