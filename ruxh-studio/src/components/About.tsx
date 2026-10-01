import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[#1A1A1A] bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-mono text-xs text-lime tracking-widest uppercase mb-4">
          [ 05 // MANIFESTO ]
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-warm-white leading-[0.95]">
              RUXH IS A CREATIVE STUDIO <br />
              <span className="text-lime">BUILT FOR THE INTERNET.</span>
            </h2>

            <p className="mt-8 text-xl sm:text-2xl text-warm-white/80 font-medium leading-relaxed max-w-2xl">
              We combine design, technology and modern creative tools to help businesses build stronger identities and better digital experiences.
            </p>
          </div>

          {/* Graphic Stack: WEB. VISUALS. ADVERTISING. ONE STUDIO. */}
          <div className="lg:col-span-4 border border-[#222] bg-[#0E0E0E] p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4 font-black tracking-tight text-3xl sm:text-4xl uppercase select-none">
              <div className="text-warm-white flex items-center justify-between border-b border-[#1F1F1F] pb-2">
                <span>WEB.</span>
                <span className="font-mono text-xs text-[#555]">01</span>
              </div>
              <div className="text-warm-white flex items-center justify-between border-b border-[#1F1F1F] pb-2">
                <span>VISUALS.</span>
                <span className="font-mono text-xs text-[#555]">02</span>
              </div>
              <div className="text-warm-white flex items-center justify-between border-b border-[#1F1F1F] pb-2">
                <span>ADVERTISING.</span>
                <span className="font-mono text-xs text-[#555]">03</span>
              </div>
              <div className="text-lime pt-2 flex items-center justify-between">
                <span>ONE STUDIO.</span>
                <span className="font-mono text-xs text-lime">RUXH</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1C1C1C] font-mono text-[11px] text-[#777] uppercase tracking-wider">
              PRONUNCIATION: &quot;RUSH&quot; // SOCIAL CREATIVE STUDIO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
