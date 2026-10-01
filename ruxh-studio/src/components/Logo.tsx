import React from "react";

interface LogoProps {
  variant?: "light" | "dark" | "reversed" | "icon";
  showTagline?: boolean;
  className?: string;
}

/**
 * RUXH Official Wordmark Component
 *
 * Geometric architecture matching the brand identity specifications:
 * - High-contrast bold sans-serif letterforms for R, U, H
 * - Signature Electric Lime (#A3FF0A) for the X motif
 * - Swappable SVG architecture for drop-in vector assets without layout shift.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  showTagline = false,
  className = "h-8 w-auto",
}) => {
  // Determine fill colors based on background context
  const textFill =
    variant === "reversed"
      ? "#0B0B0B"
      : variant === "light"
      ? "#0B0B0B"
      : "#F5F5F0";

  const xFill = variant === "reversed" ? "#0B0B0B" : "#A3FF0A";

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="RUXH Icon"
        role="img"
      >
        <path
          d="M8 8 L18 8 L24 17.5 L30 8 L40 8 L29.5 24 L40 40 L30 40 L24 30.5 L18 40 L8 40 L18.5 24 Z"
          fill={xFill}
        />
      </svg>
    );
  }

  return (
    <div className="inline-flex flex-col items-start select-none">
      <svg
        viewBox="0 0 250 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="RUXH"
        role="img"
      >
        {/* R */}
        <g fill={textFill}>
          <path d="M6 6 H32 C41 6 47 11 47 19 C47 25 43 29.5 36 31 L48 50 H34 L23.5 33 H19 V50 H6 V6 Z M19 16.5 V23.5 H31 C34 23.5 35.5 21.8 35.5 20 C35.5 18.2 34 16.5 31 16.5 H19 Z" />
        </g>

        {/* U */}
        <g fill={textFill}>
          <path d="M62 6 H75 V31.5 C75 36.5 78 40 83.5 40 C89 40 92 36.5 92 31.5 V6 H105 V31.5 C105 43.5 96.5 50.5 83.5 50.5 C70.5 50.5 62 43.5 62 31.5 V6 Z" />
        </g>

        {/* X (Signature Electric Lime) */}
        <g fill={xFill}>
          <path d="M120 6 H135.5 L149 26 L162.5 6 H178 L157.5 28 L179 50 H163.5 L149 30 L134.5 50 H119 L140.5 28 Z" />
        </g>

        {/* H */}
        <g fill={textFill}>
          <path d="M194 6 H207 V22.5 H227 V6 H240 V50 H227 V33.5 H207 V50 H194 V6 Z" />
        </g>
      </svg>

      {showTagline && (
        <span
          className="mt-1.5 font-sans text-[9px] tracking-[0.28em] uppercase font-bold"
          style={{ color: textFill }}
        >
          SOCIAL CREATIVE STUDIO
        </span>
      )}
    </div>
  );
};
