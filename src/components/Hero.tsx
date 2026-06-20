import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScroll } from "../hooks/useScroll";
import { PI } from "../data/PersonalInfo";
import { FaGithub } from "react-icons/fa";

export const Hero = () => {
  const { t } = useLanguage();
  const { scrollToTarget } = useScroll();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-1 md:col-span-12 lg:col-span-12 bg-white/80 dark:bg-[#0a101f]/80 backdrop-blur-sm border border-slate-200 dark:border-blue-900/30 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden group shadow-sm dark:shadow-none"
    >
      {/* BACKGROUND ICON */}
      <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-20 transition-opacity">
        <Terminal className="w-24 h-24 sm:w-32 sm:h-32 text-blue-500" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col h-full justify-center text-left">
        {/* STATUS BADGE */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-mono mb-6 w-max">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          {t.hero.greeting}
        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
          {t.hero.heading1}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
            {t.hero.heading2}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-blue-200/70 max-w-xl mb-8 leading-relaxed font-light whitespace-pre-line">
          {t.hero.desc}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4">
          {/* SCROLL BUTTON */}
          <a
            href="#projects"
            onClick={(e) => scrollToTarget(e, "projects")}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-600/20 dark:shadow-blue-900/30 text-sm sm:text-base text-center flex-1 sm:flex-none"
          >
            {t.hero.viewWork}
          </a>

          {/* GITHUB */}
          <a
            href={PI.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 sm:py-3 bg-white dark:bg-blue-950/40 text-slate-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-100 hover:bg-slate-50 dark:hover:bg-blue-900/50 border border-slate-200 dark:border-blue-900/50 font-medium rounded-xl transition-all flex items-center justify-center"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
