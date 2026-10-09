import { motion } from "framer-motion";

import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { Logo } from "@/components/site/Logo";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { UserMenu } from "@/components/site/UserMenu";
import { ease } from "@/lib/motion";
import type { Session } from "@/lib/types";
import { cn } from "@/lib/utils";

const links = [
  { label: "IDE", href: "/" },
  { label: "GitHub’s Compiler", href: "/github" },
];

export function Navbar({ active, session }: { active?: string; session: Session }) {
  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-3 z-30 mx-auto w-[min(76rem,calc(100%-1.5rem))]"
      initial={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: ease.out }}
    >
      <nav aria-label="Main" className="flex h-14 items-center justify-between gap-3 rounded-2xl border border-line bg-bg-1/75 pr-2 pl-3 shadow-lg shadow-black/5 backdrop-blur-xl">
        <Logo />
        <div className="hidden items-center md:flex">
          <AnimatedBackground className="rounded-lg bg-bg-3" enableHover transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}>
            {links.map((link) => (
              <a
                aria-current={active === link.href ? "page" : undefined}
                className={cn("relative rounded-lg px-3.5 py-2 text-sm transition-colors", active === link.href ? "text-fg" : "text-fg-muted hover:text-fg")}
                data-id={link.href}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </AnimatedBackground>
        </div>
        <div className="flex items-center gap-1">
          <a className="rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg md:hidden" href={active === "/github" ? "/" : "/github"}>
            {active === "/github" ? "IDE" : "GitHub"}
          </a>
          <ThemeToggle />
          <UserMenu session={session} />
        </div>
      </nav>
    </motion.header>
  );
}
