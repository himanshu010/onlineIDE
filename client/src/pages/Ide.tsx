import { motion } from "framer-motion";
import { FolderGit2, LoaderCircle, Minus, Play, Plus, Save } from "lucide-react";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { CodePreview } from "@/components/ide/CodePreview";
import { editorThemes, type EditorThemeId } from "@/components/ide/editorThemeList";
import { Logo } from "@/components/site/Logo";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { UserMenu } from "@/components/site/UserMenu";
import { Button, Kbd } from "@/components/ui/button";
import { TextArea } from "@/components/ui/field";
import { Select } from "@/components/ui/select";
import { ApiError, runCode, saveProgram } from "@/lib/api";
import { languageById, languages, starterCode, type LanguageId } from "@/lib/languages";
import { ease } from "@/lib/motion";
import { useToast } from "@/lib/toast";
import type { IdeProps, PageProps } from "@/lib/types";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { cn, modKey } from "@/lib/utils";
import { OutputPanel, type RunState } from "@/pages/ide/OutputPanel";
import { SaveDialog } from "@/pages/ide/SaveDialog";

const CodeEditor = lazy(() => import("@/components/ide/CodeEditor"));

const stored = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const store = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Unavailable storage only means the preference is not remembered.
  }
};
const draftKey = (id: LanguageId) => `oide-draft-${id}`;
// Phones and tablets start at 16 px: iOS zooms the page in when text under 16 px gets focus.
const coarsePointer = () => window.matchMedia("(pointer: coarse)").matches;

type Tab = "code" | "input" | "output";

export default function Ide({ code, cpuTime, github, isError, isJava, language, memory, program, runnable, session, stdin, stdout }: IdeProps & PageProps) {
  const toast = useToast();
  // Code that came with the page (a GitHub file, a saved program, a form post) is not a scratch draft.
  const fromPage = code !== undefined && code !== null && code !== "";
  const [languageId, setLanguageId] = useState<LanguageId>(() => languageById(language ?? stored("oide-language") ?? undefined).id);
  const [source, setSource] = useState(() => (fromPage ? code : (stored(draftKey(languageId)) ?? starterCode(languageId))));
  const [input, setInput] = useState(stdin ?? "");
  const [run, setRun] = useState<RunState>(() =>
    stdout !== undefined && stdout !== null ? { status: "done", output: stdout, cpuTime: cpuTime ?? null, memory: memory ?? null, isError: Boolean(isError) } : { status: "idle" },
  );
  const [editorTheme, setEditorTheme] = useState<EditorThemeId>(() => (editorThemes.find((theme) => theme.id === stored("oide-editor-theme"))?.id ?? "auto"));
  const [fontSize, setFontSize] = useState(() => Math.min(22, Math.max(11, Number(stored("oide-font-size")) || (coarsePointer() ? 16 : 14))));
  const [cursor, setCursor] = useState({ line: 1, column: 1 });
  const [saveOpen, setSaveOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("code");
  const [announce, setAnnounce] = useState("");
  const scratch = useRef(!fromPage);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const lang = languageById(languageId);
  // The editor mounts after the first paint: the code is on screen as CodePreview before CodeMirror's
  // setup runs, and that setup is its own task instead of part of the first render.
  const [editorMounted, setEditorMounted] = useState(false);

  useEffect(() => {
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setEditorMounted(true));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!scratch.current) return;
    const timer = window.setTimeout(() => store(draftKey(languageId), source), 400);
    return () => window.clearTimeout(timer);
  }, [source, languageId]);

  const changeLanguage = (next: LanguageId) => {
    store("oide-language", next);
    if (scratch.current) {
      store(draftKey(languageId), source);
      setSource(stored(draftKey(next)) ?? starterCode(next));
    }
    setLanguageId(next);
  };

  const execute = useCallback(async () => {
    if (run.status === "running") return;
    setRun({ status: "running" });
    setTab("output");
    setAnnounce("Running");
    try {
      const result = await runCode(languageId, source, input);
      setRun({ status: "done", ...result });
      setAnnounce(result.isError ? "Finished with an error" : "Finished");
    } catch (error) {
      const message = error instanceof ApiError ? error.message : "The code runner could not be reached. Check your connection and try again.";
      setRun({ status: "failed", message });
      setAnnounce("The code did not run");
    }
  }, [input, languageId, run.status, source]);

  // The same shortcuts outside the editor (the input box, the toolbar); the editor's own keymap
  // handles them inside it and marks the event handled.
  const shortcuts = useRef({ execute, openSave: () => setSaveOpen(true) });
  shortcuts.current = { execute, openSave: () => setSaveOpen(true) };
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || !(event.metaKey || event.ctrlKey) || document.querySelector("dialog[open]")) return;
      if (event.key === "Enter") {
        event.preventDefault();
        shortcuts.current.execute();
      } else if (event.key.toLowerCase() === "s") {
        event.preventDefault();
        shortcuts.current.openSave();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const save = async (name: string) => {
    try {
      const saved = await saveProgram({ name, language: languageId, script: source, stdin: input });
      const link = `${location.origin}${saved.url}`;
      toast({
        tone: "success",
        title: `Saved “${name}”`,
        body: (
          <span className="flex flex-wrap gap-x-3 gap-y-1">
            <a className="link" href={saved.url}>
              Open
            </a>
            <button className="link" onClick={() => navigator.clipboard.writeText(link)} type="button">
              Copy link
            </button>
            <a className="link" href="/user/programs">
              All saved programs
            </a>
          </span>
        ),
      });
      return true;
    } catch (error) {
      toast({ tone: "error", title: "Not saved", body: error instanceof ApiError ? error.message : "The server could not be reached." });
      return false;
    }
  };

  const fileName = github?.path.split("/").filter(Boolean).pop();
  const defaultName = program?.name ?? fileName ?? `Untitled ${lang.label} program`;

  const preview = <CodePreview code={source} fontSize={fontSize} />;
  const editor = (
    <section aria-label={`Code editor, ${lang.label}`} className="relative h-full min-h-0 bg-bg-1">
      {editorMounted ? (
        <Suspense fallback={preview}>
          {/* A scratch program's language switch swaps the whole text, so it gets a fresh editor. */}
          <CodeEditor
            editorTheme={editorTheme}
            key={scratch.current ? languageId : "page"}
            fontSize={fontSize}
            mode={lang.mode}
            onChange={setSource}
            onCursor={(line, column) => setCursor({ line, column })}
            onRun={execute}
            onSave={() => setSaveOpen(true)}
            value={source}
          />
        </Suspense>
      ) : (
        preview
      )}
    </section>
  );

  const inputPanel = (
    <section aria-labelledby="input-title" className="flex h-full min-h-0 flex-col bg-bg-1">
      <header className="flex h-11 shrink-0 items-center border-b px-3">
        <h2 className="font-mono text-xs font-medium tracking-wide text-fg-muted uppercase" id="input-title">
          Input
        </h2>
        <span className="ml-2 font-mono text-xs text-fg-faint">stdin</span>
      </header>
      <TextArea
        aria-labelledby="input-title"
        className="min-h-0 flex-1 resize-none rounded-none border-0 bg-transparent font-mono text-[0.8125rem] leading-relaxed hover:border-0 focus-visible:shadow-none pointer-coarse:text-base"
        onChange={(event) => setInput(event.target.value)}
        placeholder="Anything your program reads from standard input goes here."
        spellCheck={false}
        value={input}
      />
    </section>
  );

  const output = <OutputPanel onClear={() => setRun({ status: "idle" })} state={run} />;

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-bg">
      <a className="sr-only z-50 rounded-lg bg-fg px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-2 focus:left-2" href="#workspace">
        Skip to editor
      </a>
      <motion.header
        animate={{ opacity: 1, y: 0 }}
        className="flex h-14 shrink-0 items-center gap-2 border-b bg-bg-1/80 px-2 backdrop-blur-xl sm:gap-3 sm:px-3"
        initial={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: ease.out }}
      >
        <Logo className="shrink-0 [&>span]:hidden sm:[&>span]:inline" />
        <nav aria-label="Main" className="hidden items-center lg:flex">
          <a className="rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-bg-2 hover:text-fg" href="/github">
            GitHub’s Compiler
          </a>
        </nav>
        {github ? (
          <a
            className="hidden min-w-0 items-center gap-2 rounded-lg border border-line bg-bg-2 py-1 pr-3 pl-1 text-sm text-fg-muted transition-colors hover:text-fg md:flex"
            href={`/github/${github.username}/${github.repo}`}
            title="Back to the repository"
          >
            <img alt="" className="size-6 rounded-full" src={github.avatar} />
            <span className="truncate">
              {github.username}/<span className="text-fg">{github.repo}</span>
            </span>
          </a>
        ) : null}
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <label className="sr-only" htmlFor="language">
            Language
          </label>
          <Select className="w-[7.25rem] sm:w-32" id="language" onChange={(event) => changeLanguage(event.target.value as LanguageId)} value={languageId}>
            {languages.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
          <label className="sr-only" htmlFor="editor-theme">
            Editor theme
          </label>
          <Select
            className="hidden w-44 xl:block"
            id="editor-theme"
            onChange={(event) => {
              const next = event.target.value as EditorThemeId;
              setEditorTheme(next);
              store("oide-editor-theme", next);
            }}
            value={editorTheme}
          >
            {editorThemes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
          <Button aria-keyshortcuts="Control+S Meta+S" onClick={() => setSaveOpen(true)} size="sm" title={`Save (${modKey} S)`} variant="outline">
            <Save aria-hidden />
            <span className="hidden sm:inline">Save</span>
          </Button>
          <Button aria-keyshortcuts="Control+Enter Meta+Enter" className="min-w-[5.5rem]" disabled={run.status === "running"} onClick={execute} size="sm" title={`Run (${modKey} Enter)`} variant="run">
            {run.status === "running" ? <LoaderCircle aria-hidden className="animate-spin" /> : <Play aria-hidden className="fill-current" />}
            {run.status === "running" ? "Running" : "Run"}
          </Button>
          <ThemeToggle className="hidden sm:grid" />
          <UserMenu compact session={session} />
        </div>
      </motion.header>

      <main className="flex min-h-0 flex-1 flex-col" id="workspace" tabIndex={-1}>
        <h1 className="sr-only">{github ? `${github.path} from ${github.username}/${github.repo}` : program ? program.name : "OnlineIDE"}</h1>
        {desktop ? null : (
          <div aria-label="Panels" className="flex shrink-0 border-b bg-bg-1" role="tablist">
            {(["code", "input", "output"] as const).map((item) => (
              <button
                aria-controls="panel"
                aria-selected={tab === item}
                className={cn("relative h-11 flex-1 text-sm capitalize transition-colors", tab === item ? "text-fg" : "text-fg-muted hover:text-fg")}
                id={`tab-${item}`}
                key={item}
                onClick={() => setTab(item)}
                role="tab"
                type="button"
              >
                {item}
                {tab === item ? <motion.span className="absolute inset-x-6 bottom-0 h-0.5 rounded-full bg-run" layoutId="ide-tab" transition={{ type: "spring", bounce: 0.2, duration: 0.4 }} /> : null}
              </button>
            ))}
          </div>
        )}
        {desktop ? (
          <Group className="min-h-0 flex-1" orientation="horizontal">
            <Panel defaultSize={62} minSize={30}>
              {editor}
            </Panel>
            <Separator className="w-px bg-line transition-colors hover:bg-focus data-[separator=active]:bg-focus" />
            <Panel defaultSize={38} minSize={22}>
              <Group className="h-full" orientation="vertical">
                <Panel defaultSize={34} minSize={15}>
                  {inputPanel}
                </Panel>
                <Separator className="h-px bg-line transition-colors hover:bg-focus data-[separator=active]:bg-focus" />
                <Panel defaultSize={66} minSize={20}>
                  {output}
                </Panel>
              </Group>
            </Panel>
          </Group>
        ) : (
          <div aria-labelledby={`tab-${tab}`} className="min-h-0 flex-1" id="panel" role="tabpanel">
            {tab === "code" ? editor : tab === "input" ? inputPanel : output}
          </div>
        )}
      </main>

      <footer className="flex h-8 shrink-0 items-center justify-between gap-4 border-t bg-bg-1 px-3 font-mono text-xs text-fg-faint pointer-coarse:h-11">
        <div className="flex min-w-0 items-center gap-4">
          {github ? (
            <span className="flex min-w-0 items-center gap-1.5">
              <FolderGit2 aria-hidden className="size-3.5 shrink-0" />
              <span className="truncate">{github.path}</span>
            </span>
          ) : program ? (
            <span className="truncate">{program.name}</span>
          ) : (
            <span>Scratch</span>
          )}
          <span className="hidden sm:inline">{lang.label}</span>
          <span className="hidden sm:inline">
            Ln {cursor.line}, Col {cursor.column}
          </span>
          {isJava ? <span className="shrink-0 text-warn">Class should be "main"</span> : null}
          {github && runnable === false ? (
            <span className="shrink-0 text-warn">
              <span className="md:hidden">Can’t run here</span>
              <span className="hidden md:inline">This file type can’t run here</span>
            </span>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden items-center gap-1 md:flex pointer-coarse:hidden">
            <Kbd>{modKey}</Kbd>
            <Kbd>Enter</Kbd> run
          </span>
          <span className="flex items-center gap-1">
            <button
              aria-label="Smaller text"
              className="grid size-6 place-items-center rounded hover:bg-bg-2 hover:text-fg pointer-coarse:size-11"
              onClick={() => setFontSize((size) => (store("oide-font-size", String(Math.max(11, size - 1))), Math.max(11, size - 1)))}
              type="button"
            >
              <Minus aria-hidden className="size-3" />
            </button>
            <span aria-live="polite">{fontSize}px</span>
            <button
              aria-label="Larger text"
              className="grid size-6 place-items-center rounded hover:bg-bg-2 hover:text-fg pointer-coarse:size-11"
              onClick={() => setFontSize((size) => (store("oide-font-size", String(Math.min(22, size + 1))), Math.min(22, size + 1)))}
              type="button"
            >
              <Plus aria-hidden className="size-3" />
            </button>
          </span>
        </div>
      </footer>

      <p aria-live="polite" className="sr-only">
        {announce}
      </p>
      <SaveDialog defaultName={defaultName} onClose={() => setSaveOpen(false)} onSave={save} open={saveOpen} session={session} />
    </div>
  );
}
