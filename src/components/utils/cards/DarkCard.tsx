"use client";
import React from "react";
import { LightCheck } from "@/src/contexts/ThemeContext";
import { twMerge } from "tailwind-merge";

type CardTypes = {
  className?: string;
  children?: React.ReactNode;
  force?: boolean;
};
export default function DarkCard({ className, children, force }: CardTypes) {
  return (
    <div
      className={twMerge(
        `border-transparent border-[1.5px] min-[330px]:dark:border-slate-700 min-[330px]:dark:bg-gradient-to-br min-[330px]:dark:from-slate-800/50 min-[330px]:dark:to-custom-black/80 rounded-md min-[630px]:p-8 min-[330px]:p-5 min-[330px]:dark:backdrop-blur-2xl`,
        force && LightCheck() ? "bg-white shadow-md" : "",
        className
      )}
    >
      {children}
    </div>
  );
}
