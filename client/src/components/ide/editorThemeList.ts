// The editor themes on offer. Kept apart from the loaders (editorThemes.ts) so the IDE page can list
// them without pulling CodeMirror into its own chunk.
export type EditorThemeId = "auto" | "github-dark" | "github-light" | "dracula" | "monokai" | "solarized-dark" | "tokyo-night";

export const editorThemes: { id: EditorThemeId; label: string }[] = [
  { id: "auto", label: "OnlineIDE" },
  { id: "github-dark", label: "GitHub Dark" },
  { id: "github-light", label: "GitHub Light" },
  { id: "dracula", label: "Dracula" },
  { id: "monokai", label: "Monokai" },
  { id: "solarized-dark", label: "Solarized Dark" },
  { id: "tokyo-night", label: "Tokyo Night" },
];
