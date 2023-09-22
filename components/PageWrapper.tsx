"use client";
import { LightCheck } from "@/contexts/ThemeContext";
import React from "react";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      className={`md:px-5 sm:px-3 px-2 bg-gradient-to-b ${
        LightCheck()
          ? "from-custom-white to-border"
          : "from-custom-black to-custom-black"
      }`}
    >
      {children}
    </div>
  );
}
