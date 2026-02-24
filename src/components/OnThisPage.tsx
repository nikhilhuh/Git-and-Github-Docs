import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface OnThisPageProps {
  isDark: boolean;
}

export const OnThisPage: React.FC<OnThisPageProps> = ({ isDark }) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  // 1. Robust Heading Extraction (MutationObserver)
  useEffect(() => {
    const extractHeadings = () => {
      const mainElement = document.querySelector("main");
      if (!mainElement) return;

      const headingElements = Array.from(
        mainElement.querySelectorAll("h2, h3"),
      ).filter((el) => {
        // Filter out headings that are inside a code example section
        // We only want main h2s and h3s that are not labels/titles of examples
        const isExampleLabel =
          el.tagName === "H3" &&
          el.closest("section")?.querySelector("h2")?.id === "code-examples";
        return !isExampleLabel;
      });

      const items: HeadingItem[] = headingElements
        .map((el) => ({
          id: el.id,
          text: el.textContent || "",
          level: parseInt(el.tagName.substring(1)),
        }))
        .filter((item) => item.id); // Only include headings with IDs

      setHeadings(items);
    };

    // Initial extraction
    extractHeadings();

    // Re-run extraction if DOM changes (e.g., lazy loaded content)
    const observer = new MutationObserver(extractHeadings);
    const mainElement = document.querySelector("main");
    if (mainElement) {
      observer.observe(mainElement, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, [location.pathname]);

  // 2. Scroll Spy Logic (Scroll Event)
  useEffect(() => {
    const handleScroll = () => {
      if (headings.length === 0) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= docHeight - 50) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }

      // Check if we're at the top
      if (scrollPosition < 50) {
        setActiveId(headings[0]?.id || "");
        return;
      }

      // Find the current section
      // We look for the last heading that is *above* a certain threshold from the top of the viewport
      const offset = 100; // 100px from top
      let currentSectionId = "";

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          // If the element is above the offset (meaning we've scrolled past it)
          if (top <= offset) {
            currentSectionId = heading.id;
          } else {
            // Once we find an element below the offset, we stop because subsequent headings
            // will definitely be below too
            break;
          }
        }
      }

      if (currentSectionId) {
        setActiveId(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount to set initial active state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 24; // Align precisely with content start
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL without pushState to avoid back button issues with fragments
      window.history.replaceState(null, "", `#${id}`);
      setActiveId(id);
      setIsMobileOpen(false); // Close mobile trigger on click
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Collapsible TOC (below lg) */}
      <div
        className={`lg:hidden mb-6 fixed top-16 right-0 left-0 z-40 ${
          isDark ? "text-neutral-200" : "text-gray-900"
        }`}
      >
        {/* Wrapper must be relative */}
        <div className="relative">
          {/* Fixed / Sticky trigger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`w-full px-4 py-3 flex items-center justify-between text-sm font-medium  ${
              isDark
                ? "bg-neutral-900 border border-neutral-800"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <span>On this page</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isMobileOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Absolute dropdown */}
          {isMobileOpen && (
            <nav
              className={`absolute left-0 right-0 z-40 shadow-lg ${
                isDark
                  ? "bg-neutral-900 border border-neutral-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="px-4 py-3 flex flex-col space-y-3 max-h-[60vh] overflow-y-auto">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => handleLinkClick(e, heading.id)}
                    className={`block text-sm transition-colors ${
                      heading.level === 3 ? "ml-4" : ""
                    } ${
                      activeId === heading.id
                        ? isDark
                          ? "text-blue-400 font-medium"
                          : "text-blue-600 font-medium"
                        : isDark
                          ? "text-neutral-500"
                          : "text-gray-600"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Desktop Sticky TOC (lg and above) */}
      <aside className="hidden lg:block fixed top-0 right-0 w-64 h-screen overflow-y-auto px-6 pt-6 mt-5 transition-colors">
        <div className="space-y-4">
          <p
            className={`text-xs font-bold uppercase tracking-widest ${
              isDark ? "text-neutral-500" : "text-gray-400"
            }`}
          >
            On this page
          </p>
          <nav className="flex flex-col space-y-3">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => handleLinkClick(e, heading.id)}
                className={`text-sm transition-all duration-200 hover:text-blue-500 ${
                  heading.level === 3 ? "ml-4" : ""
                } ${
                  activeId === heading.id
                    ? isDark
                      ? "text-blue-400 font-medium"
                      : "text-blue-600 font-medium"
                    : isDark
                      ? "text-neutral-500"
                      : "text-gray-500"
                }`}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
