"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { studioConfig } from "@/config/studio";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT", href: "#about" },
    { label: "PROCESS", href: "#process" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
          isScrolled
            ? "bg-obsidian/90 backdrop-blur-md border-[#1F1F1F] py-3.5"
            : "bg-obsidian/40 backdrop-blur-sm border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
            aria-label="RUXH Homepage"
          >
            <Logo variant="dark" className="h-6 sm:h-7 w-auto transition-transform group-hover:scale-[1.02]" />
          </Link>

          {/* Center Status Tag (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 border border-[#222] bg-[#121212] px-3 py-1 text-[11px] font-mono tracking-wider text-warm-white">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse-subtle inline-block" />
            <span>{studioConfig.statusText}</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-warm-white/70 hover:text-warm-white transition-colors py-1 relative group focus:outline-none focus-visible:text-lime"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-lime transition-all duration-200 group-hover:w-full" />
              </a>
            ))}

            {/* Header CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-lime text-obsidian px-4 py-2 font-black text-xs tracking-wider uppercase transition-all duration-150 hover:bg-[#8FE004] hover:shadow-[0_0_15px_rgba(163,255,10,0.3)] active:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-warm-white hover:text-lime focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-obsidian text-warm-white md:hidden flex flex-col justify-between p-6 pt-24"
        >
          <div className="space-y-6">
            <div className="border-b border-[#222] pb-4">
              <span className="text-[11px] font-mono tracking-widest text-lime uppercase">
                {studioConfig.statusText}
              </span>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline justify-between text-3xl font-black tracking-tight hover:text-lime transition-colors py-2 border-b border-[#1A1A1A]"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-brand-muted">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 pb-4 space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-lime text-obsidian py-4 font-black text-sm tracking-wider uppercase"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
            <div className="flex justify-between items-center text-[10px] font-mono text-brand-muted tracking-widest uppercase pt-2">
              <span>{studioConfig.descriptor}</span>
              <span>EDITION {studioConfig.edition}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
