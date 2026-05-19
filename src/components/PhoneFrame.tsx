import type { ReactNode } from "react";

export function PhoneFrame({
  children,
  label,
  no,
  features,
  tech,
}: {
  children: ReactNode;
  label?: string;
  no?: string;
  features?: string[];
  tech?: string[];
}) {
  return (
    <div className="flex flex-col items-center gap-4 w-[278px]">
      <div className="phone group">
        <div className="phone-screen">
          <div className="phone-status bg-transparent text-current/80">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="text-[9px] font-semibold tracking-tight">5G</span>
              <span className="inline-block h-2 w-2 rounded-full bg-current opacity-70" />
              <span className="inline-block h-2.5 w-4 rounded-[3px] border border-current/70 relative">
                <span className="absolute inset-[1px] right-[3px] bg-current rounded-[1px]" />
              </span>
            </span>
          </div>
          <div className="flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
      {label && (
        <div className="text-left w-full px-1">
          <div className="flex items-baseline gap-2">
            {no && (
              <span className="text-[10px] font-mono text-primary font-bold">{no}</span>
            )}
            <p className="text-[13px] font-bold text-foreground leading-tight">{label}</p>
          </div>
          {features && features.length > 0 && (
            <ul className="mt-2 space-y-0.5">
              {features.map((f) => (
                <li
                  key={f}
                  className="text-[10px] text-muted-foreground flex gap-1.5 leading-snug"
                >
                  <span className="text-primary mt-[1px]">▸</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
          {tech && tech.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-surface-2 border border-border text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
