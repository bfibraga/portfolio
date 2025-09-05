import { Theme } from "@/lib/types";
import { create } from "zustand";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>()((set) => ({
  theme: (localStorage.getItem("vite-ui-theme") as Theme) || "system",
  setTheme: (theme: Theme) => {
    localStorage.setItem("vite-ui-theme", theme);
    console.log(theme);
    set({ theme });
  },
}));
