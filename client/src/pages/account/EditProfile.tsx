import { motion } from "framer-motion";
import { ImageUp } from "lucide-react";
import { useEffect, useState } from "react";

import { Avatar } from "@/components/site/Avatar";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { ease } from "@/lib/motion";
import type { PageProps } from "@/lib/types";
import { SubmitButton } from "@/pages/auth/SubmitButton";

const MAX_BYTES = 2 * 1024 * 1024;

export default function EditProfile({ session }: PageProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string>();
  const [busy, setBusy] = useState(false);

  useEffect(() => () => (preview ? URL.revokeObjectURL(preview) : undefined), [preview]);

  if (!session) return null;
  return (
    <PageShell session={session}>
      <motion.div animate={{ opacity: 1, y: 0 }} className="container-page max-w-2xl pt-14 md:pt-20" initial={{ opacity: 0, y: 14 }} transition={{ duration: 0.5, ease: ease.out }}>
        <h1 className="text-3xl font-semibold tracking-tight">Edit profile</h1>
        <p className="mt-2 text-fg-muted">Leave a field empty to keep what you have.</p>
        <form action="/profile/update" className="mt-8 grid gap-6 rounded-2xl border bg-bg-1 p-6 sm:p-8" encType="multipart/form-data" method="post" onSubmit={(event) => (fileError ? event.preventDefault() : setBusy(true))}>
          <div className="flex items-center gap-5">
            <Avatar className="size-20 text-xl" first={session.firstName} last={session.lastName} photo={preview ?? session.photo} />
            <div>
              <label className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg border border-line-strong bg-bg-1 px-4 text-sm font-medium transition-colors focus-within:outline-2 focus-within:outline-focus hover:bg-bg-2">
                <ImageUp aria-hidden className="size-4" />
                Choose a photo
                <input
                  accept="image/*"
                  className="sr-only"
                  name="photo"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    if (file.size > MAX_BYTES) {
                      setFileError("Choose an image under 2 MB.");
                      return;
                    }
                    setFileError(undefined);
                    setPreview(URL.createObjectURL(file));
                  }}
                  type="file"
                />
              </label>
              <p className={fileError ? "mt-2 text-sm text-danger" : "mt-2 text-sm text-fg-faint"} role={fileError ? "alert" : undefined}>
                {fileError ?? "JPG, PNG or GIF, up to 2 MB."}
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field autoComplete="given-name" defaultValue={session.firstName} label="First name" name="firstName" />
            <Field autoComplete="family-name" defaultValue={session.lastName} label="Last name" name="lastName" />
          </div>
          <Field defaultValue={session.headline} label="Headline" name="headline" placeholder="C++ programmer, ML enthusiast…" />
          <Field defaultValue={session.college} label="College" name="college" />
          <div className="flex flex-wrap items-center justify-end gap-3 border-t pt-6">
            <ButtonLink href="/user/profile" variant="ghost">
              Cancel
            </ButtonLink>
            <div className="w-40">
              <SubmitButton busy={busy} busyLabel="Saving">
                Save profile
              </SubmitButton>
            </div>
          </div>
        </form>
      </motion.div>
    </PageShell>
  );
}
