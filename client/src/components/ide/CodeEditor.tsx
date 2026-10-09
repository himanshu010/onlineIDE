import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { cpp } from "@codemirror/lang-cpp";
import { bracketMatching, defaultHighlightStyle, foldGutter, foldKeymap, indentOnInput, indentUnit, syntaxHighlighting } from "@codemirror/language";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { Compartment, EditorState, Prec, type Extension } from "@codemirror/state";
import {
  crosshairCursor,
  drawSelection,
  dropCursor,
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
  rectangularSelection,
} from "@codemirror/view";
import { useEffect, useRef } from "react";

import type { EditorThemeId } from "@/components/ide/editorThemeList";
import { loadEditorTheme, themeNow } from "@/components/ide/editorThemes";
import type { EditorMode } from "@/lib/languages";
import { useTheme } from "@/lib/theme";

async function loadLanguage(mode: EditorMode): Promise<Extension> {
  switch (mode) {
    case "cpp":
      return cpp();
    case "python":
      return (await import("@codemirror/lang-python")).python();
    case "java":
      return (await import("@codemirror/lang-java")).java();
    case "php":
      return (await import("@codemirror/lang-php")).php({ plain: false });
    case "ruby": {
      const [{ StreamLanguage }, { ruby }] = await Promise.all([import("@codemirror/language"), import("@codemirror/legacy-modes/mode/ruby")]);
      return StreamLanguage.define(ruby);
    }
  }
}

// SVG chevrons: the default "⌄" marker isn't in the bundled font subset, and the search for a system
// font that has it stalls the editor's first layout by about 100 ms.
function foldMarker(open: boolean) {
  const marker = document.createElement("span");
  marker.title = open ? "Fold line" : "Unfold line";
  marker.style.cssText = "display: flex; align-items: center; height: 100%";
  marker.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${open ? "m6 9 6 6 6-6" : "m9 18 6-6-6-6"}"/></svg>`;
  return marker;
}

// CodeMirror's basic setup without autocompletion and linting, which an online compiler doesn't use.
const setup: Extension = [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  foldGutter({ markerDOM: foldMarker }),
  drawSelection(),
  dropCursor(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  bracketMatching(),
  closeBrackets(),
  rectangularSelection(),
  crosshairCursor(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  EditorState.tabSize.of(4),
  indentUnit.of("    "),
  EditorView.lineWrapping,
  // The explicit tabindex lets checkers see the scrolling editor as reachable (it already is).
  EditorView.contentAttributes.of({ "aria-label": "Code editor", tabindex: "0" }),
  keymap.of([...closeBracketsKeymap, ...defaultKeymap, ...searchKeymap, ...historyKeymap, ...foldKeymap, indentWithTab]),
];

const sizing = (fontSize: number) =>
  EditorView.theme({
    "&": { fontSize: `${fontSize}px`, height: "100%" },
    "&.cm-focused": { outline: "none" },
    ".cm-scroller": { fontFamily: "var(--font-mono)", lineHeight: "1.65" },
    ".cm-content": { paddingBlock: "12px" },
  });

type Props = {
  editorTheme: EditorThemeId;
  fontSize: number;
  mode: EditorMode;
  onChange: (value: string) => void;
  onCursor: (line: number, column: number) => void;
  onRun: () => void;
  onSave: () => void;
  value: string;
};

export default function CodeEditor({ editorTheme, fontSize, mode, onChange, onCursor, onRun, onSave, value }: Props) {
  const siteTheme = useTheme();
  const host = useRef<HTMLDivElement>(null);
  const view = useRef<EditorView | null>(null);
  const handlers = useRef({ onChange, onCursor, onRun, onSave });
  const compartments = useRef({ language: new Compartment(), theme: new Compartment(), size: new Compartment() });

  useEffect(() => {
    handlers.current = { onChange, onCursor, onRun, onSave };
  });

  // One editor per mount; C++ and the GitHub-based themes ship with this chunk, so the default editor
  // starts complete without another download.
  useEffect(() => {
    const { language, theme, size } = compartments.current;
    const editor = new EditorView({
      parent: host.current!,
      state: EditorState.create({
        doc: value,
        extensions: [
          setup,
          language.of(mode === "cpp" ? cpp() : []),
          theme.of(themeNow(editorTheme, siteTheme) ?? []),
          size.of(sizing(fontSize)),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) handlers.current.onChange(update.state.doc.toString());
            if (update.docChanged || update.selectionSet) {
              const head = update.state.selection.main.head;
              const line = update.state.doc.lineAt(head);
              handlers.current.onCursor(line.number, head - line.from + 1);
            }
          }),
          Prec.highest(
            keymap.of([
              { key: "Mod-Enter", preventDefault: true, run: () => (handlers.current.onRun(), true) },
              { key: "Mod-s", preventDefault: true, run: () => (handlers.current.onSave(), true) },
            ]),
          ),
        ],
      }),
    });
    view.current = editor;
    return () => {
      editor.destroy();
      view.current = null;
    };
    // Created once per mount; later prop changes are applied by the effects below.
  }, []);

  useEffect(() => {
    let live = true;
    loadLanguage(mode).then((extension) => live && view.current?.dispatch({ effects: compartments.current.language.reconfigure(extension) }));
    return () => {
      live = false;
    };
  }, [mode]);

  useEffect(() => {
    let live = true;
    loadEditorTheme(editorTheme, siteTheme).then((extension) => live && view.current?.dispatch({ effects: compartments.current.theme.reconfigure(extension) }));
    return () => {
      live = false;
    };
  }, [editorTheme, siteTheme]);

  useEffect(() => {
    view.current?.dispatch({ effects: compartments.current.size.reconfigure(sizing(fontSize)) });
  }, [fontSize]);

  // Text set from outside (not typed here) replaces the document.
  useEffect(() => {
    const editor = view.current;
    if (editor && editor.state.doc.toString() !== value) editor.dispatch({ changes: { from: 0, to: editor.state.doc.length, insert: value } });
  }, [value]);

  return <div className="h-full" ref={host} />;
}
