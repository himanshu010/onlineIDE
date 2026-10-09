import { Moon, Sun } from "lucide-react";

import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { useReducedMotionSafe } from "@/lib/motion";
import { setTheme, useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const buttonClass = "grid size-10 place-items-center pointer-coarse:size-11 rounded-lg text-fg-muted transition-colors hover:bg-bg-2 hover:text-fg";

// Magic UI's toggler reveals the new theme in a circle from the button; under reduced motion the
// theme simply switches.
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme();
  const reduce = useReducedMotionSafe();
  if (reduce) {
    const next = theme === "dark" ? "light" : "dark";
    return (
      <button className={cn(buttonClass, className)} onClick={() => setTheme(next)} type="button">
        {theme === "dark" ? <Sun aria-hidden className="size-[18px]" /> : <Moon aria-hidden className="size-[18px]" />}
        <span className="sr-only">{`Switch to ${next} theme`}</span>
      </button>
    );
  }
  return <AnimatedThemeToggler className={cn(buttonClass, className)} onThemeChange={setTheme} theme={theme} />;
}
