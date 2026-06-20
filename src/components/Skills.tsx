import { motion } from "framer-motion";
import {
  Code,
  Paintbrush,
  Boxes,
  Network,
  Layout,
  Wrench,
  Cpu,
  Play,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { categorizedSkills } from "../data/Skills";

const categoryIcons = [
  Code,
  Paintbrush,
  Boxes,
  Network,
  Layout,
  Wrench,
  Cpu,
  Play,
];

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="col-span-1 md:col-span-12 bg-white/80 dark:bg-[#0a101f]/80 backdrop-blur-sm border border-slate-200 dark:border-blue-900/30 rounded-3xl p-6 sm:p-8 md:p-12 mb-4 shadow-sm dark:shadow-none"
    >
      {/* HEADER */}
      <div className="flex flex-col mb-10">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center md:text-left">
          {t.tech.title}
        </h3>

        <p className="text-slate-600 dark:text-blue-200/60 leading-relaxed lg:text-lg max-w-2xl text-center md:text-left">
          {t.tech.desc}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categorizedSkills.map((category, idx) => {
          const Icon = categoryIcons[idx % categoryIcons.length];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col gap-3"
            >
              {/* CATEGORY TITLE */}
              <h4 className="text-sm font-bold text-slate-800 dark:text-blue-100 flex items-center gap-2">
                <Icon className="w-5 h-5 text-blue-500" />
                {category.category}
              </h4>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((tech: string, tIdx: number) => (
                  <div
                    key={tIdx}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-blue-950/40 border border-slate-200 dark:border-blue-900/40 hover:border-slate-300 dark:hover:border-blue-700/50 hover:bg-white dark:hover:bg-blue-900/30 transition-all shadow-sm text-sm text-slate-700 dark:text-blue-200 font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
