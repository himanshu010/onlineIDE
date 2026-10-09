import { motion } from "framer-motion";
import { ArrowRight, Check, FileCode2, FolderOpen, Link2, Play, Terminal } from "lucide-react";
import { useRef, useState, type ClipboardEvent, type SubmitEvent } from "react";

import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { Marquee } from "@/components/magicui/marquee";
import { GithubIcon } from "@/components/site/GithubIcon";
import { LogoMark } from "@/components/site/Logo";
import { PageShell } from "@/components/site/PageShell";
import { Button, ButtonLink } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { rise, stagger, useReducedMotionSafe } from "@/lib/motion";
import type { GithubProps, PageProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const repoUrl = /github\.com\/([\w.-]+)\/([\w.-]+?)(?:\.git)?(?:[/?#]|$)/i;

function RepoForm() {
  const [username, setUsername] = useState("");
  const [repo, setRepo] = useState("");
  const [going, setGoing] = useState(false);

  // Pasting a repository URL into either field fills both.
  const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const match = event.clipboardData.getData("text").match(repoUrl);
    if (!match) return;
    event.preventDefault();
    setUsername(match[1]);
    setRepo(match[2]);
  };

  const submit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGoing(true);
    window.location.assign(`/github/${encodeURIComponent(username.trim())}/${encodeURIComponent(repo.trim())}`);
  };

  return (
    <form className="grid gap-4" onSubmit={submit}>
      <Field autoCapitalize="none" autoComplete="off" label="GitHub username" onChange={(event) => setUsername(event.target.value)} onPaste={onPaste} pattern="[A-Za-z0-9\-]+" placeholder="octocat" required spellCheck={false} value={username} />
      <Field autoCapitalize="none" autoComplete="off" hint="Or paste a repository URL into either field." label="Repository" onChange={(event) => setRepo(event.target.value)} onPaste={onPaste} pattern="[A-Za-z0-9._\-]+" placeholder="Hello-World" required spellCheck={false} value={repo} />
      <Button className="mt-1 w-full" disabled={going} size="lg" type="submit" variant="primary">
        Open repository
        <ArrowRight aria-hidden />
      </Button>
    </form>
  );
}

function Diagram() {
  const container = useRef<HTMLDivElement>(null);
  const github = useRef<HTMLDivElement>(null);
  const ide = useRef<HTMLDivElement>(null);
  const output = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const node = "relative z-10 grid size-16 place-items-center rounded-2xl border border-line-strong bg-bg-1 shadow-xl shadow-black/20";
  return (
    <div aria-hidden className="relative flex items-center justify-between px-2 py-10" ref={container}>
      <div className="absolute inset-x-12 top-1/2 h-px bg-gradient-to-r from-glow-a/40 via-glow-b/40 to-glow-c/40" />
      <div className={node} ref={github}>
        <GithubIcon className="size-7 text-fg" />
      </div>
      <div className={cn(node, "size-20")} ref={ide}>
        <LogoMark className="size-11" />
      </div>
      <div className={node} ref={output}>
        <Terminal className="size-7 text-run" />
      </div>
      {reduce ? null : (
        <>
          <AnimatedBeam containerRef={container} curvature={-28} duration={3.2} fromRef={github} gradientStartColor="#60a5fa" gradientStopColor="#8b5cf6" pathColor="var(--fg-faint)" toRef={ide} />
          <AnimatedBeam containerRef={container} curvature={28} delay={1.1} duration={3.2} fromRef={ide} gradientStartColor="#8b5cf6" gradientStopColor="#22c55e" pathColor="var(--fg-faint)" toRef={output} />
        </>
      )}
    </div>
  );
}

const steps = [
  { icon: FolderOpen, title: "Point to a repository", body: "Any public repository works: type its owner and name, or paste its URL." },
  { icon: FileCode2, title: "Pick a file", body: "Browse the folders. C, C++, Python, Java, PHP and Ruby files open straight in the IDE." },
  { icon: Play, title: "Run it", body: "Add input, run, and read the output, CPU time and memory. No copy-pasting." },
];

const languageNames = ["C++ 17", "C++ 14", "C", "Python 3", "Python 2", "Java", "PHP", "Ruby"];

export default function Github({ githubSignedIn, session }: GithubProps & PageProps) {
  return (
    <PageShell active="/github" session={session}>
      <motion.div animate="show" className="container-page pt-16 md:pt-24" initial="hidden" variants={stagger(0.08)}>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <motion.p className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-1/60 px-3.5 py-1 text-sm backdrop-blur" variants={rise}>
              <GithubIcon className="size-3.5 text-fg-muted" />
              <AnimatedShinyText className="mx-0 text-fg-muted">GitHub’s Compiler</AnimatedShinyText>
            </motion.p>
            <motion.h1 className="mt-6 text-[clamp(2.25rem,1.4rem+3.6vw,4rem)] leading-[1.04] font-semibold tracking-[-0.035em] text-balance" variants={rise}>
              Run code straight from a{" "}
              <span className="bg-gradient-to-r from-glow-a via-glow-b to-glow-c bg-clip-text text-transparent">GitHub repository</span>
            </motion.h1>
            <motion.p className="mt-5 max-w-xl text-lg text-fg-muted" variants={rise}>
              Get a unique URL for your repository and test, debug and compile all of its code online. Say goodbye to all that copy-pasting.
            </motion.p>
            <motion.div variants={rise}>
              <Diagram />
            </motion.div>
          </div>

          <motion.div variants={rise}>
            <MagicCard className="rounded-2xl" gradientColor="color-mix(in srgb, var(--glow-a) 10%, transparent)" gradientSize={320}>
              <div className="relative rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold">Open a repository</h2>
                <p className="mt-1.5 text-sm text-fg-muted">The URL you land on can be shared: anyone who opens it sees the same files.</p>
                <div className="mt-6">
                  <RepoForm />
                </div>
                <div className="mt-6 flex items-center gap-3 border-t pt-5">
                  {githubSignedIn ? (
                    <p className="flex items-center gap-2 text-sm text-success">
                      <Check aria-hidden className="size-4" />
                      Signed in with GitHub
                    </p>
                  ) : (
                    <>
                      <p className="flex-1 text-sm text-fg-muted">Visitors share 60 GitHub requests an hour. Sign in for your own 5,000.</p>
                      <ButtonLink href="/auth?parent_url=/github" size="sm" variant="outline">
                        <GithubIcon className="size-4" />
                        Sign in
                      </ButtonLink>
                    </>
                  )}
                </div>
              </div>
              <BorderBeam colorFrom="#60a5fa" colorTo="#22c55e" duration={9} size={220} />
            </MagicCard>
          </motion.div>
        </div>

        <motion.ol className="mt-20 grid gap-4 md:grid-cols-3" variants={stagger(0.08)}>
          {steps.map((step, index) => (
            <motion.li className="rounded-2xl border bg-bg-1 p-6" key={step.title} variants={rise}>
              <div className="flex items-center justify-between">
                <step.icon aria-hidden className="size-5 text-focus" />
                <span className="font-mono text-xs text-fg-faint">0{index + 1}</span>
              </div>
              <h3 className="mt-5 font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm text-fg-muted">{step.body}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]" variants={rise}>
          <div className="min-w-0 rounded-2xl border bg-bg-1 p-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Link2 aria-hidden className="size-4 text-focus" />
              Every file has its own link
            </div>
            <p className="mt-3 rounded-lg bg-bg-2 px-4 py-3 font-mono text-sm break-all text-fg-muted">
              online-ide.himanshuaswal.com/github/<span className="text-fg">user</span>/<span className="text-fg">repo</span>/<span className="text-run">path/to/file.cpp</span>
            </p>
            <p className="mt-3 text-sm text-fg-muted">Send it to a friend or a reviewer and the file opens in the IDE, ready to run.</p>
          </div>
          <div className="relative min-w-0 overflow-hidden rounded-2xl border bg-bg-1 py-6">
            <p className="px-6 text-sm font-semibold">Runs</p>
            <Marquee className="mt-4 [--duration:28s] [--gap:0.75rem]" pauseOnHover>
              {languageNames.map((name) => (
                <span className="rounded-lg border border-line-strong bg-bg-2 px-3 py-1.5 font-mono text-sm text-fg-muted" key={name}>
                  {name}
                </span>
              ))}
            </Marquee>
            <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg-1" />
            <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg-1" />
          </div>
        </motion.div>
      </motion.div>
    </PageShell>
  );
}
