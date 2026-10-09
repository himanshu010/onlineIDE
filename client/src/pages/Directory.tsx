import { motion } from "framer-motion";
import { ChevronRight, CornerLeftUp, ExternalLink, File, FileCode2, FileJson, FileText, Folder, Image, Play, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/button";
import { inputClass } from "@/components/ui/field";
import { isRunnableFile } from "@/lib/languages";
import { ease } from "@/lib/motion";
import type { DirectoryEntry, DirectoryProps, PageProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconFor = (entry: DirectoryEntry) => {
  if (entry.type === "dir") return Folder;
  const ext = entry.name.split(".").pop()?.toLowerCase() ?? "";
  if (isRunnableFile(entry.name) || ["js", "ts", "tsx", "jsx", "go", "rs", "kt", "cs", "sh", "hbs", "html", "css"].includes(ext)) return FileCode2;
  if (ext === "json") return FileJson;
  if (["md", "txt", "rst"].includes(ext) || entry.name.toUpperCase() === "LICENSE") return FileText;
  if (["png", "jpg", "jpeg", "gif", "svg", "webp", "ico"].includes(ext)) return Image;
  return File;
};

const row = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: ease.out } } };

export default function Directory({ avatar, entries, path, repo, session, username }: DirectoryProps & PageProps) {
  const [query, setQuery] = useState("");
  const segments = path.split("/").filter(Boolean);
  const base = `/github/${username}/${repo}`;
  const parent = segments.length ? `${base}/${segments.slice(0, -1).join("/")}` : null;
  const shown = useMemo(() => entries.filter((entry) => entry.name.toLowerCase().includes(query.trim().toLowerCase())), [entries, query]);
  const runnable = entries.filter((entry) => entry.type === "file" && isRunnableFile(entry.name)).length;

  return (
    <PageShell active="/github" session={session}>
      <div className="container-page pt-12 md:pt-16">
        <motion.div animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center justify-between gap-4" initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.45, ease: ease.out }}>
          <div className="flex min-w-0 items-center gap-4">
            <img alt="" className="size-12 shrink-0 rounded-full ring-1 ring-line-strong" src={avatar} />
            <div className="min-w-0">
              <h1 className="truncate text-2xl font-semibold tracking-tight">
                <a className="text-fg-muted transition-colors hover:text-fg" href={`https://github.com/${username}`}>
                  {username}
                </a>
                <span className="px-1.5 text-fg-faint">/</span>
                <a className="transition-colors hover:text-focus" href={base}>
                  {repo}
                </a>
              </h1>
              <p className="mt-0.5 text-sm text-fg-faint">
                {entries.length} {entries.length === 1 ? "item" : "items"} here{runnable ? `, ${runnable} you can run` : ""}
              </p>
            </div>
          </div>
          <ButtonLink href={`https://github.com/${username}/${repo}${segments.length ? `/tree/HEAD/${segments.join("/")}` : ""}`} size="sm" variant="outline">
            View on GitHub
            <ExternalLink aria-hidden />
          </ButtonLink>
        </motion.div>

        <nav aria-label="Folder path" className="mt-8">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-sm">
            <li>
              <a className={cn("rounded-md px-1.5 py-1 transition-colors hover:bg-bg-2", segments.length ? "text-fg-muted" : "text-fg")} href={base} aria-current={segments.length ? undefined : "page"}>
                {repo}
              </a>
            </li>
            {segments.map((segment, index) => (
              <li className="flex items-center gap-1" key={`${segment}-${index}`}>
                <ChevronRight aria-hidden className="size-3.5 text-fg-faint" />
                <a
                  aria-current={index === segments.length - 1 ? "page" : undefined}
                  className={cn("rounded-md px-1.5 py-1 transition-colors hover:bg-bg-2", index === segments.length - 1 ? "text-fg" : "text-fg-muted")}
                  href={`${base}/${segments.slice(0, index + 1).join("/")}`}
                >
                  {segment}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-4 overflow-hidden rounded-2xl border bg-bg-1">
          <div className="border-b p-3">
            <label className="sr-only" htmlFor="filter">
              Filter files
            </label>
            <div className="relative">
              <Search aria-hidden className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-faint" />
              <input className={cn(inputClass, "h-10 pl-9 text-sm")} id="filter" onChange={(event) => setQuery(event.target.value)} placeholder="Filter files" type="search" value={query} />
            </div>
          </div>
          <motion.ul animate="show" initial="hidden" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.025 } } }}>
            {parent && !query ? (
              <motion.li variants={row}>
                <a className="flex h-12 items-center gap-3 border-b px-4 text-sm text-fg-muted transition-colors hover:bg-bg-2 hover:text-fg" href={parent}>
                  <CornerLeftUp aria-hidden className="size-4" />
                  Up one folder
                </a>
              </motion.li>
            ) : null}
            {shown.map((entry) => {
              const Icon = iconFor(entry);
              const canRun = entry.type === "file" && isRunnableFile(entry.name);
              return (
                <motion.li key={entry.href} variants={row}>
                  <a className="group flex h-12 items-center gap-3 border-b px-4 text-sm transition-colors last:border-b-0 hover:bg-bg-2" href={entry.href}>
                    <Icon aria-hidden className={cn("size-4 shrink-0", entry.type === "dir" ? "fill-focus/15 text-focus" : canRun ? "text-run" : "text-fg-faint")} />
                    <span className="min-w-0 flex-1 truncate font-mono text-fg">{entry.name}</span>
                    {canRun ? (
                      <span className="inline-flex items-center gap-1 rounded-md border border-run/30 bg-run/10 px-2 py-0.5 font-mono text-xs text-success transition-colors group-hover:border-run/60">
                        <Play aria-hidden className="size-3 fill-current" />
                        Run
                      </span>
                    ) : entry.type === "dir" ? (
                      <ChevronRight aria-hidden className="size-4 text-fg-faint transition-transform group-hover:translate-x-0.5" />
                    ) : null}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
          {shown.length === 0 ? <p className="px-4 py-10 text-center text-sm text-fg-muted">{entries.length ? `Nothing here matches “${query}”.` : "This folder is empty."}</p> : null}
        </div>
      </div>
    </PageShell>
  );
}
