import { motion } from "framer-motion";
import { MailCheck, RotateCw } from "lucide-react";
import { useRef, useState, type ClipboardEvent, type KeyboardEvent } from "react";

import { Button } from "@/components/ui/button";
import { AuthLayout, FormMessage } from "@/pages/auth/AuthLayout";
import { SubmitButton } from "@/pages/auth/SubmitButton";
import { ease } from "@/lib/motion";
import type { PageProps, VerifyProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const LENGTH = 4;

export default function Verify({ email, msg, type }: VerifyProps & PageProps) {
  const [digits, setDigits] = useState<string[]>(Array(LENGTH).fill(""));
  const [busy, setBusy] = useState(false);
  const [resending, setResending] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const form = useRef<HTMLFormElement>(null);

  const set = (index: number, value: string) => {
    const next = [...digits];
    next[index] = value;
    setDigits(next);
    if (value && index < LENGTH - 1) inputs.current[index + 1]?.focus();
    if (next.every(Boolean)) {
      setBusy(true);
      requestAnimationFrame(() => form.current?.requestSubmit());
    }
  };

  const onKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !digits[index] && index > 0) inputs.current[index - 1]?.focus();
    if (event.key === "ArrowLeft" && index > 0) inputs.current[index - 1]?.focus();
    if (event.key === "ArrowRight" && index < LENGTH - 1) inputs.current[index + 1]?.focus();
  };

  const onPaste = (event: ClipboardEvent) => {
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, LENGTH);
    if (!pasted) return;
    event.preventDefault();
    const next = Array.from({ length: LENGTH }, (_, index) => pasted[index] ?? "");
    setDigits(next);
    inputs.current[Math.min(pasted.length, LENGTH - 1)]?.focus();
    if (pasted.length === LENGTH) {
      setBusy(true);
      requestAnimationFrame(() => form.current?.requestSubmit());
    }
  };

  return (
    <AuthLayout
      subtitle={
        <>
          We sent a 4-digit code to <span className="font-medium text-fg">{email}</span>.
        </>
      }
      title={type === "signup" ? "Check your email" : "Enter your reset code"}
    >
      {msg && msg !== "OTP sent to your mail" ? (
        <FormMessage tone={msg.startsWith("Incorrect") ? "error" : "info"}>{msg.replace("OTP", "code").replace("mail", "email")}</FormMessage>
      ) : null}
      <motion.div animate={{ scale: 1, opacity: 1 }} className="mb-6 grid size-12 place-items-center rounded-xl border bg-bg-2" initial={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.45, ease: ease.out }}>
        <MailCheck aria-hidden className="size-5 text-focus" />
      </motion.div>
      <form action="/user/signup/check" className="grid gap-6" method="post" onSubmit={() => setBusy(true)} ref={form}>
        <fieldset>
          <legend className="mb-2 text-sm font-medium">Verification code</legend>
          <div className="flex gap-3" onPaste={onPaste}>
            {digits.map((digit, index) => (
              <motion.input
                animate={{ opacity: 1, y: 0 }}
                aria-label={`Digit ${index + 1} of ${LENGTH}`}
                autoComplete={index === 0 ? "one-time-code" : "off"}
                autoFocus={index === 0}
                className={cn(
                  "size-14 rounded-xl border border-input-border/70 bg-bg-1 text-center font-mono text-2xl text-fg transition-[border-color,box-shadow] focus-visible:border-focus focus-visible:shadow-[0_0_0_3px] focus-visible:shadow-focus/25 focus-visible:outline-none",
                  digit && "border-focus/60",
                )}
                initial={{ opacity: 0, y: 8 }}
                inputMode="numeric"
                key={index}
                maxLength={1}
                name={`digit${index + 1}`}
                onChange={(event) => set(index, event.target.value.replace(/\D/g, "").slice(-1))}
                onKeyDown={(event) => onKeyDown(index, event)}
                pattern="[0-9]"
                ref={(element) => {
                  inputs.current[index] = element;
                }}
                required
                transition={{ delay: 0.05 * index, duration: 0.3, ease: ease.out }}
                value={digit}
              />
            ))}
          </div>
        </fieldset>
        <input name="email" type="hidden" value={email} />
        <input name={type} type="hidden" value="true" />
        <SubmitButton busy={busy} busyLabel="Checking">
          Verify
        </SubmitButton>
      </form>
      <form action="/otp/resend" className="mt-6 flex items-center gap-2 text-sm text-fg-muted" method="post" onSubmit={() => setResending(true)}>
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
