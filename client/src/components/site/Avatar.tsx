import { cn, initials } from "@/lib/utils";

export function Avatar({ className, first, last, photo }: { className?: string; first?: string; last?: string; photo?: string | null }) {
  if (photo) return <img alt="" className={cn("size-8 rounded-full object-cover ring-1 ring-line-strong", className)} src={photo} />;
  return (
    <span aria-hidden className={cn("grid size-8 place-items-center rounded-full bg-gradient-to-br from-glow-a to-glow-b font-mono text-xs font-semibold text-white", className)}>
      {initials(first, last)}
    </span>
  );
}
