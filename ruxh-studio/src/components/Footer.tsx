"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { studioConfig } from "@/config/studio";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="bg-obsidian text-warm-white border-t border-[#1F1F1F] pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1A1A1A]">
          {/* Logo & Descriptor */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="dark" showTagline={true} className="h-8 sm:h-9 w-auto" />
            <p className="mt-4 text-warm-white/60 text-sm max-w-sm leading-relaxed">
              Combining design, technology and modern creative tools to build stronger identities and more effective advertising.
            </p>

            <div className="pt-2 font-mono text-xs text-lime">
              {studioConfig.statusText}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <span className="font-mono text-xs text-[#555] uppercase tracking-widest block mb-4">
                INDEX
              </span>
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-warm-white/80 hover:text-lime transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials / External */}
            <div>
              <span className="font-mono text-xs text-[#555] uppercase tracking-widest block mb-4">
                CONNECT
              </span>
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
                {studioConfig.socials.instagram && (
                  <li>
                    <a
                      href={studioConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-warm-white/80 hover:text-lime transition-colors"
                    >
                      <span>INSTAGRAM (@ruxh.io)</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={`mailto:${studioConfig.email}`}
                    className="inline-flex items-center gap-1 text-warm-white/80 hover:text-lime transition-colors"
                  >
                    <span>EMAIL</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Live Studio Clock & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="font-mono text-xs text-[#555] uppercase tracking-widest block mb-1">
                STUDIO CLOCK
              </span>
              <div className="font-mono text-2xl font-bold text-warm-white tabular-nums">
                {timeString || "00:00:00"}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-8 md:mt-0 p-3 border border-[#262626] bg-[#121212] hover:border-lime hover:text-lime transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666]">
          <div>
            © {studioConfig.edition} {studioConfig.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
            <span>EDITORIAL BRUTALISM</span>
            <span className="text-lime">■</span>
            <span>HUMAN CRAFTED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
