export type RunResult = { output: string; cpuTime: string | null; memory: string | null; isError: boolean };

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, {
    body: JSON.stringify(body),
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new ApiError(data.error ?? `The server answered ${response.status}.`, response.status);
  return data as T;
}

export const runCode = (language: string, script: string, stdin: string) =>
  postJson<RunResult>("/api/run", { language, script, stdin });

export const saveProgram = (body: { name: string; language: string; script: string; stdin: string }) =>
  postJson<{ id: string; url: string }>("/api/programs", body);
