import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Theme } from "../types";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // 🔥 REAL FIX: Tailwind dark mode class apply
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen font-sans transition-colors duration-300 pb-24 bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-slate-900 dark:bg-[#030712] dark:text-blue-100 dark:selection:bg-blue-900 dark:selection:text-white">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
