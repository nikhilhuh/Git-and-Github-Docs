import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DocsLayout } from "./layout/DocsLayout";
import { ScrollToTop } from "./components/ScrollToTop";
import { GlobalLoader } from "./components/GlobalLoader";

// Lazy-loaded components
const Intro = lazy(() =>
  import("./pages/Intro").then((module) => ({ default: module.Intro })),
);
const FeaturePage = lazy(() =>
  import("./pages/FeaturePage").then((module) => ({
    default: module.FeaturePage,
  })),
);

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    // Artificial delay to show optimization is happening and ensure assets are ready
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  if (isAppLoading) {
    return <GlobalLoader isDark={isDark} />;
  }

  return (
    <div
      className={
        isDark
          ? "dark bg-neutral-900 text-neutral-100 min-h-screen"
          : "bg-white text-neutral-900 min-h-screen"
      }
    >
      <BrowserRouter>
        <ScrollToTop />
        <DocsLayout isDark={isDark} toggleTheme={toggleTheme}>
          <Suspense fallback={<GlobalLoader isDark={isDark} />}>
            <Routes>
              <Route path="/" element={<Intro isDark={isDark} />} />
              <Route
                path="/docs/:id"
                element={<FeaturePage isDark={isDark} />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </DocsLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
