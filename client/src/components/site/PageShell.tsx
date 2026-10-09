import { type ReactNode } from "react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import type { Session } from "@/lib/types";

// Content pages: floating nav, a soft glow behind the top of the page, footer.
export function PageShell({ active, children, session }: { active?: string; children: ReactNode; session: Session }) {
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-x-clip">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--glow-a)_22%,transparent),transparent_65%)]" />
      <a className="sr-only z-50 rounded-lg bg-fg px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3" href="#main">
        Skip to content
      </a>
      <Navbar active={active} session={session} />
      <main className="flex-1" id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
