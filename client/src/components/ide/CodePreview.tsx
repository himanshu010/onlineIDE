// The code as plain text, laid out like the editor (same font, size, line height and padding), shown
// while the editor's chunk downloads so the code is on screen at first paint.
export function CodePreview({ code, fontSize }: { code: string; fontSize: number }) {
  const lines = code.split("\n");
  return (
    <div aria-hidden className="flex h-full overflow-hidden bg-bg-1 font-mono" style={{ fontSize, lineHeight: 1.65 }}>
      <div className="shrink-0 py-3 pr-4 pl-1.5 text-right text-fg-faint select-none" style={{ minWidth: "3.25em" }}>
        {lines.map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </div>
      <pre className="min-w-0 flex-1 py-3 pl-1.5 break-words whitespace-pre-wrap text-fg">{code}</pre>
    </div>
  );
}
