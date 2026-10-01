export interface Project {
  id: string;
  name: string;
  category: string;
  year?: string;
  description?: string;
  deliverables?: string[];
  coverImage?: string;
  accentColor?: string;
  projectUrl?: string;
  isPlaceholder?: boolean;
  statusBadge?: string;
}

export const projects: Project[] = [
  {
    id: "frozell-cafe",
    name: "Frozell Café",
    category: "Website / Brand / Digital Experience",
    year: "2025–2026",
    description:
      "A comprehensive digital home and visual identity system created for Frozell Café, an artisanal café concept. Designed to bring the physical café ambiance onto the web with high-craft typography, tactile menu interactions, and social-first creative collateral.",
    deliverables: [
      "Brand Identity System",
      "Web Design & Frontend Development",
      "Digital Menu Architecture",
      "Social Media Campaign Creative",
    ],
    coverImage: "/projects/frozell-preview.svg",
    accentColor: "#A3FF0A",
    projectUrl: "#",
    isPlaceholder: false,
    statusBadge: "SELECTED WORK",
  },
  {
    id: "project-002",
    name: "PROJECT 002 — CASE STUDY COMING SOON",
    category: "Identity / Digital Platform",
    year: "2026",
    description:
      "Production case study currently being prepared for release. Includes responsive brand platform, interactive web architecture, and launch collateral.",
    deliverables: [
      "Web Platform",
      "Art Direction",
      "Brand Collateral",
    ],
    coverImage: "/projects/placeholder-02.svg",
    accentColor: "#1A1A1A",
    isPlaceholder: true,
    statusBadge: "IN PRODUCTION",
  },
  {
    id: "project-003",
    name: "PROJECT 003 — CASE STUDY COMING SOON",
    category: "Advertising & Campaign Systems",
    year: "2026",
    description:
      "Cross-channel advertising campaign system combining high-speed creative production, motion design, and paid social assets.",
    deliverables: [
      "Creative Strategy",
      "Campaign Creatives",
      "Social Motion Systems",
    ],
    coverImage: "/projects/placeholder-03.svg",
    accentColor: "#1A1A1A",
    isPlaceholder: true,
    statusBadge: "COMING SOON",
  },
];
