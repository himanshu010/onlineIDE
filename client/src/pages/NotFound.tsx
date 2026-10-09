import { motion } from "framer-motion";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { HyperText } from "@/components/magicui/hyper-text";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/button";
import { ease, useReducedMotionSafe } from "@/lib/motion";
import type { PageProps } from "@/lib/types";

export default function NotFound({ session }: PageProps) {
  const reduce = useReducedMotionSafe();
  return (
    <PageShell session={session}>
      <div className="relative isolate">
        {reduce ? null : (
          <FlickeringGrid className="absolute inset-0 -z-10 [mask-image:radial-gradient(50%_60%_at_50%_40%,#000,transparent)]" color="rgb(139, 92, 246)" flickerChance={0.06} gridGap={8} maxOpacity={0.2} squareSize={3} />
        )}
        <motion.div animate={{ opacity: 1, y: 0 }} className="container-page max-w-xl pt-20 pb-10 text-center md:pt-28" initial={{ opacity: 0, y: 14 }} transition={{ duration: 0.5, ease: ease.out }}>
          <h1 aria-label="Page not found">
            <span aria-hidden className="block font-mono text-[clamp(5rem,3rem+10vw,9rem)] leading-none font-semibold tracking-tighter">
              {reduce ? "404" : <HyperText as="span" className="inline-block py-0 font-mono text-[length:inherit] leading-none font-semibold" duration={900} startOnView={false}>404</HyperText>}
            </span>
          </h1>
          <p className="mt-6 text-lg text-fg-muted">There’s nothing at this address. The link may be old, or the repository may have moved.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <ButtonLink href="/" variant="primary">
              Open the IDE
            </ButtonLink>
            <ButtonLink href="/github" variant="outline">
              GitHub’s Compiler
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}
