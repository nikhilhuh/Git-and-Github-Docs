import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { ContentSection } from "../data/docsContent";

interface SidebarProps {
  sections: ContentSection[];
  isDark: boolean;
  toggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  isDark,
  toggleTheme,
}) => {
  const grouped = useMemo(() => {
    const groups: Record<string, ContentSection[]> = {};
    sections.forEach((s) => {
      if (!groups[s.category]) groups[s.category] = [];
      groups[s.category].push(s);
    });
    return groups;
  }, [sections]);

  return (
    <>
      <aside
        className={`hidden lg:flex fixed top-0 bottom-0 left-0 w-64 border-r flex-col z-40 ${
          isDark
            ? "bg-neutral-900 border-neutral-800"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Navigation Wrapper for SEO */}
        <nav
          className="flex-1 flex flex-col h-full"
          aria-label="Main Documentation Navigation"
        >
          {/* ========================================
            A. SIDEBAR HEADER (Static, Non-clickable)
        ======================================== */}
          <div
            className={`px-4 pt-6 pb-4 border-b ${
              isDark ? "border-neutral-800" : "border-gray-200"
            }`}
          >
            {/* Logo/Icon placeholder - you can add an icon here */}
            <div className="flex items-center gap-2 mb-1">
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-bold ${
                  isDark ? "bg-blue-600 text-white" : "bg-blue-600 text-white"
                }`}
              >
                GH
              </div>
              <div>
                <h2
                  className={`text-base font-semibold ${
                    isDark ? "text-neutral-100" : "text-gray-900"
                  }`}
                >
                  Git &amp; GitHub Guide
                </h2>
                <p
                  className={`text-xs ${
                    isDark ? "text-neutral-300" : "text-gray-600"
                  }`}
                >
                  Master Version Control
                </p>
              </div>
            </div>
          </div>

          {/* ========================================
            B. NAVIGATION AREA (Scrollable)
        ======================================== */}
          <div className="flex-1 overflow-y-auto px-3 py-4">
            {/* Introduction - Standalone Page Link */}
            <div className="mb-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm font-medium rounded-md transition-all ${
                    isActive
                      ? isDark
                        ? "bg-blue-500/10 text-blue-400 font-semibold"
                        : "bg-blue-50 text-blue-700 font-semibold"
                      : isDark
                        ? "text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                Introduction
              </NavLink>
            </div>

            {/* Section Groups */}
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category} className="mb-6">
                {/* Section Header - Non-clickable Label */}
                <div
                  className={`text-xs font-semibold uppercase tracking-wider mb-2 px-3 ${
                    isDark ? "text-neutral-300" : "text-gray-700"
                  }`}
                >
                  {category}
                </div>

                {/* Page Links under this section */}
                <ul className="space-y-0.5">
                  {items.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={`/docs/${item.id}`}
                        className={({ isActive }) =>
                          `group relative block pl-6 pr-3 py-2 text-sm rounded-md transition-all ${
                            isActive
                              ? isDark
                                ? "bg-blue-500/10 text-blue-400 font-medium"
                                : "bg-blue-50 text-blue-700 font-medium"
                              : isDark
                                ? "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`
                        }
                      >
                        {/* Active indicator - left accent bar */}
                        {({ isActive }) => (
                          <>
                            {isActive && (
                              <span
                                className={`absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
                                  isDark ? "bg-blue-400" : "bg-blue-600"
                                }`}
                              />
                            )}
                            {item.title}
                          </>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ========================================
            C. THEME TOGGLE (Bottom Utility)
        ======================================== */}
          <div
            className={`px-4 py-3 border-t ${
              isDark ? "border-neutral-800" : "border-gray-200"
            }`}
          >
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle theme"
              className={`relative w-full h-8 rounded-full transition-all duration-300 hover:cursor-pointer focus:outline-none ${
                isDark
                  ? "bg-neutral-800 focus:ring-blue-500 focus:ring-offset-neutral-900"
                  : "bg-gray-200 focus:ring-blue-500 focus:ring-offset-white"
              }`}
            >
              {/* Sun and Moon icons on track */}
              <div className="absolute inset-0 flex items-center justify-between px-2.5">
                <span
                  className={`text-sm transition-opacity ${
                    !isDark ? "opacity-100" : "opacity-40"
                  }`}
                >
                  ☀️
                </span>
                <span
                  className={`text-sm transition-opacity ${
                    isDark ? "opacity-100" : "opacity-40"
                  }`}
                >
                  🌙
                </span>
              </div>

              {/* Sliding knob */}
              <div
                className={`absolute top-1 h-6 w-[calc(50%-0.375rem)] rounded-full shadow-sm transition-all duration-300 flex items-center justify-center ${
                  isDark
                    ? "left-[calc(50%+0.125rem)] bg-neutral-700"
                    : "left-1 bg-white"
                }`}
              >
                <span className="text-xs">{isDark ? "🌙" : "☀️"}</span>
              </div>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};
