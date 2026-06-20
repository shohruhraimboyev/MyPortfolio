import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { projectImages } from "../data/projects";
import { FaGithub } from "react-icons/fa6";

export const Projects = () => {
  const { t } = useLanguage();

  const projects = t.projects.items;

  return (
    <>
      {/* HEADER */}
      <div
        id="projects"
        className="col-span-1 md:col-span-12 mt-8 mb-4 flex justify-between items-end px-2"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {t.projects.title}
        </h2>

        <a
          href="#"
          className="hidden sm:flex text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium items-center gap-1 group"
        >
          {t.projects.viewAll}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* PROJECT LIST */}
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="col-span-1 md:col-span-6 lg:col-span-4 group relative rounded-3xl bg-white/80 dark:bg-[#0a101f]/80 backdrop-blur-sm border border-slate-200 dark:border-blue-900/30 overflow-hidden hover:border-blue-400 dark:hover:border-blue-600/50 transition-all shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col h-full"
        >
          {/* IMAGE */}
          <div className="h-48 md:h-56 overflow-hidden relative border-b border-slate-200 dark:border-blue-900/30 p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-100 dark:bg-blue-950/20">
              <div className="absolute inset-0 bg-blue-900/5 dark:bg-blue-950/40 mix-blend-multiply group-hover:opacity-0 transition-opacity z-10" />

              <img
                src={
                  project.image || projectImages[index % projectImages.length]
                }
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-8 flex-1 flex flex-col">
            {/* TITLE + LINKS */}
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-xl font-bold text-slate-800 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                {project.title}
              </h4>

              <div className="flex items-center gap-2">
                {/* GITHUB ICON */}
                <div className="relative group/tooltip">
                  <a
                    href={project.githubLink || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-blue-950 flex items-center justify-center text-slate-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-600 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <span className="absolute -top-9 right-0 whitespace-nowrap text-xs font-medium px-2.5 py-1.5 rounded-lg bg-slate-800 dark:bg-blue-950 text-white opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none">
                    Kodni ko'rish
                  </span>
                </div>

                {/* LIVE DEMO ICON */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-blue-950 flex items-center justify-center text-slate-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-600 dark:text-blue-200/60 text-sm mb-6 flex-1 leading-relaxed">
              {project.description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag: string, tIndex: number) => (
                <span
                  key={tIndex}
                  className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-lg border border-blue-100 dark:border-blue-900/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};
