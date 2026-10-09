import { LoaderCircle } from "lucide-react";
import { useEffect, useState, type SubmitEvent } from "react";

import { Button, ButtonLink } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import type { Session } from "@/lib/types";

export function SaveDialog({ defaultName, onClose, onSave, open, session }: { defaultName: string; onClose: () => void; onSave: (name: string) => Promise<boolean>; open: boolean; session: Session }) {
  const [name, setName] = useState(defaultName);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) setName(defaultName);
  }, [open, defaultName]);

  if (!session) {
    return (
      <Dialog description="Saved programs keep your code and input, and each one gets a link you can share." onClose={onClose} open={open} title="Log in to save programs">
        <div className="flex flex-wrap gap-2">
          <ButtonLink href="/user/login" size="md" variant="primary">
            Log in
          </ButtonLink>
          <ButtonLink href="/user/signup" size="md" variant="outline">
            Create an account
          </ButtonLink>
        </div>
      </Dialog>
    );
  }

  const submit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    const ok = await onSave(name.trim());
    setSaving(false);
    if (ok) onClose();
  };

  return (
    <Dialog description="The code, the language and the input are saved together." onClose={onClose} open={open} title="Save program">
      <form className="grid gap-5" onSubmit={submit}>
        <Field autoComplete="off" autoFocus label="Name" maxLength={120} onChange={(event) => setName(event.target.value)} required value={name} />
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="ghost">
            Cancel
          </Button>
          <Button disabled={saving || !name.trim()} type="submit" variant="primary">
            {saving ? <LoaderCircle aria-hidden className="animate-spin" /> : null}
            {saving ? "Saving" : "Save"}
          </Button>
        </div>
      </form>
    </Dialog>
  );
}
