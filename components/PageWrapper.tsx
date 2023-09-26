"use client";
import { LightCheck } from "@/contexts/ThemeContext";
import React from "react";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      className={`p-8 xl:px-48 lg:px-36 md:px-28 sm:px-20 px-10 bg-gradient-to-b min-h-screen ${
        LightCheck()
          ? "from-custom-white to-border"
          : "from-custom-black to-custom-black"
      }`}
    >
      {children}
    </div>
  );
}
