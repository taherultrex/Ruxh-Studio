"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { studioConfig } from "@/config/studio";

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-[#1A1A1A] studio-grid-bg overflow-hidden">
      {/* Editorial Top Micro-Labels */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1A1A1A] pb-4 mb-8 text-[11px] font-mono tracking-widest text-[#737373] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-lime font-bold">RUXH / STUDIO</span>
            <span className="text-[#333]">/</span>
            <span>SOCIAL CREATIVE STUDIO</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">CREATIVE SYSTEM / 001</span>
            <span>EDITION / {studioConfig.edition}</span>
          </div>
        </div>

        {/* Hero Central Grid: Massive Typography & Interactive Lime X Motif */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-4 sm:pt-8">
          {/* Headline Column */}
          <div className="lg:col-span-8 flex flex-col justify-end">
            <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter uppercase leading-[0.88] text-warm-white select-none">
              <span className="block">WE MAKE</span>
              <span className="block text-warm-white">BRANDS</span>
              <span className="block text-lime">HARD TO</span>
              <span className="block">IGNORE.</span>
            </h1>
          </div>

          {/* Signature Electric-Lime X Visual Motif */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-between self-stretch">
            {/* Interactive X Graphic Box */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-48 h-48 sm:w-60 sm:h-60 border border-[#222] bg-[#0E0E0E] flex items-center justify-center group cursor-pointer transition-colors duration-300 hover:border-lime/60"
              aria-label="RUXH Signature X Motif"
            >
              {/* Corner geometric ticks */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#444] group-hover:border-lime transition-colors" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#444] group-hover:border-lime transition-colors" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#444] group-hover:border-lime transition-colors" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#444] group-hover:border-lime transition-colors" />

              {/* Background hairline crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-[#1A1A1A]" />
                <div className="absolute h-full w-[1px] bg-[#1A1A1A]" />
              </div>

              {/* The Signature Electric Lime X */}
              <svg
                viewBox="0 0 100 100"
                className={`w-28 h-28 sm:w-36 sm:h-36 transition-transform duration-500 ease-out ${
                  isHovered ? "rotate-90 scale-105" : "rotate-0 scale-100"
                }`}
                fill="none"
              >
                <path
                  d="M18 12 L38 12 L50 32 L62 12 L82 12 L60 48 L82 88 L62 88 L50 68 L38 88 L18 88 L40 48 Z"
                  fill="#A3FF0A"
                />
              </svg>

              {/* Micro badge bottom */}
              <div className="absolute bottom-2 font-mono text-[9px] text-[#555] tracking-widest uppercase group-hover:text-lime transition-colors">
                [ MOTIF // 01 ]
              </div>
            </div>

            {/* Disciplines summary pill list */}
            <div className="w-full mt-8 pt-6 border-t border-[#1A1A1A] space-y-2 text-right">
              {studioConfig.disciplines.map((disc, idx) => (
                <div
                  key={disc}
                  className="font-mono text-[11px] tracking-wider text-warm-white/70 flex items-center justify-end gap-2"
                >
                  <span className="text-lime">0{idx + 1}</span>
                  <span>{disc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting Copy & Action Row */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#1A1A1A] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-lg sm:text-xl md:text-2xl text-warm-white/90 font-medium tracking-tight max-w-2xl leading-relaxed">
              {studioConfig.subheadline}
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center md:justify-end gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-lime text-obsidian px-6 py-3.5 font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-150 hover:bg-[#8FE004] hover:shadow-[0_0_20px_rgba(163,255,10,0.3)] active:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#121212] text-warm-white px-6 py-3.5 font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-warm-white hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <span>VIEW OUR WORK</span>
              <ArrowDown className="w-4 h-4 text-lime" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
