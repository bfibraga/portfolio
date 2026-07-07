import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useThemeStore } from "@/stores/theme";

type Theme = "dark";

interface ThemeProviderState {
  theme: Theme;
}

const ThemeProviderContext = createContext<ThemeProviderState>({ theme: "dark" });

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "system");
    document.documentElement.classList.add("dark");
  }, [theme]);

  return (
    <ThemeProviderContext value={{ theme }}>
      {children}
    </ThemeProviderContext>
  );
}

export const useTheme = () => useContext(ThemeProviderContext);

export function currentTheme(): Theme {
  return "dark";
}
