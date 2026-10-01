import React from "react";
import { ArrowUpRight } from "lucide-react";
import { studioConfig } from "@/config/studio";

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-28 border-b border-[#1A1A1A] bg-obsidian relative studio-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A] pb-8 mb-12 sm:mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-lime tracking-widest uppercase mb-2">
              [ 01 // ARCHIVE ]
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-warm-white">
              PORTFOLIO
            </h2>
          </div>
          <p className="text-base sm:text-lg text-warm-white/60 max-w-md font-mono text-sm leading-relaxed">
            Archive currently in curation. Commissioned projects and verified case studies will be released here.
          </p>
        </div>

        {/* Brutalist Editorial "Coming Soon" Showcase Block */}
        <div className="border border-[#1F1F1F] bg-[#0E0E0E] relative overflow-hidden p-8 sm:p-14 lg:p-20">
          {/* Subtle Background Crosshair Motif */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="w-full h-[1px] bg-warm-white" />
            <div className="absolute h-full w-[1px] bg-warm-white" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-xs text-lime tracking-widest uppercase mb-6">
              <span className="w-2.5 h-2.5 bg-lime inline-block" />
              <span>ARCHIVE IN PRODUCTION // {studioConfig.edition}</span>
            </div>

            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-warm-white leading-[0.92]">
              PORTFOLIO <br />
              <span className="text-lime">COMING SOON.</span>
            </h3>

            <p className="mt-6 text-lg sm:text-xl text-warm-white/75 leading-relaxed font-medium">
              We are currently documenting and packaging selected client work across web design, brand identities, and social advertising campaigns.
            </p>

            {/* Discipline Badges */}
            <div className="mt-8 pt-8 border-t border-[#1F1F1F] flex flex-wrap gap-2.5">
              {studioConfig.disciplines.map((disc) => (
                <span
                  key={disc}
                  className="font-mono text-xs text-warm-white/90 bg-[#141414] px-3.5 py-2 border border-[#262626]"
                >
                  {disc}
                </span>
              ))}
              <span className="font-mono text-xs text-lime bg-[#141414] px-3.5 py-2 border border-lime/40">
                CASE STUDIES DROPPING SOON
              </span>
            </div>

            {/* Direct Inquire CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-lime text-obsidian px-6 py-3.5 font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-150 hover:bg-[#8FE004] hover:shadow-[0_0_20px_rgba(163,255,10,0.3)] active:translate-y-0.5"
              >
                <span>REQUEST PRIVATE DECK / INQUIRE</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>

              <a
                href={`mailto:${studioConfig.email}`}
                className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#121212] text-warm-white px-6 py-3.5 font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-lime hover:text-lime transition-colors"
              >
                <span>{studioConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Right Geometric Accent for Desktop */}
          <div className="hidden lg:flex absolute right-12 bottom-12 items-center justify-center pointer-events-none select-none">
            <div className="w-56 h-56 border border-[#222] bg-[#0A0A0A] flex items-center justify-center relative">
              <div className="absolute top-2 left-2 font-mono text-[9px] text-[#444] tracking-widest">
                [ SEC // 01 ]
              </div>
              <svg viewBox="0 0 100 100" className="w-28 h-28" fill="none">
                <path
                  d="M18 12 L38 12 L50 32 L62 12 L82 12 L60 48 L82 88 L62 88 L50 68 L38 88 L18 88 L40 48 Z"
                  fill="#A3FF0A"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
