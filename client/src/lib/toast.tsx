import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert, CircleCheck, Info, X } from "lucide-react";
import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";

import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Tone = "success" | "error" | "info";
type Toast = { id: number; tone: Tone; title: string; body?: ReactNode };
type Push = (toast: Omit<Toast, "id">) => void;

const ToastContext = createContext<Push>(() => {});

export const useToast = () => useContext(ToastContext);

const icons = { success: CircleCheck, error: CircleAlert, info: Info };

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const next = useRef(0);

  const dismiss = useCallback((id: number) => setToasts((list) => list.filter((toast) => toast.id !== id)), []);
  const push = useCallback<Push>(
    (toast) => {
      const id = ++next.current;
      setToasts((list) => [...list.slice(-2), { ...toast, id }]);
      window.setTimeout(() => dismiss(id), toast.tone === "error" ? 8000 : 5000);
    },
    [dismiss],
  );
  const value = useMemo(() => push, [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex flex-col items-center gap-2 px-4 sm:items-end sm:pr-6" role="status">
        <AnimatePresence initial={false}>
          {toasts.map((toast) => {
            const Icon = icons[toast.tone];
            return (
              <motion.div
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border border-line-strong bg-bg-2/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-md"
                exit={{ opacity: 0, y: 8, scale: 0.96, transition: { duration: 0.18 } }}
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                key={toast.id}
                layout
                transition={{ duration: 0.3, ease: ease.out }}
              >
                <Icon aria-hidden className={cn("mt-0.5 size-5 shrink-0", toast.tone === "success" && "text-success", toast.tone === "error" && "text-danger", toast.tone === "info" && "text-focus")} />
                <div className="min-w-0 flex-1 text-sm">
                  <p className="font-medium text-fg">{toast.title}</p>
                  {toast.body ? <div className="mt-1 text-fg-muted">{toast.body}</div> : null}
                </div>
                <button aria-label="Dismiss" className="-m-1 grid size-8 shrink-0 place-items-center rounded-md text-fg-faint transition-colors hover:bg-bg-3 hover:text-fg" onClick={() => dismiss(toast.id)} type="button">
                  <X aria-hidden className="size-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
