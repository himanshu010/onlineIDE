import { useState } from "react";

import { Field, PasswordField } from "@/components/ui/field";
import { AuthLayout, FormMessage } from "@/pages/auth/AuthLayout";
import { SubmitButton } from "@/pages/auth/SubmitButton";
import type { MessageProps, PageProps } from "@/lib/types";

export default function Signup({ msg }: MessageProps & PageProps) {
  const [busy, setBusy] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [touched, setTouched] = useState(false);
  const mismatch = touched && confirm.length > 0 && confirm !== password;

  return (
    <AuthLayout
      subtitle={
        <>
          Already have an account?{" "}
          <a className="link" href="/user/login">
            Log in
          </a>
        </>
      }
      title="Create your account"
    >
      <FormMessage>{msg}</FormMessage>
      <form
        action="/user/email/verify"
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
        <div className="grid gap-5 sm:grid-cols-2">
          <Field autoComplete="given-name" label="First name" name="firstName" required />
          <Field autoComplete="family-name" label="Last name" name="lastName" required />
        </div>
        <Field autoComplete="email" hint="We send a 4-digit code here to confirm it’s yours." inputMode="email" label="Email" name="email" placeholder="you@example.com" required type="email" />
        <PasswordField autoComplete="new-password" hint="At least 6 characters." label="Password" minLength={6} name="password" onChange={(event) => setPassword(event.target.value)} required value={password} />
        <PasswordField
          autoComplete="new-password"
          error={mismatch ? "The passwords don’t match." : undefined}
          label="Confirm password"
          minLength={6}
          name="cpassword"
          onBlur={() => setTouched(true)}
          onChange={(event) => setConfirm(event.target.value)}
          required
          value={confirm}
        />
        <input name="isSignUp" type="hidden" value="Sign up" />
        <SubmitButton busy={busy} busyLabel="Sending the code">
          Continue
        </SubmitButton>
      </form>
    </AuthLayout>
  );
}
