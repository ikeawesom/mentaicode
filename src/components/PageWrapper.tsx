"use client";
import { LightCheck } from "@/src/contexts/ThemeContext";
import React from "react";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      className={`p-8 xl:px-48 lg:px-32 md:px-24 sm:px-20 px-6 bg-gradient-to-b min-h-screen ${
        LightCheck()
          ? "from-custom-white to-border"
          : "from-custom-black to-custom-black"
      }`}
    >
      {children}
    </div>
  );
}
