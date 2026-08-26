import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" || stored === "light" ? stored : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 rounded-full border border-border bg-card/90 backdrop-blur px-2 py-3 shadow-lg transition-colors"
    >
      <span
        className={`flex flex-col items-center gap-1 rounded-full px-1.5 py-2 text-[10px] font-semibold transition-colors ${
          theme === "light" ? "bg-foreground text-background" : "text-muted-foreground"
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
        <span className="[writing-mode:vertical-rl] rotate-180">Light</span>
      </span>
      <span
        className={`flex flex-col items-center gap-1 rounded-full px-1.5 py-2 text-[10px] font-semibold transition-colors ${
          theme === "dark" ? "bg-foreground text-background" : "text-muted-foreground"
        }`}
      >
        <span className="[writing-mode:vertical-rl] rotate-180">Dark</span>
        <Moon className="h-3.5 w-3.5" />
      </span>
    </button>
  );
};
