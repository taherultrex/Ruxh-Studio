import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { AISection } from "@/components/AISection";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { WhyRuxh } from "@/components/WhyRuxh";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-obsidian text-warm-white selection:bg-lime selection:text-obsidian">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Studio Editorial Flow */}
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <AISection />
        <Process />
        <About />
        <WhyRuxh />
        <CTA />
        <Contact />
      </main>

      {/* Studio Signoff & Footer */}
      <Footer />
    </div>
  );
}
