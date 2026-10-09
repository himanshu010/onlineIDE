import { motion } from "framer-motion";
import { Bookmark, Link2, Play } from "lucide-react";
import { type ReactNode } from "react";

import { BorderBeam } from "@/components/magicui/border-beam";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { Logo } from "@/components/site/Logo";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { ease, useReducedMotionSafe } from "@/lib/motion";
import { useMediaQuery } from "@/lib/useMediaQuery";

// Line, colour. Commands type out; output fades in; under reduced motion all of it is just there.
const session: [string, string][] = [
  ["$ g++ hello.cpp -o hello && ./hello", "text-fg-faint"],
  ["Hello from OnlineIDE!", "text-fg"],
  ["✓ 0.01 s · 3,384 KB", "text-success"],
  ["$ python3 sum.py < input.txt", "text-fg-faint"],
  ["42", "text-fg"],
];

const perks = [
  { icon: Bookmark, text: "Save programs with their input" },
  { icon: Link2, text: "Share a link to any saved program" },
  { icon: Play, text: "Run C, C++, Python, Java, PHP and Ruby" },
];

function Showcase() {
  const reduce = useReducedMotionSafe();
  return (
    <aside aria-label="What an account gives you" className="relative hidden overflow-hidden border-l bg-bg-1 lg:flex lg:flex-col lg:justify-center lg:px-14">
      {reduce ? null : <FlickeringGrid className="absolute inset-0 -z-0 [mask-image:radial-gradient(70%_60%_at_50%_45%,#000,transparent)]" color="rgb(96, 165, 250)" flickerChance={0.08} gridGap={7} maxOpacity={0.18} squareSize={3} />}
      <div className="relative">
        <div aria-hidden className="relative">
          <Terminal className="min-h-48 max-w-none rounded-2xl border-line-strong bg-bg/80 font-mono text-sm shadow-2xl shadow-black/30 backdrop-blur-xl" sequence={!reduce}>
            {session.map(([line, tone]) =>
              reduce ? (
                <span className={tone} key={line}>
                  {line}
                </span>
              ) : line.startsWith("$") ? (
                <TypingAnimation className={tone} key={line}>
                  {line}
                </TypingAnimation>
              ) : (
                <AnimatedSpan className={tone} key={line}>
                  {line}
                </AnimatedSpan>
              ),
            )}
          </Terminal>
          <BorderBeam colorFrom="#60a5fa" colorTo="#22c55e" duration={10} size={180} />
        </div>
        <ul className="mt-10 grid gap-3">
          {perks.map((perk) => (
            <li className="flex items-center gap-3 text-fg-muted" key={perk.text}>
              <span className="grid size-8 place-items-center rounded-lg border bg-bg-2">
                <perk.icon aria-hidden className="size-4 text-focus" />
              </span>
              {perk.text}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function AuthLayout({ children, subtitle, title }: { children: ReactNode; subtitle?: ReactNode; title: ReactNode }) {
  const wide = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="grid min-h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <div className="flex flex-col px-5 py-5 sm:px-10">
        <header className="flex items-center justify-between">
          <Logo />
          <ThemeToggle />
        </header>
        <main className="flex flex-1 items-center justify-center py-12" id="main">
          <motion.div animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm" initial={{ opacity: 0, y: 14 }} transition={{ duration: 0.5, ease: ease.out }}>
            <h1 className="text-[1.875rem] leading-tight font-semibold tracking-tight">{title}</h1>
            {subtitle ? <p className="mt-2 text-fg-muted">{subtitle}</p> : null}
            <div className="mt-8">{children}</div>
          </motion.div>
        </main>
      </div>
      {wide ? <Showcase /> : null}
    </div>
  );
}

export function FormMessage({ children, tone = "error" }: { children?: ReactNode; tone?: "error" | "info" }) {
  if (!children) return null;
  return (
    <p className={tone === "error" ? "mb-5 rounded-lg border border-danger/30 bg-danger-bg px-3.5 py-2.5 text-sm text-danger" : "mb-5 rounded-lg border border-focus/30 bg-focus/10 px-3.5 py-2.5 text-sm text-fg"} role={tone === "error" ? "alert" : "status"}>
      {children}
    </p>
  );
}
