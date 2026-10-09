import { LoaderCircle } from "lucide-react";
import { type ReactNode } from "react";

import { Button } from "@/components/ui/button";

// The forms post natively (the server redirects), so "busy" lasts until the next page loads. The
// button is disabled while busy, which leaves it out of the posted data: flags go in hidden inputs.
export function SubmitButton({ busy, busyLabel, children, disabled }: { busy: boolean; busyLabel: string; children: ReactNode; disabled?: boolean }) {
  return (
    <Button className="w-full" disabled={busy || disabled} size="lg" type="submit" variant="primary">
      {busy ? <LoaderCircle aria-hidden className="animate-spin" /> : null}
      {busy ? busyLabel : children}
    </Button>
  );
}
