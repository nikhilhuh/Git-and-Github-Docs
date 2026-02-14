import React from "react";

interface NavbarProps {
  onMenuClick: () => void;
  isDark: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick, isDark }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 transition-colors lg:hidden ${
        isDark
          ? "bg-neutral-900 border-b border-neutral-800"
          : "bg-white border-b border-gray-200"
      }`}
    >
      {/* Left: Brand text (small) */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white text-xs font-bold">
          GH
        </div>
        <span
          className={`text-sm font-medium ${isDark ? "text-neutral-100" : "text-gray-900"}`}
        >
          Git &amp; GitHub
        </span>
      </div>

      {/* Right: Hamburger button */}
      <button
        onClick={onMenuClick}
        className={`p-2 rounded-md transition-colors ${
          isDark
            ? "text-neutral-300 hover:bg-neutral-800"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        aria-label="Open menu"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};
