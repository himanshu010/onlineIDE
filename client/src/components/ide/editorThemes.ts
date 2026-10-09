import type { Extension } from "@codemirror/state";
import * as github from "@uiw/codemirror-theme-github";

import type { EditorThemeId } from "@/components/ide/editorThemeList";

const channels = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const luminance = (rgb: number[]) => {
  const [r, g, b] = rgb.map((c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: number[], b: number[]) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

// Moves a syntax colour toward black (light) or white (dark) until it reads at 4.5:1 on `background`.
function legible(color: string, background: string, dark: boolean) {
  if (!/^#[0-9a-f]{6}$/i.test(color)) return color;
  const bg = channels(background);
  let rgb = channels(color);
  for (let step = 0; step < 40 && contrast(rgb, bg) < 4.6; step++) rgb = rgb.map((c) => Math.round(dark ? c + (255 - c) * 0.08 : c * 0.92));
  return `#${rgb.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

// "auto" is GitHub's palette on the site's own surfaces, each colour held at 4.5:1 against the active
// line (the lowest-contrast background a token sits on), so the editor sits in the page.
const editorBackground = { dark: "#0b0b0e", light: "#ffffff" };
const activeLine = { dark: "#141418", light: "#f7f7f8" };

function autoTheme(siteTheme: "light" | "dark") {
  const dark = siteTheme === "dark";
  const init = dark ? github.githubDarkInit : github.githubLightInit;
  const styles = (dark ? github.githubDarkStyle : github.githubLightStyle).map((style) => (style.color ? { ...style, color: legible(style.color, activeLine[siteTheme], dark) } : style));
  return init({
    settings: {
      background: editorBackground[siteTheme],
      gutterBackground: editorBackground[siteTheme],
      gutterBorder: "transparent",
      gutterForeground: dark ? "#8b8b95" : "#63636c",
      lineHighlight: activeLine[siteTheme],
      fontFamily: "var(--font-mono)",
    },
    styles,
  });
}

// The themes bundled with the editor, available at once; null for the ones loaded on demand.
export function themeNow(id: EditorThemeId, siteTheme: "light" | "dark"): Extension | null {
  if (id === "auto") return autoTheme(siteTheme);
  if (id === "github-dark") return github.githubDark;
  if (id === "github-light") return github.githubLight;
  return null;
}

export async function loadEditorTheme(id: EditorThemeId, siteTheme: "light" | "dark"): Promise<Extension> {
  const ready = themeNow(id, siteTheme);
  if (ready) return ready;
  switch (id) {
    case "dracula":
      return (await import("@uiw/codemirror-theme-dracula")).dracula;
    case "monokai":
      return (await import("@uiw/codemirror-theme-monokai")).monokai;
    case "solarized-dark":
      return (await import("@uiw/codemirror-theme-solarized")).solarizedDark;
    default:
      return (await import("@uiw/codemirror-theme-tokyo-night")).tokyoNight;
  }
}
