import type { Metadata, Viewport } from "next";
import "./globals.css";
import { studioConfig } from "@/config/studio";

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: studioConfig.meta.title,
  description: studioConfig.meta.description,
  metadataBase: new URL(studioConfig.meta.url),
  keywords: [
    "RUXH",
    "Social Creative Studio",
    "Web Design Studio",
    "Graphic Design",
    "Brand Identity",
    "Advertising Agency",
    "Creative Direction",
    "Digital Experience",
  ],
  authors: [{ name: "RUXH", url: studioConfig.meta.url }],
  creator: "RUXH",
  publisher: "RUXH",
  alternates: {
    canonical: studioConfig.meta.url,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: studioConfig.meta.title,
    description: studioConfig.meta.description,
    url: studioConfig.meta.url,
    siteName: "RUXH",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: studioConfig.meta.title,
    description: studioConfig.meta.description,
    creator: "@ruxh.io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RUXH",
    alternateName: "Rush Studio",
    url: studioConfig.meta.url,
    logo: `${studioConfig.meta.url}/favicon.svg`,
    description: studioConfig.meta.description,
    email: studioConfig.email,
    sameAs: [studioConfig.socials.instagram],
    knowsAbout: [
      "Web Design",
      "Graphic Design",
      "Advertising",
      "Brand Identity Systems",
      "Creative Direction",
    ],
    priceRange: "$$$",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-warm-white antialiased selection:bg-lime selection:text-obsidian min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
