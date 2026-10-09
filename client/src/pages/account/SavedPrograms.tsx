import { motion } from "framer-motion";
import { Check, FileCode2, Link2, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/button";
import { inputClass } from "@/components/ui/field";
import { languageById } from "@/lib/languages";
import { ease } from "@/lib/motion";
import type { PageProps, SavedProgram, SavedProgramsProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const dateFormat = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric" });

function CopyLink({ program }: { program: SavedProgram }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      aria-label={copied ? "Link copied" : `Copy a link to ${program.name}`}
      className="grid size-9 place-items-center rounded-lg text-fg-faint pointer-coarse:size-11 transition-colors hover:bg-bg-3 hover:text-fg"
      onClick={async () => {
        await navigator.clipboard.writeText(`${location.origin}/program/${program.id}`);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      }}
      type="button"
    >
      {copied ? <Check aria-hidden className="size-4 text-success" /> : <Link2 aria-hidden className="size-4" />}
    </button>
  );
}

export default function SavedPrograms({ programs, session }: SavedProgramsProps & PageProps) {
  const [query, setQuery] = useState("");
  const shown = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return [...programs].reverse().filter((program) => program.name.toLowerCase().includes(needle) || languageById(program.language).label.toLowerCase().includes(needle));
  }, [programs, query]);

  return (
    <PageShell session={session}>
      <div className="container-page max-w-4xl pt-14 md:pt-20">
        <motion.div animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-end justify-between gap-4" initial={{ opacity: 0, y: 12 }} transition={{ duration: 0.45, ease: ease.out }}>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Saved programs</h1>
            <p className="mt-2 text-fg-muted">
              {programs.length} saved. Each one has a link you can share.
            </p>
          </div>
          <ButtonLink href="/" size="sm" variant="primary">
            <Plus aria-hidden />
            New program
          </ButtonLink>
        </motion.div>

        <div className="mt-8 overflow-hidden rounded-2xl border bg-bg-1">
          {programs.length ? (
            <div className="border-b p-3">
              <label className="sr-only" htmlFor="filter">
                Filter programs
              </label>
              <div className="relative">
                <Search aria-hidden className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-faint" />
                <input className={cn(inputClass, "h-10 pl-9 text-sm pointer-coarse:h-11 pointer-coarse:text-base")} id="filter" onChange={(event) => setQuery(event.target.value)} placeholder="Filter by name or language" type="search" value={query} />
              </div>
            </div>
          ) : null}
          <motion.ul animate="show" initial="hidden" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}>
            {shown.map((program) => (
              <motion.li className="flex items-center gap-3 border-b px-4 last:border-b-0 hover:bg-bg-2" key={program.id} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: ease.out } } }}>
                <FileCode2 aria-hidden className="size-4 shrink-0 text-run" />
                <a className="min-w-0 flex-1 py-3.5" href={`/program/${program.id}`}>
                  <span className="block truncate font-medium">{program.name}</span>
                  <span className="mt-0.5 block font-mono text-xs text-fg-faint">
                    {languageById(program.language).label}
                    {program.date ? ` · ${dateFormat.format(new Date(program.date))}` : ""}
                  </span>
                </a>
                <CopyLink program={program} />
              </motion.li>
            ))}
          </motion.ul>
          {shown.length === 0 ? (
            <div className="px-6 py-14 text-center">
              <p className="text-fg-muted">{programs.length ? `Nothing matches “${query}”.` : "No saved programs yet."}</p>
              {programs.length ? null : (
                <p className="mt-1 text-sm text-fg-faint">
                  Write something in the IDE and press Save. <a className="link" href="/">Open the IDE</a>
                </p>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </PageShell>
  );
}
