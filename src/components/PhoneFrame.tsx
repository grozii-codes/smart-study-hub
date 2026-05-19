import type { ReactNode } from "react";

export function PhoneFrame({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-status bg-transparent text-current/80">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-current opacity-70" />
              <span className="inline-block h-2 w-3 rounded-sm border border-current/70" />
            </span>
          </div>
          <div className="flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
      {label && (
        <div className="text-center max-w-[260px]">
          <p className="text-sm font-semibold text-foreground">{label}</p>
        </div>
      )}
    </div>
  );
}
