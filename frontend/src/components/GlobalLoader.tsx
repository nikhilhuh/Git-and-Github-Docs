import React, { useState, useEffect } from "react";

interface GlobalLoaderProps {
  isDark: boolean;
}

export const GlobalLoader: React.FC<GlobalLoaderProps> = ({ isDark }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Loading app...",
    "Preparing production...",
    "Documents are loading...",
    "Optimizing experience...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-colors duration-500 ${
        isDark ? "bg-neutral-900" : "bg-white"
      }`}
    >
      <div className="relative mb-6">
        <img
          src="/images/github.png"
          alt="Loading..."
          className={`w-16 h-16 animate-pulse rounded-full ${
            isDark ? "bg-white" : ""
          }`}
        />
      </div>

      <div className="space-y-2 text-center">
        <h2
          className={`text-lg font-medium tracking-tight h-7 overflow-hidden ${
            isDark ? "text-neutral-100" : "text-gray-900"
          }`}
        >
          <div key={messageIndex} className="animate-[slideUp_0.5s_ease-out]">
            {messages[messageIndex]}
          </div>
        </h2>
        <div
          className={`text-xs uppercase tracking-widest font-bold ${
            isDark ? "text-neutral-500" : "text-gray-400"
          }`}
        >
          Please wait a moment
        </div>
      </div>

      {/* CSS for custom animation */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
