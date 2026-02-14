import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { MobileMenu } from "../components/MobileMenu";
import { productionContent } from "../data/docsContent";
import { OnThisPage } from "../components/OnThisPage";

interface DocsLayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({
  children,
  isDark,
  toggleTheme,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile navbar (hidden on lg+) */}
      <Navbar isDark={isDark} onMenuClick={() => setMobileMenuOpen(true)} />

      {/* Desktop sidebar (hidden on < lg) */}
      <Sidebar
        sections={productionContent}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Mobile fullscreen menu */}
      <MobileMenu
        sections={productionContent}
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Layout Wrapper */}
      <div className="flex min-h-screen">
        {/* Main Content Area */}
        <main className="flex-1 pt-28 lg:pt-6 pb-20 px-4 md:px-8 lg:px-12 lg:pr-80 lg:ml-64 max-w-full overflow-x-hidden transition-all duration-300">
          <div className="max-w-4xl mx-auto">
            <OnThisPage isDark={isDark} />
            {children}
          </div>
        </main>
      </div>
    </>
  );
};
