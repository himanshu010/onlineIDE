import { useState } from "react";

import { Field, PasswordField } from "@/components/ui/field";
import { AuthLayout, FormMessage } from "@/pages/auth/AuthLayout";
import { SubmitButton } from "@/pages/auth/SubmitButton";
import type { MessageProps, PageProps } from "@/lib/types";

export default function Login({ msg }: MessageProps & PageProps) {
  const [busy, setBusy] = useState(false);
  const changed = msg === "Password Changed";
  return (
    <AuthLayout
      subtitle={
        <>
          New here?{" "}
          <a className="link" href="/user/signup">
            Create an account
          </a>
        </>
      }
      title="Log in"
    >
      <FormMessage tone={changed ? "info" : "error"}>{changed ? "Your password was changed. Log in with the new one." : msg}</FormMessage>
      <form action="/user/login/verify" className="grid gap-5" method="post" onSubmit={() => setBusy(true)}>
        <Field autoComplete="email" inputMode="email" label="Email" name="email" placeholder="you@example.com" required type="email" />
        <div>
          <PasswordField autoComplete="current-password" label="Password" name="password" required />
          <a className="link mt-2 inline-block text-sm" href="/user/forgot-password">
            Forgot your password?
          </a>
        </div>
        <SubmitButton busy={busy} busyLabel="Logging in">
          Log in
        </SubmitButton>
      </form>
    </AuthLayout>
  );
}
