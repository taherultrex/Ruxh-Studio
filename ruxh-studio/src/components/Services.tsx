"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(0);

  const services = [
    {
      num: "01",
      title: "WEB DESIGN",
      tagline: "Websites that look sharp, work beautifully and give your brand a proper digital home.",
      capabilities: [
        "Landing Pages",
        "Business Websites",
        "Restaurant / Café Websites",
        "Portfolio Websites",
        "UI/UX Design",
        "Responsive Design",
      ],
    },
    {
      num: "02",
      title: "GRAPHIC DESIGN",
      tagline: "Visual systems and creative assets built to make your brand recognizable.",
      capabilities: [
        "Brand Identity",
        "Social Media Design",
        "Campaign Creatives",
        "Posters",
        "Packaging",
        "Marketing Collateral",
      ],
    },
    {
      num: "03",
      title: "ADVERTISING / MARKETING",
      tagline: "Creative that doesn't just look good — it's built to communicate.",
      capabilities: [
        "Social Media Campaigns",
        "Ad Creatives",
        "Creative Strategy",
        "Content Systems",
        "Campaign Concepts",
        "Digital Marketing",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 border-b border-[#1A1A1A] bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A] pb-8 mb-12 sm:mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-lime tracking-widest uppercase mb-2">
              [ 02 // CAPABILITIES ]
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-warm-white">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-base sm:text-lg text-warm-white/60 max-w-md font-mono text-sm leading-relaxed">
            Three core disciplines built for modern businesses. No fluff, no bloated retainers, no useless handoffs.
          </p>
        </div>

        {/* 3 Editorial Service Blocks */}
        <div className="divide-y divide-[#1F1F1F] border-y border-[#1F1F1F]">
          {services.map((service, idx) => {
            const isSelected = activeService === idx;

            return (
              <div
                key={service.num}
                onClick={() => setActiveService(idx)}
                className={`group py-8 sm:py-12 transition-colors duration-200 cursor-pointer ${
                  isSelected ? "bg-[#111]" : "hover:bg-[#0F0F0F]"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Huge Numeral */}
                  <div className="lg:col-span-2 flex items-baseline gap-4">
                    <span
                      className={`text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter transition-colors select-none ${
                        isSelected ? "text-lime" : "text-[#2A2A2A] group-hover:text-warm-white"
                      }`}
                    >
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="lg:col-span-5">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-warm-white group-hover:text-lime transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-warm-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Capabilities Tags */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                      {service.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="flex items-center gap-2 border border-[#222] bg-[#141414] px-3 py-2 text-xs sm:text-sm font-mono text-warm-white/90"
                        >
                          <span className="text-lime text-xs">■</span>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-end">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-lime uppercase hover:underline"
                      >
                        <span>INQUIRE FOR {service.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
