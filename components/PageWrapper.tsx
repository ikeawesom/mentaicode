"use client";
import { LightCheck } from "@/contexts/ThemeContext";
import React from "react";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      className={`p-8 px-48 bg-gradient-to-b min-h-screen ${
        LightCheck()
          ? "from-custom-white to-border"
          : "from-custom-black to-custom-black"
      }`}
    >
      {children}
    </div>
  );
}
