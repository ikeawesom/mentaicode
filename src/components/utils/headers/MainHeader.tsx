"use client";
import { LightCheck } from "@/src/contexts/ThemeContext";
import React from "react";
import { twMerge } from "tailwind-merge";

type HeaderType = {
  className?: string;
  children?: React.ReactNode;
  headerLight?: "header-light" | "header-1" | "header-2" | "header-3";

  headerDark?: "header-dark" | "header-1" | "header-2" | "header-3";
};

export default function MainHeader({
  className,
  children,
  headerLight,
  headerDark,
}: HeaderType) {
  return (
    <h1
      className={twMerge(
        `${
          LightCheck() ? `${headerLight} drop-shadow-md` : headerDark
        } min-[1380px]:w-[1000px] lg:w-[800px] md:w-[620px] sm:w-[500px] max-[639px]:text-5xl max-[320px]:text-4xl text-center text-6xl relative`,
        className
      )}
    >
      {children}
    </h1>
  );
}
