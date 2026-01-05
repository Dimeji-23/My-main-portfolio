import { useState, useEffect } from "react";
import { Sun, Moon, ArrowDownToLine, Menu, X } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = ["Home", "Works", "About", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">
          Dimeji.dev
        </h1>
        <div className="flex-1" />
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-8 font-[var(--font-inter)]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-lg text-gray-700 dark:text-gray-300 transition hover:text-gray-500 dark:hover:text-gray-400"
              >
                {item}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-1.5 h-1.5 rounded-full bg-black dark:bg-white scale-0 transition-transform group-hover:scale-100" />
              </a>
            ))}
          </nav>
          <a
            href="/resume.pdf"
            target="_blank"
            className="hidden sm:flex px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black
                       font-[var(--font-inter)] hover:opacity-80 transition items-center space-x-2"
          >
            <span>Resume</span>
            <ArrowDownToLine size={18} />
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:text-gray-500 dark:hover:text-gray-400 transition"
          >
            {darkMode ? (
              <Moon className="text-black dark:text-white" size={20} />
            ) : (
              <Sun className="text-yellow-500" size={20} />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300
              ${menuOpen ? "bg-white" : "bg-black"}
            `}
          >
            {menuOpen ? (
              <X size={22} className="text-black" />
            ) : (
              <Menu size={22} className="text-gray-400" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col px-6 py-6 space-y-6 font-[var(--font-inter)]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-xl text-gray-800 dark:text-gray-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
