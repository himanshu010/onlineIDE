import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type MenuItem = { label: string; href: string; icon?: ReactNode };

// A menu button (WAI-ARIA pattern): arrow keys move between items, Escape closes and returns focus.
export function Menu({ align = "end", items, label, trigger, triggerClassName }: { align?: "start" | "end"; items: MenuItem[]; label: string; trigger: ReactNode; triggerClassName?: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const links = useRef<(HTMLAnchorElement | null)[]>([]);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    requestAnimationFrame(() => links.current[0]?.focus());
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  const onKeyDown = (event: KeyboardEvent) => {
    const index = links.current.findIndex((link) => link === document.activeElement);
    if (event.key === "Escape") {
      setOpen(false);
      button.current?.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      links.current[(index + 1) % items.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      links.current[(index - 1 + items.length) % items.length]?.focus();
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div className="relative" onKeyDown={onKeyDown} ref={root}>
      <button
        aria-controls={open ? id : undefined}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={label}
        className={triggerClassName}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !open) {
            event.preventDefault();
            setOpen(true);
          }
        }}
        ref={button}
        type="button"
      >
        {trigger}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            aria-label={label}
            className={cn(
              "absolute top-[calc(100%+0.5rem)] z-40 min-w-52 rounded-xl border border-line-strong bg-bg-1/95 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-md",
              align === "end" ? "right-0 origin-top-right" : "left-0 origin-top-left",
            )}
            exit={{ opacity: 0, scale: 0.96, y: -4, transition: { duration: 0.12 } }}
            id={id}
            initial={{ opacity: 0, scale: 0.96, y: -4 }}
            role="menu"
            transition={{ duration: 0.18, ease: ease.out }}
          >
            {items.map((item, index) => (
              <a
                className="flex h-10 items-center gap-2.5 rounded-lg px-3 text-sm text-fg-muted outline-none transition-colors hover:bg-bg-2 hover:text-fg focus-visible:bg-bg-2 focus-visible:text-fg"
                href={item.href}
                key={item.href}
                ref={(element) => {
                  links.current[index] = element;
                }}
                role="menuitem"
                tabIndex={-1}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
