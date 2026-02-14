import React from "react";
import { Link } from "react-router-dom";
import { productionContent } from "../data/docsContent";
import { formatDate } from "../utils/formatDate";
import { slugify } from "../utils/slugify";
import { Helmet } from "react-helmet-async";

interface IntroProps {
  isDark: boolean;
}

export const Intro: React.FC<IntroProps> = ({ isDark }) => {
  const categories = Array.from(
    new Set(productionContent.map((i) => i.category)),
  );

  return (
    <>
      <Helmet>
        <title>
          Git &amp; GitHub Master Guide | Complete Version Control Documentation
        </title>
        <meta
          name="description"
          content="Master Git and GitHub with our comprehensive guide. Learn version control, branching, collaboration, and professional development workflows."
        />
        <link rel="canonical" href="https://production-code.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://production-code.com/" />
        <meta
          property="og:title"
          content="Git &amp; GitHub Master Guide | Complete Version Control Documentation"
        />
        <meta
          property="og:description"
          content="Master Git and GitHub with our comprehensive guide. Learn version control, branching, collaboration, and professional development workflows."
        />
        <meta
          property="og:image"
          content="https://production-code.com/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://production-code.com/" />
        <meta
          name="twitter:title"
          content="Git &amp; GitHub Master Guide | Complete Version Control Documentation"
        />
        <meta
          name="twitter:description"
          content="Master Git and GitHub with our comprehensive guide. Learn version control, branching, collaboration, and professional development workflows."
        />
        <meta
          name="twitter:image"
          content="https://production-code.com/og-image.png"
        />
      </Helmet>
      {/* Hero Header */}
      <header className="mb-16 mt-5" id="overview">
        <h1
          className={`text-4xl sm:text-5xl font-bold mb-4 tracking-tight break-words ${
            isDark ? "text-neutral-100" : "text-gray-900"
          }`}
        >
          Git &amp; GitHub Master Guide
        </h1>
        <p
          className={`text-lg sm:text-xl leading-relaxed mb-3 break-words ${
            isDark ? "text-neutral-400" : "text-gray-600"
          }`}
        >
          Master Git and GitHub from fundamentals to advanced workflows. Learn
          version control, branching strategies, collaboration, and best
          practices.
        </p>
        <p
          className={`text-base sm:text-lg leading-relaxed break-words ${
            isDark ? "text-neutral-400" : "text-gray-600"
          }`}
        >
          This comprehensive guide covers {productionContent.length} topics in
          chronological order. Start with Git fundamentals and progress through
          GitHub workflows to become a version control expert.
        </p>
        <div
          className={`mt-8 text-sm ${isDark ? "text-neutral-500" : "text-gray-500"}`}
        >
          Last updated: {formatDate()}
        </div>
        <hr
          className={`mt-6 ${
            isDark ? "border-neutral-800" : "border-gray-200"
          }`}
        />
      </header>

      {/* Category Sections */}
      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category}>
            <h2
              id={slugify(category)}
              className={`text-2xl sm:text-3xl font-bold mb-6 flex items-center break-words ${
                isDark ? "text-neutral-200" : "text-gray-800"
              }`}
            >
              <span
                className={`text-sm font-semibold mr-3 px-2.5 py-0.5 rounded transition-colors ${
                  isDark
                    ? "bg-blue-900/30 text-blue-300"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {category}
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {productionContent
                .filter((item) => item.category === category)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/docs/${item.id}`}
                    className={`block group p-6 border rounded-lg transition-all duration-200 ${
                      isDark
                        ? "bg-neutral-900 border-neutral-800 hover:border-blue-500 hover:shadow-lg"
                        : "bg-white border-gray-200 hover:shadow-lg hover:border-blue-300"
                    }`}
                  >
                    <h3
                      className={`text-lg font-semibold mb-2 transition-colors ${
                        isDark
                          ? "text-neutral-100 group-hover:text-blue-400"
                          : "text-gray-900 group-hover:text-blue-600"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors break-words ${
                        isDark ? "text-neutral-400" : "text-gray-500"
                      }`}
                    >
                      {item.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
