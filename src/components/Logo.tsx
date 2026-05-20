export function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lg-p" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="oklch(0.86 0.18 95)" />
            <stop offset="100%" stopColor="oklch(0.7 0.2 30)" />
          </linearGradient>
          <linearGradient id="lg-s" x1="0" y1="0" x2="0" y2="40">
            <stop offset="0%" stopColor="oklch(0.55 0.22 290)" />
            <stop offset="100%" stopColor="oklch(0.35 0.18 290)" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#lg-s)" />
        {/* stylized P + AI spark */}
        <path
          d="M11 9h10.5c4.1 0 7 2.8 7 6.8 0 4-2.9 6.7-7 6.7H17v8.5h-6V9z M17 14v4h3.8c1.4 0 2.4-.8 2.4-2s-1-2-2.4-2H17z"
          fill="url(#lg-p)"
        />
        <circle cx="31" cy="11" r="2.5" fill="oklch(0.86 0.18 95)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-black tracking-tighter">
          PadhAI<span className="text-primary">.</span>
        </span>
        <span className="text-[8px] font-mono text-muted-foreground tracking-[0.2em] uppercase">
          edtech · v1.0
        </span>
      </div>
    </div>
  );
}
