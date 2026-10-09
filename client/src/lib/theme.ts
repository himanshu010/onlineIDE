import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

// Same key and values as the old site, so a visitor's earlier choice carries over.
const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

const current = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light");

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, theme === "dark" ? "theme-dark" : "theme-light");
  } catch {
    // Storage can be unavailable (private mode); the choice then lasts for this page only.
  }
  listeners.forEach((listener) => listener());
}

export function useTheme(): Theme {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    current,
    () => "dark",
  );
}
