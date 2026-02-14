import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { gitContent } from "../data/docsContent";
import { Section } from "../components/Section";
import { PrevNextNav } from "../components/PrevNextNav";
import { formatDate } from "../utils/formatDate";
import { Helmet } from "react-helmet-async";

interface FeaturePageProps {
  isDark: boolean;
}

export const FeaturePage: React.FC<FeaturePageProps> = ({ isDark }) => {
  const { id } = useParams<{ id: string }>();
  const content = gitContent.find((item) => item.id === id);

  if (!content) {
    return <Navigate to="/" replace />;
  }

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: content.title,
    description: content.description,
    author: {
      "@type": "Organization",
      name: "Git & Github Master Guide",
    },
    datePublished: content.lastUpdated || "2026-02-01",
    dateModified: content.lastUpdated || "2026-02-01",
    publisher: {
      "@type": "Organization",
      name: "Git & Github Master Guide",
      logo: {
        "@type": "ImageObject",
        url: "https://git-and-github-docs.vercel.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://git-and-github-docs.vercel.app/docs/${content.id}`,
    },
  };

  return (
    <>
      <Helmet>
        <title>{`${content.title} | Git & Github Master Guide`}</title>
        <meta name="description" content={content.description} />
        <link
          rel="canonical"
          href={`https://git-and-github-docs.vercel.app/docs/${content.id}`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://git-and-github-docs.vercel.app/docs/${content.id}`}
        />
        <meta
          property="og:title"
          content={`${content.title} | Git & Github Master Guide`}
        />
        <meta property="og:description" content={content.description} />
        <meta
          property="og:image"
          content="https://git-and-github-docs.vercel.app/images/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`https://git-and-github-docs.vercel.app/docs/${content.id}`}
        />
        <meta
          name="twitter:title"
          content={`${content.title} | Git & Github Master Guide`}
        />
        <meta name="twitter:description" content={content.description} />
        <meta
          name="twitter:image"
          content="https://git-and-github-docs.vercel.app/images/og-image.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {/* Page Header */}
      <header className="mb-12 mt-5">
        <h1
          className={`text-4xl sm:text-5xl font-bold mb-4 tracking-tight break-words ${
            isDark ? "text-neutral-100" : "text-gray-900"
          }`}
        >
          {content.title}
        </h1>
        <p
          className={`text-lg sm:text-xl leading-relaxed mb-3 break-words ${
            isDark ? "text-neutral-400" : "text-gray-600"
          }`}
        >
          {content.description}
        </p>
        <div
          className={`text-sm ${isDark ? "text-neutral-500" : "text-gray-500"}`}
        >
          Last updated: {formatDate(content.lastUpdated)}
        </div>
        <hr
          className={`mt-6 ${
            isDark ? "border-neutral-800" : "border-gray-200"
          }`}
        />
      </header>

      {/* Main Content */}
      <Section data={content} isDark={isDark} />

      {/* Navigation */}
      <PrevNextNav currentId={content.id} isDark={isDark} />
    </>
  );
};
