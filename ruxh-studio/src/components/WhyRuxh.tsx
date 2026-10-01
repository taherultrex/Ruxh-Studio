import React from "react";

export const WhyRuxh: React.FC = () => {
  const pillars = [
    {
      title: "THINK FAST.",
      desc: "We move from idea to execution without unnecessary layers.",
      tag: "AGILITY",
    },
    {
      title: "DESIGN HARD.",
      desc: "Every visual has a purpose.",
      tag: "DISCIPLINE",
    },
    {
      title: "USE THE TOOLS.",
      desc: "Modern creative technology helps us move faster and explore more.",
      tag: "INNOVATION",
    },
    {
      title: "KEEP IT HUMAN.",
      desc: "Technology accelerates the work. Creative judgment drives it.",
      tag: "STANDARD",
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#1A1A1A] bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-mono text-xs text-lime tracking-widest uppercase mb-2">
          [ 06 // CODE OF OPERATION ]
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-warm-white mb-16">
          WHY RUXH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="border border-[#1F1F1F] bg-[#121212] p-8 sm:p-10 flex flex-col justify-between hover:border-lime/70 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#222] pb-4 mb-6">
                  <span className="font-mono text-xs text-lime tracking-widest uppercase">
                    0{idx + 1} // {pillar.tag}
                  </span>
                  <div className="w-2 h-2 bg-lime group-hover:scale-125 transition-transform" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-warm-white group-hover:text-lime transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <p className="mt-6 text-warm-white/80 text-lg leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
