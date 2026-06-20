import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { PI } from "../data/PersonalInfo";

export const Contact = () => {
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:${PI.email}?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;

    alert(
      lang === "uz"
        ? "Xabar yuborish uchun email ilovangiz ochilmoqda..."
        : lang === "ru"
          ? "Открывается почтовое приложение..."
          : "Opening your email client...",
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="col-span-1 md:col-span-12 bg-white/80 dark:bg-[#0a101f]/80 backdrop-blur-sm border border-slate-200 dark:border-blue-900/30 rounded-3xl p-6 sm:p-8 md:p-12 mt-12 shadow-sm dark:shadow-none"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {t.contact.title}
          </h3>

          <p className="text-slate-600 dark:text-blue-200/70 mb-8 leading-relaxed max-w-md">
            {t.contact.desc}
          </p>

          <div className="space-y-4">
            {/* EMAIL */}
            <a
              href={`mailto:${PI.email}`}
              className="flex items-center gap-4 text-slate-700 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-blue-950 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium text-lg">{PI.email}</span>
            </a>

            {/* LINKEDIN */}
            <a
              href={PI.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-slate-700 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-blue-950 flex items-center justify-center">
                <FaLinkedinIn className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium text-lg">LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-blue-300 ml-1">
                {t.contact.name}
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-4 py-3 bg-slate-50 dark:bg-blue-950/40 border border-slate-200 dark:border-blue-900/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-800 dark:text-white"
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-blue-300 ml-1">
                {t.contact.email}
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-3 bg-slate-50 dark:bg-blue-950/40 border border-slate-200 dark:border-blue-900/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-800 dark:text-white"
              />
            </div>
          </div>

          {/* SUBJECT */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-blue-300 ml-1">
              {t.contact.subj}
            </label>
            <input
              required
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="px-4 py-3 bg-slate-50 dark:bg-blue-950/40 border border-slate-200 dark:border-blue-900/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-800 dark:text-white"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-blue-300 ml-1">
              {t.contact.msg}
            </label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="px-4 py-3 bg-slate-50 dark:bg-blue-950/40 border border-slate-200 dark:border-blue-900/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none text-slate-800 dark:text-white"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-500/25 w-full sm:w-auto"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </motion.section>
  );
};
