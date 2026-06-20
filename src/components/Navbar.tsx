import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { useScroll } from "../hooks/useScroll";

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { activeSection, scrollToTarget } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-md border-b border-slate-200 dark:border-blue-900/30 transition-colors shadow-sm dark:shadow-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => scrollToTarget(e, "home")}
          className="flex items-center gap-2 sm:gap-3 font-bold text-lg sm:text-xl tracking-tight text-blue-600 dark:text-blue-400 group"
        >
          <div className="bg-blue-50 dark:bg-blue-950 p-1.5 sm:p-2 rounded-lg border border-blue-200 dark:border-blue-900/50 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <span>Shohruh</span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToTarget(e, id)}
              className={`relative transition-colors ${
                activeSection === id
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-500 dark:text-blue-300/70 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {t.nav[id]}

              {activeSection === id && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-6 left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400"
                />
              )}
            </a>
          ))}

          {/* ACTIONS */}
          <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-blue-900/30 ml-2">
            {/* LANGUAGE */}
            <div className="flex bg-slate-100 dark:bg-blue-950 p-1 rounded-lg border border-slate-200 dark:border-blue-900/50">
              {(["en", "uz", "ru"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs font-semibold rounded uppercase transition-colors ${
                    lang === l
                      ? "bg-white dark:bg-blue-900 shadow-sm text-blue-600 dark:text-blue-400"
                      : "text-slate-500 dark:text-blue-300/50 hover:text-slate-700 dark:hover:text-blue-200"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-blue-950 border border-slate-200 dark:border-blue-900/50 rounded-lg transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-600 dark:text-blue-300 bg-slate-100 dark:bg-blue-950 rounded-lg border border-slate-200 dark:border-blue-900/50"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-blue-900/30 bg-white/95 dark:bg-[#030712]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) =>
                    scrollToTarget(e, id, () => setIsMenuOpen(false))
                  }
                  className={`text-lg font-medium p-3 rounded-xl transition-colors ${
                    activeSection === id
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-blue-300/80 hover:bg-slate-50 dark:hover:bg-blue-950"
                  }`}
                >
                  {t.nav[id]}
                </a>
              ))}

              {/* MOBILE ACTIONS */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-blue-900/30">
                <div className="flex gap-2">
                  {(["en", "uz", "ru"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1.5 text-sm font-semibold rounded-lg uppercase border transition-colors ${
                        lang === l
                          ? "bg-blue-50 dark:bg-blue-900/40 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
                          : "bg-transparent border-slate-200 dark:border-blue-900/40 text-slate-500 dark:text-blue-300/60"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                <button
                  onClick={toggleTheme}
                  className="p-2.5 text-slate-600 dark:text-blue-300 bg-slate-100 dark:bg-blue-950 rounded-lg border border-slate-200 dark:border-blue-900/50"
                >
                  {theme === "dark" ? <Sun /> : <Moon />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
