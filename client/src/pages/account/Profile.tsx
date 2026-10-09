import { motion } from "framer-motion";
import { FolderCode, GraduationCap, Mail, PencilLine, Sparkles } from "lucide-react";

import { BorderBeam } from "@/components/magicui/border-beam";
import { Avatar } from "@/components/site/Avatar";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/button";
import { rise, stagger } from "@/lib/motion";
import type { PageProps } from "@/lib/types";

export default function Profile({ session }: PageProps) {
  if (!session) return null;
  const details = [
    { icon: Mail, label: "Email", value: session.email },
    { icon: Sparkles, label: "Headline", value: session.headline },
    { icon: GraduationCap, label: "College", value: session.college },
  ];
  return (
    <PageShell session={session}>
      <motion.div animate="show" className="container-page max-w-3xl pt-14 md:pt-20" initial="hidden" variants={stagger(0.08)}>
        <motion.section aria-labelledby="profile-name" className="relative overflow-hidden rounded-2xl border bg-bg-1 p-6 sm:p-8" variants={rise}>
          <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-glow-a/25 via-glow-b/20 to-glow-c/20" />
          <div className="relative flex flex-wrap items-end justify-between gap-5 pt-8">
            <div className="flex items-end gap-4">
              <Avatar className="size-20 text-xl ring-4 ring-bg-1" first={session.firstName} last={session.lastName} photo={session.photo} />
              <div className="pb-1">
                <h1 className="text-2xl font-semibold tracking-tight" id="profile-name">
                  {session.firstName} {session.lastName}
                </h1>
                {session.headline ? <p className="text-fg-muted">{session.headline}</p> : null}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/user/edit" size="sm" variant="outline">
                <PencilLine aria-hidden />
                Edit profile
              </ButtonLink>
              <ButtonLink href="/user/programs" size="sm" variant="primary">
                <FolderCode aria-hidden />
                Saved programs
              </ButtonLink>
            </div>
          </div>
          <BorderBeam colorFrom="#60a5fa" colorTo="#8b5cf6" duration={12} size={200} />
        </motion.section>

        <motion.dl className="mt-4 grid gap-4 sm:grid-cols-3" variants={stagger(0.06)}>
          {details.map((detail) => (
            <motion.div className="min-w-0 rounded-2xl border bg-bg-1 p-5" key={detail.label} variants={rise}>
              <dt className="flex items-center gap-2 text-sm text-fg-faint">
                <detail.icon aria-hidden className="size-4" />
                {detail.label}
              </dt>
              <dd className="mt-2 truncate font-medium">{detail.value || <span className="font-normal text-fg-faint">Not set</span>}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </PageShell>
  );
}
