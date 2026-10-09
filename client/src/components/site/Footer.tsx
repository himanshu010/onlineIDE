import { LogoMark } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="container-page mt-24 flex flex-col items-center justify-between gap-4 border-t py-8 text-sm text-fg-faint sm:flex-row">
      <p className="flex items-center gap-2.5">
        <LogoMark className="size-6" />
        <span>
          Made by{" "}
          <a className="link" href="https://himanshuaswal.com">
            Himanshu Aswal
          </a>
        </span>
      </p>
      <nav aria-label="Footer" className="flex items-center gap-5 pointer-coarse:gap-1 pointer-coarse:[&>a]:px-3 pointer-coarse:[&>a]:py-3">
        <a className="transition-colors hover:text-fg" href="/">
          IDE
        </a>
        <a className="transition-colors hover:text-fg" href="/github">
          GitHub’s Compiler
        </a>
        <a className="transition-colors hover:text-fg" href="https://github.com/himanshu010/onlineIDE">
          Source
        </a>
      </nav>
    </footer>
  );
}
