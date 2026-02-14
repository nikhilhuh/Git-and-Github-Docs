import React from "react";
import { ContentSection } from "../data/docsContent";
import { CodeBlock } from "./CodeBlock";
import { slugify } from "../utils/slugify";

interface SectionProps {
  data: ContentSection;
  isDark: boolean;
}

export const Section: React.FC<SectionProps> = ({ data, isDark }) => {
  return (
    <article className="space-y-16">
      {/* Overview Section */}
      {data.overview && (
        <section>
          <h2
            id="overview"
            className={`text-2xl sm:text-3xl font-bold mb-6 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            Overview
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed break-words ${
              isDark ? "text-neutral-300" : "text-gray-700"
            }`}
          >
            {data.overview}
          </p>
        </section>
      )}

      {/* Detailed Explanation */}
      {data.detailedExplanation && data.detailedExplanation.length > 0 && (
        <section>
          <h2
            id={slugify(`Understanding ${data.title}`)}
            className={`text-2xl sm:text-3xl font-bold mb-6 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            Understanding {data.title}
          </h2>
          <div className="space-y-6">
            {data.detailedExplanation.map((paragraph, idx) => (
              <p
                key={idx}
                className={`text-base sm:text-lg leading-relaxed break-words ${
                  isDark ? "text-neutral-300" : "text-gray-700"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Code Blocks */}
      {data.codeBlocks && data.codeBlocks.length > 0 && (
        <section>
          <h2
            id="code-examples"
            className={`text-2xl sm:text-3xl font-bold mb-8 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            Code Examples
          </h2>
          <div className="space-y-12">
            {data.codeBlocks.map((block, idx) => (
              <div key={idx} className="space-y-4">
                <h3
                  id={slugify(block.label)}
                  className={`text-lg sm:text-xl font-semibold break-words ${
                    isDark ? "text-neutral-200" : "text-gray-800"
                  }`}
                >
                  {block.label}
                </h3>

                <CodeBlock
                  code={block.code}
                  label={block.language}
                  language={block.language}
                  isDark={isDark}
                />

                {block.explanation && (
                  <p
                    className={`text-sm sm:text-base leading-relaxed italic break-words ${
                      isDark ? "text-neutral-400" : "text-gray-600"
                    }`}
                  >
                    <strong
                      className={isDark ? "text-neutral-300" : "text-gray-700"}
                    >
                      📝 Note:
                    </strong>{" "}
                    {block.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Workflow Steps */}
      {data.workflowSteps && data.workflowSteps.length > 0 && (
        <section>
          <h2
            id="workflow-steps"
            className={`text-2xl sm:text-3xl font-bold mb-6 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            Workflow Steps
          </h2>
          <ol className="space-y-3 list-decimal list-inside">
            {data.workflowSteps.map((step, idx) => (
              <li
                key={idx}
                className={`text-base sm:text-lg leading-relaxed break-words ${
                  isDark ? "text-neutral-300" : "text-gray-700"
                }`}
              >
                {step}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* GitHub Desktop Steps */}
      {data.desktopSteps && data.desktopSteps.length > 0 && (
        <section>
          <h2
            id="desktop-steps"
            className={`text-2xl sm:text-3xl font-bold mb-6 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            GitHub Desktop Steps
          </h2>
          <ol className="space-y-3 list-decimal list-inside">
            {data.desktopSteps.map((step, idx) => (
              <li
                key={idx}
                className={`text-base sm:text-lg leading-relaxed break-words ${
                  isDark ? "text-neutral-300" : "text-gray-700"
                }`}
              >
                {step}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Key Takeaways */}
      {data.keyTakeaways && data.keyTakeaways.length > 0 && (
        <section>
          <h2
            id="key-takeaways"
            className={`text-2xl sm:text-3xl font-bold mb-6 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            Key Takeaways
          </h2>
          <ul className="space-y-3">
            {data.keyTakeaways.map((takeaway, idx) => (
              <li
                key={idx}
                className={`flex items-start text-base sm:text-lg leading-relaxed break-words ${
                  isDark ? "text-neutral-300" : "text-gray-700"
                }`}
              >
                <span
                  className={`mr-3 mt-1 flex-shrink-0 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  ✓
                </span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Common Mistakes */}
      {data.commonMistakes && data.commonMistakes.length > 0 && (
        <section>
          <h2
            id="common-mistakes"
            className={`text-2xl sm:text-3xl font-bold mb-6 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            Common Mistakes to Avoid
          </h2>
          <ul className="space-y-3">
            {data.commonMistakes.map((mistake, idx) => (
              <li
                key={idx}
                className={`flex items-start text-base sm:text-lg leading-relaxed break-words ${
                  isDark ? "text-neutral-300" : "text-gray-700"
                }`}
              >
                <span
                  className={`mr-3 mt-1 flex-shrink-0 ${
                    isDark ? "text-red-400" : "text-red-600"
                  }`}
                >
                  ✗
                </span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Warnings */}
      {data.warnings && data.warnings.length > 0 && (
        <section>
          <h2
            id="warnings"
            className={`text-2xl sm:text-3xl font-bold mb-6 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            ⚠️ Important Warnings
          </h2>
          <div
            className={`border-l-4 p-6 rounded-r space-y-3 ${
              isDark
                ? "bg-yellow-900/20 border-yellow-500"
                : "bg-yellow-50 border-yellow-500"
            }`}
          >
            {data.warnings.map((warning, idx) => (
              <p
                key={idx}
                className={`text-base sm:text-lg leading-relaxed break-words ${
                  isDark ? "text-neutral-300" : "text-gray-700"
                }`}
              >
                <strong
                  className={isDark ? "text-yellow-400" : "text-yellow-700"}
                >
                  ⚠️
                </strong>{" "}
                {warning}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Pro Tips */}
      {data.tips && data.tips.length > 0 && (
        <section>
          <h2
            id="pro-tips"
            className={`text-2xl sm:text-3xl font-bold mb-6 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            Pro Tips
          </h2>
          <div
            className={`border-l-4 p-6 rounded-r space-y-3 ${
              isDark
                ? "bg-green-900/20 border-green-500"
                : "bg-green-50 border-green-500"
            }`}
          >
            {data.tips.map((tip, idx) => (
              <p
                key={idx}
                className={`text-base sm:text-lg leading-relaxed break-words ${
                  isDark ? "text-neutral-300" : "text-gray-700"
                }`}
              >
                💡 {tip}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Interview Questions */}
      {data.interviewQuestions && data.interviewQuestions.length > 0 && (
        <section>
          <h2
            id="interview-questions"
            className={`text-2xl sm:text-3xl font-bold mb-6 break-words ${
              isDark ? "text-neutral-100" : "text-gray-900"
            }`}
          >
            Interview Questions
          </h2>
          <div className="space-y-4">
            {data.interviewQuestions.map((question, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border ${
                  isDark
                    ? "bg-neutral-800 border-neutral-700"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <p
                  className={`text-base sm:text-lg leading-relaxed break-words ${
                    isDark ? "text-neutral-300" : "text-gray-700"
                  }`}
                >
                  <span
                    className={`font-semibold ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    Q{idx + 1}:
                  </span>{" "}
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
