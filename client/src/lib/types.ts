// Props each page receives from Express (src/utils/renderApp.js). Field names follow the routes.

export type Session = {
  firstName: string;
  lastName: string;
  email: string;
  headline?: string;
  college?: string;
  photo?: string | null;
} | null;

export type IdeProps = {
  code?: string;
  language?: string;
  stdin?: string;
  stdout?: string;
  cpuTime?: string | null;
  memory?: string | null;
  isError?: boolean;
  saved?: boolean;
  program?: { id: string; name: string } | null;
  github?: { username: string; repo: string; path: string; avatar: string } | null;
  isJava?: boolean;
  runnable?: boolean;
  githubSignedIn?: boolean;
};

export type DirectoryEntry = { name: string; type: "dir" | "file"; href: string };

export type DirectoryProps = {
  username: string;
  repo: string;
  path: string;
  avatar: string;
  entries: DirectoryEntry[];
  githubSignedIn?: boolean;
};

export type GithubProps = { githubSignedIn?: boolean };

export type MessageProps = { msg?: string };

export type VerifyProps = { email: string; msg?: string; type: "signup" | "forgot-password" };

export type AfterOtpProps = { email: string; isCorrect: boolean; signup: boolean; token?: string };

export type ChangePasswordProps = { email: string; token: string };

export type SavedProgram = { id: string; name: string; language?: string; date?: string };

export type SavedProgramsProps = { programs: SavedProgram[] };

export type ErrorProps = { error?: string; errno?: string | number; rateExceeded?: boolean };

export type PageProps = { session: Session; flash?: string };
