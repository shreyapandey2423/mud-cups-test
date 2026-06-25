import React from 'react';

interface MudCupsLogoProps {
  className?: string;
  size?: number;
}

export default function MudCupsLogo({ className = '', size = 48 }: MudCupsLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className} select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circular rim (deep teal green) */}
      <circle cx="100" cy="100" r="94" fill="#0E5E43" stroke="#FFFFFF" strokeWidth="2" />
      
      {/* Inner thin white circle line */}
      <circle cx="100" cy="100" r="86" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="80" stroke="#FFFFFF" strokeWidth="1" />

      {/* Center inner white circle */}
      <circle cx="100" cy="100" r="62" fill="#FFFFFF" stroke="#0E5E43" strokeWidth="1.5" />

      {/* Decorative dots in green ring */}
      <circle cx="28" cy="100" r="3" fill="#FFFFFF" />
      <circle cx="172" cy="100" r="3" fill="#FFFFFF" />

      {/* Brand Texts using curved SVG Text Paths */}
      <defs>
        {/* Path for "MUD CUPS" on top (clockwise) */}
        <path
          id="textPathTop"
          d="M 32,100 A 68,68 0 0,1 168,100"
          fill="none"
        />
        {/* Path for "Revoking Traditional Taste" on bottom (clockwise) */}
        <path
          id="textPathBottom"
          d="M 168,100 A 68,68 0 0,1 32,100"
          fill="none"
        />
      </defs>

      {/* Top Text "MUD CUPS" */}
      <text fill="#FFFFFF" fontSize="15" fontWeight="900" letterSpacing="0.2em" fontFamily="Inter, sans-serif">
        <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
          MUD CUPS
        </textPath>
      </text>

      {/* Bottom Text "Revoking Traditional Taste" */}
      <text fill="#FFFFFF" fontSize="9.5" fontWeight="700" letterSpacing="0.08em" fontFamily="Inter, sans-serif">
        <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
          REVOKING TRADITIONAL TASTE
        </textPath>
      </text>

      {/* Center Logo Illustration: A traditional clay kulhad cup with coffee bean/tea curves and rising steam */}
      <g transform="translate(100, 100) scale(0.95)">
        {/* Steam Waves */}
        <path
          d="M -12 -38 Q -8 -48 -12 -54 M -2 -38 Q 2 -48 -2 -54 M 8 -38 Q 12 -48 8 -54"
          stroke="#5C4033"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* Outer tea/coffee leaf/bean wrapper forming the cup */}
        <path
          d="M -32 -25 C -30 -10 -25 15 -12 28 C -2 38 2 38 12 28 C 25 15 30 -10 32 -25 C 20 -28 0 -30 -32 -25 Z"
          fill="#ECE2D0"
          stroke="#0E5E43"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Elegant internal cup swirl line (representing the handcraft feel/clay waves) */}
        <path
          d="M -18 -15 C -10 -5 10 5 18 -15 C 22 -10 18 10 8 20 C -2 28 -12 22 -18 -15 Z"
          fill="#BE8F62"
          opacity="0.3"
        />

        {/* Signature purple line details in the center as in original branding logo */}
        <path
          d="M -15 -18 C -5 -12 5 -12 15 -18 M -22 -6 C -10 2 10 2 22 -6 M -12 10 C -4 16 4 16 12 10"
          stroke="#8A4F7D"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        {/* Mud Cup bottom rim */}
        <path
          d="M -10 32 C -5 36 5 36 10 32 L 6 36 C 3 38 -3 38 -6 36 Z"
          fill="#BE8F62"
          stroke="#0E5E43"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
