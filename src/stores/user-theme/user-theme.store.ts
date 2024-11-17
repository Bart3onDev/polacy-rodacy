"use client";
import { create } from "zustand";

type Theme = "light" | "dark";

interface UserTheme {
  theme: Theme;
  actions: {
    setTheme: (theme: Theme) => void;
  };
}

const useUserThemeStore = create<UserTheme>((set) => ({
  theme: "light",
  actions: {
    setTheme: (themeInput: Theme) => set(() => ({ theme: themeInput })),
  },
}));

//hooks
export const useUserTheme = (): Theme =>
  useUserThemeStore((state) => state.theme);
export const useUserThemeActions = () =>
  useUserThemeStore((state) => state.actions);
