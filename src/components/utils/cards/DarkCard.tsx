import React from "react";

type CardTypes = {
  className?: string;
  children?: React.ReactNode;
};
export default function DarkCard({ className, children }: CardTypes) {
  return (
    <div
      className={`border-transparent border-[1.5px] min-[330px]:dark:border-slate-700 min-[330px]:dark:bg-gradient-to-br min-[330px]:dark:from-slate-800/50 min-[330px]:dark:to-custom-black/80 rounded-md min-[630px]:p-8 min-[330px]:p-5 min-[330px]:dark:backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}
