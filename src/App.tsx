import { useEffect } from "react";

import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { useTheme } from "./context/ThemeContext";

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      {/* Ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-300/30 dark:bg-blue-900/10 blur-[150px] mix-blend-screen transition-colors"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-300/30 dark:bg-cyan-900/10 blur-[150px] mix-blend-screen transition-colors"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] dark:opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <Navbar />

      <div
        className="pt-28 sm:pt-32 relative z-10 max-w-6xl mx-auto px-4 sm:px-6"
        id="home"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
