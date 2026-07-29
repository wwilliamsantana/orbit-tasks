"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-xl p-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:hover:bg-slate-800 transition-colors dark:text-white hover:bg-slate-100"
    >
      <div className="transition-all duration-300 ease-in-out hover:rotate-12">
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </div>
    </button>
  );
}
