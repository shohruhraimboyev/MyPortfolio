import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useScroll } from "../hooks/useScroll";
import { PI } from "../data/PersonalInfo";
import { FaGithub, FaDownload } from "react-icons/fa";
import {
  SiBootstrap,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TerminalTyping } from "./TerminalTyping";

const toolkit = [
  { name: "JavaScript", icon: SiJavascript, color: "text-[#f0b90b]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
  { name: "Git", icon: SiGit, color: "text-[#f05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-slate-800 dark:text-slate-100" },
  { name: "Postman", icon: SiPostman, color: "text-[#ff6c37]" },
  { name: "HTML5", icon: SiHtml5, color: "text-[#e34f26]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38bdf8]" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952b3]" },
  { name: "React", icon: SiReact, color: "text-[#61dafb]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-800 dark:text-slate-100" },
];

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
      {/* CONTENT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col text-left">
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

            {/* CV DOWNLOAD */}
            <a
              href="/Shohruh_Raimboyev_CV.pdf"
              download="Shohruh_Raimboyev_CV.pdf"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-900/50 font-medium rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaDownload className="w-4 h-4" />
              CV
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

        {/* RIGHT SIDE — TERMINAL */}
        <div className="flex flex-col items-center lg:items-end">
          <TerminalTyping />

          <section
            aria-label="Core development toolkit"
            className="mt-5 w-full max-w-sm"
          >
            <p className="mb-2.5 text-center lg:text-left text-[10px] font-mono font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-blue-300/50">
              Core toolkit
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-2" role="list">
              {toolkit.map(({ name, icon: Icon, color }) => (
                <li key={name}>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/60 px-2.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm shadow-slate-200/50 transition-colors hover:border-blue-200 hover:text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/20 dark:text-blue-100/75 dark:shadow-none dark:hover:border-blue-700 dark:hover:text-blue-200">
                    <Icon aria-hidden="true" className={`h-3.5 w-3.5 ${color}`} />
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </motion.section>
  );
};
