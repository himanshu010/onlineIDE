import { FolderCode, LogIn, LogOut, Menu as MenuIcon, Moon, Sun, User, UserPlus } from "lucide-react";

import { Avatar } from "@/components/site/Avatar";
import { GithubIcon } from "@/components/site/GithubIcon";
import { buttonClass } from "@/components/ui/button";
import { Menu, type MenuItem } from "@/components/ui/menu";
import { setTheme, useTheme } from "@/lib/theme";
import type { Session } from "@/lib/types";

// `compact` is the IDE header's menu, which on phones is the only way to the rest of the site, so it
// also carries GitHub's Compiler and the theme switch.
export function UserMenu({ compact, session }: { compact?: boolean; session: Session }) {
  const theme = useTheme();
  const site: MenuItem[] = compact
    ? [
        { label: "GitHub’s Compiler", href: "/github", icon: <GithubIcon className="size-4" /> },
        {
          label: theme === "dark" ? "Light theme" : "Dark theme",
          onSelect: () => setTheme(theme === "dark" ? "light" : "dark"),
          icon: theme === "dark" ? <Sun aria-hidden className="size-4" /> : <Moon aria-hidden className="size-4" />,
        },
      ]
    : [];

  if (!session) {
    if (compact) {
      return (
        <Menu
          items={[
            ...site,
            { label: "Log in", href: "/user/login", icon: <LogIn aria-hidden className="size-4" /> },
            { label: "Sign up", href: "/user/signup", icon: <UserPlus aria-hidden className="size-4" /> },
          ]}
          label="Menu"
          trigger={<MenuIcon aria-hidden className="size-[18px]" />}
          triggerClassName="grid size-10 place-items-center pointer-coarse:size-11 rounded-lg text-fg-muted transition-colors hover:bg-bg-2 hover:text-fg"
        />
      );
    }
    return (
      <div className="flex items-center gap-1.5">
        <a className={buttonClass({ variant: "ghost", size: "sm" })} href="/user/login">
          Log in
        </a>
        <a className={buttonClass({ variant: "primary", size: "sm" })} href="/user/signup">
          Sign up
        </a>
      </div>
    );
  }
  return (
    <Menu
      items={[
        ...site,
        { label: "Profile", href: "/user/profile", icon: <User aria-hidden className="size-4" /> },
        { label: "Saved programs", href: "/user/programs", icon: <FolderCode aria-hidden className="size-4" /> },
        { label: "Log out", href: "/user/logout", icon: <LogOut aria-hidden className="size-4" /> },
      ]}
      label={`Account: ${session.firstName} ${session.lastName}`}
      trigger={
        <>
          <Avatar first={session.firstName} last={session.lastName} photo={session.photo} />
          {compact ? null : <span className="hidden max-w-32 truncate text-sm text-fg-muted lg:inline">{session.firstName}</span>}
        </>
      }
      triggerClassName="flex h-10 items-center gap-2 rounded-full pointer-coarse:h-11 pointer-coarse:min-w-11 pr-1 pl-1 transition-colors hover:bg-bg-2 lg:pr-3"
    />
  );
}
