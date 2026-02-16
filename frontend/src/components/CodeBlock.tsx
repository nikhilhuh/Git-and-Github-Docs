import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  label: string;
  language?: string; // Dynamic language support
  isDark: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  label,
  language = "typescript",
  isDark,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`my-6 rounded-lg overflow-hidden border shadow-lg transition-all duration-300 ${
        isDark ? "bg-[#1e1e1e] border-neutral-800" : "bg-white border-gray-200"
      }`}
    >
      {/* Terminal Header */}
      <div
        className={`px-4 py-3 flex justify-between items-center border-b ${
          isDark
            ? "bg-[#252526] border-neutral-800"
            : "bg-gray-100 border-gray-200"
        }`}
      >
        <div className="flex items-center gap-2">
          {/* Traffic Lights */}
          <div className="flex gap-1.5 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          <span
            className={`text-xs font-mono font-medium ${
              isDark ? "text-neutral-400" : "text-gray-500"
            }`}
          >
            {label}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
            isDark
              ? "text-neutral-400 hover:text-white hover:bg-neutral-700"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        <div className="text-xs sm:text-sm">
          <SyntaxHighlighter
            language={language}
            style={isDark ? vscDarkPlus : vs}
            customStyle={{
              margin: 0,
              padding: "1.25rem",
              background: "transparent",
              fontSize: "0.875rem",
              lineHeight: "1.6",
            }}
            wrapLongLines={false}
            codeTagProps={{
              style: {
                fontSize: "inherit",
                fontFamily: "var(--font-mono, monospace)",
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
