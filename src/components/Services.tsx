import { motion } from "framer-motion";
import { Layout, Layers, Database, Code2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const serviceIcons = [Layout, Layers, Database, Code2];

export const Services = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="col-span-1 md:col-span-12 lg:col-span-12 bg-white/80 dark:bg-[#0a101f]/80 backdrop-blur-sm border border-slate-200 dark:border-blue-900/30 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-none"
    >
      {/* TITLE */}
      <h3 className="text-blue-600 dark:text-blue-400 font-medium tracking-wide text-sm uppercase mb-6">
        {t.services.title}
      </h3>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.services.items.map((svc, i) => {
          const Icon = serviceIcons[i % serviceIcons.length];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col gap-3 group"
            >
              {/* ICON */}
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-slate-200 dark:border-blue-900/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 transition-colors">
                <Icon className="w-6 h-6" />
              </div>

              {/* TITLE */}
              <h4 className="text-slate-800 dark:text-blue-100 text-lg font-semibold mt-2">
                {svc.title}
              </h4>

              {/* DESC */}
              <p className="text-sm text-slate-500 dark:text-blue-200/60 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-blue-200/80 transition-colors">
                {svc.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
