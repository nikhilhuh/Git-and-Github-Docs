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

      {/* Detailed Explanation */}
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

      {/* Code Examples */}
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
          {data.codeExamples.map((example, idx) => (
            <div key={idx} className="space-y-6">
              <h3
                id={slugify(example.label)}
                className={`text-lg sm:text-xl font-semibold break-words ${
                  isDark ? "text-neutral-200" : "text-gray-800"
                }`}
              >
                {example.label}
              </h3>

              {/* Wrong Example */}
              <div className="space-y-3">
                <h4
                  className={`text-base sm:text-lg font-semibold break-words ${
                    isDark ? "text-red-400" : "text-red-600"
                  }`}
                >
                  ❌ Wrong
                </h4>
                <CodeBlock
                  code={example.nonProductionCode}
                  label="Non-Production"
                  variant="danger"
                  isDark={isDark}
                />
              </div>

              {/* Right Example */}
              <div className="space-y-3">
                <h4
                  className={`text-base sm:text-lg font-semibold break-words ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                >
                  ✅ Right
                </h4>
                <CodeBlock
                  code={example.productionCode}
                  label="Production"
                  variant="success"
                  isDark={isDark}
                />
              </div>

              {/* Explanation */}
              <p
                className={`text-sm sm:text-base leading-relaxed italic break-words ${
                  isDark ? "text-neutral-400" : "text-gray-600"
                }`}
              >
                <strong
                  className={isDark ? "text-neutral-300" : "text-gray-700"}
                >
                  Why this matters:
                </strong>{" "}
                {example.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
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

      {/* Common Mistakes */}
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

      {/* Pro Tips (Optional) */}
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
    </article>
  );
};
