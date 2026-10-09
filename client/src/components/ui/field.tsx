import { Eye, EyeOff } from "lucide-react";
import { useId, useState, type ComponentProps, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export const inputClass =
  "block h-11 w-full min-w-0 rounded-lg border border-input-border/70 bg-bg-1 px-3.5 text-base text-fg transition-[border-color,box-shadow] duration-150 placeholder:text-fg-faint hover:border-input-border focus-visible:border-focus focus-visible:shadow-[0_0_0_3px] focus-visible:shadow-focus/25 focus-visible:outline-none aria-invalid:border-danger";

type FieldProps = ComponentProps<"input"> & { label: ReactNode; hint?: ReactNode; error?: ReactNode; trailing?: ReactNode };

export function Field({ className, error, hint, label, trailing, ...props }: FieldProps) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-fg" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input aria-describedby={describedBy} aria-invalid={error ? true : undefined} className={cn(inputClass, trailing && "pr-11")} id={id} {...props} />
        {trailing ? <div className="absolute inset-y-0 right-1 flex items-center">{trailing}</div> : null}
      </div>
      {error ? (
        <p className="mt-1.5 text-sm text-danger" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-sm text-fg-faint" id={`${id}-hint`}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function PasswordField(props: Omit<FieldProps, "type" | "trailing">) {
  const [visible, setVisible] = useState(false);
  return (
    <Field
      {...props}
      trailing={
        <button
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className="grid size-9 place-items-center rounded-md text-fg-faint transition-colors hover:bg-bg-2 hover:text-fg"
          onClick={() => setVisible((value) => !value)}
          type="button"
        >
          {visible ? <EyeOff aria-hidden className="size-4" /> : <Eye aria-hidden className="size-4" />}
        </button>
      }
      type={visible ? "text" : "password"}
    />
  );
}

export function TextArea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cn(inputClass, "h-auto py-2.5", className)} {...props} />;
}
