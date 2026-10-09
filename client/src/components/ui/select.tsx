import { ChevronDown } from "lucide-react";
import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

// A native select (keyboard, screen readers and mobile pickers work as expected), styled to match.
export function Select({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <div className={cn("relative", className)}>
      <select
        className="h-9 w-full cursor-pointer appearance-none rounded-lg border border-line-strong bg-bg-1 pr-8 pl-3 text-sm text-fg pointer-coarse:h-11 pointer-coarse:text-base transition-colors hover:border-input-border focus-visible:border-focus"
        {...props}
      >
        {children}
      </select>
      <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-fg-faint" />
    </div>
  );
}
