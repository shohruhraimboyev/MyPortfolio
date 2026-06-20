import { BookOpen, Target, Lightbulb, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="col-span-1 md:col-span-12 bg-white/80 dark:bg-[#0a101f]/80 backdrop-blur-sm border border-slate-200 dark:border-blue-900/30 rounded-3xl p-6 sm:p-8 md:p-12 mb-4 shadow-sm dark:shadow-none flex flex-col gap-10"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800/40">
          <UserCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {t.about.title}
          </h3>

          <p className="text-slate-600 dark:text-blue-200/80 text-lg md:text-xl leading-relaxed max-w-4xl font-medium">
            {t.about.desc}
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-blue-900/40 mt-2">
        {/* STORY */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-200 dark:border-purple-800/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.about.story.title}
            </h4>
          </div>

          <p className="text-slate-600 dark:text-blue-200/70 leading-relaxed text-[15px]">
            {t.about.story.desc}
          </p>
        </div>

        {/* PHILOSOPHY */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200 dark:border-amber-800/30">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.about.philosophy.title}
            </h4>
          </div>

          <p className="text-slate-600 dark:text-blue-200/70 leading-relaxed text-[15px]">
            {t.about.philosophy.desc}
          </p>
        </div>

        {/* BEYOND */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/30">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.about.beyond.title}
            </h4>
          </div>

          <p className="text-slate-600 dark:text-blue-200/70 leading-relaxed text-[15px]">
            {t.about.beyond.desc}
          </p>
        </div>
      </div>
    </motion.section>
  );
};
