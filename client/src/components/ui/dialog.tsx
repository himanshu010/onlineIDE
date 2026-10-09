import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { ease } from "@/lib/motion";

// A native <dialog> (focus trap, Escape and inert page for free) whose panel animates in and out.
export function Dialog({ children, description, onClose, open, title }: { children: ReactNode; description?: ReactNode; onClose: () => void; open: boolean; title: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(open);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (open && mounted && dialog && !dialog.open) dialog.showModal();
  }, [open, mounted]);

  if (!mounted) return null;
  return createPortal(
    <dialog
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={titleId}
      className="m-auto max-h-none max-w-none bg-transparent p-4 text-fg backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      ref={ref}
    >
      <AnimatePresence
        onExitComplete={() => {
          ref.current?.close();
          setMounted(false);
        }}
      >
        {open ? (
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-[min(26rem,calc(100vw-2rem))] rounded-2xl border border-line-strong bg-bg-1 p-6 shadow-2xl shadow-black/40"
            exit={{ opacity: 0, scale: 0.96, y: 8, transition: { duration: 0.16 } }}
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.28, ease: ease.out }}
          >
            <button aria-label="Close" className="absolute top-3 right-3 grid size-9 place-items-center rounded-md text-fg-faint transition-colors hover:bg-bg-2 hover:text-fg" onClick={onClose} type="button">
              <X aria-hidden className="size-4" />
            </button>
            <h2 className="pr-8 text-lg font-semibold" id={titleId}>
              {title}
            </h2>
            {description ? (
              <p className="mt-1.5 text-sm text-fg-muted" id={descriptionId}>
                {description}
              </p>
            ) : null}
            <div className="mt-5">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </dialog>,
    document.body,
  );
}
