import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const initials = (first?: string, last?: string) =>
  `${first?.trim()[0] ?? ""}${last?.trim()[0] ?? ""}`.toUpperCase() || "?";

export const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.userAgent);
export const modKey = isMac ? "⌘" : "Ctrl";
