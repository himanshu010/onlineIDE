import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={cn("size-8", className)} fill="none" viewBox="0 0 32 32">
      <rect className="fill-bg-2 stroke-line-strong" height="31" rx="8.5" width="31" x="0.5" y="0.5" />
      <path className="stroke-fg" d="M12.5 11 7.5 16l5 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path className="stroke-run" d="M18 9.5 14.5 22.5" strokeLinecap="round" strokeWidth="2" />
      <path className="stroke-fg" d="M19.5 11l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function Logo({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <a aria-label="OnlineIDE" className={cn("inline-flex items-center gap-2.5 rounded-lg font-mono pointer-coarse:min-h-11 pointer-coarse:min-w-11 pointer-coarse:justify-center text-[0.9375rem] font-semibold tracking-tight text-fg", className)} href={href}>
      <LogoMark />
      <span>
        Online<span className="text-run">IDE</span>
      </span>
    </a>
  );
}
