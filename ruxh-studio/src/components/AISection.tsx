"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export const AISection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);

  const workflowSteps = [
    {
      step: "01",
      name: "IDEA",
      role: "HUMAN DIRECTION",
      description: "Concept generation, positioning, strategy, and creative angle defined by experienced designers.",
    },
    {
      step: "02",
      name: "DESIGN",
      role: "HUMAN CRAFT",
      description: "Art direction, typographic systems, brand hierarchy, and spatial composition mapped by hand.",
    },
    {
      step: "03",
      name: "AI",
      role: "ACCELERATION",
      description: "Rapid iteration, asset scaling, code assistance, and visual exploration at 10x production speed.",
    },
    {
      step: "04",
      name: "REFINE",
      role: "HUMAN JUDGMENT",
      description: "Editorial curation, precise typesetting, optical adjustments, and ruthless quality control.",
    },
    {
      step: "05",
      name: "SHIP",
      role: "PRODUCTION",
      description: "Deployment to live web platforms, high-resolution master delivery, and public launch.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#1A1A1A] bg-obsidian relative studio-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <div className="font-mono text-xs text-lime tracking-widest uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-lime" />
              <span>[ 03 // PRODUCTION SYSTEM ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-warm-white">
              BUILT DIFFERENT.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-warm-white leading-tight">
              <span className="block text-warm-white">Human direction.</span>
              <span className="block text-lime">AI acceleration.</span>
              <span className="block text-warm-white">Better output.</span>
            </div>
            <p className="mt-4 text-warm-white/70 text-base leading-relaxed">
              We use modern AI tools as a creative accelerator — never as a replacement for human creative taste, judgment, or intent.
            </p>
          </div>
        </div>

        {/* The 5-Stage Interactive Workflow */}
        <div className="border border-[#1F1F1F] bg-[#0E0E0E]">
          {/* Step selector bar */}
          <div className="grid grid-cols-5 border-b border-[#1F1F1F] divide-x divide-[#1F1F1F]">
            {workflowSteps.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-2.5 sm:p-5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-lime ${
                    isActive ? "bg-[#181818] border-b-2 border-b-lime" : "hover:bg-[#121212]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[9px] sm:text-xs font-bold ${
                        isActive ? "text-lime" : "text-[#555]"
                      }`}
                    >
                      {item.step}
                    </span>
                    {idx < workflowSteps.length - 1 && (
                      <ArrowRight className="hidden md:inline w-3 h-3 text-[#333]" />
                    )}
                  </div>
                  <div
                    className={`mt-1 sm:mt-2 text-[11px] sm:text-base md:text-lg font-black tracking-tight uppercase truncate ${
                      isActive ? "text-warm-white" : "text-[#777]"
                    }`}
                  >
                    {item.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase */}
          <div className="p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="font-mono text-xs text-lime tracking-widest uppercase mb-1">
                STAGE {workflowSteps[activeStep].step} — {workflowSteps[activeStep].role}
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-warm-white">
                {workflowSteps[activeStep].name}
              </h3>
              <p className="mt-3 text-warm-white/80 text-base sm:text-lg leading-relaxed">
                {workflowSteps[activeStep].description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="border border-[#262626] bg-[#141414] px-4 py-2 font-mono text-xs text-warm-white">
                FLOW: 0{activeStep + 1} / 05
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
