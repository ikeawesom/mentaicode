"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ContextTypes = {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
};
type Themes = "dark" | "light";

type ProviderTypes = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ContextTypes | null>(null);

export function ThemeContextProvider({ children }: ProviderTypes) {
  const [theme, setTheme] = useState<Themes>("dark");

  useEffect(() => {
    const userPrefs = window.localStorage.getItem("theme");

    if (userPrefs === "dark") setTheme("dark");
    if (userPrefs === "light") {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeContextProvider");
  }
  return context;
}

export function LightCheck() {
  const { theme } = useThemeContext();
  return theme === "light";
}
