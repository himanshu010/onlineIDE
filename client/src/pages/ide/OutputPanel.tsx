import { AnimatePresence, motion } from "framer-motion";
import { Check, CircleAlert, Copy, Eraser, Terminal } from "lucide-react";
import { useState } from "react";

import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import { Kbd } from "@/components/ui/button";
import { ease, useReducedMotionSafe } from "@/lib/motion";
import { cn, modKey } from "@/lib/utils";

export type RunState =
  | { status: "idle" }
  | { status: "running" }
  | { status: "done"; output: string; cpuTime: string | null; memory: string | null; isError: boolean }
  | { status: "failed"; message: string };

const iconButton = "grid size-8 place-items-center rounded-md text-fg-faint transition-colors hover:bg-bg-2 hover:text-fg disabled:opacity-40";

function StatusChip({ state }: { state: RunState }) {
  const content =
    state.status === "running" ? (
      <TextShimmer className="font-mono text-xs" duration={1.4}>
        Running…
      </TextShimmer>
    ) : state.status === "done" ? (
      <span className={cn("inline-flex items-center gap-1.5 font-mono text-xs", state.isError ? "text-danger" : "text-success")}>
        {state.isError ? <CircleAlert aria-hidden className="size-3.5" /> : <Check aria-hidden className="size-3.5" />}
        {state.isError ? "Error" : `${state.cpuTime ?? "?"} s · ${state.memory ?? "?"} KB`}
      </span>
    ) : state.status === "failed" ? (
      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-danger">
        <CircleAlert aria-hidden className="size-3.5" />
        Didn’t run
      </span>
    ) : (
      <span className="font-mono text-xs text-fg-faint">Ready</span>
    );
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.span animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} initial={{ opacity: 0, y: 6 }} key={state.status === "done" ? `done-${state.isError}` : state.status} transition={{ duration: 0.2, ease: ease.out }}>
        {content}
      </motion.span>
    </AnimatePresence>
  );
}

export function OutputPanel({ onClear, state }: { onClear: () => void; state: RunState }) {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotionSafe();
  const text = state.status === "done" ? state.output : "";

  return (
    <section aria-labelledby="output-title" className="relative flex h-full min-h-0 flex-col bg-bg-1">
      {state.status === "running" && !reduce ? <BorderTrail className="bg-gradient-to-l from-run/0 via-run to-run/0" size={120} /> : null}
      <header className="flex h-11 shrink-0 items-center justify-between gap-2 border-b px-3">
        <div className="flex items-center gap-3">
          <h2 className="font-mono text-xs font-medium tracking-wide text-fg-muted uppercase" id="output-title">
            Output
          </h2>
          <StatusChip state={state} />
        </div>
        <div className="flex items-center">
          <button
            aria-label={copied ? "Copied" : "Copy output"}
            className={iconButton}
            disabled={!text}
            onClick={async () => {
              await navigator.clipboard.writeText(text);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1500);
            }}
            type="button"
          >
            {copied ? <Check aria-hidden className="size-4 text-success" /> : <Copy aria-hidden className="size-4" />}
          </button>
          <button aria-label="Clear output" className={iconButton} disabled={state.status === "idle" || state.status === "running"} onClick={onClear} type="button">
            <Eraser aria-hidden className="size-4" />
          </button>
        </div>
      </header>
      <div className="min-h-0 flex-1 overflow-auto">
        <AnimatePresence initial={false} mode="wait">
          {state.status === "running" ? (
            <motion.div animate={{ opacity: 1 }} className="space-y-2.5 p-4" exit={{ opacity: 0 }} initial={{ opacity: 0 }} key="running">
              {[72, 54, 86, 38].map((width, index) => (
                <motion.div
                  animate={reduce ? undefined : { opacity: [0.35, 0.8, 0.35] }}
                  className="h-3 rounded bg-bg-3"
                  key={width}
                  style={{ width: `${width}%` }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: index * 0.12 }}
                />
              ))}
            </motion.div>
          ) : state.status === "done" ? (
            <motion.pre
              animate={{ opacity: 1, y: 0 }}
              className={cn("min-h-full p-4 font-mono text-[0.8125rem] leading-relaxed break-words whitespace-pre-wrap", state.isError ? "bg-danger-bg text-danger" : "text-fg")}
              initial={{ opacity: 0, y: 6 }}
              key="done"
              tabIndex={0}
              transition={{ duration: 0.25, ease: ease.out }}
            >
              {state.output || <span className="text-fg-faint">The program printed nothing.</span>}
            </motion.pre>
          ) : state.status === "failed" ? (
            <motion.div animate={{ opacity: 1 }} className="flex items-start gap-3 p-4 text-sm text-danger" initial={{ opacity: 0 }} key="failed" role="alert">
              <CircleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
              <p>{state.message}</p>
            </motion.div>
          ) : (
            <motion.div animate={{ opacity: 1 }} className="grid h-full place-items-center p-6 text-center" initial={{ opacity: 0 }} key="idle">
              <div className="max-w-xs">
                <Terminal aria-hidden className="mx-auto size-6 text-fg-faint" />
                <p className="mt-3 text-sm text-fg-muted">Run your code to see its output here.</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs whitespace-nowrap text-fg-faint">
                  <Kbd>{modKey}</Kbd> <Kbd>Enter</Kbd> runs it
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
