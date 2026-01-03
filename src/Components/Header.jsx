import { useState, useEffect } from "react";
import { Sun, Moon,ArrowDownToLine } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-tight dark:text-white mr-10">
          Dimeji.dev
        </h1>

       <div className="flex items-center space-x-10 ml-10">

  {/* NAVIGATION */}
  <nav className="hidden md:flex space-x-8 font-[var(--font-inter)]">
    {["Home", "Works", "About", "Contact"].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="relative group text-xl text-gray-700 dark:text-gray-300 transition hover:text-gray-500 dark:hover:text-gray-400"
      >
        {item}

        {/* DOT UNDERLINE */}
        <span
          className="
            absolute left-1/2 -translate-x-1/2
            bottom-[-6px]
            w-1.5 h-1.5
            rounded-full
            bg-black dark:bg-white
            scale-0
            transition-transform
            group-hover:scale-100
          "
        />
      </a>
    ))}
  </nav>

  {/* RESUME BUTTON */}
  <a
    href="/resume.pdf"
    target="_blank"
    className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-[var(--font-inter)]
               hover:opacity-80 transition flex items-center space-x-2"
  >
    <span>Resume</span>
    <ArrowDownToLine size={18} />
  </a>

  {/* DARK MODE BUTTON */}
  <button
    onClick={toggleDarkMode}
    className="p-2 hover:text-gray-500 dark:hover:text-gray-400 transition"
  >
    {darkMode ? (
      <Moon className="text-black dark:text-white" size={20} />
    ) : (
      <Sun className="text-yellow-500" size={20} />
    )}
  </button>

</div>


      </div>
    </header>
  );
}
