"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy, RefreshCw } from "lucide-react";
import { studioConfig } from "@/config/studio";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    needs: [] as string[],
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "brief_ready">("idle");
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const needOptions = [
    "Website",
    "Graphic Design",
    "Advertising / Marketing",
    "Branding",
    "Something Else",
  ];

  const toggleNeed = (option: string) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(option);
      return {
        ...prev,
        needs: exists
          ? prev.needs.filter((item) => item !== option)
          : [...prev.needs, option],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please provide your name and contact email.");
      return;
    }
    setErrorMessage("");
    setFormState("brief_ready");
  };

  const compiledBrief = `RUXH PROJECT INQUIRY // BRIEF SUMMARY
------------------------------------------------
CLIENT / NAME: ${formData.name}
EMAIL: ${formData.email}
BUSINESS / BRAND: ${formData.brand || "Not specified"}
SERVICES REQUIRED: ${formData.needs.length ? formData.needs.join(", ") : "General Creative Direction"}
PROJECT DETAILS:
${formData.message || "Brief details to be discussed directly."}
------------------------------------------------
Generated via RUXH Studio (ruxh.studio)`;

  const mailtoLink = `mailto:${studioConfig.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.brand || formData.name} x RUXH`
  )}&body=${encodeURIComponent(compiledBrief)}`;

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(compiledBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 border-b border-[#1A1A1A] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Metadata */}
          <div className="lg:col-span-5">
            <div className="font-mono text-xs text-lime tracking-widest uppercase mb-2">
              [ 08 // CONTACT ]
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-warm-white leading-[0.95]">
              LET&apos;S MAKE <br />
              <span className="text-lime">SOMETHING.</span>
            </h2>

            <p className="mt-6 text-warm-white/70 text-lg leading-relaxed max-w-md">
              Tell us about what you want to build. We review every brief directly and respond within 24 hours.
            </p>

            <div className="mt-10 pt-8 border-t border-[#1C1C1C] space-y-4">
              <div>
                <span className="font-mono text-[11px] text-[#666] tracking-widest uppercase block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${studioConfig.email}`}
                  className="font-mono text-lg text-warm-white hover:text-lime transition-colors underline decoration-[#333] hover:decoration-lime"
                >
                  {studioConfig.email}
                </a>
              </div>

              <div>
                <span className="font-mono text-[11px] text-[#666] tracking-widest uppercase block mb-1">
                  STUDIO STATUS
                </span>
                <span className="font-mono text-sm text-lime">
                  {studioConfig.statusText}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Project Form / Brief State */}
          <div className="lg:col-span-7 border border-[#1F1F1F] bg-[#0E0E0E] p-6 sm:p-10">
            {formState === "idle" ? (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {errorMessage && (
                  <div className="p-3 bg-red-950/60 border border-red-500 text-red-200 text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="client-name"
                    className="block font-mono text-xs text-warm-white/80 uppercase tracking-wider mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-[#141414] border border-[#262626] text-warm-white px-4 py-3.5 text-base focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors placeholder:text-[#444]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="client-email"
                    className="block font-mono text-xs text-warm-white/80 uppercase tracking-wider mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#141414] border border-[#262626] text-warm-white px-4 py-3.5 text-base focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors placeholder:text-[#444]"
                  />
                </div>

                {/* Business / Brand */}
                <div>
                  <label
                    htmlFor="client-brand"
                    className="block font-mono text-xs text-warm-white/80 uppercase tracking-wider mb-2"
                  >
                    Business / Brand
                  </label>
                  <input
                    id="client-brand"
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="Company or Brand Name"
                    className="w-full bg-[#141414] border border-[#262626] text-warm-white px-4 py-3.5 text-base focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors placeholder:text-[#444]"
                  />
                </div>

                {/* What do you need? */}
                <div>
                  <span className="block font-mono text-xs text-warm-white/80 uppercase tracking-wider mb-3">
                    What do you need? (Select all that apply)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {needOptions.map((opt) => {
                      const isSelected = formData.needs.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleNeed(opt)}
                          className={`font-mono text-xs px-3.5 py-2 border transition-all duration-150 focus:outline-none ${
                            isSelected
                              ? "bg-lime text-obsidian font-bold border-lime"
                              : "bg-[#141414] text-warm-white/80 border-[#262626] hover:border-warm-white"
                          }`}
                        >
                          {isSelected ? `✓ ${opt}` : `+ ${opt}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tell us about the project */}
                <div>
                  <label
                    htmlFor="project-desc"
                    className="block font-mono text-xs text-warm-white/80 uppercase tracking-wider mb-2"
                  >
                    Tell us about the project
                  </label>
                  <textarea
                    id="project-desc"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Scope, timeline, objectives, or references..."
                    className="w-full bg-[#141414] border border-[#262626] text-warm-white px-4 py-3.5 text-base focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors placeholder:text-[#444] resize-y"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-lime text-obsidian py-4 font-black text-sm tracking-wider uppercase transition-all duration-150 hover:bg-[#8FE004] hover:shadow-[0_0_20px_rgba(163,255,10,0.3)] active:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <span>SEND INQUIRY</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </button>
              </form>
            ) : (
              /* Truthful Confirmation State: BRIEF READY */
              <div className="space-y-6">
                <div className="border-b border-[#222] pb-4">
                  <div className="inline-flex items-center gap-2 text-lime font-mono text-xs font-bold uppercase tracking-wider mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-lime" />
                    BRIEF READY
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-warm-white tracking-tight">
                    YOUR PROJECT BRIEF HAS BEEN COMPILED.
                  </h3>
                  <p className="mt-2 text-sm text-warm-white/70 leading-relaxed">
                    Review your structured intake summary below. You can copy the brief or open your email client pre-addressed to our studio inbox.
                  </p>
                </div>

                {/* Compiled Brief Code Box */}
                <div className="bg-[#080808] border border-[#222] p-4 font-mono text-xs text-warm-white/90 whitespace-pre-wrap leading-relaxed select-all overflow-x-auto">
                  {compiledBrief}
                </div>

                {/* Action Row */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 bg-lime text-obsidian px-6 py-3.5 font-black text-xs uppercase tracking-wider hover:bg-[#8FE004]"
                  >
                    <span>OPEN EMAIL CLIENT</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </a>

                  <button
                    type="button"
                    onClick={copyBrief}
                    className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#141414] text-warm-white px-5 py-3.5 font-mono text-xs uppercase hover:border-lime transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-lime" />
                        <span>COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>COPY BRIEF TEXT</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#888] hover:text-warm-white px-3 py-2 transition-colors ml-auto"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Edit Brief</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
