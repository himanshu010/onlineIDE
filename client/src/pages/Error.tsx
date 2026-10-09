import { motion } from "framer-motion";
import { Gauge, TriangleAlert } from "lucide-react";

import { GithubIcon } from "@/components/site/GithubIcon";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/button";
import { ease } from "@/lib/motion";
import type { ErrorProps, PageProps } from "@/lib/types";

export default function ErrorPage({ errno, error, rateExceeded, session }: ErrorProps & PageProps) {
  const returnTo = typeof window === "undefined" ? "/github" : `${location.pathname}${location.search}`;
  return (
    <PageShell session={session}>
      <motion.div animate={{ opacity: 1, y: 0 }} className="container-page max-w-xl pt-20 text-center md:pt-28" initial={{ opacity: 0, y: 14 }} transition={{ duration: 0.5, ease: ease.out }}>
        <div className="mx-auto grid size-14 place-items-center rounded-2xl border bg-bg-1">
          {rateExceeded ? <Gauge aria-hidden className="size-6 text-warn" /> : <TriangleAlert aria-hidden className="size-6 text-danger" />}
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">{rateExceeded ? "GitHub’s request limit is used up" : "Something went wrong"}</h1>
        <p className="mt-3 break-words text-fg-muted">
          {rateExceeded ? "Visitors who aren’t signed in share 60 GitHub requests an hour. Sign in with GitHub to use your own limit and carry on." : error || "The page could not be loaded."}
        </p>
        {errno && !rateExceeded ? <p className="mt-2 font-mono text-sm text-fg-faint">{String(errno)}</p> : null}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {rateExceeded ? (
            <ButtonLink href={`/auth?parent_url=${encodeURIComponent(returnTo)}`} variant="primary">
              <GithubIcon className="size-4" />
              Sign in with GitHub
            </ButtonLink>
          ) : null}
          <ButtonLink href="/" variant={rateExceeded ? "outline" : "primary"}>
            Open the IDE
          </ButtonLink>
        </div>
      </motion.div>
    </PageShell>
  );
}
