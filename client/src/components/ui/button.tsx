import { type ComponentProps, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow] duration-200 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0";

const variants = {
  primary: "bg-fg text-bg hover:bg-fg/85",
  run: "bg-run text-run-fg shadow-lg shadow-run/25 hover:bg-run-hover",
  outline: "border border-line-strong bg-bg-1 text-fg hover:border-input-border hover:bg-bg-2",
  ghost: "text-fg-muted hover:bg-bg-2 hover:text-fg",
  danger: "bg-danger text-bg hover:bg-danger/85",
};

const sizes = {
  sm: "h-9 px-3 text-sm pointer-coarse:h-11 pointer-coarse:min-w-11",
  md: "h-11 px-4 text-[0.9375rem]",
  lg: "h-12 px-6 text-base",
  icon: "size-10 pointer-coarse:size-11",
};

export type ButtonStyle = { variant?: keyof typeof variants; size?: keyof typeof sizes };

export const buttonClass = ({ variant = "primary", size = "md" }: ButtonStyle = {}, className?: string) =>
  cn(base, variants[variant], sizes[size], className);

export function Button({ className, size, variant, type = "button", ...props }: ComponentProps<"button"> & ButtonStyle) {
  return <button className={buttonClass({ size, variant }, className)} type={type} {...props} />;
}

export function ButtonLink({ className, size, variant, ...props }: ComponentProps<"a"> & ButtonStyle) {
  return <a className={buttonClass({ size, variant }, className)} {...props} />;
}

export function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <kbd className={cn("rounded border border-current/25 px-1.5 py-px font-mono text-[0.6875rem] leading-4", className)}>{children}</kbd>
  );
}
