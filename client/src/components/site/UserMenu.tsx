import { FolderCode, LogIn, LogOut, User, UserPlus } from "lucide-react";

import { Avatar } from "@/components/site/Avatar";
import { buttonClass } from "@/components/ui/button";
import { Menu } from "@/components/ui/menu";
import type { Session } from "@/lib/types";

export function UserMenu({ compact, session }: { compact?: boolean; session: Session }) {
  if (!session) {
    if (compact) {
      return (
        <Menu
          items={[
            { label: "Log in", href: "/user/login", icon: <LogIn aria-hidden className="size-4" /> },
            { label: "Sign up", href: "/user/signup", icon: <UserPlus aria-hidden className="size-4" /> },
          ]}
          label="Account"
          trigger={<User aria-hidden className="size-[18px]" />}
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
