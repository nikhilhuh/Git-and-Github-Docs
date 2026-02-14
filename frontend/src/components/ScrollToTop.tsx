import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component ensures that the window scrolls to the top (0, 0)
 * whenever the application's route (pathname) changes.
 *
 * It should be mounted once inside the <BrowserRouter> in App.tsx.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the window on every pathname change
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render any UI
  return null;
};
