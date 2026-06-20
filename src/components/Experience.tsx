import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <div
      id="experience"
      className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-12"
    >
      {/* EXPERIENCE */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 dark:bg-[#0a101f]/80 backdrop-blur-sm border border-slate-200 dark:border-blue-900/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm dark:shadow-none"
      >
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-500" />
          {t.exp.prof}
        </h3>

        <div className="space-y-10">
          {t.exp.items.map((job, idx) => (
            <div
              key={idx}
              className="relative pl-6 border-l-2 border-slate-200 dark:border-blue-900/40"
            >
              <div className="absolute w-4 h-4 bg-white dark:bg-[#0a101f] border-2 border-blue-500 rounded-full -left-[9px] top-1"></div>

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-2">
                <h4 className="text-lg font-bold text-slate-800 dark:text-blue-200">
                  {job.role}
                </h4>

                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-blue-950/50 px-2 py-1 rounded w-fit border border-slate-200 dark:border-transparent">
                  {job.duration}
                </span>
              </div>

              <p className="text-blue-600 dark:text-blue-400/80 font-medium text-sm mb-3">
                {job.company}
              </p>

              <p className="text-sm text-slate-600 dark:text-blue-200/60 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* EDUCATION */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 dark:bg-[#0a101f]/80 backdrop-blur-sm border border-slate-200 dark:border-blue-900/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm dark:shadow-none"
      >
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-500" />
          {t.exp.edu}
        </h3>

        <div className="space-y-10">
          {t.exp.education.map((edu, idx) => (
            <div
              key={idx}
              className="relative pl-6 border-l-2 border-slate-200 dark:border-blue-900/40"
            >
              <div className="absolute w-4 h-4 bg-white dark:bg-[#0a101f] border-2 border-blue-500 rounded-full -left-[9px] top-1"></div>

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-2">
                <h4 className="text-lg font-bold text-slate-800 dark:text-blue-200">
                  {edu.degree}
                </h4>

                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-blue-950/50 px-2 py-1 rounded w-fit border border-slate-200 dark:border-transparent">
                  {edu.duration}
                </span>
              </div>

              <p className="text-sm text-blue-600 dark:text-blue-400/80 font-medium mb-3">
                {edu.school}
              </p>

              <p className="text-sm text-slate-600 dark:text-blue-200/60 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* LANGUAGES */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 dark:bg-[#0a101f]/80 backdrop-blur-sm border border-slate-200 dark:border-blue-900/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm dark:shadow-none lg:col-span-2 xl:col-span-1"
      >
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <Globe className="w-6 h-6 text-blue-600 dark:text-blue-500" />
          {t.exp.languages.title}
        </h3>

        <div className="space-y-6">
          {t.exp.languages.items.map((lang, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b border-slate-100 dark:border-blue-900/30 pb-4 last:border-0 last:pb-0"
            >
              <span className="text-lg font-medium text-slate-800 dark:text-blue-100">
                {lang.name}
              </span>

              <span className="text-sm font-mono text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-blue-950/50 px-3 py-1 rounded-lg border border-slate-200 dark:border-blue-900/40">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
