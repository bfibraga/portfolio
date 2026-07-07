import { create } from "zustand";

type MatrixStore = {
  color: string;
  backgroundColor: string;
  speed: number;
  setColor: (color: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  setSpeed: (speed: number) => void;
};

const defaultSettings = {
  color: "#00d4ff",
  backgroundColor: "transparent",
  speed: 25,
};

export const useMatrixStore = create<MatrixStore>((set) => ({
  color: defaultSettings.color,
  backgroundColor: defaultSettings.backgroundColor,
  speed: defaultSettings.speed,
  setColor: (color: string) => set({ color }),
  setBackgroundColor: (backgroundColor: string) => set({ backgroundColor }),
  setSpeed: (speed: number) => set({ speed }),
}));
