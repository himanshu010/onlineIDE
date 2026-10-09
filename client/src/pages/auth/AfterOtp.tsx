import { motion } from "framer-motion";
import { CircleCheck, CircleX } from "lucide-react";
import { useEffect, useRef } from "react";

import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import { AuthLayout } from "@/pages/auth/AuthLayout";
import { ease } from "@/lib/motion";
import type { AfterOtpProps, PageProps } from "@/lib/types";

// The OTP check's result: forwards the visitor (with the server's token) to the next step at once.
export default function AfterOtp({ email, isCorrect, signup, token }: AfterOtpProps & PageProps) {
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const timer = window.setTimeout(() => form.current?.submit(), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const action = isCorrect ? (signup ? "/user/register" : "/user/change-password") : "/otp/resend";
  const Icon = isCorrect ? CircleCheck : CircleX;
  return (
    <AuthLayout title={isCorrect ? "Code verified" : "That code didn’t match"}>
      <motion.div animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-3" initial={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.4, ease: ease.out }}>
        <Icon aria-hidden className={isCorrect ? "size-6 text-success" : "size-6 text-danger"} />
        <TextShimmer duration={1.6}>
          {isCorrect ? (signup ? "Creating your account…" : "Opening the password form…") : "Sending you a new code…"}
        </TextShimmer>
      </motion.div>
      <form action={action} method="post" ref={form}>
        <input name="email" type="hidden" value={email} />
        {isCorrect ? <input name="token" type="hidden" value={token ?? ""} /> : null}
        {!isCorrect && signup ? <input name="signup" type="hidden" value="true" /> : null}
        {!isCorrect ? <input name="msg" type="hidden" value="Incorrect OTP! New OTP sent to your mail" /> : null}
        <noscript>
          <button type="submit">Continue</button>
        </noscript>
      </form>
    </AuthLayout>
  );
}
