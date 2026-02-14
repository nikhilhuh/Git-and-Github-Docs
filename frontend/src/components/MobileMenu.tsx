import React, { useMemo, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ContentSection } from "../data/docsContent";

interface MobileMenuProps {
  sections: ContentSection[];
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  sections,
  isOpen,
  onClose,
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

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "translate-x-full opacity-0 pointer-events-none"
      } ${isDark ? "bg-neutral-900" : "bg-white"}`}
      style={{ height: "100dvh", width: "100vw" }}
    >
      {/* Header with close button */}
      <div
        className={`flex items-center justify-between px-4 h-16 border-b ${
          isDark ? "border-neutral-800" : "border-gray-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white text-xs font-bold">
            PC
          </div>
          <span
            className={`text-sm font-medium ${isDark ? "text-neutral-100" : "text-gray-900"}`}
          >
            Production Code
          </span>
        </div>

        {/* Close button (X icon) */}
        <button
          onClick={onClose}
          className={`p-2 rounded-md transition-colors ${
            isDark
              ? "text-neutral-300 hover:bg-neutral-800"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Scrollable menu content */}
      <div
        className="flex-1 overflow-y-auto px-3 py-4"
        style={{ height: "calc(100dvh - 8rem)" }}
      >
        {/* Introduction - Standalone Page Link */}
        <div className="mb-6">
          <NavLink
            to="/"
            onClick={onClose}
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
                    onClick={onClose}
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

      {/* Theme toggle at bottom */}
      <div
        className={`px-4 py-3 border-t ${
          isDark ? "border-neutral-800" : "border-gray-200"
        }`}
      >
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
          className={`relative w-full h-8 rounded-full transition-all duration-300 ${
            isDark ? "bg-neutral-800" : "bg-gray-200"
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
    </div>
  );
};
