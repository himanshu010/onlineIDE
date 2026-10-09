import { motion } from "framer-motion";
import { MailCheck, RotateCw } from "lucide-react";
import { useId, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { AuthLayout, FormMessage } from "@/pages/auth/AuthLayout";
import { SubmitButton } from "@/pages/auth/SubmitButton";
import { ease } from "@/lib/motion";
import type { PageProps, VerifyProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const LENGTH = 4;

// The server's messages for this page, in the words the page uses.
const messages: Record<string, { text: string; tone: "error" | "info" } | null> = {
  "OTP sent to your mail": null,
  "New OTP sent to your mail": { text: "We sent you a new code.", tone: "info" },
  "Incorrect OTP! New OTP sent to your mail": { text: "That code didn’t match, so we sent you a new one.", tone: "error" },
};

export default function Verify({ email, msg, type }: VerifyProps & PageProps) {
  const [code, setCode] = useState("");
  const [focused, setFocused] = useState(true);
  const [busy, setBusy] = useState(false);
  const [resending, setResending] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const id = useId();
  const message = msg ? (msg in messages ? messages[msg] : { text: msg, tone: "error" as const }) : null;

  // One real input under the boxes, so typing, pasting and the phone's "code from Mail/Messages"
  // suggestion all fill every digit at once.
  const update = (value: string) => {
    const next = value.replace(/\D/g, "").slice(0, LENGTH);
    setCode(next);
    if (next.length === LENGTH) {
      setBusy(true);
      requestAnimationFrame(() => form.current?.requestSubmit());
    }
  };

  return (
    <AuthLayout
      subtitle={
        <>
          We sent a 4-digit code to <span className="font-medium break-words text-fg">{email}</span>.
        </>
      }
      title={type === "signup" ? "Check your email" : "Enter your reset code"}
    >
      {message ? <FormMessage tone={message.tone}>{message.text}</FormMessage> : null}
      <motion.div animate={{ scale: 1, opacity: 1 }} className="mb-6 grid size-12 place-items-center rounded-xl border bg-bg-2" initial={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.45, ease: ease.out }}>
        <MailCheck aria-hidden className="size-5 text-focus" />
      </motion.div>
      <form action="/user/signup/check" className="grid gap-6" method="post" onSubmit={() => setBusy(true)} ref={form}>
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor={id}>
            Verification code
          </label>
          <div className="relative w-fit">
            <input
              autoComplete="one-time-code"
              autoFocus
              className="absolute inset-0 z-10 size-full cursor-text appearance-none bg-transparent text-base text-transparent caret-transparent outline-none selection:bg-transparent"
              id={id}
              inputMode="numeric"
              maxLength={LENGTH}
              onBlur={() => setFocused(false)}
              onChange={(event) => update(event.target.value)}
              onFocus={() => setFocused(true)}
              onPaste={(event) => {
                // "12 34" or "1234." would be cut at four characters before the digits are picked out.
                event.preventDefault();
                update(event.clipboardData.getData("text"));
              }}
              pattern={`[0-9]{${LENGTH}}`}
              required
              spellCheck={false}
              value={code}
            />
            <div aria-hidden className="flex gap-3">
              {Array.from({ length: LENGTH }, (_, index) => {
                const active = focused && (index === code.length || (index === LENGTH - 1 && code.length === LENGTH));
                return (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "grid size-14 place-items-center rounded-xl border border-input-border/70 bg-bg-1 font-mono text-2xl text-fg transition-[border-color,box-shadow]",
                      code[index] && "border-focus/60",
                      active && "border-focus shadow-[0_0_0_3px] shadow-focus/25",
                    )}
                    initial={{ opacity: 0, y: 8 }}
                    key={index}
                    transition={{ delay: 0.05 * index, duration: 0.3, ease: ease.out }}
                  >
                    {code[index] ?? (active ? <span className="h-7 w-px animate-pulse bg-fg" /> : null)}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        {Array.from({ length: LENGTH }, (_, index) => (
          <input key={index} name={`digit${index + 1}`} type="hidden" value={code[index] ?? ""} />
        ))}
        <input name="email" type="hidden" value={email} />
        <input name={type} type="hidden" value="true" />
        <SubmitButton busy={busy} busyLabel="Checking">
          Verify
        </SubmitButton>
      </form>
      <form action="/otp/resend" className="mt-6 flex flex-wrap items-center gap-x-2 text-sm text-fg-muted" method="post" onSubmit={() => setResending(true)}>
        <input name="email" type="hidden" value={email} />
        <input name="msg" type="hidden" value="New OTP sent to your mail" />
        <input name={type} type="hidden" value="true" />
        Didn’t get it?
        <Button className="h-auto px-1.5 py-1" disabled={resending} size="sm" type="submit" variant="ghost">
          <RotateCw aria-hidden className={cn(resending && "animate-spin")} />
          Send a new code
        </Button>
      </form>
    </AuthLayout>
  );
}
