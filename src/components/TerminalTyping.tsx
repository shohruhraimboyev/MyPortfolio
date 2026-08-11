import { useEffect, useState } from "react";

interface Token {
  text: string;
  color: string;
}

interface CodeLine {
  tokens: Token[];
}

const lines: CodeLine[] = [
  {
    tokens: [
      { text: "function ", color: "text-blue-600 dark:text-blue-400" },
      { text: "developer", color: "text-cyan-600 dark:text-cyan-300" },
      { text: "() {", color: "text-slate-700 dark:text-blue-100" },
    ],
  },
  {
    tokens: [
      { text: "  const ", color: "text-blue-600 dark:text-blue-400" },
      { text: "name", color: "text-slate-700 dark:text-blue-100" },
      { text: " = ", color: "text-slate-700 dark:text-blue-100" },
      { text: "'Shohruh'", color: "text-emerald-600 dark:text-emerald-400" },
      { text: ";", color: "text-slate-700 dark:text-blue-100" },
    ],
  },
  {
    tokens: [
      { text: "  const ", color: "text-blue-600 dark:text-blue-400" },
      { text: "focus", color: "text-slate-700 dark:text-blue-100" },
      { text: " = ", color: "text-slate-700 dark:text-blue-100" },
      {
        text: "'Frontend → BrSE'",
        color: "text-emerald-600 dark:text-emerald-400",
      },
      { text: ";", color: "text-slate-700 dark:text-blue-100" },
    ],
  },
  {
    tokens: [
      { text: "  return ", color: "text-blue-600 dark:text-blue-400" },
      { text: "{ name, focus };", color: "text-slate-700 dark:text-blue-100" },
    ],
  },
  {
    tokens: [{ text: "}", color: "text-slate-700 dark:text-blue-100" }],
  },
];

export const TerminalTyping = () => {
  const totalCharacters = lines.reduce(
    (total, line) =>
      total +
      line.tokens.reduce((count, token) => count + token.text.length, 0),
    0,
  );
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "clearing">(
    "typing",
  );

  useEffect(() => {
    if (phase === "typing") {
      if (visibleCharacters < totalCharacters) {
        const timeout = window.setTimeout(
          () => setVisibleCharacters((current) => current + 1),
          46,
        );
        return () => window.clearTimeout(timeout);
      }

      const timeout = window.setTimeout(() => setPhase("holding"), 1200);
      return () => window.clearTimeout(timeout);
    }

    if (phase === "holding") {
      const timeout = window.setTimeout(() => setPhase("clearing"), 450);
      return () => window.clearTimeout(timeout);
    }

    if (visibleCharacters > 0) {
      const timeout = window.setTimeout(
          () => setVisibleCharacters((current) => current - 1),
        20,
      );
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => setPhase("typing"), 600);
    return () => window.clearTimeout(timeout);
  }, [phase, totalCharacters, visibleCharacters]);

  const renderPartialLine = (tokens: Token[], upTo: number) => {
    let remaining = upTo;
    const result: { text: string; color: string }[] = [];

    for (const token of tokens) {
      if (remaining <= 0) break;
      const slice = token.text.slice(0, remaining);
      result.push({ text: slice, color: token.color });
      remaining -= token.text.length;
    }

    return result;
  };

  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 dark:border-blue-900/40 bg-white/70 dark:bg-[#060b17]/70 backdrop-blur-sm overflow-hidden shadow-sm dark:shadow-none">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-200 dark:border-blue-900/40 bg-slate-50/80 dark:bg-blue-950/20">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <span className="ml-2 text-[11px] font-mono text-slate-400 dark:text-blue-400/50">
          dev.js
        </span>
      </div>

      <div className="p-5 font-mono text-[13px] leading-7 min-h-[168px]">
        {lines.map((line, index) => {
          const charactersBeforeLine = lines
            .slice(0, index)
            .reduce(
              (total, previousLine) =>
                total +
                previousLine.tokens.reduce(
                  (count, token) => count + token.text.length,
                  0,
                ),
              0,
            );
          const charactersInLine = line.tokens.reduce(
            (count, token) => count + token.text.length,
            0,
          );
          const visibleInLine = Math.min(
            Math.max(visibleCharacters - charactersBeforeLine, 0),
            charactersInLine,
          );
          const isCursorLine =
            visibleCharacters === 0
              ? index === 0
              : visibleCharacters > charactersBeforeLine &&
                visibleCharacters <= charactersBeforeLine + charactersInLine;

          if (visibleInLine === 0 && !isCursorLine) return null;

          return (
            <div key={index}>
              {renderPartialLine(line.tokens, visibleInLine).map(
                (token, tokenIndex) => (
                  <span key={tokenIndex} className={token.color}>
                    {token.text}
                  </span>
                ),
              )}
              {isCursorLine && (
                <span className="inline-block w-[2px] h-[14px] bg-blue-600 dark:bg-blue-400 ml-[1px] align-middle animate-pulse" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
