import React from "react";
import { Link } from "react-router-dom";
import { productionContent } from "../data/docsContent";

interface PrevNextNavProps {
  currentId: string;
  isDark: boolean;
}

export const PrevNextNav: React.FC<PrevNextNavProps> = ({
  currentId,
  isDark,
}) => {
  const currentIndex = productionContent.findIndex((i) => i.id === currentId);
  const prev = productionContent[currentIndex - 1];
  const next = productionContent[currentIndex + 1];

  return (
    <div
      className={`mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between gap-4 transition-colors ${
        isDark ? "border-neutral-800" : "border-gray-100"
      }`}
    >
      {prev ? (
        <Link
          to={`/docs/${prev.id}`}
          className={`flex-1 max-w-full group p-4 border rounded-lg transition-all text-left ${
            isDark
              ? "border-neutral-700 hover:border-blue-500 hover:bg-blue-900/10"
              : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
          }`}
        >
          <div
            className={`text-xs uppercase tracking-wide mb-1 ${
              isDark ? "text-neutral-400" : "text-gray-500"
            }`}
          >
            Previous
          </div>
          <div
            className={`font-medium break-words ${
              isDark
                ? "text-neutral-200 group-hover:text-blue-400"
                : "text-gray-900 group-hover:text-blue-700"
            }`}
          >
            &larr; {prev.title}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          to={`/docs/${next.id}`}
          className={`flex-1 max-w-full group p-4 border rounded-lg transition-all text-right ${
            isDark
              ? "border-neutral-700 hover:border-blue-500 hover:bg-blue-900/10"
              : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
          }`}
        >
          <div
            className={`text-xs uppercase tracking-wide mb-1 ${
              isDark ? "text-neutral-400" : "text-gray-500"
            }`}
          >
            Next
          </div>
          <div
            className={`font-medium break-words ${
              isDark
                ? "text-neutral-200 group-hover:text-blue-400"
                : "text-gray-900 group-hover:text-blue-700"
            }`}
          >
            {next.title} &rarr;
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
};
