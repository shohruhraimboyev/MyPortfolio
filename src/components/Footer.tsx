import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-blue-900/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-blue-300/50 font-medium">
      <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      <p>{t.footer}</p>
    </footer>
  );
};
