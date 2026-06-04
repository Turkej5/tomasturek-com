type LogoProps = {
  className?: string;
  size?: number;
};

export function LogoTT({ className, size = 64 }: LogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo TT — Tomáš Turek"
    >
      <defs>
        <pattern
          id="tt-dots"
          x="0"
          y="0"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1" fill="#0a0a0a" opacity="0.35" />
        </pattern>
      </defs>

      <polygon
        points="60,2 70,20 90,10 86,32 110,28 96,48 118,60 96,72 110,92 86,88 90,110 70,100 60,118 50,100 30,110 34,88 10,92 24,72 2,60 24,48 10,28 34,32 30,10 50,20"
        fill="#ffd60a"
        stroke="#0a0a0a"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <circle cx="60" cy="60" r="40" fill="#2962ff" stroke="#0a0a0a" strokeWidth="4" />
      <circle cx="60" cy="60" r="40" fill="url(#tt-dots)" />

      <g
        fontFamily="Impact, 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="62"
        textAnchor="middle"
        paintOrder="stroke"
      >
        <text
          x="46"
          y="80"
          fill="#ef233c"
          stroke="#0a0a0a"
          strokeWidth="3"
          transform="rotate(-8 46 80)"
        >
          T
        </text>
        <text
          x="78"
          y="82"
          fill="#fff3c4"
          stroke="#0a0a0a"
          strokeWidth="3"
          transform="rotate(6 78 82)"
        >
          T
        </text>
      </g>
    </svg>
  );
}
