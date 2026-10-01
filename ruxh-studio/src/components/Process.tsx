import React from "react";

export const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand the brand, audience and objective.",
      details: "Rapid intake, competitive analysis, and strategic positioning to establish what matters.",
    },
    {
      num: "02",
      title: "BUILD",
      desc: "Turn the strategy into visual concepts and digital experiences.",
      details: "High-speed design prototyping, interactive typography, and responsive code architectures.",
    },
    {
      num: "03",
      title: "REFINE",
      desc: "Iterate, polish and push the work further.",
      details: "Optical tuning, performance optimization, and rigorous micro-interaction polish.",
    },
    {
      num: "04",
      title: "SHIP",
      desc: "Launch the final product and get it in front of people.",
      details: "Production deployment, asset handover, and high-impact social broadcast.",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 border-b border-[#1A1A1A] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A] pb-8 mb-12 sm:mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-lime tracking-widest uppercase mb-2">
              [ 04 // METHODOLOGY ]
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-warm-white">
              HOW WE MOVE
            </h2>
          </div>
          <p className="text-base sm:text-lg text-warm-white/60 max-w-md font-mono text-sm leading-relaxed">
            Fast, linear, and unencumbered by agency bureaucracy. Four defined phases from kickoff to launch.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border border-[#1F1F1F] bg-[#0E0E0E] p-6 sm:p-8 flex flex-col justify-between hover:border-lime/60 transition-colors duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#1C1C1C] pb-4 mb-6">
                  <span className="text-4xl sm:text-5xl font-black font-mono tracking-tighter text-[#333] group-hover:text-lime transition-colors">
                    {step.num}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-[#555] uppercase">
                    STAGE
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-warm-white group-hover:text-lime transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3 text-base text-warm-white/90 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181818] font-mono text-xs text-[#777] leading-normal">
                {step.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
