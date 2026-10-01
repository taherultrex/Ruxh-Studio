import React from "react";
import { ArrowUpRight } from "lucide-react";
import { studioConfig } from "@/config/studio";

export const CTA: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-36 bg-obsidian border-b border-[#1A1A1A] overflow-hidden">
      {/* Massive Graphic Electric-Lime X in Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-20 sm:opacity-25 select-none">
        <svg
          viewBox="0 0 100 100"
          className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px]"
          fill="none"
        >
          <path
            d="M18 12 L38 12 L50 32 L62 12 L82 12 L60 48 L82 88 L62 88 L50 68 L38 88 L18 88 L40 48 Z"
            fill="#A3FF0A"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="font-mono text-xs text-lime tracking-widest uppercase mb-4">
            [ 07 // INITIATE ]
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.88] text-warm-white">
            GOT SOMETHING <br />
            <span className="text-lime">WORTH BUILDING?</span>
          </h2>

          <p className="mt-8 text-xl sm:text-2xl text-warm-white/70 max-w-xl font-medium leading-relaxed">
            We partner with ambitious brands ready to cut through the noise with bold design and sharp execution.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-lime text-obsidian px-8 py-5 font-black text-sm sm:text-base tracking-wider uppercase transition-all duration-150 hover:bg-[#8FE004] hover:shadow-[0_0_25px_rgba(163,255,10,0.35)] active:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </a>

            {studioConfig.socials.instagram && (
              <a
                href={studioConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#121212] text-warm-white px-8 py-5 font-bold text-sm sm:text-base tracking-wider uppercase hover:border-lime hover:text-lime transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                <span>INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
