import { useState } from "react";

import { Field } from "@/components/ui/field";
import { AuthLayout, FormMessage } from "@/pages/auth/AuthLayout";
import { SubmitButton } from "@/pages/auth/SubmitButton";
import type { MessageProps, PageProps } from "@/lib/types";

export default function ForgotPassword({ msg }: MessageProps & PageProps) {
  const [busy, setBusy] = useState(false);
  return (
    <AuthLayout
      subtitle={
        <>
          Remembered it?{" "}
          <a className="link" href="/user/login">
            Log in
          </a>
        </>
      }
      title="Reset your password"
    >
      <FormMessage>{msg}</FormMessage>
      <form action="/user/email/verify" className="grid gap-5" method="post" onSubmit={() => setBusy(true)}>
        <Field autoComplete="email" hint="We send a 4-digit code to this address." inputMode="email" label="Email" name="email" placeholder="you@example.com" required type="email" />
        <input name="isForgotPassword" type="hidden" value="Submit" />
        <SubmitButton busy={busy} busyLabel="Sending the code">
          Send the code
        </SubmitButton>
      </form>
    </AuthLayout>
  );
}
