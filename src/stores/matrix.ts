import { MatrixRainingBackgroundProps } from "@/components/matrix-raining-background";
import { Theme } from "@/lib/types";
import { create } from "zustand";

type MatrixStore = {
    // yapanese: boolean;
    // color: string;
    // backgroundColor: string;
    // speed: number;
    // density: number;
    setYapanese: (yapanese: boolean) => void;
    setColor: (color: string) => void;
    setBackgroundColor: (backgroundColor: string) => void;
    setSpeed: (speed: number) => void;
    setDensity: (density: number) => void;
} & MatrixRainingBackgroundProps;

const defaultSettings = {
    yapanese: false,
    color: { light: "#08f", dark: "#0ff" },
    backgroundColor: { light: "rgba(255, 255, 255, 0.44)", dark: "rgba(0, 0, 0, 0.04)" },
    speed: 25,
    density: 20,
}

export const useMatrixStore = (theme: Theme) => create<MatrixStore>()((set) => ({
    yapanese: defaultSettings.yapanese,
    color: defaultSettings.color[theme as 'light' | 'dark'],
    backgroundColor: defaultSettings.backgroundColor[theme as 'light' | 'dark'],
    speed: defaultSettings.speed,
    density: defaultSettings.density,
    setYapanese: (yapanese: boolean) => set({ yapanese }),
    setColor: (color: string) => set({ color }),
    setBackgroundColor: (backgroundColor: string) => set({ backgroundColor }),
    setSpeed: (speed: number) => set({ speed }),
    setDensity: (density: number) => set({ density }),
}));