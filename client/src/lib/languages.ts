// The languages JDoodle runs for this app (ids are JDoodle's), the starter code for each, and the
// editor mode. Starter code is the old site's (public/js/index.js at 2d7a293).

export type LanguageId = "cpp17" | "cpp14" | "cpp" | "c" | "python3" | "python2" | "java" | "php" | "ruby";
export type EditorMode = "cpp" | "python" | "java" | "php" | "ruby";

export type Language = { id: LanguageId; label: string; short: string; mode: EditorMode; extension: string };

const cpp = "#include <iostream>\nusing namespace std;\n\nint main() {\n\t// your code goes here\n\treturn 0;\n}\n";
const c = "#include <stdio.h>\n\nint main(void) {\n\t// your code goes here\n\treturn 0;\n}\n";
const python = "# write your python code here\n";
const java = "public class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n";
const php = "<?php\n\n// your code goes here\n";
const ruby = "# write your ruby code here\n";

export const languages: Language[] = [
  { id: "cpp17", label: "C++ 17", short: "C++17", mode: "cpp", extension: "cpp" },
  { id: "cpp14", label: "C++ 14", short: "C++14", mode: "cpp", extension: "cpp" },
  { id: "cpp", label: "C++", short: "C++", mode: "cpp", extension: "cpp" },
  { id: "c", label: "C", short: "C", mode: "cpp", extension: "c" },
  { id: "python3", label: "Python 3", short: "Py3", mode: "python", extension: "py" },
  { id: "python2", label: "Python 2", short: "Py2", mode: "python", extension: "py" },
  { id: "java", label: "Java", short: "Java", mode: "java", extension: "java" },
  { id: "php", label: "PHP", short: "PHP", mode: "php", extension: "php" },
  { id: "ruby", label: "Ruby", short: "Ruby", mode: "ruby", extension: "rb" },
];

export const languageById = (id?: string) => languages.find((language) => language.id === id) ?? languages[0];

export const starterCode = (id: LanguageId): string => {
  if (id === "c") return c;
  if (id.startsWith("cpp")) return cpp;
  if (id.startsWith("python")) return python;
  if (id === "java") return java;
  if (id === "php") return php;
  return ruby;
};

// Matches src/utils/getLang.js, which picks the language for files opened from GitHub.
const runnable = new Set(["cpp", "c", "py", "php", "rb", "erb", "irb", "java"]);
export const isRunnableFile = (name: string) => runnable.has(name.split(".").pop()?.toLowerCase() ?? "");
