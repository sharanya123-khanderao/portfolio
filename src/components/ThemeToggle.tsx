import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/components/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
