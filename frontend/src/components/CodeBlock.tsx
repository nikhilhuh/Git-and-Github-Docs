import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  label: string;
  variant?: "success" | "danger";
  isDark: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  label,
  variant = "success",
  isDark,
}) => {
  const borderColor =
    variant === "success" ? "border-green-500" : "border-red-500";
  const labelColor =
    variant === "success"
      ? isDark
        ? "text-green-400"
        : "text-green-600"
      : isDark
        ? "text-red-400"
        : "text-red-600";
  const bgBadge =
    variant === "success"
      ? isDark
        ? "bg-green-900/40"
        : "bg-green-50"
      : isDark
        ? "bg-red-900/40"
        : "bg-red-50";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div
      className={`my-6 border-l-4 ${borderColor} rounded-lg overflow-hidden shadow-md transition-colors border ${
        isDark
          ? "bg-neutral-800 border-neutral-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider ${labelColor} ${bgBadge} flex justify-between items-center border-b ${
          isDark ? "border-neutral-700" : "border-gray-100"
        }`}
      >
        <span>{label}</span>
        <button
          onClick={handleCopy}
          className="hover:underline cursor-pointer opacity-70 hover:opacity-100"
          title="Copy code"
        >
          Copy
        </button>
      </div>
      {/* Overflow container for horizontal scrolling */}
      <div className="overflow-x-auto max-w-full">
        <div className="text-xs sm:text-sm">
          <SyntaxHighlighter
            language="typescript"
            style={isDark ? vscDarkPlus : vs}
            customStyle={{
              margin: 0,
              padding: "0.75rem",
              background: "transparent",
              fontSize: "0.8125rem",
              lineHeight: "1.5",
            }}
            wrapLongLines={false}
            codeTagProps={{
              style: {
                fontSize: "inherit",
              },
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
