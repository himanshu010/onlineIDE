import { useState } from "react";

import { PasswordField } from "@/components/ui/field";
import { AuthLayout } from "@/pages/auth/AuthLayout";
import { SubmitButton } from "@/pages/auth/SubmitButton";
import type { ChangePasswordProps, PageProps } from "@/lib/types";

export default function ChangePassword({ email, token }: ChangePasswordProps & PageProps) {
  const [busy, setBusy] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [touched, setTouched] = useState(false);
  const mismatch = touched && confirm.length > 0 && confirm !== password;

  return (
    <AuthLayout
      subtitle={
        <>
          For <span className="font-medium text-fg">{email}</span>
        </>
      }
      title="Choose a new password"
    >
      <form
        action="/user/new-password"
        className="grid gap-5"
        method="post"
        onSubmit={(event) => {
          if (password !== confirm) {
            event.preventDefault();
            setTouched(true);
            return;
          }
          setBusy(true);
        }}
      >
        <PasswordField autoComplete="new-password" hint="At least 6 characters." label="New password" minLength={6} name="password" onChange={(event) => setPassword(event.target.value)} required value={password} />
        <PasswordField
          autoComplete="new-password"
          error={mismatch ? "The passwords don’t match." : undefined}
          label="Confirm new password"
          minLength={6}
          name="cpassword"
          onBlur={() => setTouched(true)}
          onChange={(event) => setConfirm(event.target.value)}
          required
          value={confirm}
        />
        <input name="email" type="hidden" value={email} />
        <input name="token" type="hidden" value={token} />
        <SubmitButton busy={busy} busyLabel="Saving">
          Change password
        </SubmitButton>
      </form>
    </AuthLayout>
  );
}
