"use client";
import useThemeContext, { LightCheck } from "@/contexts/ThemeContext";
import React from "react";

type LandingPageProps = {
  children: React.ReactNode;
};

export default function LandingPage({ children }: LandingPageProps) {
  const { theme } = useThemeContext();
  return (
    <div
      className={`grid place-items-center min-h-screen bg-gradient-to-br ${
        LightCheck()
          ? "from-custom-white to-border"
          : "from-custom-black to-custom-black"
      }`}
    >
      {children}
    </div>
  );
}
